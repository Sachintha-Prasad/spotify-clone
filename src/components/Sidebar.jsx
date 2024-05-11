/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { assets } from "../assets/assets"

const Sidebar = () => {
    return (
        <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
            <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
                <div className="flex items-center gap-3 cursor-pointer px-6">
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
                    <div className="flex items-center gap-3">
                        <img src={assets.arrow_icon} alt="" className="w-5" />
                        <img src={assets.plus_icon} alt="" className="w-5" />
                    </div>
                </div>
                <div className="mx-2 my-4 px-4 py-4 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1">
                    <h2>Create your first playlist</h2>
                    <p className="font-extralight">
                        it's easy we will help you
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
                        Create playlist
                    </button>
                </div>
                <div className="mx-2 my-4 px-4 py-4 bg-[#242424] rounded font-semibold flex flex-col items-start gap-1">
                    <h2>Let's find some podcast to follow</h2>
                    <p className="font-extralight">
                        we'll keep you update on new episodes
                    </p>
                    <button className="px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4">
                        Browse podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
