import React, { useEffect, useState } from 'react';
import { getInformation, deleteInformation } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const InformationList = () => {
    const [informationList, setInformationList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getInformation()
            .then((response) => setInformationList(response.data.information))
            .catch((error) => console.error('정보를 가져오는 중 오류 발생:', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            deleteInformation(id)
                .then(() => setInformationList((prev) => prev.filter((info) => info.information_id !== id)))
                .catch((error) => console.error('정보 삭제 중 오류 발생:', error));
        }
    };

    return (
        <div>
            <h3>회사 정보 목록</h3>
            <button onClick={() => navigate('/addInformation')}>정보 추가</button>
            <button onClick={() => navigate('/admin')}>관리자 페이지로 돌아가기</button> {/* AdminPage로 이동하는 버튼 */}
            <ul>
                {informationList.map((info) => (
                    <li key={info.information_id}>
                        <h5>{info.information_name}</h5>
                        <p>{info.information_content}</p>
                        <button onClick={() => navigate(`/editInformation/${info.information_id}`)}>수정</button>
                        <button onClick={() => handleDelete(info.information_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InformationList;
