import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'


const BlogLayoutThree = ({ blog }) => {
  return (
    <div className='group flex  flex-col items-center text-dark dark:text-light'>
      <Link href={blog.url} className='h-full rounded-xl overflow-hidden'>
        <Image src={blog.image.filePath.replace("../public", "")}
          placeholder='blur'
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          sizes=" (max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
          className=' aspect-[4/3] w-full h-full object-cover  object-center group-hover:scale-105 transition-all ease duration-300'

        />
      </Link>
      <div className='flex flex-col  w-full mt-4' >

        <span className='uppercase dark:text-accentDark text-accent font-semibold text-xs sm:text-sm ='>{blog.tags[0]}</span>
        <Link href={blog.url} className='inline-block my-1  '>
          <h2 className='font-semibold capitalize  text-base sm:text-lg  '>
            <span className='bg-gradient-to-r from-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 to-accent/50 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>  {blog.title}</span>
          </h2>
        </Link>
        <span className='capitalize text-dark/50 dark:text-light/50 font-semibold sm:text-base text-xs '>
          {format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutThree 