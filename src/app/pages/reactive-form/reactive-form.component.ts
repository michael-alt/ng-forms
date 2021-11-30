import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  frameworks$ = this.apiService.getFrameworks();

  constructor(private apiService: ApiService) {}
}
