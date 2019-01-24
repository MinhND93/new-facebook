import React from 'react'
import './Login.css'
import PropTypes from 'prop-types'

const Login = ({ userList, onClick }) => (
    <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
                <div className="card-title text-center">
                    Click on the User to Login
                </div>
                <div className="card-body">
                    <table className="table-users table" border="0">
                        <tbody>
                            {
                                userList.map(user => {
                                    return (<tr key={user.id} onClick={() => onClick(user)}>
                                        <td width="10" align="center">
                                            <i className="fa fa-2x fa-user fw"></i>
                                        </td>
                                        <td>
                                            {user.userName}
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);

Login.propTypes = {
    userList: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Login