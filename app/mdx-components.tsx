import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from "clsx"

// @ts-ignore
// TODO: React Hydration Error
const RImage = (props) => {
  return (
    <div className="flex justify-center">
      <img
      alt={props.alt || "Image"}
      className='rounded-lg w-4/6'
      {...props}
      ></img>
    </div>
  )
}

// @ts-ignore
const RoundedImage = (props) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link className="underline" href={href as string}>{children}</Link>,
    img: ({ src, children }) => <img className="w-4/6 mx-auto rounded-lg" src={src as string}>{children}</img>,
    // img: (props) => <Image {...props} layout="responsive" loading="lazy" width={300} height={300}/>,
    // img: Image,
    // img: RImage,
    // img: RoundedImage,
    // img: ({ src, children }) => <div className="flex justify-center"><Image className="rounded-lg" alt="alt" src={src as string} width={500} height={500}>{children}</Image></div>,
    h1: (props) => <h1 className="text-2xl" {...props} />,
    h2: (props) => <h2 className="text-xl" {...props} />,
    h3: (props) => <h3 className="text-lg" {...props} />,
    ul: (props) => <ul className="list-disc marker:text-slate-700" {...props}>{props.children}</ul>,
    ol: (props) => <ul className="list-decimal" {...props}>{props.children}</ul>,
    // li: ({ className, ...props }) => (
    //   <li className={twMerge(clsx("mt-2", className))} {...props} />
    // ),
    // Add a custom component.
    MyComponent: () => <div>Hello World!</div>,
  }

export const Mdx = ({ code }: {code: string}) => {
  const Component = useMDXComponent(code)

  return (
    <article className= 'prose prose-slate max-w-none'>
        <Component components={mdxComponents} />
    </article>
  )
}