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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, FileText, Send } from 'lucide-react';

const RequestQuotePage: React.FC = () => {
  const [step, setStep] = useState<'form' | 'confirm' | 'success'>('form');
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    quantity: '',
    unit: '',
    specifications: '',
    deliveryLocation: '',
    requiredBy: '',
    budget: '',
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirm');
  };

  const handleConfirm = () => {
    setStep('success');
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted/30 border-b border-border py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-2">Request a Quotation</h1>
          <p className="text-muted-foreground">Get quotes from verified suppliers in minutes</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Steps */}
          <div className="flex gap-4 mb-12">
            {[
              { num: 1, label: 'Details', active: step === 'form' },
              { num: 2, label: 'Review', active: step === 'confirm' },
              { num: 3, label: 'Submitted', active: step === 'success' },
            ].map((s) => (
              <div key={s.num} className="flex-1">
                <div className={`flex items-center justify-center h-10 rounded-full mb-2 ${
                  s.active ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step === 'success' && s.num <= 3 ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    s.num
                  )}
                </div>
                <p className="text-xs text-center text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Form Step */}
          {step === 'form' && (
            <Card>
              <CardHeader>
                <CardTitle>What do you need?</CardTitle>
                <CardDescription>Provide details about your requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Product Details */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-sm">Product Details</h3>
                    
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select value={formData.category} onValueChange={(val) => handleSelectChange('category', val)}>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="live">Live Insects</SelectItem>
                          <SelectItem value="dried">Dried Insects</SelectItem>
                          <SelectItem value="oil">Insect Oil</SelectItem>
                          <SelectItem value="frass">Frass/Fertilizer</SelectItem>
                          <SelectItem value="feed">Feed Ingredients</SelectItem>
                          <SelectItem value="waste">Waste Materials</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="productName">Product Name *</Label>
                      <Input
                        id="productName"
                        name="productName"
                        placeholder="e.g., Black Soldier Fly Larvae"
                        value={formData.productName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quantity">Quantity *</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          placeholder="100"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="unit">Unit *</Label>
                        <Select value={formData.unit} onValueChange={(val) => handleSelectChange('unit', val)}>
                          <SelectTrigger id="unit">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">Kilograms (kg)</SelectItem>
                            <SelectItem value="ton">Metric Tons</SelectItem>
                            <SelectItem value="liter">Liters (L)</SelectItem>
                            <SelectItem value="unit">Units</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specifications">Specifications & Requirements</Label>
                      <Textarea
                        id="specifications"
                        name="specifications"
                        placeholder="e.g., Food grade, specific moisture content, packaging requirements..."
                        value={formData.specifications}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Delivery & Budget */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-sm">Delivery & Budget</h3>
                    
                    <div>
                      <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                      <Input
                        id="deliveryLocation"
                        name="deliveryLocation"
                        placeholder="City, District"
                        value={formData.deliveryLocation}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="requiredBy">Required By *</Label>
                        <Input
                          id="requiredBy"
                          name="requiredBy"
                          type="date"
                          value={formData.requiredBy}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget (Optional)</Label>
                        <Input
                          id="budget"
                          name="budget"
                          placeholder="MWK 50,000"
                          value={formData.budget}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h3 className="font-semibold text-sm">Your Contact Information</h3>
                    
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        placeholder="Your name"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+265 ..."
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <FileText className="h-4 w-4" />
                    Review & Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Confirm Step */}
          {step === 'confirm' && (
            <Card>
              <CardHeader>
                <CardTitle>Review Your Request</CardTitle>
                <CardDescription>Please verify the details before submitting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Category</p>
                        <p className="font-semibold">{formData.category}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Product</p>
                        <p className="font-semibold">{formData.productName}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Quantity</p>
                        <p className="font-semibold">{formData.quantity} {formData.unit}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Delivery</p>
                        <p className="font-semibold">{formData.deliveryLocation}</p>
                      </div>
                    </div>
                    {formData.specifications && (
                      <div>
                        <p className="text-xs text-muted-foreground">Specifications</p>
                        <p className="font-semibold">{formData.specifications}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-success/10 border border-success rounded-lg p-4">
                    <p className="text-sm text-foreground">
                      ✓ Your request will be sent to all verified suppliers in this category
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep('form')}
                    >
                      Back
                    </Button>
                    <Button
                      className="flex-1 gap-2"
                      onClick={handleConfirm}
                    >
                      <Send className="h-4 w-4" />
                      Send Request
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Success Step */}
          {step === 'success' && (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
                    <CheckCircle className="h-8 w-8 text-success" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">Request Submitted!</h2>
                <p className="text-muted-foreground mb-6">
                  Your quotation request has been sent to verified suppliers.
                  You'll receive responses within 24 hours.
                </p>
                
                <div className="bg-muted/30 rounded-lg p-6 mb-6 text-left space-y-3">
                  <h3 className="font-semibold">What happens next?</h3>
                  <ol className="space-y-2 text-sm">
                    <li>✓ Suppliers review your request</li>
                    <li>✓ You receive quotes via email</li>
                    <li>✓ Compare offers and negotiate</li>
                    <li>✓ Finalize and place order</li>
                  </ol>
                </div>

                <Button className="w-full gap-2">
                  View My Requests
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default RequestQuotePage;
