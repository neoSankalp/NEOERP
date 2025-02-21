import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./components/Provider/auth-provider";
import { ErrorBoundary } from "./components/error-boundary";
import StudentLayout from "./layouts/StudentLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import AdminLayout from "./layouts/AdminLayout";
import StudentDashboard from "./pages/student/Dashboard";
import StudentAttendance from "./pages/student/Attendance";
import StudentTimetable from "./pages/student/Timetable";
import StudentPlanner from "./pages/student/Planner";
import StudentExams from "./pages/student/Exams";
import StudentCourses from "./pages/student/Courses";
import StudentFees from "./pages/student/Fees";
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherTimetable from "./pages/teacher/Timetable";
import TeacherExams from "./pages/teacher/Exams";
import TeacherCourses from "./pages/teacher/Courses";
import TeacherPlanner from "./pages/teacher/Planner";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminAttendance from "./pages/admin/Attendance";
import AdminTimetable from "./pages/admin/Timetable";
import AdminExams from "./pages/admin/Exams";
import AdminCourses from "./pages/admin/Courses";
import AdminFees from "./pages/admin/Fees";
import Login from "./pages/Login";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            {/* Student Routes */}
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="attendance" element={<StudentAttendance />} />
              <Route path="timetable" element={<StudentTimetable />} />
              <Route path="planner" element={<StudentPlanner />} />
              <Route path="exams" element={<StudentExams />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route path="fees" element={<StudentFees />} />
            </Route>

            {/* Teacher Routes */}
            <Route path="/teacher" element={<TeacherLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<TeacherDashboard />} />
              <Route path="attendance" element={<TeacherAttendance />} />
              <Route path="timetable" element={<TeacherTimetable />} />
              <Route path="exams" element={<TeacherExams />} />
              <Route path="courses" element={<TeacherCourses />} />
              <Route path="planner" element={<TeacherPlanner />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="attendance" element={<AdminAttendance />} />
              <Route path="timetable" element={<AdminTimetable />} />
              <Route path="exams" element={<AdminExams />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="fees" element={<AdminFees />} />
            </Route>

            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
