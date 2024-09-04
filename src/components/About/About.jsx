import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      {/* Motion for title */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className={styles.content}>
        {/* Motion for image (left to right) */}
        <motion.img
          className={styles.aboutImg}
          src={getImageUrl('about/aboutImage.png')}
          alt="me in uni"
          initial={{ opacity: 0, x: -100 }}  // Starts offscreen to the left
          whileInView={{ opacity: 1, x: 0 }} // Moves into view
          transition={{ duration: 1, delay: 0.5 }}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
               <motion.p initial={{ opacity: 0, x: 100 }}  // Starts offscreen to the right
                whileInView={{ opacity: 1, x: 0 }} // Moves into view
                transition={{ duration: 1, delay: 1 }} >
                  &nbsp;&nbsp; As a committed computer studies student, I have a strong passion for learning
                  new technologies and consistently advancing my skills through self-directed study.
                  My academic background has afforded me a comprehensive foundation in software engineering,
                  data science, and artificial intelligence, which I continually refine by staying aligned
                  with current industry trends.
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I am dedicated to applying my technical expertise in practical scenarios,
                  always seeking opportunities for professional growth. My approach to
                  learning is driven by a deep curiosity and a commitment to innovation, ensuring
                  that I remain at the forefront of the rapidly evolving technology landscape.
                </motion.p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
