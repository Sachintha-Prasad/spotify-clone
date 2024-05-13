import React, { useContext } from "react"
import { assets } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

const Player = () => {
    const {
        track,
        seekBar,
        seekBg,
        playerStatus,
        play,
        pause,
        time,
        previous,
        next,
        seekSong
    } = useContext(PlayerContext)

    return (
        <div className="h-[10%] flex justify-between item-center text-white px-6">
            <div className="hidden lg:flex items-center gap-3">
                <img src={track.image} alt="" className="w-12 h-12" />
                <div>
                    <h2 className="font-bold">{track.name}</h2>
                    <p>{track.desc.slice(0, 20)}</p>
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
                        onClick={previous}
                        src={assets.prev_icon}
                        alt=""
                        className="w-4 cursor-pointer"
                    />

                    {playerStatus ? (
                        <img
                            onClick={pause}
                            src={assets.pause_icon}
                            alt=""
                            className="w-4 cursor-pointer"
                        />
                    ) : (
                        <img
                            onClick={play}
                            src={assets.play_icon}
                            alt=""
                            className="w-4 cursor-pointer"
                        />
                    )}

                    <img
                        onClick={next}
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
                    <p>
                        {time.currentTime.minute}:{time.currentTime.second}
                    </p>
                    <div
                        ref={seekBg}
                        onClick={seekSong}
                        className="w-[60vw] max-w-[500px] h-1 bg-gray-300 rounded-full cursor-pointer"
                    >
                        <hr
                            ref={seekBar}
                            className="w-0 bg-green-700 h-1  border-none  rounded-full"
                        />
                    </div>
                    <p>
                        {time.totalTime.minute}:{time.totalTime.second}
                    </p>
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
