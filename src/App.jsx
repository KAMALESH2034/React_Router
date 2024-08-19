import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Route,Router,Routes } from "react-router-dom"
import './App.css'
import Nav from "./Nav"
import All from "./Pages/All"
import FullStack from "./Pages/FullStack"
import DataScience from "./Pages/DataScience"
import CyberSecurity from "./Pages/CyberSecurity"
import Career from "./Pages/Career"
function App() {

  return (
    <>
   
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/fullstack" element={<FullStack/>}/>
        <Route path="/datascience" element={ <DataScience/>}/>
        <Route path="/cybersecurity" element={ <CyberSecurity/>}/>
        <Route path="/career" element={<Career/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
