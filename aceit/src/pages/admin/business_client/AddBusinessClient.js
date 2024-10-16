import React, { useState } from 'react';
import { createBusinessClient } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const AddBusinessClient = () => {
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);  // 이미지 미리보기 상태
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

    // 이미지 파일을 선택할 때 미리보기 및 상태 저장
    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(file);
            setLogoPreview(URL.createObjectURL(file));  // 파일 미리보기 URL 생성
        }
    };

    // 이미지 파일을 삭제할 때
    const handleLogoRemove = () => {
        setLogo(null);
        setLogoPreview(null);
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

            {/* 이미지 파일 선택 */}
            <input
                type="file"
                onChange={handleLogoChange}
                accept="image/*"
            />

            {/* 이미지 미리보기 및 삭제 옵션 */}
            {logoPreview && (
                <div>
                    <p>선택된 로고:</p>
                    <img src={logoPreview} alt="Logo Preview" width={200} />
                    <button type="button" onClick={handleLogoRemove}>이미지 삭제</button>
                </div>
            )}

            <button type="submit">추가</button>
        </form>
    );
};

export default AddBusinessClient;
