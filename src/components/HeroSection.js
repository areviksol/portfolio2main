import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei';
import { Suspense } from 'react';
import AnimatedSphere from './AnimatedSphere';
import * as THREE from 'three';
function HeroSection({
  darkBg,
  topLine,
  darkText,
  darkTextDesc,
  headline,
  description,
  buttonLabel,
  imgStart
}) {
  return (
    <>
      <div
        className={darkBg ? 'home__hero-section' : 'home__hero-section lightBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={darkText ? 'heading' : 'heading light'}>
                  {headline}
                </h1>
                <p
                  className={
                    darkTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle light'
                  }
                >
                  {description}
                </p>
                <Link to='/say-hi'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
            {/* <Canvas className='canvas'>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[-2, 5, 2]} intensity={1} />
                  <Suspense fallback = {null}/>
                  <Box />
                </Canvas> */}

                <Canvas className='canvas'>
                  <OrbitControls enableZoom={false} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[-2, 5, 2]} intensity={1} />
                  <Suspense fallback={null} />
                  <AnimatedSphere/>
                </Canvas>
                {/* <img src={img} alt={alt} className='home__hero-img' /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
