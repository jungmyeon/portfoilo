
import styles from './page.module.css'


export default function Career(){
    return(
        <div className={styles.careercontainer}>
            <video className={styles.video} autoPlay loop muted>
            <source src="./space.mp4" type="video/mp4"/>
            </video>
                <h1>Career</h1>
            <div className={styles.careercoment}>
                <div className={styles.careercontent}>
                    <h2>학력</h2>
                    <p>2016.03 ~ 2022.02 인제대학교 나노융합공학부</p>
                    <hr/>
                    <h2>수료과정</h2>
                    <p>2024.02 ~ 2024.08 코리아 IT 아카데미 프론트엔드 수료</p>
                    <hr/>
                    <h2>자격증</h2>
                    <p>컴퓨터활용능력 2급</p>
                </div>
            </div>
        </div>
    )
}