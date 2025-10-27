import { Component, signal } from '@angular/core';
import { Servers } from './servers/servers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Servers],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('CompleteGuide');
}
