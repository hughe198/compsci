import { Component, Input } from '@angular/core';
import { IProject } from '../i-project';
import { IPage } from '../i-page';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {

@Input() project:IProject = {
  id: 1,
  title: "test title",
  description: "test description",
  thumbnail_url: "test thumbnail_url",
  project_catagory: "test project_catagory",
  page:[
    {
        "title": "Page Title",
        "content": "This is the content of the page.",
        "id": 1,
        "project_id": 1
    }
]
  }

}
