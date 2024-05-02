
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/src/components/icons'
import siteMetadata from '@/src/utils/siteMetadata'



export default function MobileSidebar() {


    return (

        <div className= ' absolute sm:hidden h-auto w-auto right-0 bottom-1/2 flex flex-col z-50 ' >
            <a href={siteMetadata.linkedin} className={"inline-block w-6 h-6 mb-2 mr-4"}  ><LinkedinIcon className={"hover:scale-125 transition-all ease duration-200"} /></a>
            <a href={siteMetadata.twitter} className={" inline-block w-6 h-6 mr-4 mb-2"} ><TwitterIcon className={"hover:scale-125 transition-all ease duration-200"} /></a>
            <a href={siteMetadata.github} className={" inline-block w-6 h-6 dark:fill-light mr-4 mb-2"} ><GithubIcon className={"hover:scale-125 transition-all ease duration-200"} /></a>
        </div>
    )

}


