import React from 'react';

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-white px-6">
      <div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mt-2">Hello,My name is</h2>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-100">Khushbu yadav</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-400 mt-2">Full Stack Developer | Data Scientist</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
        Hi, I'm <strong>Khushbu Kumari</strong> — a passionate and skilled Full Stack Java Developer with hands-on
          experience in building scalable applications and solving real-world problems through technology. I love
          working across the stack and exploring emerging domains like Data Science and Product Management.
          <span className="text-green-400"></span>.
        </p>
        <button className="mt-6 px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-[#0a192f] transition duration-300 rounded">
          Check out my course!
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
