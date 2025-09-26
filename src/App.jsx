import Home from './components/Home'
import Navbar from './components/Navbar';
import ThemeProvider from './Theme/ThemeContext';
import About from './components/About'


const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
    </ThemeProvider>
  )
}

export default App
