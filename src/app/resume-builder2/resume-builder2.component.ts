import { Component, OnInit } from '@angular/core';
import { Certificate, Education, Experience, Projects, Resume, Skill } from './resume';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-resume-builder2',
  templateUrl: './resume-builder2.component.html',
  styleUrls: ['./resume-builder2.component.scss']
})
export class ResumeBuilder2Component implements OnInit {
  resume = new Resume();
  degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];

  constructor() {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    this.initializeResume();
  }

  ngOnInit() {}

  initializeResume() {
    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [new Experience()];
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [new Education()];
    }
    if (!this.resume.skills || this.resume.skills.length === 0) {
      this.resume.skills = [new Skill()];
    }
    if (!this.resume.certificates || this.resume.certificates.length === 0) {
      this.resume.certificates = [new Certificate()];
    }
    if (!this.resume.projects || this.resume.projects.length === 0) {
      this.resume.projects = [new Projects()];
    }
  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  addCertificate() {
    this.resume.certificates.push(new Certificate());
  }

  addSkill() {
    this.resume.skills.push(new Skill());
  }
  removeSkill(index: number) {
    this.resume.skills.splice(index, 1);
  }
  removeExperience(index: number) {
    this.resume.experiences.splice(index, 1);
  }
  
  removeEducation(index: number) {
    this.resume.educations.splice(index, 1);
  }
  
  removeCertificate(index: number) {
    this.resume.certificates.splice(index, 1);
  }
  addProject() {
    this.resume.projects.push(new Projects());
  }
  
  removeProject(index: number) {
    this.resume.projects.splice(index, 1);
  }  
  async generatePdf(action = 'open') {
    const documentDefinition = await this.getDocumentDefinition();

    switch (action) {
      case 'open':
        pdfMake.createPdf(documentDefinition).open();
        break;
      case 'print':
        pdfMake.createPdf(documentDefinition).print();
        break;
      case 'download':
        pdfMake.createPdf(documentDefinition).download();
        break;
      default:
        pdfMake.createPdf(documentDefinition).open();
        break;
    }
  }
  fileChanged(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.resume.profilePic = e.target.result; // Store the base64 image string
      };
      reader.readAsDataURL(file);
    }
  }
  resetForm() {
    this.resume = new Resume();
  }
async getDocumentDefinition() {
    sessionStorage.setItem('resume', JSON.stringify(this.resume));

    let circularImage = null;
    if (this.resume.profilePic) {
        circularImage = await this.createCircularImage(this.resume.profilePic, 50); // Reduced image size
    }

    return {
        content: [
            this.createHeaderSection(),
            this.createContactSection(circularImage),
            this.createLineSeparator(),
            this.createProfessionalSummarySection(),
            this.createLineSeparator(),
            this.createSkillsSection(),
            this.createLineSeparator(),
            this.createProfessionalExperienceSection(),
            this.createLineSeparator(),
            this.createProjectsSection(),
            this.createLineSeparator(),
            this.createEducationSection(),
            this.createLineSeparator(),
            this.createCertificationsSection(),
        ],
        styles: this.getStyles(),
        defaultStyle: this.getDefaultStyle(),
    };
}

createHeaderSection() {
    return {
        stack: [
           
            { text: this.resume.name || 'Full Name', style: 'headerName' },
            { text: this.resume.jobTitle || 'Job Title', style: 'headerJobTitle' },
        ],
        alignment: 'center',
        margin: [0, 0, 0, 0]
    };
}

createContactSection(circularImage) {
    return {
        columns: [
            {
                stack: [
                    { text: `Phone: ${this.resume.contactNo || ''}`, style: 'contactInfo' },
                    { text: `Email: ${this.resume.email || ''}`, style: 'contactInfo' },
                    { text: `Address: ${this.resume.address || ''}`, style: 'contactInfo' },
                    { text: `LinkedIn: ${this.resume.socialProfile || ''}`, style: 'contactInfo' }
                ],
            },
            circularImage ? {
                image: circularImage,
                width: 50,
                height: 50,
                alignment: 'right',
                margin: [0, 0, 0, 5],
            } : {}
        ],
        columnGap: 5,
        margin: [0, 0, 0, 5]
    };
}

createProfessionalSummarySection() {
    return {
        stack: [
            { text: 'Professional Summary', style: 'sectionHeader' },
            { text: this.resume.professionalSummary || 'Brief description of professional background and key skills.', style: 'summary', margin: [0, 0, 0, 10] },
        ],
    };
}

createSkillsSection() {
  const skills = this.resume.skills || [];
  return {
      stack: [
          { text: 'Skills', style: 'sectionHeader' },
          {
              table: {
                  widths: Array(skills.length).fill('*'), // Set each skill column to take equal width
                  body: [
                      [
                          ...skills.slice(0, 5).map(skill => ({
                              text: `• ${skill.value || 'Skill'}`, // Prepend bullet point
                              style: 'listItem'
                          }))
                      ]
                  ]
              },
              layout: 'noBorders',
              margin: [0, 0, 0, 5]
          },
      ],
  };
}


