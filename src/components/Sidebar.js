import React from 'react';
//Imported font awesome icons
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faMapMarker} from '@fortawesome/free-solid-svg-icons';
import{faEnvelope} from '@fortawesome/free-solid-svg-icons';
import{faFacebook} from '@fortawesome/free-brands-svg-icons';
import{faInstagram} from '@fortawesome/free-brands-svg-icons';
import{faGithub} from '@fortawesome/free-brands-svg-icons';
//Photo imported from local
import Picture from '../images/myphoto1.jpg'

/*Function used to display the sidebar contents of the CV. Used Font awesome icons and Bootstrap to style the page. 
Some of the styling is in the index.css file. Size of photo was adjusted as well as icon sizes. Inline margin and padding was added*/
const Sidebar = () =>{
    const handleEmail =() =>{
        window.open("mailto:lindamachivenyika@gmail.com")
    }
    return(
        <div className='sidebar'>
            <img src={Picture}className='sidebar_image' alt='me' height={135} width={120}/>
            <div className='name'>Linda <span>Machivenyika</span></div>
            <div className='title'>Full Stack Web Developer <span className='level'>Student</span></div>
            
            <div className='social-icons my-2'>
            <div>
            <FontAwesomeIcon icon={faFacebook} className='sidebar-icon mr-2' size='lg'/><span>ProsperityLindaGwaza</span>
            </div>
            <div className='sidebar-item'>
            <FontAwesomeIcon icon={faInstagram} className='sidebar-icon mr-2' size='lg'/><span>lindamachivenyika </span>  
            </div>
            </div>
            <div className='contact'>
            <div className='sidebar-item'>
            <FontAwesomeIcon icon={faGithub} className='sidebar-icon'size='lg'/> LindaMachGwaza
            </div>
            <div className='sidebar-location'>
            <FontAwesomeIcon icon={faMapMarker} className='sidebar-icon'size='lg'/> Cape Town, ZA
            </div>
            <div className='sidebar-item'>lindamachivenyika@gmail.com</div>
            <div className='sidebar-item'>+27733945383</div>
            <a href='email'>
            <div className='sidebar-item'>
            <FontAwesomeIcon icon={faEnvelope}className='sidebar-dwn mr-1' size='lg' onClick={handleEmail}/>EMAIL ME
            </div>
            </a>
            </div>
        
        </div>
        
    );
}

/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default Sidebar;

//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks and React fontawesome