import classes from '../resourses/layout/contact.module.scss';
import { Scrollchor } from 'react-scrollchor';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const url = {
    github:'https://github.com/u31999',
    linkedin:'linkedin.com/in/ahmed-hassan-elzain/'
}

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        let name, mail, message;

        e.target.childNodes.forEach((input) => {
            if(input.nodeName === 'SUBMIT') return;
            if(input.nodeName === 'INPUT') {
                if(input.name === 'name') {
                    if(input.value === '') {
                        input.value = 'This Field Is Required';
                        input.style.color = 'red';
                        input.addEventListener('click', (e)=> {
                            e.target.value = '';
                            e.target.style.color = 'white' 
                        });
                    }else if((input.value === 'This Field Is Required')){
                        name = undefined;
                    }else {
                        name = input.value;
                    }
                }else if (input.name === 'email') {
                    if(input.value === '') {
                       
                        input.value = 'This Field Is Required';
                        input.style.color = 'red';
                        input.addEventListener('click', (e)=> {
                            e.target.value = '';
                            e.target.style.color = 'white' 
                        });
                    }else  if(input.value === 'This Field Is Required') {
                        mail = undefined;
                    }else {
                        mail = input.value;
                    }
                }
            }else if(input.nodeName === 'TEXTAREA') {
                if(input.value === '') {
                  
                        input.value = 'This Field Is Required';
                        input.style.color = 'red';
                        input.addEventListener('click', (e)=> {
                            e.target.value = '';
                            e.target.style.color = 'white' 
                        });
                }else if (input.value === 'This Field Is Required') {
                    message = undefined;
                }else {
                    message = input.value;
                }
            }
        });

        if(name === undefined || mail === undefined || message === undefined) return;
        let fullStr = `From:${name }%0D%0ASender Email:${mail}%0D%0A ${message}`;
        let href = `mailto:alzain31999@gmail.com?subject=Mail from My Portofilio&body=${fullStr}`;
        const respond = document.querySelector('#message');

        window.open(href);

        respond.style.visibility = 'visible';

        setTimeout(()=> {
            respond.style.visibility = 'hidden';
        }, 20000)


       
    }
    return(
        <div className={classes.mainContainer} id='contact'>
            <div className={classes.topContact}>
            <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%"
             version="1.1" xmlns="http://www.w3.org/2000/svg" className="svgcolor-light">
          <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
        </svg>
            </div>
            <div className={classes.middleContact}>
            <div className={classes.sectionTitle}>
                <div>CONTACT</div>
                <div>
                    <div></div>
                </div>
                </div>
                <div className={classes.subTitle}>
                Have a question or want to work together?
                </div>
                <form className={classes.form} action='' onSubmit={handleSubmit}>
                    <input placeholder="Name" type="text"  name="name" required="" />
                    <input placeholder="Enter email" type="email" name="email" required="" />
                    <textarea placeholder="Your Message" type="text" name="message"></textarea>
                    <div className={classes.formDiv}>
                    <div className={classes.message} id='message'>I Will Contat You Soon. Thanks Your Message!</div>
                    <input className={classes.submit} type="submit" id="submit" value="SUBMIT" />
                    </div>
                </form>
            </div>
            <div className={classes.bottomContact}>
                <div className={classes.angleContainer}>
                    <Scrollchor to='#home'>
                        <FontAwesomeIcon icon={faAngleDoubleUp} />
                    </Scrollchor>
                </div>
                <div className={classes.icons}>
                    <FontAwesomeIcon icon={faGithubSquare} 
                        onClick={()=> window.open(url.github, '_blank')} />
                    <FontAwesomeIcon icon={faLinkedin} 
                        onClick={()=> window.open(url.linkedin, '_blank')}  />
                </div>
                <div className={classes.copyRight}>
                    AHMED HASSAN<span> ©2023</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;