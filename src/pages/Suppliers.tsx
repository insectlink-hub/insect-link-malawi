import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Filter, Award, MapPin, Package, CheckCircle } from 'lucide-react';

const SuppliersPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);

  const suppliers = [
    {
      id: 1,
      name: 'MalawiBSF Ltd',
      category: 'Insect Farming',
      location: 'Lilongwe',
      rating: 4.8,
      reviews: 127,
      verified: true,
      products: 45,
      description: 'Specialized in Black Soldier Fly production and larvae supply',
      certifications: ['ISO 9001', 'Food Grade'],
      responseTime: '2 hours'
    },
    {
      id: 2,
      name: 'Lilongwe Protein Solutions',
      category: 'Feed Ingredients',
      location: 'Lilongwe',
      rating: 4.6,
      reviews: 89,
      verified: true,
      products: 32,
      description: 'Premium insect protein concentrates for animal feed',
      certifications: ['Feed Grade', 'Quality Assured'],
      responseTime: '4 hours'
    },
    {
      id: 3,
      name: 'Waste to Value Malawi',
      category: 'Waste Trading',
      location: 'Blantyre',
      rating: 4.7,
      reviews: 156,
      verified: true,
      products: 28,
      description: 'Industrial waste aggregation and supply for insect production',
      certifications: ['Circular Economy', 'Verified'],
      responseTime: '3 hours'
    },
    {
      id: 4,
      name: 'BioFeed Solutions',
      category: 'Feed Ingredients',
      location: 'Mzuzu',
      rating: 4.5,
      reviews: 64,
      verified: true,
      products: 38,
      description: 'Innovative feed additives and insect oil products',
      certifications: ['Research Certified', 'Quality Assured'],
      responseTime: '6 hours'
    },
    {
      id: 5,
      name: 'Protein Innovations',
      category: 'Dried Insects',
      location: 'Lilongwe',
      rating: 4.4,
      reviews: 42,
      verified: false,
      products: 19,
      description: 'Cricket and mealworm powder production',
      certifications: [],
      responseTime: '12 hours'
    },
    {
      id: 6,
      name: 'Malawi Feed Corp',
      category: 'Feed Ingredients',
      location: 'Blantyre',
      rating: 4.9,
      reviews: 203,
      verified: true,
      products: 56,
      description: 'Comprehensive feed solutions with insect-based ingredients',
      certifications: ['ISO 9001', 'Feed Grade', 'Verified'],
      responseTime: '2 hours'
    },
  ];

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Supplier Directory</h1>
          <p className="text-muted-foreground">Find and connect with verified suppliers</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-6 sticky top-24">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Search Suppliers</Label>
                <Input placeholder="Company name..." className="text-sm" />
              </div>

              <div>
                <Label className="text-xs font-semibold mb-2 block">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farming">Insect Farming</SelectItem>
                    <SelectItem value="feed">Feed Ingredients</SelectItem>
                    <SelectItem value="waste">Waste Trading</SelectItem>
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
                <Label className="text-xs font-semibold mb-3 block">Verification</Label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="verified" />
                    <Label htmlFor="verified" className="ml-2 text-sm cursor-pointer">
                      Verified Only
                    </Label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">Reset Filters</Button>
            </div>
          </div>

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
                Showing {suppliers.length} suppliers
              </p>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Top Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="response">Fastest Response</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {suppliers.map((supplier) => (
                <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-2">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-xl font-bold text-primary-foreground">
                            {supplier.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-lg">{supplier.name}</h3>
                              {supplier.verified && (
                                <CheckCircle className="h-5 w-5 text-success" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{supplier.category}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{supplier.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {supplier.certifications.map((cert, idx) => (
                            <span key={idx} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground text-xs">Rating</p>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-lg">{supplier.rating}</span>
                            <span className="text-xs text-muted-foreground">({supplier.reviews})</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Location</p>
                          <p className="font-semibold flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {supplier.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-muted-foreground text-xs">Products</p>
                          <p className="font-semibold flex items-center gap-1">
                            <Package className="h-3 w-3" />
                            {supplier.products}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button className="w-full">View Profile</Button>
                        <Button variant="outline" className="w-full">Request Quote</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuppliersPage;
