import { Injectable } from '@angular/core';
import { reUse } from '../modals/re-use-modal';

@Injectable()

export class reuseServices{

	private	employees: reUse[] = [
	{   
		title:'fresher',
		name:'venu',
		designation: 'softwareEngneer',
		experience: '5.4years',
		first: 'angular',
		second: 'react',
		three: 'graphql',
		domain: 'healthcare',
		biography: 'great employee'
	},
		{

		title:'experienced',
		name:'latha',
		designation: 'finance',
		experience: '5.4years',
		first: 'angular',
		second: 'react',
		three: 'graphql',
		domain: 'healthcare',
		biography: 'great employee'
	},
		{

		title:'experienced',	
		name:'chary',
		designation: 'softwareEngneer',
		experience: '5.4years',
		first: 'angular',
		second: 'react',
		three: 'graphql',
		domain: 'healthcare',
		biography: 'great employee'
	},
		{

	    title:'fresher',
		name:'delhi',
		designation: 'softwareEngneer',
		experience: '5.4years',
		first: 'angular',
		second: 'react',
		three: 'graphql',
		domain: 'healthcare',
		biography: 'great employee'
	},

	];

	getempdata(): reUse[] {
		return this.employees;
	}
}
