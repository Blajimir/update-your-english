import { Component } from '@angular/core';
import {MyVocabularyService} from "./my-vocabulary/my-vocabulary.service";
import {RrHttpService} from "./shared/shared";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyVocabularyService, RrHttpService]
})
export class AppComponent {
  title = 'Update your english!';
}
