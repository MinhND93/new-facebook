import { connect } from 'react-redux'
import { sendMessage, loadMessage } from '../actions'
import React, { Component } from 'react'
import '../components/Chat/Chat.css'
import Nav from '../components/Nav/Nav'
import { withRouter } from 'react-router-dom'

class ChatComponent extends Component {
  componentWillMount() {
    const { fetchData } = this.props
    fetchData();
  }

  render() {
    const { message, onKeyPress, currentUser, targetUser } = this.props
    return (
      <div>
        <Nav history={this.props.history} />
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-primary">
              <div className="panel-title">
                {'Conversation with ' + targetUser.userName}
              </div>
              <div className="panel-body">
                {
                  message.map(mes =>
                    <div key={mes.id} className="clearfix">
                      <blockquote className={mes.from === currentUser.id ? "me pull-right" : "you pull-left"}>{mes.content}
                      </blockquote>
                    </div>
                  )
                }
              </div>
              <div className="panel-footer">
                <div className="input-group">
                  <div className="input-group-append">
                    <span className="input-group-text attach_btn"></span>
                  </div>
                  <textarea onKeyPress={($event) => onKeyPress($event, currentUser)} name="" className="form-control type_msg" placeholder="Press enter to send"></textarea>
                  <div className="input-group-append">
                    <span onClick={() => this.props.fetchData()} className="input-group-text reload_btn">Get Latest Messages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.login;
  const currentUrl = ownProps.history.location.pathname.split('/');
  const targetUserId = parseInt(currentUrl[currentUrl.length - 1], 10);
  return {
    message: state.message.filter(mes => (mes.from === currentUser.id && mes.to === targetUserId) || (mes.from === targetUserId && mes.to === currentUser.id)),
    currentUser: currentUser,
    targetUser: state.user.userList.find(user => user.id === targetUserId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: () => {
    let storeMessages = JSON.parse(localStorage.getItem('initMessage')) ? JSON.parse(localStorage.getItem('initMessage')) : [];
    dispatch(loadMessage(storeMessages));
  },
  onKeyPress: (event, currentUser) => {
    //Check if Enter key is pressed
    if (event.which === 13) {
      event.preventDefault();
      const currentUrl = ownProps.history.location.pathname.split('/');
      const targetUserId = currentUrl[currentUrl.length - 1];
      let message = {
        from: currentUser.id,
        to: parseInt(targetUserId, 10),
        content: event.target.value,
        createDate: new Date()
      }
      dispatch(sendMessage(message));
      event.target.value = '';
    }
  }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent))
