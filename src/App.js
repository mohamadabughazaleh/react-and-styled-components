import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import GlobalStyles from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";
import Content from "./components/Content";
import Footer from "./components/Footer";
const theme={
  colors:{
  header:'#ebfbff',
  body:'#fff',
  footer:'#003333'
  },
  mobile:'768px',
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Header />
    <Container>
      {Content.map((item ,index)=>(
        < Card key={index} item={item} />
      ))}
    </Container>
    <Footer />
    </>
    </ThemeProvider>
     );
}

export default App;
