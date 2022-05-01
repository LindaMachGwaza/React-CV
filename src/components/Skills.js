import React from 'react';
//Font awesome imported
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCogs} from '@fortawesome/free-solid-svg-icons';
import{faHtml5} from '@fortawesome/free-brands-svg-icons';

/*Function used to display the work skills contents of the CV. Used Font awesome icons and Bootstrap to style the page. 
Some of the styling is in the index.css file. Size of icon was adjusted as well. Inline margin and padding was added*/
const Skills = () =>{
    return (
        <div className='about'>
            <div className='work-heading'>
            <FontAwesomeIcon icon={faCogs}className='about_icon mr-1' size='3x'/><span className='about_title'>SKILLS</span>
            </div>
        <div className='bars'>
        <div class="bar">
                           <FontAwesomeIcon icon={faHtml5} className='mr-1'/><p>HTML/CSS</p>
                            <span></span>
                        </div>
                        <div class="bar">
                            <p>Javascript</p>
                            <span></span>
                        </div>
                        <div class="bar">
                            <p>Bootstrap</p>
                            <span></span>
                        </div>
                        <div class="bar">
                            <p>JQuery</p>
                            <span></span>
                        </div>
                        <div class="bar">
                            <p>Git</p>
                            <span></span>
                        </div>
                        <div class="bar">
                            <p>ReactJs</p>
                            <span></span>
                        </div> <br/>

        </div>
        <div className='other_skills'><h4>Other Skills</h4> 
        </div>
                    <div class="other">
                        <p>Attention to detail</p>
                        <span></span><br/>
                    </div>
                    <div class="other">
                        <p>Adaptable and a great team player</p>
                        <span></span><br/>
                    </div>
                    <div class="other">
                        <p>Excellent communication skills</p>
                        <span></span><br/>
                    </div>

                    <div class="other">
                        <p>Proficient in Microsoft Office applications including Word, Outlook and Excel</p>
                        <span></span><br/>
                    </div>
            </div>
    );
}; 
/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default Skills;
//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks, previous tasks and React fontawesome