import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homescreen from './screen/Homescreen';
import Productscreen from './screen/Productscreen';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">shoopingapp</Link>
        </header>

        <main>
          <Routes>
            <Route path="/product/:slug" element={<Productscreen />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
