import React, {useState} from 'react'
export default function TextForm(props) {

  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");
  const [size, setSize] = useState(15);

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };
  const handleReplaceChange = (event) => {
  console.log(replaceWord(event.target.value)) ;
  };

  function wordCount(content){
    if(content===""){
      return 0;
    }
    let arr = content.split(" ");
    let len = arr.length;
    let count=0;
    let ans = 0;

    for(let i=0;i<len;i++){
      if(arr[i]==='' || arr[i]===' '){
         count++;
      }
    }
    return len-count;
  }

  const handleExtraSpaces = () => {

    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    props.showAlert("Trimmed Text", "success ");

  }

  // const handleFontChange = (event) => {

  //   setSize(event.target.value);
  // }


  const handleCopy = () => {
      const text = document.querySelector("#myBox");
      text.select();
      text.setSelectionRange(0, 999);
      navigator.clipboard.writeText(text.value);
      console.log(text.value);
      props.showAlert("Text Copied to Clipboard", "success ");

  }
  const handleReplaceClick = () => {
    let newText = text.replaceAll(fWord,rWord);
    setText(newText);
    props.showAlert("Find and Replace Used", "success ");
  };
  const handleClearClick = () => {
    //console.log("UpperCase was clicked");
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success ");
  };

    const handleUpClick = () => {

        console.log("UpperCase was clicked");


        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Upper Case", "success ");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleLoClick = () => {

      console.log("LowerCase was clicked");


      let newText = text.toLowerCase();

      setText(newText);
      props.showAlert("Converted to Lower Case", "success ");
  }
    const handleOnChange = (e) => {

        console.dir(e);

        console.log("On Change");

        setText(e.target.value);

        // text = e.target.value


    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container my-3'>
      <h1 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      <div class="mb-3">
      <textarea class="form-control" id="myBox" style={{color:props.mode == 'dark' ? 'white' : 'black',backgroundColor: props.mode == 'dark' ? '#03045e' : 'white', fontSize: `${size}px` }} value={text} onChange={handleOnChange} rows="3"></textarea>
      </div>
      <h1 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>Find Words</h1>
      <div class="mb-3">
      <textarea class="form-control" style={{color:props.mode == 'dark' ? 'white' : 'black',backgroundColor: props.mode == 'dark' ? '#03045e' : 'white'}} id="myBox2" value={fWord}   onChange = {handleFindChange} rows="3"></textarea>
      </div>
      <h1 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>Replace Words</h1>
      <div class="mb-3">
      <textarea class="form-control" style={{color:props.mode == 'dark' ? 'white' : 'black',backgroundColor: props.mode == 'dark' ? '#03045e' : 'white'}} id="myBox3" value={rWord} onChange = {handleReplaceChange} rows="3"></textarea>
      </div>
      {/* <h1 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>Change Size</h1>
      <div class="mb-3">
     <input type="text" id="size" style={{color:props.mode == 'dark' ? 'white' : 'black',backgroundColor: props.mode == 'dark' ? '#03045e' : 'white', border:`1px solid ${props.mode == 'dark' ? 'white' : '#dee2e6'}`, borderRadius:'5px'}} onChange={handleFontChange}/> */}

      {/* </div> */}
    <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
    <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
    <button type="submit"  onClick = {handleReplaceClick} className="btn btn-primary mx-2 my-2">Find & Replace</button>
    <button type="submit"  onClick = {handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
    <button type="submit"  onClick = {handleCopy} className="btn btn-primary mx-2 my-2">Copy Text</button>
    <button type="submit"  onClick = {handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Spaces</button>
  </div>

    <div className="container">
      <h2 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>Your Text summary</h2>
      <p style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>{wordCount(text)} words and {text.length} characters </p>
      <p style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>{0.008*wordCount(text)} Minutes Read</p>
      <h2 style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>Preview</h2>
      <p style={{color:  props.mode == 'dark' ? 'white' : 'black'}}>{text.length > 0 ? text: "Enter text to Preview"}</p>
    </div>
 </>

  )
}
