import React, { useEffect, useState } from 'react';
import { getCompanyVisionValues, deleteCompanyVisionValue } from '../../../api/AdminAPI';
import { useNavigate } from 'react-router-dom';

const CompanyVisionValuesList = () => {
    const [companyVisionValues, setCompanyVisionValues] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCompanyVisionValues()
            .then((response) => setCompanyVisionValues(response.data.company_vision_values))
            .catch((error) => console.error('비전 값을 가져오는 중 오류 발생:', error));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            deleteCompanyVisionValue(id)
                .then(() => setCompanyVisionValues((prev) => prev.filter((visionValue) => visionValue.vv_id !== id)))
                .catch((error) => console.error('비전 값 삭제 중 오류 발생:', error));
        }
    };

    return (
        <div>
            <h3>회사 비전 목록</h3>
            <button onClick={() => navigate('/addCompanyVisionValue')}>비전 추가</button>
            <button onClick={() => navigate('/admin')}>관리자 페이지로 돌아가기</button>
            <ul>
                {companyVisionValues.map((visionValue) => (
                    <li key={visionValue.vv_id}>
                        <h5>{visionValue.vv_name}</h5>
                        <p>{visionValue.vv_content}</p>
                        <pre>{JSON.stringify(visionValue.vv_details, null, 2)}</pre>
                        <button onClick={() => navigate(`/editCompanyVisionValue/${visionValue.vv_id}`)}>수정</button>
                        <button onClick={() => handleDelete(visionValue.vv_id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyVisionValuesList;
