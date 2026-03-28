// Header.js - Updated with smooth scroll navigation
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/mainlogo.svg";
import Layout from "./Layout";
import ModalDialog from "./RealEstateDialog";
import CameraImage from "../../public/assets/camera.png";

const Header = () => {
  const navItems = [
    { name: "Home", href: "#home", isExternal: false },
    { name: "Overview", href: "#overview", isExternal: false },
    { name: "Configuration", href: "#configuration", isExternal: false },
    { name: "Amenities", href: "#amenities", isExternal: false },
    { name: "Gallery", href: "#gallery", isExternal: false },
  ];

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState({ logo: false, camera: false });
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const overlayRef = useRef(null);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerHeight = 60; // Adjust based on your header height
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  // Handle navigation click
  const handleNavClick = useCallback(
    (e, href, isExternal) => {
      if (!isExternal) {
        e.preventDefault();
        const sectionId = href.substring(1); // Remove the # from href
        smoothScrollTo(sectionId);
        setMenuOpen(false); // Close mobile menu if open
      }
    },
    [smoothScrollTo]
  );

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Memoized handlers
  const handleVirtualTourClick = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setOpen(true);
    } catch (error) {
      console.error("Error opening virtual tour:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const handleModalClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleImageError = useCallback((imageType) => {
    setImageError((prev) => ({ ...prev, [imageType]: true }));
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <Layout>
        <div className="flex items-center justify-between md:h-[60px] h-[52px]">
          {/* Logo Section */}
          <div className="flex items-center">
            <button
              onClick={() => smoothScrollTo("home")}
              className="rounded-md"
              aria-label="Go to homepage"
            >
              {!imageError.logo ? (
                <Image
                  src={Logo}
                  alt="Company Logo"
                  width={152}
                  height={45}
                  className="md:w-[152px] w-[122px] md:h-[45px] h-[36px]"
                  priority
                  onError={() => handleImageError("logo")}
                />
              ) : (
                <div className="md:w-[152px] w-[122px] md:h-[45px] h-[36px] bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-[#147D40] font-bold text-lg">LOGO</span>
                </div>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-5">
            <nav
              className="flex items-center space-x-5"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.isExternal)}
                  className={`${
                    activeSection === item.href.substring(1)
                      ? "text-[#147D40] font-semibold"
                      : "text-[#2A2A2A]"
                  } hover:text-[#147D40] rounded-md px-2 py-1 transition-colors text-[18px] cursor-pointer`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <button
              onClick={handleVirtualTourClick}
              disabled={isLoading}
              className="bg-[#147D40] hover:bg-[#0F5A2E] disabled:bg-gray-400 disabled:cursor-not-allowed text-white w-[175px] h-[40px] rounded-[18px] transition-all duration-200 text-[16px] flex items-center justify-center gap-1 cursor-pointer font-medium"
              aria-label="Take a virtual tour"
            >
              {!imageError.camera ? (
                <Image
                  src={CameraImage}
                  alt=""
                  width={16}
                  height={16}
                  className="w-[16px] h-[16px]"
                  onError={() => handleImageError("camera")}
                />
              ) : (
                <span className="text-lg">📷</span>
              )}
              {"Take a Virtual Tour"}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handleVirtualTourClick}
              disabled={isLoading}
              className="bg-[#147D40] hover:bg-[#0F5A2E] disabled:bg-gray-400 disabled:cursor-not-allowed text-white w-[140px] h-[30px] rounded-[12px] text-[12px] flex items-center justify-center gap-1 font-medium transition-all duration-200"
              aria-label="Take a virtual tour"
            >
              {!imageError.camera ? (
                <Image
                  src={CameraImage}
                  alt=""
                  width={14}
                  height={14}
                  className="w-[14px] h-[14px]"
                  onError={() => handleImageError("camera")}
                />
              ) : (
                <span className="text-sm">📷</span>
              )}
              {"Take a virtual tour"}
            </button>

            <button
              ref={hamburgerRef}
              onClick={handleMenuToggle}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="text-2xl text-black font-bold select-none">
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </Layout>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-40 transition-opacity duration-300"
          onClick={handleMenuClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={menuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 h-[100vh] bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out shadow-2xl min-w-[280px] max-w-[90vw] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-end items-center mb-6">
          <button
            onClick={handleMenuClose}
            className="text-2xl font-bold p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav
          className="flex flex-col space-y-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.isExternal)}
              className={`${
                activeSection === item.href.substring(1)
                  ? "text-[#147D40] font-semibold"
                  : "text-[#2A2A2A]"
              } hover:text-[#147D40] text-[18px] border-b border-gray-200 pb-3 transition-colors rounded-md cursor-pointer`}
              aria-label={`Navigate to ${item.name}`}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Modal Dialog */}
      {mounted && (
        <ModalDialog open={open} setOpen={setOpen} onClose={handleModalClose} />
      )}
    </header>
  );
};

export default Header;
