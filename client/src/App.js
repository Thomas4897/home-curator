

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';
import HomePage from './component/page/HomePage';

function App() {
  const [colorScheme, setColorScheme] = useState('dark');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider 
      theme={{
        colorScheme: 'dark',
        colors: {
          // override dark colors to change them for all components
          dark: [
            '#080808',
            '#080808',
            '#080808',
            '#080808',
            '#080808',
            '#080808',
            '#080808',
            '#080808',
          ],
        },
      }}
      withGlobalStyles withNormalizeCSS
      >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
  );
}

export default App;
