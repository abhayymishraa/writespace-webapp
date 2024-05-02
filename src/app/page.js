import { allBlogs } from 'contentlayer/generated'
import RecentPost from '../components/Home/RecentPost'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeaturedPost from '../components/Home/FeaturedPost'
import MobileSidebar from '../components/Elements/MobileSidebar'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <HomeCoverSection blogs={allBlogs} />
      <MobileSidebar />
      <FeaturedPost blogs={allBlogs} />
      <RecentPost blogs={allBlogs} />
    </main>
  )

}