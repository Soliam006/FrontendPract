import SideBar from './components/share/SideBar'
import { MdRestaurantMenu, MdOutlineShoppingCart, MdOutlineSearch , MdOutlineClose , MdOutlinePersonOutline   } from "react-icons/md";
import {useState} from "react";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PlateCard from "./components/view/PlateCard.jsx";
import PlateList from "./components/view/PlateList.jsx";

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


    {/*Dishes Data*/}
    const [dishes, setDishes] = useState([
    { category: 'Hot Dishes', imgSrc: 'hot1.png', dishName: 'Minnesota Hot Dish', dishDescription: 'Is a classic comfort food that originates from the Midwest.', price: '$4.58' },
    { category: 'Hot Dishes', imgSrc: 'hot2.jfif', dishName: 'Celery Root Milanese', dishDescription: 'Poached, breaded, and fried celery root topped with lemon caper aioli and salad.', price: '$18.00' },
    { category: 'Hot Dishes', imgSrc: 'hot3.png', dishName: 'Tamarind & Pasilla Chile Glazed Chicken', dishDescription: 'Chicken glazed with tamarind and pasilla chile, served with coconut vinegar pickles.', price: '$22.00'},
    { category: 'Hot Dishes', imgSrc: 'hot4.png', dishName: 'Tater Tot', dishDescription: 'Combines ground beef, cream of mushroom soup, cream of chicken soup, corn, peas, and colby jack cheese.', price: '$11.75' },
    { category: 'Hot Dishes', imgSrc: 'hot5.png', dishName: 'Chow Mein', dishDescription: 'Ground beef, rice, and creamy soup, topped with crunchy chow mein noodles.', price: '$11.75' },

    { category: 'Cold Dishes', imgSrc: 'cold1.jfif', dishName: 'Cold Dish 1', dishDescription: 'This is a description for Cold Dish 1.', price: '$3.50' },
    { category: 'Cold Dishes', imgSrc: 'cold2.jfif', dishName: 'Algae Caesar Salad', dishDescription: 'Caesar salad with a twist, featuring nutrient-rich algae.', price: '$14.00' },
    { category: 'Cold Dishes', imgSrc: 'cold3.jpg', dishName: 'Pupusas with Curtido', dishDescription: 'Salvadoran corn cakes stuffed with cheese or meat, served with curtido.', price: '$10.00' },

    { category: 'Desserts', imgSrc: 'dessert1.png', dishName: 'Cava and raspberry truffles.', dishDescription: ' Dark chocolate. Cocoa. Liquid cream', price: '$2.25' },
    { category: 'Desserts', imgSrc: 'dessert2.jpg', dishName: 'Sausage Stuffed Dates with Goat Cheese', dishDescription: 'Medjool dates stuffed with sausage and goat cheese.', price: '$14.00' },
    { category: 'Desserts', imgSrc: 'dessert3.jpg', dishName: 'Moroccan Chickpea and Date Tagine', dishDescription: 'Spiced chickpeas and dates in a fragrant tagine.', price: '$20.00' },

    { category: 'Drinks', imgSrc: 'drink1.jfif', dishName: 'Hibiscus Iced Tea', dishDescription: 'A vibrant and tangy iced tea made from hibiscus flowers.', price: '$2.50'  },
    { category: 'Drinks', imgSrc: 'drink2.jpg', dishName: 'Tamarind Agua Fresca', dishDescription: 'Refreshing drink made with tamarind, water, and sugar.', price: '$3.00' },
    { category: 'Drinks', imgSrc: 'drink3.jpg', dishName: 'Matcha Latte', dishDescription: 'Creamy matcha latte made with premium matcha powder.', price: '$4.00' },
    { category: 'Drinks', imgSrc: 'drink4.jfif', dishName: 'Iced Caramel Macchiato',    dishDescription: 'Rich espresso layered with milk and caramel syrup over ice.',  price: '$4.50'  },
    { category: 'Drinks', imgSrc: 'drink5.jfif', dishName: 'Lemon Mint Cooler',    dishDescription: 'A refreshing blend of lemon juice, mint leaves, and sparkling water.',    price: '$3.50'  },
    { category: 'Drinks', imgSrc: 'drink6.jfif', dishName: 'Coconut Water',    dishDescription: 'Naturally hydrating coconut water, served chilled.',  price: '$3.00'  },
    { category: 'Drinks', imgSrc: 'drink7.jpg', dishName: 'Berry Smoothie', dishDescription: 'A smoothie made with mixed berries, yogurt, and a hint of honey.',   price: '$4.00'   }
    ]);


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
            <main className=" lg:pl-28 grid grid-cols-1 lg:grid-cols-8 pb-20">
                <div className="lg:col-span-6 bg-[#1e1e24] p-4 pb-20">
                    {/*Header*/}
                    <header className="bg-[#1e1e24] pt-4 pl-2 pr-2">
                        {/*Title, UserName and Searchj*/}
                        <div className="flex flex-row gap-2 justify-between">
                            <div>
                                <h1 className="text-2xl text-gray-300">{userName}</h1>
                                <p className="text-gray-500">{currentDate}</p>
                            </div>
                            <form>
                                <div className="w-full relative">
                                    <MdOutlineSearch className="left-4 top-1/2 -translate-y-1/2 text-white absolute"/>
                                    <input type="text" placeholder="Search"
                                           className="pl-10 py-2 pr-4 bg-[#000e14] w-full text-gray-300 rounded-lg outline-none"/>
                                </div>
                            </form>
                        </div>
                        {/*Tabs Main Navegation*/}
                        <nav
                            className="flex flex-row justify-between  md:justify-start border-b-2 border-gray-500 w-full mt-6 mb-6 ">
                            {tabs.map((tab) => (
                                <motion.button key={tab}
                                               onClick={() => setActiveTab(tab)}
                                               className={`py-2 px-3  ${activeTab === tab ? "text-[#dd7d36]" : "text-gray-300"}
                                                                                 ${activeTab === tab ? "border-b-4  border-[#dd7d36]" : ""} md:mr-10 font-sans 
                                                                                 font-bold text-sm rounded-b-sm hover:text-[#dd7d36] hover:border-[#dd7d36]`}
                                               whileTap={{scale: 0.9}}
                                >{tab}
                                </motion.button>
                            ))}
                        </nav>
                    </header>
                    <div>
                        <h2 className="text-gray-500 pl-6 lg:text-lg md:text-2xl font-sans font-bold">Choose
                            your {activeTab}</h2>
                    </div>
                    {/*Main Content*/}
                    {/*MD:Ipod, LG:Desktop*/}
                    <div className="">
                        {/*Card*/}
                        <PlateList className="" activeTab={activeTab} dishes={dishes}/>
                    </div>
                </div>
                {/* Order 
                <div className="lg:col-span-2 bg-[#000e14] fixed lg:static right-0 top-0 w-full h-full">
                    <div className="relative p-8 pt-16 text-gray-500">
                        <MdOutlineClose className="left-4 top-4 absolute p-2 box-content bg-[#1e1e24] rounded-full lg:"/>
                        <h1 className="text-2xl text-gray-500 font-bold mt-4">Order #151436</h1>
                        <div className="flex flex-row justify-start mt-4 ">

                            <motion.button whileTap={{scale: 0.9}}
                                           className={`text-lg p-2 bg-[#000e14] text-[#dd7d36] pl-2 pr-2
                                           hover:bg-[#dd7d36] hover:text-white border-2 border-[#dd7d36] rounded-lg mr-5 transition-colors`}
                            >Dine In</motion.button>

                            <motion.button whileTap={{scale: 0.9}}
                                           className="text-lg p-2 bg-[#000e14] text-[#dd7d36] pl-2 pr-2
                                           hover:bg-[#dd7d36] hover:text-white border-2 border-[#dd7d36] rounded-lg transition-colors"
                            >Delivery</motion.button>
                        </div>
                    </div>
                    <div className="p-8 pt-16  text-gray-500">
                    </div>
                </div>*/}

            </main>

        </div>
    )

}

export default App
