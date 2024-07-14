import type { Metadata } from 'next'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from "app/mdx-components"
import { notFound } from 'next/navigation'

/*
I've tried using next/mdx: https://nextjs.org/docs/app/building-your-application/configuring/mdx
However, next/mdx doesn't support parsing frontmatter, so I'd have to use the gray-matter package.

I think I still overall like contentlayer because you can define the metadata and files parsed.
Plus, I struggled getting a static site with next/mdx and my /blog/[slug]/page.tsx required:

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)

In contrast, contentlayer does all of this at build time, creating a JSON which is quite nice.
Currently have Static Site Generation (SSG) for most pages and Server-Side Rendering (SSR) for dynamic blog pages
 */

// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'My thoughts, interests, and more',
// };

// generates pages on build time
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  // throwing Error is for error.js; we can just use notFound here
  // if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  if (!post) notFound()
  return { title: post.title, description: post.description, date: post.date}
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  return (
    <article className="py-8 flex justify-center">
      <div className='w-10/12 lg:w-7/12'>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-xs mb-1 text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.description && (
          <p className="text-s">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={post.body.code} ></Mdx>
      </div>
    </article>
  )
}

export default PostLayout