import React from "react";
import loading from "./Spinier.gif";

export default function Spinier () {

    return (
      <div className="text-center">
        <img className="my-3" src={loading} alt="loading" />
      </div>
    );
  }

