//import React from 'react'

const Education = () => {
    return (
        <>
            <section className=" bg-black py-5 px-5">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h1 className="gradient-text lg:text-5xl md:text-5xl text-3xl font-bold lg:py-10 py-5 ">Education</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-1 gap-8">

                        <div className="col-span-1">
                            <div className=" w-full h-full rounded-lg bg-[#140c1c] shadow-lg shadow-[#140c1c] p-5 mt-8 education">
                                <p className="text-primary text-xl font-bold">AUG 2023 - Present</p>
                                <h1 className="text-light font-bold lg:text-2xl md:text-2xl text-xl mt-2">Frontend Development intern</h1>
                                <p className="text-light text-md font-light mt-2">Frantic infotech pvt ltd</p>
                                <p className="text-light text-md font-light mt-2">Noida U.P</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" w-full h-full rounded-lg bg-[#140c1c] shadow-lg shadow-[#140c1c] p-5 mt-8 education">
                                <p className="text-primary text-xl font-bold">2019 - 2023</p>
                                <h1 className="text-light font-bold lg:text-2xl md:text-2xl text-xl mt-2">B.Tech</h1>
                                <p className="text-light text-md font-light mt-2">Computer science engineering</p>
                                <p className="text-light text-md font-light mt-2">Dr. A. P. J. Abdul Kalam Technical University</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" w-full h-full rounded-lg bg-[#140c1c] shadow-lg shadow-[#140c1c] p-5 mt-8 education">
                                <p className="text-primary text-xl font-bold">2018 - 2019</p>
                                <h1 className="text-light font-bold lg:text-2xl md:text-2xl text-xl mt-2">Intermediate</h1>
                                <p className="text-light text-md font-light mt-2">M.G Inter college</p>
                                <p className="text-light text-md font-light mt-2">Tilak Nagar Kanpur U.P</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className=" w-full h-full rounded-lg bg-[#140c1c] shadow-lg shadow-[#140c1c] p-5 mt-8 education">
                            <p className="text-primary text-xl font-bold">2017 - 2018</p>
                                <h1 className="text-light font-bold lg:text-2xl md:text-2xl text-xl mt-2">High School</h1>
                                <p className="text-light text-md font-light  mt-2">M.G Inter college</p>
                                <p className="text-light text-md font-light mt-2">Tilak Nagar Kanpur U.P</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education