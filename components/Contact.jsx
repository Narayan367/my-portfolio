import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Component() {
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_9osluec', 'template_uiinzrf', form.current, 'e6BI2BzCVdK6HOxl_')
            .then((result) => {
                alert("the message is received by successfully!");
            }, (error) => {
                alert("The attemp to send a message is fail");
            });
        e.target.reset();
        alert("message sent successfully")
    }

    return (
        <section id='contact' className=' font-medium'>
            <h1 className="my-4 text-center font-bold text-4xl">
                Contact Me </h1>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto py-6">
                <div className="bg-card p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-6 text-primary">
                                <MdMarkEmailRead />
                            </div>
                            <div>
                                <div className="font-medium">Email</div>
                                <a href="#" className="text-muted-foreground">
                                    NarayanDhungel5@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-6 text-primary">
                                <FaPhoneVolume />
                            </div>
                            <div>
                                <div className="font-medium">Phone</div>
                                <a href="#" className="text-muted-foreground">
                                    +9779824065023
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-6 md:p-8">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4 ">
                            <div>
                                <label htmlFor="fullName" className="block text-muted-foreground">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    name='name'
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="block w-full rounded-md border border-input bg-background px-3 py-2  shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-muted-foreground">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name='email'
                                    type="email"
                                    placeholder="Enter your email"
                                    className="block w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        <div>
                            <label htmlFor="subject" className="block text-muted-foreground">
                                Subject
                            </label>
                            <input
                                id="subject"
                                name='suject'
                                type="text"
                                placeholder="Enter your email"
                                className="block w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-muted-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name='message'
                                rows={5}
                                placeholder="Enter your message"
                                className="block w-full rounded-md border border-input bg-background px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2 rounded-lg bg-teal-500 text-white"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
