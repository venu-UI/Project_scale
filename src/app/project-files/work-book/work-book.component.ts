import { Component, OnInit, Input } from '@angular/core';
import { reUse } from '../../modals/re-use-modal';
import { reuseServices } from '../../services/re-use.service';


@Component({
  selector: 'app-work-book',
  templateUrl: './work-book.component.html',
  styleUrls: ['./work-book.component.css']
})

export class WorkBookComponent implements OnInit {

 // elementfirst = [{type: 'server', name: 'venugopal', content:'welcome to Tales'}];
 @Input() employee: reUse[];

  constructor(private _reuseservice:reuseServices) { 

  }

  ngOnInit(): void {
  	 this.employee = this._reuseservice.getempdata();
  }

}
