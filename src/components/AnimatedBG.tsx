import React from "react";
import "./styles.css"; // Assuming you've named your CSS file as styles.css and placed it in the same directory

const AnimatedBackground: React.FC = () => {
  return (
    <div className="wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106 34">
        
        <g className="sparkles">
          <path
            style={{ animationDuration: "2s", animationDelay: "0s" }}
            d="M2.5740361 5.33344622s1.1875777-6.20179466 2.24320232 0c0 0 5.9378885 1.05562462 0 2.11124925 0 0-1.05562463 6.33374774-2.24320233 0-3.5627331-.6597654-3.29882695-1.31953078 0-2.11124925z"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
