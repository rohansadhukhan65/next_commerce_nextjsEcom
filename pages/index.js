import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// components .....
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className={styles.container}>
      
    <Header/>
     <h1>Home Page</h1>
    
    </div>
  )
}
