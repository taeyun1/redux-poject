import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./type";

// 성공시 payload에 commentsData를 담아서 보냄
const fetchCommentSuccesss = (commentsData) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: commentsData,
  };
};

// 실패시 payload에 error를 담아서 보냄
const fetchCommentFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};

const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((commentsData) => dispatch(fetchCommentSuccesss(commentsData)))
      .catch((error) => dispatch(fetchCommentFailure(error)));
  };
};

export { fetchComments };
