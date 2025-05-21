import { useState } from "react";
import { ArrowBigLeft,ArrowBigRight, Circle, CircleDot } from "lucide-react";
import styles from "../styles/ImgSlider.module.css"
type ImgSliderProps = {
    imgUrls : string[];
}
    function ImgSlider({imgUrls}:ImgSliderProps){
        const [imgIndex,setImgIndex] = useState(0)
        function showNextImg(){
            setImgIndex(index => {
                if (index=== imgUrls.length-1) return 0
                return index +1
            })
        }

        function showPrevImg(){
            setImgIndex(index => {
                if (index===0) return imgUrls.length-1
                return index -1
            })
        }

        return(
            <div style={{width: "100%", height: "100%", position: "relative"}}>
                <h1 className={styles.text}> Welcome</h1>
                <div style={{
                    width: "100%", 
                    height: "100%", 
                    display:"flex",
                    overflow:"hidden"}}>
                    {imgUrls.map(url => (
                        <img 
                        key={url}
                        src={url} 
                        className={styles.img_slider_img}
                        style={{ translate:`${-100 * imgIndex}%` }}
                        />
                    ))}                  
                </div>
                <button onClick={showPrevImg} className={styles.img_slider_btn} style={{left:0}}>
                    <ArrowBigLeft/>
                </button>
                <button onClick={showNextImg} className={styles.img_slider_btn} style={{right:0}}> 
                    <ArrowBigRight/>
                </button>
                <div style={{
                    position: "absolute",
                    bottom: ".5rem",
                    left:"50%",
                    translate: "-50%",
                    display: "flex",
                    gap:".25rem",
                }}>
                    {imgUrls.map((_,index) => (
                        <button  key={index} className={styles.img_slider_dot_btn} onClick={() => setImgIndex(index)}> {index === imgIndex?<CircleDot/> : <Circle/>} </button>
                    ))}
                </div>
            </div>
        )
    };
export default ImgSlider;