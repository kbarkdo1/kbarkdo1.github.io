import "./Bio.css"

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


interface PhotoTextProps {
    text: string;
    image: string;
    imageOnRight?: boolean;
}
/**
 * 
 * @param props - properties of system .text is for txt file, .image for img file
 * @returns - image with text next to it
 */
export function PhotoText(props : PhotoTextProps) {

    const textPath = props.text;
    const imagePath = props.image;
    
    //let content = fetch(text)*/
    const textContent = require("../assets/" + textPath);
    const imageContent = require("../assets/" + imagePath);
    console.log("text path= " + textContent)
    console.log("image path= " + imageContent);
  
    

    const reader = new FileReader();
    // let bio = reader.readAsText(textContent);
    let stringData;
    const blob = new Blob([textContent]);
    const textData = blob.text();
  // Set up event listeners for the FileReader
    reader.onload = function(event) {
      // event.target.result contains the file's contents as a data URL
      const fileContent = textContent;
      
      // If you want to extract only the string part (excluding the data URL prefix)
      // stringData = fileContent.split(',')[1]; // Get the part after the comma
      
      // Now you have the file content as a string
    };
    // reader.readAsText(textContent)
    console.log(reader)

    if (props.imageOnRight) {
      return (
        <div className="bio">
          <Bio onRight={false}/>
          <img className="profilePhotoRight" src={ require("../assets/" + imagePath) } alt="profile"/>
        </div>
      );
    } else {
      return (
        <div className="bio">
          <img className="profilePhotoLeft" src={ require("../assets/" + imagePath) } alt="profile"/>
          <Bio onRight={true}/>
        </div>
      );
    }
    
}   
export function BioAndProfile(props : PhotoTextProps) {

  const textPath = props.text;
  const imagePath = props.image;
  
  //let content = fetch(text)*/
  if (props.imageOnRight) {
    return (
      <div className="bio">
        <Bio onRight={false}/>
        <ProfilePhoto />
      </div>
    );
  } else {
    return (
      <div className="bio">
        <ProfilePhoto />
        <Bio onRight={true}/>
      </div>
    );
  }
  
}   
function Bio(props:{onRight:boolean}) {
  if (props.onRight) {
    return (
        <p className="bioHeaderRight">
          <p>I'm Ken. I love building things, breaking them, fixing them, and then building them again. 
            I like understanding systems: in organizations this means people and communication styles, 
            in programming this means the usage and transformation of data. 
          </p>
          <p>I'm a graduate of Swarthmore College with a BA in Mathematics and Computer Science. 
          I've spent a lot of time using computers to do math, and using math to talk about computers. 
          Now I apply that same reasoning to making the weird, the wonderful, the complicated, and the simple. 
          Please reach out to me for any reason!
          </p>
        </p>
      )
  } else {
    return (
      <div className="biotextLeft">I love building things and breaking things, and then building them again, less breakably. 
      <br></br>I'm a graduate of Swarthmore College with a Bachelors in Mathematics and Computer Science. 
      I spent a lot of time using computers to do math, and using math to talk about computers. 
      
      Now I apply that same reasoning to making the weird, the wonderful, the complicated, and the simple. 
      I love all human beings, so please reach out to me in any way, at any time. 
      </div>
    )
  }
  
}
function ProfilePhoto() {
  return (
    <img className="profilePhoto" src={ require("../assets/profilePic.png") } alt="profile"/>
  )
}
export function PhotoTextTest() {
  //<img src={profilePic} alt="profile" width="200" height="200"/>
  return (
      <div className="post">
        
        <span>This is my bio. </span>
      </div>
    );
} 


export function TestComponent() {

    const [content, setContent] = useState("");
    useEffect(() => {
      fetch("./textFiles/bio.md")
        .then((res) => res.text())
        .then((text) => setContent(text));
    }, []);
  
    return (
      <div className="post">
        <ReactMarkdown children={content} />
      </div>
  
    );
  
  };
