import axios from 'axios';

const informationAPI = axios.create({
    baseURL: 'http://localhost:8000/information', // 실제 API의 base URL로 변경하세요.
});

export const getInformation = () => informationAPI.get('');
export const getInformationById = (id) => informationAPI.get(`/${id}`);
export const createInformation = (data) => informationAPI.post('', data);
export const updateInformation = (id, data) => informationAPI.patch(`/${id}`, { request: data });
export const deleteInformation = (id) => informationAPI.delete(`/${id}`);

const historyAPI = axios.create({
    baseURL: 'http://localhost:8000/history', // 실제 API의 base URL로 변경하세요.
});

export const getHistory = () => historyAPI.get('');
export const getHistoryBySection = (sectionCode) => historyAPI.get(`/section_code/${sectionCode}`);
export const getHistoryById = (id) => historyAPI.get(`/id/${id}`);
export const createHistory = (data) => historyAPI.post('', data);
export const updateHistory = (id, data) => historyAPI.patch(`/${id}`, { request: data });
export const deleteHistory = (id) => historyAPI.delete(`/${id}`);

