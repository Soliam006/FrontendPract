import SideBar from './components/share/SideBar'
import { MdRestaurantMenu, MdOutlineShoppingCart, MdOutlinePersonOutline   } from "react-icons/md";
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
                <button onClick={toggleMenu}
                    className="flex flex-col items-center justify-between px-4 p-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    <MdRestaurantMenu className=" text-[#dd7d36]  group-hover:text-white"/>
                    <span className="text-white hidden group-hover:block text-2xl ">Menu </span>
                </button>
                <button className="flex flex-col items-center justify-between px-4 py-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    <MdOutlineShoppingCart className=" text-[#dd7d36]  group-hover:text-white"/>
                    <span className="text-white hidden group-hover:block text-2xl  ">Shop </span>
                </button>
                <button className="flex flex-col items-center justify-between px-4 py-3 group rounded-full hover:bg-[#dd7d36] transition-colors">
                    <MdOutlinePersonOutline  className=" text-[#dd7d36]  group-hover:text-white"/>
                    <span className="text-white hidden group-hover:block text-2xl ">Account </span>
                </button>
            </nav>

        </div>
  )

}

export default App
