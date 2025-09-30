import Home from './components/Home'
import Navbar from './components/Navbar';
import ThemeProvider from './Theme/ThemeContext';
import About from './components/About/About'
import Project from './components/Project';


const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Project />
    </ThemeProvider>
  )
}

export default App
