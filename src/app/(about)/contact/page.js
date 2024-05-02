
import ContactForm from "@/src/components/Contact/ContactForm"
const DynamicLottieAnimation = dynamic(() => import('@/src/components/Contact/LottieAnimation'), {
  ssr: false
});
import siteMetadata from "@/src/utils/siteMetadata"
import dynamic from "next/dynamic";




export const metadata = {
  title: "Contact Me",
  description: `Contact me through this form or email me at ${siteMetadata.email}`,
}

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light dark:text-light flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="inline-block w-full sm:4/5 md:w-2/5 h-full md:border-r-2 border-dark dark:border-light border-solid "> <DynamicLottieAnimation /> </div>
      <div className=" w-full md:w-3/5 flex flex-col items-start justify-centern px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize  xs:text-3xl text-2xl sm:text-4xl">Let's Connect!!!</h2>
        <ContactForm />
      </div>
    </section>
  )
}

