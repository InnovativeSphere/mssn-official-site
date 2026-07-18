"use client";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };

  return (
    <div className="mobile-menu-wrapper">
      <style jsx>{`
        .mobile-menu-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .mobile-menu-list li {
          margin-bottom: 12px;
        }
        .mobile-menu-list li a,
        .dropdown-toggle span:first-child {
          color: #ffffff !important;
          text-decoration: none;
          font-weight: 500;
          display: block;
          padding: 8px 0;
          transition: color 0.2s;
        }
        .mobile-menu-list li a:hover,
        .dropdown-toggle:hover span:first-child {
          color: #29B6D8 !important;
        }
        .dropdown-toggle {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: #ffffff !important;
        }
        .dropdown-icon {
          font-size: 0.8rem;
          transition: transform 0.2s;
          color: #ffffff !important;
        }
        .dropdown-icon.open {
          transform: rotate(180deg);
        }
        .sub-menu {
          list-style: none;
          padding-left: 20px;
          margin-top: 8px;
        }
        .sub-menu li {
          margin-bottom: 8px;
        }
        .sub-menu li a {
          font-size: 0.9rem;
          color: #e2e8f0 !important;
          text-decoration: none;
        }
        .sub-menu li a:hover {
          color: #29B6D8 !important;
        }
      `}</style>

      <ul className="mobile-menu-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <div className="dropdown-toggle" onClick={toggleAccount}>
            <span>My Account</span>
            <span className={`dropdown-icon ${isAccountOpen ? "open" : ""}`}>
              <i className="fa-thin fa-chevron-down"></i>
            </span>
          </div>
          {isAccountOpen && (
            <ul className="sub-menu">
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>
                <Link href="/wishlist">Wishlist</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;