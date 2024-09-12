import { Component } from '@angular/core';
import { EditFormComponent } from "../edit-form/edit-form.component";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [EditFormComponent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

}
