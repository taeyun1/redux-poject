import React from "react";
// import { connect } from "react-redux";
// import { fetchComments } from "../redux/comments/action";
import Items from "./Items";

function Comments() {
  // useEffect(() => {
  //   fetchComments();
  // }, []);

  // const commentsItems = loading ? (
  //   <div>Loading...</div>
  // ) : (
  //   comments.map((comment) => (
  //     <div key={comment.id}>
  //       <h3>{comment.name}</h3>
  //       <p>{comment.email}</p>
  //       <p>{comment.body}</p>
  //     </div>
  //   ))
  // );

  return (
    <>
      {/* <div className="comments">{commentsItems}</div> */}
      <h2>댓글 모음</h2>
      <Items />
    </>
  );
}

// const mapStateToProps = ({ comments }) => {
//   // console.log("comments", state);
//   return {
//     comments: comments.items,
//   };
// };

// const mapDispatchToProps = {
//   fetchComments,
// };

export default Comments;
