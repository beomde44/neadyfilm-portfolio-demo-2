export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {currentYear} NEADY FILM.</p>
      <a href="#top">맨 위로</a>
    </footer>
  );
}
