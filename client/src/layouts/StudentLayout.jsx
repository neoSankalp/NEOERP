import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Bell,
  BookOpen,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  ScrollText,
  Timer,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
  { name: "Time Table", href: "/student/timetable", icon: Timer },
  { name: "Attendance", href: "/student/attendance", icon: ScrollText },
  { name: "Academic Planner", href: "/student/planner", icon: Calendar },
  { name: "Exams Datesheet", href: "/student/exams", icon: GraduationCap },
  { name: "Course", href: "/student/courses", icon: BookOpen },
  { name: "Fee Payment", href: "/student/fees", icon: Wallet },
];

const recents = [
  {
    title: "DMAC 2025",
    date: "February 14, 2024",
    regDate: "February 10, 2024",
    color: "border-orange-400",
  },
  {
    title: "Advanced Web Design",
    date: "February 27, 2024",
    regDate: "February 16, 2024",
    color: "border-green-400",
  },
  {
    title: "User Experience Research",
    date: "February 23, 2024",
    regDate: "February 18, 2024",
    color: "border-purple-400",
  },
  {
    title: "Digital Photography",
    date: "February 20, 2024",
    regDate: "February 14, 2024",
    color: "border-gray-400",
  },
  {
    title: "3D Animation",
    date: "February 17, 2024",
    regDate: "February 10, 2024",
    color: "border-yellow-400",
  },
];

export default function StudentLayout() {
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="hidden w-64 bg-[#0B1829] text-white lg:block">
          <div className="flex h-24 items-center border-b border-gray-700 px-6">
            <Link to="/student/dashboard" className="flex flex-col">
              <h1 className="text-xl font-semibold">NeoSankalp-ERP</h1>
              <span className="text-lg">Tips Dwarka</span>
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
          <header className="relative flex h-16 items-center justify-between border-b bg-white px-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Student Portal
            </h1>
            <div className="flex items-center gap-4 relative">
              {/* Bell Icon for Notifications */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5" />
              </Button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                >
                  <div className="p-4 border-b text-gray-700 font-semibold">
                    Recent Notifications
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {recents.map((item, index) => (
                      <div
                        key={index}
                        className={`p-3 border-b last:border-0 ${item.color} flex flex-col`}
                      >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-sm text-gray-500">
                          📅 {item.date}
                        </span>
                        <span className="text-sm text-gray-500">
                          📝 Last Reg: {item.regDate}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* User Avatar */}
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>ST</AvatarFallback>
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
