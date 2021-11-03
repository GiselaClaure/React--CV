import { useState } from "react";
import './App.css';
import { About, Hero, Education, Experience, More } from "./components/index";
import { CV } from "./CV/CV";

const { hero, education, experience, habilities} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
      <div className="App">
          <Hero hero={hero} />
          <About hero={hero} />
          <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More habilities={habilities} />
      </div>
      
      
      
  );
}
export default App;
