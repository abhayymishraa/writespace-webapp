
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({categories,currentSlug}) => {
  return (
    <div className='sxl:px-20 px-0 md:px-10 mt-10 border-t-2 text-dark dark:text-light dark:border-light border-b-2 border-dark border-solid py-4 flex items-start flex-wrap font-medium mx-2  md:mx-8'>
        {
            categories.map(cat=> <Category key={cat} link={`/categories/${cat}`} name={cat} 
            active={currentSlug === slug(cat)}
            />)
        }

        </div>
  )
}

export default Categories