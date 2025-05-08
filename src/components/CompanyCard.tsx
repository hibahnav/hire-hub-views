
import { Link } from "react-router-dom";
import { Company } from "@/mock/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Card className="job-card-shadow hover:shadow-md transition-shadow duration-200">
      <Link to={`/company/${company.id}`} className="block">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-md bg-secondary flex items-center justify-center">
              <Building className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium text-lg text-foreground">{company.name}</h3>
              <p className="text-sm text-muted-foreground">{company.location}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-muted-foreground line-clamp-3">
              {company.description}
            </p>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">{company.industry}</Badge>
            <Badge variant="secondary" className="text-xs">{company.size}</Badge>
            <Badge variant="outline" className="text-xs">Founded {company.founded}</Badge>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
