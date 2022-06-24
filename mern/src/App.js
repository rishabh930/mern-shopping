import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './screen/Homescreen';
import Productscreen from './screen/Productscreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>shoopingapp</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<Productscreen />} />
              <Route path="/" element={<Homescreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">all right res.</div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
