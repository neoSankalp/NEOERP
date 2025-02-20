import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Download, PlayCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Courses() {
  const courses = [
    {
      id: 1,
      name: "Java Programming",
      code: "BCA 202",
      progress: 65,
      instructor: "Ms. Alka",
      materials: [
        { name: "Java Basics PDF", type: "pdf", size: "2.3 MB" },
        { name: "OOP Concepts", type: "pdf", size: "1.8 MB" },
        { name: "Practice Problems", type: "doc", size: "1.2 MB" },
      ],
      lectures: [
        { title: "Introduction to Java", duration: "1h 20m" },
        { title: "Variables and Data Types", duration: "1h 45m" },
        { title: "Control Structures", duration: "1h 30m" },
      ],
    },
    {
      id: 2,
      name: "Software Engineering",
      code: "BCA 204",
      progress: 78,
      instructor: "Ms. Sonam Barak",
      materials: [
        { name: "SDLC Overview", type: "pdf", size: "3.1 MB" },
        { name: "Agile Methodology", type: "pdf", size: "2.5 MB" },
        { name: "Case Studies", type: "doc", size: "1.5 MB" },
      ],
      lectures: [
        { title: "Software Process Models", duration: "1h 15m" },
        { title: "Requirements Engineering", duration: "1h 30m" },
        { title: "Software Design", duration: "2h 00m" },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Courses</h2>

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
                  <TabsTrigger value="lectures">Recorded Lectures</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} />
                  </div>
                  <div className="text-sm">
                    <p>
                      <strong>Instructor:</strong> {course.instructor}
                    </p>
                    <p>
                      <strong>Total Lectures:</strong> {course.lectures.length}
                    </p>
                    <p>
                      <strong>Study Materials:</strong>{" "}
                      {course.materials.length} files
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="materials">
                  <div className="space-y-4">
                    {course.materials.map((material, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div>
                          <h4 className="font-medium">{material.name}</h4>
                          <p className="text-sm text-gray-500">
                            {material.size}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="lectures">
                  <div className="space-y-4">
                    {course.lectures.map((lecture, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div>
                          <h4 className="font-medium">{lecture.title}</h4>
                          <p className="text-sm text-gray-500">
                            Duration: {lecture.duration}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          <PlayCircle className="mr-2 h-4 w-4" />
                          Watch
                        </Button>
                      </div>
                    ))}
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
