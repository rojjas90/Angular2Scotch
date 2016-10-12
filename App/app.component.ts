import {Component}  from "@angular/core";

@Component({
    selector: 'my-app',
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
                        <li class="list-group-item" *ngFor="let user of users"
                        (click)="selectUser(user)">
                            {{user.name}} ({{user.username}})
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="jumbotron">
                    <h1>Welcome to Our app!</h1>
                    <p>{{message}}</p>
                </div>
            </div>
        </div>
        <!--    <p>The user is {{user.name}} ({{user.username}}).</p> -->
    </main>

    <footer class="text-center">Copy right &copy; 2016</footer>
  `,
    styles: [`
    .jumbotron{ box-shadow: 0 2px 0 rgba(0,0,0,0.2);}
    `]
})
export class AppComponent {
    message = 'Hello!';
    // user = { id: 25, name: 'Rojas', username: 'grojas' };
    users = [
        { id: 25, name: 'Rojas', username: 'grojas' },
        { id: 26, name: 'Santos', username: 'Snt' },
        { id: 27, name: 'Estrada', username: 'Etd' },
        { id: 28, name: 'Mendez', username: 'Mdz' },
        { id: 29, name: 'Cadete', username: 'Cdt' }
    ];
    activeUser;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);

    }
}
