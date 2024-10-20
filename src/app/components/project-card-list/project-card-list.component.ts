import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Repo } from '../../services/repo.model';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-project-card-list',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    ProjectCardComponent,
    MatGridListModule
  ],
  templateUrl: './project-card-list.component.html',
  styleUrl: './project-card-list.component.scss'
})
export class ProjectCardListComponent {
  title = input<string>();
  repos = input<Repo[]>();

}
