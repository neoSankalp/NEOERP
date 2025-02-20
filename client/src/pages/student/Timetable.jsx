import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Timetable() {
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
      "9:00 AM - 10:00 AM": { subject: "Java Programming", room: "Lab 1" },
      "10:00 AM - 11:00 AM": {
        subject: "Software Engineering",
        room: "Room 202",
      },
      "11:00 AM - 12:00 PM": { subject: "Digital Marketing", room: "Room 105" },
    },
    Tuesday: {
      "10:00 AM - 11:00 AM": {
        subject: "Artificial Intelligence",
        room: "Lab 2",
      },
      "2:00 PM - 3:00 PM": { subject: "Java Programming", room: "Room 201" },
    },
    // Add more days and schedules
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Class Timetable</h2>
        <Select defaultValue="current">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current">Current Semester</SelectItem>
            <SelectItem value="previous">Previous Semester</SelectItem>
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
                    className="rounded-lg p-2 text-sm"
                  >
                    {schedule[day]?.[slot] ? (
                      <div className="rounded-lg bg-blue-100 p-2">
                        <div className="font-medium">
                          {schedule[day][slot].subject}
                        </div>
                        <div className="text-xs text-gray-500">
                          {schedule[day][slot].room}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