createProfessionalExperienceSection() {
  const experiences = this.resume.experiences || [];
  return {
      stack: [
          { text: 'Professional Experience', style: 'sectionHeader' },
          {
              table: {
                  widths: ['*', '*', '*', '60%'], // Set the width of the description column to 70%
                  body: [
                      [
                          { text: 'Job Title', style: 'tableHeader' },
                          { text: 'Employer', style: 'tableHeader' },
                          { text: 'Duration', style: 'tableHeader' },
                          { text: 'Description', style: 'tableHeader' }
                      ],
                      ...(experiences.length > 0 ? 
                          experiences.slice(0, 2).map(exp => [
                              { text: exp.jobTitle || 'Job Title', style: 'listItem' },
                              { text: exp.employer || 'Employer Name', style: 'listItem' },
                              { text: `${exp.experience || '0'} months`, style: 'listItem' },
                              { text: exp.jobDescription || 'Key responsibilities and achievements.', style: 'listItem', margin: [0, 0, 0, 0] } // Adjust margin as needed
                          ]) : [
                              [
                                  { text: 'No experience available', colSpan: 4, style: 'listItem' },
                                  {}, {}, {} // Fill remaining cells to maintain structure
                              ]
                          ]
                      )
                  ]
              },
              layout: 'noBorders',
              margin: [0, 0, 0, 5]
          },
      ],
  };
}


createProjectsSection() {
    return {
        stack: [
            { text: 'Projects', style: 'sectionHeader' },
            {
                table: {
                    widths: ['*', '*', '70%'],
                    body: [
                        [
                            { text: 'Project Title', style: 'tableHeader' },
                            { text: 'Technologies', style: 'tableHeader' },
                            { text: 'Description', style: 'tableHeader' },
                        ],
                        ...(this.resume.projects || []).slice(0, 3).map(project => [
                            { text: project.title || 'Project Title', style: 'listItem' },
                            { text: project.technologies || 'Project Technologies', style: 'listItem' },
                            { text: project.description || 'Project Description', style: 'listItem' },
                        ])
                    ]
                },
                layout: 'noBorders',
                margin: [0, 0, 0, 5]
            },
        ],
    };
}

createEducationSection() {
    return {
        stack: [
            { text: 'Education', style: 'sectionHeader' },
            {
                table: {
                    widths: ['*', '*', '*', '*'],
                    body: [
                        [
                            { text: 'Degree', style: 'tableHeader' },
                            { text: 'School/College', style: 'tableHeader' },
                            { text: 'Year', style: 'tableHeader' },
                            { text: 'GPA/Percentage', style: 'tableHeader' }
                        ],
                        ...(this.resume.educations || []).slice(0, 2).map(edu => [
                            { text: edu.degree || 'Degree Name', style: 'listItem' },
                            { text: edu.college || 'College/University Name', style: 'listItem' },
                            { text: edu.passingYear || 'Year of Passing', style: 'listItem' },
                            { text: edu.percentage || 'N/A', style: 'listItem' }
                        ])
                    ]
                },
                layout: 'noBorders',
                margin: [0, 0, 0, 5]
            },
        ],
    };
}

createCertificationsSection() {
    return {
        stack: [
            { text: 'Certifications', style: 'sectionHeader' },
            {
                table: {
                    widths: ['*', '*', '*'],
                    body: [
                        [
                            { text: 'Title', style: 'tableHeader' },
                            { text: 'Issuer', style: 'tableHeader' },
                            { text: 'Issue Date', style: 'tableHeader' }
                        ],
                        ...(this.resume.certificates || []).slice(0, 2).map(cert => [
                            { text: cert.name || 'Certification Title', style: 'listItem' },
                            { text: cert.issuer || 'Issuer Name', style: 'listItem' },
                            { text: cert.issueDate || 'Date', style: 'listItem' }
                        ])
                    ]
                },
                layout: 'noBorders',
                margin: [0, 0, 0, 5]
            },
        ],
    };
}

createLineSeparator() {
    return { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 520, y2: 0, lineWidth: 0.5, color: '#999' }], margin: [0, 1, 0, 1] };
}

getStyles() {
    return {
        header: { fontSize: 26, bold: true, margin: [0, 0, 0, 0] },
        headerName: { fontSize: 22, bold: true },
        headerJobTitle: { fontSize: 16, italics: true },
        contactInfo: { fontSize: 10, margin: [0, 2] },
        sectionHeader: { fontSize: 16, bold: true, margin: [0, 8, 0, 2] },
        summary: { fontSize: 10 },
        bulletList: { fontSize: 10, margin: [0, 2] },
        listItem: { fontSize: 10, margin: [0, 2] },
        tableHeader: { bold: true, fontSize: 11, color: 'black' }
    };
}

getDefaultStyle() {
    return {
        fontSize: 12,
        columnGap: 10,
       
    };
}




  async createCircularImage(imageSrc: string, size: number) {
    const img = new Image();
    img.src = imageSrc;

    return new Promise((resolve) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = size;
        canvas.height = size;
        context.beginPath();
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();
        context.drawImage(img, 0, 0, size, size);
        resolve(canvas.toDataURL());
      };
    });
  }
}
