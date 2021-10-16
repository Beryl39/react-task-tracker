import { Link } from 'react-router-dom'
// ^ above replaces a tag with Link tag to prevent page from reloading when going to a different Route

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
