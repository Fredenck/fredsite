import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link className="underline" href={href as string}>{children}</Link>,
    img: ({ src, children }) => <img className="justify-center w-1/2 object-scale-down rounded-lg" src={src as string}>{children}</img>,
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