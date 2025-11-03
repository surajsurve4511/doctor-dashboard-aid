import { Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function History() {
  const medicalHistory = [
    {
      patient: "John Smith",
      date: "2025-01-10",
      disease: "Hypertension",
      treatment: "Prescribed blood pressure medication",
      doctor: "Dr. Sarah Williams"
    },
    {
      patient: "Sarah Johnson",
      date: "2025-01-08",
      disease: "Post-Surgical Recovery",
      treatment: "Follow-up care and physiotherapy",
      doctor: "Dr. Michael Chen"
    },
    {
      patient: "Michael Brown",
      date: "2025-01-05",
      disease: "Type 2 Diabetes",
      treatment: "Insulin therapy adjustment",
      doctor: "Dr. Emily Roberts"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Medical History</h1>
        <p className="text-muted-foreground mt-1">View patient medical records and treatment history</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search patient records..."
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {medicalHistory.map((record, i) => (
              <div
                key={i}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold">{record.patient}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {new Date(record.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  <Badge>{record.doctor}</Badge>
                </div>
                <div className="space-y-2 mt-3 pt-3 border-t">
                  <div>
                    <span className="text-sm font-medium text-foreground">Diagnosis: </span>
                    <span className="text-sm text-muted-foreground">{record.disease}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Treatment: </span>
                    <span className="text-sm text-muted-foreground">{record.treatment}</span>
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
