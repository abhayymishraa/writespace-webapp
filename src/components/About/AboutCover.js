import Image from 'next/image'
import profileCharacter from '@/public/character.png'

const AboutCover = () => {
  return (
    <section className='w-full  md:h-[75vh] border-b-2 border-solid dark:border-light dark:text-light border-dark flex flex-col md:flex-row items-center justify-center text-dark'>
        <div className=' w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex  justify-center'>
            <Image src={profileCharacter} alt='Abhay' className='md:w-full xs:w-3/4 w-4/5 h-full object-contain object-center'priority    sizes=" (max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw" />
        </div>
        <div className=' w-full md:w-1/2 flex flex-col text-left items-start justify-center pt-10 px-5 sx:p-10 pb-10 lg:px-16 '>
            <h2 className='font-bold capitalize sxl:text-6xl xs:text-5xl text-4xl text-center lg:text-left '>
            Dream Big, Work Hard, Achieve More!

            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.

            </p>
        </div>

        </section>
  )
}

export default AboutCover