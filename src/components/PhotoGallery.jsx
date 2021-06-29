import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

import nOne from '../photos/1.png'
import nTwo from '../photos/2.png'
import nThree from '../photos/3.png'
import nFour from '../photos/4.png'
import nFive from '../photos/5.png'
import nSix from '../photos/6.png'
import nSeven from '../photos/7.png'
import nEight from '../photos/8.png'

export const PhotoGallery = () => {
    const photos = [
        nOne,
        nTwo,
        nThree,
        nFour,
        nFive,
        nSix,
        nSeven,
        nEight
    ]

    const carouselItems = (plus) => {
        return photos.map((photo, i) => {
            return (
                <Carousel.Item key={`${photo}-${i+plus}`}>
                    <img
                        className="d-inline-block w-100"
                        src={photos[(i+plus)%8]}
                        alt={`${photo}-${(i+plus)%8}`}
                    />
                </Carousel.Item>
            )
        })
    }

    return (
        <Container style={{backgroundColor: '#6a766a'}} className="py-4" fluid>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-inline-block d-md-none w-50">
                {carouselItems(0)}
            </Carousel>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-inline-block d-md-none w-50">
                {carouselItems(1)}
            </Carousel>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-none d-md-inline-block w-25">
                {carouselItems(0)}
            </Carousel>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-none d-md-inline-block w-25">
                {carouselItems(1)}
            </Carousel>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-none d-md-inline-block w-25">
                {carouselItems(2)}
            </Carousel>
            <Carousel interval={4000} controls={false} indicators={false} pause={false} keyboard={false} touch={false} className="d-none d-md-inline-block w-25">
                {carouselItems(3)}
            </Carousel>
        </Container>
    )
}