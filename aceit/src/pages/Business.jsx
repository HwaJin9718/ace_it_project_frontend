import React, { Component } from 'react';
import NavbarComp from "../components/layouts/Navigation/NavbarComp";
import './Business.css'; // CSS 파일 임포트
import 'bootstrap/dist/css/bootstrap.min.css'; // 부트스트랩 CSS 임포트

export default class Business extends Component {
  render() {
    return (
      <div>
        <div className="business-container">
          <img src="/AdobeStock_banner_2-1.png" alt="배너 이미지" className="banner-image-container"/>
          <div className="banner-text-business">
            회사소개
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* 왼쪽 이미지 */}
            <div className="col-md-6">
              <img src="/vision_value.png" alt="비전 및 가치" className="business-vision-image"/>
            </div>

            {/* 오른쪽 텍스트 */}
            <div className="col-md-6">
              <div className="vision-text-container">
                <h2>KIS시스템즈의 비전</h2>
                <p className="subheading">새로운 기술, 고객과의 소통을 통한 새로운 패러다임을 제시</p>
                <ul>
                  <li>시대의 요구사항과 변화를 따르는 KIS가 되기위한 멈추지 않는 도전</li>
                  <li>국내 최대의 소프트웨어, 인프라 구축 업체로 발돋움 하기 위한 새로운 기술 연구</li>
                  <li>고객의 가치를 최우선으로 하는 노력을 기울이는 기업이 되고자 고객과의 소통을 중시</li>
                  <li>직원의 복지와 교육의 증대를 통해 임직원의 능력과 가치를 향상</li>
                  <li>철저한 A/S와 관리를 통한 적극적인 고객 지원정책</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            {/* 왼쪽 이미지 */}
            <div className="col-md-6">
              <img src="/AdobeStock_global.jpeg" alt="비전 및 가치" className="business-vision-image"/>
            </div>

            {/* 오른쪽 텍스트 */}
            <div className="col-md-6">
              <div className="CEO-text-container">
                <h2>CEO 인사말</h2>
                <p className="subheading">글로벌 기업으로 성장하겠습니다.</p>
                <ul>
                  <li>시대의 요구사항과 변화를 따르는 KIS가 되기위한 멈추지 않는 도전</li>
                  <li>국내 최대의 소프트웨어, 인프라 구축 업체로 발돋움 하기 위한 새로운 기술 연구</li>
                  <li>고객의 가치를 최우선으로 하는 노력을 기울이는 기업이 되고자 고객과의 소통을 중시</li>
                  <li>직원의 복지와 교육의 증대를 통해 임직원의 능력과 가치를 향상</li>
                  <li>철저한 A/S와 관리를 통한 적극적인 고객 지원정책</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
