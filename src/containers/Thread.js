import { connect } from 'react-redux'
import ThreadList from '../components/Thread/ThreadList'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    threadList: state.thread.threadList
  }
}

const mapDispatchToProps = dispatch => ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ThreadList))
