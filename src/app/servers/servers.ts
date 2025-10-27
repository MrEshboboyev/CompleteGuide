import { Component } from '@angular/core';
import {ServerComponent} from '../server/server';

@Component({
  selector: 'app-servers',
  imports: [
    ServerComponent
  ],
  templateUrl: './servers.html',
  styleUrl: './servers.css',
})
export class Servers {

}
