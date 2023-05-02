import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Wallet from './Wallet'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='http://thirdweb.com/'>thirdweb</a>!
        </h1>
        <Wallet />
      </main>
    </div>
  )
}

export default Home
