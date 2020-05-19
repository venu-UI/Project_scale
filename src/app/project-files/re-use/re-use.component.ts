import { Component, OnInit} from '@angular/core';
import { reUse } from '../../modals/re-use-modal';
import { reuseServices } from '../../services/re-use.service';
// import { reUse } from './re-use-modal';
// import { reuseService } from './re-use.service';


@Component({
  selector: 'app-re-use',
  templateUrl: './re-use.component.html',
  styleUrls: ['./re-use.component.css']
})
export class ReUseComponent implements OnInit {
 employees: reUse[];
 newtitle = '';
 newfirstname ='';
 newdesignation = '';
 newexperience = '';
 newdomain = '';

	// @Input() element:{ type: string, name:string, content:string};
	// @Input() parentData
 

  constructor(private _reuseservice:reuseServices) { }

  ngOnInit(): void {
  
  this.employees = this._reuseservice.getempdata();

}

onAddlist() {
	this.employees.push({
		title:this.newtitle,
		name: this.newfirstname,
		designation: this.newdesignation,
		experience: this.newexperience,
		domain: this.newdomain
	});
}


}

