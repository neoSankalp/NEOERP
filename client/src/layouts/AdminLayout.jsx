import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Bell,
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  ScrollText,
  Timer,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Attendance", href: "/admin/attendance", icon: ScrollText },
  { name: "Timetable", href: "/admin/timetable", icon: Timer },
  { name: "Exams", href: "/admin/exams", icon: GraduationCap },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Fees", href: "/admin/fees", icon: Wallet },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden w-64 bg-[#0B1829] text-white lg:block">
          <div className="flex h-16 items-center border-b border-gray-700 px-6">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <span className="text-xl">U TIPS</span>
            </Link>
          </div>
          <nav className="space-y-1 px-3 py-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/login"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Admin Portal
            </h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <main className="flex-1 overflow-auto bg-gray-100 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
