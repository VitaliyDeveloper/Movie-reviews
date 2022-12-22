import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

// import { Engine } from 'tsparticles-engine';
// import { loadFull } from 'react-tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesSnow = props => {
  const options = useMemo(() => {
    return {
      // interactivaty: {
      //   events: {
      //     onClick: {
      //       enable: true,
      //       mode: 'push',
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: 'buble',
      //     },
      //   },
      // },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        number: { value: 400 },
        links: {
          distance: 200,
        },
        move: {
          enable: true,
          speed: {
            min: 1,
            max: 5,
          },
          direction: 'bottom',
        },
        opacity: {
          value: { min: 0, max: 0.8 },
        },
        size: {
          value: {
            min: 1,
            max: 7,
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(engine => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesSnow;
