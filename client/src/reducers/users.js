const initialState = {
    name: 'Admin',
    password: '12345',
    data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    registrationData: '13.05.2020',
    status: 'Admin',
    avatar: 'https://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRw2JDFOJQhJwIiNMuBLxXcw',
    userId: '1',
    isLogin: false
};


export default function (state = initialState, action) {
    if (typeof action.type === 'undefined') {
        return initialState
    }
    if (action.type === 'USER_LOGIN') {
        return Object.assign({}, state,{ isLogin: true })
    }
    if (action.type === 'USER_LOGOFF') {
        return Object.assign({}, state,{ isLogin: false })
    }
    return state;
}