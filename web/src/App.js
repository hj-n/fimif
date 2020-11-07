import React from 'react';
import styled from 'styled-components'

import Header from "./components/Header"
import FimifMap from "./components/FimifMap"



function App() {

  const size = 1000;

  return (
    <div>
      <Header/>
      <FimifWrapper>      
        <FimifMap
          method="tsne"
          dataset="mnist_sampled"
          height={size}
          width={size}
          isLabel={false}
          metric = "euclidean"
        />
      </FimifWrapper>
    </div>
  );
}

const FimifWrapper = styled.div`
  justify-content: center;
  display: flex;
  alignIterms: 'center';

`

export default App;
