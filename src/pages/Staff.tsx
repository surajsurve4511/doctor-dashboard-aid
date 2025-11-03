import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Staff() {
  const staff = [
    { id: 1, name: "Dr. Sarah Williams", role: "Surgeon", shift: "Morning", status: "On Duty" },
    { id: 2, name: "Dr. Michael Chen", role: "Cardiologist", shift: "Evening", status: "On Duty" },
    { id: 3, name: "Dr. Emily Roberts", role: "General Physician", shift: "Morning", status: "On Duty" },
    { id: 4, name: "Nurse Lisa Anderson", role: "ICU Nurse", shift: "Night", status: "Off Duty" },
    { id: 5, name: "Nurse James Taylor", role: "Ward Nurse", shift: "Morning", status: "On Duty" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Staff Management</h1>
          <p className="text-muted-foreground mt-1">Manage hospital staff and their schedules</p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Staff
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Total Staff</p>
              <p className="text-4xl font-bold text-primary">48</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">On Duty</p>
              <p className="text-4xl font-bold text-success">32</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Off Duty</p>
              <p className="text-4xl font-bold text-muted-foreground">16</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Staff Directory</CardTitle>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search staff..."
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {staff.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.role} • {member.shift} Shift
                  </p>
                </div>
                <Badge variant={member.status === "On Duty" ? "default" : "secondary"}>
                  {member.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
