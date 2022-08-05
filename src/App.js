import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { styledTheme } from './assets/helpers/styled-theme';

// import Pages
import Home from './pages/Home';


function App() {
  return (
    <ThemeProvider theme={styledTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
