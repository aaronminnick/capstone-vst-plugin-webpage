import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import ImagePane from './ImagePane';
import SildingInfoPane from './SlidingInfoPane';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <ImagePane />
        <SildingInfoPane />
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
