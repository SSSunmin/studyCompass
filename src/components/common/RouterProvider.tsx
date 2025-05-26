import {BrowserRouter, Route,Routes} from 'react-router-dom'
import MyPage from "../../views/MyPage.tsx";
import Stopwatch from "../../views/Stopwatch.tsx";
import MemoryStudy from "@/views/MemoryStudy.tsx";
import HowToStudy from "@/views/HowToStudy.tsx";
import StudyPost from "@/views/how-to-study/StudyPost.tsx";
import MemoryPost from "@/views/memory-study/MemoryPost.tsx";
import Header from "@/components/Header.tsx";
import DetailPage from "@/views/DetailPage.tsx";

const RouterProvider = () => {
    return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Stopwatch/>}/>
              <Route path="/memory-study" element={<MemoryStudy/>}/>
              <Route path="/memory-study/create" element={<MemoryPost/>}/>
              <Route path="/how-to-study" element={<HowToStudy/>}/>
              <Route path="/how-to-study/create" element={<StudyPost />} />
              <Route path="/my-page" element={<MyPage/>}/>
              <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
      </BrowserRouter>
    );
};

export default RouterProvider;