import React from 'react';
import skills from 'E:/portfolio/react-portfolio/src/data/skill.json';
import history from 'E:/portfolio/react-portfolio/src/data/history.json';
import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css";
import { motion } from 'framer-motion';

export const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.content}>

                {/* Subtitle for technologies */}
                <h3 className={styles.subtitle}>Technologies</h3>

                {/* Motion for skills (appearing from left to right) */}
                <motion.div
                    className={styles.skills}
                    initial={{ opacity: 0, x: -100 }}  // Starts from the left
                    whileInView={{ opacity: 1, x: 0 }}  // Moves into position when in view
                    transition={{ duration: 1 }}
                >
                   {skills.map((skill, id) => {
                        return (
                            <div className={styles.skill} key={id}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Subtitle for certificates */}
                <h3 className={styles.subtitle}>Certificates</h3>

                {/* Motion for history (appearing from right to left) */}
                <motion.ul
                    className={styles.history}
                    initial={{ opacity: 0, x: 100 }}  // Starts from the right
                    whileInView={{ opacity: 1, x: 0 }}  // Moves into position when in view
                    transition={{ duration: 1 }}
                >
                    {history.map((historyItem, id) => {  
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.name} logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.name} - ${historyItem.issuingOrganization}`}</h3> 
                                </div>
                            </li>
                        );
                    })}
                </motion.ul> 
            </div>
        </section>
    );
};
