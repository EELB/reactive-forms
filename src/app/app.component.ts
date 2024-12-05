import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'reactive-forms';
}
