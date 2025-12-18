import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/homepage', icon: 'Home' },
    { label: 'Platform', path: '/platform-overview', icon: 'Layout' },
    { label: 'Integrations', path: '/integrations-hub', icon: 'Puzzle' },
    { label: 'Pricing', path: '/pricing-calculator', icon: 'Calculator' },
    { label: 'Security', path: '/security-compliance', icon: 'Shield' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/homepage" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-growth flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Icon name="TrendingUp" size={24} color="#FFFFFF" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-foreground">FinTech Pro</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/getting-started">
                <Button variant="outline" size="sm">
                  Get Started
                </Button>
              </Link>
              <Button variant="default" size="sm" iconName="ArrowRight" iconPosition="right">
                Start Free Trial
              </Button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
      <div
        className={`fixed top-16 right-0 bottom-0 z-30 w-80 bg-background border-l border-border transform transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              onClick={toggleMobileMenu}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActivePath(item?.path)
                  ? 'bg-primary/10 text-primary' :'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              <Icon name={item?.icon} size={20} />
              <span>{item?.label}</span>
            </Link>
          ))}

          <div className="mt-6 pt-6 border-t border-border space-y-3">
            <Link to="/getting-started" onClick={toggleMobileMenu}>
              <Button variant="outline" fullWidth>
                Get Started
              </Button>
            </Link>
            <Button variant="default" fullWidth iconName="ArrowRight" iconPosition="right">
              Start Free Trial
            </Button>
          </div>
        </nav>
      </div>
      <div className="h-16" />
    </>
  );
};

export default Header;