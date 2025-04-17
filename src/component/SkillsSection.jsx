import React from 'react';

const SkillsSection = () => {
  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto">
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Programming Languages:</strong> C, C++, Java, Python, SQL</li>
          <li><strong>Web:</strong> HTML, CSS3, JavaScript, jQuery, Bootstrap,Express,MongoDB,Angular, Node.js</li>
          <li><strong>Analytics and ML:</strong> NumPy, Pandas, TensorFlow, Scikit-learn</li>
        </ul>
        <hr className="border-blue-200 mt-4" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Tools</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Database Tools:</strong> MySQL, MongoDB</li>
          <li><strong>Visualization Tools:</strong> Tableau, Python Libraries</li>
          <li><strong>Automation:</strong> Selenium</li>
          <li><strong>Mobile app development:</strong> Dart, Flutter, Android app development</li>
        </ul>
        <hr className="border-blue-200 mt-4" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Domains</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Full Stack Developer</strong> </li>
          <li><strong>Data Scaience</strong> </li>
          <li><strong>Product Management</strong></li>
         
        </ul>
        <hr className="border-blue-200 mt-4" />
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">Software</h2>
        <p className="text-gray-800">
           PyCharm, Jupyter, MATLAB, Android Studio, VS Code, AutoCAD, Microsoft Office
        </p>
      </section>
    </div>
  );
};

export default SkillsSection;
