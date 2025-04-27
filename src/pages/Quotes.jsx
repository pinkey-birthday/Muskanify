import React, { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import { GoogleGenAI } from '@google/genai';
import { CgClose } from 'react-icons/cg';

const quotes = [
    "I love you not only for what you are, but for what I am when I am with you.",
    "You are my heart, my life, my one and only thought.",
    "Every love story is beautiful, but ours is my favorite.",
    "You had me at hello.",
    "In all the world, there is no heart for me like yours.",
];

const Quotes = () => {
    const apiKey = "AIzaSyBF0mGD2D5uHPm_9zOgLPAoqbWGoF538Qc";
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [quote, setQuote] = useState(quotes[0]);

    const ai = new GoogleGenAI({ apiKey });

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.endsWith(' ')) {
            const trimmed = value.trim();
            if (trimmed) setTags([...tags, trimmed]);
            setInput('');
        } else {
            setInput(value);
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const regenerateQuote = async () => {
        try {
            let prompt = `Write one ultra-flirty, heart-melting romantic quote in Hinglish where the name "Muskan" is naturally and creatively included—but not always at the beginning. The quote should be playful, unique, and emotionally captivating, like something someone would screenshot and save forever. Avoid clichés and make it sound like something never heard before. Make it feel like it's coming from someone in a long-distance relationship, where every word carries the weight of miles and the warmth of love. No explanations or extra text—just the quote itself.`;

            if (tags.length > 0) {
                prompt += ` Blend in these subtle themes to elevate the mood: ${tags.join(', ')}.`;
            }

            const result = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: prompt
            });
            let generatedText = result.text;
            generatedText = generatedText.replace(/^["“]+|["”]+$/g, '').trim();
            if (generatedText) {
                setQuote(generatedText);
            } else {
                const fallback = quotes[Math.floor(Math.random() * quotes.length)];
                setQuote(fallback);
            }
        } catch (error) {
            console.error("Error generating quote:", error);
            const fallback = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(fallback);
        }
    };

    useEffect(() => {
        regenerateQuote();
    }, [tags]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 md:p-6 p-2">
            <h1 className="md:text-4xl text-3xl font-extrabold text-pink-700 mb-6">💌 Love in Every Word</h1>

            <div className="w-full max-w-xl bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="bg-pink-200 pr-5 relative text-pink-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm flex items-center"
                        >
                            {tag}
                            <span
                                onClick={() => handleTagRemove(tag)}
                                className="ml-2 text-pink-600 cursor-pointer absolute top-1 right-1"
                            >
                                <CgClose/>
                            </span>
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type a tag and press space..."
                        className="w-full border border-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-md p-3 mb-6 text-pink-700 placeholder-rose-400"
                    />

                    <button
                        onClick={regenerateQuote}
                        className="bg-pink-500 size-12 flex justify-center items-center cursor-pointer hover:bg-pink-600 text-white px-2 rounded-full shadow-md transition-all duration-300"
                    >
                        <FiRefreshCcw />
                    </button>
                </div>

                <div className="text-center text-lg italic text-rose-700 mb-4">“{quote}”</div>
            </div>
            <div className="mt-20">
                <button
                    onClick={() => window.location.href = '/page1'}
                    className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-3xl shadow-lg transition-all duration-300"
                >
                    💝 Relive the Surprise from the Start
                </button>
            </div>
        </div>
    );
};

export default Quotes;
