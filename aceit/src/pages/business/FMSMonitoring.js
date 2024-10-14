import React, { useEffect, useState } from 'react';
import { getBusinessAreaById } from '../../api/AdminAPI';

const FMSMonitoring = () => {
    const [businessAreas, setBusinessAreas] = useState({});

    useEffect(() => {
        getBusinessAreaById(2)
            .then((response) => setBusinessAreas(response.data))
            .catch((error) => console.error('사업 영역을 가져오는 중 오류 발생:', error));
    }, []);

    return (
        <div>
            {businessAreas ? (
                <>
                    <h3>{businessAreas.area_name}</h3>
                    <pre>사업 영역 : {JSON.stringify(businessAreas.area_type, null, 2)}</pre>
                    <p>사업 설명 : {businessAreas.area_content}</p>
                    <pre>상세 항목 : {JSON.stringify(businessAreas.area_details, null, 2)}</pre>
                </>
            ) : (
                <p>데이터를 불러오는 중입니다...</p>
            )}
        </div>
    );
};

export default FMSMonitoring;
