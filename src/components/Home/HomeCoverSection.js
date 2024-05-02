import { sortBlogs } from '@/src/utils'
import Image from 'next/image'
import Link from 'next/link'
import Tag from '../Elements/tag'
import { slug } from 'github-slugger'

const HomeCoverSection = ({ blogs }) => {


  const sortedBlogs = sortBlogs(blogs)
  const blog = sortedBlogs[0]

  return (
    <div className='w-full inline-block' >
      <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh]  sm:h-[85vh]'  >
        < div className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90  rounded-3xl z-0     ' />
        <Image src={blog.image.filePath.replace("../public", "")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          priority
          className='w-full h-full object-center object-cover rounded-3xl -z-10 '
        />
        <div className='lg:w-3/4 w-full sm:p-8  p-6 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light' >
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} className='mb-4' />
          <Link href={blog.url} className="mt-6">
            <h1 className='font-bold capitalize lg:text-4xl sm:text-xl text-lg  md:text-3xl '>
              <span className='bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] dark:from-accentDark/50 dark:to-accentDark/50 bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>  {blog.title}</span>
            </h1>
          </Link>
          <p className=' mt-4 lg:text-xl md:text-lg sm:inline-block hidden font.in'>
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection