
// import Footer from "../Footer";

import Header from "@/app/Components/HomePage/Header";
import Sidebar from "@/app/Components/HomePage/Sidebar";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Support", href: "#" },
];

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Right side: header, main content (scrollable), footer */}
      <div className="flex-1 bg-white text-black flex flex-col overflow-hidden">
        {/* <Header
          userName="Samuel"
          message="Ready to master your next session?"
        /> */}

        {/* Scrollable content area */}
        <main className="flex-1 bg-white  text-black overflow-y-auto  space-y-12">
          {children}
        </main>

        {/* <Footer title="Cricket Masterclass" links={footerLinks} /> */}
      </div>
    </div>
  );
}
