import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GithubService } from './services/github.service';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { Repo } from './services/repo.model';
import { ProjectCardListComponent } from './components/project-card-list/project-card-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProjectCardComponent,
    ProjectCardListComponent
  ],
  providers: [
    GithubService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portproj';
  ghService = inject(GithubService);
  repos!: Repo[];

  constructor() {
    this.ghService.getRepos().subscribe((data) => {
      console.log(data);
      this.repos = data;
    });

  }
}
