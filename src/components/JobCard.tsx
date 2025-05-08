
import { Link } from "react-router-dom";
import { Job } from "@/mock/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Building } from "lucide-react";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  // Format the posted date
  const postedDate = new Date(job.posted);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const getJobTypeBadgeVariant = (type: Job['type']) => {
    switch (type) {
      case 'Remote':
        return 'outline';
      case 'Full-time':
        return 'default';
      case 'Part-time':
        return 'secondary';
      case 'Contract':
        return 'destructive';
      case 'Internship':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <Card className="job-card-shadow hover:shadow-md transition-shadow duration-200">
      <Link to={`/job/${job.id}`} className="block p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-md bg-secondary flex items-center justify-center">
              <Building className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-foreground">{job.title}</h3>
              <Link 
                to={`/company/${job.company.id}`}
                className="text-sm text-brand-600 hover:text-brand-800 hover:underline"
              >
                {job.company.name}
              </Link>
            </div>
          </div>
          <Badge variant={getJobTypeBadgeVariant(job.type)}>
            {job.type}
          </Badge>
        </div>
        
        <div className="mt-4 flex items-center text-sm text-muted-foreground space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{diffDays} {diffDays === 1 ? 'day' : 'days'} ago</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm font-medium text-foreground">
            {job.salary}
          </div>
        </div>
      </Link>
    </Card>
  );
}
