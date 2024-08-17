'use client'
import Link from 'next/link'
import styles from './header.module.css'
import { usePathname } from 'next/navigation'


export default function Header(){
    const path = usePathname();
    return(
        <div className={styles.header}>
                <p className={path === '/' ? styles.active : ''}>
                <Link href='/'>Home</Link>
                {path === '/' && <span className={styles.arrow}>☜</span>}
                </p>
                <p className={path === '/career' ? styles.active : ''}>
                <Link href='/career'>Career</Link>
                {path === '/career' && <span className={styles.arrow}>☜</span>}
                </p>
                <p className={path === '/language' ? styles.active : ''}>
                <Link href='/language'>Language</Link>
                {path === '/language' && <span className={styles.arrow}>☜</span>}
                </p>
                <p className={path === '/project' ? styles.active : ''}>
                <Link href='/project'>Project</Link>
                {path === '/project' && <span className={styles.arrow}>☜</span>}
                </p>
        </div>
    )
}