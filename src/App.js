import './App.css';
import { Routes,Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';


// 홈페이지   /
// 영화 전체 보여주는 페이지 (검색)   /movies/
// 영화 디테일 페이지   /movies:id
function App() {
  return (
    <Routes>
      <Route path ="/" element={<AppLayout/>}>
        {/* index -> path="/" */}
        <Route index element={<Homepage/>}/>
      </Route>
      {/* nestedRoute */}
      <Route path ="/movies">
        <Route index element={<MoviePage/>}/>
        <Route path =":id" element={<MovieDetailPage/>}/>
      </Route>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
