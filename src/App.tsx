import RouterProvider from "./components/common/RouterProvider.tsx";
import Header from "./components/Header.tsx";
import Modal from "@/components/common/Modal.tsx";

function App() {

  return (
      <div className={"mt-[60px]"}>
        <Header />
        <RouterProvider/>
          <Modal/>
      </div>

  )
}

export default App
