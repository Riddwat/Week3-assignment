import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'validEmail' })
export class ValidEmailPipe implements PipeTransform {
  transform(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value ?? '');
  }
}