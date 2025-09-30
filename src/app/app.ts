import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importa tus componentes standalone
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Header, Footer],
  /*imports: [RouterOutlet,Header,Footer],*/
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
  /*styleUrl: './app.scss'*/
})
export class App {
  protected readonly title = signal('MarvinChara-portafolio');
}
