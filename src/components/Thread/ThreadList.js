import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav/Nav'
import Thread from './Thread'

const ThreadList = ({ threadList, history }) => {
    return (
        <div>
            <Nav history={history}/>
            {
                threadList.map((thread) =>
                    <Thread
                        key={thread.id}
                        {...thread}
                    />
                )
            }
        </div>
    );
};

ThreadList.propTypes = {
    threadList: PropTypes.array
}

export default ThreadList