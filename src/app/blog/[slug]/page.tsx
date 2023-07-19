import type { Metadata } from 'next'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from "mdx-components"

// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'My thoughts, interests, and more',
// };

async function getPostFromParams(params: { slug: string } ) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) {
    null
  }

  return post
}

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title, description: post.description, date: post.date}
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="px-96 pt-8 pb-24">
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
      <div className='font-serif'>
        <Mdx code={post.body.code} ></Mdx>
      </div>
      {/* <p className='font-serif'>{post.body.raw}</p> */}
      {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0 font-serif" dangerouslySetInnerHTML={{ __html: post.body.raw }} /> */}
    </article>
  )
}

export default PostLayout