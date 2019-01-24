import React from 'react'
import PropTypes from 'prop-types'
import './Thread.css'

const Thread = ({ image, content }) => (
    <div className="row thread-item">
        <div className='col-md-12'>
            <div className="card">
                <img className="card-img-top" src={image} alt="cover" />
                <div className="card-body">
                    <p className="card-text">{content}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger">Like</button>
                    <button className="btn btn-primary float-right">Share</button>
                </div>
            </div>
        </div>
    </div>
)

Thread.propTypes = {
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Thread
