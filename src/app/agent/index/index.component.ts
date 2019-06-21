import { Component } from '@angular/core';
import { FormioResourceIndexComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent extends FormioResourceIndexComponent {
  onSubmit(submission: any) {
    console.log(submission);
    window.location.href = './#/agent/' + submission.data.searchAgents + '/view';
  }
}
