import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Blog from './components/Blog.jsx'
import Header from './components/Header.jsx';
import Nosotros from './components/Nosotros.jsx';
import Inicio from './components/Inicio.jsx'
import Post from './components/Post.jsx';
import Error404 from './components/Error404.jsx';

function App() {
  return (
    <Router>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/blog" component={Blog}/>
            <Route path="/acerca-de" component={Nosotros} />
            <Route path="/post/:id" component={Post}/>
            <Route component={Error404} />
          </Switch>
        </Main>
      </ContenedorPrincipal>
    </Router>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;
