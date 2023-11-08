import SideBar from "@/components/sideBar"
import MainSection from "@/components/MainSection/MainSection"
export default function Home() {
  return (
<div  id="homecontainer" className="w-screen h-screen overflow-x-hidden">
  {/* Takes 10% of the screen width */}
    <SideBar />
  
    <MainSection />

</div>


  )
}
