export const MOCK_STATE = {
    user: {
        userList: initUsers()
    },
    thread: {
        threadList: initThreads()
    }
}

function initUsers() {
    let userList = [];

    for (let i = 1; i < 10; i++) {
        userList.push({
            id: i,
            userName: 'User ' + i,
            email: 'minhnd081293@gmail.com',
            avatar: 'https://i2.wp.com/xansan.com/wp-content/uploads/2018/10/user-avatar-default-2609.png?ssl=1',
            mutual: 8,
            address: 'Stockholm, Sweden'
        });
    };
    return userList;
}

function initThreads() {
    let threadList = [];
    for (let i = 1; i < 20; i++) {
        threadList.push({
            id: i,
            content: `Lorem ipsum dolor sit amet, qui duis quando constituam cu, no sea alia graeci voluptatibus. Eius omnes vivendum ad his, 
            cu pro vidit error mandamus, stet fugit dissentias duo id. Wisi delectus cu mea, cu prima quaestio per, salutatus argumentum et nec. 
            This is sample thread ` + i,
            image: (i % 2) === 0 ?
                'http://4.bp.blogspot.com/-xE5C0WBGh4o/Tp5WWmdO3fI/AAAAAAAAAEA/G08pmkhrWhM/s1600/beatiful+water+fall+with+green+trees+and+river.jpg' :
                'https://media-cdn.tripadvisor.com/media/photo-s/0c/ea/20/78/beatiful-bali-island.jpg',
            ownerId: Math.floor(Math.random() * 6) + 1,
            createDate: new Date()
        });
    };

    return threadList;
}
