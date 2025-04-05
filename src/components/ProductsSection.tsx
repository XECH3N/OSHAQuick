
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShieldCheck, AlertTriangle, Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ProductsSectionProps {
  className?: string;
}

const MotionCard = motion(Card);

interface ProductInfo {
  id: string;
  name: string;
  price: number;
  paypalId?: string;
}

const ProductsSection = ({ className }: ProductsSectionProps) => {
  const { toast } = useToast();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<ProductInfo | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const products: ProductInfo[] = [
    { 
      id: 'compliance-checklist', 
      name: 'Compliance Checklist', 
      price: 7.99,
      paypalId: 'compliance-checklist'
    },
    { 
      id: 'violation-report', 
      name: 'Violation Report', 
      price: 4.99,
      paypalId: 'violation-report'
    },
    { 
      id: 'training-document', 
      name: 'Training Document', 
      price: 7.99,
      paypalId: 'training-document'
    },
  ];

  const bundlePrice = 14.99;
  const bundleId = 'complete-bundle';

  // Add PayPal script to the page when component mounts
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=sb&currency=USD';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePurchase = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setCurrentProduct(product);
      setIsCheckoutOpen(true);
    }
  };

  const handleBundlePurchase = () => {
    setCurrentProduct({
      id: bundleId,
      name: 'Complete Bundle',
      price: bundlePrice
    });
    setIsCheckoutOpen(true);
  };

  const onSubmit = async (values: { email: string }) => {
    if (!currentProduct) return;
    
    setIsSubmitting(true);
    
    // Here you would normally send this to your backend
    // For now, we'll simulate success
    try {
      // This would be an API call to your backend
      // await fetch('/api/send-product', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     email: values.email,
      //     productId: currentProduct.id,
      //     paymentId: 'simulated-payment-id'
      //   }),
      // });
      
      // Simulate a server delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Product purchased successfully!",
        description: `We've sent the ${currentProduct.name} to ${values.email}`,
      });
      
      setIsCheckoutOpen(false);
      form.reset();
    } catch (error) {
      toast({
        title: "There was a problem",
        description: "We couldn't process your purchase. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLimitedTimeOffer = true; // You would calculate this based on date

  return (
    <section className={cn('py-16 bg-white', className)} id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional OSHA Documentation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything electricians need to stay compliant and protect their business
          </p>
        </div>

        {isLimitedTimeOffer && (
          <motion.div 
            className="bg-gradient-to-r from-primary-700 to-secondary-600 p-6 rounded-xl text-white text-center mb-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">Limited Time Offer</h3>
            <p className="text-xl mb-4">Get all 3 premium PDFs for only $14.99 until April 17, 2025</p>
            <div className="flex justify-center">
              <Button 
                onClick={handleBundlePurchase}
                className="bg-white text-primary-700 hover:bg-gray-100 text-lg py-6 px-8 shadow-md"
              >
                Get The Complete Bundle
                <span className="ml-2 text-xs line-through text-gray-500">$20.97</span>
              </Button>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <ShieldCheck className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Compliance Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Complete checklist to ensure your electrical work meets all OSHA requirements.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Job site safety verification</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Equipment compliance checks</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Wiring safety protocols</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$7.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('compliance-checklist')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>

          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <AlertTriangle className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Violation Report</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Professional template for documenting and addressing safety violations.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Detailed violation documentation</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Corrective action planning</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Follow-up tracking system</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$4.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('violation-report')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>

          <MotionCard 
            className="border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-primary-100">
                  <FileText className="h-10 w-10 text-primary-700" />
                </div>
              </div>
              <CardTitle className="text-2xl">Training Document</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Comprehensive training manual for electrical safety compliance.
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">OSHA-compliant safety procedures</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Risk assessment guidelines</span>
                </div>
                <div className="flex items-center">
                  <Check size={16} className="text-secondary mr-2" />
                  <span className="text-sm">Certificate of completion template</span>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary-700">$7.99</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                className="w-full bg-primary-700 hover:bg-primary-800"
                onClick={() => handlePurchase('training-document')}
              >
                Buy Now
              </Button>
            </CardFooter>
          </MotionCard>
        </div>
      </div>

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              {currentProduct && (
                <span>You're purchasing: {currentProduct.name} for ${currentProduct.price}</span>
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="my-4">
            <div className="flex justify-center mb-4">
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" className="w-full">
                <input type="hidden" name="cmd" value="_xclick" />
                <input type="hidden" name="business" value="sachinthelordt@gmail.com" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value={currentProduct?.name || ''} />
                <input type="hidden" name="amount" value={currentProduct?.price?.toString() || ''} />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="button_subtype" value="services" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="tax_rate" value="0" />
                <input type="hidden" name="shipping" value="0" />
                <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                <input 
                  type="image" 
                  src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" 
                  name="submit" 
                  alt="PayPal - The safer, easier way to pay online!" 
                  className="mx-auto"
                />
                <img 
                  alt="" 
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" 
                  width="1" 
                  height="1" 
                  style={{ border: 0 }} 
                />
              </form>
            </div>

            <div className="text-center my-4">
              <p className="text-sm text-gray-500">After payment, enter your email to receive your PDF</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="flex items-center">
                          <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="you@example.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Send Me My PDF"}
                </Button>
              </form>
            </Form>
          </div>

          <DialogFooter className="flex flex-col">
            <p className="text-xs text-center text-gray-500 mt-4">
              Your PDF will be sent to your email address immediately after completing both payment and email submission.
            </p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
