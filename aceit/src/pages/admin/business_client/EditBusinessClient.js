import React, { useState, useEffect } from 'react';
import { getBusinessClientById, updateBusinessClient } from '../../../api/AdminAPI';
import { useParams, useNavigate } from 'react-router-dom';
import { API_SERVER_HOST } from '../../../api/AdminAPI'; // API 서버 호스트 import

const EditBusinessClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [logo, setLogo] = useState(null);
    const [currentLogoPath, setCurrentLogoPath] = useState('');
    const [deleteLogo, setDeleteLogo] = useState(false);  // 로고 삭제 여부를 위한 상태
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBusinessClientById(id)
            .then((response) => {
                const client = response.data;
                setName(client.client_name);
                setCurrentLogoPath(client.client_logo_path);
                setLoading(false);
            })
            .catch((error) => {
                console.error('클라이언트를 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('client_name', name);

        // 이미지를 삭제하려는 경우 delete_logo 추가
        formData.append('delete_logo', deleteLogo);

        if (logo) {
            formData.append('client_logo', logo);
        }

        updateBusinessClient(id, formData)
            .then(() => {
                alert('클라이언트가 성공적으로 수정되었습니다.');
                navigate('/businessClientList');
            })
            .catch((error) => console.error('클라이언트 수정 중 오류 발생:', error));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>사업 클라이언트 수정</h2>
            <input
                type="text"
                placeholder="클라이언트 이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            {/* 기존 로고가 있는 경우 표시 */}
            {currentLogoPath && (
                <>
                    <p>현재 로고:</p>
                    <img src={`${API_SERVER_HOST}/${currentLogoPath}`} alt="Client Logo" width={200} />

                    {/* 로고 삭제 여부 체크박스 */}
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={deleteLogo}
                                onChange={(e) => setDeleteLogo(e.target.checked)}
                            />
                            기존 로고 삭제
                        </label>
                    </div>
                </>
            )}

            {/* 새로운 로고 업로드 옵션 */}
            <input
                type="file"
                onChange={(e) => setLogo(e.target.files[0])}
                accept="image/*"
            />

            <button type="submit">수정</button>
        </form>
    );
};

export default EditBusinessClient;
