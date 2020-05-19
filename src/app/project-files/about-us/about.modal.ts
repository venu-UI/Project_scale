
export class aboutMe {

	public name: string;
	public designation:string;
	public experience:string;
	public first:string;
	public second:string;
	public three:string;
	public domain: string;
	public biography: string;

	constructor(name: string, desig:string, exper: string, first: string, second: string, third: string, doms: string, bio: string){
		this.name = name;
		this.designation = desig,
		this.experience = exper;
		this.first = first;
		this.second = second;
		this.three = third;
		this.domain = doms;
		this.biography = bio;
	}
}