import React, { useState, useEffect } from 'react';
import { getHistoryById, updateHistory } from '../../../api/AdminAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditHistory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [sectionCode, setSectionCode] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        getHistoryById(id)
            .then((response) => {
                const history = response.data;
                console.log('get history:', history); // 콘솔로 받아온 데이터 확인
                setSectionCode(history.history_section_code);
                setDate(history.history_date); // 날짜는 "YYYY-MM-DD" 형식으로 반환되어야 함
                setContent(history.history_content);
                setLoading(false); // 데이터 로드 완료 후 로딩 상태 업데이트
            })
            .catch((error) => {
                console.error('히스토리를 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateHistory(id, {
            history_section_code: parseInt(sectionCode), // 그대로 유지
            history_date: date,
            history_content: content
        })
            .then(() => {
                alert('히스토리가 성공적으로 수정되었습니다.');
                navigate('/historyList');
            })
            .catch((error) => console.error('히스토리 수정 중 오류 발생:', error));
    };

    if (loading) {
        return <p>Loading...</p>; // 데이터를 가져오는 동안 로딩 메시지 표시
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>히스토리 수정</h2>
            <input
                type="number"
                placeholder="Section Code"
                value={sectionCode}
                readOnly // Section code는 수정 불가하게 설정
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
            <button type="submit">수정</button>
        </form>
    );
};

export default EditHistory;
