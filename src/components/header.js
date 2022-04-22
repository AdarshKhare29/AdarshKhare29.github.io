import '../index.css'
import { Link } from 'react-router-dom'
const Header = (props) => {
    const { showHeader, setShowHeader } = props
    return (
        <>
            <div id="mobile-menu-open" className="shadow-large" onClick={(e) => setShowHeader(!showHeader)}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <header className={showHeader ? "active" : null}>
                <div id="mobile-menu-close" onClick={(e) => setShowHeader(!showHeader)}>
                    <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul className="menu shadow" onClick={(e) => setShowHeader(false)}>
                    <li className="menu__logo">
                        Adarsh Khare
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li>
                        <Link to="/education">Education</Link>
                    </li>
                    <li>
                        <Link to="/project">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="resume_button">
                        <a href="https://drive.google.com/file/d/1stJpBdaIyZkohxIXk4TdKJmRwqeGdApN/view?usp=sharing"
                            target="_blank">Resume</a>
                    </li>
                </ul>
            </header>
        </>
    )
}
export default Header