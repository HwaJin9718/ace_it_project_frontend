// OrganizationHistory.jsx
import React, { Component } from 'react';
import './OrganizationHistory.css'; // CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion"; // Framer Motion 임포트
import { getHistory } from '../api/AdminAPI'; // getHistory 임포트

// 애니메이션 설정
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const pageAnimate_1 = {
  initial: { y: 0, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8 },
};

export default class OrganizationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyList: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    // 전체 이력 가져오기
    getHistory()
      .then(response => {
        // API 응답 데이터 확인
        console.log("전체 이력 데이터:", response.data);
        // historyList이 배열인지 확인
        if (Array.isArray(response.data)) {
          this.setState({ historyList: response.data, loading: false });
        } else if (response.data.history && Array.isArray(response.data.history)) {
          this.setState({ historyList: response.data.history, loading: false });
        } else {
          console.error("API 응답 형식이 예상과 다릅니다:", response.data);
          this.setState({ error: "이력 데이터를 처리하는 중 오류가 발생했습니다.", loading: false });
        }
      })
      .catch(error => {
        console.error("이력 데이터를 가져오는 중 오류 발생:", error);
        this.setState({ error: "이력 데이터를 가져오는 데 실패했습니다.", loading: false });
      });
  }

  renderTable(title, data) {
    return (
      <div className="container my-5">
        <h2 className="text-center mb-4">{title}</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
          <tr>
            <th>번호</th>
            <th>일자</th>
            <th>내용</th>
          </tr>
          </thead>
          <tbody>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.history_id || index}>
                <td>{index + 1}</td>
                <td>{item.history_date}</td>
                <td>{item.history_content}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">데이터가 없습니다.</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { historyList, loading, error } = this.state;

    // 로딩 상태 처리
    if (loading) {
      return (
        <div className="text-center my-5">
          <div>로딩 중...</div>
        </div>
      );
    }

    // 에러 상태 처리
    if (error) {
      return (
        <div className="text-center my-5 text-danger">
          {error}
        </div>
      );
    }

    // "사업본부 이력"과 "개발본부 이력"으로 분류
    const companyHistory = historyList.filter(history => history.history_section_code === 1);
    const developmentHistory = historyList.filter(history => history.history_section_code === 2);

    return (
      <div>
        {/* 배너 섹션 */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div>
            <motion.div variants={pageAnimate_1}>
              <img
                src="/AdobeStock_banner_2-1.png"
                alt="배너 이미지"
                className="org-history-banner-image-container"
              />
              <div className="banner-text-about">조직도 & 연혁</div>
            </motion.div>
          </div>
        </motion.div>

        {/* 조직도 섹션 */}
        <div className="container">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="org-history-title_comp_name">
              회사 조직도
            </div>
            <img
              src="/organizationcharthistory.jpg"
              alt="회사 조직도"
              className="org-history-image"
            />
          </motion.div>
        </div>

        {/* 임시 텍스트 섹션 (필요 시 삭제) */}
        <div className="container">
          <h1>asd</h1>
        </div>

        {/* 두 개의 테이블 */}
        <div>
          {this.renderTable("사업본부 이력", companyHistory)}
          {this.renderTable("개발본부 이력", developmentHistory)}
        </div>
      </div>
    );
  }
}
