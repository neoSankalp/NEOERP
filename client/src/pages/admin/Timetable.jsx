"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AdminTimetable() {
  const [selectedDepartment, setSelectedDepartment] = useState("bca");
  const [selectedSemester, setSelectedSemester] = useState("2");

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
        teacher: "Ms. Alka",
        room: "Lab 1",
      },
      "10:00 AM - 11:00 AM": {
        subject: "Software Engineering",
        teacher: "Ms. Sonam",
        room: "Room 202",
      },
    },
    Tuesday: {
      "11:00 AM - 12:00 PM": {
        subject: "Digital Marketing",
        teacher: "Ms. Naina",
        room: "Room 105",
      },
      "2:00 PM - 3:00 PM": {
        subject: "AI Basics",
        teacher: "Dr. Krishna",
        room: "Lab 2",
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Timetable Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Class</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Class</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Day</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map((day) => (
                      <SelectItem key={day} value={day.toLowerCase()}>
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Time Slot</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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
                <Label>Teacher</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alka">Ms. Alka</SelectItem>
                    <SelectItem value="sonam">Ms. Sonam</SelectItem>
                    <SelectItem value="naina">Ms. Naina</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Room</Label>
                <Input placeholder="Enter room number" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Save Class</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Select
              value={selectedDepartment}
              onValueChange={setSelectedDepartment}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bca">BCA</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedSemester}
              onValueChange={setSelectedSemester}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Semester 1</SelectItem>
                <SelectItem value="2">Semester 2</SelectItem>
                <SelectItem value="3">Semester 3</SelectItem>
                <SelectItem value="4">Semester 4</SelectItem>
              </SelectContent>
            </Select>
          </div>
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
                          {schedule[day][slot].teacher}
                        </div>
                        <div className="text-xs text-gray-500">
                          {schedule[day][slot].room}
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full h-full border-dashed"
                      >
                        Add Class
                      </Button>
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
