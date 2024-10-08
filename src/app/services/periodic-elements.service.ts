import { Injectable } from '@angular/core';
import { PeriodicElement } from '../models/PeriodicElement.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeriodicElementsService {

  private periodicElements: PeriodicElement[] = []
  private periodicElementsSubject: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject<PeriodicElement[]>(this.periodicElements);

  constructor() { }

  public getPeriodicElements(): Observable<PeriodicElement[]>{
    return this.periodicElementsSubject.asObservable();
  }

  public addPeriodicElement(element: PeriodicElement):void{
    this.periodicElements.push(element);
    this.periodicElementsSubject.next(this.periodicElements)
  }

  public setPeriodicElements(elements: PeriodicElement[]): void{
    this.periodicElements = elements;
    this.periodicElementsSubject.next(this.periodicElements)
  }

  public updateElement(element: PeriodicElement): void{
    const foundElementIndex = this.periodicElements.findIndex((el)=>el.position == element.position)
    if (foundElementIndex == -1) {
      console.error("Periodic element not found!", element);
      return
    }

    const elements = this.periodicElements
    elements[foundElementIndex] = element
    this.setPeriodicElements(elements)
    console.log("Element updated!");
    
  }

  public loadExampleData(){
    const ELEMENT_DATA: PeriodicElement[] = [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
      {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
    setTimeout(()=>{
      this.setPeriodicElements(ELEMENT_DATA)
    },2000)
  }
}
