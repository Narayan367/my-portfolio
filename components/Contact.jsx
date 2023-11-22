import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";


const Contact = () => {
  return (
    <footer id="contact" className="flex flex-col pt-1 mb-4 lg:px-30 md:px-16 sm:px-12 xs:px-5 bg-background font-poppins pb-4">
    <h2 className="mt-48 text-3xl font-medium text-center xs:py-10">Contact Me</h2>
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    <div className="grid gap-8 lg:grid-cols-3 xs:grid-cols-1 text-text dark:bg-[">
        <div className="flex py-4 pl-2 pr-4 rounded-md shadow">
            <div className="mr-2">
                <div className="flex items-center justify-center w-12 h-12 p-1 rounded-full text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 font-bold text-primary"><path fill-rule="evenodd" d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div>
                <h2 className="py-1 font-medium text-left text-md">Email</h2>
                <p className="text-sm font-light"><a href="mailto:narayandhungel15@gmail.com">narayandhungel15@gmail.com</a></p>
            </div>
        </div>

      
        <div className="flex py-4 pl-2 pr-4  rounded-md shadow">
            <div className="mr-2">
                <div className="flex items-center justify-center w-12 h-12 p-1 rounded-full text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 font-bold text-primary"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div>
                <h2 className="py-1 font-medium text-left text-md">Phone</h2>
                <p className="text-lg font-light"><a href="tel:+9779824065023">+977 9824065023</a></p>
            </div>
        </div>

       
        <div className="flex py-4 pl-2 pr-4 rounded-md shadow">
            <div className="mr-2">
                <div className="flex items-center justify-center w-12 h-12 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 font-bold text-primary text-teal-600">
                        <path fill-rule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            <div>
                <h2 className="py-1 font-medium text-left text-md">Address</h2>
                <p className="text-lg font-light"><a href="https://www.google.com/maps/place/Budhabare/@26.7252068,87.989758,13z/data=!3m1!4b1!4m6!3m5!1s0x39e5b707bb4dee8b:0xa28189dcc8d781c4!8m2!3d26.7244045!4d88.0411993!16s%2Fm%2F03yp0sc?entry=ttu">Budhabare, Jhapa</a></p>
            </div>
        </div>
    </div>
</footer>




  )
}

export default Contact
