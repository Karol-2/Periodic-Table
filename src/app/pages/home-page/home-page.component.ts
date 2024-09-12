import { Component } from '@angular/core';
import { FilterComponent } from "../../components/filter/filter.component";
import { TableComponent } from "../../components/table/table.component";
import { PopupComponent } from "../../components/popup/popup.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FilterComponent, TableComponent, PopupComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
