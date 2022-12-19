import React, {useState} from "react";
import {nav} from "./data/Data";
import {Link} from "react-router-dom";
import {VscSignIn} from "react-icons/vsc";
import {FaBars} from "react-icons/fa";
import {VscChromeClose} from "react-icons/vsc";

const Header = () => {
    let [open,
        setOpen] = useState(false);

    let toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <header className="fixed bg-white w-full z-[100] transition">
            <div
                className="max-w-[90%] h-[80px] mx-auto px-4 flex items-center justify-between">
                <Link to="/">
                    <div className="w-40 cursor-pointer">
                        <img src="./images/logo.png" className="" alt="logo"/>
                    </div>
                </Link>
                <div className="hidden lg:flex">
                    <ul
                        className="flex items-center justify-between gap-6 lg:gap-7 xl:gap-8 text-lg capitalize">
                        {nav.map((item, index) => (
                            <li key={index} className="hover:text-[#27ae60] transition">
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex items-center gap-2 lg:gap-4">
                    <h4
                        className="flex items-center gap-2 cursor-pointer hover:text-[#27ae60] transition">
                        <span className="px-2 text-white bg-[#27ae60] py-0.5 rounded-full text-sm">
                            2
                        </span>{" "}
                        My List
                    </h4>
                    <button
                        className="flex items-center bg-[#27ae60] gap-1 px-5 py-2 rounded text-white font-medium">
                        <VscSignIn className="text-lg"/>
                        Sign In
                    </button>
                </div>
                <div className="lg:hidden">
                    <button
                        className="bg-[#27ae60] rounded text-white text-2xl px-3 py-2"
                        onClick={toggleOpen}>
                        {open
                            ? (<VscChromeClose className="text-2xl text-white"/>)
                            : (<FaBars color="white"/>)}
                    </button>
                </div>
                {open && (
                    <div
                        className="absolute transition top-[100%] py-4 left-0 w-full bg-[#27ae60]">
                        <div className="mx-[5%] px-4">
                            <ul
                                className="text-white transition font-semibold capitalize text-lg flex flex-col gap-3">
                                {nav.map((item, index) => (
                                    <li key={index} onClick={toggleOpen}>
                                        <Link to={item.path}>{item.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
