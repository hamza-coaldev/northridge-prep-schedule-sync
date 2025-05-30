
import { useState } from 'react';
import { Calendar, Clock, MapPin, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

const CreateEventDialog = () => {
  const [open, setOpen] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    calendarTypes: {
      facility: false,
      publicGame: false,
      private: false
    },
    description: ''
  });
  const [hasConflict, setHasConflict] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
    
    // Simulate conflict detection for demo
    if (field === 'location' && value === 'Main Gymnasium') {
      setHasConflict(true);
    } else {
      setHasConflict(false);
    }
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setEventData(prev => ({
      ...prev,
      calendarTypes: { ...prev.calendarTypes, [type]: checked }
    }));
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

          {/* Calendar Type Checkboxes */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">Calendar Type</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventData.calendarTypes.facility}
                  onChange={(e) => handleCheckboxChange('facility', e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 mr-3"
                />
                <span className="text-slate-700">Facility Calendar</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventData.calendarTypes.publicGame}
                  onChange={(e) => handleCheckboxChange('publicGame', e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 mr-3"
                />
                <span className="text-slate-700">Public Game</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={eventData.calendarTypes.private}
                  onChange={(e) => handleCheckboxChange('private', e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 mr-3"
                />
                <span className="text-slate-700">Private</span>
              </label>
            </div>
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
