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
        <div class="jumbotron">
            <h1>Welcome to Our app!</h1>
            <p>{{message}}</p>
        </div>
        <!--    <p>The user is {{user.name}} ({{user.username}}).</p> -->

        <div *ngIf="users">
            <div *ngFor="let user of users">
                {{user.name}} ({{user.username}})
            </div>
        </div>
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
}
