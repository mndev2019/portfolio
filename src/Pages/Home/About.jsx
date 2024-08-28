//import React from 'react'

import { useState } from "react"
import Skills from "./Skills"
import Certificates from "./Certificates"
import Education from "./Education"

const About = () => {
    const [aboutdata, SetAboutdata] = useState()
    const handleAbout = (itm) => {
        SetAboutdata(itm)
    }
    return (
        <>
            <section className="bg-black lg:py-20 md:py-10 py-10 px-5" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <h1 className="gradient-text lg:text-5xl md:text-5xl text-3xl font-bold ">About Me</h1>
                                <p className="text-light  md:font-normal sm:text-light font-normal lg:text-lg md:text-lg text-md lg:py-10 py-5">I am a passionate Front-End Developer skilled in creating dynamic, responsive web applications using React, Tailwind CSS, and JavaScript. I focus on user-centric design and continuously update my knowledge to deliver engaging and accessible interfaces.</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="md:w-[50%] w-full rounded-full border border-primary text-light justify-between flex">
                                {
                                    ["Skills", "Education", "Certifications"].map((itm) => (
                                        <>
                                            <button onClick={() => (handleAbout(itm))} className={`md:px-6 px-2 py-1 rounded-full md:text-lg text-sm ${aboutdata == itm ? "bg-primary text-light" : ""}`}>{itm}</button>
                                        </>
                                    ))
                                }

                            </div>
                            {
                                aboutdata == "Skills" && (
                                    <Skills />
                                )
                            }
                            {
                                aboutdata == "Education" && (
                                    <Education/>
                                )
                            }
                             {
                                aboutdata == "Certifications" && (
                                    <Certificates/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default About