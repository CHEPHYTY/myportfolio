const Career = () => {
    return (
        <div className="career">
            <p className="heading">FROM THE EDUCATION ARCHIVES</p>

            <Education Institute="International Institute of Information Technology, Bhubaneswar" year="2021-present" description="Currently studying in Computer Engineering Branch" />
            <Education Institute="Kendrapara Residential Higher Secondary School of Science and Technology, Tinimuhani, Kendrapara" year="2019-21" description="Currently studying in Computer Engineering Branch" />
            <Education Institute="Saraswati Sishu Vidya Mandir, Santasahi,Kendrapara" year="2015-19" description="Currently studying in Computer Engineering Branch" />

            <br /><br />

            <p className="heading">FROM THE CAREER ARCHIVES</p>
            <Education Institute="Saraswati Sishu Vidya Mandir, Santasahi,Kendrapara" year="2015-19" description="Currently studying in Computer Engineering Branch" />
        </div>
    );
}

export default Career;


const Education = ({ Institute, year, description }) => {
    return (
        <div className="school">
            <p className="institute" >{Institute} | {year}</p>
            <p>{description}</p>
        </div>

    )
}