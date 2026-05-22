import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Users,
  Package,
  TrendingUp,
  AlertCircle,
  Clock,
  DollarSign,
  Eye,
  Trash2,
  Edit,
  CheckCircle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardStats = [
    { label: 'Total Suppliers', value: '245', change: '+12%', icon: <Users className="h-6 w-6 text-primary" /> },
    { label: 'Active Listings', value: '1,847', change: '+23%', icon: <Package className="h-6 w-6 text-primary" /> },
    { label: 'Pending Verification', value: '34', change: '-5%', icon: <Clock className="h-6 w-6 text-warning" /> },
    { label: 'Monthly Revenue', value: 'MWK 2.3M', change: '+18%', icon: <DollarSign className="h-6 w-6 text-success" /> },
  ];

  const pendingVerifications = [
    { id: 1, name: 'Green Valley Farms', type: 'Supplier', submitted: '2024-03-20', status: 'Review' },
    { id: 2, name: 'Protein Tech Solutions', type: 'Supplier', submitted: '2024-03-19', status: 'Documents' },
    { id: 3, name: 'EcoWaste Aggregators', type: 'Waste Supplier', submitted: '2024-03-18', status: 'Review' },
    { id: 4, name: 'Feed Masters Ltd', type: 'Supplier', submitted: '2024-03-17', status: 'Review' },
  ];

  const recentListings = [
    { id: 1, name: 'BSF Larvae Premium Grade', supplier: 'MalawiBSF Ltd', status: 'approved', date: '2024-03-20' },
    { id: 2, name: 'Cricket Flour Food Grade', supplier: 'Protein Innovations', status: 'pending', date: '2024-03-20' },
    { id: 3, name: 'Insect Oil Extract', supplier: 'BioFeed Solutions', status: 'approved', date: '2024-03-19' },
    { id: 4, name: 'Frass Organic Fertilizer', supplier: 'Waste to Value', status: 'approved', date: '2024-03-19' },
  ];

  const flaggedItems = [
    { id: 1, title: 'Suspicious Price Listing', type: 'Price Anomaly', severity: 'high', date: '2024-03-20' },
    { id: 2, title: 'Duplicate Product Entry', type: 'Duplicate', severity: 'medium', date: '2024-03-20' },
    { id: 3, title: 'Missing Certification', type: 'Compliance', severity: 'high', date: '2024-03-19' },
  ];

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Marketplace management and analytics</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>{stat.icon}</div>
                  <span className={`text-xs font-semibold ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>Key performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion Rate</span>
                    <span className="font-semibold">12.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg Response Time</span>
                    <span className="font-semibold">3.2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Supplier Rating Avg</span>
                    <span className="font-semibold">4.6/5.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active RFQs</span>
                    <span className="font-semibold">234</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Suppliers by location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Lilongwe</span>
                      <span className="font-semibold">98</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Blantyre</span>
                      <span className="font-semibold">76</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mzuzu</span>
                      <span className="font-semibold">45</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Other</span>
                      <span className="font-semibold">26</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '11%' }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Verification Tab */}
          <TabsContent value="verification" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Pending Verifications</CardTitle>
                <CardDescription>Companies awaiting verification approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingVerifications.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.type} • Submitted {item.submitted}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded">
                          {item.status}
                        </span>
                        <Button size="sm" variant="outline">Review</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Listings Tab */}
          <TabsContent value="listings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Recent Listings</CardTitle>
                    <CardDescription>Latest product and waste listings</CardDescription>
                  </div>
                  <Input placeholder="Search..." className="w-48" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{listing.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {listing.supplier} • {listing.date}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          listing.status === 'approved'
                            ? 'bg-success/10 text-success'
                            : 'bg-warning/10 text-warning'
                        }`}>
                          {listing.status === 'approved' ? 'Approved' : 'Pending'}
                        </span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Eye className="h-4 w-4" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Alerts Tab */}
          <TabsContent value="alerts" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>System Alerts & Flags</CardTitle>
                <CardDescription>Items requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {flaggedItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <AlertCircle className={`h-5 w-5 flex-shrink-0 ${
                        item.severity === 'high' ? 'text-destructive' : 'text-warning'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.type} • {item.date}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Investigate</Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
