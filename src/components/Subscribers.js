import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../redux/index";

function Subscribers({ count, addSubscriber }) {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기</button>
    </div>
  );
}

const mapStateToProps = ({ subscribers }) => {
  // combineReducers를 쓰면 state를 받는 구조가 약간 바뀌므로 콘솔로 확인.
  // console.log(state, "state");
  return {
    count: subscribers.count,
  };
};

// dispatch를 function으로 넘겨서 사용
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSubscriber: () => dispatch(addSubscriber()),
//   };
// };

// dispatch를 Object로 넘겨서 사용
const mapDispatchToProps = {
  // addSubscriber: addSubscriber,
  addSubscriber, // ↑위랑 동일
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
