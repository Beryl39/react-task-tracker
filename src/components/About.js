import { Link } from 'react-router-dom'
// ^ above replaces a tag with Link tag to prevent page from reloading when going to a different Route

const About = () => {
    return (
        <div className="about-info">
            <h4>Version 1.0.0</h4>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About
