import React, { useState } from "react";
import { connect } from "react-redux";
import { addView } from "../redux/index";

function Views({ viewCount, addView }) {
  const [number, setNumber] = useState(0);

  const numberAddInput = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="items">
      <h2>조회수 : {viewCount}</h2>
      <input type="text" value={number} onChange={numberAddInput} />
      <button onClick={() => addView(number)}>조회하기</button>
    </div>
  );
}

const mapStateToProps = ({ views }) => {
  return {
    viewCount: views.viewCount,
  };
};

const mapDispatchToProps = {
  addView: (number) => addView(number),
};

export default connect(mapStateToProps, mapDispatchToProps)(Views);
