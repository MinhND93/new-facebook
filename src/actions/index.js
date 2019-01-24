let nextMessageId = 1
export const sendMessage = message => ({
  type: 'SEND_MESSAGE',
  id: nextMessageId++,
  ...message
})

export const loadMessage = messages => ({
  type: 'LOAD_MESSAGE',
  payload: messages
})

export const login = user => ({
  type: 'LOGIN',
  payload: user
})

