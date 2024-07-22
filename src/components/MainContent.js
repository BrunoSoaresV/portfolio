import React from 'react';
import { FaPhp, FaPython, FaJs, FaNodeJs, FaDatabase, FaGit, FaDocker, FaVuejs, FaReact } from 'react-icons/fa';
import { SiNestjs, SiJavascript } from 'react-icons/si';

const MainContent = () => (
  <main className="container mt-5">
    <section id="about" className="mb-5">
      <h2>About Me</h2>
      <p>Junior full-stack developer with a solid educational background and practical experience in software development projects. Currently pursuing a Bachelor's degree in Computer Science at the renowned Federal University of Ouro Preto, where I am honing my technical and theoretical skills to excel in the technology market. I began my journey in the world of computing at the Federal Institute of Education, Science, and Technology of Minas Gerais, where I completed a technical course in computer science with excellence. During this period, I gained a broad understanding of computer science fundamentals and acquired knowledge in programming languages, algorithms, and data structures.</p>
      <p>My focus is on artificial intelligence and web development. I am currently expanding my knowledge in neural networks, Large Language Models (LLM), and artificial intelligence, in addition to technologies such as Node.js, React, Vue, TypeScript, and JavaScript. One of the most enriching experiences during my technical course was leading a Final Course Project (TCC) focused on facial recognition for employee time tracking in companies. This experience sparked my interest in developing innovative and challenging solutions. Using technologies such as PHP, JavaScript, Python, CSS, HTML, both front-end and back-end frameworks, and relational databases (PostgreSQL), we developed a complete and functional platform. Additionally, I managed the team, project planning, and execution, which strengthened my leadership, communication, and time management skills.</p>
      <p>My goal is to continue growing professionally and contribute to challenging and innovative projects in a collaborative and dynamic environment. I am always open to learning new technologies and industry trends, seeking to apply my theoretical knowledge and practical experience to creatively and efficiently solve complex problems.</p>
    </section>
    
    <section id="skills" className="mb-5">
      <h2>Skills</h2>
      <div className="row">
        <div className="col-md-3">
          <FaPhp size="2em" /> PHP
        </div>
        <div className="col-md-3">
          <FaPython size="2em" /> Python
        </div>
        <div className="col-md-3">
          <FaJs size="2em" /> JavaScript
        </div>
        <div className="col-md-3">
          <FaNodeJs size="2em" /> Node.js
        </div>
        <div className="col-md-3">
          <FaDatabase size="2em" /> Database (SQL)
        </div>
        <div className="col-md-3">
          <FaGit size="2em" /> Git
        </div>
        <div className="col-md-3">
          <FaDocker size="2em" /> Docker
        </div>
        <div className="col-md-3">
          <FaVuejs size="2em" /> Vue.js
        </div>
        <div className="col-md-3">
          <SiNestjs size="2em" /> Nest.js
        </div>
        <div className="col-md-3">
          <FaReact size="2em" /> React
        </div>
        <div className="col-md-3">
          <SiJavascript size="2em" /> JavaScript
        </div>
        <div className="col-md-3">
          <span>English</span>
        </div>
      </div>
    </section>

    <section id="experience" className="mb-5">
      <h2>Professional Experience</h2>
      <h3>Plugthink</h3>
      <p>Internship focusing on Python, artificial intelligence, and Django, where I am developing process automation routines, creating bots for process automation, importing and processing information (XML, JSON, CSV), and interacting with AI systems to generate alerts. I am also learning about the dynamics of B2B (business-to-business) sales.</p>
      <p><strong>Jul. 2024 – Present</strong></p>
      <h3>National Council for Scientific and Technological Development</h3>
      <p>Researcher and PIBIC-JR scholarship holder for the project "Misinformation and Its Impacts on the COVID-19 Pandemic: The Brazilian Case".</p>
      <p>Developer, researcher, and leader for the production of articles upon conclusion of the research. Developer of a program for cataloging important information.</p>
      <p><strong>Jun. 2021 – Feb. 2023</strong></p>
    </section>

    <section id="education" className="mb-5">
      <h2>Academic Background</h2>
      <h3>Bachelor's Degree in Computer Science</h3>
      <p>Federal University of Ouro Preto (2023 – 2026)</p>
      <h3>Technical Course in Informatics and High School</h3>
      <p>Federal Institute of Education, Science, and Technology of Minas Gerais (Mar. 2020 – Dec. 2022)</p>
    </section>

    <section id="contact" className="mb-5">
      <h2>Contact</h2>
      <p>Phone: +55 31 98583-1004</p>
      <p>Email: <a href="mailto:brunoverissimo398@gmail.com">brunoverissimo398@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/brunosoaresv" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/brunosoaresv</a></p>
      <p>GitHub: <a href="https://github.com/BrunoSoaresV" target="_blank" rel="noopener noreferrer">https://github.com/BrunoSoaresV</a></p>
    </section>
  </main>
);

export default MainContent;
