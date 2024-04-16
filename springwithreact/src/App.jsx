import HomePage from "./HomePage";
import PostUser from "./PostUser";
import Submit from "./Submit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/viewuser" element={<Submit/>}></Route>
        <Route path="/submituser" element={<PostUser/>}></Route>
      </Routes>
     </Router>
    </>
  )
}
export default App
