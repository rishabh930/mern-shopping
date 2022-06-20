import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from './screen/Homescreen';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <a href="#">shoopingapp</a>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
