import React from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    <img
                        onClick={() => navigate(-1)}
                        src={assets.arrow_left}
                        alt=""
                        className="w-8 bg-black hover:bg-[#2e2e2e75] p-2 rounded-full cursor-pointer transition-all duration-200 ease-linear"
                    />
                    <img
                        onClick={() => navigate(1)}
                        src={assets.arrow_right}
                        alt=""
                        className="w-8 bg-black hover:bg-[#2e2e2e75] p-2 rounded-full cursor-pointer transition-all duration-200 ease-linear"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-1.5 bg-white text-black rounded-full hidden md:block hover:scale-[1.05] transition-transform duration-200 ease-linear">
                        Explore premium
                    </button>
                    <button className="px-4 py-1.5 bg-black text-white rounded-full hover:scale-[1.05] transition-transform duration-200 ease-linear">
                        install app
                    </button>
                    <p className="w-7 h-7 bg-violet-600 text-[#242424] rounded-full flex items-center justify-center">
                        A
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="px-4 py-1.5 bg-white text-black rounded-full font-semibold cursor-pointer">
                    All
                </p>
                <p className="px-4 py-1.5 bg-black text-white rounded-full font-semibold cursor-pointer">
                    Music
                </p>
                <p className="px-4 py-1.5 bg-black text-white rounded-full font-semibold cursor-pointer">
                    Podcast
                </p>
            </div>
        </div>
    )
}

export default Navbar
