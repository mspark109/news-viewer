import {
  Route,
  Routes,
  HashRouter,
} from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
