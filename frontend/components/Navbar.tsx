import { navLinks } from "@/lib/content";

export function Navbar() {
  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <a href="#top" className="brand">
          <span>Vk Technicals</span>
        </a>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
