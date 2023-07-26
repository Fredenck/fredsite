import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

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

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
    // Override the default <a> element to use the next/link component.
    a: ({ href, children }) => <Link className="underline" href={href as string}>{children}</Link>,
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