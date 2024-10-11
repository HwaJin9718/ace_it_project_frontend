import React, { useState, useEffect } from 'react';
import { getInformationById, updateInformation } from '../../../api/AdminAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditInformation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        getInformationById(id)
            .then((response) => {
                setName(response.data.information_name);
                setContent(response.data.information_content);
            })
            .catch((error) => console.error('정보를 가져오는 중 오류 발생:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateInformation(id, { information_name: name, information_content: content })
            .then(() => {
                alert('정보가 성공적으로 수정되었습니다.');
                navigate('/informationList');
            })
            .catch((error) => console.error('정보 수정 중 오류 발생:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>정보 수정</h2>
            <input
                type="text"
                placeholder="정보 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea
                placeholder="정보 내용"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">수정</button>
        </form>
    );
};

export default EditInformation;
