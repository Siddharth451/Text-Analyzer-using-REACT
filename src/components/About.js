import React, { useState } from 'react'

export default function About() {
    const [lightmode, darkmode] = useState({
        color: 'blue',
        backgroundColor: 'white'
    });
    const [btn, setbtn] = useState("Enable Dark Mode");
    const toggle = () => {
        if (lightmode.backgroundColor === 'white') {
            darkmode({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtn("Enable Light Mode");
        }
        else {
            darkmode({
                color: 'blue',
                backgroundColor: 'white'
            })
            setbtn("Enable Dark Mode");
        }
    }
    return (
        <>
            <h1>About us </h1>
            <div className="container my-3">
                <div class="card" style={lightmode}>
                    <div class="card-body">
                        Free software utility which allows you to find the most frequent phrases and frequencies of words. Non-English language texts are supported. It also counts number of words, characters, sentences and syllables.
                    </div>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggle}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault"  >{btn}</label>
                    </div>
                </div>
            </div>
        </>
    )

}
