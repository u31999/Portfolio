import Particles from "react-tsparticles";

const Particle = () => {
    const particleParms=  {
      fpsLimit: 40,
        background: {
        color: "#0b032d",
      },
      style: {
        position: 'absolute',
        width: '100%',
        height: '100%'
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
       modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#f67e7d", "#843b62", "#621940"],

        },
        links: {
          color: "#ffffff",
          distance: 70,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
         outMode: "bounce",
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: false,
        },
      },
    };
        
    return(
        <Particles options={particleParms} />
    )
}

export default Particle;