
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    location: string;
  }) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  
  const handleSearch = () => {
    onSearch({
      query,
      location
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <label htmlFor="search" className="text-sm font-medium mb-2 block">
            Job Title, Keywords, or Company
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="search"
              placeholder="Search for jobs"
              className="pl-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="location" className="text-sm font-medium mb-2 block">
            Country
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              id="location"
              placeholder="Country"
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button onClick={handleSearch} className="px-8 bg-[#0A66C2] hover:bg-[#004182]">
          <Search className="h-4 w-4 mr-2" />
          Search Jobs
        </Button>
      </div>
    </div>
  );
}
