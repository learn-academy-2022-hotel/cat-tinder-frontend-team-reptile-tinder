import {React, useState} from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ReptileIndex from './pages/ReptileIndex'
import ReptileShow from './pages/ReptileShow'
import ReptileNew from './pages/ReptileNew'
import ReptileEdit from './pages/ReptileEdit'
import NotFound from './pages/NotFound'
import mockReptiles from './mockReptiles'
import './App.css'

const App = () => {
  const [reptiles, setReptiles] = useState(mockReptiles)

  return(
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reptileindex" element={<ReptileIndex reptiles={reptiles}/>} />
        <Route path="/reptileshow/:id" element={<ReptileShow reptiles={reptiles}/>} />
        <Route path="/reptilenew" element={<ReptileNew />} />
        <Route path="/reptileedit" element={<ReptileEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}
export default App;
