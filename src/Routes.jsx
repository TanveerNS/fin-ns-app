import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import IntegrationsHub from './pages/integrations-hub';
import PlatformOverview from './pages/platform-overview';
import PricingCalculator from './pages/pricing-calculator';
import GettingStarted from './pages/getting-started';
import SecurityCompliance from './pages/security-compliance';
import Homepage from './pages/homepage';
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/integrations-hub" element={<IntegrationsHub />} />
        <Route path="/platform-overview" element={<PlatformOverview />} />
        <Route path="/pricing-calculator" element={<PricingCalculator />} />
        <Route path="/getting-started" element={<GettingStarted />} />
        <Route path="/security-compliance" element={<SecurityCompliance />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
