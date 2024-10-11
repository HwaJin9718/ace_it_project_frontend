import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    const handleNavigateToInformationList = () => {
        navigate('/informationList');
    };

    const handleNavigateToHistoryList = () => {
        navigate('/historyList');
    };

    return (
        <div>
            <h3>관리자 페이지</h3>
            <button onClick={handleNavigateToInformationList}>
                information 목록 보기
            </button>
            <button onClick={handleNavigateToHistoryList}>
                history 목록 보기
            </button>
        </div>
    );
};

export default AdminPage;
