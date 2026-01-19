import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../../main/navbar/index";

function Root() {
    useEffect(()=>{
        const setViewHeight = () => {
        const vh = window.innerHeight*0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        }

        setViewHeight();

        window.addEventListener('resize', setViewHeight);

        return () => {
        window.removeEventListener('resize', setViewHeight)
        }
    },[])


    return (
        <div className="h-screen w-screen">
            <div className="h-full w-full flex flex-col-reverse bottom-0 sm:flex-col">
                <NavBar />
                <div className="flex-grow flex overflow-y-auto w-full justify-center z-10">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root;