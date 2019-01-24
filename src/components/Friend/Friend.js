import React from 'react'
import PropTypes from 'prop-types'
import './Friend.css'

const Friend = ({ id, userName, avatar, mutual, address, onClick }) => (
    <div className="media" onClick={onClick}>
        <img className="d-flex align-self-start" src={avatar} alt="avartar" />
        <div className="media-body pl-3">
            <div className="name">{userName}</div>
            <div className="mutual">
                <span><i className="fa fa-user"></i>{mutual} mutual friends</span>
            </div>
            <div className="address">{address}</div>
        </div>
    </div>
)

Friend.propTypes = {
    onClick: PropTypes.func.isRequired,
    userName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    mutual: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired
}

export default Friend
