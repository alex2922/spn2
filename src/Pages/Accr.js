import React, { useState } from "react";

function Accr(props) {
  const [accr, setAccr] = useState(false);

  return (
    <>
      <div className="accr">
        <div className="top" onClick={() => setAccr(!accr)}>
          <h2>{props.que}</h2>

          <button>+ </button>
        </div>
        {accr && (
          <div className="btm" data-aos="fade-up">
            {props.ans}
          </div>
        )}
      </div>
    </>
  );
}

export default Accr;
