
import { Calendar, Users, CheckCircle, Sync } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HeroSection = () => {
  const features = [
    {
      icon: Sync,
      title: "2-Way Google Calendar Sync",
      description: "Seamlessly synchronize with Google Calendar for real-time updates",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Coaches, coordinators, and parents with appropriate permissions",
      gradient: "from-red-700 to-red-800"
    },
    {
      icon: CheckCircle,
      title: "Conflict Detection",
      description: "Automatically identify scheduling conflicts before they happen",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-slate-800 leading-tight">
            Northridge Preparatory
            <span className="block text-4xl text-blue-900">Scheduling System</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Streamline your school's athletic and facility scheduling with intelligent coordination, 
            conflict detection, and seamless Google Calendar integration.
          </p>
        </div>

        {/* Hero Visual - Scheduling Interface Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Spreadsheet View */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-900" />
                  Team Schedule Management
                </h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-2 text-sm font-medium text-slate-600 mb-3">
                    <div>Team</div>
                    <div>Time</div>
                    <div>Facility</div>
                  </div>
                  {[
                    { team: "Varsity Basketball", time: "3:30 PM", facility: "Main Gym", color: "bg-blue-100" },
                    { team: "JV Soccer", time: "4:00 PM", facility: "Field A", color: "bg-green-100" },
                    { team: "Swimming", time: "3:30 PM", facility: "Pool", color: "bg-red-100" }
                  ].map((item, index) => (
                    <div key={index} className={`grid grid-cols-3 gap-2 p-2 rounded text-sm ${item.color}`}>
                      <div className="font-medium">{item.team}</div>
                      <div>{item.time}</div>
                      <div>{item.facility}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Calendar View */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-800 flex items-center">
                  <Sync className="w-5 h-5 mr-2 text-blue-900" />
                  Google Calendar Integration
                </h3>
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-center text-sm font-medium text-slate-600 mb-3">March 2024</div>
                  <div className="grid grid-cols-7 gap-1 text-xs">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                      <div key={day} className="text-center font-medium text-slate-500 p-1">{day}</div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 6;
                      const isToday = day === 15;
                      const hasEvent = [12, 15, 18, 22].includes(day);
                      return (
                        <div key={i} className={`text-center p-1 rounded ${
                          day <= 0 || day > 31 ? 'text-slate-300' :
                          isToday ? 'bg-blue-900 text-white' :
                          hasEvent ? 'bg-red-100 text-red-800' :
                          'text-slate-700'
                        }`}>
                          {day > 0 && day <= 31 ? day : ''}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 px-8">
            View Demo
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-900 to-red-800 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Plan Smart. Play Together.</h2>
        <p className="text-xl mb-8 opacity-90">Join hundreds of schools already using our scheduling system</p>
        <Button size="lg" variant="secondary" className="bg-white text-blue-900 hover:bg-slate-100 px-8">
          Start Your Free Trial
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
