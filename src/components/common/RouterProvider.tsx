import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from "../../views/Home.tsx";
import MyPage from "../../views/MyPage.tsx";
import Stopwatch from "../../views/Stopwatch.tsx";
import MemoryStudy from "@/views/MemoryStudy.tsx";
import HowToStudy from "@/views/HowToStudy.tsx";

const RouterProvider = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/stop-watch" element={<Stopwatch/>}/>
              <Route path="/memory-study" element={<MemoryStudy/>}/>
              <Route path="/how-to-study" element={<HowToStudy/>}/>
              <Route path="/my-page" element={<MyPage/>}/>
          </Routes>
      </BrowserRouter>
    );
};

export default RouterProvider;