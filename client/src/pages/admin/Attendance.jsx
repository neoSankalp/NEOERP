import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

export default function AdminAttendance() {
  const attendanceStats = [
    {
      department: "BCA",
      totalStudents: 150,
      averageAttendance: "85%",
      lowAttendance: 12,
    },
    {
      department: "Computer Science",
      totalStudents: 180,
      averageAttendance: "82%",
      lowAttendance: 15,
    },
  ];

  const studentAttendance = [
    {
      id: 1,
      name: "John Doe",
      rollNo: "BCA2023001",
      department: "BCA",
      attendance: "78%",
      status: "Warning",
    },
    {
      id: 2,
      name: "Jane Smith",
      rollNo: "BCA2023002",
      department: "BCA",
      attendance: "92%",
      status: "Good",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Attendance Management</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">330</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Average Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83.5%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Low Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">27</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">290</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department-wise Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Total Students</TableHead>
                <TableHead>Average Attendance</TableHead>
                <TableHead>Low Attendance Count</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attendanceStats.map((dept) => (
                <TableRow key={dept.department}>
                  <TableCell className="font-medium">
                    {dept.department}
                  </TableCell>
                  <TableCell>{dept.totalStudents}</TableCell>
                  <TableCell>{dept.averageAttendance}</TableCell>
                  <TableCell className="text-red-600">
                    {dept.lowAttendance}
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Students with Low Attendance</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Roll No</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Attendance</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentAttendance.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.rollNo}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.attendance}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        student.status === "Good"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {student.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Send Notice
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
