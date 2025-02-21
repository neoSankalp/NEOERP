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

export default function AdminExams() {
  const upcomingExams = [
    {
      id: 1,
      subject: "Java Programming",
      code: "BCA 202",
      date: "2024-03-15",
      time: "10:00 AM",
      duration: "3 hours",
      students: 45,
      room: "Exam Hall 1",
      type: "Mid Term",
    },
    {
      id: 2,
      subject: "Software Engineering",
      code: "BCA 204",
      date: "2024-03-18",
      time: "2:00 PM",
      duration: "3 hours",
      students: 50,
      room: "Exam Hall 2",
      type: "Mid Term",
    },
  ];

  const examResults = [
    {
      subject: "Digital Marketing",
      code: "BCA 222",
      totalStudents: 48,
      passed: 45,
      failed: 3,
      highestScore: 92,
      averageScore: 78,
    },
    {
      subject: "Artificial Intelligence",
      code: "BCAT 214",
      totalStudents: 52,
      passed: 48,
      failed: 4,
      highestScore: 95,
      averageScore: 76,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Examination Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Schedule Exam</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Examination</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="java">Java Programming</SelectItem>
                    <SelectItem value="se">Software Engineering</SelectItem>
                    <SelectItem value="dm">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Exam Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mid">Mid Term</SelectItem>
                    <SelectItem value="final">Final</SelectItem>
                    <SelectItem value="internal">Internal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Date</Label>
                <Input type="date" />
              </div>
              <div className="grid gap-2">
                <Label>Time</Label>
                <Input type="time" />
              </div>
              <div className="grid gap-2">
                <Label>Duration (hours)</Label>
                <Input type="number" min="1" max="4" />
              </div>
              <div className="grid gap-2">
                <Label>Exam Hall</Label>
                <Input placeholder="Enter exam hall" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Schedule</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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
                <TableHead>Students</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingExams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{exam.subject}</div>
                      <div className="text-sm text-gray-500">{exam.code}</div>
                    </div>
                  </TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>{exam.time}</TableCell>
                  <TableCell>{exam.duration}</TableCell>
                  <TableCell>{exam.students}</TableCell>
                  <TableCell>{exam.room}</TableCell>
                  <TableCell>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-800">
                      {exam.type}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Examination Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Total Students</TableHead>
                <TableHead>Passed</TableHead>
                <TableHead>Failed</TableHead>
                <TableHead>Highest Score</TableHead>
                <TableHead>Average Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examResults.map((result) => (
                <TableRow key={result.code}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{result.subject}</div>
                      <div className="text-sm text-gray-500">{result.code}</div>
                    </div>
                  </TableCell>
                  <TableCell>{result.totalStudents}</TableCell>
                  <TableCell className="text-green-600">
                    {result.passed}
                  </TableCell>
                  <TableCell className="text-red-600">
                    {result.failed}
                  </TableCell>
                  <TableCell>{result.highestScore}</TableCell>
                  <TableCell>{result.averageScore}</TableCell>
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
    </div>
  );
}
