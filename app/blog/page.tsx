'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { useEffect, useState } from 'react'
 
// export const metadata: Metadata = {
//   title: 'Blog',
//   description: 'My thoughts, interests, and more',
// };

const PostCard = (post: Post) => {
  return (
    <div className='w-full'>
      <Link 
      href={post.url}
      className='block !w-full p-4 mb-1 w-max rounded-lg hover:bg-slate-200/50'>
        <h2 className="mb-1 text-l">
          {post.title}
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-slate-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <p className='text-sm text-slate-500'>{post.description}</p>
        {/* <div className="text-sm" dangerouslySetInnerHTML={{ __html: post.description}} /> */}
      </Link>
    </div>
  )
}

// 08/22: to store posts in a state as a client component and remove async
const BlogPage = () => {
  const [category, setCategory] = useState('all')

  const posts = allPosts.sort((a:Post, b:Post) => compareDesc(new Date(a.date), new Date(b.date)))

  // each post's category field: 'memories, all' 'all' 'thoughts, all' ...
  const categories = [...new Set(posts.flatMap(({ category }) => category.split(',')))].sort()

  return (
    <div className="py-8 px-16 md:px-48 lg:px-96 font-sans">
      <div className="mb-4">
        <h1 className='text-2xl font-bold'>Blog</h1>
      </div>

      <div>
        {categories.map((category, idx) => 
        <button className='p-4' key={idx} onClick={() => setCategory(category)}>
          {category}
        </button>)
        }
      </div>

      <div className=''>
        {posts.map((post, idx) => (
          post.category.includes(category) && <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}

export default BlogPage