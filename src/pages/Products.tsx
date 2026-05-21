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
import { Search, Filter, Package, MapPin, Award, Star } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Black Soldier Fly Larvae (Fresh)',
      supplier: 'MalawiBSF Ltd',
      category: 'Live Insects',
      price: 'MWK 450/kg',
      moq: '50kg',
      location: 'Lilongwe',
      rating: 4.8,
      verified: true,
      image: '🐛'
    },
    {
      id: 2,
      name: 'Dried Insect Protein Powder',
      supplier: 'Lilongwe Protein Solutions',
      category: 'Dried Insects',
      price: 'MWK 1,200/kg',
      moq: '25kg',
      location: 'Lilongwe',
      rating: 4.6,
      verified: true,
      image: '📦'
    },
    {
      id: 3,
      name: 'Insect Frass (Organic Fertilizer)',
      supplier: 'Waste to Value Malawi',
      category: 'Frass/Fertilizer',
      price: 'MWK 120/kg',
      moq: '100kg',
      location: 'Blantyre',
      rating: 4.7,
      verified: true,
      image: '🌱'
    },
    {
      id: 4,
      name: 'Insect Oil (Premium Grade)',
      supplier: 'BioFeed Solutions',
      category: 'Insect Oil',
      price: 'MWK 3,500/liter',
      moq: '10L',
      location: 'Mzuzu',
      rating: 4.5,
      verified: true,
      image: '🫧'
    },
    {
      id: 5,
      name: 'Cricket Powder (Food Grade)',
      supplier: 'Protein Innovations',
      category: 'Dried Insects',
      price: 'MWK 2,800/kg',
      moq: '5kg',
      location: 'Lilongwe',
      rating: 4.4,
      verified: false,
      image: '🦗'
    },
    {
      id: 6,
      name: 'Mealworm Feed Blend',
      supplier: 'Malawi Feed Corp',
      category: 'Feed Ingredients',
      price: 'MWK 1,800/kg',
      moq: '50kg',
      location: 'Blantyre',
      rating: 4.9,
      verified: true,
      image: '🐛'
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Browse Products</h1>
          <p className="text-muted-foreground">Discover verified suppliers and quality products</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-6 sticky top-24">
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </h3>
              </div>

              {/* Search */}
              <div>
                <Label className="text-xs font-semibold mb-2 block">Search</Label>
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <Label className="text-xs font-semibold mb-2 block">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="live">Live Insects</SelectItem>
                    <SelectItem value="dried">Dried Insects</SelectItem>
                    <SelectItem value="oil">Insect Oil</SelectItem>
                    <SelectItem value="frass">Frass/Fertilizer</SelectItem>
                    <SelectItem value="feed">Feed Ingredients</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
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
                    <SelectItem value="zomba">Zomba</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <Label className="text-xs font-semibold mb-2 block">Price Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-500">MWK 0 - 500</SelectItem>
                    <SelectItem value="500-1000">MWK 500 - 1,000</SelectItem>
                    <SelectItem value="1000-2000">MWK 1,000 - 2,000</SelectItem>
                    <SelectItem value="2000+">MWK 2,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Verification */}
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

              {/* Certification */}
              <div>
                <Label className="text-xs font-semibold mb-3 block">Certification</Label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="food-grade" />
                    <Label htmlFor="food-grade" className="ml-2 text-sm cursor-pointer">
                      Food Grade
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="feed-grade" />
                    <Label htmlFor="feed-grade" className="ml-2 text-sm cursor-pointer">
                      Feed Grade
                    </Label>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">Reset Filters</Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
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

            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length} products
              </p>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Most Relevant</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-md mb-4 flex items-center justify-center text-4xl">
                      {product.image}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-base">{product.name}</CardTitle>
                        <CardDescription className="text-xs">{product.supplier}</CardDescription>
                      </div>
                      {product.verified && (
                        <Award className="h-4 w-4 text-success flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div>
                        <p className="text-2xl font-bold text-primary">{product.price}</p>
                        <p className="text-xs text-muted-foreground">MOQ: {product.moq}</p>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {product.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-accent text-accent" />
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Request Quote</Button>
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

export default ProductsPage;
