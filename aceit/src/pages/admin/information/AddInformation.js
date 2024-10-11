import React, { useState } from 'react';
import { createInformation } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const AddInformation = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createInformation({ information_name: name, information_content: content })
            .then(() => {
                alert('정보가 성공적으로 추가되었습니다.');
                navigate('/informationList');
            })
            .catch((error) => console.error('정보 추가 중 오류 발생:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>정보 추가</h2>
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
            <button type="submit">추가</button>
        </form>
    );
};

export default AddInformation;
