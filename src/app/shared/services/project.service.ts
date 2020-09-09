import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../modals/createproject.modal';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  root = environment.flaskRoot;
  private BASE_URL = `${this.root}`;
  private headers = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  public async getVersion():Promise<any>{
    
    return await this.http.get(this.BASE_URL + '/version', this.headers).toPromise();
  }
  public async createProject(project): Promise<any> {
    const url = `${this.BASE_URL}/project/create`;
    // console.log('auth service user :  ', JSON.stringify(user));
    return await this.http.post(url, project, this.headers).toPromise();
  }

  public async deleteProject(id: number): Promise<any> {
    const url = `${this.BASE_URL}/project/delete?project_id=`;
    return await this.http.delete(url + id, this.headers).toPromise();
  }

  public async updateProject(id:number): Promise<any> {
    const url = `${this.BASE_URL}/project/read`;
    console.log(id,"name");
    let project_id = `{"project_id": ${id}}`
    return await this.http.post(url,project_id, this.headers).toPromise();
  }

  public async saveUpdatedProject(project):Promise<any>{
    const url = `${this.BASE_URL}/project/update`;
    return await this.http.post(url, project, this.headers).toPromise();
  }

  getAllProjects(): Promise<any> {
    // var limit = `{ "limit":100}`
    const url = `${this.BASE_URL}/project/list`
    return this.http.get(url, this.headers).toPromise();
  }
}
