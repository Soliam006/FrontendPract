import SideBar from './components/share/SideBar'
import { MdRestaurantMenu, MdOutlineShoppingCart, MdOutlineClose , MdOutlinePersonOutline   } from "react-icons/md";
import {useState} from "react";
function App() {
    const [showMenu, setShowMenu] = useState(false)
    const [showOrder, setShowOrder] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className="bg-[#272727] w-full min-h-screen ">
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
                <div className="lg:col-span-6 bg-[#272727]">
                    <header className="bg-[#272727] p-4">
                        <h1>User Experience</h1>
                        <p>Fecha actual</p>
                    </header>
                </div>
                <div className="lg:col-span-2 bg-[#000e14] fixed lg:static right-0">Hola2</div>
            </main>

        </div>
    )

}

export default App
