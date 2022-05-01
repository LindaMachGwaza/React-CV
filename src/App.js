import './App.css';
import Sidebar from './components/Sidebar';
import About from './components/About';
import WorkExperince from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';

//Function used to display the components
function App() {
  return (
    <div className="App">
      <div className= "container">
        <div className= "row">
          <div className= "col-4">
        <div className='app_sidebar'>
           <Sidebar/>
           <Skills/>
           </div>
        </div>
        <div className= "col-lg-8 app_main-content">
          
          <About/>
          <WorkExperince/>
          <Education/>
         
    </div>
      </div>
    </div>
    
  </div>
  );
}

/*Component exported so that it can be used by other programs with the help of the imports statements(GeeksforGeeks)*/
export default App;

//Sources used include Hyperiondev notes, Stackoverflow, React Bootstrap, You Tube, GeeksforGeeks and React fontawesome