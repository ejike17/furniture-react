import './App.css';
import './utilities.css';
import DarkFooter from './Components/Footer/DarkFooter';
import FooterContainer from './Components/Footer/FooterContainer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import MainNavigation from './Components/Navigation/MainNavigation';

function App() {
  return (
    <div className='holder'>
      
      <nav className='navbar bg-brown flex'>
        <MainNavigation />
      </nav>
     
      <header className='header bg-light-brown flex' id = "home">
        <Header />
      </header>
      
      
      <main>
        <Main />
      </main>

      <footer className="footer bg-light-brown" id = "footer">
        <FooterContainer />
        <DarkFooter />
      </footer>
    </div>
  );
}

export default App;
