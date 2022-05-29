import styled from 'styled-components'
import barImg from '../images/bar.jpg'
import drinksImg from '../images/drinks.jpg'
import eventsImg from '../images/events.jpg'
import foodImg from '../images/food.jpg'

export const PageBody = styled.div`
    display: flex;
    position: absolute;
    bottom:0;
    top:8rem;
    left:0;
    right:0;
    z-index: -1;
    /* background-color: #a12343; */
    @media screen and (max-width: 990px) {
    }
    @media screen and (max-width: 672px) {
    }
`
export const Main = styled.div`
    
`
export const PhotosContainer = styled.div`
    display: flex;
    width: 100vw;
`
export const Photo1 = styled.div`
    background-image: url(${barImg});
    background-size: cover;
    width: 25%;
    aspect-ratio: 1/1.1;
    background-color: green;
`
export const Photo2 = styled.div`
    background-image: url(${foodImg});
    background-size: cover;
    width: 25%;
    aspect-ratio: 1/1.1;
    background-color: purple;
`
export const Photo3 = styled.div`
    background-image: url(${eventsImg});
    background-size: cover;
    width: 25%;
    aspect-ratio: 1/1.1;
    background-color: green;
`
export const Photo4 = styled.div`
    background-image: url(${drinksImg});
    background-size: cover;
    width: 25%;
    aspect-ratio: 1/1.1;
    background-color: purple;
`