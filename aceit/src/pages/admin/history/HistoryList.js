import React, { useEffect, useState } from 'react';
import { getHistory, deleteHistory } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const HistoryList = () => {
    const [historyList, setHistoryList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getHistory()
            .then((response) => setHistoryList(response.data.history))
            .catch((error) => console.error('히스토리를 가져오는 중 오류 발생:', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            deleteHistory(id)
                .then(() => setHistoryList((prev) => prev.filter((history) => history.history_id !== id)))
                .catch((error) => console.error('히스토리 삭제 중 오류 발생:', error));
        }
    };

    const companyHistory = historyList.filter(history => history.history_section_code === 1);
    const developmentHistory = historyList.filter(history => history.history_section_code === 2);

    const handleAddHistory = (sectionCode) => {
        navigate(`/addHistory?sectionCode=${sectionCode}`);
    };

    return (
        <div>
            <h3>히스토리 목록</h3>
            <button onClick={() => navigate('/admin')}>관리자 페이지로 돌아가기</button>

            <div>
                <h4>회사 연혁</h4>
                <button onClick={() => handleAddHistory(1)}>회사 연혁 추가</button> {/* 회사 연혁 추가 버튼 */}
                <ul>
                    {companyHistory.map((history) => (
                        <li key={history.history_id}>
                            <p>{`Date: ${history.history_date}`}</p>
                            <p>{history.history_content}</p>
                            <button onClick={() => navigate(`/editHistory/${history.history_id}`)}>수정</button>
                            <button onClick={() => handleDelete(history.history_id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4>개발 본부의 이력</h4>
                <button onClick={() => handleAddHistory(2)}>개발 본부 이력 추가</button> {/* 개발 본부 이력 추가 버튼 */}
                <ul>
                    {developmentHistory.map((history) => (
                        <li key={history.history_id}>
                            <p>{`Date: ${history.history_date}`}</p>
                            <p>{history.history_content}</p>
                            <button onClick={() => navigate(`/editHistory/${history.history_id}`)}>수정</button>
                            <button onClick={() => handleDelete(history.history_id)}>삭제</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HistoryList;
