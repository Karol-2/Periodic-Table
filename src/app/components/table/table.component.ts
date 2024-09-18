import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../models/PeriodicElement.model';
import { PeriodicElementsService } from '../../services/periodic-elements.service';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [EditFormComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  protected periodicElements:PeriodicElement[] = [];
  protected elementToEdit: PeriodicElement | null = null;

  public constructor(private elementsService:PeriodicElementsService){}

  public ngOnInit(): void {

    this.elementsService.getPeriodicElements().subscribe((elements)=>{
      this.periodicElements = elements
    })

    this.elementsService.loadExampleData()

  }

  public editElement(element: PeriodicElement): void{
    this.elementToEdit = element;  
  }

  public submit(): void{
    this.elementToEdit = null;
  }

  // private filterData(item: any, searchTerm: string): boolean {
  //   const term = searchTerm.toLowerCase();
  //   return Object.values(item).some(value =>
  //     value.toString().toLowerCase().includes(term)
  //   );
  // }

  // get filteredUsers() {
  //   if (!this.searchTerm) {
  //     return this.users;
  //   }
  //   return this.users.filter(user => this.filterData(user, this.searchTerm));
  // }
}
