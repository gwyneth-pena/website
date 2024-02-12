
export default function Hero(){
    return <>
        <div id="about" className="flex justify-between py-10 px-10 flex-col-reverse md:flex-row">
            <div className="w-full flex flex-col align-middle justify-start content-center md:w-50 md:px-10 md:py-10">
                <h2 className="text-normal font-medium text-2xl md:text-7xl">Hello!</h2>
                <p className="my-3 md:my-20">I am Gwyneth Christine M. Peña. Currently, I am a software engineer working on web and mobile applications using various tech stacks such as Angular, Python, and Ionic. Also, I had previous experience as a freelancer creating WordPress sites and providing other web-related solutions for my clients.</p>
                <div className="my-6">
                    <a href="/files/Gwyneth Peña - Resume.pdf" className="primary-blue-bg py-5 px-8 primary-blue-bg-hover">
                        View Resume 
                    </a>
                </div>
                <div className="my-6 flex">
                    <a href="https://bit.ly/github-gwyneth-pena" className="mr-4">
                        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                    <a href="https://bit.ly/linkedin-gwyneth-pena" className="mr-2">
                        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd"/>
                            <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                        </svg>  
    
                    </a>
                </div>
            </div>
            <div className="w-full flex align-middle justify-center hero-pic md:w-50">
                <img src="/images/hero-pic-gwen.png" alt="Gwyneth Peña" height="340px"/>
            </div>
        </div>
    </>;
}