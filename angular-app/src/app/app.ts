import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header],
  template: `
    <app-header/>

    <main> 
      <app-home/> 
    </main>

    <router-outlet />
  `,
  styles: [`
    p {
      font-size: 1.2em;
      color: #663;
    }

    main {
      padding: 16px;
    }
    `],
})
export class App {
  protected title = 'angular-app';
}
