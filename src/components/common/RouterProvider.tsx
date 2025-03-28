import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from "../../views/Home.tsx";
import MyPage from "../../views/MyPage.tsx";
import Stopwatch from "../../views/Stopwatch.tsx";
import MemoryStudy from "@/views/MemoryStudy.tsx";
import HowToStudy from "@/views/HowToStudy.tsx";
import StudyPost from "@/views/how-to-study/StudyPost.tsx";
import MemoryPost from "@/views/memory-study/MemoryPost.tsx";

const RouterProvider = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/stop-watch" element={<Stopwatch/>}/>
              <Route path="/memory-study" element={<MemoryStudy/>}/>
              <Route path="/memory-study/create" element={<MemoryPost/>}/>
              <Route path="/how-to-study" element={<HowToStudy/>}/>
              <Route path="/how-to-study/create" element={<StudyPost />} />
              <Route path="/my-page" element={<MyPage/>}/>
          </Routes>
      </BrowserRouter>
    );
};

export default RouterProvider;