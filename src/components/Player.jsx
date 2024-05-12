import React from "react"
import { songsData } from "../assets/assets"
import { assets } from "../assets/assets"

const Player = () => {
    return (
        <div className="h-[10%] flex justify-between item-center text-white px-6">
            <div className="hidden lg:flex items-center gap-3">
                <img src={songsData[0].image} alt="" className="w-12 h-12" />
                <div>
                    <h2 className="font-bold">{songsData[0].name}</h2>
                    <p>{songsData[0].desc.slice(0, 20)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2 m-auto">
                <div className="flex gap-4">
                    <img
                        src={assets.shuffle_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.prev_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.play_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.next_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.loop_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                </div>
                <div className="flex items-center gap-5">
                    <p>1:06</p>
                    <div className="w-[60vw] max-w-[500px] h-1 bg-gray-300 rounded-full cursor-pointer">
                        <hr className="w-1/2 bg-green-700 h-1  border-none  rounded-full" />
                    </div>
                    <p>3:36</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center opacity-75">
                <div className="flex gap-4 items-center">
                    <img
                        src={assets.plays_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.mic_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.queue_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.speaker_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                        <img
                            src={assets.volume_icon}
                            alt=""
                            className="w-4 cursor-pointer"
                        />
                        <div className="w-20 h-1 bg-gray-300 rounded"></div>
                    </div>
                    <img
                        src={assets.mini_player_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                    <img
                        src={assets.zoom_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}

export default Player
