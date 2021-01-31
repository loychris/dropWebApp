
// UI 
    export const GO_DARK = 'GO_DARK';
    export const GO_LIGHT = 'GO_LIGHT';

    export const SWITCH_TAB = 'SWITCH_TAB';

    export const OPEN_MODAL = 'OPEN_MODAL';
    export const CLOSE_MODAL = 'CLOSE_MODAL';

    export const OPEN_MENU = 'OPEN_MENU';
    export const CLOSE_MENU = 'CLOSE_MENU';

    export const OPEN_AUTH = 'OPEN_AUTH';
    export const CLOSE_AUTH = 'CLOSE_AUTH';

    export const OPEN_BACKDROP = 'OPEN_BACKDROP';
    export const CLOSE_BACKDROP = 'CLOSE_BACKDROP';

    export const OPEN_NEW_CHAT_MODAL = 'OPEN_NEW_CHAT_MODAL';
    export const CLOSE_NEW_CHAT_MODAL = 'CLOSE_NEW_CHAT_MODAL';

    export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH';


// USER

    export const MESSAGES_READ_START = 'MESSAGES_READ_START';
    export const MESSAGES_READ_SUCCESS = 'MESSAGES_READ_SUCCESS'; 
    export const MESSAGES_READ_FAILED = 'MESSAGES_READ_FAILED';

    export const LOGIN_START = 'LOGIN_START';
    export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
    export const LOGIN_FAIL = 'AUTH_FAIL';

    export const SIGNUP_START = 'SIGNUP_START';
    export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
    export const SIGNUP_FAIL ='SIGNUP_FAIL';

    export const SIGNUP = 'SIGNUP';
    export const LOGOUT = 'LOGOUT';
    export const CHECK_EMAIL = 'CHECK_EMAIL';
    export const CHECK_HANDLE = 'CHECK_HANDLE';

    export const REMOVE_CHAT_NOTIFICATIONS = 'REMOVE_CHAT_NOTIFICATIONS';

    export const REFRESH_NOTIFICATIONS_START = 'REFRESH_NOTIFICATIONS_START';
    export const REFRESH_NOTIFICATIONS_SUCCESS = 'REFRESH_NOTIFICATIONS_SUCCESS';
    export const REFRESH_NOTIFICATIONS_FAILED = 'REFRESH_NOTIFICATIONS_FAILED';


// STREAM
    export const SWIPE = 'SWIPE';
    export const SELECT_DROPTARGET = 'SELECT_DROPTARGET';
    export const UNSELECT_DROPTARGET = 'UNSELECT_DROPTARGET';

    export const SEND_COMMENT_START = 'SEND_COMMENT_START';
    export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS';
    export const SEND_COMMENT_FAILED = 'SEND_COMMENT_FAILED';

    export const SEND_SUBCOMMENT_START = 'SEND_SUBCOMMENT_START'; 
    export const SEND_SUBCOMMENT_SUCCESS = 'SEND_SUBCOMMENT_SUCCESS'; 
    export const SEND_SUBCOMMENT_FAILED = 'SEND_SUBCOMMENT_FAILED';

    export const ADD_SUBCOMMENT = 'ADD_SUBCOMMENT';
    export const DELETE_COMMENT = 'DELETE_COMMENT';
    export const SELECT_COMMENT = 'SELECT_COMMENT';
    export const UNSELECT_COMMENT = 'UNSELECT_COMMENT';

    export const FETCH_IDS_START = 'FETCH_IDS_START';
    export const SET_IDS = 'SET_IDS';
    export const FETCH_IDS_FAILED = 'FETCH_IDS_FAILED';

    export const FETCH_DROP_START = 'FETCH_DROP_START';
    export const FETCH_DROP_SUCCESS = 'FETCH_DROP_SUCCESS';
    export const FETCH_DROP_FAILED = 'FETCH_DROP_FAILED';
    
    export const FETCH_DROPS_START = 'FETCH_DROPS_START';
    export const FETCH_DROPS_FAILED = 'FETCH_DROPS_FAILED';
    export const SET_DROPS = 'SET_DROPS';
    export const SET_DROP = 'SET_DROP';

    // export const SET_COMMENTS = 'SET_COMMENTS';
    // export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';
    export const MEME_LOADED = 'MEME_LOADED';
    export const COMMENT_SAVED ='COMMENT_SAVED';
    export const POST_COMMENT_FAILED = 'POST_COMMENT_FAILED';
    export const SELECT_SUBCOMMENT = 'SELECT_SUBCOMMENT';
    export const UNSELECT_SUBCOMMENT = 'UNSELECT_SUBCOMMENT';
    export const SET_DROPS_NOT_LOADED = 'SET_DROPS_NOT_LOADED';

    export const DELETE_COMMENT_START = 'DELETE_COMMENT_START';
    export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
    export const DELETE_COMMENT_FAILED = 'DELTE_COMMENT_FAILED';

    export const FETCH_MEME_START = 'FETCH_MEME_START';
    export const FETCH_MEME_SUCCESS = 'FETCH_MEME_SUCCESS';
    export const FETCH_MEME_FAILED = 'FETCH_MEME_FAILED';


