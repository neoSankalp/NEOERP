import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TeacherDashboard() {
  const stats = [
    {
      title: "Total Classes",
      value: "24",
    },
    {
      title: "Total Students",
      value: "156",
    },
    {
      title: "Average Attendance",
      value: "82%",
    },
    {
      title: "Pending Assignments",
      value: "12",
    },
  ];

  const upcomingClasses = [
    {
      subject: "Java Programming",
      class: "BCA 2nd Year",
      time: "10:00 AM",
      room: "Lab 1",
    },
    {
      subject: "Software Engineering",
      class: "BCA 2nd Year",
      time: "11:00 AM",
      room: "Room 202",
    },
    {
      subject: "Digital Marketing",
      class: "BCA 3rd Year",
      time: "2:00 PM",
      room: "Room 105",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Welcome, Professor!</h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Room</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingClasses.map((class_) => (
                  <TableRow key={`${class_.subject}-${class_.time}`}>
                    <TableCell className="font-medium">
                      {class_.subject}
                    </TableCell>
                    <TableCell>{class_.class}</TableCell>
                    <TableCell>{class_.time}</TableCell>
                    <TableCell>{class_.room}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
