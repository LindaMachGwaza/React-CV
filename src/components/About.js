import React from 'react';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faUser} from '@fortawesome/free-solid-svg-icons';

/*Function used to display the abot me contents of the CV. Used Font awesome icons and Bootstrap to style the page. 
Some of the styling is in the index.css file. Size of icon was adjusted as well. Inline margin and padding was added*/
const About = () =>{
    return (
        <div className='about'>
            <div className='heading'>
            <FontAwesomeIcon icon={faUser}className='about_icon mr-1' size='3x'/><span className='about_title'>ABOUT ME</span>
            </div>
            <h6 className='about_intro'>
            I am an enthusiastic, self-motivated, reliable, responsible and hard working person. Very
                        flexible and possess excellent time management skills. I am a mature team worker and adaptable
                        to all challenging situations. I am able to work well both in a team environment as well as an
                        individual with minimum supervision. Also a curious an ambitious person who can learn
                        new things quickly.
            </h6>
            <p className='about_intro'>I spend most of my time working, coding, reading any interesting coding articles or news as well as playing with my family. I am passionate about design; really appreciate any good design and always have ideas on how to improve when there is need. Nature walking, worshipping God and music serve as comforting escape for me.</p>
                    <p className='about_intro'>Since my coding journey started I have learnt quite a number of things and I am looking forward to learn a great deal and improve as I continue.</p>

        </div>
    );
};
/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default About;

//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks, previous tasks and React fontawesome