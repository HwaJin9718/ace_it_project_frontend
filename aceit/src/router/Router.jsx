// Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import About from '../pages/About';
import Home from '../pages/Home';
import Business from '../pages/Business';
import Contact from '../pages/Contact';
import NavbarComp from '../components/layouts/Navigation/NavbarComp';
import Introduction from '../components/Introduction';
import AdminPage from "../pages/admin/AdminPage";
import AddInformation from "../pages/admin/information/AddInformation";
import InformationList from "../pages/admin/information/InformationList";
import EditInformation from "../pages/admin/information/EditInformation";
import HistoryList from "../pages/admin/history/HistoryList";
import AddHistory from "../pages/admin/history/AddHistory";
import EditHistory from "../pages/admin/history/EditHistory";

const Router = () => {
    return (
        <>
            <NavbarComp />
            <div className="App">
                <Routes>
                    {/* 일반 페이지 라우트 */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/introduction" element={<Introduction />} />

                    {/* 관리자 페이지 라우트 */}
                    <Route path="/admin" element={<AdminPage />} /> {/* 어드민 페이지 경로 추가 */}
                    <Route path="/informationList" element={<InformationList />} />
                    <Route path="/addInformation" element={<AddInformation />} />
                    <Route path="/editInformation/:id" element={<EditInformation />} />
                    <Route path="/historyList" element={<HistoryList />} />
                    <Route path="/addHistory" element={<AddHistory />} />
                    <Route path="/editHistory/:id" element={<EditHistory />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
  return (
    <>
      <NavbarComp />
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/introduction" element={<Introduction />} />
            {/* 추가적인 라우트를 여기에 정의할 수 있습니다. */}
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Router;

