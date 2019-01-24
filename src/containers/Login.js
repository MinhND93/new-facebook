import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { login } from '../actions/index'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    userList: state.user.userList
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (user) => {
        dispatch(login(user));
        localStorage.setItem('user', JSON.stringify(user));
        ownProps.history.push('/');
    }

})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Login))
