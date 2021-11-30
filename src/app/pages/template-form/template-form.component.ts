import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
})
export class TemplateFormComponent {
  frameworks$ = this.apiService.getFrameworks();

  constructor(private apiService: ApiService) {}
}
