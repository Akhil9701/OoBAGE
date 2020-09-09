import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../shared/services/project.service';
import { ProjectVersion } from '../shared/modals/createproject.modal';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    selectedIndex = -1;
    project = ''
    title = 200;
    constructor(private projectService: ProjectService){
          // this.project = new ProjectVersion();
    }

    setSelected(id: number) {
      this.selectedIndex = id;
      // console.log(this.selectedIndex);
    } 

    ngOnInit(){
        this.projectService.getVersion().then((res)=>{
          console.log("res", res.version);
          this.project = res.version;
        })
    }
}