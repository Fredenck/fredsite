import type { Metadata } from 'next'
import Link from 'next/link'
import fs from 'fs'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
 
export const metadata: Metadata = {
  title: 'Blog',
  description: 'My thoughts, interests, and more',
};

function getSlugs(){
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const posts = files.filter((file) => file.endsWith('.md'))
  const slugs = posts.map((file) => file.replace('.md', ''))
  return slugs
}

// modified from https://dev.to/codingnninja/how-to-extract-title-description-or-metadata-from-markdown-3nn8
function extractMetadataFromMarkdown(markdown:string) {
  const charactersBetweenGroupedHyphens = /^---([\s\S]*?)---/;
  const metadataMatched = markdown.match(charactersBetweenGroupedHyphens);

  if (!metadataMatched) return {};
  const metadata = metadataMatched[1];

  if (!metadata) {
    return {};
  }

  const metadataLines = metadata.split("\n");
  const spl = metadataLines.map((line:string) => (
    [line.substring(0, line.indexOf(': ')), line.substring(line.indexOf(': ') + 2, line.length)]
  ))

  return spl
};

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
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
  const slugs = getSlugs()
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">My Blog</h1>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
    // <div>
    //   <h1 className="font-bold text-2xl mb-8 tracking-tighter">read my blog</h1>
    //   {posts.map((post) => (
    //     <Link
    //     key={post._id}
    //     className="flex flex-col space-y-1 mb-4"
    //     href={`/blog/${post._id}`}
    //   >
    //     <div className="w-full flex flex-col">
    //       <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
    //         {post.title}
    //       </p>
    //     </div>
    //   </Link>
    //   ))}
    // </div>
  )
}

// async function getPosts() {
//   const res = await fetch('../../../posts/ssg-ssr.md',
//     {
//       next: {
//         revalidate: 5,
//       },
//     }
//   )
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
  
//   return res.json()
// }