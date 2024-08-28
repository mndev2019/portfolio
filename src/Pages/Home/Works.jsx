//import React from 'react'

import kismatproperty from '../../assets/kismatproperty.jpeg'
import dsta from '../../assets/DSTA.jpeg'
import geekoz from '../../assets/geekoz.jpeg'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
   
} from "@material-tailwind/react";
const Works = () => {
    return (
        <>
            <section id='works' className="bg-black lg:py-20 md:py-10 py-10 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full">
                                <h1 className="gradient-text lg:text-5xl md:text-5xl text-3xl font-bold">Projects</h1>
                                <p className="text-light md:font-normal sm:text-light lg:text-lg md:text-lg text-sm lg:py-10 py-5">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <Card className="mt-6 w-full bg-[#140c1c] h-full">
                                    <CardHeader color="blue-gray" className="relative">
                                        <img
                                            src={kismatproperty}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 gradient-text">
                                            Kismat Property
                                        </Typography>
                                        <Typography className='text-light'>
                                            Developed a comprehensive real state listing and managemnet span . Built with HTML,CSS and React js , enabling users to serach , view and manage real state properties with ease.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <a href='https://kismatproperty.com/' target='_main' className='contact text-light px-4 py-2 rounded-lg text-md'>Click Here</a>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <Card className="mt-6 w-full bg-[#140c1c] h-full">
                                    <CardHeader color="blue-gray" className="relative">
                                        <img
                                            src={geekoz}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 gradient-text">
                                            Geekoz
                                        </Typography>
                                        <Typography className='text-light'>
                                            Developed a comprehensive real state listing and managemnet span . Built with HTML,CSS and React js , enabling users to serach , view and manage real state properties with ease.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <a href='https://geekoz.vercel.app/singletrip' target='_main' className='contact text-light px-4 py-2 rounded-lg text-md'>Click Here</a>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <Card className="mt-6 w-full bg-[#140c1c] h-full ">
                                    <CardHeader color="blue-gray" className="relative">
                                        <img
                                            src={dsta}
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" className="mb-2 gradient-text">
                                            Electronics Vercel
                                        </Typography>
                                        <Typography className='text-light'>
                                            Electronics vercel is a  e-commerce platform selling electronics items. Built with HTML,CSS and React js it offers a seamless shopping experience.Its admin and vendor panels, developed using React, enable efficient product and order management.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <a href='https://electronics-virid.vercel.app/' target='_main' className='contact text-light px-4 py-2 rounded-lg text-md'>Click Here</a>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Works