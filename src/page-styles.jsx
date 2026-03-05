const date = new Date();
const fullDate = date.toLocaleDateString(undefined, {
  year: "numeric",
  month: "numeric",
  day: "numeric"
});

export function Header() {
    return (
        <section>
            <text>Hello from Header()</text>
        </section>
    )
}

export function Footer() {
    return (
        <footer style={styles.footer}>
            <text> Mick Olthoff  {fullDate} </text>
            <a
                href="https://github.com/molthoff-student"
                target="_blank"
                rel="noopener noreferrer"
            >
            GitHub
            </a>
        </footer>
    )
}

const styles = {
    footer: {
        position:"fixed" 
    }
}