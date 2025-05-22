
import { Outlet } from "react-router";
import SideBarMenu from "../components/sidebar";
import TopBar from "../components/TopBar";
import { useState } from "react";


export default function MainLayout() {
    const [menuTaggle, setMenuTaggle] = useState(false);
    const menuClick = () =>{
        setMenuTaggle(!menuTaggle);
    }
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <SideBarMenu  isMenuTaggled={menuTaggle}/>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <TopBar   onMenuClick={menuClick}/>
                    <main className="flex-1 overflow-y-auto p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>

    )
}
