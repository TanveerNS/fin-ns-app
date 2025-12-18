import React, { useState } from 'react';
import Image from '../../../AppImage';
import Icon from '../../../AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    quote: "FinTech Pro transformed our financial operations completely. We went from spending 40 hours a month on reconciliation to just 8 hours. The ROI was immediate and the insights have been game-changing for our growth strategy.",
    author: "Sarah Mitchell",
    role: "CEO & Founder",
    company: "TechStart Solutions",
    revenue: "$2.5M ARR",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_141b6fda2-1763295319855.png",
    imageAlt: "Professional headshot of Sarah Mitchell, confident female CEO with shoulder-length brown hair wearing navy blazer against neutral background",
    metrics: [
    { label: "Time Saved", value: "80%" },
    { label: "Revenue Growth", value: "156%" }]

  },
  {
    quote: "The automation capabilities are incredible. What used to take our finance team days now happens automatically. We\'ve been able to redirect that time to strategic planning and business development.",
    author: "Michael Chen",
    role: "CFO",
    company: "GrowthScale Inc",
    revenue: "$8M ARR",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_123ed9400-1763299000119.png",
    imageAlt: "Professional headshot of Michael Chen, Asian male CFO with short black hair in dark suit and glasses with confident smile",
    metrics: [
    { label: "Efficiency Gain", value: "300%" },
    { label: "Error Reduction", value: "95%" }]

  },
  {
    quote: "As a fast-growing startup, we needed financial tools that could scale with us. FinTech Pro not only met our current needs but has grown seamlessly as we've expanded from 10 to 100 employees.",
    author: "Emily Rodriguez",
    role: "VP of Operations",
    company: "InnovateCo",
    revenue: "$5M ARR",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1975607e9-1763295500639.png",
    imageAlt: "Professional headshot of Emily Rodriguez, Hispanic female VP with long dark hair wearing white blouse with warm professional smile",
    metrics: [
    { label: "Team Growth", value: "10x" },
    { label: "Cost Savings", value: "$120K/yr" }]

  }];


  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full mb-4">
            <Icon name="Star" size={16} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Customer Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by Growth-Focused Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how companies like yours are transforming their financial operations and accelerating growth with FinTech Pro.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={24} color="var(--color-warning)" />
                  )}
                </div>

                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed">
                  "{testimonials?.[activeTestimonial]?.quote}"
                </blockquote>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                      src={testimonials?.[activeTestimonial]?.image}
                      alt={testimonials?.[activeTestimonial]?.imageAlt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-bold text-foreground">
                      {testimonials?.[activeTestimonial]?.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials?.[activeTestimonial]?.role}
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {testimonials?.[activeTestimonial]?.company} • {testimonials?.[activeTestimonial]?.revenue}
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 pt-4">
                  {testimonials?.[activeTestimonial]?.metrics?.map((metric, index) =>
                  <div key={index} className="space-y-1">
                      <div className="text-3xl font-bold text-primary">{metric?.value}</div>
                      <div className="text-sm text-muted-foreground">{metric?.label}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex lg:flex-col items-center justify-center gap-4">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Previous testimonial">

                  <Icon name="ChevronLeft" size={24} />
                </button>
                
                <div className="flex lg:flex-col gap-2">
                  {testimonials?.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === activeTestimonial ?
                    'bg-primary w-8 lg:w-2 lg:h-8' : 'bg-border hover:bg-primary/50'}`
                    }
                    aria-label={`Go to testimonial ${index + 1}`} />

                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Next testimonial">

                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;