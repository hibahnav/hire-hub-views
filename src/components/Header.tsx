
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building, Bot } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-10 shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-[#0A66C2]" />
          <span className="font-bold text-xl text-[#0A66C2]">Hibbot</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-[#666666] hover:text-[#0A66C2] transition-colors"
          >
            Jobs
          </Link>
          <Link 
            to="/companies" 
            className="text-[#666666] hover:text-[#0A66C2] transition-colors"
          >
            <div className="flex items-center space-x-1">
              <Building className="h-4 w-4" />
              <span>Companies</span>
            </div>
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#E6F7FF]">Sign In</Button>
          <Button className="bg-[#0A66C2] hover:bg-[#004182]">Post a Job</Button>
        </div>
      </div>
    </header>
  );
}
