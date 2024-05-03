import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/index.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mark Lu's bio</title>
        <link rel="icon" href="/mark.ico" />
      </Head>

      <main>
        <h1 className={styles.topCorner} > something here</h1>
        <Header title="Mark Lu's Bio" />
        <p className={styles.description} >
          Hi! welcome to my page. My name is Mark. I am a Cal (UC Berkeley) EECS grad and a US Marine Corps veteran. This is my landing page where I will be sharing both who I am and what I am about
        </p>
      </main>
    </div>
  )
}
