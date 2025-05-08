
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { companies, jobs } from "@/mock/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { JobCard } from "@/components/JobCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Building, Globe, MapPin, Users } from "lucide-react";

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const company = companies.find(company => company.id === id);
  const companyJobs = jobs.filter(job => job.company.id === id);
  
  if (!company) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The company you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Link>
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="h-24 w-24 rounded-md bg-secondary flex items-center justify-center mb-4 md:mb-0 md:mr-6">
            <Building className="h-12 w-12 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground mb-2">{company.name}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{company.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{company.size}</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-800 hover:underline"
                >
                  {company.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline">Follow Company</Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">About {company.name}</h2>
            <p className="text-foreground">
              {company.description}
            </p>
          </Card>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Open Positions ({companyJobs.length})</h2>
            </div>
            
            {companyJobs.length > 0 ? (
              <div className="space-y-6">
                {companyJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <Card className="p-6 text-center">
                <p className="text-muted-foreground">
                  This company doesn't have any open positions at the moment.
                </p>
              </Card>
            )}
          </div>
        </div>
        
        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Company Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Industry</h3>
                <p>{company.industry}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Company size</h3>
                <p>{company.size}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Founded</h3>
                <p>{company.founded}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Website</h3>
                <a 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:text-brand-800 hover:underline"
                >
                  {company.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Similar Companies</h2>
            <div className="space-y-4">
              {companies
                .filter(c => c.id !== company.id && c.industry === company.industry)
                .slice(0, 3)
                .map(similarCompany => (
                  <Link 
                    key={similarCompany.id} 
                    to={`/company/${similarCompany.id}`}
                    className="block p-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded bg-secondary flex items-center justify-center">
                        <Building className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{similarCompany.name}</h3>
                        <p className="text-xs text-muted-foreground">{similarCompany.location}</p>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompanyProfile;
