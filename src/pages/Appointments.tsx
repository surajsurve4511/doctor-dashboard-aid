import { Plus, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      patient: "John Smith",
      doctor: "Dr. Sarah Williams",
      date: "2025-01-15",
      time: "10:30 AM",
      issue: "Regular Checkup",
      status: "Scheduled"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      doctor: "Dr. Michael Chen",
      date: "2025-01-15",
      time: "11:15 AM",
      issue: "Post-Surgery Follow-up",
      status: "Scheduled"
    },
    {
      id: 3,
      patient: "Michael Brown",
      doctor: "Dr. Emily Roberts",
      date: "2025-01-15",
      time: "02:00 PM",
      issue: "Consultation",
      status: "Completed"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Appointments</h1>
          <p className="text-muted-foreground mt-1">Schedule and manage patient appointments</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          New Appointment
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-start justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center justify-center bg-primary text-primary-foreground rounded-lg px-3 py-2 min-w-[70px]">
                      <span className="text-lg font-bold">{apt.time.split(':')[0]}</span>
                      <span className="text-xs">{apt.time.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{apt.patient}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{apt.doctor}</p>
                      <p className="text-sm text-muted-foreground">{apt.issue}</p>
                    </div>
                  </div>
                  <Badge variant={apt.status === "Scheduled" ? "default" : "secondary"}>
                    {apt.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">Total Today</span>
              <span className="text-2xl font-bold">18</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">Completed</span>
              <span className="text-2xl font-bold text-success">12</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <span className="text-sm text-muted-foreground">Pending</span>
              <span className="text-2xl font-bold text-warning">6</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
