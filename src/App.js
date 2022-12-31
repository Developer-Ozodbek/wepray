import { Route, Routes } from "react-router-dom"
import Weather from "./components/Weather"
import Navbar from './components/Navbar';
import Prayer from "./components/Prayer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<Weather/>} path="/"/>
        <Route element={<Prayer/>} path="/prayer"/>
      </Routes>
    </>
  )
}

export default App