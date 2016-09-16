// blog category metedata
export class BlogCategory  {
	cat_id:string;
	cat_name:string;
	parent_id:string;
	cat_desc:string;
	create_time:string;
	level:number;
	count:string;
	constructor(){
		this.level = 1;
		this.parent_id = "0";	
	}


}