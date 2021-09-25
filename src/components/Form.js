import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
export default function Form(props) {
    const changeToUppercase = ()=> {
        let newText=text.toUpperCase()||transcript.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    
    
    const changeToLowerrcase=()=>{
        let small=text.toLowerCase()||transcript.toUpperCase();
        setText(small);
        props.showAlert("Converted to Lowercase","success");
    }
    
    function clear(){
         let clearText='';
        setText(clearText+resetTranscript());
        setText('');
    }
    const textaaCopy=()=>{
        var text = document.getElementById("mybox");
  /* Select the text field */
  text.select();
  navigator.clipboard.writeText(text.value||transcript);
  props.showAlert("Text copied","success");
    }
    const removeText=()=>{
        let newText1=text.split(/[ ]+/)||transcript.split(/[ ]+/)
        setText(newText1.join(" "));
        props.showAlert(" Extra space removed","success");
    }
    const { transcript,resetTranscript} = useSpeechRecognition();
    //const { resetTranscript } = useSpeechRecognition();
    var content = JSON.stringify(transcript);
    var[text, setText] = useState(transcript);
   console.log(text+transcript);
    return (
        <>
    <div className="container">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text||transcript} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey'}} rows="8"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-secondary mx-2" onClick={SpeechRecognition.startListening}>Speak</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={changeToUppercase}>Convert to UpperCase</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={changeToLowerrcase}>Convert to LowerCase</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={clear}>Clear</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={textaaCopy}>Copy</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={removeText}>Remove Extra space</button>
        </div>
        

    </div>
    <div className="container my-3">
        <h1 style={{color:props.mode==='light'?'black':'white'}}>Your text Summary</h1>
        <p style={{color:props.mode==='light'?'black':'white'}}>{content.split(" ")!=null?content.split(" ").length:0+(text.length+text.length!=null?text.length:0)} Words {content.length!=null?content.length:0+text.length} characters</p>
        <p>{0.008*(content.split(" ")!=null?content.split.length:0)} Minutes Read</p>
        <h2 style={{color:props.mode==='light'?'black':'white'}}>Preview</h2>
        <p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
    </div>
    </>
    )
}
