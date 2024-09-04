import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.container} id='home'>
      <div className={styles.content}>
        
        {/* Motion for title */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} // Control the animation speed
          className={styles.title}
        >
          Hi, I'm Tishani <br /> Navodya
        </motion.h1>
        
        {/* Motion for coTitle */}
        <motion.h3
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          className={styles.coTitle}
        >
          Computer Studies Undergraduate
        </motion.h3>
        
        {/* Motion for description */}
        <motion.p
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className={styles.description}
        >
          &nbsp; A dedicated final year student at the University of Kelaniya with a passion for software engineering, artificial intelligence, and data science. My academic background and hands-on experience in these fields drive me to contribute to dynamic teams and make a meaningful impact in the tech industry.
          Explore my work, skills, and journey as I continue to grow and excel in the field.
        </motion.p>
        
        {/* Motion for button */}
        <motion.a
          href="../../Tishani_Navodya_Resume.pdf"
          download
          className={styles.downBtn}
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          Download CV
        </motion.a>
      </div>
      
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