// CHAT
    export const ADD_NEW_USERS = 'ADD_NEW_USERS';
    export const SET_CHAT_STATE_ON_LOGIN ='SET_CHAT_STATE_ON_LOGIN';
    export const CHANGE_CHAT = 'CHANGE_CHAT';
    export const SET_CHAT_FORM_HEIGHT = 'SET_CHAT_FORM_HEIGHT';
    export const SET_CHAT_INPUT = 'SET_CHAT_INPUT';
    export const SAVE_CHAT_INPUT = 'SAVE_CHAT_INPUT'; 
    export const FETCH_ALL_USERS_START = 'FETCH_ALL_USERS_START';
    export const FETCH_ALL_USERS_FAILED = 'FETCH_ALL_USERS_FALIED';
    export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
    export const CHANGE_FORM_HEIGHT = 'CHANGE_FORM_HEIGHT';
    export const CREATE_DUMMY_CHAT = 'CREATE_DUMMY_CHAT';
    export const CHANGE_CHAT_INPUT = 'CHANGE_CHAT_INPUT';

    export const SEND_NEW_CHAT_START = 'SEND_NEW_CHAT_START';
    export const SEND_NEW_CHAT_SUCCESS = 'SEND_NEW_CHAT_SUCCESS'
    export const SEND_NEW_CHAT_FAILED = 'SEND_NEW_CHAT_FAILED';

    export const SEND_MESSAGE_START = 'SEND_MESSAGE_START';
    export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
    export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';

    export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
    export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
    export const FETCH_FRIENDS_FAILED = 'FETCH_FRIENDS_FAILED'; 

    export const FETCH_FIREND_REQUESTS_START = 'FETCH_FRIEND_REQUESTS_START';    
    export const FETCH_FIREND_REQUESTS_SUCCESS = 'FETCH_FRIEND_REQUESTS_SUCCESS';    
    export const FETCH_FIREND_REQUESTS_FAILED = 'FETCH_FRIEND_REQUESTS_FAILED';    

    export const SEND_FRIEND_REQUEST_START = 'SEND_FRIEND_REQUEST_START';
    export const SEND_FRIEND_REQUEST_SUCCESS = 'SEND_FRIEND_REQUEST_SUCCESS';
    export const SEND_FRIEND_REQUEST_FAILED = 'SEND_FRIEND_REQUEST_FAILED';

    export const ACCEPT_FRIEND_REQUEST_START = 'ACCEPT_FRIEND_REQUEST_START';
    export const ACCEPT_FRIEND_REQUEST_SUCCESS = 'ACCEPT_FRIEND_REQUEST_SUCCESS';
    export const ACCEPT_FRIEND_REQUEST_FAILED = 'ACCEPT_FRIEND_REQUEST_FAILED';

    export const FETCH_CHAT_START = 'FETCH_CHAT_START';
    export const FETCH_CHAT_SUCCESS = 'FETCH_CHAT_SUCCESS';
    export const FETCH_CHAT_FAILED = 'FETCH_CHAT_FALIED';

    export const FETCH_CHATS_START = 'FETCH_CHATS_START';
    export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS';
    export const FETCH_CHATS_FAILED = 'FETCH_CHATS_FAILED';

    export const FETCH_NEW_MESSAGES_START = 'FETCH_NEW_MESSAGES_START';
    export const FETCH_NEW_MESSAGES_SUCCESS = 'FETCH_NEW_MESSAGES_SUCCESS';
    export const FETCH_NEW_MESSAGES_FAILED = 'FETCH_NEW_MESSAGES_FAILED';

    export const SEND_FIRST_MESSAGE_NEW_CHAT_START = 'SEND_FIRST_MESSAGE_NEW_CHAT_START'; 
    export const SEND_FIRST_MESSAGE_NEW_CHAT_SUCCESS = 'SEND_FIRST_MESSAGE_NEW_CHAT_SUCCESS'; 
    export const SEND_FIRST_MESSAGE_NEW_CHAT_FAILED = 'SEND_FIRST_MESSAGE_NEW_CHAT_FAILED'; 
    
    export const CHANGE_SHOULD_DELETE_INPUT = 'CHANGE_SHOULD_DELETE_INPUT';

    export const CHECK_AND_ADD_NEW_MESSAGES = 'CHECK_AND_ADD_NEW_MESSAGES';