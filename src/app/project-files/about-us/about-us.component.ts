import { Component, OnInit, Input } from '@angular/core';
import { aboutMe } from './about.modal';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	 aboutmes: aboutMe[] = [
		new aboutMe('Venugopal', 'Uideveloper', '5.4years', 'Reactjs', 'Angular', 'Javascript', 'healthcaredomain', 'iam a software engneer and specilzed in UI and javascript frame work and UX design, Most of the project i worked in health care domain and entertainment domain total 5.5 years of the experience.'),
		//new aboutMe('Venugopal', 'Uideveloper', '5.4years', 'Reactjs', 'Angular', 'Javascript', 'healthcaredomain', 'iam a software engneer and specilzed in UI and javascript frame work and UX design, Most of the project i worked in health care domain and entertainment domain total 5.5 years of the experience.')

	];


setTitleEdit(data) {
   data.canEditCode = true;
   // this.buttonDisabled = false;
 }
  constructor() { }
  // buttonDisabled: boolean;
  ngOnInit(): void {
   // this.buttonDisabled = true;
  }

}
