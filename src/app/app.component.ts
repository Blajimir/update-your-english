import { Component } from '@angular/core';
import {MyVocabularyService} from "./my-vocabulary/my-vocabulary.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyVocabularyService]
})
export class AppComponent {
  title = 'Update your english!';
}
