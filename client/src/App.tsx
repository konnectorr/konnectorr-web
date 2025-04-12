import React from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { PageLayout } from "@/components/layout/page-layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy-fixed";
import TermsOfService from "@/pages/terms-of-service-fixed";
import AvailabilityChecker from "@/pages/availability-checker-simple";
import AvailabilityCheckerFCC from "@/pages/availability-checker-fcc";
import SignUpPage from "@/pages/sign-up";
import WeatherImpactPage from "@/pages/weather-impact-fixed";
import AdminPage from "@/pages/admin";
import LoginPage from "@/pages/login";

// Provider Pages
import DirectvPage from "@/pages/providers/directv";
import DishPage from "@/pages/providers/dish";
import SpectrumPage from "@/pages/providers/spectrum";
import XfinityPage from "@/pages/providers/xfinity";
import OptimumPage from "@/pages/providers/optimum";
import ATTPage from "@/pages/providers/att";

// Internet Pages
import InternetPage from "@/pages/internet/index-fixed";
import FiberInternetPage from "@/pages/internet/fiber-fixed";
import CableInternetPage from "@/pages/internet/cable-fixed";
import DSLInternetPage from "@/pages/internet/dsl-fixed";
import SatelliteInternetPage from "@/pages/internet/satellite-fixed";
import EsimPage from "@/pages/internet/esim";
import InternetComparisonPage from "@/pages/internet/comparison";

// IPTV Pages
import IPTVIndexPage from "@/pages/iptv";
import QwickTVPage from "@/pages/iptv/qwicktv";
import QwickTVPlansPage from "@/pages/iptv/qwicktv-plans";

// Resources Pages
import ResourcesIndex from "@/pages/resources";
import BuyingGuides from "@/pages/resources/buying-guides-fixed";
import FAQResourcePage from "@/pages/resources/faq-fixed";
import ToolsCalculatorsPage from "@/pages/resources/tools";
import EducationalArticlesPage from "@/pages/resources/educational-articles-fixed";
import EnhancedEducationalArticlesPage from "@/pages/resources/educational-articles-enhanced";
import IndustryNewsPage from "@/pages/resources/industry-news";
import SpeedTestPage from "@/pages/resources/speed-test-fixed";
import PricingCalculator from "@/pages/resources/pricing-calculator";
import BillAnalyzer from "@/pages/resources/bill-analyzer";
import UIComponentsPage from "@/pages/resources/ui-components";

// Create a wrapped component with layout
const withLayout = (Component: React.ComponentType<any>, hideHeader = false, hideFooter = false) => {
  return (props: any) => (
    <PageLayout hideHeader={hideHeader} hideFooter={hideFooter}>
      <Component {...props} />
    </PageLayout>
  );
};

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <Switch>
      <Route path="/" component={withLayout(Home)} />
      <Route path="/privacy-policy" component={withLayout(PrivacyPolicy)} />
      <Route path="/terms-of-service" component={withLayout(TermsOfService)} />
      <Route path="/availability-checker" component={withLayout(AvailabilityChecker)} />
      <Route path="/availability-checker-fcc" component={withLayout(AvailabilityCheckerFCC)} />
      <Route path="/sign-up" component={withLayout(SignUpPage)} />
      <Route path="/weather-impact" component={withLayout(WeatherImpactPage)} />
      <Route path="/login" component={withLayout(LoginPage)} />
      <Route path="/admin" component={withLayout(AdminPage)} />
      
      {/* Provider Routes */}
      <Route path="/providers/directv" component={withLayout(DirectvPage)} />
      <Route path="/providers/dish" component={withLayout(DishPage)} />
      <Route path="/providers/spectrum" component={withLayout(SpectrumPage)} />
      <Route path="/providers/xfinity" component={withLayout(XfinityPage)} />
      <Route path="/providers/optimum" component={withLayout(OptimumPage)} />
      <Route path="/providers/att" component={withLayout(ATTPage)} />
      
      {/* Internet Routes */}
      <Route path="/internet" component={withLayout(InternetPage)} />
      <Route path="/internet/fiber" component={withLayout(FiberInternetPage)} />
      <Route path="/internet/cable" component={withLayout(CableInternetPage)} />
      <Route path="/internet/dsl" component={withLayout(DSLInternetPage)} />
      <Route path="/internet/satellite" component={withLayout(SatelliteInternetPage)} />
      <Route path="/internet/esim" component={withLayout(EsimPage)} />
      <Route path="/internet/comparison" component={withLayout(InternetComparisonPage)} />
      
      {/* IPTV Routes */}
      <Route path="/iptv" component={withLayout(IPTVIndexPage)} />
      <Route path="/iptv/qwicktv" component={withLayout(QwickTVPage)} />
      <Route path="/iptv/qwicktv-plans" component={withLayout(QwickTVPlansPage)} />
      
      {/* Resources Routes */}
      <Route path="/resources" component={withLayout(ResourcesIndex)} />
      <Route path="/resources/buying-guides" component={withLayout(BuyingGuides)} />
      <Route path="/resources/faq" component={withLayout(FAQResourcePage)} />
      <Route path="/resources/tools" component={withLayout(ToolsCalculatorsPage)} />
      <Route path="/resources/educational-articles" component={withLayout(EnhancedEducationalArticlesPage)} />
      <Route path="/resources/educational-articles-old" component={withLayout(EducationalArticlesPage)} />
      <Route path="/resources/industry-news" component={withLayout(IndustryNewsPage)} />
      <Route path="/resources/speed-test" component={withLayout(SpeedTestPage)} />
      <Route path="/resources/pricing-calculator" component={withLayout(PricingCalculator)} />
      <Route path="/resources/bill-analyzer" component={withLayout(BillAnalyzer)} />
      <Route path="/resources/ui-components" component={withLayout(UIComponentsPage)} />
      
      <Route component={withLayout(NotFound)} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
