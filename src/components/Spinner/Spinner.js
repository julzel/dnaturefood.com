import React from "react";

// local imports

import './Spinner.scss';
const edges = [];
for(let i = 0; i < 18; i++) {
  edges[i] = i;
}

const Spinner = () => {

  return (
    <div class="spinner">
      {edges.map(edge => <div className="ele" key={edge} />)}
    </div>
  );
};

export default Spinner;
