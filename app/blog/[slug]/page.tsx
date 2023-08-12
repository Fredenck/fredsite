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
 */

// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'My thoughts, interests, and more',
// };

// generates pages on build time
export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title, description: post.description, date: post.date}
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()

  return (
    <article className="px-12 md:px-36 lg:px-72 pt-8 pb-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <time dateTime={post.date} className="text-xs mb-1 text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        {post.description && (
          <p className="text-xs">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
      </div>
      <div className='font-serif text-base'>
        <Mdx code={post.body.code} ></Mdx>
      </div>
    </article>
  )
}

export default PostLayout