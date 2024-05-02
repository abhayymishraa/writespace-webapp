'use client'
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 xs:text-lg text-base sm:text-xl font-medium leading-relaxed font-in '>
      Hello! My name is <input type="text" placeholder="Your Name" {...register("Name", {required: true})}  className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent'/>
      and i want to discuss a potential project. You can email me at <input type="email" placeholder="Your Email" {...register} className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
      or reachout to me on <input type="tel" placeholder="Your Phone Number" {...register("Phone Number", {})} className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />
     Here are some details about me: <br /><textarea {...register("Project Details", {})} rows={3} placeholder='My reason for contacing is...'
     className='w-full marker:outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray focus:border-gray bg-transparent' />

      <input type="submit" value={"Send Request"} className='mt-8 font-medium inline-block capitalize sm:text-xl text-lg py-2  sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer' />
    </form>
  );
}