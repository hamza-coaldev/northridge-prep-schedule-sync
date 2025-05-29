
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MobilePreview = () => {
  const teams = [
    { name: "Varsity Basketball", members: 12, nextGame: "Today 6:00 PM", color: "bg-blue-500" },
    { name: "JV Soccer", members: 16, nextGame: "Tomorrow 4:00 PM", color: "bg-green-500" },
    { name: "Swimming", members: 8, nextGame: "Friday 3:30 PM", color: "bg-red-500" },
    { name: "Track & Field", members: 24, nextGame: "Saturday 9:00 AM", color: "bg-purple-500" },
  ];

  const facilities = [
    { name: "Main Gymnasium", available: true, nextBooking: "Basketball Practice - 3:30 PM" },
    { name: "Soccer Field A", available: false, nextBooking: "Currently: JV Soccer Practice" },
    { name: "Swimming Pool", available: true, nextBooking: "Open until 5:00 PM" },
    { name: "Track", available: true, nextBooking: "Track Practice - 4:00 PM" },
  ];

  const calendarEvents = [
    { time: "3:00 PM", event: "Varsity Basketball", type: "practice", color: "bg-blue-100 border-blue-300" },
    { time: "3:30 PM", event: "JV Soccer vs Riverside", type: "game", color: "bg-green-100 border-green-300" },
    { time: "4:00 PM", event: "Swimming Practice", type: "practice", color: "bg-red-100 border-red-300" },
    { time: "5:00 PM", event: "Track & Field", type: "practice", color: "bg-purple-100 border-purple-300" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Mobile App Interface</h2>
        <p className="text-lg text-slate-600">Responsive design for coaches, parents, and administrators on the go</p>
      </div>

      {/* Mobile App Mockup */}
      <div className="max-w-sm mx-auto">
        <div className="bg-slate-800 rounded-3xl p-2">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Status Bar */}
            <div className="bg-slate-50 px-4 py-2 flex justify-between items-center text-xs">
              <span className="font-medium">9:41 AM</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-slate-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-slate-300 rounded-sm"></div>
              </div>
            </div>

            {/* Header */}
            <div className="bg-blue-900 text-white p-4">
              <h1 className="text-lg font-bold">Northridge Prep</h1>
              <p className="text-blue-100 text-sm">Scheduling System</p>
            </div>

            {/* Tab Navigation */}
            <div className="bg-white border-b flex">
              {[
                { name: "Teams", icon: Users, active: true },
                { name: "Facilities", icon: MapPin, active: false },
                { name: "Calendar", icon: Calendar, active: false }
              ].map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={index}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium ${
                      tab.active 
                        ? 'text-blue-900 border-b-2 border-blue-900 bg-blue-50' 
                        : 'text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Teams Content */}
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {teams.map((team, index) => (
                <Card key={index} className="border shadow-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${team.color}`}></div>
                      <div className="flex-1">
                        <h3 className="font-medium text-sm text-slate-800">{team.name}</h3>
                        <p className="text-xs text-slate-500">{team.members} members</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          Next
                        </Badge>
                        <p className="text-xs text-slate-600 mt-1">{team.nextGame}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Views Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        {/* Facilities Tab Preview */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-900" />
              Facilities View
            </h3>
            <div className="space-y-3">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-800">{facility.name}</h4>
                    <p className="text-sm text-slate-600">{facility.nextBooking}</p>
                  </div>
                  <Badge variant={facility.available ? "default" : "destructive"}>
                    {facility.available ? "Available" : "In Use"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Master Calendar Tab Preview */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-900" />
              Master Calendar View
            </h3>
            <div className="space-y-2">
              {calendarEvents.map((event, index) => (
                <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg border-l-4 ${event.color}`}>
                  <div className="text-sm font-medium text-slate-600 w-16">{event.time}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-slate-800">{event.event}</h4>
                    <Badge variant="outline" className="text-xs mt-1">
                      {event.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobilePreview;
