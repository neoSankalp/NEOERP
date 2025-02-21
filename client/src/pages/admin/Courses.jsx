import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminCourses() {
  const courses = [
    {
      id: 1,
      name: "Java Programming",
      code: "BCA 202",
      department: "BCA",
      semester: "2nd",
      credits: 4,
      students: 45,
      teacher: "Ms. Alka",
      status: "Active",
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "BCA 204",
      department: "BCA",
      semester: "2nd",
      credits: 4,
      students: 50,
      teacher: "Ms. Sonam Barak",
      status: "Active",
    },
  ];

  const departments = [
    {
      name: "BCA",
      totalCourses: 24,
      activeCourses: 8,
      students: 150,
      teachers: 12,
    },
    {
      name: "Computer Science",
      totalCourses: 32,
      activeCourses: 12,
      students: 180,
      teachers: 15,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Course</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Course</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Course Name</Label>
                <Input />
              </div>
              <div className="grid gap-2">
                <Label>Course Code</Label>
                <Input />
              </div>
              <div className="grid gap-2">
                <Label>Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bca">BCA</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Semester</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st Semester</SelectItem>
                    <SelectItem value="2">2nd Semester</SelectItem>
                    <SelectItem value="3">3rd Semester</SelectItem>
                    <SelectItem value="4">4th Semester</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Credits</Label>
                <Input type="number" min="1" max="6" />
              </div>
              <div className="grid gap-2">
                <Label>Assigned Teacher</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alka">Ms. Alka</SelectItem>
                    <SelectItem value="sonam">Ms. Sonam Barak</SelectItem>
                    <SelectItem value="naina">Ms. Naina</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Create Course</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="courses">
        <TabsList>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="courses">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Courses</CardTitle>
                <div className="flex items-center gap-2">
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
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Semesters</SelectItem>
                      <SelectItem value="1">1st Semester</SelectItem>
                      <SelectItem value="2">2nd Semester</SelectItem>
                      <SelectItem value="3">3rd Semester</SelectItem>
                      <SelectItem value="4">4th Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Semester</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{course.name}</div>
                          <div className="text-sm text-gray-500">
                            {course.code}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{course.department}</TableCell>
                      <TableCell>{course.semester}</TableCell>
                      <TableCell>{course.credits}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>{course.teacher}</TableCell>
                      <TableCell>
                        <span
                          className={`rounded-full px-2 py-1 text-xs font-semibold ${
                            course.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {course.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Department Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead>Total Courses</TableHead>
                    <TableHead>Active Courses</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Teachers</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departments.map((dept) => (
                    <TableRow key={dept.name}>
                      <TableCell className="font-medium">{dept.name}</TableCell>
                      <TableCell>{dept.totalCourses}</TableCell>
                      <TableCell>{dept.activeCourses}</TableCell>
                      <TableCell>{dept.students}</TableCell>
                      <TableCell>{dept.teachers}</TableCell>
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
