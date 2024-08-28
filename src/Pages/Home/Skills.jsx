//import React from 'react'
import bootstrap from '../../assets/bootstrap.png'
import html from "../../assets/html.png"
import css from '../../assets/css-3.png'
import js from '../../assets/java-script.png'
import react from '../../assets/react.webp'
import tailwind from '../../assets/tailwind.png'
import vite from '../../assets/vite.png'
const Skills = () => {
    const data = [
        {
            image: bootstrap,
            text: "Bootstrap"
        },
        {
            image: html,
            text: "HTML"
        },
        {
            image: css,
            text: "CSS"
        },
        {
            image: js,
            text: "Java Script"
        },
        {
            image: react,
            text: "React"
        },
        {
            image: vite,
            text: "React + Vite"
        },
        {
            image: tailwind,
            text: "Tailwind CSS"
        },
    ]
    return (
        <>
            <section className="skills lg:py-20 md:py-10 py-10 px-5" id='skills'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="gradient-text lg:text-4xl md:text-4xl text-3xl font-bold ">My Skills</h1>
                                <p className="text-light lg:font-bold md:font-bold font-normal lg:text-lg md:text-lg text-md lg:py-5 py-2">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-4 gap-2">
                        {
                            data.map((items) => (
                                
                                <>
                                    <div className="col-span-1">
                                        <div className="w-full h-full lg:py-10 md:py-5 py-2 ">
                                            <div className="w-full h-full rounded-lg bg-[#140c1c] shadow-lg shadow-[#140c1c] p-8 text-center">
                                                <img src={items.image} alt='image' className='lg:h-[60px] md:h-[60px] h-[40px]  mx-auto' />
                                                <p className='text-primary lg:text-xl md:text-xl text-md mt-5'>{items.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills