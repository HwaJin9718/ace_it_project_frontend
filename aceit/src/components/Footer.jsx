import './Footer.css';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer page-footer font-small unique-color-dark">
      <div className="footer-top">
        <div className="container">
          {/* Grid row */}
          <div className="row py-4 d-flex align-items-center">
            {/* Grid column */}
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                <a href="tel:07040991200" style={{color: '#fff'}}>
                  <i className="fa fa-phone mr-3"></i>견적 요청하기
                </a>
              </h6>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-6 col-lg-7 text-center text-md-right">
              {/* Facebook */}
              <a className="fb-ic" href="#">
                <i className="fab fa-facebook-f white-text mr-4"></i>
              </a>
              {/* Twitter */}
              <a className="tw-ic" href="#">
                <i className="fab fa-twitter white-text mr-4"></i>
              </a>
              {/* Google Plus */}
              <a className="gplus-ic" href="#">
                <i className="fab fa-google-plus-g white-text mr-4"></i>
              </a>
              {/* Linkedin */}
              <a className="li-ic" href="#">
                <i className="fab fa-linkedin-in white-text mr-4"></i>
              </a>
              {/* Instagram */}
              <a className="ins-ic" href="#">
                <i className="fab fa-instagram white-text"></i>
              </a>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </div>

      {/* Footer Links */}
      <div className="container text-center text-md-left mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h5 className="text-uppercase font-weight-bold">(주)케이아이에스 시스템즈</h5>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px'}}
            />
            <p>
              FMS 시설물 모니터링, 전산실 구축, <br/>
              UPS 전원설비, BMS 배터리, <br/>
              공조설비 항온항습기 전문업체
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">사업영역</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px'}}
            />
            <p>
              <a href="business.php?area=area7">FMS 시설관리시스템</a>
              <br/>
              <a href="business.php?area=area1">전산실 &amp; 종합상황실</a>
              <br/>
              <a href="business.php?area=area2">기계시스템</a>
              <br/>
              <a href="business.php?area=area4">전원시스템</a>
              <br/>
              <a href="business.php?area=area6">보안시스템</a>
              <br/>
              <a href="business.php?area=area8">관제시스템</a>
              <br/>
              <a href="business.php?area=area5">통합배선</a>
              <br/>
              <a href="business.php?area=area3">소화시스템</a>
              <br/>
              <a href="business.php?area=area9">시뮬레이터 훈련장</a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">바로가기</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px'}}
            />
            <p>
              <a href="introduction.php">회사소개</a>
            </p>
            <p>
              <a href="product1.php">제품소개</a>
            </p>
            <p>
              <a href="solution1.php">하드웨어</a>
            </p>
            <p>
              <a href="contact.php">문의하기</a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px'}}
            />
            <p>
              <i className="fa fa-home mr-3"></i> 경기도 안양시 동안구 시민대로 361
              <br/>
              번지 513호 (관양동, 에이스평촌타워)
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> kis2018@kissystemz.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> 031-689-3661
            </p>
            <p>
              <i className="fa fa-fax mr-3"></i> 031-689-3662
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}

      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        <strong>(주)케이아이에스시스템즈</strong>. © All Rights Reserved
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
