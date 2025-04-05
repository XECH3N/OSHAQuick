
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialsProps {
  className?: string;
}

const Testimonials = ({ className }: TestimonialsProps) => {
  const testimonials = [
    {
      quote: "These documents saved my electrical business from a costly OSHA violation. The checklist is now our standard procedure for every job.",
      author: "Michael R.",
      title: "Master Electrician, ElectriFix Inc."
    },
    {
      quote: "As a small electrical contractor, I couldn't afford expensive compliance consultants. OSHAQuick's documents provide everything I need at a fraction of the cost.",
      author: "Sarah J.",
      title: "Owner, Precision Electric"
    },
    {
      quote: "The training document has been invaluable for onboarding new technicians. It's comprehensive yet easy to understand.",
      author: "David T.",
      title: "Operations Manager, PowerPros LLC"
    }
  ];

  return (
    <section className={cn('py-16 bg-gray-50', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Electricians Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of electrical professionals who trust our compliance documents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary-700">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
