import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  standalone: true,
  selector: "app-home",
  templateUrl: "home.html",
  imports: [
    HeaderComponent
  ],
  styleUrls: ['home.css']
})

export class Home {

}
