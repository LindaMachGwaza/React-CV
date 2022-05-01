import React from "react";
//Font awesome imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

/*Function used to display the education contents of the CV. Used Font awesome icons and Bootstrap to style the page. 
Some of the styling is in the index.css file. Size of icon was adjusted. Inline margin and padding was added*/
const Education = () => {
  return (
    <div className="about">
      <div className="heading">
        <FontAwesomeIcon
          icon={faBookOpen}
          className="about_icon mr-1"
          size="3x"
        />
        <span className="about_title">EDUCATION</span>
      </div>
      <div class="edu-group">
        <h4>HYPERIONDEV</h4>
        <span>Ongoing</span>
        <p>Full Stack Web Development Bootcamp</p>
      </div>
      <div class="edu-group">
        <h4>GOOGLE DIGITAL SKILLS FOR AFRICA</h4>
        <span>2022</span>
        <p>Fundamentals of Digital Marketing</p>
      </div>
      <div class="edu-group">
        <h4>LCCI</h4>
        <span>2002</span>
        <p>Diploma in Marketing</p>
      </div>
      <div class="edu-group">
        <h4>IAC</h4>
        <span>2004</span>
        <p>Marketing Management Certificate</p>
      </div>
    </div>
  );
};
/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default Education;

//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks, previous tasks and React fontawesome
