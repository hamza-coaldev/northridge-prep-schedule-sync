
import { Calendar, Users, MapPin, Settings, Plus, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CreateEventDialog from './CreateEventDialog';

const Dashboard = () => {
  const upcomingEvents = {
    parents: [
      { time: "10:00 AM", event: "Parent-Teacher Conference", location: "Room 204" },
      { time: "2:00 PM", event: "School Board Meeting", location: "Main Office" },
    ],
    facility: [
      { time: "3:30 PM", event: "Basketball Practice", location: "Main Gym" },
      { time: "4:15 PM", event: "Volleyball Training", location: "Gym 2" },
      { time: "5:00 PM", event: "Drama Rehearsal", location: "Auditorium" },
    ],
    staff: [
      { time: "8:00 AM", event: "Faculty Meeting", location: "Conference Room" },
      { time: "12:00 PM", event: "Department Head Meeting", location: "Principal's Office" },
      { time: "3:00 PM", event: "Coach Training Session", location: "Main Gym" },
    ]
  };

  const stats = [
    { label: "Today's Events", value: "12", icon: Calendar, color: "text-blue-600" },
    { label: "Active Facilities", value: "8", icon: MapPin, color: "text-green-600" },
    { label: "Registered Users", value: "234", icon: Users, color: "text-purple-600" },
    { label: "This Week's Events", value: "47", icon: TrendingUp, color: "text-orange-600" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Northridge Prep Dashboard</h1>
          <p className="text-slate-600 mt-2">Welcome back! Here's what's happening today.</p>
        </div>
        <div className="flex items-center space-x-3">
          <CreateEventDialog />
          <Button variant="outline">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Calendar Preview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Parents Calendar */}
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-slate-800">Parents Calendar</span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {upcomingEvents.parents.length} today
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.parents.map((event, index) => (
              <div key={index} className="flex justify-between items-start p-3 bg-green-50 rounded-lg border border-green-100">
                <div>
                  <p className="font-medium text-slate-800">{event.event}</p>
                  <p className="text-sm text-slate-600 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {event.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-green-700">{event.time}</span>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3 border-green-200 text-green-700 hover:bg-green-50">
              View Full Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Facility Calendar */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-slate-800">Facility Calendar</span>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {upcomingEvents.facility.length} today
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.facility.map((event, index) => (
              <div key={index} className="flex justify-between items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
                <div>
                  <p className="font-medium text-slate-800">{event.event}</p>
                  <p className="text-sm text-slate-600 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {event.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-blue-700">{event.time}</span>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3 border-blue-200 text-blue-700 hover:bg-blue-50">
              View Full Calendar
            </Button>
          </CardContent>
        </Card>

        {/* Staff & Student Calendar */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                <span className="text-slate-800">Staff & Student Calendar</span>
              </div>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                {upcomingEvents.staff.length} today
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.staff.map((event, index) => (
              <div key={index} className="flex justify-between items-start p-3 bg-purple-50 rounded-lg border border-purple-100">
                <div>
                  <p className="font-medium text-slate-800">{event.event}</p>
                  <p className="text-sm text-slate-600 flex items-center mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {event.location}
                  </p>
                </div>
                <span className="text-sm font-medium text-purple-700">{event.time}</span>
              </div>
            ))}
            <Button variant="outline" size="sm" className="w-full mt-3 border-purple-200 text-purple-700 hover:bg-purple-50">
              View Full Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
              <Calendar className="w-5 h-5 mb-1" />
              <span className="text-sm">Master Calendar</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
              <Plus className="w-5 h-5 mb-1" />
              <span className="text-sm">Create Event</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
              <Users className="w-5 h-5 mb-1" />
              <span className="text-sm">Permissions</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
              <Settings className="w-5 h-5 mb-1" />
              <span className="text-sm">Settings</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
