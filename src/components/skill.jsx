const Skill = () => {
    return (
        <div className="skill">
            <p className="heading">SKILLS</p>

            <TechSkill head="Technical Skill" data={["Javascript", "Python", "Java", "Kotlin", "C++", "SQL"]} />

            <TechSkill head="Developer Tools" data={["VS code", "Android Studio", "Github", "MongoDB Compass", "Microsoft Workbench"]} />

            <TechSkill head="Command In" data={["MERN stack", "Android with Kotlin"]} />

            <TechSkill head="Activities" data={["Served a important member of Vedanta Samiti Social Society of IIIT, Bhubaneswar","Contributed as the core team of Social-cultural event VISISHT2k23 and VISHIST2k24 IIIT,Bhubaneswar "]} />



        </div>
    )
}

export default Skill;

const TechSkill = ({ head, data }) => {
    return (
        <div className="tech">
            <br />
            <p> <strong>{head}</strong></p>
            <ul>
                {data.map((ele, index) => (
                    <li key={index}><p>{ele}</p></li>
                ))}
            </ul>
        </div>
    );
};


