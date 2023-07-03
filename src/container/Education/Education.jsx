import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Education = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "learning"]';
        const skillsQuery = '*[_type == "education"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
            console.log(data)
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
            console.log(data)
        });
    }, []);

    return (
        <>
            <h2 className="head-text">My Education</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.length > 0 && skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.length > 0 && experiences.map((experience, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">0{index + 1}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.course.length > 0 && experience.course.map((course) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={course.name}
                                            key={course.name}
                                        >
                                            <h4 className="bold-text">{course.name}</h4>
                                            <p className="p-text">{course.course}</p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={course.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {course.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AppWrap(MotionWrap(Education, 'app__skills'),
    'education', 'app__whitebg')