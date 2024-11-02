export class Resume {
  profilePic: string;
  name: string;
  address: string;
  contactNo: number;
  email: string;
  socialProfile: string;
  experiences: Experience[] = [];
  educations: Education[] = [];
  otherDetails: string;
  skills: Skill[] = [];
  jobTitle: string;
  certificates: Certificate[] = []; // Keep this for the certificates

  certifications: any;
  professionalSummary: string;
  projects: Projects[]=[];

  constructor() {
    this.experiences.push(new Experience());
    this.educations.push(new Education());
    this.skills.push(new Skill());
    this.certificates.push(new Certificate());
    this.projects.push(new Projects());
  }
}

export class Experience {
  employer: string;
  jobTitle: string;
  jobDescription: string;
  startDate: string;
  experience: number;
  endDate: string;
}

export class Education {
  degree: string;
  college: string;
  passingYear: string;
  percentage: number;
}

export class Skill {
  value: string;
}

export class Certificate {
  name: string;        // Changed from 'title' to 'name' for consistency
  issuer: string;
  issueDate: string;   // New field for issue date
}
export class Projects{
  title:string;
  description:string;
  technologies:string;
}