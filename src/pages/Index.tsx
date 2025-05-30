import { useState } from 'react';
import { Calendar, Users, Settings, Eye, Home, Edit, Grid, Plus, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Dashboard from '@/components/Dashboard';
import MasterCalendar from '@/components/MasterCalendar';
import EditEvent from '@/components/EditEvent';
import PermissionControl from '@/components/PermissionControl';
import CalendarDetailView from '@/components/CalendarDetailView';
import FacilityCalendarView from '@/components/FacilityCalendarView';

const Index = () => {
  const [activeView, setActiveView] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'master', name: 'Master Calendar', icon: Grid },
    { id: 'facilities', name: 'Facilities View', icon: MapPin },
    { id: 'create', name: 'Edit Event', icon: Edit },
    { id: 'permissions', name: 'Permissions', icon: Settings },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <Dashboard onCalendarClick={setActiveView} />;
      case 'master':
        return <MasterCalendar />;
      case 'facilities':
        return <FacilityCalendarView />;
      case 'create':
        return <EditEvent />;
      case 'permissions':
        return <PermissionControl />;
      case 'parents-calendar':
        return <CalendarDetailView calendarType="parents" onBack={() => setActiveView('home')} />;
      case 'facility-calendar':
        return <CalendarDetailView calendarType="facility" onBack={() => setActiveView('home')} />;
      case 'staff-calendar':
        return <CalendarDetailView calendarType="staff" onBack={() => setActiveView('home')} />;
      default:
        return <Dashboard onCalendarClick={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-slate-800">Northridge Preparatory</h1>
              </div>
              
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeView === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView(item.id)}
                      className={`flex items-center space-x-2 ${
                        activeView === item.id 
                          ? 'bg-blue-900 text-white hover:bg-blue-800' 
                          : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-3 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeView === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveView(item.id)}
                  className={`flex items-center space-x-2 whitespace-nowrap ${
                    activeView === item.id 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
    </div>
  );
};

export default Index;
