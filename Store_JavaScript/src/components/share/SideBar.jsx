import React from 'react';
import { MdOutlineFoodBank, MdOutlineLogout,  MdContactPhone, MdOutlineSettingsSuggest , MdNotificationsNone     } from 'react-icons/md';
const SideBar = (props) => {
    const {showMenu} = props;

    return (
        // Flex Class that allow to put the content in a column, with that the logout it's at the bottom
        <div className={`bg-[#000e14] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between
        py-3 rounded-tr-xl rounded-br-xl  ${showMenu ? "left-0" : "-left-full"} transition-all`}>
            <div>
                <ul className="mt-5 pl-4 ">
                    <li>
                        <h1 className="text-xl text-gray-300 uppercase font-bold text-center">Logo</h1>
                    </li>
                    <li className=" bg-[#272727]  p-4 rounded-tl-xl rounded-bl-xl">
                        <a href="#" className="text-white bg-[#dd7d36] flex justify-center rounded-xl  p-4 text-center">
                            <MdOutlineFoodBank className="text-3xl  "/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#272727] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#dd7d36] text-[#dd7d36] group-hover:text-white
                    flex justify-center rounded-xl  p-4 text-center transition-colors">
                            <MdNotificationsNone className="text-3xl  "/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#272727] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#dd7d36] text-[#dd7d36] group-hover:text-white
                    flex justify-center rounded-xl  p-4 text-center transition-colors">
                            <MdContactPhone className="text-3xl  "/>
                        </a>
                    </li>
                    <li className=" hover:bg-[#272727] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#dd7d36] text-[#dd7d36] group-hover:text-white
                    flex justify-center rounded-xl  p-4 text-center transition-colors">
                            <MdOutlineSettingsSuggest className="text-3xl  "/>
                        </a>
                    </li>

                </ul>
            </div>
            <div>
                <ul className="mt-5 pl-4">
                    <li className=" hover:bg-[#272727] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
                        <a href="#" className="group-hover:bg-[#dd7d36] text-[#dd7d36] group-hover:text-white
                    flex justify-center rounded-xl  p-4 text-center transition-colors">
                            <MdOutlineLogout  className="text-3xl  "/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar