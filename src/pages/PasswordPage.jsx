import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PasswordPage = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const correctPassword = "Muskan2104";

    const handleSubmit = (e) => {
        e.preventDefault();
        const page = (Number(localStorage.getItem("page")) || 0) + 1;
        if (password === correctPassword) {
            if(page==5){
                navigate('/quotes')
                return
            }
            navigate(`/page${page}`);
        } else {
            setError("Oops! Wrong password. Try again!");
        }
    };

    return (
        <div
            className="password-container flex justify-center items-center h-screen w-screen relative overflow-hidden p-4"
        >
            <div className="absolute inset-0 animate-gradient bg-[length:300%_300%]"></div>
            <div className="relative z-10 bg-white rounded-2xl text-center max-w-[400px] w-full shadow-2xl p-8 font-comic">
                <h1 className="text-2xl font-bold text-[#ff6f61] mb-2">🎂 Happy Birthday Portal 🎉</h1>
                <p className="text-gray-600 mb-6">Enter the secret password to continue</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border-2 border-[#ff6f61] rounded-lg text-base outline-none"
                        />
                        <button
                            type="button"
                            tabIndex={-1}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute cursor-pointer text-xl right-3 top-1/2 transform -translate-y-1/2 text-[#ff6f61] hover:text-[#e65c50]"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#ff6f61] hover:bg-[#e65c50] text-white py-3 rounded-lg text-lg transition duration-300"
                    >
                        Unlock
                    </button>
                </form>
                {error && <p className="text-red-600 mt-3">{error}</p>}
            </div>

            <style>
                {`
                @keyframes gradientMove {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animate-gradient {
                    background: linear-gradient(-45deg, #ffecd2, #fcb69f, #ff9a9e, #fad0c4);
                    background-size: 300% 300%;
                    animation: gradientMove 10s ease infinite;
                }

                .font-comic {
                    font-family: 'Comic Sans MS', cursive, sans-serif;
                }
                `}
            </style>
        </div>
    );
};

export default PasswordPage;
