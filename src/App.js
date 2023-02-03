import {React, useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ReptileIndex from './pages/ReptileIndex'
import ReptileShow from './pages/ReptileShow'
import ReptileNew from './pages/ReptileNew'
import ReptileEdit from './pages/ReptileEdit'
import NotFound from './pages/NotFound'
import './App.css'

const App = () => {
  const [reptiles, setReptiles] = useState([])

  useEffect(() => {
    readReptile()
  }, [])

  const readReptile = () => {
    fetch("http://localhost:3000/reptiles")
    .then((response) => response.json())
    .then((payload) => {
      setReptiles(payload)
    })
    .catch((error) => console.log(error))
  }

  const createReptile = (reptile) => {
    fetch("http://localhost:3000/reptiles", {
      body: JSON.stringify(reptile),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readReptile())
    .catch((errors) => console.log("Reptile create errors:", errors))
  }
  
  const updateReptile = (reptile, id) => {
    fetch(`http://localhost:3000/reptiles/${id}`, {
      body: JSON.stringify(reptile),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then((payload) => readReptile())
    .catch((errors) => console.log("Reptile update errors:", errors))
  }

  const deleteReptile = (id) => {
    fetch(`http://localhost:3000/reptiles/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readReptile())
    .catch((errors) => console.log("Reptile delete errors:", errors))
  }

  return(
    <>
    <Header />
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reptileindex" element={<ReptileIndex reptiles={reptiles}/>} />
        <Route 
          path="/reptileshow/:id" 
          element={<ReptileShow reptiles={reptiles} deleteReptile={deleteReptile}/>} 
        />
        <Route path="/reptilenew" element={<ReptileNew createReptile={createReptile} />} />
        <Route path="/reptileedit/:id" element={<ReptileEdit reptiles={reptiles} updateReptile={updateReptile} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}
export default App;
