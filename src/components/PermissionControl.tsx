
import { Shield, Users, Settings, Eye, Edit, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';

const PermissionControl = () => {
  const roles = [
    {
      name: "Athletic Director",
      icon: Shield,
      color: "bg-blue-900",
      permissions: {
        viewAll: true,
        editAll: true,
        manageUsers: true,
        approveEvents: true,
        viewReports: true
      },
      users: ["Dr. Sarah Johnson", "Mike Thompson"]
    },
    {
      name: "Head Coaches",
      icon: Users,
      color: "bg-red-700",
      permissions: {
        viewAll: true,
        editAll: false,
        manageUsers: false,
        approveEvents: false,
        viewReports: true
      },
      users: ["Coach Williams", "Coach Davis", "Coach Martinez", "Coach Smith"]
    },
    {
      name: "Assistant Coaches",
      icon: Settings,
      color: "bg-green-600",
      permissions: {
        viewAll: false,
        editAll: false,
        manageUsers: false,
        approveEvents: false,
        viewReports: false
      },
      users: ["Assistant Coach Brown", "Assistant Coach Lee", "Assistant Coach Taylor"]
    },
    {
      name: "Parents",
      icon: Eye,
      color: "bg-purple-600",
      permissions: {
        viewAll: false,
        editAll: false,
        manageUsers: false,
        approveEvents: false,
        viewReports: false
      },
      users: ["Parent Portal Access (234 users)"]
    }
  ];

  const permissionLabels = {
    viewAll: "View All Events",
    editAll: "Edit All Events", 
    manageUsers: "Manage Users",
    approveEvents: "Approve Events",
    viewReports: "View Reports"
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Permission & Access Control</h2>
        <p className="text-lg text-slate-600">Manage role-based access for coaches, coordinators, and parents</p>
      </div>

      {/* Role Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, index) => {
          const Icon = role.icon;
          const activePermissions = Object.values(role.permissions).filter(p => p).length;
          
          return (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full ${role.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-800">{role.name}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {activePermissions}/5 permissions
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-center text-sm text-slate-600">
                  {role.users.length > 1 ? (
                    <div>
                      <div className="font-medium">{role.users.length} users</div>
                      <div className="text-xs mt-1">{role.users[0]} +{role.users.length - 1} more</div>
                    </div>
                  ) : (
                    <div>{role.users[0]}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Detailed Permission Matrix */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Settings className="w-6 h-6 mr-2" />
            Permission Matrix
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-slate-700">Role</th>
                  {Object.entries(permissionLabels).map(([key, label]) => (
                    <th key={key} className="text-center py-3 px-4 font-medium text-slate-700 min-w-[120px]">
                      {label}
                    </th>
                  ))}
                  <th className="text-center py-3 px-4 font-medium text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((role, roleIndex) => {
                  const Icon = role.icon;
                  return (
                    <tr key={roleIndex} className="border-b hover:bg-slate-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full ${role.color} flex items-center justify-center`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-slate-800">{role.name}</span>
                        </div>
                      </td>
                      {Object.entries(permissionLabels).map(([key, label]) => (
                        <td key={key} className="text-center py-4 px-4">
                          <Switch 
                            checked={role.permissions[key as keyof typeof role.permissions]}
                            disabled={role.name === "Athletic Director"} // Always enabled for admin
                          />
                        </td>
                      ))}
                      <td className="text-center py-4 px-4">
                        <Button size="sm" variant="outline" className="text-blue-900 border-blue-200 hover:bg-blue-50">
                          Edit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 mx-auto text-blue-900 mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Add New User</h3>
            <p className="text-sm text-slate-600 mb-4">Invite coaches, staff, or coordinators</p>
            <Button className="bg-blue-900 hover:bg-blue-800 w-full">
              Invite User
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <Shield className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Create Role</h3>
            <p className="text-sm text-slate-600 mb-4">Define custom permission groups</p>
            <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
              New Role
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <h3 className="font-semibold text-slate-800 mb-2">Audit Log</h3>
            <p className="text-sm text-slate-600 mb-4">Review permission changes</p>
            <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
              View Logs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PermissionControl;
