import React from "react"
import Navbar from "./Navbar"
import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"

const DisplayHome = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1 className="my-4 font-bold text-xl">Featured charts</h1>
                <div className="my-4 flex overflow-auto">
                    {albumsData.map((item, index) => {
                        return (
                            <AlbumItem
                                key={index}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <h1 className="my-4 font-bold text-xl">Today's biggest hits</h1>
                <div className="my-4 flex overflow-auto">
                    {songsData.map((item, index) => {
                        return (
                            <SongItem
                                key={index}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                desc={item.desc}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DisplayHome
