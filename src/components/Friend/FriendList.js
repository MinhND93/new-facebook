import React from 'react'
import PropTypes from 'prop-types'
import Nav from '../Nav/Nav'
import Friend from './Friend'

const FriendList = ({ friendList, moveToChat, history }) => {
    return (
        <div>
            <Nav history={history}/>
            <div className="row">
                <div className='col-md-12 listing-block'>
                    {
                        friendList.map(friend =>
                            <Friend
                                key={friend.id}
                                {...friend}
                                onClick = {() => moveToChat(friend)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};

FriendList.propTypes = {
    friendList: PropTypes.array,
    moveToChat: PropTypes.func
}

export default FriendList