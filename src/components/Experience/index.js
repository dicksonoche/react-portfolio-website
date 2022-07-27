import { Center } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BallTriangle } from  'react-loader-spinner'

const Experience = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // eslint-disable-next-line no-unused-vars
    const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 1500);
  })

  return (
    <>
        <Center style={{ height: "80vh", width: "100%" }}>
        {isLoading===true?
            <BallTriangle style={{ animation: "fadeOut 1s 1s" }}
                height="80"
                width="80"
                color='grey'
                ariaLabel='loading'
                timeout={1500}
            />: null
        }
        </Center>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['J', 'o', 'b', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <p style={{color: '#fff'}}>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p style={{color: '#fff'}} align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p style={{color: '#fff'}}>
            If I need to define myself in one sentence that would be a family
            person, father of a beautiful daughter, a sports fanatic,
            photography enthusiast, and tech-obsessed!!!
          </p>
        </div>
      </div>
    </>
  )
} 

export default Experience