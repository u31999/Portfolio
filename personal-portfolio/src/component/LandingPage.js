import classes from '../resourses/layout/landingPage.module.scss';
import Particle from './particle/Particle.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Scrollchor } from 'react-scrollchor';
	    
const LandingPage = () => {
      
   return(
        <div className = {classes.mainContainer} id='home' >
        <Particle />
        <div className={classes.textContainer}>
          <div className={classes.text}>
            Hello, I'm <span>Ahmed Hassan</span>.<br/>
            Front-End Web Devoloper.
          </div>
          <div className={classes.btnContainer}>
          <button><Scrollchor to='#portfolio'>View my work<span>
          <FontAwesomeIcon icon={faArrowDown} /></span>
          </Scrollchor></button>
          </div>
        </div>
        </div>
    )
}
export default LandingPage;