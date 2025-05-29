
import { Calendar, MapPin, Users, Clock, Menu, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useState } from 'react';

const HeroSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const upcomingEvents = [
    { time: "3:30 PM", event: "Varsity Basketball", location: "Main Gym", type: "sports" },
    { time: "4:15 PM", event: "Chess Club", location: "Library", type: "academic" },
    { time: "5:00 PM", event: "Parent-Teacher Conference", location: "Room 204", type: "meeting" },
    { time: "6:30 PM", event: "Drama Rehearsal", location: "Auditorium", type: "arts" }
  ];

  const facilities = [
    { name: "Main Gymnasium", status: "Available", next: "Basketball practice at 3:30 PM" },
    { name: "Science Labs", status: "In Use", next: "Available at 2:45 PM" },
    { name: "Athletic Field", status: "Available", next: "Soccer practice at 4:00 PM" },
    { name: "Library", status: "Available", next: "Chess Club at 4:15 PM" },
    { name: "Auditorium", status: "In Use", next: "Available at 6:00 PM" },
    { name: "Conference Rooms", status: "Available", next: "Parent meetings at 5:00 PM" }
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case 'sports': return 'bg-red-100 text-red-800 border-red-200';
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'meeting': return 'bg-green-100 text-green-800 border-green-200';
      case 'arts': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-800">Northridge Preparatory</h1>
                <p className="text-xs text-slate-600">Scheduling System</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-700 hover:text-blue-900 font-medium">Calendar</a>
              <a href="#" className="text-slate-700 hover:text-blue-900 font-medium">Facilities</a>
              <a href="#" className="text-slate-700 hover:text-blue-900 font-medium">Support</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="hidden md:inline-flex border-slate-300">
                Log In
              </Button>
              <Button size="sm" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Built for Northridge.
              <span className="block text-blue-900">Made for our community.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Simplifying coordination for our faculty, coaches, parents, and students. 
              Check schedules, book facilities, and stay connected with everything happening at Northridge Prep.
            </p>
          </div>

          {/* Calendar and Facilities Tabs */}
          <div className="relative max-w-6xl mx-auto">
            <Tabs defaultValue="calendar" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="calendar" className="flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>Calendar</span>
                </TabsTrigger>
                <TabsTrigger value="facilities" className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Facilities</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calendar">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Calendar Component */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                        <CalendarDays className="w-5 h-5 mr-2 text-blue-900" />
                        School Calendar
                      </h3>
                      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          className="rounded-md border-0"
                        />
                      </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                          <Clock className="w-5 h-5 mr-2 text-blue-900" />
                          Today's Schedule
                        </h3>
                        <span className="text-sm text-slate-600">March 15, 2024</span>
                      </div>
                      <div className="space-y-2">
                        {upcomingEvents.map((event, index) => (
                          <div key={index} className={`p-3 rounded-lg border ${getEventColor(event.type)}`}>
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium">{event.event}</p>
                                <p className="text-sm opacity-75 flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {event.location}
                                </p>
                              </div>
                              <span className="text-sm font-medium">{event.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="facilities">
                <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-slate-800 flex items-center justify-center">
                      <MapPin className="w-5 h-5 mr-2 text-blue-900" />
                      Facility Status Overview
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {facilities.map((facility, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-medium text-slate-800">{facility.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              facility.status === 'Available' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {facility.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-600">{facility.next}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">For Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                Designed specifically for Northridge faculty, coaches, parents, and students. 
                Every feature built with our school's unique needs in mind.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-red-700 to-red-600 flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Simple Coordination</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                No more confusion about gym availability or schedule conflicts. 
                Everything you need to coordinate school activities in one place.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-600 to-green-500 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Real-Time Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-slate-600 leading-relaxed">
                Stay informed with live facility status and schedule changes. 
                Plan better with accurate, up-to-date information.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
