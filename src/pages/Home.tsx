import React from 'react';
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
import { 
  Search, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  CheckCircle,
  ArrowRight,
  Package,
  Leaf,
  Recycle,
  Briefcase,
  Award,
  BarChart3
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Malawi's Premier Insect & Waste Marketplace
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with verified suppliers, discover premium insect products, and transform waste into value. 
              The trusted B2B marketplace for food, feed, and circular economy solutions.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 mb-8">
              <Input
                placeholder="Search products, suppliers, or waste..."
                className="flex-1 h-12 text-base"
              />
              <Button size="lg" className="gap-2">
                <Search className="h-5 w-5" />
                Search
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Package className="h-5 w-5" />
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <TrendingUp className="h-5 w-5" />
                List Your Product
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                <span>Secure Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-success" />
                <span>Fast Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: '🐛', label: 'Live Insects', count: '234' },
              { icon: '📦', label: 'Dried Insects', count: '189' },
              { icon: '🫧', label: 'Insect Oil', count: '67' },
              { icon: '🌱', label: 'Frass/Fertilizer', count: '145' },
              { icon: '🌾', label: 'Feed Ingredients', count: '312' },
              { icon: '♻️', label: 'Waste Materials', count: '89' },
              { icon: '🏭', label: 'Processing', count: '56' },
              { icon: '🚚', label: 'Logistics', count: '34' },
              { icon: '🔬', label: 'Testing', count: '28' },
              { icon: '📚', label: 'Training', count: '12' },
            ].map((cat, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl mb-2">{cat.icon}</div>
                  <p className="font-semibold text-sm mb-1">{cat.label}</p>
                  <p className="text-xs text-muted-foreground">{cat.count} listings</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Suppliers */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Suppliers</h2>
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'MalawiBSF Ltd',
                category: 'Black Soldier Fly Specialist',
                rating: 4.8,
                verified: true,
                products: 45
              },
              {
                name: 'Lilongwe Protein Solutions',
                category: 'Feed Ingredient Supplier',
                rating: 4.6,
                verified: true,
                products: 32
              },
              {
                name: 'Waste to Value Malawi',
                category: 'Waste Aggregation',
                rating: 4.7,
                verified: true,
                products: 28
              },
            ].map((supplier, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold mb-3">
                    {supplier.name.charAt(0)}
                  </div>
                  <CardTitle className="text-lg">{supplier.name}</CardTitle>
                  <CardDescription>{supplier.category}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-semibold">{supplier.rating} ⭐</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Products</span>
                    <span className="font-semibold">{supplier.products}</span>
                  </div>
                  {supplier.verified && (
                    <div className="flex items-center gap-2 text-sm text-success">
                      <CheckCircle className="h-4 w-4" />
                      Verified Supplier
                    </div>
                  )}
                  <Button className="w-full mt-4">View Profile</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Button variant="outline" className="gap-2">
              Browse All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'BSF Larvae (Fresh)', price: 'MWK 450/kg', supplier: 'MalawiBSF Ltd', rating: 4.8 },
              { name: 'Dried Insect Protein', price: 'MWK 1,200/kg', supplier: 'Lilongwe Protein', rating: 4.6 },
              { name: 'Insect Frass', price: 'MWK 120/kg', supplier: 'Waste to Value', rating: 4.7 },
              { name: 'Premium Insect Oil', price: 'MWK 3,500/L', supplier: 'BioFeed Solutions', rating: 4.5 },
            ].map((product, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center text-3xl">
                    📦
                  </div>
                  <h3 className="font-semibold mb-1">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{product.supplier}</p>
                  <p className="text-lg font-bold text-primary mb-3">{product.price}</p>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-muted-foreground">⭐ {product.rating}</span>
                  </div>
                  <Button className="w-full">Request Quote</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Value Proposition */}
      <section className="py-12 border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Choose InsectHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: 'Verified Suppliers',
                description: 'All suppliers are verified and quality-assured for your confidence'
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: 'Fast Quotes',
                description: 'Get competitive quotes from multiple suppliers in hours'
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: 'Malawi-Focused',
                description: 'Built specifically for Malawi\'s insect and waste economy'
              },
              {
                icon: <Leaf className="h-8 w-8 text-primary" />,
                title: 'Sustainable',
                description: 'Supporting circular economy and waste-to-value solutions'
              },
            ].map((feature, idx) => (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Marketplace Growth</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Active Suppliers', value: '245', icon: <Users className="h-6 w-6 text-primary" /> },
              { label: 'Product Listings', value: '1,847', icon: <Package className="h-6 w-6 text-primary" /> },
              { label: 'Waste Streams', value: '89', icon: <Recycle className="h-6 w-6 text-primary" /> },
              { label: 'Monthly Transactions', value: '3,421', icon: <BarChart3 className="h-6 w-6 text-primary" /> },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Marketplace?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or supplying waste, InsectHub connects you with the right partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Briefcase className="h-5 w-5" />
              Become a Seller
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Users className="h-5 w-5" />
              Register as Buyer
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Content */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Industry Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Getting Started with Insect Farming',
                category: 'Guide',
                date: 'Mar 15, 2024'
              },
              {
                title: 'Waste-to-Insect Production: A Circular Economy Guide',
                category: 'Article',
                date: 'Mar 10, 2024'
              },
              {
                title: 'Quality Standards for Insect-Based Feed',
                category: 'Technical',
                date: 'Mar 8, 2024'
              },
            ].map((article, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <CardTitle className="text-base">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
