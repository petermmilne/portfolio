import { Component } from '@angular/core';
import {experience} from './experience';
import { experienceprev } from './prevexperience';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlane, faGamepad, faVolleyball, faCode, faGraduationCap, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experience:any=experience;
  experienceprev:any=experienceprev;
  faPlane = faPlane;
  faGamepad = faGamepad;
  faVolletBall = faVolleyball;

  detailOnClick(experience:any) {
    experience.detailIsDisplayed=!experience.detailIsDisplayed;
  }

}


