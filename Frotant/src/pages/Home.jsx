import React, { ReactElement, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [title, setTitle] = useState("");
  const [file, setFiles] = useState("");
  const [allImage, setAllImage] = useState(null);
  

  // get the pdf
useEffect(() => {
    getPdf()
},[])
  const getPdf = async () => {
    const getresult = await axios.get("http://localhost:5000/get-files");
    // console.log(getresult.data.data);
    setAllImage(getresult.data.data)
  };

  const pdfHandler = (e) => {
    setFiles(e.target.files[0]);
    // console.log("pdf-file",setFiles(e.target.files[0]))
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`)
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    // console.log(title, file)
    // console.log(formData)

    // post the pdf
    const result = await axios.post(
      "http://localhost:5000/upload-file",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    // console.log(result);
    if(result.data.status == "Ok"){
        alert("uploaded Pdf SuccessFully")
        getPdf()

    }
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
      <div id="show-pdf">
        <h4>see Pdf:</h4>
        {allImage === null
          ? ""
          : allImage.map((data) => (
              <div id="inner-div">
                <h4>Title:{data.title}</h4>
                <button id="button" onClick={() => showPdf(data.pdf)}>
                  Show Pdf
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
