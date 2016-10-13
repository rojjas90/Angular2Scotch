import { Component }  from "@angular/core";
import { User } from "./shared/models/user";

@Component({
    selector: "my-app",
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"]
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
