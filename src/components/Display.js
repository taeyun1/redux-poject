import React from "react";
import { connect } from "react-redux";

function Display({ count }) {
  return (
    <div className="items">
      <span>구독자 수 :{count}</span>
    </div>
  );
}

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

export default connect(mapStateToProps)(Display);
