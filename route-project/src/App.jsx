import Footer from "./footer/Footer"
import Header from "./header/Header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
