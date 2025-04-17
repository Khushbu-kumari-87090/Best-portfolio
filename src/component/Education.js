import React from 'react';
import AmityLogo from './image/coding.avif'; // Replace with your actual image path
import courseraLogo from './image/girlscript.png';

const Education = () => {
  const data = [
    {
      image: AmityLogo,
      university: 'Amity University',
      degree: 'Master of Information Systems Management',
      years: '2021 - 2023',
      bgColor: 'bg-red-700',
      textWhite: 'text-white'
    },
    {
      image: courseraLogo ,
      university: 'University of Mumbai',
      degree: 'Bachelor of Technology in Computer Engineering',
      years: '2016 - 2020',
      bgColor: 'bg-white',
      textWhite: 'text-black'
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">EDUCATION</h2>
        <div className="w-20 h-1 mx-auto bg-blue-500 rounded mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <div className={`${edu.bgColor} p-10 flex items-center justify-center`}>
                <img src={edu.image} alt={edu.university} className="h-24 object-contain" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
