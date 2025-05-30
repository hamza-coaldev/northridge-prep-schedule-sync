
import { useState } from 'react';
import { Calendar, Clock, MapPin, AlertTriangle, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const CreateEventDialog = () => {
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    selectedCalendars: [],
    description: ''
  });
  const [hasConflict, setHasConflict] = useState(false);

  const calendarOptions = [
    { id: 'facility', name: 'Facility Calendar' },
    { id: 'publicGame', name: 'Public Game Calendar' },
    { id: 'teamA', name: 'Team A' },
    { id: 'teamB', name: 'Team B' },
    { id: 'gym1', name: 'Gym 1' },
    { id: 'gym2', name: 'Gym 2' },
    { id: 'auditorium', name: 'Auditorium' },
    { id: 'private', name: 'Private Calendar' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
    
    // Simulate conflict detection for demo
    if (field === 'location' && value === 'Main Gymnasium') {
      setHasConflict(true);
    } else {
      setHasConflict(false);
    }
  };

  const handleCalendarToggle = (calendarId: string, checked: boolean) => {
    setEventData(prev => ({
      ...prev,
      selectedCalendars: checked 
        ? [...prev.selectedCalendars, calendarId]
        : prev.selectedCalendars.filter(id => id !== calendarId)
    }));
  };

  const getSelectedCalendarNames = () => {
    return eventData.selectedCalendars
      .map(id => calendarOptions.find(cal => cal.id === id)?.name)
      .filter(Boolean)
      .join(', ');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-900 hover:bg-blue-800">
          <Calendar className="w-4 h-4 mr-2" />
          Create New Event
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center text-slate-800">
            <Calendar className="w-5 h-5 mr-2" />
            Create New Event
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Event Title</label>
              <input
                type="text"
                value={eventData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter event title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
              <input
                type="text"
                value={eventData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select facility or location"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
              <input
                type="date"
                value={eventData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Time</label>
              <input
                type="time"
                value={eventData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Conflict Warning */}
          {hasConflict && (
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <div className="flex items-center text-red-800">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Conflict detected: Main Gymnasium is already booked 3:30-5:30 PM</span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Calendar Selection */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Select Calendars</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full justify-between h-12 bg-white"
                >
                  <span className="text-left flex-1">
                    {eventData.selectedCalendars.length > 0 
                      ? getSelectedCalendarNames()
                      : "Choose calendars..."}
                  </span>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full min-w-[400px] bg-white" align="start">
                {calendarOptions.map((calendar) => (
                  <DropdownMenuCheckboxItem
                    key={calendar.id}
                    checked={eventData.selectedCalendars.includes(calendar.id)}
                    onCheckedChange={(checked) => handleCalendarToggle(calendar.id, checked)}
                    className="py-2"
                  >
                    {calendar.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <p className="text-sm text-slate-500 mt-1">
              Selected: {eventData.selectedCalendars.length} calendar(s)
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              value={eventData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={3}
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add event details..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Save Event
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDialog;
