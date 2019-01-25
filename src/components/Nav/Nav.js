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
        if (page !== '/login') {
            this.props.history.push(page);
        } else {
            //Logout
            localStorage.removeItem('user');
            window.location.href = page;
        }
    }
    render() {
        return (<div className="row">
            <div className="col-sm-12">
                <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                        <button className="nav-item nav-link" id="nav-thread-tab" onClick={() => this.moveToPage('/')} >Threads</button>
                        <button className="nav-item nav-link" id="nav-friend-tab" onClick={() => this.moveToPage('/friend')} >Friends</button>
                        <button className="nav-item nav-link" id="nav-logout-tab" onClick={() => this.moveToPage('/login')}>Logout</button>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
};

export default Nav