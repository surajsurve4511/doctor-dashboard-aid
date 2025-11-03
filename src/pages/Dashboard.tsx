import { Users, Calendar, Bed, Stethoscope } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to MediCare Hospital Management System</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Patients"
          value="324"
          icon={Users}
          trend={{ value: "+12% from last month", isPositive: true }}
        />
        <MetricCard
          title="Today's Appointments"
          value="18"
          icon={Calendar}
          trend={{ value: "3 pending", isPositive: false }}
        />
        <MetricCard
          title="Available Beds"
          value="42"
          icon={Bed}
          trend={{ value: "85% occupancy", isPositive: true }}
        />
        <MetricCard
          title="OT Scheduled"
          value="5"
          icon={Stethoscope}
          trend={{ value: "2 completed", isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Smith", age: 45, condition: "Regular Checkup", time: "10:30 AM" },
                { name: "Sarah Johnson", age: 32, condition: "Post-Surgery Follow-up", time: "11:15 AM" },
                { name: "Michael Brown", age: 58, condition: "Emergency", time: "12:00 PM" },
              ].map((patient, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-muted-foreground">Age: {patient.age} • {patient.condition}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{patient.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ward Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">General Ward</span>
                <span className="font-medium">45/60</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">ICU</span>
                <span className="font-medium">8/12</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '67%' }} />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Special Rooms</span>
                <span className="font-medium">18/25</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-warning h-2 rounded-full" style={{ width: '72%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
