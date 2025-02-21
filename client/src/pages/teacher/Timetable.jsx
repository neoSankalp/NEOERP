import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function TeacherTimetable() {
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const schedule = {
    Monday: {
      "9:00 AM - 10:00 AM": {
        subject: "Java Programming",
        class: "BCA 2nd Year",
        room: "Lab 1",
      },
      "10:00 AM - 11:00 AM": {
        subject: "Software Engineering",
        class: "BCA 2nd Year",
        room: "Room 202",
      },
    },
    Tuesday: {
      "11:00 AM - 12:00 PM": {
        subject: "Digital Marketing",
        class: "BCA 3rd Year",
        room: "Room 105",
      },
      "2:00 PM - 3:00 PM": {
        subject: "Java Programming",
        class: "BCA 2nd Year",
        room: "Lab 2",
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Class Schedule</h2>
        <Select defaultValue="current">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Semester</SelectItem>
            <SelectItem value="next">Next Semester</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-6 gap-4">
            <div></div>
            {days.map((day) => (
              <div key={day} className="font-semibold text-center">
                {day}
              </div>
            ))}

            {timeSlots.map((slot) => (
              <>
                <div key={slot} className="text-sm text-gray-500">
                  {slot}
                </div>
                {days.map((day) => (
                  <div
                    key={`${day}-${slot}`}
                    className="rounded-lg p-2 text-sm min-h-[100px]"
                  >
                    {schedule[day]?.[slot] ? (
                      <div className="rounded-lg bg-blue-100 p-2 h-full">
                        <div className="font-medium">
                          {schedule[day][slot].subject}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {schedule[day][slot].class}
                        </div>
                        <div className="text-xs text-gray-500">
                          {schedule[day][slot].room}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 w-full"
                        >
                          View Details
                        </Button>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-400 border-2 border-dashed rounded-lg">
                        No Class
                      </div>
                    )}
                  </div>
                ))}
              </>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(schedule.Monday).map(([time, details]) => (
                <div
                  key={time}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <div className="font-medium">{details.subject}</div>
                    <div className="text-sm text-gray-500">{time}</div>
                    <div className="text-sm text-gray-500">{details.class}</div>
                    <div className="text-sm text-gray-500">
                      Room: {details.room}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Start Class
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                Request Schedule Change
              </Button>
              <Button className="w-full" variant="outline">
                Report Conflict
              </Button>
              <Button className="w-full" variant="outline">
                View Student List
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
