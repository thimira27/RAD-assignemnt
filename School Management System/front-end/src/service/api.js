import axios from 'axios';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from '../constants/config';
import { getAccessToken, getRefreshToken, setAccessToken, getType } from '../utils/common-utils';

const usersUrl = 'http://localhost:8080';


export const addStudent = async (student) => {
    return await axios.post(`${usersUrl}/student/addStudent`, student);
}

export const getStudents = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/student/all/${id}`);
}

export const deleteStudent = async (id) => {
    return await axios.delete(`${usersUrl}/student/${id}`);
}

export const editStudent = async (id, student) => {
    return await axios.put(`${usersUrl}/student/${id}`, student)
}

export const addBook = async (book) => {
    return await axios.post(`${usersUrl}/book/addBook`, book);
}

export const getBooks = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/book/books/${id}`);
}

export const deleteBook = async (id) => {
    return await axios.delete(`${usersUrl}/book/${id}`);
}

export const editBook = async (id, book) => {
    return await axios.put(`${usersUrl}/book/${id}`, book)
}

export const addTeacher = async (teacher) => {
    return await axios.post(`${usersUrl}/teacher/addTeacher`, teacher);
}

export const getTeachers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/teacher/teachers/${id}`);
}

export const deleteTeacher = async (id) => {
    return await axios.delete(`${usersUrl}/teacher/${id}`);
}

export const editTeacher = async (id, teacher) => {
    return await axios.put(`${usersUrl}/teacher/${id}`, teacher)
}

export const addSubject = async (subject) => {
    return await axios.post(`${usersUrl}/subject/addSubject`, subject);
}

export const getSubjects = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/subject/subject/${id}`);
}

export const deleteSubject = async (id) => {
    return await axios.delete(`${usersUrl}/subject/${id}`);
}

export const editSubject = async (id, subject) => {
    return await axios.put(`${usersUrl}/subject/${id}`, subject)
}


export const addLabItem = async (labitem) => {
    return await axios.post(`${usersUrl}/labitem/addLabItem`, labitem);
}

export const getLabItems = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/labitem/labitems/${id}`);
}

export const deleteLabItem = async (id) => {
    return await axios.delete(`${usersUrl}/labitem/${id}`);
}

export const editLabItem = async (id, labitem) => {
    return await axios.put(`${usersUrl}/labitem/${id}`, labitem)
}

const axiosInstance = axios.create({
    baseURL: usersUrl,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config) {
        if (config.TYPE.params) {
            config.params = config.TYPE.params
        } else if (config.TYPE.query) {
            config.url = config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function(response) {
        // Stop global loader here
        return processResponse(response);
    },
    function(error) {
        // Stop global loader here
        return Promise.reject(ProcessError(error));
    }
)


const processResponse = (response) => {
    if (response?.status === 200) {
        return { isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


const ProcessError = async (error) => {
    if (error.response) {

        if (error.response?.status === 403) {

                    sessionStorage.clear();

        } else {
            console.log("ERROR IN RESPONSE: ", error.toJSON());
            return {
                isError: true,
                msg: API_NOTIFICATION_MESSAGES.responseFailure,
                code: error.response.status
            }
        }
    } else if (error.request) { 
        // The request was made but no response was received
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code: ""
        }
    } else { 
        // Something happened in setting up the request that triggered an Error
        console.log("ERROR IN RESPONSE: ", error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? '' : body,
            responseType: value.responseType,
            headers: {
                authorization: getAccessToken(),
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };

