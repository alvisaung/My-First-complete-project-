import React from "react";

export default function Title({ first, second }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto text-center text-title my-3">
        <h1 className="text-capitalize font-weight-bold text-blue">
          {first}
          <strong className="text-blue"> {second}</strong>
        </h1>
      </div>
    </div>
  );
}
