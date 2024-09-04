import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";


export const Contact = () => {
  return <footer className={styles.container} id='contact'>
    <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Get in touch!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/email.png")} alt="Email icon" />
            <a href="mailto:tishaninavo614@gmail.com">tishaninavo614@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/telephone.png")} alt="Phone icon" />
            <a href="tel:+94778345326">+94 77 834 5326</a>
        </li>
        <hr className={styles.hr} />
        <div className={styles.iconIm}>
        <li className={styles.link}>
            <a href="https://www.linkedin.com/in/tishani-navodya-1967ba223/">            <img src={getImageUrl("contact/linkedin.png")} alt="Linkedin icon" />
            </a>
        </li>
        <li className={styles.link}>
            <a href="https://www.instagram.com/___tishani.n/">  <img src={getImageUrl("contact/instagram.png")} alt="insta icon" />
            </a>
        </li>
        <li className={styles.link}>
            <a href="https://github.com/TishaniN">  <img src={getImageUrl("contact/github.png")} alt="Github icon" />
            </a>
        </li>
        </div>
        <hr className={styles.hr} />
    </ul>
  </footer>;
}
