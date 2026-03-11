import site_information from './site-information.json';
import { Link } from "react-router-dom";

const developer = site_information.website_people.developer;

export function Header() {
    return (
        <header style={pageStyles.header}>
            <Link  to='/blog-pages/' style={pageStyles.discreteLink}>
                Blog pages
            </Link>
            {/* <Link to={developer.socials.github} style={{
                textDecoration: 'none',
                color: 'inherit',
                maxWidth: '50%',           // prevent overflow
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }}>
                Github
            </Link> */}
            <Link to={developer.socials.github} style={pageStyles.discreteLink}>
                Github
            </Link>
        </header>
    )
}

export function PageNotFound() {
    return (
        <div style={pageStyles.default}>
            <p>Page doesn't exist.</p>
        </div>
    );
}

const pageStyles = {

    header: {
        left: 0,
        top: 0,
        position: 'sticky',
        display: 'flex',
        height: 'fit-content',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px',
        backgroundColor: '#14151A',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        minHeight: '60px'
    },

    default: {
        backgroundColor: '#1E2129',
        color: '#FFFFFF',
    },

    discreteLink: {
        textDecoration: 'none', 
        color: 'inherit'             
    }

}

export { pageStyles };