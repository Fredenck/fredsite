import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ClassValue, clsx } from "clsx"

// @ts-ignore
// React Hydration error: Contentlayer likely wraps this around a <p> tag and you can't have <div> inside <p>
function RImage(props) {
  return (
    <div className="flex justify-center m-8">
      <Image
      {...props}
      alt={props.alt || "Image"}
      className='rounded-lg'
      width={500}
      height={500}
      />
    </div>
  )
}

// @ts-ignore
function CustomLink(props) {
  const href = props.href;
  return (
    <Link
    {...props}
    className='underline'
    >
      {props.children}
    </Link>
  )
};

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    // a: ({ href, children }) => <Link className="underline" href={href as string}>{children}</Link>,
    a: CustomLink,
    // img: ({ src, children }) => <img className="w-1/3 rounded-lg" src={src as string}>{children}</img>,
    // img: (props) => <Image {...props} layout="responsive" loading="lazy" width={300} height={300}/>,
    // img: Image,
    img: RImage,
    // img: (props) => (
    //   // height and width are part of the props, so they get automatically passed here with {...props}
    //   <Image {...props} layout="responsive" loading="lazy" />
    // ),
    // img: ({ src, children }) => <div className="flex justify-center"><Image className="rounded-lg" alt="alt" src={src as string} width={500} height={500}>{children}</Image></div>,
    h1: (props) => <h1 className="text-2xl" {...props} />,
    h2: (props) => <h2 className="text-xl" {...props} />,
    h3: (props) => <h3 className="text-lg" {...props} />,
    // ul: (props) => <ul className="list-disc" {...props}/>,
    // li: (props) => <li className="list-disc" {...props}/>,
    // ul: ({ className, ...props }) => (
    //   <ul className={`my-6 ml-6 list-disc ${className}`} {...props} />
    // ),
    // ul: ({ className, ...props }) => (
    //   <ul className={"my-6 ml-6 list-disc" + className} {...props} />
    // ),
    ul: (props) => <ul className="my-6 ml-6 list-disc list-inside" {...props}>{props.children}</ul>,
    // ul: ({ className, ...props }) => (
    //   <ul className={twMerge(clsx("my-6 ml-6 list-disc", className))} {...props} />
    // ),
    ol: ({ className, ...props }) => (
      <ol className={twMerge("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={twMerge(clsx("mt-2", className))} {...props} />
    ),
    // Add a custom component.
    MyComponent: () => <div>Hello World!</div>,
  }

// "code": "var Component=(()=>{var ur=Object.create;var I=Object.defineProperty;var 
// lr=Object.getOwnPropertyDescriptor;var fr=Object.getOwnPropertyNames;var 
// cr=Object.getPrototypeOf,dr=Object.prototype.hasOwnProperty;var G=(l,a)=>()=>(a||l((a={exports:..."
export function Mdx({ code }: {code: string}) {
  const Component = useMDXComponent(code)

  return (
    <article className= 'prose prose-a:underline'>
        <Component components={mdxComponents} />
    </article>
  )
}