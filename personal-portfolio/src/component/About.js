import classes from '../resourses/layout/about.module.scss';
import { Scrollchor } from 'react-scrollchor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faSass,
     faReact, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const icons = [ {name: 'HTML5', icon: faHtml5, color: '#dd4d25'}, 
        {name: 'CSS3', icon: faCss3Alt, color:'#254bdd'}, 
        {name:'javaScript' , icon: faJsSquare, color: '#f7c327'},
        {name: 'SASS', icon:faSass, color: '#c66394'},
        {name:'React', icon: faReact, color:'#5dd3f3'},
        {name:'Node.js', icon: faNodeJs, color: '#7fc728'},
        {name:'Git', icon: faGitAlt, color: '#e94e31'} ];


const About = () => {
    const setActive = (parent, target) => {
            parent.childNodes.forEach((child) =>{
                if(child.classList.contains(`${classes.active}`)) child.classList.toggle(`${classes.active}`);
            });
            if(target.classList.contains(`${classes.active}`)) return;
            target.classList.toggle(`${classes.active}`);
    } 
    return(
        <div className = {classes.mainContainer} id='about'>
            <div className={classes.navContainer}>
            <nav>
                <Scrollchor to="#home" className="nav-link" 
                afterAnimate={(e) => setActive(e.target.parentElement, e.target)}>HOME</Scrollchor>
                <Scrollchor to="#about" className="nav-link"
                afterAnimate={(e) => setActive(e.target.parentElement, e.target)}>ABOUT</Scrollchor>
                <Scrollchor to="#portfolio" className="nav-link"
                afterAnimate={(e) => setActive(e.target.parentElement, e.target)}>PORTFOLIO</Scrollchor>
                <Scrollchor to="#contact" className="nav-link"
                afterAnimate={(e) => setActive(e.target.parentElement, e.target)}>CONTACT</Scrollchor>
            </nav>
            </div>
            <div className={classes.aboutContainer}>
                <div className={classes.sectionTitle}>
                <div>ABOUT</div>
                <div>
                    <div></div>
                </div>
                </div>
                <div className={classes.sectionText}>
                    Hi, I’m Ahmed Hassan, a front-end developer focused 
                    on creating beautiful and user-friendly applications 
                    while writing clean code.
                </div>
                <div className={classes.sectionTitle}>
                <div>SKILLS</div>
                <div>
                    <div></div>
                </div>
                </div>
                <div className={classes.skillsIconsContainer}>
                    {icons.map((icon, i) => 
                        <div key={i} className={classes.icon}>
                            <FontAwesomeIcon icon={icon.icon} className={classes.theIcon}
                               style={{color: icon.color}} />
                            <div style={{color: icon.color}}>{icon.name}</div>
                        </div>)}
                </div>
                
            </div>
        </div>
    )
}

export default About;