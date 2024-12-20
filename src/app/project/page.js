'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Project(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openModal = (index) => {
        setModalData(projectData[index]);
        setCurrentIndex(index);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    }

    const nextSlide = ()=>{
        const nextIndex = (currentIndex +1)% projectData.length;
        setModalData(projectData[nextIndex]);
        setCurrentIndex(nextIndex);
    }

    const prevSlide = ()=>{
        const prevIndex = (currentIndex -1 + projectData.length) % projectData.length;
        setModalData(projectData[prevIndex]);
        setCurrentIndex(prevIndex);
    }

    const projectData = [
        {
            id :1,
            title: '음식레시피 검색',
            description: '음식 요리 레시피를 검색하는 사이트',
            github: 'https://github.com/jungmyeon/react_food_recipe.git',
            link: 'https://react-food-recipe-rust.vercel.app/',
            imgSrc: './project1.png'
        },
        {
            id:2,
            title: '날씨 앱',
            description: '날씨 API를 이용한 날씨 웹사이트',
            github: 'https://github.com/jungmyeon/next-weather_app.git',
            link: 'https://next-weather-app-pink.vercel.app/',
            imgSrc:'./weather.png'
        }
    ]


    return(
        <div className={styles.project}>
            <video className={styles.video} autoPlay loop muted>
                <source src='./space.mp4' type='video/mp4'/>
            </video>
            <div className={styles.projectmain}>
            <h1>Project</h1>
            <br/>
            {/* {projectData.map((project, index)=>(
                <img
                key={project.id}
                src={project.imgSrc}
                className={styles.projectimg}
                alt={project.title}
                onClick={()=>openModal(index)}/>
            ))} */}
                <div className={styles.modalnav1}>
                    <button onClick={prevSlide} className={styles.navbtn1}>◁</button>
                    <button onClick={nextSlide} className={styles.navbtn1}>▷</button>
                </div>
            <img 
                src={projectData[currentIndex].imgSrc}
                className={styles.modalprojectimg1}
                onClick={()=>openModal(currentIndex)}/>
                    {/* <img src='./project1.png' className={styles.projectimg} onClick={openModal}/> */}
                    
            </div>
                {isModalOpen && modalData && (
                    <div className={styles.modalout1} onClick={closeModal}>
                        <div className={styles.modalin1} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.modalcontent1} >
                                    <button className={styles.modalbtn1} onClick={closeModal}>X</button>
                                    <a  href={modalData.link} target='black' >
                                        <img src={modalData.imgSrc} className={styles.modalprojectimg1} alt='projectimg'/>
                                    </a>
                                <div className={styles.modaldetail1}>
                                    <h2>
                                        Title
                                    </h2>
                                    <p>
                                        {modalData.title}
                                    </p>
                                    <hr/>
                                    <h2>
                                        Github
                                    </h2>
                                    <p>
                                        <a href={modalData.github} target='blank'>
                                           {modalData.github}
                                        </a>
                                    </p>
                                    <hr/>
                                    <h2>
                                        Description
                                    </h2>
                                    <p>
                                        {modalData.description}
                                    </p>
                                </div>
                                <div className={styles.modalnav2}>
                                    <button onClick={prevSlide} className={styles.navbtn2}>◁</button>
                                    <button onClick={nextSlide} className={styles.navbtn2}>▷</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


    )
}