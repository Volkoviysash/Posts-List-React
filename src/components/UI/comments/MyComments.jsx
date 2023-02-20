import React from "react";
import cl from "./MyComments.module.css";

const MyComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comm) => (
        <div key={comm.id} className={cl.commentBlock}>
          <h5 className={cl.commEmail}>{comm.email}</h5>
          <div className={cl.comment}>{comm.body}.</div>
        </div>
      ))}
    </div>
  );
};

export default MyComments;
