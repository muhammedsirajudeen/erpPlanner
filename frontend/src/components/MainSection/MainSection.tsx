"use client"
import { useState } from "react"
import "./main.css"
import Calendar from "react-calendar"

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
                    <div className="m-3">
                        <Calendar onChange={()=>setDate(date)}  value={date} />
                    </div>

                </div>
                {/* project directory */}
                <div className="flex flex-col bg-gray-200 w-full min-h-10 ">
                    <p className="font-bold text-xs m-5">PROJECT DIRECTORY</p>
                    <div className="flex  items-center m-2">
                        <div className="ml-3" >x {/*icon here */} </div>
                        <a href="/relevantlink" className="text-gray-500 text-xs ml-3" >market research report</a>                        
                    </div>
                    <div className="flex  items-center m-2">
                        <div className="ml-3" >x {/*icon here */} </div>
                        <a href="/relevantlink" className="text-gray-500 text-xs ml-3" >Inventory Overview</a>                        
                    </div>
                    <div className="flex  items-center m-2">
                        <div className="ml-3" >x {/*icon here */} </div>
                        <a href="/relevantlink" className="text-gray-500 text-xs ml-3" >Employee Pay And Salary</a>                        
                    </div>
                    <div className="flex  items-center m-2">
                        <div className="ml-3" >x {/*icon here */} </div>
                        <a href="/relevantlink" className="text-gray-500 text-xs ml-3" >Insights</a>                        
                    </div>
                </div>
            </div>
        </div>
    )
}