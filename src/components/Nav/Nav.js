import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.moveToPage = this.moveToPage.bind(this);
    }
    /**
     * Navigation
     * @param {*} page 
     */
    moveToPage(page) {
        this.props.history.push(page);
    }
    render() {
        return (<div className="row">
            <div className="col-sm-12">
                <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <button className="nav-item nav-link" id="nav-thread-tab" data-toggle="tab"  onClick={() => this.moveToPage('/')} role="tab" aria-controls="nav-thread" aria-selected="false">Threads</button>
                        <button className="nav-item nav-link" id="nav-friend-tab" data-toggle="tab"  onClick={() => this.moveToPage('/friend')} role="tab" aria-controls="nav-friend" aria-selected="false">Friends</button>
                        <button className="nav-item nav-link" id="nav-logout-tab" data-toggle="tab"  onClick={() => this.moveToPage('/login')} role="tab" aria-controls="nav-friend" aria-selected="false">Logout</button>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
};

export default Nav