import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/pages/DefaultLayout/DefaultLayout';
import CountryDetails from './components/pages/CountryDetails/CountryDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<DefaultLayout />} />
                    <Route path="/CountryDetails" element={<CountryDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
