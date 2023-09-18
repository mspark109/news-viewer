import {
  Route,
  Routes,
  BrowserRouter,
} from '../node_modules/react-router-dom/dist/index';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <BrowserRouter basename={process.env.basename}>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
