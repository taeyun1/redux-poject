import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../redux/comments/action";

function Items({ fetchComments, loading, comments }) {
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = ({ comments }) => {
  // console.log("comments", state);
  return {
    comments: comments.items,
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
