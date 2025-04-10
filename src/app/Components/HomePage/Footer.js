// File: components/Footer.js

export default function Footer({ title = "Cricket Masterclass", year = new Date().getFullYear(), links = [] }) {
    return (
      <footer className="mt-12 p-6 text-center bg-[#FFF5EF] text-gray-600 text-sm">
        <div className="mb-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="mx-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p>© {year} {title}. All rights reserved.</p>
      </footer>
    );
  }
  