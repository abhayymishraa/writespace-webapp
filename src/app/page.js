import { allBlogs } from 'contentlayer/generated'
import RecentPost from '../components/Home/RecentPost'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPost from '../components/Home/FeaturedPost'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </main>
  )

}