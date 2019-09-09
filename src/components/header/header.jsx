import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './header.scss'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        userInfo: PropTypes.object.isRequired
    }

    handleBack = () => {
        this.props.goBack()
    }

    handleEdit = () => {
        this.props.edit()
    }

    render() {
        return (
            <header className="header-container">
                {this.props.title&& <h1>{this.props.title}</h1>}
                {this.props.userInfo&& <h1>{this.props.userInfo}</h1>}
            </header>
        )
    }
}

export default Header