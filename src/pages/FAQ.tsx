import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Search, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I register as a buyer?',
          a: 'To register as a buyer, click "Register" in the top navigation, select "Buyer", and fill in your company details. You can start browsing and requesting quotes immediately after email verification.'
        },
        {
          q: 'How do I become a seller?',
          a: 'Click "Register", select "Seller", and complete your company profile. You\'ll need to verify your business registration and contact information. Once approved by our team, you can start listing products.'
        },
        {
          q: 'What documents do I need to verify?',
          a: 'We require a valid business registration certificate, tax identification number, and proof of address. Additional certifications (ISO, food grade, etc.) enhance your credibility.'
        },
      ]
    },
    {
      category: 'Products & Listings',
      questions: [
        {
          q: 'How do I create a product listing?',
          a: 'In your seller dashboard, click "Create Listing". Fill in product details including name, category, price, MOQ, specifications, and upload images. Add certifications for verification.'
        },
        {
          q: 'What categories can I list in?',
          a: 'We support: Live Insects, Dried Insects, Insect Oil, Frass, Feed Ingredients, Waste Materials, Processing Services, Logistics, Testing, and Training.'
        },
        {
          q: 'How are products verified?',
          a: 'Our team reviews listings for compliance, accuracy, and quality. You can upload certifications and test reports to speed up verification. Verified products appear with a badge.'
        },
      ]
    },
    {
      category: 'Buying & Quotes',
      questions: [
        {
          q: 'How do I request a quote?',
          a: 'Browse products or use "Request Quote" to specify your needs. Select suppliers, enter quantity and delivery location. Suppliers will respond with prices and terms within 24 hours.'
        },
        {
          q: 'How are prices negotiated?',
          a: 'After receiving quotes, you can message suppliers directly to negotiate terms, bulk discounts, and delivery arrangements. The platform facilitates communication securely.'
        },
        {
          q: 'What payment methods are supported?',
          a: 'We support bank transfers, mobile money, and escrow services. Payment terms are arranged directly between buyer and seller through our secure messaging system.'
        },
      ]
    },
    {
      category: 'Waste Marketplace',
      questions: [
        {
          q: 'How do I list waste materials?',
          a: 'Go to Waste Marketplace, click "List Waste Stream". Describe waste type, volume, frequency, contamination level, and pickup terms. Our team verifies suitability for insect production.'
        },
        {
          q: 'What waste types are accepted?',
          a: 'Brewery waste, market waste, agricultural residues, food processing waste, grain by-products, and organic municipal waste. All must be suitable for insect production.'
        },
        {
          q: 'How do collection arrangements work?',
          a: 'Buyers request collection, you confirm availability and terms. Logistics partners coordinate pickup or delivery. Payment is processed through the platform.'
        },
      ]
    },
    {
      category: 'Verification & Trust',
      questions: [
        {
          q: 'What is the verification process?',
          a: 'We verify business registration, contact information, and certifications. Verified suppliers get a badge. Additional verification levels unlock premium features.'
        },
        {
          q: 'How are reviews and ratings used?',
          a: 'Buyers and sellers rate each other after transactions. Ratings build reputation and appear on profiles. High-rated suppliers rank higher in search results.'
        },
        {
          q: 'What if I have a dispute?',
          a: 'Contact our support team with details. We mediate disputes and can hold funds in escrow. Serious violations may result in account suspension.'
        },
      ]
    },
    {
      category: 'Compliance & Quality',
      questions: [
        {
          q: 'What quality standards apply?',
          a: 'Products must meet food/feed grade standards as applicable. We require certifications for regulated products. Quality reports and test results are encouraged.'
        },
        {
          q: 'Is traceability required?',
          a: 'For food and feed products, we maintain batch tracking. Suppliers should provide origin, production date, and storage information for transparency.'
        },
        {
          q: 'Are there export regulations?',
          a: 'Yes. Malawi has specific export requirements for insect products. We provide compliance guides. Sellers are responsible for meeting destination country regulations.'
        },
      ]
    },
  ];

  const filteredFAQs = searchTerm.trim() === '' 
    ? faqCategories
    : faqCategories.map(cat => ({
        ...cat,
        questions: cat.questions.filter(q => 
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(cat => cat.questions.length > 0);

  return (
    <Layout>
      <section className="bg-muted/30 border-b border-border py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about InsectHub Marketplace
          </p>

          {/* Search */}
          <div className="max-w-md">
            <div className="relative">
              <Input
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <h3 className="font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              {faqCategories.map((cat, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    const element = document.getElementById(`cat-${idx}`);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {cat.category}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3 space-y-8">
            {filteredFAQs.map((category, catIdx) => (
              <div key={catIdx} id={`cat-${catIdx}`}>
                <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem key={qIdx} value={`${catIdx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent>
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <Card>
                <CardContent className="pt-12 pb-12 text-center">
                  <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">No results found for "{searchTerm}"</p>
                  <Button variant="outline" onClick={() => setSearchTerm('')}>
                    Clear Search
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="pt-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Didn't find your answer?</h3>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help. Contact us anytime.
              </p>
              <Button className="gap-2">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FAQPage;
