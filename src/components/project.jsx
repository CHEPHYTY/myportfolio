const Projects = () => {
    return (
        <div className="approach">

            <p className="heading"> PROJECTS</p>
            <HelperBtn content="Helper" />
            <HelperBtn content="Helper" />
            <HelperBtn content="Helpasdfasdf dfasdfsf er" />
            <br /><br />
        </div>
    );
};

export default Projects;

const HelperBtn = ({ content, link }) => {
    return (
        <div className="project">
            <a className="project-name" href={link}>{content}</a>
            <i className="fa-solid fa-arrow-right-long"></i>
        </div>
    );
};
