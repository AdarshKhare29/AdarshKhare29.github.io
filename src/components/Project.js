const Project = () => {
    return (
        <div className="card_heading">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="project__card shadow-large">
                        <div className="project-image">
                            <img src="images/project1.png" />
                        </div>
                        <div className="project-info">
                            <h3> App Modernization (for banking company based in USA)</h3>
                            <p>
                                The main objective of this project is to create a internet banking website by which the bank customers can make<br />
                                transactions like Balance Inquiry, Fund transfer, Statement view, Bill pay etc from the convenience of their homes.
                            </p>
                            <p>Technologies used : React JS , JavaScript, HTML5, CSS</p>
                            {/* <a href="https://github.com/tarunrpmahar/Teacher-Student_WebApplication"
                                target="_blank">View Project</a> */}
                        </div>
                    </div>

                    <div className="project__card shadow-large">
                        <div className="project-image">
                            <img src="images/project1.png" />
                        </div>
                        <div className="project-info">
                            <h3>Bus Booking Web application</h3>
                            <p>
                                The goal of this project is to create a website where user can search for bus , see available seats and can book seat.
                            </p>
                            <p>echnologies used :  HTML5, CSS, JavaScript, React JS , Node JS , Express JS , MongoDb.</p>
                            <a href="https://github.com/AdarshKhare29/Final-Training-Project"
                                target="_blank">View Project</a>
                        </div>
                    </div>

                    {/* <div className="project__card shadow-large">
                        <div className="project-image">
                            <img src="images/project1.png" />
                        </div>
                        <div className="project-info">
                            <h3>Graduate Admission Dataset</h3>
                            <p>
                                For the given data set we need to create a program using Python.
                                Capable of predicting whether a person is likely to get admission or not and provides
                                detailed and
                                visualized reports to the user.
                                Analyzed the accuracy of Graduate admission dataset using diﬀerent models in Machine
                                Learning
                            </p>
                            <a href="https://github.com/tarunrpmahar/Machine-Learning/tree/master/Graduate%20Admissions%20Project"
                                target="_blank">View Project</a>
                        </div>
                    </div>
                    <div className="project__card shadow-large">
                        <div className="project-image">
                            <img src="images/project1.png" />
                        </div>
                        <div className="project-info">
                            <h3>Graduate Admission Dataset</h3>
                            <p>
                                For the given data set we need to create a program using Python.
                                Capable of predicting whether a person is likely to get admission or not and provides
                                detailed and
                                visualized reports to the user.
                                Analyzed the accuracy of Graduate admission dataset using diﬀerent models in Machine
                                Learning
                            </p>
                            <a href="https://github.com/tarunrpmahar/Machine-Learning/tree/master/Graduate%20Admissions%20Project"
                                target="_blank">View Project</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
export default Project