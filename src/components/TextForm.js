import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
// console.log(useState);
 //setText('shree');

 const handleUpClick =() =>{
    // console.log("Uppercase was clicked " + text);
     let newText = text.toUpperCase();
     setText(newText);
    props.showAlert("Converted to uppercase","success");
    }

 const handleOnChange =(event) =>{
   // console.log("On Change");
    setText(event.target.value);
    
}
const handleloClick =(event) =>{
    // console.log("On Change");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
    
 }

 const handlereverseClick =(event) =>{
    // console.log("On Change");
    //console.log(!!event.newText.includes(/^[.,:!?]/).length);
let word = text.split("");
let reverse = word.reverse();
let newText = reverse.join("");

    setText(newText);
   // setText(newText);
   props.showAlert("Text Reverted Successfully","success");
    
 }
 

    return (
        <>
    <div  className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
       <h1>{props.heading}</h1>
         <div className="mb-3">
       
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
      <button className="btn btn-primary mx-2" onClick={handleloClick} >Convert to Lower Case</button>
      <button className="btn btn-primary mx-2" onClick={handlereverseClick} >ReverseText</button>
    </div>
    <div  className="container my-3" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characterss</p>
        <p>{0.008 * text.split(" ").length } Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter something in the textbox above to preview it"}</p>

    </div>
        </>

  )
}
