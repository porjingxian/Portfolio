import React, { useEffect, useState } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home.jsx";
import Home2 from "./components/Home2.jsx";
import NavBar from "./components/Navbar.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx"
import Achievements from "./components/Achievements.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  useEffect(() => {
    loadSharedData();
    loadResumeFromPath("res_primaryLanguage.json");
  }, []);

  const loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: (data) => {
        setResumeData(data);
      },
      error: (xhr, status, err) => {
        alert(err);
      },
    });
  };

  const loadSharedData = () => {
    $.ajax({
      url: "portfolio_shared_data.json",
      dataType: "json",
      cache: false,
      success: (data) => {
        setSharedData(data);
        document.title = data.basic_info?.name || "Portfolio";
      },
      error: (xhr, status, err) => {
        alert(err);
      },
    });
  };

  return (
    <div>
      <Home />
      <Home2 />
      <NavBar />
      <Education
        resumeEducation={resumeData.education}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Skills
        sharedSkills={sharedData.skills}
        resumeBasicInfo={resumeData.basic_info}
      />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
};

export default App;
