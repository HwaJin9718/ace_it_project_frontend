import React, { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Menu.css';

// 비즈니스 탭 애니메이션 로직
const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useBusinessMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate(); // useAnimate 훅 사용

    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

        animate(
            ".dropdown-menu",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)",
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        );

        animate(
            ".dropdown-item",
            isOpen
                ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerMenuItems : 0,
            }
        );
    }, [isOpen, animate]);

    return scope;
}

export function Menu({ isOpen }) {
    const [isBusinessOpen, setIsBusinessOpen] = useState(false); // 드롭다운 상태 관리
    const scope = useBusinessMenuAnimation(isBusinessOpen); // 비즈니스 메뉴에만 애니메이션 적용

  return (
    <nav className="menu-container">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            ABOUT
          </Link>
        </li>

        {/* 비즈니스 드롭다운 */}
        <li ref={scope}>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsBusinessOpen(!isBusinessOpen)}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
            }}
          >
            BUSINESS
            <div className="arrow" style={{ transformOrigin: "50% 55%", }}>
              <svg width="25" height="15" viewBox="0 5 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </div>
          </motion.button>

            <ul
                className="dropdown-menu"
                style={{
                    display: isBusinessOpen ? "block" : "none",
                    pointerEvents: isBusinessOpen ? "auto" : "none",
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    border: '30px'
                }}
            >
                <li className="dropdown-item" style={{opacity: 0, transform: 'scale(0.3)'}}>
                    <Link to="/business/service1"
                          style={{textDecoration: 'none', color: 'black', padding: '10px'}}>
                        시스템 개발
                    </Link>
                </li>
                <li className="dropdown-item" style={{opacity: 0, transform: 'scale(0.3)'}}>
                    <Link to="/business/service2"
                          style={{textDecoration: 'none', color: 'black', padding: '10px'}}>
                        FMS 모니터링
                    </Link>
                </li>
                <li className="dropdown-item" style={{opacity: 0, transform: 'scale(0.3)'}}>
                    <Link to="/business/service3"
                          style={{textDecoration: 'none', color: 'black', padding: '10px'}}>
                        인프라 시스템
                    </Link>
                </li>
                <li className="dropdown-item" style={{opacity: 0, transform: 'scale(0.3)'}}>
                    <Link to="/business/service4"
                          style={{textDecoration: 'none', color: 'black', padding: '10px'}}>
                        유지보수
                    </Link>
                </li>
            </ul>
        </li>

          <li>
              <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
                  회사소개
              </Link>
          </li>
          <li>
              <Link to="/contact" style={{textDecoration: 'none', color: 'inherit'}}>
              Contact Us
                    </Link>
                </li>

                <li>
                    <Link to="/admin" style={{textDecoration: 'none', color: 'inherit'}}>
                        Admin (매니저)
                    </Link>
                </li>

            </ul>
        </nav>
    );
}