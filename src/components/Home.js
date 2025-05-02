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
                               Hi, I'm Adarsh Khare — a passionate Frontend Developer and Computer Science graduate with 5 years of experience building intuitive, scalable, and high-performance web applications.
                               I specialize in React.js and JavaScript, and I bring a strong eye for design, a deep understanding of UI/UX principles, and a knack for clean, maintainable code. From startups to 
                               enterprise projects, I’ve led the development of solutions that drive real business value.I thrive in fast-paced, collaborative environments, and I’m skilled at managing the entire 
                               software development lifecycle, from planning and design to deployment and optimization. Whether it’s solving complex problems or coordinating cross-functional teams, I always aim to 
                               deliver on time — without compromising quality.If you’re looking for someone who combines technical expertise with a problem-solving mindset, let’s connect! I'm always open to new 
                               opportunities, challenges, or just a great conversation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
