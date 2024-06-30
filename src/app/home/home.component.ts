import { Component, Input} from '@angular/core';
import { IProject } from '../i-project';
import { ApiServiceService } from '../api-service.service';
import { HttpClient,HttpClientModule } from '@angular/common/http'; // Import HttpClient
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { ProjectListComponent } from '../project-list/project-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports :[RouterOutlet,JsonPipe,HttpClientModule,NgFor,ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  @Input() projects: IProject[] = [];
  constructor(private api: ApiServiceService) { 
    this.api.getProjects().subscribe((data) => {
    this.projects = data;})
    }
}
// https://www.geeksforgeeks.org/using-a-http-service-in-angular-17-with-standalone-components/