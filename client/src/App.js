
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Home from './pages/home';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
function App(){
  return(
  <Routes>
    <Route path="/" element={<Layout/>}> 
    <Route index element={<IndexPage/>}/>

    <Route path={'/login'}element={<LoginPage/>
    }/>
     <Route path={'/register'}element={<Register/>
    }/>
    
    <Route path={'/home'}element={<Home/>
    }/>

    <Route path={'/create'}element={<CreatePost/>
    }/>
    <Route path={'/post/:id'}element={<PostPage/>
    }/>

   </Route>
  </Routes>
  
  );
}
export default App;