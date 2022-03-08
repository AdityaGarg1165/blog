import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div key={1}>
      <nav className={styles.navbar} key={2}>
        <ul className={styles.ul}>
          <Link href="/">
            <li className={styles.li}>Home</li>
          </Link>
          <Link href="/latest">
            <li className={styles.li}>Blogs</li>
          </Link>
          <Link href="/latest">
            <li className={styles.li}>Latest</li>
          </Link>
          <Link href="recommended ">
            <li className={styles.li}>Recommended</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar