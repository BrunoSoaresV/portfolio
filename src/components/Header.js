import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => (
  <header className="bg-dark text-white py-3">
    <div className="container d-flex justify-content-between align-items-center">
      <h1>Bruno Soares Veríssimo</h1>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <a href="https://www.linkedin.com/in/brunosoaresv" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size="2em" className="text-white mx-2" />
        </a>
        <a href="https://github.com/BrunoSoaresV" target="_blank" rel="noopener noreferrer">
          <FaGithub size="2em" className="text-white mx-2" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
