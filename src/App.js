import { Route, Routes } from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
