import React, { useState } from 'react';
import { createCompanyVisionValue } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const AddCompanyVisionValue = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [details, setDetails] = useState([{ key: '', value: '' }]); // key-value 쌍 리스트로 초기화
    const navigate = useNavigate();

    // key-value 쌍 추가
    const handleAddDetail = () => {
        setDetails([...details, { key: '', value: '' }]);
    };

    // key-value 쌍 삭제
    const handleRemoveDetail = (index) => {
        const newDetails = [...details];
        newDetails.splice(index, 1);
        setDetails(newDetails);
    };

    // key-value 입력값 변경 핸들러
    const handleDetailChange = (index, field, value) => {
        const newDetails = [...details];
        newDetails[index][field] = value;
        setDetails(newDetails);
    };

    // form 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDetails = details.reduce((acc, detail) => {
            if (detail.key && detail.value) {
                acc[detail.key] = detail.value;
            }
            return acc;
        }, {});

        createCompanyVisionValue({
            vv_name: name,
            vv_content: content || null, // 빈 값일 경우 null로 처리
            vv_details: Object.keys(formattedDetails).length > 0 ? formattedDetails : null // 빈 경우 null로 처리
        })
            .then(() => {
                alert('비전 값이 성공적으로 추가되었습니다.');
                navigate('/companyVisionValuesList');
            })
            .catch((error) => console.error('비전 값 추가 중 오류 발생:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>비전 추가</h2>
            <input
                type="text"
                placeholder="비전 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="비전 내용 (선택 사항)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <h3>비전 세부 사항 (key-value 쌍, 선택 사항)</h3>
            {details.map((detail, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Key"
                        value={detail.key}
                        onChange={(e) => handleDetailChange(index, 'key', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Value"
                        value={detail.value}
                        onChange={(e) => handleDetailChange(index, 'value', e.target.value)}
                    />
                    {details.length > 1 && (
                        <button type="button" onClick={() => handleRemoveDetail(index)}>
                            삭제
                        </button>
                    )}
                </div>
            ))}

            <button type="button" onClick={handleAddDetail}>
                key-value 입력창 추가
            </button>

            <button type="submit">제출</button>
        </form>
    );
};

export default AddCompanyVisionValue;
