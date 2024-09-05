import { useEffect } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const About = () => {
    // const words = ["नमस्ते ", "Hola", "Hello", "Bonjour", "Nǐ hǎo", "Salve", "Asalaam alaikum"];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const words = ["नमस्ते 🙏", "Hola 👋👋", "Hello", "Bonjour", "Nǐ hǎo 🫷", "Salve", "Asalaam alaikum 🤲"];

    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
            loop: true, // Add this if you want the animation to loop
            autoStart: true,
            delay: 100,
        });

        words.forEach((word) => {
            typewriter.typeString(word).pauseFor(1000).deleteAll().start();
        });
    }, [words]);

    return (
        <div className="about">
            <h2 id="typewriter"></h2>
            <h3>I'm Soumya Ranjan Hembram, a dedicated Web and App developer with a passion for creating innovative, user-friendly digital solutions. My expertise spans both front-end and back-end development.</h3>
            <p>I have hands-on experience in real-world web development, utilizing a modern tech stack to build dynamic and responsive websites. My skill set includes working with the latest frameworks, libraries, and tools, allowing me to create high-quality, scalable solutions. I am continuously expanding my knowledge to stay updated with emerging technologies and industry trends.
                <br />
                <br />
                I genuinely enjoy my work. </p>
        </div>
    );
}

export default About;
