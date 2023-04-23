import Header from "./components/header";
import { GlobalStyleComponent } from "styled-components";
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import React, {useState} from 'react';
import dark from './styles/themes/dark';   
import usePeristedState from './utils/usePersistedState'


const App = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
