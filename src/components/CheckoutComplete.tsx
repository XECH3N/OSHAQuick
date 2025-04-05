
import React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CheckoutCompleteProps {
  productName?: string;
  email?: string;
}

const CheckoutComplete = ({ productName = "OSHA Documentation", email = "" }: CheckoutCompleteProps) => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="container mx-auto py-16 px-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <Check className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <CardTitle className="text-center text-2xl">Thank You For Your Purchase!</CardTitle>
          <CardDescription className="text-center">
            Your payment has been processed successfully
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-600">
              We've sent your <span className="font-medium">{productName}</span> to:
            </p>
            <p className="font-medium mt-1">{email}</p>
          </div>
          <p className="text-sm text-gray-500 text-center">
            Please check your inbox (and spam folder) for your PDF.
            If you don't receive it within 5 minutes, please contact
            <a href="mailto:support@oshaquick.com" className="text-primary font-medium"> support@oshaquick.com</a>
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => navigate('/')} className="w-full">
            Return to Homepage ({countdown})
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutComplete;
