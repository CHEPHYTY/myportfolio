import image from "../assets/ProfileImage.png"
const Profile = ({ }) => {
    return (
        <div className="profile">
            <img src={image} alt="Profile of Soumya Ranjan Hembram" className="imageProfile" />
            <h3>Soumya Ra. Hembram</h3>
            <p>Web and App Developer</p>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Email</a></li>
                <li><a href="">Instagram</a></li>
            </ul>
            <button>Contact Me</button>
        </div>
    );
}

export default Profile;