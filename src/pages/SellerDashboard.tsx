import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Plus,
  Eye,
  Edit,
  Trash2,
  Package,
  TrendingUp,
  MessageSquare,
  Star,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const sellerStats = [
    { label: 'Active Listings', value: '45', icon: <Package className="h-6 w-6 text-primary" /> },
    { label: 'Total Views', value: '2,847', icon: <Eye className="h-6 w-6 text-primary" /> },
    { label: 'New Inquiries', value: '23', icon: <MessageSquare className="h-6 w-6 text-warning" /> },
    { label: 'Rating', value: '4.8/5', icon: <Star className="h-6 w-6 text-accent" /> },
  ];

  const myListings = [
    {
      id: 1,
      name: 'BSF Larvae Fresh Premium',
      category: 'Live Insects',
      price: 'MWK 450/kg',
      status: 'active',
      views: 342,
      inquiries: 12,
      stock: 500
    },
    {
      id: 2,
      name: 'Dried Insect Protein Powder',
      category: 'Dried Insects',
      price: 'MWK 1,200/kg',
      status: 'active',
      views: 289,
      inquiries: 8,
      stock: 250
    },
    {
      id: 3,
      name: 'Premium Insect Oil',
      category: 'Insect Oil',
      price: 'MWK 3,500/L',
      status: 'active',
      views: 156,
      inquiries: 5,
      stock: 100
    },
    {
      id: 4,
      name: 'Organic Frass Fertilizer',
      category: 'Frass',
      price: 'MWK 120/kg',
      status: 'inactive',
      views: 89,
      inquiries: 2,
      stock: 0
    },
  ];

  const recentInquiries = [
    {
      id: 1,
      product: 'BSF Larvae Fresh Premium',
      buyer: 'Malawi Feed Corp',
      quantity: '500 kg',
      date: '2024-03-20',
      status: 'new'
    },
    {
      id: 2,
      product: 'Dried Insect Protein Powder',
      buyer: 'Aquaculture Solutions',
      quantity: '100 kg',
      date: '2024-03-20',
      status: 'responded'
    },
    {
      id: 3,
      product: 'Premium Insect Oil',
      buyer: 'Pet Food Industries',
      quantity: '50 L',
      date: '2024-03-19',
      status: 'responded'
    },
  ];

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Seller Dashboard</h1>
              <p className="text-muted-foreground">Manage your products and inquiries</p>
            </div>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Listing
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sellerStats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div>{stat.icon}</div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance This Month</CardTitle>
                  <CardDescription>Your marketplace activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Views</span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Click-Through Rate</span>
                    <span className="font-semibold">8.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">New Inquiries</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Rate</span>
                    <span className="font-semibold">94%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Status</CardTitle>
                  <CardDescription>Your verification and compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Email Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Business Verified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm">Quality Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-warning" />
                    <span className="text-sm">Certifications Expire in 45 days</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Listings Tab */}
          <TabsContent value="listings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>My Listings</CardTitle>
                    <CardDescription>Manage your product listings</CardDescription>
                  </div>
                  <Input placeholder="Search listings..." className="w-48" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{listing.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {listing.category} • {listing.price}
                        </p>
                        <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                          <span>Views: {listing.views}</span>
                          <span>Inquiries: {listing.inquiries}</span>
                          <span>Stock: {listing.stock} units</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          listing.status === 'active'
                            ? 'bg-success/10 text-success'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {listing.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit className="h-4 w-4" />
                        </Button>
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

          {/* Inquiries Tab */}
          <TabsContent value="inquiries" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
                <CardDescription>Buyer requests for your products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{inquiry.product}</h4>
                        <p className="text-sm text-muted-foreground">
                          {inquiry.buyer} • {inquiry.quantity}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{inquiry.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${
                          inquiry.status === 'new'
                            ? 'bg-warning/10 text-warning'
                            : 'bg-success/10 text-success'
                        }`}>
                          {inquiry.status === 'new' ? 'New' : 'Responded'}
                        </span>
                        <Button size="sm" className="gap-1">
                          <MessageSquare className="h-4 w-4" />
                          Reply
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

export default SellerDashboard;
