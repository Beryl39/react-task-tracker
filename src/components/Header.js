import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
// Enables us to use location.pathname to stipulate that a certain component should only behave in a specific way if we are on a specific Route i.e. only display a button on a specific page

import Button from './Button'

const Header = ({ title, onAdd, showAddTask }) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && <Button
                color={showAddTask ? 'salmon' : 'cornflowerblue'} 
                text={showAddTask ? 'Cancel' : 'Add New Task'} 
                onClick={onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
