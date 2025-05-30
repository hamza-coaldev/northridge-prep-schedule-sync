
import { ArrowLeft, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CalendarDetailViewProps {
  calendarType: 'parents' | 'facility' | 'staff';
  onBack: () => void;
}

const CalendarDetailView = ({ calendarType, onBack }: CalendarDetailViewProps) => {
  const calendarData = {
    parents: {
      title: "Parents Calendar",
      color: "green",
      events: [
        {
          id: 1,
          title: "Parent-Teacher Conference",
          date: "March 15, 2024",
          time: "10:00 AM - 11:00 AM",
          location: "Room 204",
          type: "Conference",
          attendees: 25
        },
        {
          id: 2,
          title: "School Board Meeting",
          date: "March 15, 2024",
          time: "2:00 PM - 4:00 PM",
          location: "Main Office",
          type: "Meeting",
          attendees: 12
        },
        {
          id: 3,
          title: "PTA General Assembly",
          date: "March 16, 2024",
          time: "7:00 PM - 9:00 PM",
          location: "Auditorium",
          type: "Assembly",
          attendees: 150
        },
        {
          id: 4,
          title: "Spring Festival Planning",
          date: "March 18, 2024",
          time: "6:30 PM - 8:00 PM",
          location: "Conference Room A",
          type: "Planning",
          attendees: 8
        }
      ]
    },
    facility: {
      title: "Facility Calendar",
      color: "blue",
      events: [
        {
          id: 1,
          title: "Basketball Practice",
          date: "March 15, 2024",
          time: "3:30 PM - 5:30 PM",
          location: "Main Gym",
          type: "Sports",
          attendees: 20
        },
        {
          id: 2,
          title: "Volleyball Training",
          date: "March 15, 2024",
          time: "4:15 PM - 6:15 PM",
          location: "Gym 2",
          type: "Sports",
          attendees: 15
        },
        {
          id: 3,
          title: "Drama Rehearsal",
          date: "March 15, 2024",
          time: "5:00 PM - 8:00 PM",
          location: "Auditorium",
          type: "Arts",
          attendees: 35
        },
        {
          id: 4,
          title: "Chess Club",
          date: "March 16, 2024",
          time: "3:00 PM - 5:00 PM",
          location: "Library",
          type: "Academic",
          attendees: 12
        }
      ]
    },
    staff: {
      title: "Staff & Student Calendar",
      color: "purple",
      events: [
        {
          id: 1,
          title: "Faculty Meeting",
          date: "March 15, 2024",
          time: "8:00 AM - 9:30 AM",
          location: "Conference Room",
          type: "Meeting",
          attendees: 45
        },
        {
          id: 2,
          title: "Department Head Meeting",
          date: "March 15, 2024",
          time: "12:00 PM - 1:00 PM",
          location: "Principal's Office",
          type: "Meeting",
          attendees: 8
        },
        {
          id: 3,
          title: "Coach Training Session",
          date: "March 15, 2024",
          time: "3:00 PM - 5:00 PM",
          location: "Main Gym",
          type: "Training",
          attendees: 12
        },
        {
          id: 4,
          title: "Student Assembly",
          date: "March 16, 2024",
          time: "10:00 AM - 11:00 AM",
          location: "Auditorium",
          type: "Assembly",
          attendees: 400
        }
      ]
    }
  };

  const currentCalendar = calendarData[calendarType];
  const colorClasses = {
    green: {
      border: "border-l-green-500",
      bg: "bg-green-50",
      text: "text-green-800",
      badge: "bg-green-100 text-green-800"
    },
    blue: {
      border: "border-l-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-800",
      badge: "bg-blue-100 text-blue-800"
    },
    purple: {
      border: "border-l-purple-500",
      bg: "bg-purple-50",
      text: "text-purple-800",
      badge: "bg-purple-100 text-purple-800"
    }
  };

  const colors = colorClasses[currentCalendar.color];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{currentCalendar.title}</h1>
          <p className="text-slate-600 mt-1">All events and activities</p>
        </div>
      </div>

      {/* Events List */}
      <div className="grid gap-4">
        {currentCalendar.events.map((event) => (
          <Card key={event.id} className={`${colors.border} hover:shadow-lg transition-shadow cursor-pointer`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-slate-800">{event.title}</h3>
                    <Badge variant="secondary" className={colors.badge}>
                      {event.type}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mt-3">
                    <Users className="w-4 h-4 mr-2 text-slate-500" />
                    <span className="text-sm text-slate-600">{event.attendees} attendees</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Calendar Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">{currentCalendar.events.length}</div>
              <div className="text-sm text-slate-600">Total Events</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">
                {currentCalendar.events.reduce((sum, event) => sum + event.attendees, 0)}
              </div>
              <div className="text-sm text-slate-600">Total Attendees</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">
                {new Set(currentCalendar.events.map(event => event.location)).size}
              </div>
              <div className="text-sm text-slate-600">Unique Locations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">
                {new Set(currentCalendar.events.map(event => event.type)).size}
              </div>
              <div className="text-sm text-slate-600">Event Types</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarDetailView;
