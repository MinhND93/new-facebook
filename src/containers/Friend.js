import { connect } from 'react-redux'
import FriendList from '../components/Friend/FriendList'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => {
  let userList = Object.assign({}, state.user).userList;
  let currentUser = state.login;
  let currentUserIndex = state.user.userList.indexOf(state.user.userList.find(user => user.id === currentUser.id));
  if (currentUserIndex !== -1) {
    userList.splice(currentUserIndex, 1);
  }
  return {
    friendList: userList
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  moveToChat: (friend) => {
    ownProps.history.push('/message/' + friend.id);
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList))
