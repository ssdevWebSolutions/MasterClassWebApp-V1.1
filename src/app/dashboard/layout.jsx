import Sidebar from "../Components/HomePage/Sidebar";
import Footer from "../Components/HomePage/Footer";
import Header from "../Components/HomePage/Header";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "#" },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Right side: header, main content (scrollable), footer */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          userName="Samuel"
          message="Ready to master your next session?"
        />

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-12">
          {children}
        </main>

        {/* <Footer title="Cricket Masterclass" links={footerLinks} /> */}
      </div>
    </div>
  );
}
