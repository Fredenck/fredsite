import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link className="underline" href={href as string}>{children}</Link>,
    img: ({ src, children }) => <img className="w-1/4 rounded-lg" src={src as string}>{children}</img>,
    // img: ({ src, children }) => <section className="flex justify-center w-1/4"><img className="rounded-lg" src={src as string}>{children}</img></section>,
    // Image: ({ src, children }) => <Image className="justify-center w-1/4 object-scale-down rounded-lg" alt="alt" src={src as string}>{children}</Image>,
    h1: (props) => <h1 className="text-2xl" {...props} />,
    h2: (props) => <h2 className="text-xl" {...props} />,
    h3: (props) => <h3 className="text-lg" {...props} />,
    // Add a custom component.
    MyComponent: () => <div>Hello World!</div>,
  }

// "code": "var Component=(()=>{var ur=Object.create;var I=Object.defineProperty;var 
// lr=Object.getOwnPropertyDescriptor;var fr=Object.getOwnPropertyNames;var 
// cr=Object.getPrototypeOf,dr=Object.prototype.hasOwnProperty;var G=(l,a)=>()=>(a||l((a={exports:..."
export function Mdx({ code }: {code: string}) {
  const Component = useMDXComponent(code)

  return (
    <article className="">
        <Component components={mdxComponents} />
    </article>
  )
}