import { Link } from "react-router-dom";
import { Header, pageStyles } from "../page-styles";

const blogPages = import.meta.glob('../blog-pages/*.md', { query: '?raw', eager: true });

export function BlogList() {
  
  const blogs = Object.entries(blogPages).map(([path, file]) => {
    const filename = path.split('/').pop().replace('.md', '');
    return { filename, content: file.default };
  });

  return (
    <div style={pageStyles.default}>
        <Header />
        
        <ul>
            {blogs.map(blog => (
            <li key={blog.filename}>
                <Link to={`/blog-pages/${blog.filename}`}>{blog.filename}</Link>
            </li>
            ))}
        </ul>
        
    </div>
  );
}

export { blogPages };