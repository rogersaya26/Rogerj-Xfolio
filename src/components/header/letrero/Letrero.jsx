import React from "react";
import ButtonMi from "../../styledcomponents/ButtonMi";
import "./Letrero.css";

const Letrero = ( {clickMe, setClickMe} ) => {
  
  return (
      <div className="letrero_container">
        <div className="letrero">
          <h1>
            ROGER <br /> JIMENEZ <br /> Programmer{" "}
            <span className="parpadea">|</span>
          </h1>
          <div className="button_letrero">
            <ButtonMi onClick={()=> setClickMe(!clickMe)} >
              About Me
            </ButtonMi>
          </div>
        </div>
      </div>
  );
};
export default Letrero;
