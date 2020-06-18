import React from 'react';




// Components
import JumboTron from './JumboTron';
import MainLayout from './MainLayout';


class Home extends React.Component {
    render() {
    
      return (
          <div className="main-content home">
            <JumboTron />
          <main>
            <MainLayout />
          </main>

          </div>
      );
    }
  }
  
  export default Home;