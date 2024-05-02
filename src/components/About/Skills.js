const SkillList = [
  "next.js",
  "tailwind css",
  "figma",
  "javaScript",
  "web design",
  "Gatsby.js",
  "strapi",
  "firebase",
  "generative AI",
  "wireframing",
  "SEO",
  "framer motion",
  "sanity",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col md:p-16 sm:p-12 xs:p-10 p-5 lg:p-20 border-b-2 border-solid dark:border-light dark:text-light border-dark text-dark">
      <span className="font-semibold sm:text-3xl text-lg md:text-4xl text-accent dark:text-accentDark">I'm comfortable in...</span>
      <ul className="flex flex-wrap mt-8 sm:justify-start justify-center">
        {SkillList.map((skill, index) => (
          <li key={index} className="font-semibold inline-block capitalize sm:text-xl xs:text-lg text-base dark:font-normal md:text-2xl py-5 sm:px-8 xs:px-6 px-4 lg:px-16 border-2 border-solid dark:border-light border-dark rounded md:mr-6 md:mb-6 mr-3 mb-3 xs:mr-4 xs:mb-4 hover:scale-105 transition-all ease duration-200 cursor-pointer">
            {skill}
          </li>
        ))}

      </ul>
    </section>
  )
}

export default Skills