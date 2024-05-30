import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills:any={
    languages:[{name:"C#"}, {name:"Python"}, {name:"JavaScript"}, {name:"Java"}],
    frameworks:[{name:".NET"}, {name:"Node"}, {name:"Angular"}, {name:"React"}],
    databases:[{name:"SQL Server"}, {name: "PostgreSQL"}, {name:"MongoDB"}, {name: "Oracle"}],
    clouds:[{name:"AWS"}, {name:"EC2"}, {name:"Docker"}, {name:"Terraform"}, {name:"CloudFront"}, {name:"S3"}],
    domains:[{name: "Agile"}, {name: "Big Data"}, {name: "Team Management"}, {name: "Energy"}, {name: "Oil and Gas"}],
    tools:[{name: "Visual Studio"}, {name: "Git"}, {name: "Azure DevOps"}, {name: "PyCharm"}]
  };


}
