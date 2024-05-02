import { format, parseISO } from 'date-fns'
import { slug } from 'github-slugger'
import Link from 'next/link'
import ViewCounter from './ViewCounter'

const BlogDetails = ({ blog, slug: blogSlug }) => {
    return (
        <div className='md:px-10 px-1 bg-accent dark:bg-accentDark  dark:text-dark text-light flex items-center justify-center sm:justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 sm:mx-10 rounded-lg'>
            <time className='m-3'>
                {
                    format(parseISO(blog.publishedAt), 'LLLL d, yyyy')
                }
            </time>
            <span className='m-3'>
                <ViewCounter slug={blogSlug} />
            </span>
            <Link href={`/categories/${slug(blog.tags[0])}`} className='m-3'>
                #{blog.tags[0]}
            </Link>
        </div>
    )
}

export default BlogDetails