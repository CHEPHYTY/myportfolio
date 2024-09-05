import image from "../assets/profile.png"
const Profile = () => {
    return (
        <div className="profile">
            <img src={image} alt="Profile of Soumya Ranjan Hembram" className="imageProfile" />
            <h3>Soumya Ra. Hembram</h3>
            <p>Web and App Developer</p>
            <ul>
                <li><a href="https://www.linkedin.com/in/soumya-ranjan-hembram-87797a22b" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/CHEPHYTY" target="_blank" rel="noreferrer">Github</a></li>
                <li><a href="mailto: soumyahembra123@gmail.com">Email</a></li>
                <li><a href="https://www.instagram.com/sanat__soumya/">Instagram</a></li>
            </ul>
            <button>Contact Me</button>
        </div>
    );
}

export default Profile;