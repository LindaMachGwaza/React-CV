import React from 'react';
//Font awesome imported
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faBriefcase} from '@fortawesome/free-solid-svg-icons';

/*Function used to display the work experience contents of the CV. Used Font awesome icons and Bootstrap to style the page. 
Some of the styling is in the index.css file. Size of icon was adjusted as well. Inline margin and padding was added*/
const WorkExperince = () =>{
    return (
        <div className='about'>
            <div className='work-heading'>
            <FontAwesomeIcon icon={faBriefcase}className='about_icon mr-1' size='3x'/><span className='about_title'>WORK EXPERIENCE</span>
            </div>
        <div className='work-group'>
        <h3>INSURANCE CONSULTANT</h3>
        <h4>Mukuru Financial Services</h4>
                        <span>08/2020 to Current</span>
                        <p>Signing up people Funeral Cover<br/>

                            Update client details on the system and ensuring it's correctly entered<br/>
                            Assist with any payment related issues<br/><br/>
                        </p> 
            </div>    
            <div className='work-group'>
        <h3>DIGITAL SUPPORT CONSULTANT</h3>
        <h4>Mukuru Financial Services</h4>
                        <span>04/2020 to 07/2021</span>
                        <p>Assisting customers on Mukuru digital platforms including web chats, Email, Zendesk, <br/>
                            Facebook, Twitter and WhatsApp, Google Console<br/><br/>

                        </p>
            </div>
            <div className='work-group'>
        <h3>SALES AND SUPPORT CONSULTANT</h3>
        <h4>Mukuru Financial Services</h4>
                        <span>03/2015 to 03/2020</span>
                        <p>Offering customer support on all company products. Handling sales inquiries from inbound and
                            outbound calls<br/>
                            Promote, add value and sell all company products telephonically<br/><br/>

                        </p> 
            </div>    
            <div className='work-group'>
        <h3>FIELD AGENT</h3>
        <h4>Mukuru Financial Services</h4>
                        <span>04/2012 to 02/2015</span>
                        <p>Sourcing and signing up clients<br/>
                            Marketing and promoting the Company’s image to potential clients, Explaining FICA
                            regulations to clients<br/><br/>

                        </p> 
            </div>        
            <div className='work-group'>
        <h3>FINANCIAL ADVISOR</h3>
        <h4>Liberty Life</h4>
                        <span>10/2011 to 03/2012</span>
                        <p>Advising clients on financial needs, choices and investments. Presentations on one on one and
                            group levels<br/>
                            After sales follow up and advice<br/><br/>
                        </p>
            </div>        
            <div className='work-group'>
        <h3>ACCOUNT MANAGER</h3>
        <h4>Mobelli All Weather Furniture</h4>
                        <span>09/2008 to 06/2011</span>
                        <p>Assisting and advising customers on their purchases, account handling, sales generation and
                            after sales follow up<br/>
                            Preparing quotations and invoices and maintaining showroom visual in store displays
                        </p>
            </div>        
        </div>
    );
};
/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default WorkExperince;

//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks, previous tasks and React fontawesome