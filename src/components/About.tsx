import styles from "../styles/About.module.css"
import ImgSlider from "./ImgSlider";
import img1 from "../img/city.jpg"
import img2 from "../img/landscape.jpg"
import img3 from "../img/sae.jpg"
import img4 from "../img/nature.jpg"
const IMAGES = [img1,img2,img3,img4];
function About() {
    return(
        <div>
            <div className={styles.img}>         
                <ImgSlider imgUrls={IMAGES}/>
            </div>
            <h1 className={styles.text}>
                <div className="text-[30px]">Top value for you</div>
                <div className="text-gray-500 italic">Try variety of benefits when using our services.</div>
            </h1>
            <h1 className={styles.ld}> 
                <div className={styles.ld01}>
                    <img src="src/img/you can have multiple logos, so having one of each….jpg" width={35} className="rounded-[50%]"/>
                    <div className="text-[15px]" >Air port pickup</div>
                    <div className="text-gray-500 italic">We provide escort from the airport to the hotel</div>
                </div>
                <div className={styles.ld01}>
                    <img src="src/img/you can have multiple logos, so having one of each….jpg" width={35} className="rounded-[50%]"/>
                    <div className="text-[15px]" >Easy booking</div>
                    <div className="text-gray-500 italic">Quick and easy booking of tours for upcoming days</div>
                </div>
                <div className={styles.ld01}>
                    <img src="src/img/you can have multiple logos, so having one of each….jpg" width={35} className="rounded-[50%]"/>
                    <div className="text-[15px]" >Best tour guide</div>
                    <div className="text-gray-500 italic">Our best tour guide is ready to guide your trip</div>
                </div>
                <div className={styles.ld01}>
                    <img src="src/img/you can have multiple logos, so having one of each….jpg" width={35} className="rounded-[50%]"/>
                    <div className="text-[15px]" >Lots of promos</div>
                    <div className="text-gray-500 italic">Various promotions and drawings of tours</div>
                </div>
            </h1>
            <h1 className={styles.text01}>
                Choose your tour
            </h1>
            <div className={styles.t_item}>
                <div className={styles.t_item01_frame}>
                    <img className={styles.img_frame} src="src/img/nature.jpg" width={200}/>
                    <div className={styles.t_item01}>
                        <div>
                            <div> Nature </div>
                            <div> $30/person </div>
                        </div>
                        <img className={styles.img_frame01} src="src/img/arrow_.jpg" width={40}  />
                    </div>
                </div>
                <div className={styles.t_item01_frame}>
                    <img className={styles.img_frame} src="src/img/sae.jpg" width={200}/>
                    <div className={styles.t_item01}>
                        <div>
                            <div> Sae </div>
                            <div> $70/person </div>
                        </div>
                        <img className={styles.img_frame01} src="src/img/arrow_.jpg" width={40}  />
                    </div>
                </div>
                <div className={styles.t_item01_frame}>
                    <img className={styles.img_frame} src="src/img/city.jpg" width={200}/>
                    <div className={styles.t_item01}>
                        <div>
                            <div> City </div>
                            <div> $100/person </div>
                        </div>
                        <img className={styles.img_frame01} src="src/img/arrow_.jpg" width={40}  />
                    </div>
                </div>
                <div className={styles.t_item01_frame}>
                    <img className={styles.img_frame} src="src/img/landscape.jpg" width={200}/>
                    <div className={styles.t_item01}>
                        <div>
                            <div> Landscape </div>
                            <div> $50/person </div>
                        </div>
                        <img className={styles.img_frame01} src="src/img/arrow_.jpg" width={40}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className={styles.btn_t}> See all</button>
            </div>
        </div>
    )
}
export default About;