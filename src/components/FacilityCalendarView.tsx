
import { useState } from 'react';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FacilityCalendarView = () => {
  const [selectedDate] = useState(new Date());

  const facilities = [
    'Main Gym', 'Gym 2', 'Auditorium', 'Library', 'Conference Room A', 
    'Conference Room B', 'Field A', 'Field B', 'Lab 1', 'Lab 2'
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const bookings = {
    'Main Gym': {
      '3:00 PM': { event: 'Basketball Practice', attendees: 20, type: 'Sports' },
      '5:00 PM': { event: 'Coach Training', attendees: 12, type: 'Training' }
    },
    'Gym 2': {
      '4:00 PM': { event: 'Volleyball Training', attendees: 15, type: 'Sports' }
    },
    'Auditorium': {
      '5:00 PM': { event: 'Drama Rehearsal', attendees: 35, type: 'Arts' },
      '7:00 PM': { event: 'PTA Meeting', attendees: 150, type: 'Meeting' }
    },
    'Library': {
      '3:00 PM': { event: 'Chess Club', attendees: 12, type: 'Academic' },
      '4:00 PM': { event: 'Study Group', attendees: 8, type: 'Academic' }
    },
    'Conference Room A': {
      '8:00 AM': { event: 'Faculty Meeting', attendees: 45, type: 'Meeting' },
      '1:00 PM': { event: 'Parent Conference', attendees: 4, type: 'Conference' }
    }
  };

  const getBookingForSlot = (facility: string, time: string) => {
    return bookings[facility]?.[time];
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Sports': 'bg-red-100 text-red-800 border-red-200',
      'Arts': 'bg-purple-100 text-purple-800 border-purple-200',
      'Academic': 'bg-blue-100 text-blue-800 border-blue-200',
      'Meeting': 'bg-green-100 text-green-800 border-green-200',
      'Training': 'bg-orange-100 text-orange-800 border-orange-200',
      'Conference': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[type] || 'bg-slate-100 text-slate-800 border-slate-200';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Facility Calendar</h1>
          <p className="text-slate-600 mt-2">Real-time availability across all facilities</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-600">Today</div>
          <div className="text-lg font-semibold text-slate-800">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Legend */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-slate-700">Event Types:</span>
            {['Sports', 'Arts', 'Academic', 'Meeting', 'Training', 'Conference'].map(type => (
              <div key={type} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded ${getTypeColor(type)} border`}></div>
                <span className="text-sm text-slate-600">{type}</span>
              </div>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <div className="w-3 h-3 bg-slate-50 border border-slate-200 rounded"></div>
              <span className="text-sm text-slate-600">Available</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Facility Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Facility Availability Grid
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-13 gap-1 min-w-[1000px]">
              {/* Header Row */}
              <div className="p-3 bg-slate-50 border-b font-medium text-slate-700 text-sm">
                Facility
              </div>
              {timeSlots.map(time => (
                <div key={time} className="p-3 bg-slate-50 border-b font-medium text-slate-700 text-sm text-center">
                  {time}
                </div>
              ))}

              {/* Facility Rows */}
              {facilities.map(facility => (
                <div key={facility} className="contents">
                  <div className="p-3 border-b font-medium text-slate-800 text-sm bg-slate-50">
                    {facility}
                  </div>
                  {timeSlots.map(time => {
                    const booking = getBookingForSlot(facility, time);
                    return (
                      <div 
                        key={`${facility}-${time}`} 
                        className="p-1 border border-slate-200 min-h-[80px] relative group hover:bg-slate-50 transition-colors"
                      >
                        {booking ? (
                          <div className={`w-full h-full rounded p-2 border ${getTypeColor(booking.type)} cursor-pointer relative`}>
                            <div className="text-xs font-medium mb-1 truncate">
                              {booking.event}
                            </div>
                            <div className="flex items-center text-xs opacity-75">
                              <Users className="w-3 h-3 mr-1" />
                              {booking.attendees}
                            </div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                              <div className="bg-slate-800 text-white text-xs rounded p-2 whitespace-nowrap">
                                <div className="font-medium">{booking.event}</div>
                                <div className="flex items-center mt-1">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {facility}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-3 h-3 mr-1" />
                                  {booking.attendees} attendees
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs cursor-pointer hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                            Available
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-slate-800">
              {facilities.length}
            </div>
            <div className="text-sm text-slate-600">Total Facilities</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {facilities.length - Object.keys(bookings).length}
            </div>
            <div className="text-sm text-slate-600">Available Now</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-600">
              {Object.keys(bookings).length}
            </div>
            <div className="text-sm text-slate-600">Currently Booked</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-600">
              {Object.values(bookings).reduce((total, facilityBookings) => 
                total + Object.keys(facilityBookings).length, 0
              )}
            </div>
            <div className="text-sm text-slate-600">Total Bookings Today</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacilityCalendarView;
