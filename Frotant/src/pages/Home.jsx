import React, { ReactElement, useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");
  const [file, setFiles] = useState("");

  const pdfHandler = (e) => {
    setFiles(e.target.files[0]);
    // console.log("pdf-file",setFiles(e.target.files[0]))
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    // console.log(title, file)
    // console.log(formData)

    const result = await axios.post(
      "http://localhost:5000/upload-file",
        formData,
        {
          headers:{"Content-Type":"multipart/form-data"}
        }
    );
    console.log(result);
  };

  return (
    <div id="main">
      <form action="" onSubmit={submitHandler}>
        <h4>Upload Pdf in React</h4>
        <br />
        <input
          type="text"
          placeholder="Title"
          required
          id="first-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          accept="application/pdf"
          required
          id="second-input"
          onChange={pdfHandler}
        />

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
