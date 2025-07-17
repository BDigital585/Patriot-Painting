import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import InteriorPainting from "@/pages/InteriorPainting";
import ExteriorPainting from "@/pages/ExteriorPainting";
import Staining from "@/pages/Staining";
import PowerWashing from "@/pages/PowerWashing";
import GutterCleaning from "@/pages/GutterCleaning";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/services/interior-painting" component={InteriorPainting} />
      <Route path="/services/exterior-painting" component={ExteriorPainting} />
      <Route path="/services/staining" component={Staining} />
      <Route path="/services/power-washing" component={PowerWashing} />
      <Route path="/services/gutter-cleaning" component={GutterCleaning} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
