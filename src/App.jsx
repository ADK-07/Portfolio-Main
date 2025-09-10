import Home from './components/Home'
import Navbar from './components/Navbar';
import ThemeProvider from './Theme/ThemeContext';


const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
    </ThemeProvider>
  )
}

export default App
