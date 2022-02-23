import classes from '../resourses/layout/portfolio.module.scss';
import battelShipImg from '../resourses/image/battelship.png';
import bookLibaryImg from '../resourses/image/book-libary.png';
import cvCreaterImg from '../resourses/image/cv-creater.png';
import keyCodeImg from '../resourses/image/keycode-genrater.png';
import pokeMemoryImg from '../resourses/image/pokemon-memory.png';
import shoesStoreImg from '../resourses/image/shoes-store.png';
import starBoxImg from '../resourses/image/starbux-clone.png';
import todoImg from '../resourses/image/todo.png';
import weatherAppImg from '../resourses/image/weather-app.png';
import kabnanBoard from '../resourses/image/kabnan-board.png';
import ticTacToe from '../resourses/image/tic-tac-toe.png';
import landingPageTormbones from '../resourses/image/landing-page.png';
import landingPage from '../resourses/image/landing-page-two.png';
import calculater from '../resourses/image/calculater.png';
import etchASketch from '../resourses/image/etch-a-sketch.png';
import rockPaperScissors from '../resourses/image/rock-paper-scissor.png'

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const projects = [
    {name: 'BattelShip Game', img: battelShipImg, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo:'https://u31999.github.io/classic-battel-ship-game/',
        repositoriey: 'https://github.com/u31999/classic-battel-ship-game'},
    {name: 'Book Libary', img: bookLibaryImg, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/book-libary-2-/',
        repositoriey:'https://github.com/u31999/book-libary-2-'},
    {name: 'CV Creater', img: cvCreaterImg, stack: ['React.js', 'CSS3'],
        liveDemo: 'https://u31999.github.io/cv-creater/',
        repositoriey: 'https://github.com/u31999/cv-creater'},
    {name: 'KeyCode Genrater', img: keyCodeImg, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo:'https://u31999.github.io/keycode-genrater/',
        repositoriey:'https://github.com/u31999/keycode-genrater'},
    {name: 'Pokemon Memory', img: pokeMemoryImg, stack: ['React.js', 'SASS'],
        liveDemo:'https://u31999.github.io/memory-card/',
        repositoriey: 'https://github.com/u31999/memory-card'},
    {name: 'Shoes Store', img: shoesStoreImg, stack: ['React.js', 'SASS'],
        liveDemo:'https://u31999.github.io/shoes-store/',
        repositoriey:'https://github.com/u31999/shoes-store'},
    {name: 'Starbox Clone', img: starBoxImg, stack: ['HTML5', 'CSS3'],
        liveDemo: 'https://u31999.github.io/Starbux-clone/',
        repositoriey: 'https://github.com/u31999/Starbux-clone'},
    {name: 'Todo List', img: todoImg, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/todo-list/',
        repositoriey: 'https://github.com/u31999/todo-list'},
    {name: 'Weather App', img: weatherAppImg, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/weatherApp/',
        repositoriey: 'https://github.com/u31999/weatherApp'},
    {name: 'Kabnan Board', img: kabnanBoard, stack: ['React.js', 'CSS3'],
        liveDemo: 'https://u31999.github.io/kabnan/',
        repositoriey:'https://github.com/u31999/kabnan'},
    {name: 'Tic Tac Toe', img: ticTacToe, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/kabnan/',
        repositoriey:'https://github.com/u31999/kabnan'},
    {name: 'Landing Page Trombones', img: landingPageTormbones, stack: ['HTML5', 'CSS3'],
        liveDemo: 'https://u31999.github.io/landing-page-trombones/',
        repositoriey:'https://github.com/u31999/landing-page-trombones'},
    {name: 'Landing Page', img: landingPage, stack: ['HTML5', 'CSS3'],
        liveDemo: 'https://u31999.github.io/landing-page-theOdin/',
        repositoriey:'https://github.com/u31999/landing-page-theOdin'},
    {name: 'Calculater', img: calculater, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/calculater/',
        repositoriey:'https://github.com/u31999/calculater'},
    {name: 'Etch A Sketch', img: etchASketch, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/ETCH-A-SKETCH/',
        repositoriey:'https://github.com/u31999/ETCH-A-SKETCH'},
    {name: 'Rock Paper Scissors', img: rockPaperScissors, stack: ['HTML5', 'CSS3', 'javaScript'],
        liveDemo: 'https://u31999.github.io/ROCK-PAPER-SCISSORS/',
        repositoriey:'https://github.com/u31999/ROCK-PAPER-SCISSORS'}
]

const Portfolio = () => {
    const projectLength = projects.length -1;
    let [showingProgect, setShowngProject] = useState(0);

    const mouseOverImg = (target, name, stack, repositoriey, liveDemo) => {
        const targetParent = target.parentElement;
        const stackString = () => {
            let str = '';
            stack.forEach((st, i) => {
                if(i === stack.length -1) return str += st;
                str += `${st}/ `
            })
            return str;
        }
        const showContainer = document.createElement('div');
        const info = document.createElement('div');
        const btnContainer = document.createElement('div');
        const liveDemoBtn = document.createElement('button');
        const repositriyBtn = document.createElement('button');

        showContainer.className = `${classes.showContainer} ${classes.fadeInClass}`;
        info.className = `${classes.showInf}`;
        btnContainer.className = `${classes.btnContainer}`;
        liveDemoBtn.innerText = 'Live Demo';
        repositriyBtn.innerText = 'Repository';
        info.innerText = stackString();

        targetParent.append(showContainer);
        showContainer.append(info);
        showContainer.append(btnContainer);
        btnContainer.append(liveDemoBtn);
        btnContainer.append(repositriyBtn);
    
        repositriyBtn.addEventListener('click', ()=> window.open(repositoriey, '_blank'));
        liveDemoBtn.addEventListener('click', ()=> window.open(liveDemo, '_blank'));

        showContainer.addEventListener('mouseleave', (e)=> showContainer.remove());
        
    }
    const moveForword = (e) => {
        if(showingProgect === projectLength) return;
        setShowngProject(showingProgect += 1);
    }
    const backForward = (e) => {
        if(showingProgect === 0) return;
        setShowngProject(showingProgect -= 1);
    }
    return(
        <div className= {classes.mainContainer} id='portfolio'>
        <div className={classes.sectionTitle}>
                <div>PROJECTS</div>
                <div>
                    <div></div>
                </div>
                </div>
            
            <div className={classes.projectContainer}>
            <div className={classes.arrow} style={(showingProgect === 0) ? {color:'red'} : {color:'#04c2c9'}} 
            onClick={(e) => backForward(e)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
                <div className={classes.onePconatiner}>
                <div className={classes.imgContainer}>
                    <img id='theImg' src={projects[showingProgect].img} 
                        onMouseOver={(e) => mouseOverImg(e.target, projects[showingProgect].name,
                                            projects[showingProgect].stack, projects[showingProgect].repositoriey,
                                            projects[showingProgect].liveDemo)} alt='img'
                    />
                </div>
                <div className={classes.projectDescription}>{projects[showingProgect].name}</div>
                    
                </div>
                <div className={classes.arrow} onClick= {(e) => moveForword(e)}>
                    <FontAwesomeIcon icon={faArrowRight}
                     style={(showingProgect === projectLength) ? {color:'red'} : {color:'#04c2c9'}}/>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;