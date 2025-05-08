
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { jobs } from "@/mock/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, ArrowLeft, Building, Briefcase } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find(job => job.id === id);
  
  if (!job) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The job you're looking for doesn't exist or has been removed.
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
  
  // Format the posted date for display
  const postedDate = new Date(job.posted).toLocaleDateString('en-US', {
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });

  return (
    <MainLayout>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                <Link 
                  to={`/company/${job.company.id}`} 
                  className="text-brand-600 hover:text-brand-800 hover:underline font-medium"
                >
                  {job.company.name}
                </Link>
              </div>
              <Badge variant={job.type === 'Remote' ? 'outline' : 'default'} className="text-sm">
                {job.type}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Posted on {postedDate}</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                <span>{job.salary}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button className="px-8">Apply Now</Button>
              <Button variant="outline">Save Job</Button>
            </div>
          </div>
          
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="prose max-w-none">
              <p className="text-foreground">
                {job.description}
              </p>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-brand-600">•</span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        
        <div>
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Company Information</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-16 w-16 rounded-md bg-secondary flex items-center justify-center">
                <Building className="h-8 w-8 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{job.company.name}</h3>
                <p className="text-sm text-muted-foreground">{job.company.location}</p>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-4">
              <p className="text-sm text-muted-foreground line-clamp-4 mb-2">
                {job.company.description}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="text-xs">{job.company.industry}</Badge>
              <Badge variant="secondary" className="text-xs">{job.company.size}</Badge>
              <Badge variant="outline" className="text-xs">Founded {job.company.founded}</Badge>
            </div>
            
            <Link to={`/company/${job.company.id}`}>
              <Button variant="outline" className="w-full">
                View Company Profile
              </Button>
            </Link>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
            <div className="space-y-4">
              {jobs
                .filter(j => j.id !== job.id && j.company.industry === job.company.industry)
                .slice(0, 3)
                .map(similarJob => (
                  <Link 
                    key={similarJob.id} 
                    to={`/job/${similarJob.id}`}
                    className="block p-3 rounded-md hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-medium text-foreground">{similarJob.title}</h3>
                    <p className="text-sm text-muted-foreground">{similarJob.company.name}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-muted-foreground">{similarJob.location}</span>
                      <Badge variant="outline" className="text-xs">{similarJob.type}</Badge>
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

export default JobDetail;
