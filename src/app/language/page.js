'use client'
import { useState } from 'react'
import styles from './page.module.css'

const imglan = [
    {src: './JS.webp', title:'JavaScript'},
    {src: './CC.webp', title:'C#'},
    {src: './c.webp', title:'C'},
    {src: './TS.webp', title:'Typescript'}
]
export default function Language(){
    const [currentIndex, setCurrentIndex]=useState(0);

    const handleNextImage = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex +1) % imglan.length);
    };

    const handlePrevImage = ()=>{
        setCurrentIndex((prevIndex)=>(prevIndex -1 + imglan.length) % imglan.length);
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
                            <img src={imglan[currentIndex].src} alt={imglan[currentIndex].title}/>
                            <p>{imglan[currentIndex].title}</p>
                        </div>
                        <div>
                            <button onClick={handlePrevImage}>←</button>
                            <button onClick={handleNextImage}>→</button>
                        </div>
                        <br/>
                        <p>{currentIndex + 1}/{imglan.length}</p>
                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                    <div className={styles.languagecontent}>

                    </div>
                </div>
            </div>
        </div>
    )
}