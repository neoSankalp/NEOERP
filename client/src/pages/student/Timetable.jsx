import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      "12:00 PM - 1:00 PM": { subject: "Mathematics", room: "Room 301" },
      "2:00 PM - 3:00 PM": { subject: "Machine Learning", room: "Lab 3" },
      //   "3:00 PM - 4:00 PM": { subject: "Physics", room: "Room 102" },
    },
    Tuesday: {
      "9:00 AM - 10:00 AM": { subject: "Data Structures", room: "Room 204" },
      "10:00 AM - 11:00 AM": {
        subject: "Artificial Intelligence",
        room: "Lab 2",
      },
      "11:00 AM - 12:00 PM": { subject: "Cloud Computing", room: "Room 305" },
      //   "12:00 PM - 1:00 PM": { subject: "Cyber Security", room: "Room 206" },
      "2:00 PM - 3:00 PM": { subject: "Java Programming", room: "Room 201" },
      "3:00 PM - 4:00 PM": { subject: "Software Testing", room: "Lab 4" },
    },
    Wednesday: {
      "9:00 AM - 10:00 AM": { subject: "Operating Systems", room: "Room 101" },
      "10:00 AM - 11:00 AM": {
        subject: "Software Engineering",
        room: "Room 202",
      },
      "11:00 AM - 12:00 PM": { subject: "Digital Logic", room: "Lab 5" },
      "12:00 PM - 1:00 PM": { subject: "Mathematics", room: "Room 301" },
      "2:00 PM - 3:00 PM": { subject: "Database Management", room: "Room 203" },
      "3:00 PM - 4:00 PM": { subject: "Machine Learning", room: "Lab 3" },
    },
    Thursday: {
      //   "9:00 AM - 10:00 AM": { subject: "Computer Networks", room: "Room 401" },
      "10:00 AM - 11:00 AM": { subject: "Cloud Computing", room: "Room 305" },
      "11:00 AM - 12:00 PM": { subject: "Data Science", room: "Lab 6" },
      "12:00 PM - 1:00 PM": { subject: "Cyber Security", room: "Room 206" },
      "2:00 PM - 3:00 PM": { subject: "Data Structures", room: "Room 204" },
      "3:00 PM - 4:00 PM": { subject: "Software Testing", room: "Lab 4" },
    },
    Friday: {
      "9:00 AM - 10:00 AM": { subject: "Web Development", room: "Room 501" },
      "10:00 AM - 11:00 AM": { subject: "Computer Graphics", room: "Lab 7" },
      "11:00 AM - 12:00 PM": {
        subject: "Artificial Intelligence",
        room: "Room 207",
      },
      "12:00 PM - 1:00 PM": { subject: "Physics", room: "Room 102" },
      "2:00 PM - 3:00 PM": { subject: "Machine Learning", room: "Lab 3" },
      "3:00 PM - 4:00 PM": { subject: "Operating Systems", room: "Room 101" },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h2 className="text-2xl font-bold">Class Timetable</h2>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-[120px_repeat(6,1fr)] gap-2">
            {/* Time Slots Header */}
            <div className="font-bold text-center bg-gray-100 p-2 rounded h-16 flex items-center justify-center">
              Days
            </div>
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className="font-medium text-center bg-gray-100 p-2 rounded h-16 flex items-center justify-center"
              >
                {slot}
              </div>
            ))}

            {/* Schedule Rows */}
            {days.map((day, index) => (
              <>
                {/* Day Label (Left Column) */}
                <div
                  key={day}
                  className={`font-semibold text-center p-2 rounded h-24 flex items-center justify-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                  }`}
                >
                  {day}
                </div>

                {/* Time Slots for Each Day */}
                {timeSlots.map((slot) => (
                  <div
                    key={`${day}-${slot}`}
                    className="p-2 h-24 flex items-center justify-center"
                  >
                    {schedule[day]?.[slot] ? (
                      <div className="rounded-lg bg-blue-100 p-2 shadow w-full h-full flex flex-col items-center justify-center">
                        <div className="text-sm font-medium text-center">
                          {schedule[day][slot].subject}
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          {schedule[day][slot].room}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full w-full"></div> // Empty cell with same height
                    )}
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
