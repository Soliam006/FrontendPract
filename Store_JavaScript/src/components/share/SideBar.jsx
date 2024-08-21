import React from 'react';
import { MdOutlineFoodBank  } from 'react-icons/md';
const SideBar = () => {
    return (
        <div className="bg-[#000e14] fixed left-0 top-0 pt-5 w-28 h-full">
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center">Logo</h1>
            <ul className="mt-10 pl-4">
                <li className=" bg-[#272727]  p-4 rounded-tl-xl rounded-bl-xl">
                    <a href="#" className="text-white bg-[#dd7d36] block rounded-xl  p-4 text-center">
                        <MdOutlineFoodBank className="text-3xl  "/>
                        </a>
                </li>
                <li className="mb-4">
                    <a href="#" className="block text-center">
                        About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-gray-300 hover:text-white text-sm block text-center">
                        Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-gray-300 hover:text-white text-sm block text-center">
                        Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar