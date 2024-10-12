import React, { useState, useEffect } from 'react';
import { getCompanyVisionValueById, updateCompanyVisionValue } from '../../../api/AdminAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditCompanyVisionValue = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [details, setDetails] = useState([{ key: '', value: '' }]); // key-value 쌍 리스트로 초기화
    const [loading, setLoading] = useState(true);

    // 비전 값을 가져오기
    useEffect(() => {
        getCompanyVisionValueById(id)
            .then((response) => {
                const visionValue = response.data;
                setName(visionValue.vv_name);
                setContent(visionValue.vv_content || ''); // null이면 빈 문자열로 처리

                // 기존 vv_details JSON 데이터를 key-value 쌍 배열로 변환
                const detailsArray = visionValue.vv_details
                    ? Object.entries(visionValue.vv_details).map(([key, value]) => ({ key, value }))
                    : [{ key: '', value: '' }]; // details가 없으면 빈 배열로 초기화
                setDetails(detailsArray);

                setLoading(false);
            })
            .catch((error) => {
                console.error('비전 값을 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, [id]);

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

        // key-value 배열을 다시 JSON 형식으로 변환
        const formattedDetails = details.reduce((acc, detail) => {
            if (detail.key && detail.value) {
                acc[detail.key] = detail.value;
            }
            return acc;
        }, {});

        updateCompanyVisionValue(id, {
            vv_name: name,
            vv_content: content || null, // content가 빈 문자열일 경우 null로 처리
            vv_details: Object.keys(formattedDetails).length > 0 ? formattedDetails : null // 빈 key-value는 null로 처리
        })
            .then(() => {
                alert('비전 값이 성공적으로 수정되었습니다.');
                navigate('/companyVisionValuesList');
            })
            .catch((error) => console.error('비전 값 수정 중 오류 발생:', error));
    };

    if (loading) {
        return <p>Loading...</p>; // 로딩 중일 때 표시
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>비전 수정</h2>
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

            <button type="submit">수정</button>
        </form>
    );
};

export default EditCompanyVisionValue;
