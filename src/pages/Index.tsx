
import { useState } from 'react';
import { Calendar, Users, Settings, Shield, Eye, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import HeroSection from '@/components/HeroSection';
import MobilePreview from '@/components/MobilePreview';
import ConflictDetection from '@/components/ConflictDetection';
import PermissionControl from '@/components/PermissionControl';
import PublicCalendar from '@/components/PublicCalendar';
import PromoBanner from '@/components/PromoBanner';

const Index = () => {
  const [activeView, setActiveView] = useState('hero');

  const views = [
    { id: 'hero', name: 'Hero Landing', icon: Calendar },
    { id: 'mobile', name: 'Mobile App', icon: Users },
    { id: 'conflict', name: 'Conflict Detection', icon: Shield },
    { id: 'permissions', name: 'Permissions', icon: Settings },
    { id: 'public', name: 'Public Calendar', icon: Eye },
    { id: 'promo', name: 'Promo Banner', icon: RefreshCw },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'hero':
        return <HeroSection />;
      case 'mobile':
        return <MobilePreview />;
      case 'conflict':
        return <ConflictDetection />;
      case 'permissions':
        return <PermissionControl />;
      case 'public':
        return <PublicCalendar />;
      case 'promo':
        return <PromoBanner />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-red-800 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-slate-800">Northridge Preparatory Scheduling</h1>
            </div>
            <Badge variant="secondary" className="bg-blue-50 text-blue-800">Demo Views</Badge>
          </div>
        </div>
      </nav>

      {/* View Selector */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 py-4 overflow-x-auto">
            {views.map((view) => {
              const Icon = view.icon;
              return (
                <Button
                  key={view.id}
                  variant={activeView === view.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center space-x-2 whitespace-nowrap ${
                    activeView === view.id 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{view.name}</span>
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
