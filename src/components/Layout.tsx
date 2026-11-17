import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Grid, Folder, Mail, Leaf } from "lucide-react";
import { cn } from "../utils";

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { name: "홈", path: "/", icon: Home },
    { name: "서비스", path: "/services", icon: Grid },
    { name: "포트폴리오", path: "/portfolio", icon: Folder },
    { name: "문의", path: "/inquiry", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
          >
            <Leaf className="w-6 h-6 text-green-600" /> GREEN-IT
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/portfolio"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/inquiry"
              className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              문의하기
            </Link>
          </nav>
          {/* Mobile top nav right side */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/portfolio" className="text-sm font-medium">
              Portfolio
            </Link>
            <Link
              to="/inquiry"
              className="text-sm font-medium bg-blue-600 text-white px-3 py-1.5 rounded-lg"
            >
              문의하기
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Footer (Desktop) */}
      <footer className="hidden md:block bg-gray-100 py-12 mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight mb-4">
            <Leaf className="w-6 h-6 text-green-600" /> GREEN-IT
          </div>
          <p className="text-sm text-gray-500 mb-2">
            GREEN-IT Outsourcing Agency
            <br />
            Software Outsourcings Inc.
          </p>
          <p className="text-sm text-gray-500">고객센터: contact@example.com</p>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-12 pt-8 border-t border-gray-200 text-sm text-gray-400">
          © 2025 GREEN-IT Agency. All rights reserved.
        </div>
      </footer>

      {/* Bottom Navbar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50 pb-safe">
        {navItems.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full space-y-1",
                isActive
                  ? "text-blue-600"
                  : "text-gray-400 hover:text-gray-600",
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
