import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import MyComments from "../components/UI/comments/MyComments";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import "./styles/PostIdPage.css";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div className="body">
      <h1>Post's page</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="postContainer">
          <div className="postTitle">{post.title}.</div>
          <hr />
          <div className="postDescription">{post.body}.</div>
        </div>
      )}
      <h1 style={{ marginTop: 50 }}>Comments</h1>
      <MyComments comments={comments} />
    </div>
  );
};

export default PostIdPage;
