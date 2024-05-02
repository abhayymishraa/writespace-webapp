
const Insight = ({ insights }) => {
    return (
        <div className='w-full bg-accent dark:bg-accentDark dark:text-dark text-light whitespace-nowrap overflow-hidden'>
            <div className=' animate-roll w-full  py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider sm:text-base text-sm'>
                {
                    insights.map((text) => (
                        <div className='mx-4'>{text}<span className='px-4'>|</span>{" "}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Insight