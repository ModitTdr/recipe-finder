import { useState } from "react"
import Navbar from "./components/Navbar"
import Recipe from "./components/Recipe"
import Card from "./components/card"
import datas from "./data"

function App() {
  const cardData = datas.map((data) => {
    return (
      <Card 
        key = {data.id}
        data = {data}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Recipe />
      {/* {cardData} */}
    </>
  )
}

export default App
