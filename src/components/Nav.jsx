import React, { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import { TrashIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Nav = ({ userName }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    const { t } = useTranslation();

    return (
        <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between relative">
            <NavLink to="/" aria-label="Go to home" className="flex items-center">
                <span className="text-xl font-semibold tracking-wide hover:text-yellow-500 transition duration-200">
                    HomeBud
                </span>
            </NavLink>

            <div className="hidden md:flex items-center space-x-4">
                <button
                    onClick={() => changeLanguage("en")}
                    className="relative flex items-center py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                    <span className="relative" style={{ top: '2px', left: '2px' }}>English</span>
                </button>
                <button
                    onClick={() => changeLanguage("fr")}
                    className="relative flex items-center py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                    <span className="relative" style={{ top: '2px', left: '2px' }}>Français</span>
                </button>

                {userName && (
                    <Form
                        method="post"
                        action="logout"
                        onSubmit={(event) => {
                            if (!confirm("Delete user and all data?")) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button
                            type="submit"
                            className="relative flex items-center py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                        >
                            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                            <span className="relative flex items-center" style={{ top: '2px', left: '2px' }}>
                                {t("deleteUser")} <TrashIcon width={20} className="ml-2" />
                            </span>
                        </button>
                    </Form>
                )}
            </div>

            <button
                className="md:hidden flex items-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? (
                    <XMarkIcon className="h-6 w-6 text-white" />
                ) : (
                    <Bars3Icon className="h-6 w-6 text-white" />
                )}
            </button>

            {/* Dropdown avec animation */}
            <div
                className={`absolute top-12 left-0 w-full bg-gray-800 z-10 p-4 p-8 space-y-4 md:hidden transition-all duration-300 ease-in-out transform ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <button
                    onClick={() => changeLanguage("en")}
                    className="block w-full ps-2 py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                    <span className="relative" style={{ top: '2px', left: '2px' }}>English</span>
                </button>
                <button
                    onClick={() => changeLanguage("fr")}
                    className="block w-full py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                >
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                    <span className="relative" style={{ top: '2px', left: '2px' }}>Français</span>
                </button>

                {userName && (
                    <Form
                        method="post"
                        action="logout"
                        onSubmit={(event) => {
                            if (!confirm("Delete user and all data?")) {
                                event.preventDefault();
                            }
                        }}
                        className="block"
                    >
                        <button
                            type="submit"
                            className="block w-full py-2 px-4 bg-gray-700 text-white font-bold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:translate-y-1"
                        >
                            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-900"></span>
                            <span className="relative flex items-center justify-center" style={{ top: '2px', left: '2px' }}>
                                {t("deleteUser")} <TrashIcon width={20} className="ml-2" />
                            </span>
                        </button>
                    </Form>
                )}
            </div>
        </nav>
    );
};

export default Nav;
