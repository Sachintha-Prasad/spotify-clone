import React from "react"

const AlbumItem = ({ image, name, desc, id }) => {
    return (
        <div className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={image} alt="" className="rounded" />
            <p className="font-bold mt-2 mb-1">{name}</p>
            <p className="font-slate-200 text-xs font-semibold">{desc}</p>
        </div>
    )
}

export default AlbumItem
