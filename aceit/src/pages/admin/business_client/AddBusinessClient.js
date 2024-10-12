import React, { useState } from 'react';
import { createBusinessClient } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const AddBusinessClient = () => {
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('client_name', name);
        if (logo) {
            formData.append('client_logo', logo);
        }

        createBusinessClient(formData)
            .then(() => {
                alert('클라이언트가 성공적으로 추가되었습니다.');
                navigate('/businessClientList');
            })
            .catch((error) => console.error('클라이언트 추가 중 오류 발생:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>사업 클라이언트 추가</h2>
            <input
                type="text"
                placeholder="클라이언트 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                accept="image/*"
            />
            <button type="submit">추가</button>
        </form>
    );
};

export default AddBusinessClient;
