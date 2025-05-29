
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const PublicCalendar = () => {
  const events = [
    {
      date: "March 15",
      day: "Friday",
      events: [
        {
          time: "3:30 PM",
          title: "Varsity Basketball vs. Central High",
          type: "game",
          location: "Main Gymnasium",
          team: "Basketball",
          color: "bg-blue-100 border-blue-300"
        },
        {
          time: "6:00 PM",
          title: "JV Soccer Practice",
          type: "practice",
          location: "Soccer Field A",
          team: "Soccer",
          color: "bg-green-100 border-green-300"
        }
      ]
    },
    {
      date: "March 16",
      day: "Saturday",
      events: [
        {
          time: "9:00 AM",
          title: "Track & Field Meet",
          type: "meet",
          location: "Track Stadium",
          team: "Track & Field",
          color: "bg-purple-100 border-purple-300"
        },
        {
          time: "11:00 AM",
          title: "Swimming Championships",
          type: "championship",
          location: "Aquatic Center",
          team: "Swimming",
          color: "bg-red-100 border-red-300"
        },
        {
          time: "2:00 PM",
          title: "Volleyball vs. East Side",
          type: "game",
          location: "Main Gymnasium",
          team: "Volleyball",
          color: "bg-yellow-100 border-yellow-300"
        }
      ]
    },
    {
      date: "March 18",
      day: "Monday",
      events: [
        {
          time: "4:00 PM",
          title: "Football Team Meeting",
          type: "meeting",
          location: "Conference Room",
          team: "Football",
          color: "bg-slate-100 border-slate-300"
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'game': return 'bg-blue-600';
      case 'practice': return 'bg-green-600';
      case 'meet': return 'bg-purple-600';
      case 'championship': return 'bg-red-600';
      case 'meeting': return 'bg-slate-600';
      default: return 'bg-slate-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Public Calendar View</h2>
        <p className="text-lg text-slate-600">Read-only calendar access for parents and community members</p>
      </div>

      {/* Header with search and filters */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-blue-900" />
              Northridge Preparatory Athletics Schedule
            </div>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Public Access
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input 
                  placeholder="Search events, teams, or locations..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Sport
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                This Week
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Event Types Legend */}
      <Card className="shadow-md">
        <CardContent className="p-4">
          <h3 className="font-medium text-slate-800 mb-3">Event Types</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { type: 'game', label: 'Games' },
              { type: 'practice', label: 'Practices' },
              { type: 'meet', label: 'Meets' },
              { type: 'championship', label: 'Championships' },
              { type: 'meeting', label: 'Meetings' }
            ].map((item) => (
              <div key={item.type} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getEventTypeColor(item.type)}`}></div>
                <span className="text-sm text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar Events */}
      <div className="space-y-6">
        {events.map((day, dayIndex) => (
          <Card key={dayIndex} className="shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <div className="mr-4">
                  <div className="text-2xl font-bold text-slate-800">{day.date.split(' ')[1]}</div>
                  <div className="text-sm text-slate-600">{day.day}</div>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-800">{day.date}</div>
                  <div className="text-sm text-slate-600">{day.events.length} events scheduled</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className={`p-4 rounded-lg border-l-4 ${event.color}`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={`${getEventTypeColor(event.type)} text-white`}>
                            {event.type.toUpperCase()}
                          </Badge>
                          <span className="font-semibold text-slate-800">{event.title}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {event.team}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <Button size="sm" variant="outline" className="text-blue-900 border-blue-200 hover:bg-blue-50">
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer Notice */}
      <Card className="bg-slate-50 border-slate-200">
        <CardContent className="p-6 text-center">
          <div className="text-sm text-slate-600">
            <p className="mb-2">
              <strong>Notice:</strong> This is a read-only view of scheduled events.
            </p>
            <p>
              For schedule changes or questions, please contact the Athletic Department at 
              <span className="font-medium text-blue-900"> athletics@northridgeprep.edu</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublicCalendar;
