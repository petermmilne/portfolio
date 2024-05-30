import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faIdBadge, faCalendar, faCode, faGraduationCap, faMapLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faHome = faHome;
  faIdBadge = faIdBadge;
  faCalendar = faCalendar;
  faCode = faCode;
  faGraduationCap = faGraduationCap;
  faMapLocationDot = faMapLocationDot;
  faLinkedin = faLinkedin;
}
