'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Project(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);



    return(
        <div className={styles.project}>
            <video className={styles.video} autoPlay loop muted>
                <source src='./space.mp4' type='video/mp4'/>
            </video>
            <div className={styles.projectmain}>
            <h1>Project</h1>
            <br/>
                    <img src='./project1.png' className={styles.projectimg} onClick={openModal}/>
            </div>

                {isModalOpen && (
                    <div className={styles.modalout} onClick={closeModal}>
                        <div className={styles.modalin} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.modalcontent} >
                                    <button className={styles.modalbtn} onClick={closeModal}>X</button>
                                    <a  href='https://react-food-recipe-rust.vercel.app/' target='black' >
                                        <img src='./project1.png' className={styles.modalprojectimg} alt='projectimg'/>
                                    </a>
                                <div className={styles.modaldetail}>
                                    <h2>
                                        Title
                                    </h2>
                                    <p>
                                        음식 레시피 검색
                                    </p>
                                    <hr/>
                                    <h2>
                                        Github
                                    </h2>
                                    <p>
                                        <a href='https://github.com/jungmyeon/react_food_recipe.git' target='blank'>
                                            https://github.com/jungmyeon/react_food_recipe.git
                                        </a>
                                    </p>
                                    <hr/>
                                    <h2>
                                        Description
                                    </h2>
                                    <p>
                                        dd
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

        </div>


    )
}