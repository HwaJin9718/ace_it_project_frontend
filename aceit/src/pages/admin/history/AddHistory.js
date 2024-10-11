import React, { useState, useEffect } from 'react';
import { createHistory } from '../../../api/AdminAPI';
import { useNavigate, useLocation } from 'react-router-dom';

const AddHistory = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [sectionCode, setSectionCode] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    // 쿼리 파라미터에서 sectionCode 가져오기
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const sectionCodeParam = queryParams.get('sectionCode');
        if (sectionCodeParam) {
            setSectionCode(sectionCodeParam);
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createHistory({ history_section_code: parseInt(sectionCode), history_date: date, history_content: content })
            .then(() => {
                alert('히스토리가 성공적으로 추가되었습니다.');
                navigate('/historyList');
            })
            .catch((error) => console.error('히스토리 추가 중 오류 발생:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>히스토리 추가</h2>
            <input
                type="number"
                placeholder="Section Code"
                value={sectionCode}
                readOnly // 쿼리 파라미터로 받은 값은 수정 불가하게 설정
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default AddHistory;
