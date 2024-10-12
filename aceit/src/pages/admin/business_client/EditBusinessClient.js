import React, { useState, useEffect } from 'react';
import { getBusinessClientById, updateBusinessClient } from '../../../api/AdminAPI';
import { useParams, useNavigate } from 'react-router-dom';

const EditBusinessClient = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getBusinessClientById(id)
            .then((response) => {
                const client = response.data;
                setName(client.client_name);
                setLoading(false);
            })
            .catch((error) => {
                console.error('클라이언트를 가져오는 중 오류 발생:', error);
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        updateBusinessClient(id, {request : { client_name: name }})
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
            <button type="submit">수정</button>
        </form>
    );
};

export default EditBusinessClient;
