import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer dark:bg-gray-950 bg-stone-50 dark:border-white/7 border-black/8">
      <p className="footer__text dark:text-gray-500 text-gray-400">
        © {new Date().getFullYear()} Jiten M &middot; MEAN Stack Developer
      </p>
    </footer>
  );
}
