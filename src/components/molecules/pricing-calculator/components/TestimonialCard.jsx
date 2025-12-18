import React from 'react';
import Icon from '../../../AppIcon';
import Image from '../../../AppImage';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)]?.map((_, index) => (
          <Icon key={index} name="Star" size={16} color="#F59E0B" fill="#F59E0B" />
        ))}
      </div>
      <p className="text-foreground mb-6 leading-relaxed">{testimonial?.quote}</p>
      <div className="flex items-center gap-4">
        <Image
          src={testimonial?.avatar}
          alt={testimonial?.avatarAlt}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial?.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial?.role}</p>
          <p className="text-sm text-muted-foreground">{testimonial?.company}</p>
        </div>
      </div>
      {testimonial?.metrics && (
        <div className="mt-6 pt-6 border-t border-border grid grid-cols-2 gap-4">
          {testimonial?.metrics?.map((metric, index) => (
            <div key={index}>
              <p className="text-2xl font-bold text-primary">{metric?.value}</p>
              <p className="text-sm text-muted-foreground">{metric?.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;