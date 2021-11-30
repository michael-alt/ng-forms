import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-plain-form',
  templateUrl: './plain-form.component.html',
})
export class PlainFormComponent {
  frameworks$ = this.apiService.getFrameworks();

  constructor(private apiService: ApiService) {}
}
