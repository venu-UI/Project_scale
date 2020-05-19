import { Injectable } from '@angular/core';
import { reUse } from './re-use-modal';

@Injectable()

export class reuseServicess {

	private	employees: reUse[] = [
	{   
		title:'Fresher',
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

		title:'experience',
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
