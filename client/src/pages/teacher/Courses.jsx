import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload } from "lucide-react";

export default function TeacherCourses() {
  const courses = [
    {
      id: 1,
      name: "Java Programming",
      code: "BCA 202",
      students: 45,
      materials: [
        { name: "Java Basics PDF", uploadDate: "2024-02-15" },
        { name: "OOP Concepts", uploadDate: "2024-02-20" },
      ],
      assignments: [
        {
          title: "Assignment 1",
          dueDate: "2024-03-15",
          submissions: 32,
        },
        {
          title: "Assignment 2",
          dueDate: "2024-03-20",
          submissions: 28,
        },
      ],
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "BCA 204",
      students: 50,
      materials: [
        { name: "SDLC Overview", uploadDate: "2024-02-10" },
        { name: "Agile Methodology", uploadDate: "2024-02-25" },
      ],
      assignments: [
        {
          title: "Project Proposal",
          dueDate: "2024-03-18",
          submissions: 45,
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Course Management</h2>
        <Button>Add New Course</Button>
      </div>

      <div className="grid gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>
                {course.name} ({course.code})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="materials">Study Materials</TabsTrigger>
                  <TabsTrigger value="assignments">Assignments</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Enrolled Students
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {course.students}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Study Materials
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {course.materials.length}
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">
                            Active Assignments
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">
                            {course.assignments.length}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="materials">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Input type="file" />
                      <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Material
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {course.materials.map((material, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div>
                            <h4 className="font-medium">{material.name}</h4>
                            <p className="text-sm text-gray-500">
                              Uploaded on: {material.uploadDate}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="assignments">
                  <div className="space-y-4">
                    <Button>Create New Assignment</Button>
                    <div className="space-y-4">
                      {course.assignments.map((assignment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border p-4"
                        >
                          <div>
                            <h4 className="font-medium">{assignment.title}</h4>
                            <p className="text-sm text-gray-500">
                              Due Date: {assignment.dueDate}
                            </p>
                            <p className="text-sm text-gray-500">
                              Submissions: {assignment.submissions}
                            </p>
                          </div>
                          <div className="space-x-2">
                            <Button variant="outline" size="sm">
                              View Submissions
                            </Button>
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
