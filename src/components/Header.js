import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative select-none z-[99999]">
      <header className="flex items-center gap-4 container py-[36px] text">
        <div className="flex items-center gap-2 mr-[70px]">
          <p className="text-[23px] text-white  whitespace-nowrap">
            Pet <span className="font-bold">Heaven</span>
          </p>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-normal leading-[18.96pxpx] text-[#323232]">
          <a
            href="/"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            Home
          </a>
          <a
            href="/about"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            About Us
          </a>
          <a
            href="/pets"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            Pet List
          </a>
          <a
            href="/register"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            Register
          </a>
          <a
            href="/release"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            Release Pet
          </a>
          <a
            href="/adopt"
            className="hover:text-primary-100 text-white whitespace-nowrap"
          >
            Adopt Pet
          </a>
        </nav>

        <div className="lg:flex items-center gap-2 ml-auto hidden">
          <a href="/contact" className="btn-primary px-[30px]">
            Contact Us
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="text-white ml-auto cursor-pointer lg:hidden hover:text-primary transition-all"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setIsOpen(!isOpen)}
        >
          <line x1="21" y1="10" x2="3" y2="10"></line>
          <line x1="21" y1="6" x2="3" y2="6"></line>
          <line x1="21" y1="14" x2="3" y2="14"></line>
          <line x1="21" y1="18" x2="3" y2="18"></line>
        </svg>
      </header>

      {isOpen && (
        <div className="-mt-[98px] bg-[url('https://www.dutch.com/cdn/shop/articles/shutterstock_538333303.jpg?v=1683242960')]">
          <div className="min-h-screen inset-0 pt-[98px]">
            <nav className="flex flex-col text-[15px] font-normal leading-[19.53px] text-white">
              <a
                href="/"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-y border-white/10"
              >
                Home
              </a>
              <a
                href="/about"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-b border-white/10"
              >
                About Us
              </a>
              <a
                href="/pets"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-b border-white/10"
              >
                Pet List
              </a>
              <a
                href="/register"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-b border-white/10"
              >
                Register
              </a>
              <a
                href="/release"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-b border-white/10"
              >
                Release Pet
              </a>
              <a
                href="/adopt"
                className="transition-all text-2xl font-medium hover:bg-primary/10 px-[3%] py-2 border-b border-white/10"
              >
                Adopt Pet
              </a>

              <div className="px-[5%] mt-4">
                <a href="/contact" className="btn-primary mx-auto w-full flex">
                  Contact Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
