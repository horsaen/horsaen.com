import Link from "next/link";
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}