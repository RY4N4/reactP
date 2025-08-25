import React, {useState} from 'react';

export default function TextForm(props) {
    let [inBox,setText] = useState("Enter your text here")

    const handleUppercase = ()=>{
        let newText = inBox.toUpperCase()
        setText(newText)
    }

    const handleLowercase = ()=>{
        let newText = inBox.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const handleClear = ()=>{
      let clearText = inBox.replace(inBox,"")
      setText(clearText)
    }

    const handleSentenceCase = ()=>{
      let capText = inBox.charAt(0).toUpperCase() + inBox.slice(1).toLowerCase();
      setText(capText);
    }

    const handleCapitalize = () => {
      let capText = inBox.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
      setText(capText);
    }


  return (
  <>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6"> 
          
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              {props.email}
            </label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com" 
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
            //   value={inBox}
              onChange={handleOnChange}

            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mx-1" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowercase}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>click to Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Convert to Capitalize</button>
            <button className="btn btn-primary" onClick={handleSentenceCase}>Convert to sentence Case</button>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p><b>Character</b> : {inBox.length} </p>
        <p><b>Words</b> : {inBox.split(" ").length}</p>
        <p><b>Time Requried to Read</b> : {0.008 * inBox.split(" ").length}</p>
        <br/>

        <h2>Preview</h2>
        <p>{inBox}</p>
    </div>
  </>
);

}
