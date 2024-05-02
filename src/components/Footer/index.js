"use client"

import { useForm } from 'react-hook-form';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';
import Link from 'next/link';
import siteMetadata from '@/src/utils/siteMetadata';


const Footer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (

        <footer className='mt-16 rounded-2xl dark:bg-accentDark/90 bg-dark m-2 sm:m-10 flex flex-col items-center dark:text-dark text-light'>
            <h3 className='mt-16 dark:font-bold font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4'>
                Interesting Stories | Updates | Guides
            </h3>
            <p className='mt-5 px-4 text-center w-full sm:w-3/5 dark:font-medium font-light text-sm sm:text-base'>
                Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 w-fit sm:min-w-[384px] flex  items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx-4'>
                <input type="email" placeholder="Enter your email" {...register("Email", { required: true, maxLength: 80 })} className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-2 sm:pl-0' />

                <input type="submit" className='bg-dark dark:bg-light dark:text-dark  text-light cursor-pointer font-medium rounded  px-3 sm:px-5 py-1 ' />
            </form>
            <div className='flex items-center mt-8'>
                <a href={siteMetadata.linkedin} className={" inline-block w-6 h-6 mr-4"}  ><LinkedinIcon className={"hover:scale-125 transition-all ease duration-200"} /></a>
                <a href={siteMetadata.twitter} className={" inline-block w-6 h-6 mr-4"} ><TwitterIcon className={"hover:scale-125 transition-all ease duration-200"} /></a>
                <a href={siteMetadata.github} className={" inline-block w-6 h-6 mr-4"} ><GithubIcon className={"hover:scale-125 transition-all ease duration-200 dark:fill-dark fill-light"} /></a>
            </div>

            <div className='w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col  sm:flex-row items-center justify-between'>
                <span className='text-center'>&copy;All rights reserved. </span>
                <Link className='text-center my-4 sm:py-0 underline' href={"/sitemap.xml"}>
                    sitemap.xml
                </Link>

            </div>


        </footer>
    )
}

export default Footer



// Interesting Stories | Updates | Guides
// Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
// © 2023 CodeBucks. All rights reserved.
// Made with ❤ by CodeBucks
