
import { useState } from 'react';
import { Calendar, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MasterCalendar = () => {
  const [currentView, setCurrentView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filters, setFilters] = useState({
    team: 'all',
    facility: 'all',
    calendarType: 'all'
  });

  const events = [
    { id: 1, title: "Basketball Practice", time: "3:30 PM", facility: "Main Gym", type: "sports", color: "bg-red-100 text-red-800" },
    { id: 2, title: "Chess Club", time: "4:15 PM", facility: "Library", type: "academic", color: "bg-blue-100 text-blue-800" },
    { id: 3, title: "Drama Rehearsal", time: "6:30 PM", facility: "Auditorium", type: "arts", color: "bg-purple-100 text-purple-800" },
    { id: 4, title: "Parent Meeting", time: "5:00 PM", facility: "Conference Room", type: "meeting", color: "bg-green-100 text-green-800" }
  ];

  const timeSlots = [
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"
  ];

  const facilities = ["All Facilities", "Main Gym", "Library", "Auditorium", "Conference Room", "Field A", "Lab 1"];
  const teams = ["All Teams", "Basketball", "Chess Club", "Drama", "Soccer", "Track & Field"];
  const calendarTypes = ["All Types", "Sports", "Academic", "Arts", "Meetings"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800">Master Calendar</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search events, teams, facilities..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Team</label>
              <select
                value={filters.team}
                onChange={(e) => setFilters(prev => ({ ...prev, team: e.target.value }))}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {teams.map(team => (
                  <option key={team} value={team.toLowerCase().replace(' ', '')}>{team}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Facility</label>
              <select
                value={filters.facility}
                onChange={(e) => setFilters(prev => ({ ...prev, facility: e.target.value }))}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {facilities.map(facility => (
                  <option key={facility} value={facility.toLowerCase().replace(' ', '')}>{facility}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Calendar Type</label>
              <select
                value={filters.calendarType}
                onChange={(e) => setFilters(prev => ({ ...prev, calendarType: e.target.value }))}
                className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {calendarTypes.map(type => (
                  <option key={type} value={type.toLowerCase().replace(' ', '')}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* View Toggle and Navigation */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant={currentView === 'day' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentView('day')}
          >
            Day
          </Button>
          <Button
            variant={currentView === 'week' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentView('week')}
          >
            Week
          </Button>
          <Button
            variant={currentView === 'month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentView('month')}
          >
            Month
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="font-medium text-slate-800">March 15-21, 2024</span>
          <Button variant="ghost" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Week View
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-1">
            {/* Header */}
            <div className="p-2 text-sm font-medium text-slate-600">Time</div>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="p-2 text-sm font-medium text-slate-600 text-center">
                {day}
              </div>
            ))}

            {/* Time slots */}
            {timeSlots.map(time => (
              <div key={time} className="contents">
                <div className="p-2 text-sm text-slate-600 border-r">{time}</div>
                {Array.from({ length: 7 }, (_, dayIndex) => (
                  <div key={dayIndex} className="min-h-[60px] border border-slate-200 p-1">
                    {/* Sample events for demo */}
                    {time === "3:30 PM" && dayIndex === 1 && (
                      <div className="bg-red-100 text-red-800 p-1 rounded text-xs">
                        Basketball Practice
                      </div>
                    )}
                    {time === "4:15 PM" && dayIndex === 2 && (
                      <div className="bg-blue-100 text-blue-800 p-1 rounded text-xs">
                        Chess Club
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-red-100 rounded mr-2"></div>
              <span className="text-sm text-slate-600">Sports</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-100 rounded mr-2"></div>
              <span className="text-sm text-slate-600">Academic</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-100 rounded mr-2"></div>
              <span className="text-sm text-slate-600">Arts</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
              <span className="text-sm text-slate-600">Meetings</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MasterCalendar;
