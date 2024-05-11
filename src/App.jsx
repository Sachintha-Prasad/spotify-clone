import React from "react"
import Sidebar from "./components/Sidebar"
import Player from "./components/Player"

const App = () => {
    return (
        <div className="h-screen bg-black font-montserrat">
            <div className="h-[90%] flex">
                <Sidebar />
            </div>
            <Player />
        </div>
    )
}

export default App
