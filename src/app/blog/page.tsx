import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
 
export const metadata: Metadata = {
  title: 'Blog',
  description: 'My thoughts, interests, and more',
};

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-l">
        <Link href={post.url}>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p className='text-sm'>{post.description}</p>
      {/* <div className="text-sm" dangerouslySetInnerHTML={{ __html: post.description}} /> */}
    </div>
  )
}

export default async function BlogPage() {
  const posts = allPosts.sort((a:any, b:any) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div className="py-8 px-96 font-sans">
      <div className="mb-8">
        <h1 className='text-2xl font-bold'>Blog</h1>
      </div>
      <div className=''>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}