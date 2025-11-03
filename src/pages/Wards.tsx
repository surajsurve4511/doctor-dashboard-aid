import { Bed, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Wards() {
  const wards = [
    { id: 1, type: "General Ward", total: 60, occupied: 45, available: 15 },
    { id: 2, type: "ICU", total: 12, occupied: 8, available: 4 },
    { id: 3, type: "Special Rooms", total: 25, occupied: 18, available: 7 },
  ];

  const recentAdmissions = [
    { patient: "John Smith", ward: "General Ward", bed: "B-12", time: "2 hours ago" },
    { patient: "Emily Davis", ward: "ICU", bed: "ICU-3", time: "4 hours ago" },
    { patient: "David Wilson", ward: "Special Room", bed: "SR-5", time: "6 hours ago" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Wards & Rooms</h1>
        <p className="text-muted-foreground mt-1">Monitor bed availability and patient admissions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {wards.map((ward) => (
          <Card key={ward.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" />
                {ward.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Beds</span>
                  <span className="text-2xl font-bold">{ward.total}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Occupancy</span>
                    <span className="font-medium">{ward.occupied}/{ward.total}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all" 
                      style={{ width: `${(ward.occupied / ward.total) * 100}%` }} 
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Available</span>
                  <Badge variant={ward.available > 5 ? "default" : "destructive"}>
                    {ward.available} beds
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Admissions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAdmissions.map((admission, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div>
                  <h3 className="font-semibold">{admission.patient}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {admission.ward} • Bed {admission.bed}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">{admission.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
