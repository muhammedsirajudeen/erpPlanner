export default function ProjectDirectory(){
    return(
        <div className="flex flex-col bg-gray-200  min-h-10 w-72 rounded-lg  m-5">
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
    )
}