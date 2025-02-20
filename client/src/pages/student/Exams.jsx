import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Exams() {
  const upcomingExams = [
    {
      subject: "Java Programming",
      code: "BCA 202",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "3 hours",
      room: "Exam Hall 1",
      type: "Mid Term",
    },
    {
      subject: "Software Engineering",
      code: "BCA 204",
      date: "2024-03-18",
      time: "2:00 PM",
      duration: "3 hours",
      room: "Exam Hall 2",
      type: "Mid Term",
    },
  ];

  const results = [
    {
      subject: "Digital Marketing",
      code: "BCA 222",
      type: "Internal",
      maxMarks: 50,
      obtained: 42,
      grade: "A",
    },
    {
      subject: "Artificial Intelligence",
      code: "BCAT 214",
      type: "Assignment",
      maxMarks: 30,
      obtained: 25,
      grade: "A",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Examination Portal</h2>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Examinations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingExams.map((exam) => (
                <TableRow key={exam.code}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{exam.subject}</div>
                      <div className="text-sm text-gray-500">{exam.code}</div>
                    </div>
                  </TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>{exam.time}</TableCell>
                  <TableCell>{exam.duration}</TableCell>
                  <TableCell>{exam.room}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{exam.type}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Max Marks</TableHead>
                <TableHead>Marks Obtained</TableHead>
                <TableHead>Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.code}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{result.subject}</div>
                      <div className="text-sm text-gray-500">{result.code}</div>
                    </div>
                  </TableCell>
                  <TableCell>{result.type}</TableCell>
                  <TableCell>{result.maxMarks}</TableCell>
                  <TableCell>{result.obtained}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-100">
                      {result.grade}
                    </Badge>
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
