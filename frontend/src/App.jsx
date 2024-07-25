import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

function App() {
  return (
    <div className="bg-[#f6f3f3] dark:bg-[#333] ">
      <Navbar />
      <div className="flex">
        <LeftBar />
        <div className="flex-[6]">
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
