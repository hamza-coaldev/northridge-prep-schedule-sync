
import { AlertTriangle, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ConflictDetection = () => {
  const conflicts = [
    {
      id: 1,
      type: "Facility Overlap",
      severity: "high",
      details: {
        facility: "Main Gymnasium",
        time: "3:30 PM - 5:30 PM",
        events: [
          { name: "Varsity Basketball Practice", team: "Basketball", coach: "Coach Johnson" },
          { name: "Volleyball Team Meeting", team: "Volleyball", coach: "Coach Smith" }
        ]
      }
    },
    {
      id: 2,
      type: "Coach Double-Booking",
      severity: "medium",
      details: {
        coach: "Coach Williams",
        time: "4:00 PM - 6:00 PM",
        events: [
          { name: "JV Soccer Practice", facility: "Field A", team: "JV Soccer" },
          { name: "Parent Meeting", facility: "Conference Room", team: "Varsity Soccer" }
        ]
      }
    },
    {
      id: 3,
      type: "Equipment Conflict",
      severity: "low",
      details: {
        equipment: "Weight Room",
        time: "3:00 PM - 4:30 PM",
        events: [
          { name: "Football Strength Training", team: "Football", coach: "Coach Davis" },
          { name: "Track Conditioning", team: "Track & Field", coach: "Coach Martinez" }
        ]
      }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 border-red-300 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'low': return 'bg-orange-100 border-orange-300 text-orange-800';
      default: return 'bg-slate-100 border-slate-300 text-slate-800';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'default';
      case 'low': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Conflict Detection System</h2>
        <p className="text-lg text-slate-600">Automatically identify and resolve scheduling conflicts before they impact your programs</p>
      </div>

      {/* Conflict Alert Overview */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <CardTitle className="flex items-center text-red-800">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Active Conflicts Detected
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-600">3</div>
              <div className="text-sm text-slate-600">Total Conflicts</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-red-600">1</div>
              <div className="text-sm text-slate-600">High Priority</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-yellow-600">2</div>
              <div className="text-sm text-slate-600">Needs Review</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conflict Details */}
      <div className="space-y-6">
        {conflicts.map((conflict) => (
          <Card key={conflict.id} className={`border-l-4 ${getSeverityColor(conflict.severity)}`}>
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center text-slate-800">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  {conflict.type}
                </CardTitle>
                <Badge variant={getSeverityBadge(conflict.severity)}>
                  {conflict.severity.toUpperCase()} PRIORITY
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Time and Location Info */}
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {conflict.details.time}
                </div>
                {conflict.details.facility && (
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {conflict.details.facility}
                  </div>
                )}
                {conflict.details.coach && (
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {conflict.details.coach}
                  </div>
                )}
              </div>

              {/* Conflicting Events */}
              <div className="space-y-3">
                <h4 className="font-medium text-slate-800">Conflicting Events:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {conflict.details.events.map((event, index) => (
                    <div key={index} className="bg-slate-50 p-4 rounded-lg border">
                      <h5 className="font-medium text-slate-800">{event.name}</h5>
                      <div className="text-sm text-slate-600 space-y-1 mt-2">
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {event.team}
                        </div>
                        {event.coach && (
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {event.coach}
                          </div>
                        )}
                        {event.facility && (
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {event.facility}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4">
                <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                  Resolve Conflict
                </Button>
                <Button size="sm" variant="outline">
                  Suggest Alternatives
                </Button>
                <Button size="sm" variant="ghost">
                  Mark as Reviewed
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resolution Suggestions */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Smart Resolution Suggestions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800">Facility Overlap Solution</h4>
              <p className="text-sm text-green-700 mt-1">
                Move Volleyball Team Meeting to Conference Room B (available 3:30-5:30 PM)
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-800">Coach Schedule Optimization</h4>
              <p className="text-sm text-green-700 mt-1">
                Reschedule Parent Meeting to 6:30 PM or delegate to Assistant Coach
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConflictDetection;
