'use client'
import { useState } from 'react'
import styles from './page.module.css'

const imglan = [
    {src: './JS.webp', title:'JavaScript'},
    {src: './CC.webp', title:'C#'},
    {src: './c.webp', title:'C'},
    {src: './TS.webp', title:'Typescript'},
    {src: '/Java.png', title:'Java'}
]

const imgfront = [
    {src: 'HTML1.webp', title:'HTML'},
    {src: 'CSS.webp', title:'CSS'},
    {src: 'React.webp', title:'React'}
]

const imgback = [
    {src: 'NODEJS.webp', title:'NodeJS'}
]

const imgdata = [
    {src: 'mongoDB.webp', title:'MongDB'}
]

const imgtool = [
    {src: 'Slack.png', title:'Slack'},
    {src: 'github.png', title: 'Git Hub'},
    {src: 'PS.webp', title: 'Photo Shop'},
    {src: 'Notion.png', title: 'Notion'}
]

const imgdepoly = [
    {src: 'VERCEL.webp', title:'Vercel'},
]
export default function Language(){
    const [currentIndex1, setCurrentIndex1]=useState(0);
    const [currentIndex2, setCurrentIndex2]=useState(0);
    const [currentIndex3, setCurrentIndex3]=useState(0);
    const [currentIndex4, setCurrentIndex4]=useState(0);
    const [currentIndex5, setCurrentIndex5]=useState(0);
    const [currentIndex6, setCurrentIndex6]=useState(0);

    const handleNextImagelng = ()=>{
        setCurrentIndex1((prevIndex)=>(prevIndex +1) % imglan.length);
    };
    const handlePrevImagelng = ()=>{
        setCurrentIndex1((prevIndex)=>(prevIndex -1 + imglan.length) % imglan.length);
    };

    const handleNextImagefront = ()=>{
        setCurrentIndex2((prevIndex)=>(prevIndex +1) % imgfront.length);
    };
    const handlePrevImagefront = ()=>{
        setCurrentIndex2((prevIndex)=>(prevIndex -1 + imgfront.length) % imgfront.length);
    };

    const handleNextImageback = ()=>{
        setCurrentIndex3((prevIndex)=>(prevIndex +1) % imgback.length);
    };
    const handlePrevImageback = ()=>{
        setCurrentIndex3((prevIndex)=>(prevIndex -1 + imgback.length) % imgback.length);
    };

    const handleNextImagedata = ()=>{
        setCurrentIndex4((prevIndex)=>(prevIndex +1) % imgback.length);
    };
    const handlePrevImagedata = ()=>{
        setCurrentIndex4((prevIndex)=>(prevIndex -1 + imgback.length) % imgback.length);
    };

    const handleNextImagetool = ()=>{
        setCurrentIndex5((prevIndex)=>(prevIndex +1) % imgtool.length);
    };
    const handlePrevImagetool = ()=>{
        setCurrentIndex5((prevIndex)=>(prevIndex -1 + imgtool.length) % imgtool.length);
    };
   
    const handleNextImagedepoly = ()=>{
        setCurrentIndex6((prevIndex)=>(prevIndex +1) % imgdepoly.length);
    };
    const handlePrevImagedepoly = ()=>{
        setCurrentIndex6((prevIndex)=>(prevIndex -1 + imgdepoly.length) % imgdepoly.length);
    };


    return(
        <div className={styles.language}>
            <video className={styles.video} autoPlay loop muted>
                <source src='./space.mp4' type='video/mp4'/>
            </video>
            <h1>Language</h1>
            <div className={styles.languagemain}>
                <div className={styles.languagegrid}>
                    <div className={styles.languagecontent}>
                        <p>language</p>
                        <div className={styles.contentimage}>
                            <img src={imglan[currentIndex1].src} alt={imglan[currentIndex1].title}/>
                            <p>{imglan[currentIndex1].title}</p>
                        </div>
                        <div>
                            <button onClick={handlePrevImagelng}>←</button>
                            <button onClick={handleNextImagelng}>→</button>
                        </div>
                        <br/>
                        <p>{currentIndex1 + 1}/{imglan.length}</p>
                    </div>
                    <div className={styles.languagecontent}>
                        <p>FrontEnd</p>
                            <div className={styles.contentimage}>
                             <img src={imgfront[currentIndex2].src} alt={imgfront[currentIndex2].title}/>
                             <p>{imgfront[currentIndex2].title}</p>
                            </div>
                            <div>
                            <button onClick={handlePrevImagefront}>←</button>
                            <button onClick={handleNextImagefront}>→</button>
                            </div>
                            <br/>
                        <p>{currentIndex2 + 1}/{imgfront.length}</p>
                    </div>
                    <div className={styles.languagecontent}>
                        <p>backEnd</p>
                            <div className={styles.contentimage}>
                             <img src={imgback[currentIndex3].src} alt={imgback[currentIndex3].title}/>
                             <p>{imgback[currentIndex3].title}</p>
                            </div>
                            <div>
                            <button onClick={handlePrevImageback}>←</button>
                            <button onClick={handleNextImageback}>→</button>
                            </div>
                            <br/>
                        <p>{currentIndex3 + 1}/{imgback.length}</p>
                    </div>
                    <div className={styles.languagecontent}>
                        <p>Database</p>
                            <div className={styles.contentimage}>
                             <img src={imgdata[currentIndex4].src} alt={imgdata[currentIndex4].title}/>
                             <p>{imgdata[currentIndex4].title}</p>
                            </div>
                            <div>
                            <button onClick={handlePrevImagedata}>←</button>
                            <button onClick={handleNextImagedata}>→</button>
                            </div>
                            <br/>
                        <p>{currentIndex4 + 1}/{imgdata.length}</p>
                    </div>
                    <div className={styles.languagecontent}>
                        <p>Tool</p>
                            <div className={styles.contentimage}>
                             <img src={imgtool[currentIndex5].src} alt={imgtool[currentIndex5].title}/>
                             <p>{imgtool[currentIndex5].title}</p>
                            </div>
                            <div>
                            <button onClick={handlePrevImagetool}>←</button>
                            <button onClick={handleNextImagetool}>→</button>
                            </div>
                            <br/>
                        <p>{currentIndex5 + 1}/{imgtool.length}</p>
                    </div>
                    <div className={styles.languagecontent}>
                        <p>Depoly</p>
                            <div className={styles.contentimage}>
                             <img src={imgdepoly[currentIndex6].src} alt={imgdepoly[currentIndex6].title}/>
                             <p>{imgdepoly[currentIndex6].title}</p>
                            </div>
                            <div>
                            <button onClick={handlePrevImagedepoly}>←</button>
                            <button onClick={handleNextImagedepoly}>→</button>
                            </div>
                            <br/>
                        <p>{currentIndex6 + 1}/{imgdepoly.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}