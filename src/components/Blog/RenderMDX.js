'use client'
import {useMDXComponent} from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponent  = {
   Image
}


const RenderMDX = ({blog}) => {
    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max dark:prose-invert dark:prose-blockquote:accent-accentDark dark:prose-blockquote:bg-accentDark/20 prose-blockquote:bg-accent/20 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-accent 
     dark:prose-blockquote:border-accentDark dark:prose-li:marker:text-accentDark prose-blockquote:not-italic prose-blockquote:rounded-r-lg
    prose-li:marker:text-accent sm:first-letter:text-5xl first-letter:text-3xl '>
          <MDXContent components={mdxComponent} />
    </div>
  )
}

export default RenderMDX