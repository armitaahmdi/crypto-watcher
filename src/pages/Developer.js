import React from 'react';

// Style
import styles from '../styles/aboutProject.module.css'

const Developer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h4>
                    Fullname:
                </h4>
                <p>Armita Ahmadi</p>
                <h4>Education:</h4>
                <p>
                    Bachelor Student of Computer Software Engineering at Buein Zahra Technical University
                </p>
                <h4>
                    Experience:
                </h4>
                <p>
                    React developer at Rahbina Company - 6 months
                </p>
                <h4>
                    Skills:
                </h4>
                <p>Html 5</p>
                <p>Css 3</p>
                <p>Bootstrap</p>
                <p>Sass</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Familiar to TypeScript</p>
                <p>Adobe Xd - Adobe Illustrator</p>
            </div>
        </section>
    );
};

export default Developer;