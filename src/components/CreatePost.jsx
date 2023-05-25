import React, { useState } from "react";
import Page from "./Page";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost(props) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // We dont need to set this because it is defined in the App.js "http://localhost:8080/create-post"
      const response = await Axios.post("/create-post", {
        title: title,
        body: body,
        token: localStorage.getItem("jrkmToken"),
      });
      //Redirect to new post url
      //This is to show the flash message
      props.addFlashMessage("Congrats, you successfully created a post!");
      navigate(`/post/${response.data}`);
      console.log("New post was created");
    } catch (e) {
      console.log("There was a problem");
    }
  };

  return (
    <Page title="Create New Post">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-[600px] mx-auto"
      >
        <div className="flex flex-col items-start w-full mb-6">
          <label htmlFor="post-title">
            <small className="text-base">Title</small>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            autoComplete="off"
            type="text"
            name="title"
            id="post-title"
            className="w-full p-3 rounded-lg"
          />
        </div>

        <div className="flex flex-col items-start w-full mb-6">
          <label htmlFor="post-body">
            <small className="text-base">Body Content</small>
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name="body"
            id="post-body"
            className="w-full h-[500px] p-3"
          ></textarea>
        </div>
        <button>Save New Post</button>
      </form>
    </Page>
  );
}

export default CreatePost;
