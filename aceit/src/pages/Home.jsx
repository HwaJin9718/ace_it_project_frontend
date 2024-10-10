// src/pages/Home.jsx
import React from 'react';
import Header from "../components/Header";
import Introduction from "../pages/Introduction";
import Footer from "../components/Footer";
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
import NavbarComp from "../components/layouts/Navigation/NavbarComp";

const Home = () => {
  const anchors = ['1', '2', '3'];

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      scrollingSpeed={2000}
      touchSensitivity={35}
      scrollOverflow={true}
      render={({fullpageApi}) => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Header/>
            {/* 스크롤 다운 화살표 */}
            <div
              className="scroll-down-arrow"
              onClick={() => fullpageApi.moveSectionDown()}
            >
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="section">
            <Introduction/>
            <Footer/>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default Home;
