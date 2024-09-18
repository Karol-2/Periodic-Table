import { FormControl } from "@angular/forms"

export interface ElementEditForm{
    readonly name: FormControl<string | null>
    readonly weight: FormControl<number | null>
    readonly symbol: FormControl<string | null>
}