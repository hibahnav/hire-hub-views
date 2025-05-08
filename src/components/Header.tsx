
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, Briefcase } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-brand-600" />
          <span className="font-bold text-xl text-foreground">JobHub</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Jobs
          </Link>
          <Link 
            to="/companies" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Companies</span>
            </div>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Post a Job</Button>
        </div>
      </div>
    </header>
  );
}
