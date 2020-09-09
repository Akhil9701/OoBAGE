export class Project{
    project_name:string;
    project_desc:string;
    group_id: string;
    project_id: number;
}

export class AllProjects {
    project_name: string;
    project_desc: string;
    url_data_doc: string;
    user_id: string;
}


export class ProjectVersion {
    status : string;
    version : string;
}