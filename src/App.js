import React from 'react';
import { useFlickr } from './core/FlickrContext';
import { Search } from './components/search';
import styled from 'styled-components';

import { FlickrCard } from './containers/FlickrCard';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  padding: 20px;

  display: grid;

  grid-template-rows: auto; 
  column-gap: 20px;
  row-gap: 20px;

  grid-template-columns: auto;

  @media (min-width: 768px) {
    grid-template-columns: 366px 366px;
  }

  @media (min-width: 860px) {
    grid-template-columns: 400px 400px;
  }

  @media (min-width: 1180px) {
    grid-template-columns: 366px 366px 366px;
  }

  @media (min-width: 1320px) {
    grid-template-columns: 400px 400px 400px;
  }

  @media (min-width: 1570px) {
    grid-template-columns: 366px 366px 366px 366px;
  }

  @media (min-width: 1620px) {
    grid-template-columns: 380px 380px 380px 380px;
  }
  
`;



function App() {
  const data = useFlickr();

  return (
    <div className="App">
      <Search />

      <Container>
        <Grid>
          { Boolean(data?.map) && data.map((item) => (
            <FlickrCard
              key={`flickr-card-${item.link}`}
              {...item}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
