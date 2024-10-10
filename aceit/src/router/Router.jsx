// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import About from '../pages/About';
import Home from '../pages/Home';
import Business from '../pages/Business';
import Contact from '../components/Contact';
import NavbarComp from '../components/layouts/Navigation/NavbarComp';
import Introduction from '../components/Introduction'; // Introduction 컴포넌트 임포트

const Router = () => {
  return (
    <>
      <NavbarComp />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/introduction" element={<Introduction />} /> {/* Introduction 경로 추가 */}
          {/* 추가적인 라우트를 여기에 정의할 수 있습니다. */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Router;
