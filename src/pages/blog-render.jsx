import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import { blogPages } from './blog-pages';
import { Header, PageNotFound } from '../page-styles';

export function RenderBlog() {

    const { slug } = useParams();
    const path = `../blog-pages/${slug}.md`;
    const file = blogPages[path];

    if (!file) return <PageNotFound />;

    return (
        <>
            <Header />
            <div style={blogStyle.wrapper}>
                <article style={blogStyle.content}>
                    <Markdown rehypePlugins={[rehypeRaw]}>
                        {file.default}
                    </Markdown>
                </article>
            </div>
        </>
    );
}

const blogStyle = {

    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        margin: 0
    },

    content: {
        maxWidth: '700px',
        padding: '2rem',
        borderRadius: '8px'
    }
};