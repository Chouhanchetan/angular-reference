import { Component } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session';
  constructor(private router: Router) {}

  goToServices(){
    this.router.navigate(['services']);
  }
}
