
import { useState, useEffect } from "react";
import { MainLayout } from "@/layouts/MainLayout";
import { SearchFilters } from "@/components/SearchFilters";
import { JobCard } from "@/components/JobCard";
import { jobs } from "@/mock/data";
import { Job } from "@/mock/data";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

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
    </MainLayout>
  );
};

export default Index;
