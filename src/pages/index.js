import * as React from "react"
import logo from "../media/maria-logo.svg"
import SlideShow from "../components/slideshow"

const IndexPage = () => {
  return (
    <main>
      <header className="logo-wrap">
        <img className="logo-side" src={logo}/>
      </header>
      <title>Home Page</title>
      <SlideShow imgData="imgDataTxt" />
    </main>
  ) }

export default IndexPage
