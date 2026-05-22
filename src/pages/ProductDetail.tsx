import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Package,
  MapPin,
  Truck,
  Calendar,
  CheckCircle,
  Award,
  Share2,
  Heart,
  MessageSquare,
  Download,
  Star,
  ArrowRight
} from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const product = {
    id: 1,
    name: 'Black Soldier Fly Larvae - Premium Fresh Grade',
    category: 'Live Insects',
    supplier: 'MalawiBSF Ltd',
    supplierRating: 4.8,
    supplierReviews: 127,
    price: 'MWK 450',
    unit: 'per kg',
    moq: '50 kg',
    availability: '2,500 kg',
    leadTime: '2-3 days',
    location: 'Lilongwe, Malawi',
    verified: true,
    featured: true,
    description: 'High-quality Black Soldier Fly larvae suitable for animal feed, aquaculture, and poultry applications. Our larvae are farm-raised under controlled conditions ensuring consistent quality and safety standards.',
    specifications: {
      'Protein Content': '40-45%',
      'Fat Content': '35-40%',
      'Moisture': '<12%',
      'Grade': 'Premium Food Grade',
      'Packaging': '20kg bags (custom available)',
      'Shelf Life': '2 weeks (fresh), 6 months (dried)',
      'Storage': 'Cool, dry conditions',
      'Certification': 'ISO 9001, Food Grade'
    },
    images: [
      'https://images.unsplash.com/photo-1599599810694-b5ac4dd33c4b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599599810694-b5ac4dd33c4b?w=800&h=600&fit=crop',
    ],
    certifications: ['ISO 9001', 'Food Grade', 'Quality Assured'],
    documents: [
      { name: 'Product Datasheet', type: 'PDF', size: '2.4 MB' },
      { name: 'Certification Document', type: 'PDF', size: '1.8 MB' },
      { name: 'Quality Report', type: 'PDF', size: '3.1 MB' }
    ],
    reviews: [
      {
        id: 1,
        reviewer: 'Malawi Feed Corp',
        rating: 5,
        date: '2024-03-15',
        comment: 'Excellent quality and consistent delivery. Highly recommend!'
      },
      {
        id: 2,
        reviewer: 'Aquaculture Solutions',
        rating: 4.5,
        date: '2024-03-10',
        comment: 'Great product. Would appreciate faster response to inquiries.'
      },
      {
        id: 3,
        reviewer: 'Pet Food Industries',
        rating: 5,
        date: '2024-03-05',
        comment: 'Premium quality. Our customers love it.'
      }
    ],
    relatedProducts: [
      { name: 'Dried Insect Protein Powder', price: 'MWK 1,200/kg', rating: 4.6 },
      { name: 'Premium Insect Oil', price: 'MWK 3,500/L', rating: 4.5 },
      { name: 'Organic Frass Fertilizer', price: 'MWK 120/kg', rating: 4.7 }
    ]
  };

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <a href="/products" className="hover:text-foreground">Products</a>
            <ArrowRight className="h-4 w-4" />
            <a href="/products?category=live" className="hover:text-foreground">Live Insects</a>
            <ArrowRight className="h-4 w-4" />
            <span>{product.name}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Images */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-96 flex items-center justify-center text-6xl mb-4">
                  🐛
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((_, idx) => (
                    <div key={idx} className="bg-muted rounded-lg h-20 flex items-center justify-center text-2xl cursor-pointer hover:opacity-75 transition">
                      🐛
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Product Info */}
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <div className="flex items-center gap-4 text-sm">
                      <Badge variant="outline">{product.category}</Badge>
                      {product.verified && (
                        <div className="flex items-center gap-1 text-success">
                          <CheckCircle className="h-4 w-4" />
                          Verified
                        </div>
                      )}
                      {product.featured && (
                        <div className="flex items-center gap-1 text-accent">
                          <Award className="h-4 w-4" />
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1" onClick={() => setLiked(!liked)}>
                      <Heart className={`h-4 w-4 ${liked ? 'fill-current text-destructive' : ''}`} />
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Price and Key Details */}
                <div className="bg-muted/50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price</p>
                      <p className="text-2xl font-bold text-primary">{product.price}/{product.unit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Minimum Order</p>
                      <p className="font-semibold">{product.moq}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Available</p>
                      <p className="font-semibold">{product.availability}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Lead Time</p>
                      <p className="font-semibold">{product.leadTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {product.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Delivery</p>
                      <p className="font-semibold flex items-center gap-1">
                        <Truck className="h-4 w-4" />
                        Arranged
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-bold mb-3">Product Description</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-sm text-muted-foreground mb-1">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs */}
            <Tabs defaultValue="certifications" className="mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="certifications">
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {product.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                          <span className="font-semibold">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {product.documents.map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 border border-border rounded-lg">
                          <div>
                            <p className="font-semibold">{doc.name}</p>
                            <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {product.reviews.map((review) => (
                        <div key={review.id} className="border-b border-border pb-4 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-semibold">{review.reviewer}</p>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Supplier Card */}
            <Card className="mb-6 sticky top-24">
              <CardHeader>
                <div className="flex items-start gap-3 mb-3">
                  <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{product.supplier}</h3>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span>{product.supplierRating}</span>
                      <span className="text-muted-foreground">({product.supplierReviews})</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Request Quote
                </Button>
                <Button variant="outline" className="w-full">
                  View Supplier Profile
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Package className="h-4 w-4" />
                  Other Products
                </Button>
              </CardContent>
            </Card>

            {/* Related Products */}
            <Card>
              <CardHeader>
                <CardTitle>Related Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.relatedProducts.map((related, idx) => (
                  <div key={idx} className="p-3 border border-border rounded-lg hover:shadow-md transition cursor-pointer">
                    <p className="font-semibold text-sm mb-1">{related.name}</p>
                    <p className="text-sm text-primary font-bold mb-2">{related.price}</p>
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-accent text-accent" />
                      <span>{related.rating}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
