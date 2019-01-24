const message = (state = [], action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            //check to get latest id from storage
            if (localStorage.getItem('initMessage')) {
                let currentMessage = JSON.parse(localStorage.getItem('initMessage'));
                currentMessage.push({
                    id: currentMessage[currentMessage.length - 1].id + 1,
                    from: action.from,
                    to: action.to,
                    content: action.content,
                    createDate: action.createDate
                });
                localStorage.setItem('initMessage', JSON.stringify(currentMessage));
                return [
                    ...state,
                    {
                        id: currentMessage[currentMessage.length - 1].id,
                        from: action.from,
                        to: action.to,
                        content: action.content,
                        createDate: action.createDate
                    }
                ]
            } else {
                let messages = [];
                messages.push({
                    id: action.id,
                    from: action.from,
                    to: action.to,
                    content: action.content,
                    createDate: action.createDate
                });
                localStorage.setItem('initMessage', JSON.stringify(messages))
                return [
                    ...state,
                    {
                        id: action.id,
                        from: action.from,
                        to: action.to,
                        content: action.content,
                        createDate: action.createDate
                    }
                ]
            }
        case 'LOAD_MESSAGE':
            let data = [];
            action.payload.forEach(element => {
                data = [
                    ...data,
                    element
                ]
            });
            return data
        default:
            return state
    }
}

export default message