import React from "react";
import logo from "../../assets/logo-text.png";

const Navbar = () => {
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="text-sm font-semibold bg-linear-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent  px-2.5 py-1">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent px-2.5 py-1">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent px-2.5 py-1">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent px-2.5 py-1">
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent px-2.5 py-1">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6">
                        <li>
                            <a className="text-sm font-semibold bg-linear-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent">
                                Technologies
                            </a>
                        </li>
                        <li>
                            <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="text-sm font-medium text-[#475569] hover:bg-linear-to-r hover:from-[#FF5722] hover:to-[#D81B7E] hover:bg-clip-text hover:text-transparent">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-5">
                    <div className="border-2 border-transparent [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,#FF5722,#D81B7E,#7C3AED)_border-box] bg-white rounded-full transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                        <button className="font-medium text-sm bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent rounded-full px-4 py-2">
                            Sign In
                        </button>
                    </div>
                    <button className="font-medium text-sm text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] rounded-full px-5 py-2.5 transition-all duration-300 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
