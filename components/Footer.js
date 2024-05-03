import styles from './Footer.module.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/mark-l-a7774433/" 
           className={styles.linkedInIcon} 
           aria-label="Visit Mark's LinkedIn profile" 
           title="Visit Mark's LinkedIn profile"  // Adding title for additional context on hover
           target="_blank" 
           rel="noopener noreferrer">
          <img src="/Images/icons/linkedin.svg" alt="LinkedIn"/>
        </a>
        <a href="https://github.com/PingMyBug" 
           className={styles.githubIcon} 
           aria-label="Visit Mark's GitHub profile" 
           title="Visit Mark's GitHub profile"  // Adding title for additional context on hover
           target="_blank" 
           rel="noopener noreferrer">
          <img src="/Images/icons/github.svg" alt="GitHub"/>
        </a>
      </div>
    </footer>
  );
}