import SideBar from './components/share/SideBar'
import { MdRestaurantMenu, MdOutlineShoppingCart, MdOutlineSearch , MdOutlineClose , MdOutlinePersonOutline   } from "react-icons/md";
import {useState} from "react";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
    /*Menu Movil Information*/
    const [showMenu, setShowMenu] = useState(false)
    const [showOrder, setShowOrder] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    /*Date and User Information*/
    const [userName, setUserName] = useState("User Name")
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date().toLocaleDateString('en-En', {
                weekday: 'long',
                month: 'long',
                year: 'numeric',
                day: 'numeric'
            }));
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    {/*Tabs Navegation Data*/}
    const [activeTab, setActiveTab] = useState("Hot Dishes")
    const tabs = ["Hot Dishes", "Cold Dishes", "Desserts", "Drinks"]
    return (
        <div className="bg-[#1e1e24] w-full min-h-screen ">
            <SideBar showMenu={showMenu} />
            {/* Movil Menu */}
            <nav className="bg-[#000e14] fixed w-full lg:hidden bottom-0 left-0 flex flex-row justify-between p-4 text-3xl rounded-t-lg">
                <button
                    className="flex flex-col items-center justify-between px-4 py-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    <MdOutlinePersonOutline className=" text-[#dd7d36]  group-hover:text-white"/>
                    <span className="text-white hidden group-hover:block text-2xl ">Account </span>
                </button>
                <button
                    className="flex flex-col items-center justify-between px-4 py-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    <MdOutlineShoppingCart className=" text-[#dd7d36]  group-hover:text-white"/>
                    <span className="text-white hidden group-hover:block text-2xl  ">Shop </span>
                </button>
                <button onClick={toggleMenu}
                        className="flex flex-col items-center justify-between px-4 p-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    {showMenu ? <MdOutlineClose className=" text-[#dd7d36]  group-hover:text-white"/> :
                        <MdRestaurantMenu className=" text-[#dd7d36]  group-hover:text-white"/>}
                    <span className="text-white hidden group-hover:block text-2xl ">Menu </span>
                </button>
            </nav>
            {/*Main container con un pl de 28 para evitar el sideBar*/}
            {/*grid-cols-1 (Ocupa toda la pantalla) | Grid-cols-8 lg (Para Desktop la divido en 8)*/}
            <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
                <div className="lg:col-span-6 bg-[#1e1e24]">
                    {/*Header*/}
                    <header className="bg-[#1e1e24] p-4">
                        {/*Title and Searchj*/}
                        <div className="flex flex-row gap-2 justify-between">
                            <div>
                                <h1 className="text-2xl text-gray-300">{userName}</h1>
                                <p className="text-gray-500">{currentDate}</p>
                            </div>
                            <form >
                                <div className="w-full relative">
                                      <MdOutlineSearch className="left-4 top-1/2 -translate-y-1/2 text-white absolute"/>
                                <input type="text" placeholder="Search" className="pl-10 py-2 pr-4 bg-[#000e14] w-full text-gray-300 rounded-lg outline-none"/>
                                </div>
                            </form>
                        </div>
                        {/*Tabs*/}
                        <nav className="flex flex-row justify-between border-b-1 border-[#ffffff] w-full mt-6 mb-6 ">
                            {tabs.map((tab) => (
                                <motion.button key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`py-2 px-3  ${activeTab === tab ? "text-[#dd7d36]" : "text-gray-300"}
                                                                                 ${activeTab === tab ? "border-b-2 border-[#dd7d36]": ""} font-sans font-bold text-sm`}
                                        whileTap={{ scale: 0.9 }}
                                >{tab}
                                </motion.button>
                            ))}
                        </nav>
                        <div>
                            <h2 className="text-gray-500 text-xl font-sans font-bold">Choose your {activeTab}</h2>
                        </div>
                    </header>
                </div>
                <div className="lg:col-span-2 bg-[#000e14] fixed lg:static right-0">Hola2</div>
            </main>

        </div>
    )

}

export default App
