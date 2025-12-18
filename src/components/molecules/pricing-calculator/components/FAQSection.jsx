import React, { useState } from 'react';
import Icon from '../../../AppIcon';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(0);

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits to your account. Your data and settings remain intact during plan changes.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and ACH bank transfers for annual plans. Enterprise customers can also arrange invoice billing with NET 30 terms.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial on all plans with no credit card required. You\'ll have full access to all features during the trial period. After the trial, you can choose to continue with a paid plan or cancel at no cost.'
    },
    {
      question: 'What happens if I exceed my transaction limit?',
      answer: 'If you approach your transaction limit, we\'ll notify you via email. You can either upgrade to a higher plan or purchase additional transaction packs. We never interrupt your service - any overages are billed at $0.10 per transaction.'
    },
    {
      question: 'Do you offer discounts for annual billing?',
      answer: 'Yes! Annual billing saves you 20% compared to monthly billing. For example, the Professional plan costs $299/month or $2,870/year (saving $718). Enterprise customers can discuss custom annual contracts with additional discounts.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee on all annual plans. If you\'re not completely satisfied within the first 30 days, we\'ll provide a full refund, no questions asked. Monthly plans can be cancelled anytime without penalty.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support with 24-hour response time. Professional plans add priority support with 4-hour response time. Enterprise plans include phone support, dedicated account manager, and 1-hour response SLA for critical issues.'
    },
    {
      question: 'Are there any setup fees or hidden costs?',
      answer: 'No setup fees, no hidden costs. The price you see is the price you pay. All features listed in your plan are included. The only additional costs would be if you choose optional add-ons or exceed your transaction limits.'
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Frequently Asked Questions</h3>
        <p className="text-muted-foreground">Everything you need to know about pricing</p>
      </div>
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/50 transition-colors"
            >
              <span className="font-semibold text-foreground pr-4">{faq?.question}</span>
              <Icon
                name={expandedFAQ === index ? 'ChevronUp' : 'ChevronDown'}
                size={20}
                color="var(--color-primary)"
                className="flex-shrink-0"
              />
            </button>
            {expandedFAQ === index && (
              <div className="p-6 pt-0 bg-background">
                <p className="text-muted-foreground leading-relaxed">{faq?.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;