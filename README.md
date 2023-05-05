# Mi Proyecto ISPC

- INICIO (MODULO HOME): Stefi

- NOSOTROS (MODULO HOME): Emma

- CONTACTO (MODULO HOME): Juanca

- SERVICIOS (MODULO SERVICIOS): Facu

- CARRITO (MODULO PAGOS): Ale

- LOGIN (MODULO AUTH): Tammi

- REGISTRO (MODULO AUTH): Tammi

# Folder Structure Example

Let us build a simple with shared, core and feature module

Create a new application using ng new

```bash
ng new --routing --style css ModuleDemo
```

## Feature Modules

Now let us create three feature modules AdminModule, GthubModule & HomeModule

## Admin Module

Create the admin folder under /src/app folder

Under the /src/app/admin folder create the admin.module.ts

- _/src/app/admin/admin.module.ts_

```ts
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin.routing.module";
import {
  UserComponent,
  RightsComponent,
  DashboardComponent,
  AdminComponent,
} from "./pages";

@NgModule({
  declarations: [
    UserComponent,
    RightsComponent,
    DashboardComponent,
    AdminComponent,
  ],
  imports: [AdminRoutingModule],
  providers: [],
})
export class AdminModule {}
```

- _/app/src/admin/admin.routing.module.ts_

```ts
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import {
  UserComponent,
  RightsComponent,
  DashboardComponent,
  AdminComponent,
} from "./pages";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "user", component: UserComponent },
      { path: "rights", component: RightsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
```

AdminModule has four pages. A admin page is the root page. You can create it under the pages folder.

- _/app/src/admin/pages/admin.component.ts_

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent {}
```

- _/app/src/admin/pages/admin.component.html_

```html
<ul>
  <li><a routerLink="dashboard">dashboard</a></li>
  <li><a routerLink="user">User</a></li>
  <li><a routerLink="rights">Rights</a></li>
</ul>
<router-outlet></router-outlet>
```

The admin page has three pages under it. dashboard, rights & user. Hence create a subfolder for all these under the pages folder.

- _/app/src/admin/pages/dashboard/dashboard.component.ts_

```ts
import { Component } from "@angular/core";

@Component({
  template: `<h1>Dashboard Component</h1>`,
})
export class DashboardComponent {
  title = "";
}
```

- _/app/src/admin/pages/rights/rights.component.ts_

```ts
import { Component } from "@angular/core";

@Component({
  template: "<h1>Rights Component</h1>",
})
export class RightsComponent {
  title = "";
}
```

- _/app/src/admin/pages/user/user.component.ts_

```ts
import { Component } from "@angular/core";

@Component({
  template: "<h1>User Component</h1>",
})
export class UserComponent {
  title = "";
}
```

- _/app/src/admin/pages/index.ts_

```ts
export * from "./dashboard/dashboard.component";
export * from "./rights/rights.component";
export * from "./user/user.component";
export * from "./admin.component";
```

- _/app/src/admin/index.ts_

```ts
export * from "./pages";
export * from "./github.module";
```

## Github Module

The GithubModule retrieves the list of repos from the GitHub repository for a given user. The module is created under the folder github. The components is created under the the pages folder.

- _/app/src/github/pages/list/repo-list.component.ts_

```ts
import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { GitHubService } from "../../../core";
import { repos } from "../../../core";

@Component({
  templateUrl: "./repo-list.component.html",
})
export class RepoListComponent {
  userName: string = "angular";
  repos: repos[];

  loading: boolean = false;
  errorMessage;

  constructor(private githubService: GitHubService) {}

  public getRepos() {
    this.loading = true;
    this.errorMessage = "";
    this.githubService.getRepos(this.userName).subscribe(
      (response) => {
        this.repos = response;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
```

- _/app/src/github/pages/list/repo-list.component.html_

```html
<h1 class="heading"><strong>HTTP </strong>Demo</h1>

<div class="form-group">
  <label for="userName">GitHub User Name</label>
  <input
    type="text"
    class="form-control"
    name="userName"
    [(ngModel)]="userName"
  />
</div>

<div class="form-group">
  <button type="button" (click)="getRepos()">Get Repos</button>
</div>

<div *ngIf="loading">loading...</div>

<div *ngIf="errorMessage" class="alert alert-warning">
  <strong>Warning!</strong> {{errorMessage}}
</div>

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>HTML Url</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let repo of repos;">
        <td>{{repo.id}}</td>
        <td>{{repo.name}}</td>
        <td>{{repo.html_url}}</td>
        <td>{{repo.description}}</td>
      </tr>
    </tbody>
  </table>
</div>
```

- _/app/src/github/pages/index.ts_

```ts
export * from "./repolist/repo-list.component";
```

- _/app/src/github/github-routing.module.ts_

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RepoListComponent } from "./pages";

const routes: Routes = [
  {
    path: "github",
    component: RepoListComponent,
    children: [{ path: "list", component: RepoListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubRoutingModule {}
```

- _/app/src/github/github.module.ts_

