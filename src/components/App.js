import React from 'react';
import Header from './Header';
import ImagePane from './ImagePane';
import SildingInfoPane from './SlidingInfoPane';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <ImagePane />
      <SildingInfoPane />
      <Footer />
    </React.Fragment>
  );
}

export default App;
