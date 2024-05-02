

import BlogDetails from '@/src/components/Blog/BlogDetails'
import RenderMDX from '@/src/components/Blog/RenderMDX'
import Tag from '@/src/components/Elements/tag'
import siteMetadata from '@/src/utils/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import Image from 'next/image'
import { notFound } from 'next/navigation'



export async function generateStaticParams() {
    return allBlogs.map((blog) => (blog._raw.flattenedPath))
}


export async function generateMetadata({ params }) {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)
    if(!blog){
        notFound()
      }

    const publishedTime = new Date(blog.publishedAt).toISOString()

    const modifiedTime = new Date(blog.updatedAt || blog.publishedAt).toISOString()

    let imageList = [siteMetadata.socialBanner]

    if (blog.image) {
        imageList = typeof blog.image.filePath === 'string' ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")] : blog.image
    }

    const ofImages = imageList.map(image => {

        return { url: image.includes('http') ? image : siteMetadata.siteUrl + image }

    })

    const authors = blog?.authors ? [blog.authors] : siteMetadata.author



    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            url: siteMetadata.siteUrl + blog.url,
            siteName: siteMetadata.title,
            locale: 'en_US',
            type: 'article',
            publishedTime: publishedTime,
            modifiedTime: modifiedTime,
            images: ofImages,
            authors: authors.length > 0 ? authors : [siteMetadata.author],
            twitter: {
                card: 'summary_large_image',
                title: blog.title,
                description: blog.description,
                images: ofImages, // Must be an absolute URL
            },
        },
    }
}



const BlogPage = ({ params }) => {
    const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug)

    let imageList = [siteMetadata.socialBanner]

    if (blog.image) {
        imageList = typeof blog.image.filePath === 'string' ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")] : blog.image
    }



    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": blog.title,
        "description": blog.description,
        "image": imageList,
        "datePublished": new Date(blog.publishedAt).toISOString(),
        "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
        "author": [{
            "@type": "Person",
            "name": blog?.authors ? [blog.authors] : siteMetadata.author,
            "url": siteMetadata.siteUrl + blog.url
        }]
    }
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article>
                <div className='mb-8 text-center relative w-full  h-[70vh] bg-dark'>
                    <div className='w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 '>
                        <Tag name={slug(blog.tags[0])} link={`/categories/${slug(blog.tags[0])}`} className="px-6 text-sm py-2" />
                        <h1 className='inline-block mt-6 font-semibold capitalize text-light md:text-3xl text-2xl lg:text-5xl  leading-normal relative w-5/6'>
                            {blog.title}
                        </h1>
                    </div>
                    <div className='absolute top-0 left-0 right-0 bottom-0 h-full dark:bg-dark/40 bg-dark/60' />

                    <Image src={blog.image.filePath.replace("../public", "")}
                        placeholder='blur'
                        blurDataURL={blog.image.blurhashDataUrl}
                        alt={blog.title}
                        width={blog.image.width}
                        height={blog.image.height}
                        priority
                        sizes='100vw'
                        className=' aspect-[4/3] w-full h-full object-cover  object-center'

                    />
                </div>
                <BlogDetails blog={blog} slug={params.slug} />
                <div className='grid grid-cols-12 sxl:gap-16 lg:gap-8 gap-y-8 mt-8 px-5 md:px-10 '>
                    <div className=' col-span-12 lg:col-span-4'>
                        <details className='border-[1px] border-solid dark:border-light dark:text-light border-dark text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto ' open>
                            <summary className='text-lg font-semibold capitalize cursor-pointer'>Table of Content</summary>
                            <ul className='mt-4 font-in text-base'>
                                {
                                    blog.toc.map((heading) => {
                                        return <li key={`#${heading.slug}`} className='py-1'>
                                            <a href={`#${heading.slug}`} data-level={heading.level}
                                                className='data-[level=two]:pl-0 data-[level=two]:pt-2 data-[level=two]:border-t border-solid border-dark/40  
                                            data-[level=three]:pl-4   sm:data-[level=three]:pl-6  
                                        flex items-center justify-start'>
                                                {heading.level === "three" ? <span className='flex w-1 h-1 rounded-full bg-dark mr-2'>&nbsp;</span> : null}
                                                <span className='hover:underline'>{heading.text}</span>
                                            </a>
                                        </li>
                                    })
                                }
                            </ul>
                        </details>
                    </div>
                    <RenderMDX blog={blog} />
                </div>
            </article>
        </>

    )
}

export default BlogPage