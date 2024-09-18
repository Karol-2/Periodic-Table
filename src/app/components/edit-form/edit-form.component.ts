import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ElementEditForm } from '../../models/ElementEditForm.model';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PeriodicElement } from '../../models/PeriodicElement.model';
import { PeriodicElementsService } from '../../services/periodic-elements.service';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent implements OnChanges{

  public constructor(
    private periodicElementsService: PeriodicElementsService
  ){}

  @Input() public originalElement!: PeriodicElement;


  public editForm: FormGroup<ElementEditForm> = new FormGroup<ElementEditForm>({
    name: new FormControl<string>('',[Validators.required, Validators.maxLength(99)]),
    weight: new FormControl<number>(0,[Validators.required, Validators.min(0.000001)]),
    symbol: new FormControl<string>('',[Validators.required, Validators.maxLength(99)])
  })

  ngOnChanges(changes: SimpleChanges): void {
    this.patchValues()
  }


  private patchValues():void{
    this.editForm.patchValue({
      weight: this.originalElement.weight,
      name: this.originalElement.name,
      symbol: this.originalElement.symbol

    })
  }

  public handleEdit(): void{
    const form = this.editForm.value

    const editedElement: PeriodicElement = {
      ...this.originalElement,
      name: form.name ? form.name : "" ,
      weight: form.weight ? form.weight : 1,
      symbol: form.symbol ? form.symbol : ""
    }
    console.log(this.editForm);
    this.periodicElementsService.updateElement(editedElement)
  }
}
