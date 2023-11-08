"use client"
import { useState } from "react"
import "./main.css"

import Calendar from "react-calendar"
import ProjectDirectory from "./components/ProjectDirectory"
import SearchBar from "./components/SearchBar"
type ValuePiece = Date | null;


type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function MainSection(){
    const [date,setDate]=useState<Value>(new Date())
    return(
        <div className="maincontainer">
            <div className="flex m-5 h-full  flex-col items-center justify-start ">
                <p className="text-xl font-bold" > WELCOME TO ERP... </p>
                <p className="text-gray-500 text-xs " >manage your stock efficiently</p>
                {/* calendar element */}
                <div className="m-5 text-xs bg-gray-200 rounded-lg  ">
                    <p className=" m-3 font-bold">INVENTORY OVERVIEW</p>
                    <div className="m-8">
                        <Calendar onChange={()=>setDate(date)}  value={date} />
                    </div>

                </div>
                {/* project directory */}
                <ProjectDirectory/>
            </div>

            <div className="flex flex-col h-full justify-start items-center m-5">
                <SearchBar/>

                <div className="flex flex-col  w-full h-52 m-10  bg-gray-200 rounded-lg ">
                    <p className="font-bold text-xs m-3 ">URGENT TASKS</p>
                    {/* get tasks related to this account here */}
                    <div className="flex items-center w-full m-3 justify-between ">
                        <div className="flex items-center justify-evenly " >
                            <div className=" flex items-center justify-center  border border-custom-orange   w-5 h-5 rounded-full ">
                                <div className=" bg-custom-orange w-3 h-3 rounded-full"></div>
                            </div>
                            <p className="text-xs text-gray-500 ml-2 ">restock inventory  </p>
                        </div>
                        <div className="flex justify-around items-center mr-5 ">
                            <div className="w-2 h-2 rounded-full bg-black"></div>
                            <p className="text-xs font-light text-black ">Today</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}