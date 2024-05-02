import { cx } from '@/src/utils'
import Link from 'next/link'


const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link href={link} className={cx("inline-block sm:py-3 py-2  px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border border-solid border-light hover:scale-105 transition-all ease duration-200 sm:text-base text-sm", props.className)} >
      {name} </Link>
  )
}

export default Tag