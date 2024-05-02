
import Image from 'next/image'
import Link from 'next/link'
import profileImg  from '@/public/profile-img.png'


const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark dark:text-light'>
        <div className=' md:w-16 w-12 rounded-full overflow-hidden border  border-solid border-dark dark:border-gray mr-2 md:mr-4' >
            <Image src={profileImg} alt="logo" className='w-full h-auto rounded-full' sizes='33vw'     priority />
        </div>
        <span className='font-bold dark:font-semibold  text-lg md:text-xl' >WriteSpace</span>
        </Link>
  )
}

export default Logo