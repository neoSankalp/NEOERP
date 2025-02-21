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
import { Download, Upload } from "lucide-react";

export default function AdminFees() {
  const feeStructure = [
    {
      department: "BCA",
      semester: "2nd",
      tuitionFee: 45000,
      developmentFee: 15000,
      examFee: 5000,
      totalFee: 65000,
    },
    {
      department: "Computer Science",
      semester: "2nd",
      tuitionFee: 50000,
      developmentFee: 18000,
      examFee: 5000,
      totalFee: 73000,
    },
  ];

  const transactions = [
    {
      id: "TXN001",
      student: "John Doe",
      rollNo: "BCA2023001",
      amount: 25000,
      type: "Tuition Fee",
      date: "2024-01-15",
      status: "Paid",
    },
    {
      id: "TXN002",
      student: "Jane Smith",
      rollNo: "BCA2023002",
      amount: 20000,
      type: "Development Fee",
      date: "2024-02-01",
      status: "Paid",
    },
  ];

  const stats = {
    totalCollected: "₹12.5L",
    pendingAmount: "₹5.2L",
    totalStudents: 330,
    defaulters: 45,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Fee Management</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Update Fee Structure</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Fee Structure</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bca">BCA</SelectItem>
                      <SelectItem value="cs">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Semester</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Semester</SelectItem>
                      <SelectItem value="2">2nd Semester</SelectItem>
                      <SelectItem value="3">3rd Semester</SelectItem>
                      <SelectItem value="4">4th Semester</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Tuition Fee</Label>
                  <Input type="number" />
                </div>
                <div className="grid gap-2">
                  <Label>Development Fee</Label>
                  <Input type="number" />
                </div>
                <div className="grid gap-2">
                  <Label>Exam Fee</Label>
                  <Input type="number" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button>Update</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Collected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCollected}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Amount
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.pendingAmount}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Defaulters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {stats.defaulters}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Fee Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Department</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Tuition Fee</TableHead>
                <TableHead>Development Fee</TableHead>
                <TableHead>Exam Fee</TableHead>
                <TableHead>Total Fee</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeStructure.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.department}</TableCell>
                  <TableCell>{fee.semester}</TableCell>
                  <TableCell>₹{fee.tuitionFee}</TableCell>
                  <TableCell>₹{fee.developmentFee}</TableCell>
                  <TableCell>₹{fee.examFee}</TableCell>
                  <TableCell className="font-medium">₹{fee.totalFee}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Transactions</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="tuition">Tuition Fee</SelectItem>
                <SelectItem value="development">Development Fee</SelectItem>
                <SelectItem value="exam">Exam Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.id}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{transaction.student}</div>
                      <div className="text-sm text-gray-500">
                        {transaction.rollNo}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>₹{transaction.amount}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        transaction.status === "Paid"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View
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
