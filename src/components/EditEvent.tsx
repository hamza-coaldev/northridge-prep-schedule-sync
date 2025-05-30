
import { useState } from 'react';
import { Calendar, Clock, MapPin, Save, Eye, ArrowLeft, Check, Clock as ClockIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EditEvent = () => {
  const [eventData, setEventData] = useState({
    title: 'Basketball Practice',
    date: '2024-03-15',
    time: '15:30',
    location: 'Main Gymnasium',
    calendarTypes: {
      facility: true,
      publicGame: false,
      private: false
    },
    description: 'Regular basketball practice session for varsity team',
    coach: 'Coach Johnson'
  });

  const [syncStatus, setSyncStatus] = useState('synced'); // 'synced', 'pending', 'error'

  const handleInputChange = (field: string, value: string) => {
    setEventData(prev => ({ ...prev, [field]: value }));
    setSyncStatus('pending');
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setEventData(prev => ({
      ...prev,
      calendarTypes: { ...prev.calendarTypes, [type]: checked }
    }));
    setSyncStatus('pending');
  };

  const getSyncStatusBadge = () => {
    switch (syncStatus) {
      case 'synced':
        return <Badge className="bg-green-100 text-green-800"><Check className="w-3 h-3 mr-1" />Synced ✓</Badge>;
      case 'pending':
        return <Badge variant="secondary"><ClockIcon className="w-3 h-3 mr-1" />Pending sync ⏳</Badge>;
      case 'error':
        return <Badge variant="destructive">Sync Error</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Calendar
          </Button>
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Edit Event</h2>
            <p className="text-slate-600">Make changes to your scheduled event</p>
          </div>
        </div>
        {getSyncStatusBadge()}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Edit Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Event Title</label>
                  <input
                    type="text"
                    value={eventData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Coach/Organizer</label>
                  <input
                    type="text"
                    value={eventData.coach}
                    onChange={(e) => handleInputChange('coach', e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <input
                  type="text"
                  value={eventData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={eventData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Sync Status */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-medium text-blue-900 mb-2">Calendar Sync</h3>
              <p className="text-sm text-blue-800 mb-3">
                Update will sync to all linked calendars: Facility Calendar, Staff Calendar
              </p>
              {getSyncStatusBadge()}
            </CardContent>
          </Card>

          {/* Event Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-slate-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{eventData.date}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{eventData.time}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">{eventData.location}</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-blue-900 hover:bg-blue-800">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              Preview Changes
            </Button>
            <Button variant="ghost" className="w-full">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
