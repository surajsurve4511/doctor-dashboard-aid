import { Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OT() {
  const surgeries = [
    {
      id: 1,
      patient: "Michael Brown",
      procedure: "Appendectomy",
      date: "2025-01-15",
      time: "09:00 AM",
      duration: "2 hours",
      surgeon: "Dr. Sarah Williams",
      status: "Scheduled"
    },
    {
      id: 2,
      patient: "Emily Davis",
      procedure: "Knee Replacement",
      date: "2025-01-15",
      time: "11:30 AM",
      duration: "3 hours",
      surgeon: "Dr. Michael Chen",
      status: "In Progress"
    },
    {
      id: 3,
      patient: "John Smith",
      procedure: "Cardiac Surgery",
      date: "2025-01-15",
      time: "03:00 PM",
      duration: "4 hours",
      surgeon: "Dr. Emily Roberts",
      status: "Scheduled"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Scheduled":
        return "default";
      case "In Progress":
        return "secondary";
      case "Completed":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Operation Theater</h1>
          <p className="text-muted-foreground mt-1">Schedule and track surgical procedures</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Surgery
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Today's Procedures</p>
              <p className="text-4xl font-bold text-primary">5</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-4xl font-bold text-warning">1</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-4xl font-bold text-success">2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {surgeries.map((surgery) => (
              <div
                key={surgery.id}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg">{surgery.procedure}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Patient: {surgery.patient}</p>
                  </div>
                  <Badge variant={getStatusColor(surgery.status)}>
                    {surgery.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{surgery.time}</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration: {surgery.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Surgeon: {surgery.surgeon}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
