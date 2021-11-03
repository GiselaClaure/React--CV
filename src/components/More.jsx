import React from "react";
import "./More.css";

const More = ({habilities, languages}) => {
  return (
      <div className="habilities-card">
         <h3>HABILITIES:</h3>
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })},
      </div>  
      
  );
};        

export default More; 