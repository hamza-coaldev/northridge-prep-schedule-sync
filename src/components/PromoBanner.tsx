
import { Calendar, Users, RefreshCw, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PromoBanner = () => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Promotional Materials</h2>
        <p className="text-lg text-slate-600">School-branded marketing and informational content</p>
      </div>

      {/* Main Promotional Banner */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        {/* Background with overlay */}
        <div 
          className="relative h-96 bg-gradient-to-r from-blue-900 via-blue-800 to-red-800"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-red-800/90"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-8">
            <div className="max-w-4xl space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Plan Smart.
                  <span className="block text-yellow-300">Play Together.</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Northridge Preparatory's intelligent scheduling system brings coaches, 
                  students, and families together with seamless coordination.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3">
                  Get Started Today
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: RefreshCw,
            title: "Google Calendar Sync",
            description: "Two-way synchronization keeps everyone updated",
            color: "bg-blue-600"
          },
          {
            icon: Shield,
            title: "Smart Conflict Detection",
            description: "Prevent scheduling conflicts before they happen",
            color: "bg-red-600"
          },
          {
            icon: Users,
            title: "Role-Based Access",
            description: "Appropriate permissions for coaches and parents",
            color: "bg-green-600"
          },
          {
            icon: Calendar,
            title: "Unified Calendar",
            description: "All teams, facilities, and events in one place",
            color: "bg-purple-600"
          }
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* School Information Card */}
      <Card className="shadow-lg bg-gradient-to-r from-slate-50 to-slate-100">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-800">Northridge Preparatory School</h2>
              <p className="text-lg text-slate-600">Excellence in Athletics & Academics</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-900">15+</div>
                <div className="text-slate-600">Athletic Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-700">500+</div>
                <div className="text-slate-600">Student Athletes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">25+</div>
                <div className="text-slate-600">Coaching Staff</div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed max-w-2xl mx-auto">
                Our comprehensive scheduling system ensures that every team, facility, and event 
                is perfectly coordinated. From varsity championships to JV practices, 
                we make sure nothing conflicts and everyone stays informed.
              </p>
              
              <div className="flex justify-center">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8">
                  Contact Athletic Department
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action Banner */}
      <div className="bg-gradient-to-r from-red-700 to-blue-900 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Athletic Scheduling?</h3>
        <p className="text-lg mb-6 opacity-90">
          Join the growing number of schools using smart scheduling to improve coordination and reduce conflicts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100 font-semibold">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
            Request Information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
