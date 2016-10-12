import { Component }  from "@angular/core";
import { User } from "./shared/models/user";

@Component({
    selector: "my-app",
    template:
    `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="nav-header">
                <a href="/" class="navbar-brand">My angular 2 app!</a>
            </div>
        </nav>
    </header>

    <main>
        <div class="row">
            <div class="col-sm-4">
                <div *ngIf="users">
                    <ul class="list-group users-list">
                        <li class="list-group-item"
                        *ngFor="let user of users"
                        (click)="selectUser(user)"
                        [class.active]="user === activeUser">
                            {{user.name}} ({{user.username}})
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="jumbotron" *ngIf="activeUser">
                    <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
                </div>

                <div class="jumbotron gocrazy" *ngIf="!activeUser">
                  <span class="glyphicon glyphicon-hand-left"></span>
                  <h2>Choose a User</h2>
                </div>

            </div>
        </div>
        <!--    <p>The user is {{user.name}} ({{user.username}}).</p> -->
    </main>

    <footer class="text-center">Copy right &copy; 2016</footer>
  `,
    styles: [`
    .user-list li{
      cursor: pointer;
    }
    .jumbotron .glyphicon{
      font-size: 80px;
    }
    .gocrazy{
      background: red;
      color: white;
    }
    `]
})
export class AppComponent {
    message: string = "Hello!";
    // user = { id: 25, name: 'Rojas', username: 'grojas' };
    users: User[] = [
        { id: 25, name: "Rojas", username: "grojas" },
        { id: 26, name: "Santos", username: "Snt" },
        { id: 27, name: "Estrada", username: "Etd" },
        { id: 28, name: "Mendez", username: "Mdz" },
        { id: 29, name: "Cadete", username: "Cdt" }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
