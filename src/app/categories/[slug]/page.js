import { allBlogs } from '@/.contentlayer/generated'
import BlogLayoutThree from '@/src/components/Blog/BlogLayoutThree'
import Categories from '@/src/components/Blog/Categories'
import GithubSlugger, { slug } from 'github-slugger'




const slugger = new GithubSlugger()
export async function generateStaticParams() {
  const categories = []
  const path = [{ slug: "all" }]

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag)
        if (!categories.includes(slugified)) {
          categories.push(slugified)
          path.push({ slug: slugified })
        }
      })

    }
  })

  return path;
}


export async function generateMetadata({ params }) {


  return {
    title: `${params.slug.replaceAll("-", " ")}  Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} with our latest blogs`,
  }
}








const CategoryPage = ({ params }) => {
  const allCategories = ["all"]
  const blog = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag)
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified)
      }
      if (params.slug === "all") {
        return true
      }
      return slugified === params.slug
    })
  })
  return (
    <article className='mt-12 flex flex-col dark:text-light text-dark'>
      <div className='sxl:px-32 md:px-24 px-5 sm:px-10 flex flex-col'>
        <h1 className='mt-6 md:text-4xl text-2xl lg:text-5xl'>
          #{params.slug}
        </h1>
        <span className='mt-2 inline-block'>Discover more categories and expand your knowledge</span>
        <Categories categories={allCategories} currentSlug={params.slug} />
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-16 md:mt-24 sm:mt-10 mt-5 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32'>{
          blog.map((blog, index) => <article key={index} className='col-span-1 row-span-1 relative'>
            <BlogLayoutThree blog={blog} />
          </article>
          )
        }

        </div>
      </div>
    </article>
  )
}

export default CategoryPage