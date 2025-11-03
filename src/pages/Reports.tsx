import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  const reports = [
    {
      id: 1,
      patient: "John Smith",
      diagnosis: "Hypertension",
      inDate: "2025-01-10 09:00",
      outDate: "2025-01-10 14:00",
      status: "Completed"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      diagnosis: "Post-Surgical Recovery",
      inDate: "2025-01-08 10:00",
      outDate: null,
      status: "In Progress"
    },
    {
      id: 3,
      patient: "Michael Brown",
      diagnosis: "Type 2 Diabetes Management",
      inDate: "2025-01-05 08:30",
      outDate: "2025-01-05 15:00",
      status: "Completed"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Patient Reports</h1>
        <p className="text-muted-foreground mt-1">View and manage patient diagnostic reports</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Total Reports</p>
              <p className="text-4xl font-bold text-primary">156</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">This Week</p>
              <p className="text-4xl font-bold text-success">24</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-4xl font-bold text-warning">8</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{report.patient}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Diagnosis: {report.diagnosis}
                      </p>
                    </div>
                  </div>
                  <Badge variant={report.status === "Completed" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Admission</p>
                    <p className="text-sm font-medium mt-1">
                      {new Date(report.inDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Discharge</p>
                    <p className="text-sm font-medium mt-1">
                      {report.outDate
                        ? new Date(report.outDate).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : 'In progress'}
                    </p>
                  </div>
                </div>
                {report.status === "Completed" && (
                  <div className="mt-3 pt-3 border-t">
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
