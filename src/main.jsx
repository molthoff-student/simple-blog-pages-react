import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { BlogList } from "./pages/blog-pages.jsx";
import './page-styles.css';
import { RenderBlog } from "./pages/blog-render.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Routes>
           <Route path='/' element ={<BlogList />} />
           <Route path='/blog-pages' element ={<BlogList />} />
           <Route path="/blog-pages/:slug" element={<RenderBlog />} />
       </Routes>
    </BrowserRouter>
)
