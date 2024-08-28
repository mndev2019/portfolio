//import React from 'react'

import { DownloadOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons"
import pdf from '../../pdf/muskan.resume.pdf'
const Banner = () => {
    return (
        <>
            <section className="banner lg:h-[550px] h-[350px] overflow-hidden w-full relative" id="banner">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full items-center flex  lg:h-[550px] h-[350px]">
                                <div className="w-full text-center">
                                    <p className="text-light font-bold lg:text-2xl md:text-2xl text-md  py-2">I am Muskan Ansari</p>
                                    <h1 className="text-light font-bold lg:text-7xl md:text-6xl text-3xl py-2 gradient-text">Frontend Developer</h1>
                                    <p className="text-light  lg:text-lg md:text-lg text-sm sm:font-light font-normal  py-2">I am Muskan Ansari a front-end developer.Building dynamic, responsive web applications using technologies like React , Tailwind , Bootstrap ,HTML ,CSS</p>
                                    <div className="mt-5">
                                        <a href={pdf} className="bg-dark text-primary lg:px-10 md:px-10 px-5 py-2 text-center rounded-full border border-primary cursor-pointer lg:text-lg md:text-lg text-md" download>Download C V <DownloadOutlined /></a>
                                    </div>
                                    <div className="mt-5 text-light items-center lg:text-3xl md:text-3xl  text-xl *:px-2 ">
                                        <a href="https://github.com/mndev2019" target="_main"><GithubOutlined /></a>
                                        <a href="" target="_main"><InstagramOutlined /></a>
                                        <a href="https://www.linkedin.com/in/muskan-ansari-145453229/" target="_main"><LinkedinOutlined /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner