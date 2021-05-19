import * as actionTypes from '../actions/actionTypes';

const initialState = {
    anonymousId: '',
    token: null,
    name: null,
    handle: null,
    userId: '1',
    error: null,
    loading: null,
    checkEmailLoading: false,
    checkHandleLoading: false,
    takenEmails: [],
    takenHandles: [],
    signupLoading: false,
    authOpen: false, 
    authReason: null,
    hasProfilePic: false,
    profilePicSrc: null,
    receivedFriendRequests: [],
    sendingSubscribeEmailList: false,
    sentSubscribeEmailList: false,
    notifications: [
        {
            type: 'TEXT_MESSAGE',
            chatId: '2',
            message:{
                text: 'I won. By a lot.',
                time: '14:32', 
                type: 'text',
                sender: '12',
                id: '1',
            }
        },
        {
            type: 'TEXT_MESSAGE',
            chatId: '3',
            message: {
                text: 'Get out of my swamp!',
                time: '14:32', 
                type: 'text',
                sender: '12345',
                id: '1',
            }
        },
    ], 
    deletingNotifications: [],
}

const setAnonymousId = (state, action) => {
    return {
        ...state,
        anonymousId: action.anonymousId
    }
}

//------ LOGIN ---------------------------------------------------

const loginStart = (state) => {
    return { 
        ...state, 
        loginLoading: true 
    }
}

const loginSuccess = (state, action) => {
    return { 
        ...state, 
        loginLoading: false, 
        loginError: null, 
        signupError: null, 
        hasProfilePic: action.profilePic,
        name: action.name,
        handle: action.handle,
        userId: action.userId, 
        token: action.token,
        email: action.email,
        friends: action.friends,
        receivedFriendRequests: action.receivedFriendRequests,
        notifications: action.notifications
    }
}

const loginFail = (state, action) => {
    return { 
        ...state, 
        loginLoading: false, 
        loginError: action.error 
    }
}

//------ SIGNUP --------------------------------------------------


const signupStart = ( state) => {
    return { 
        ...state, 
        signupLoading: true 
    }
}

const signupFail = (state, action) => {
    return { 
        ...state, 
        signupLoading: false, 
        signupError: action.error 
    }
}

const signupSuccess = (state, action) => {
    return { 
        ...state, 
        signupLoading: false, 
        error: null, 
        hasProfilePic: action.profilePic,
        name: action.name,
        handle: action.handle,
        userId: action.userId, 
        token: action.token,
        email: action.email,
        profilePicSrc: action.profilePicSrc,
        friends: action.friends,
        receivedFriendRequests: [],
        notifications: [],
        sendingSubscribeEmailList: false,
    }
}

//------ CHECK EMAIL TAKEN ---------------------------------------

const checkEmailTakenStart = (state, action) => {
    return {
        ...state,
        checkEmailLoading: true,
    }
}

const checkEmailTakenSuccess = (state, action) => {
    return {
        ...state,
        checkEmailLoading: false,
    }
}

const checkEmailTakenFailed = (state, action) => {
    return {
        ...state,
        checkEmailLoading: false,
    }
}

const emailAlreadyTaken = (state, action) => {
    return {
        ...state,
        checkEmailLoading: false,
        takenEmails: [
            ...state.takenEmails,
            action.email
        ]
    }
}

//------ CHECK HANDLE TAKEN ---------------------------------------

const checkHandleTakenStart = (state, action) => {
    return {
        ...state,
        checkHandleLoading: true,
    }
}

const checkHandleTakenSuccess = (state, action) => {
    return {
        ...state,
        checkHandleLoading: false,
    }
}

const checkHandleTakenFailed = (state, action) => {
    return {
        ...state,
        checkHandleLoading: false,
    }
}

const handleAlreadyTaken = (state, action) => {
    return {
        ...state,
        checkHandleLoading: false,
        takenHandles: [
            ...state.takenHandles,
            action.handle
        ]
    }
}

//------ MESSAGES READ -------------------------------------------

const messagesReadStart = (state, action) => {
    const notificationsNew = state.notifications
        .filter(n => !(n.type.startsWith('NEW_MESSAGE') && n.chatId === action.chatId))
    return {
        ...state,
        notifications: notificationsNew
    }
}

const messagesReadSuccess = (state, action) => {
    return state
}

const messagesReadFailed = (state, action) => {
    return state
}

//------ UPDATE NOTIFICATIONS -------------------------------------


const checkAndAddNewMessages = (state, action) => {
    return state
}

const updateNotifications = (state, action) => {
    return {
        ...state,
        notifications: action.notifications
    }
}

//------ SUBSCRIBE EMAIL LIST -------------------------------------

const subscribeEmailListStart = (state, action) => {
    return {
        ...state,
        sendingSubscribeEmailList: true
    }
}

const subscribeEmailListSuccess = (state, action) => {
    return {
        ...state,
        sendingSubscribeEmailList: false,
        sentSubscribeEmailList: true
    }
}

const subscribeEmailListFailed = (state, action) => {
    return {
        ...state,
        emailListError: action.message,
        sendingSubscribeEmailList: false,
        sentSubscribeEmailList: false
    }
}

const deleteNotificationStart = (state, action) => {
    const toDelte = state.notifications.find(n => n.id === action.notificationId);
    console.log(toDelte);
    const notificationsNew = state.notifications.filter(n => n.id !== action.notificationId);
    const deletingNotificationsNew = [...state.deletingNotifications, toDelte];
    return {
        ...state,
        notifications: notificationsNew,
        deletingNotifications: deletingNotificationsNew,
    }
}

const deleteNotificationSuccess = (state, action) => {
    const deletingNotificationsNew = state.deletingNotifications.filter(n => n.id === action.notificationId)
    return {
        ...state,
        deletingNotifications: deletingNotificationsNew,
    }
}

const deleteNotificationFailed = (state, action) => {
    return {
        ...state,
    }
}

const reducer = (state = initialState, action ) => {
    switch( action.type ) {
        case actionTypes.SET_ANONYMOUS_ID: return setAnonymousId(state, action);

        case actionTypes.LOGIN_START: return loginStart(state, action);
        case actionTypes.LOGIN_SUCCESS: return loginSuccess(state, action);
        case actionTypes.LOGIN_FAIL: return loginFail(state, action);

        case actionTypes.SIGNUP_START: return signupStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signupSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signupFail(state, action);

        case actionTypes.CHECK_EMAIL_TAKEN_START: return checkEmailTakenStart(state, action);
        case actionTypes.CHECK_EMAIL_TAKEN_SUCCESS: return checkEmailTakenSuccess(state, action);
        case actionTypes.CHECK_EMAIL_TAKEN_FAILED: return checkEmailTakenFailed(state, action);
        case actionTypes.EMAIL_ALREADY_TAKEN: return emailAlreadyTaken(state, action);

        case actionTypes.CHECK_HANDLE_TAKEN_START: return checkHandleTakenStart(state, action);
        case actionTypes.CHECK_HANDLE_TAKEN_SUCCESS: return checkHandleTakenSuccess(state, action);
        case actionTypes.CHECK_HANDLE_TAKEN_FAILED: return checkHandleTakenFailed(state, action);
        case actionTypes.HANDLE_ALREADY_TAKEN: return handleAlreadyTaken(state, action);

        case actionTypes.MESSAGES_READ_START: return messagesReadStart(state, action);
        case actionTypes.MESSAGES_READ_SUCCESS: return messagesReadSuccess(state, action);
        case actionTypes.MESSAGES_READ_FAILED: return messagesReadFailed(state, action);

        case actionTypes.CHECK_AND_ADD_NEW_MESSAGES: return checkAndAddNewMessages(state, action);

        case actionTypes.UPDATE_NOTIFICATIONS: return updateNotifications(state, action);

        case actionTypes.SUBSCRIBE_EMAIL_LIST_START: return subscribeEmailListStart(state, action);
        case actionTypes.SUBSCRIBE_EMAIL_LIST_SUCCESS: return subscribeEmailListSuccess(state, action);
        case actionTypes.SUBSCRIBE_EMAIL_LIST_FAILED: return subscribeEmailListFailed(state, action);

        case actionTypes.DELETE_NOTIFICATION_START: return deleteNotificationStart(state, action);
        case actionTypes.DELETE_NOTIFICATION_SUCCESS: return deleteNotificationSuccess(state, action);
        case actionTypes.DELETE_NOTIFICATION_FAILED: return deleteNotificationFailed(state, action);

        default: return state;
    }
}

export default reducer; 