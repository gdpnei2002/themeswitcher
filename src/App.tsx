import Header from "./components/header";
import { GlobalStyleComponent } from "styled-components";
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
