import React, { ReactElement, useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")
  const [file, setFiles] = useState("")
  const handleChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the first selected file

    if (selectedFile) {
      // Update the state with the file object
      setFiles(selectedFile);
    } else {
      console.log("No file selected"); // Handle the case when no file is selected
    }
  };

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("file", file)
    console.log(title, file)

  }


  

  


  return (
    <div id="main">
      <form action=""  onSubmit={submitHandler}>
        <h4>Upload Pdf in React</h4>
        <br />
        <input type="text" placeholder='Title'
          required id='first-input'
          onChange={(e) => setTitle(e.target.value)} />
        <br />
        <input
          type="file"
          accept="application/pdf"
          required
          id="second-input"
          onChange={handleChange}
        />

        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App