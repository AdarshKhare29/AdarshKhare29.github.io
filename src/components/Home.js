const Home = () => {
    return (
        <>
            <div id="lead" className="profile_ak">
                <div id="lead-content">
                    <h1>Hi, i'm <span className="name">Adarsh</span> Khare</h1>
                    <h2>Software Engineer</h2>
                </div>
                <div className="img-resume">
                    <img src="images/AK.jpg" alt="Adarsh Khare" className="face-img" id="face-img" /><br />
                </div>
            </div>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="heading">About Me</h2>
                        </div>
                        <div className="col-md-8">
                            <p>
                                Hey! I'm <b>Adarsh Khare</b>, a Computer Science Graduate and Frontend developer with 1.5
                                years of
                                experience in creating and executing innovative solutions to enhance business productivity.
                                Highly experienced in all aspects of the software development lifecycle.
                                Skilled at coordinating cross-functional teams in a fast-paced, deadline-driven environment
                                to steer
                                timely project completion. Strong in design and integration with intuitive problem-solving
                                skills
                                with proficiency in reactJs and JavaScript<br />
                                Finally, if you have any queries, feel free to contact me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home