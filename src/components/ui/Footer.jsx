import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Platform Overview', path: '/platform-overview' },
        { label: 'Integrations', path: '/integrations-hub' },
        { label: 'Pricing', path: '/pricing-calculator' },
        { label: 'Security', path: '/security-compliance' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Getting Started', path: '/getting-started' },
        { label: 'Documentation', path: '/docs' },
        { label: 'API Reference', path: '/api' },
        { label: 'Support', path: '/support' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', path: '/privacy' },
        { label: 'Terms of Service', path: '/terms' },
        { label: 'Cookie Policy', path: '/cookies' },
        { label: 'Compliance', path: '/compliance' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link to="/homepage" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-growth flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Icon name="TrendingUp" size={24} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-foreground">FinTech Pro</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Transform your financial operations with intelligent automation and real-time insights. Built for growth-focused businesses.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} color="var(--color-foreground)" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections?.map((section) => (
                <div key={section?.title}>
                  <h3 className="text-sm font-semibold text-foreground mb-4">{section?.title}</h3>
                  <ul className="space-y-3">
                    {section?.links?.map((link) => (
                      <li key={link?.path}>
                        <Link
                          to={link?.path}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link?.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 FinTech Pro. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms
                </Link>
                <Link to="/cookies" className="hover:text-primary transition-colors">
                  Cookies
                </Link>
              </div>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                className="w-full sm:w-64"
              />
              <Button type="submit" variant="default" size="default">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;