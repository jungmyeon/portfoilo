
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <video className={styles.video} autoPlay loop muted>
        <source src="./space.mp4" type="video/mp4"/>
      </video>
      <div className={styles.comment}>
          <p>👨‍💻 풀스택 포트폴리오</p>
          <h1>jungmyeon Lee</h1>
          <br/>
          <span>다양한 개발을 추구하는 개발자 <strong>이정면</strong>입니다.</span>
          <div className={styles.content}>
              <button className={styles.button1}><img src="./google.png"/>tlsdlcl456@gmail.com</button>
              <a className={styles.button3} href="https://github.com/jungmyeon" target="_black" rel="noopener noreferrer">
              <img src="./github.png"/> jungmyeon
              </a>
              <button className={styles.button2}>📞   010-9638-4177</button>
          </div>  
      </div>
    </div>
  );
}
