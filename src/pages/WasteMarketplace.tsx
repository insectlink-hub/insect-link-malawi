import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, MapPin, Truck, CheckCircle, AlertCircle, TrendingUp, Leaf } from 'lucide-react';

const WasteMarketplacePage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);

  const wasteListings = [
    {
      id: 1,
      name: 'Brewery By-Products',
      source: 'Carlsberg Malawi Brewery',
      wasteType: 'Brewery Waste',
      volume: '500 tons/month',
      frequency: 'Daily pickup available',
      location: 'Blantyre',
      contamination: 'Low',
      suitability: 'Excellent for BSF',
      verified: true,
      rating: 4.8,
      status: 'Available Now'
    },
    {
      id: 2,
      name: 'Market Vegetable Waste',
      source: 'Lilongwe Central Market',
      wasteType: 'Market Waste',
      volume: '50-100 tons/week',
      frequency: 'Weekly collection',
      location: 'Lilongwe',
      contamination: 'Medium',
      suitability: 'Good for BSF',
      verified: true,
      rating: 4.5,
      status: 'Available Now'
    },
    {
      id: 3,
      name: 'Grain Processing By-Products',
      source: 'Malawi Grain Millers',
      wasteType: 'Agricultural Waste',
      volume: '200 tons/month',
      frequency: 'Bi-weekly',
      location: 'Lilongwe',
      contamination: 'Low',
      suitability: 'Excellent for feed',
      verified: true,
      rating: 4.7,
      status: 'Available Now'
    },
    {
      id: 4,
      name: 'Food Processing Waste',
      source: 'Rab Processors Ltd',
      wasteType: 'Food Processing',
      volume: '150 tons/month',
      frequency: 'Daily',
      location: 'Blantyre',
      contamination: 'Low',
      suitability: 'Very Good',
      verified: true,
      rating: 4.6,
      status: 'Available Now'
    },
    {
      id: 5,
      name: 'Fruit Processing Residue',
      source: 'Malawi Juice Company',
      wasteType: 'Fruit Waste',
      volume: '80 tons/month',
      frequency: 'Weekly',
      location: 'Lilongwe',
      contamination: 'Very Low',
      suitability: 'Excellent',
      verified: false,
      rating: 4.3,
      status: 'Available Now'
    },
    {
      id: 6,
      name: 'Poultry Farm Manure',
      source: 'Malawi Poultry Cooperative',
      wasteType: 'Agricultural Waste',
      volume: '300 tons/month',
      frequency: 'Twice weekly',
      location: 'Mzuzu',
      contamination: 'Medium',
      suitability: 'Good',
      verified: true,
      rating: 4.4,
      status: 'Available Now'
    },
  ];

  const wasteStats = [
    { label: 'Total Waste Available', value: '1,847 tons/month', icon: '📊' },
    { label: 'Active Suppliers', value: '34', icon: '🏭' },
    { label: 'Waste Diverted', value: '12,450 tons', icon: '♻️' },
    { label: 'Monthly Savings', value: 'MWK 2.3M', icon: '💰' },
  ];

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Waste Marketplace</h1>
          <p className="text-muted-foreground">
            Transform industrial and organic waste into valuable insect production inputs. 
            Connect with waste suppliers and redirect materials to sustainable use.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wasteStats.map((stat, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-lg font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-6 sticky top-24">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Search Waste</Label>
                <Input placeholder="Waste type..." className="text-sm" />
              </div>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Waste Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="brewery">Brewery Waste</SelectItem>
                    <SelectItem value="market">Market Waste</SelectItem>
                    <SelectItem value="agricultural">Agricultural</SelectItem>
                    <SelectItem value="food">Food Processing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lilongwe">Lilongwe</SelectItem>
                    <SelectItem value="blantyre">Blantyre</SelectItem>
                    <SelectItem value="mzuzu">Mzuzu</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Contamination Level</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="very-low">Very Low</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-xs font-semibold mb-3 block">Suitability</Label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="excellent" />
                    <Label htmlFor="excellent" className="ml-2 text-sm cursor-pointer">
                      Excellent for BSF
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="verified" />
                    <Label htmlFor="verified" className="ml-2 text-sm cursor-pointer">
                      Verified Suppliers
                    </Label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">Reset Filters</Button>
            </div>
          </div>

          {/* Listings */}
          <div className="lg:col-span-3">
            <div className="mb-6 lg:hidden">
              <Button
                variant="outline"
                className="w-full gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="h-4 w-4" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </Button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {wasteListings.length} waste streams
              </p>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="volume">Largest Volume</SelectItem>
                  <SelectItem value="suitability">Best Suitability</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {wasteListings.map((waste) => (
                <Card key={waste.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-xl font-bold text-primary-foreground">
                            ♻️
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-lg">{waste.name}</h3>
                              {waste.verified && (
                                <CheckCircle className="h-5 w-5 text-success" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{waste.source}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {waste.wasteType} • {waste.volume}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {waste.contamination} Contamination
                          </span>
                          <span className="text-xs bg-success/10 text-success px-2 py-1 rounded">
                            {waste.suitability}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">Rating</p>
                          <div className="flex items-center gap-1">
                            <span className="font-bold">{waste.rating}</span>
                            <span className="text-xs text-muted-foreground">⭐</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Location</p>
                          <p className="font-semibold flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {waste.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Frequency</p>
                          <p className="font-semibold text-xs">{waste.frequency}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button className="w-full">Request Collection</Button>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border mt-12">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Are You a Waste Supplier?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            List your waste streams and connect with insect farmers and processors who will turn your waste into valuable products.
          </p>
          <Button size="lg" className="gap-2">
            <TrendingUp className="h-5 w-5" />
            List Your Waste Stream
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WasteMarketplacePage;
