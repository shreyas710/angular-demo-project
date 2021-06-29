import { AbstractControl } from "@angular/forms";

export function validCode(control: AbstractControl): { [key: string]: boolean } {
  let validCodeArray: string[] = ['CODE12', 'CODE45', 'CODE54'];
  if (validCodeArray.indexOf(control.value) >= 0) return { invalidCode: false };
  return { invalidCode: true };
}
