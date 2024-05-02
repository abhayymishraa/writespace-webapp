import AboutCover from '@/src/components/About/AboutCover'
import Skills from '@/src/components/About/Skills'
import Link from 'next/link'


export const metadata = {
  title: "About Me",
  description: "Here are some details about me and my skills.",
}



const AboutPage = () => {

  return (
    <div>
      <AboutCover />
      <Skills />
      <h2 className='mt-8  font-semibold text-lg md:text-2xl text-center sm:self-start  mx-5 xs:mx-10 sm:mx-12 lg:mx-20  text-dark dark:text-light'>
        Reach out to me 📞 from <Link href={"/contact"} className='!underline underline-offset-2 text-accent dark:text-accentDark' >here</Link>
      </h2>
    </div>
  )
}

export default AboutPage