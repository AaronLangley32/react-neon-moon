import React from 'react'
import { PageBody, Main, PhotosContainer, Photo1, Photo2, Photo3, Photo4 } from '../CSS/HomeStyles'

const Home = () => {
  return (
    <PageBody>
      <Main>
        <PhotosContainer>
          <Photo1></Photo1>
          <Photo2></Photo2>
          <Photo3></Photo3>
          <Photo4></Photo4>
        </PhotosContainer>
      </Main>
    </PageBody>
  )
}

export default Home