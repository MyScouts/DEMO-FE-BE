import { Link } from '@mui/material'
import styles from './header.module.scss';
import Image from 'next/image'
const Header = () => {
  return (
    <>
      <header
        className={`${styles.header}`}
      >
        <div className="container">
          <div className={styles.item1}>
            <Link href="/">
              <a className={styles.logo}>
                <Image
                  width="70px"
                  height="32px"
                  src="/static/images/logo.png" alt="logo" />
              </a>
            </Link >
            <div className="search-container">

            </div>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header;
