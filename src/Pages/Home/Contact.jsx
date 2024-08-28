//import React from 'react'

import { HomeOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons"
import { useRef } from "react"
// import { useRef } from "react";
import emailjs from '@emailjs/browser';
// import emailjs from '@emailjs/browser';





const Contact = () => {
   const takeform = useRef()

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wlx2jln', 'template_rbtiq8r', takeform.current, {
        publicKey: '3fYLG3D8anQqI74I1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
    return (
        <>
            <section className=" bg-black lg:py-20 md:py-10 py-10 px-5" id="contact">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-5 items-center">
                        <div className="col-span-1">
                            <div className="w-full bg-[#140c1c] rounded-lg p-10">
                                <div className="grid grid-cols-1">
                                    <div className="col-span-1">
                                        <div className="w-full">
                                            <h1 className="text-light lg:text-5xl text-2xl gradient-text font-bold">Let’s work together!</h1>
                                            <p className="text-light lg:text-lg text-md mt-5">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                                        </div>
                                    </div>
                                </div>
                                <form  ref={takeform} onSubmit={sendEmail}>
                                    <div className="grid grid-cols-2 gap-4 mt-5">

                                        <div className="col-span-1">
                                            <div className="w-full ">
                                                <input type="text" placeholder="First Name" name="from_name" className="w-full bg-black border border-[#22272c] rounded-lg px-4 py-2 text-light outline-primary" />
                                            </div>

                                        </div>
                                        <div className="col-span-1">
                                            <div className="w-full ">
                                                <input type="text" placeholder="Last Name" name="from_name" className="w-full bg-black border border-[#22272c] rounded-lg px-4 py-2 text-light outline-primary" />
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div className="w-full ">
                                                <input type="text" placeholder="Email Id" name="to_name" className="w-full bg-black border border-[#22272c] rounded-lg px-4 py-2 text-light outline-primary" />
                                            </div>

                                        </div>
                                        <div className="col-span-1">
                                            <div className="w-full ">
                                                <input type="number" placeholder="Mobile no" name="message" className="w-full bg-black border border-[#22272c] rounded-lg px-4 py-2 text-light outline-primary" />
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="w-full mb-5">
                                                <textarea type="text" rows={6} placeholder="Message" name="message" className="w-full bg-black border border-[#22272c] rounded-lg px-4 py-2 text-light outline-primary" />
                                            </div>
                                        </div>

                                        <button type="submit" className="text-lg contact rounded-md px-2 py-1 text-light">Send Message</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full flex gap-4">
                                <div className="contact text-white lg:h-[50px] md:h-[50px] h-[40px] lg:w-[50px] md:w-[50px] w-[40px] rounded-full">
                                    <PhoneOutlined className=" text-2xl lg:leading-12 md:leading-12 leading-8  lg:size-12 md:size-12 size-8 lg:pl-3 md:pl-3 pl-2 pt-2" />
                                </div>
                                <div>
                                    <p className="text-light">phone</p>
                                    <span className="text-light font-semibold lg:text-xl md:text-lg  text-sm">+91 9335829697</span>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 mt-5">
                                <div className="contact text-white lg:h-[50px] md:h-[50px] h-[40px] lg:w-[50px] md:w-[50px] w-[40px] rounded-full leading-10 text-center">
                                    <MailOutlined className="text-2xl lg:leading-12 md:leading-12 leading-5 lg:size-12 md:size-12 size-5 lg:pl-3 md:pl-3 " />
                                </div>
                                <div>
                                    <p className="text-light">Email</p>
                                    <span className="text-light font-semibold lg:text-xl md:text-lg text-sm">muskanvision2019@gmail.com</span>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 mt-5">
                                <div className="contact text-white lg:h-[50px] md:h-[50px] h-[40px] lg:w-[50px] md:w-[50px] w-[40px] rounded-full leading-10 text-center">
                                    <HomeOutlined className=" text-2xl lg:leading-12 md:leading-12 leading-5 lg:size-12 md:size-12 size-5 lg:pl-3 md:pl-3" />
                                </div>
                                <div>
                                    <p className="text-light">Address</p>
                                    <span className="text-light font-semibold lg:text-xl md:text-lg text-sm">M- Block Street-7 sector-59 Noida U.P</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact