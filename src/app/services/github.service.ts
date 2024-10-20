import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Repo } from './repo.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  http = inject(HttpClient);

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>('https://api.github.com/users/wachtelhund/repos')
    .pipe(
      map((data) => {
        return data.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            created_at: repo.created_at,
            updated_at: repo.updated_at,
            pushed_at: repo.pushed_at,
            git_url: repo.git_url,
            ssh_url: repo.ssh_url,
            clone_url: repo.clone_url,
            svn_url: repo.svn_url,
            homepage: repo.homepage,
            size: repo.size,
            stargazers_count: repo.stargazers_count,
            watchers_count: repo.watchers_count
          }
        });
      })
    )
  }
}
