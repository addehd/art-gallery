import React , {useState, useEffect} from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Estorme from "../images/gallery/estorme.jpg"

export default function Slideshow(imgData) {
  //https://stackoverflow.com/questions/65840192/loop-through-an-array-and-show-single-item-at-a-time-with-dynamic-time-duration
  const items = [{ name: " 0% 0%" }, { name: " 5% 70%" }, { name: " 50% 5%" }, { name: " 30% 5%" }];
  const [mediaItem, setMediaItem] = useState(items[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      1000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setMediaItem(items[index]);
  }, [index]);

  return (
    <>
      {console.log(mediaItem.name)}
      {/* <h1 style={{color: mediaItem.name, fontSize: "1rem"}}>Test</h1> */}
      {/* <StaticImage className="gallery-image" imgStyle={{transformOrigin: mediaItem.name }} src="../images/gallery/estorme.jpg" alt="art" /> */}
      {/* style={{transformOrigin: mediaItem.name }} */}
     <div className='gallery-image-wrapper'>
        <img className="gallery-image"  style={{transformOrigin: mediaItem.name }} src={Estorme} alt="art" />
      </div>
      <div style={{ height: "100vh", display: "flex", alignItems: "baseline" }} >
        <img style={{width: "50%" }} src={Estorme} alt="art" />
      </div>
    </>
  )
}
