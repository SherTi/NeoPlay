import { Component } from '@angular/core';

@Component({
  selector: 'app-safety',
  templateUrl: './safety.component.html',
  styleUrls: ['./safety.component.css']
})
export class SafetyComponent {
  login: boolean = false;
  email: boolean = false;
  password: boolean = false;
  confirmation: boolean = false;
}
