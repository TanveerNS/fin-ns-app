import React, { useState } from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';
import Button from '../../../ui/Button';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CFO',
    company: 'TechVenture Inc.',
    industry: 'SaaS',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1e531637b-1764874730554.png",
    thumbnailAlt: 'Professional woman CFO Sarah Mitchell in navy business suit smiling confidently in modern corporate office with glass walls',
    quote: 'FinTech Pro transformed our financial operations. We reduced month-end close time by 75% and gained real-time visibility into our cash position.',
    metrics: { saved: '120 hrs/month', improved: '75%', roi: '340%' },
    videoUrl: 'https://example.com/video1.mp4'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder & CEO',
    company: 'GrowthLabs',
    industry: 'E-Commerce',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1649ccff3-1763295333634.png",
    thumbnailAlt: 'Asian male entrepreneur Michael Chen in casual business attire standing in bright modern startup office with team working in background',
    quote: 'The automated reconciliation alone saved us $45K annually. The predictive cash flow feature helped us avoid a potential cash crunch.',
    metrics: { saved: '$45K/year', accuracy: '99.9%', growth: '23%' },
    videoUrl: 'https://example.com/video2.mp4'
  },
  {
    id: 3,
    name: 'Jennifer Rodriguez',
    role: 'Finance Director',
    company: 'Retail Solutions Co.',
    industry: 'Retail',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_12486f678-1765307856418.png",
    thumbnailAlt: 'Hispanic female finance director Jennifer Rodriguez in professional gray suit reviewing financial documents at executive desk with dual monitors',
    quote: 'Managing multiple payment providers was a nightmare. FinTech Pro unified everything and gave us insights we never had before.',
    metrics: { providers: '12 integrated', efficiency: '87%', visibility: '100%' },
    videoUrl: 'https://example.com/video3.mp4'
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Hear From Our Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from finance leaders who transformed their operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) =>
          <div
            key={testimonial?.id}
            className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">

              <div className="relative h-64 overflow-hidden">
                <Image
                src={testimonial?.thumbnail}
                alt={testimonial?.thumbnailAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <button
                onClick={() => setActiveVideo(testimonial?.id)}
                className="absolute inset-0 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                aria-label={`Play video testimonial from ${testimonial?.name}`}>

                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Play" size={24} color="#FFFFFF" />
                  </div>
                </button>
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary/90 rounded-full">
                  <span className="text-xs font-medium text-white">{testimonial?.industry}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{testimonial?.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial?.role} at {testimonial?.company}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  "{testimonial?.quote}"
                </p>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {Object.entries(testimonial?.metrics)?.map(([key, value], index) =>
                <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
            View All Success Stories
          </Button>
        </div>
      </div>
      {activeVideo &&
      <div
        className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={() => setActiveVideo(null)}>

          <div className="max-w-4xl w-full bg-card rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e?.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Customer Testimonial</h3>
              <button
              onClick={() => setActiveVideo(null)}
              className="w-8 h-8 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
              aria-label="Close video">

                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="Video" size={48} color="var(--color-muted-foreground)" className="mx-auto mb-4" />
                <p className="text-muted-foreground">Video player would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      }
    </section>);

};

export default VideoTestimonials;