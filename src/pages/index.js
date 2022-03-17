import * as React from "react"
import logo from "../media/maria-logo.svg"
import SlideShow from "../components/slideshow"


const side = {
  color: "blue",
  position: "absolute",
  height: "100vh",
  position: "fixed",
  width: "2rem",
  top: 0,
  padding: "1rem",
  left: "0"
}

//data
const IndexPage = () => {
  return (
    <main>
      <header>
        <img style={side} src={logo}/>
      </header>
      <title>Home Page</title>
      <SlideShow imgData="imgDataTxt" />
    </main>
  )
}

export default IndexPage
