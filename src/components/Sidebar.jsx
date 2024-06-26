/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-3 cursor-pointer px-6"
                >
                    <img src={assets.home_icon} alt="" className="w-6" />
                    <p className="font-bold">Home</p>
                </div>
                <div className="flex items-center gap-3 cursor-pointer px-6">
                    <img src={assets.search_icon} alt="" className="w-6" />
                    <p className="font-bold">Search</p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded">
                <div className="px-6 flex item-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <img src={assets.stack_icon} alt="" className="w-8" />
                        <p className="font-semibold">Your library</p>
                    </div>
                    <div className="p-2 w-8 h-8 relative rounded-full hover:bg-[#2e2e2e75] cursor-pointer transition-all duration-200 ease-linear">
                        <img
                            src={assets.plus_icon}
                            alt=""
                            className="w-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                        />
                    </div>
                </div>
                <div className="mx-2 my-4 px-4 py-4 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1">
                    <h2>Create your first playlist</h2>
                    <p className="font-extralight">
                        it's easy we will help you
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 hover:scale-[1.05] transition-transform duration-200 ease-linear">
                        Create playlist
                    </button>
                </div>
                <div className="mx-2 my-4 px-4 py-4 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1">
                    <h2>Let's find some podcast to follow</h2>
                    <p className="font-extralight">
                        we'll keep you update on new episodes
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black rounded-full mt-4 hover:scale-[1.05] transition-transform duration-200 ease-linear">
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
