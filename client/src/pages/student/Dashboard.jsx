import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Dashboard() {
  const subjects = [
    {
      title: "Java programming - BCA 202",
      teacher: "Ms. Alka",
      credits: 4,
      type: "Theory, Lab",
      color: "bg-purple-200",
    },
    {
      title: "Software Engineering - BCA 204",
      teacher: "Ms. Sonam Barak",
      credits: 4,
      type: "Theory, Lab",
      color: "bg-yellow-200",
    },
    {
      title: "Digital Marketing - BCA 222",
      teacher: "Ms. Naina",
      credits: 4,
      type: "Theory",
      color: "bg-blue-200",
    },
    {
      title: "Introduction to Artificial Intelligence - BCAT 214",
      teacher: "Dr. Krishna",
      credits: 4,
      type: "Theory, Lab",
      color: "bg-green-200",
    },
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

  return (
    <div className="space-y-6 p-6">
      {/* Welcome Section */}
      <h2 className="text-2xl font-bold">👋 Welcome, Dhruv!</h2>

      {/* Get Involved Section */}
      <Card>
        <CardContent className="flex flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">
              Get Involved – Join a Club Today!
            </h3>
            <p className="text-muted-foreground">
              Explore your interests and meet like-minded students by joining
              one of our many clubs. Whether you're into sports, arts, or
              academics, there's a club for you. Find your community!
            </p>
            <Button className="mt-2">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <img
            src="https://img.freepik.com/free-vector/platonic-love-concept-illustration_114360-5207.jpg?t=st=1740076808~exp=1740080408~hmac=e59c295af0cfe04b2fb36db88865295fe77fa5d85a4d5362975fe6693f4d37ca&w=826"
            alt="Club activities illustration"
            className="h-full w-64 object-contain"
          />
        </CardContent>
      </Card>

      {/* Subjects Grid */}
      <h3 className="text-lg font-semibold">Subjects</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {subjects.map((subject) => (
          <Card key={subject.title} className={`${subject.color} border`}>
            <CardHeader>
              <CardTitle className="text-base">{subject.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{subject.teacher}</p>
              <p>Credits: {subject.credits}</p>
              <p>{subject.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Attendance & Recents Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Attendance */}
        <div>
          <h3 className="text-lg font-semibold">Attendance</h3>
          <div className="border rounded-lg p-4">
            <div className="grid grid-cols-2 gap-y-2 text-sm md:text-base">
              <p className="font-semibold">Student Name:</p>
              <p>Dhruv Pal</p>

              <p className="font-semibold">Date:</p>
              <p>1 Jan, 2024</p>

              <p className="font-semibold">Time:</p>
              <p>14 Feb, 2024</p>

              <p className="font-semibold">Classes Attended:</p>
              <p>45</p>

              <p className="font-semibold">Total Classes:</p>
              <p>57</p>

              <p className="font-semibold">Attendance Percentage:</p>
              <p className="text-green-500 font-bold">78%</p>
            </div>
          </div>
        </div>

        {/* Recent Exams */}
        <div>
          <h3 className="text-lg font-semibold">Recents</h3>
          <div className="grid gap-4">
            {recents.map((exam) => (
              <Card
                key={exam.title}
                className={`relative border-l-8 ${exam.color} p-4 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]`}
              >
                <div className="absolute top-2 right-2 h-2 w-2 bg-gray-400 rounded-full"></div>
                <CardTitle className="text-sm font-semibold mb-2">
                  {exam.title}
                </CardTitle>
                <p className="text-xs text-gray-600">
                  📅 <span className="font-medium">Date:</span> {exam.date}
                </p>
                <p className="text-xs text-gray-600">
                  📝 <span className="font-medium">Last Registration:</span>{" "}
                  {exam.regDate}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
