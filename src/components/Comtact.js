const Contact = () => {
    return (
        <div id="contact" className="card_heading">
            <h2>Get in Touch</h2>
            <div className="contactus-detail">
                <p>
                    I am available on almost every social media. You can message me,
                    my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
            </div>
        <div className="social-media">
            <ul>
                <li><a href="mailto:adarshkhare86@gmail.com"><img src='images/Gmail-logo.png' alt="gmail-logo"/></a></li>
                <li><a href="https://www.linkedin.com/in/adarshkhare29/" target="_blank"><img src='images/linkedinLOgo.png' alt="linkedin-logo"/></a></li>
                <li><a href="https://github.com/AdarshKhare29" target="_blank"><img src='images/GitHubLogo.png' alt="github-logo"/></a></li>
            </ul>
        </div>

        </div>
    )
}
export default Contact