import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../../models/PeriodicElement.model';
import { PeriodicElementsService } from '../../services/periodic-elements.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  protected periodicElements:PeriodicElement[] = []

  public constructor(private elementsService:PeriodicElementsService){}

  public ngOnInit(): void {

    this.elementsService.getPeriodicElements().subscribe((elements)=>{
      this.periodicElements = elements
    })

    this.elementsService.loadExampleData()

  }
}
