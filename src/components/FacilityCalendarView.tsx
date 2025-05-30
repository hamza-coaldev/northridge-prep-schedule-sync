
import { useState } from 'react';
import { Clock, MapPin, Users, Calendar, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const FacilityCalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedFacilityType, setSelectedFacilityType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const facilities = [
    { name: 'Main Gym', type: 'gym' },
    { name: 'Gym 2', type: 'gym' },
    { name: 'Auditorium', type: 'performance' },
    { name: 'Library', type: 'academic' },
    { name: 'Conference Room A', type: 'meeting' },
    { name: 'Conference Room B', type: 'meeting' },
    { name: 'Field A', type: 'outdoor' },
    { name: 'Field B', type: 'outdoor' },
    { name: 'Lab 1', type: 'academic' },
    { name: 'Lab 2', type: 'academic' }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', 
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
  ];

  const facilityTypes = ['all', 'gym', 'performance', 'academic', 'meeting', 'outdoor'];
  const statusOptions = ['all', 'available', 'booked'];

  const bookings = {
    'Main Gym': {
      '3:00 PM': { event: 'Basketball Practice', attendees: 20, type: 'Sports', instructor: 'Coach Johnson' },
      '5:00 PM': { event: 'Coach Training', attendees: 12, type: 'Training', instructor: 'Director Smith' },
      '7:00 PM': { event: 'Evening Games', attendees: 25, type: 'Sports', instructor: 'Coach Williams' }
    },
    'Gym 2': {
      '4:00 PM': { event: 'Volleyball Training', attendees: 15, type: 'Sports', instructor: 'Coach Davis' },
      '6:00 PM': { event: 'Fitness Class', attendees: 18, type: 'Fitness', instructor: 'Trainer Lee' }
    },
    'Auditorium': {
      '2:00 PM': { event: 'Drama Rehearsal', attendees: 35, type: 'Arts', instructor: 'Ms. Thompson' },
      '7:00 PM': { event: 'PTA Meeting', attendees: 150, type: 'Meeting', instructor: 'Principal Brown' }
    },
    'Library': {
      '3:00 PM': { event: 'Chess Club', attendees: 12, type: 'Academic', instructor: 'Mr. Wilson' },
      '4:00 PM': { event: 'Study Group', attendees: 8, type: 'Academic', instructor: 'Tutor Martinez' }
    },
    'Conference Room A': {
      '8:00 AM': { event: 'Faculty Meeting', attendees: 45, type: 'Meeting', instructor: 'Principal Brown' },
      '1:00 PM': { event: 'Parent Conference', attendees: 4, type: 'Conference', instructor: 'Mrs. Garcia' }
    }
  };

  const getBookingForSlot = (facility: string, time: string) => {
    return bookings[facility]?.[time];
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Sports': 'bg-blue-900 text-white border-blue-900',
      'Arts': 'bg-red-800 text-white border-red-800',
      'Academic': 'bg-slate-700 text-white border-slate-700',
      'Meeting': 'bg-blue-900 text-white border-blue-900',
      'Training': 'bg-red-800 text-white border-red-800',
      'Conference': 'bg-slate-600 text-white border-slate-600',
      'Fitness': 'bg-blue-800 text-white border-blue-800'
    };
    return colors[type] || 'bg-slate-500 text-white border-slate-500';
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + (direction === 'next' ? 1 : -1));
    setSelectedDate(newDate);
  };

  const filteredFacilities = facilities.filter(facility => 
    selectedFacilityType === 'all' || facility.type === selectedFacilityType
  );

  return (
    <div className="space-y-6">
      {/* Header with Date Navigation */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Facility Calendar</h1>
          <p className="text-slate-600 mt-2">Real-time availability across all facilities</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-white rounded-lg border border-slate-200 p-1">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateDate('prev')}
              className="h-8 w-8 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="text-center px-4 py-1">
              <div className="text-sm font-medium text-slate-800">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigateDate('next')}
              className="h-8 w-8 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Filters:</span>
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Facility Type: {selectedFacilityType === 'all' ? 'All' : selectedFacilityType}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="space-y-1">
                  {facilityTypes.map(type => (
                    <Button
                      key={type}
                      variant={selectedFacilityType === type ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedFacilityType(type)}
                      className="w-full justify-start"
                    >
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Status: {selectedStatus === 'all' ? 'All' : selectedStatus}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-48 p-2">
                <div className="space-y-1">
                  {statusOptions.map(status => (
                    <Button
                      key={status}
                      variant={selectedStatus === status ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedStatus(status)}
                      className="w-full justify-start"
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Facility Availability Grid
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Header Row */}
              <div className="flex border-b border-slate-200">
                <div className="w-48 p-4 bg-slate-50 font-medium text-slate-700 text-sm border-r border-slate-200">
                  Facility
                </div>
                {timeSlots.map(time => (
                  <div key={time} className="w-32 p-3 bg-slate-50 font-medium text-slate-700 text-xs text-center border-r border-slate-200 last:border-r-0">
                    {time}
                  </div>
                ))}
              </div>

              {/* Facility Rows */}
              {filteredFacilities.map(facility => (
                <div key={facility.name} className="flex border-b border-slate-200 last:border-b-0">
                  <div className="w-48 p-4 font-medium text-slate-800 text-sm bg-slate-50 border-r border-slate-200 flex items-center">
                    <div>
                      <div>{facility.name}</div>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {facility.type}
                      </Badge>
                    </div>
                  </div>
                  {timeSlots.map(time => {
                    const booking = getBookingForSlot(facility.name, time);
                    const isAvailable = !booking;
                    
                    if (selectedStatus === 'available' && booking) return null;
                    if (selectedStatus === 'booked' && !booking) return null;
                    
                    return (
                      <div 
                        key={`${facility.name}-${time}`} 
                        className="w-32 min-h-[80px] border-r border-slate-200 last:border-r-0 relative"
                      >
                        {booking ? (
                          <HoverCard>
                            <HoverCardTrigger asChild>
                              <div className={`w-full h-full p-2 cursor-pointer ${getTypeColor(booking.type)} hover:opacity-90 transition-opacity`}>
                                <div className="text-xs font-medium mb-1 truncate">
                                  {booking.event}
                                </div>
                                <div className="flex items-center text-xs opacity-90">
                                  <Users className="w-3 h-3 mr-1" />
                                  {booking.attendees}
                                </div>
                              </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-sm font-semibold text-slate-800">{booking.event}</h4>
                                  <Badge className={`mt-1 ${getTypeColor(booking.type)}`}>
                                    {booking.type}
                                  </Badge>
                                </div>
                                <div className="space-y-2 text-sm text-slate-600">
                                  <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {time}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {facility.name}
                                  </div>
                                  <div className="flex items-center">
                                    <Users className="w-4 h-4 mr-2" />
                                    {booking.attendees} attendees
                                  </div>
                                  {booking.instructor && (
                                    <div className="flex items-center">
                                      <span className="text-slate-500 mr-2">Instructor:</span>
                                      {booking.instructor}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </HoverCardContent>
                          </HoverCard>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs hover:bg-green-50 hover:text-green-600 transition-colors cursor-pointer">
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

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-slate-800">
              {filteredFacilities.length}
            </div>
            <div className="text-sm text-slate-600">Total Facilities</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-green-600">
              {filteredFacilities.filter(f => !Object.keys(bookings).includes(f.name)).length}
            </div>
            <div className="text-sm text-slate-600">Available Now</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-900">
              {filteredFacilities.filter(f => Object.keys(bookings).includes(f.name)).length}
            </div>
            <div className="text-sm text-slate-600">Currently Booked</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-red-800">
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
