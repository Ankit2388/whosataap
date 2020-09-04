const {
    BASE_URL: URL = 'http://whosatapp.com'
} = process.env;

// const BASE_URL = 'http://192.168.1.21:8062'
const BASE_URL = URL;
export const API_URL = BASE_URL + '/api'
export const LOGIN_URL = BASE_URL + '/oauth/token'
export const USER_URL = API_URL + '/user'

export const POST = 'post';
export const PUT = 'put';
export const GET = 'get';
export const DELETE = 'delete';
