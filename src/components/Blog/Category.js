import { cx } from '@/src/utils'
import Link from 'next/link'


const Category = ({link="#",active,name,...props}) => {
  return (
    <Link href={link} className={cx("inline-block md:py-2 py-1.5 md:px-10 px-6 rounded-full font-semibold border border-solid border-dark  dark:border-light hover:scale-105 transition-all ease duration-200 m-4",props.className,
    active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light dark:bg-dark dark:text-light text-dark"
    )} >
    #{name} </Link>
  )
}

export default Category