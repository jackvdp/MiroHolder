import { Inter } from 'next/font/google'
import styles from './index.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.iframeContainer}>
      <iframe 
        className={styles.miroIframe}
        src="https://miro.com/app/live-embed/uXjVN7MuGBU=/?moveToViewport=-6620,-4066,6975,4547&embedId=548985502833" 
        frameborder="0" 
        scrolling="no" 
        allow="fullscreen; clipboard-read; clipboard-write" 
        allowfullscreen>
      </iframe>
    </div>
  )
}
