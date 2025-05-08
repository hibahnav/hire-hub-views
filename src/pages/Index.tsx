
import { useState, useEffect } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/mock/data";
import { Job } from "@/mock/data";
import { Button } from "@/components/ui/button";
import { Briefcase, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState({
    query: "",
    location: "",
  });

  useEffect(() => {
    filterJobs(filters);
  }, [filters]);

  const filterJobs = (filters: {
    query: string;
    location: string;
  }) => {
    let result = [...jobs];
    
    if (filters.query) {
      const searchTerms = filters.query.toLowerCase().split(' ');
      result = result.filter(job => 
        searchTerms.some(term => 
          job.title.toLowerCase().includes(term) || 
          job.company.name.toLowerCase().includes(term) ||
          job.description.toLowerCase().includes(term)
        )
      );
    }
    
    if (filters.location) {
      const locationTerm = filters.location.toLowerCase();
      result = result.filter(job => 
        job.location.toLowerCase().includes(locationTerm)
      );
    }
    
    setFilteredJobs(result);
  };

  const handleSearch = (newFilters: {
    query: string;
    location: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <MainLayout>
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0A66C2] mb-4">
            Better than LinkedIn
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover thousands of job opportunities with top employers to find your next career.
          </p>
        </div>
        
        <SearchFilters onSearch={handleSearch} />
      </section>
      
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5 text-[#0A66C2]" />
            <h2 className="text-2xl font-semibold">Featured Jobs</h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing {filteredJobs.length} jobs
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search filters
            </p>
          </div>
        )}
      </section>
      
      <section>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-[#0A66C2]" />
            <h2 className="text-2xl font-semibold">Browse by Company</h2>
          </div>
          <Link to="/companies">
            <Button variant="outline" className="border-[#0A66C2] text-[#0A66C2] hover:bg-[#E6F7FF]">View All Companies</Button>
          </Link>
        </div>
        
        <div className="bg-gradient-to-r from-[#E6F7FF] to-[#F5F9FC] rounded-lg p-6 border border-[#E0E6EB]">
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium mb-2">Explore Top Companies</h3>
            <p className="text-muted-foreground">
              Discover great places to work
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/companies">
              <Button className="px-8 bg-[#0A66C2] hover:bg-[#004182]">
                Browse Companies
                <Building className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
