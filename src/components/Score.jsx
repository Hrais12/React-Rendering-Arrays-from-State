import React from "react";

function Score({ grade }) {
  return (
    <div className="score">
      <div>
        {" "}
        {grade.score > 70 ? (
          <>
            <div style={{ color: "green" }}>Score: {grade.score}</div>
          </>
        ) : (
          <>
            <div style={{ color: "red" }}>Score: {grade.score}</div>
          </>
        )}
      </div>
      <hr />
      <div
        style={{
          fontSize: "11px",
          color: grade.date.split("-", 1) > 2018 ? "blue" : "",
        }}
      >
        Date: {grade.date}
      </div>
    </div>
  );
}

export default Score;
