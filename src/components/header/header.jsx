import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './header.scss'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        userInfo: PropTypes.object.isRequired,
        goBack: PropTypes.func,
        goHome: PropTypes.func,
        edit: PropTypes.func,
    }

    handleBack = () => {
        this.props.goBack()
    }

    handleEdit = () => {
        this.props.edit()
    }

    render() {
        return (
            <header id="head-top">
                {/* head left */}

                {/* head middle */}
                {/* head right */}
            </header>
        )
    }
}

export default Header