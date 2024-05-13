import React, { useContext } from "react"
import Navbar from "./Navbar"
import { useParams } from "react-router-dom"
import { albumsData, assets, songsData } from "../assets/assets"
import { PlayerContext } from "../context/PlayerContext"

const DisplayAlbum = () => {
    const { id } = useParams()
    const albumData = albumsData[id]
    const { playWithId } = useContext(PlayerContext)

    return (
        <div>
            <Navbar />
            <div className="mt-8 flex flex-col md:flex-row gap-4">
                <img src={albumData.image} alt="" className="w-48 rounded" />
                <div className="flex flex-col gap-3 justify-end">
                    <p>playlist</p>
                    <h2 className="font-bold text-4xl sm:text-6xl">
                        {albumData.name}
                    </h2>
                    <p>{albumData.desc}</p>

                    <div className="flex gap-4 items-center flex-wrap">
                        <div className="flex gap-1 items-center">
                            <img
                                src={assets.spotify_logo}
                                alt=""
                                className="w-6"
                            />
                            <p className="font-bold">Spotify</p>
                        </div>
                        <p>1,322,154 likes</p>
                        <p className="font-bold">50 songs</p>
                        <p>about 2hr 30min</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-12 text-[#a7a7a7] gap-2 md:gap-4 items-center">
                <p>
                    <b className="mr-4">#</b>Title
                </p>
                <p>Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img src={assets.clock_icon} alt="" className="w-4" />
            </div>
            <hr className="mt-2 border-[#a7a7a7]" />
            {songsData.map((item, index) => (
                <div
                    onClick={() => playWithId(index)}
                    key={index}
                    className="grid grid-cols-3 sm:grid-cols-4 mt-4 col-gap-2 md:col-gap-4 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer p-2 rounded"
                >
                    <p className="flex items-center flex-wrap">
                        <b className="mr-4">{index + 1}</b>
                        <img
                            src={item.image}
                            alt=""
                            className="w-12 sm:inline-block mr-2"
                        />
                        {item.name}
                    </p>
                    <p>{albumData.name}</p>
                    <p className="hidden sm:block">5hr ago</p>
                    <p>{item.duration}</p>
                </div>
            ))}
        </div>
    )
}

export default DisplayAlbum
