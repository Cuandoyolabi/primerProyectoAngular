import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
    currentInput: string = "";
    result: string = "";

    appendNumber(num: string){
      this.currentInput += num;
    }

    clear(){
      this.currentInput = "";
      this.result = "";
    }

    calculate(){
      try{
        this.result = this.simpleEvaluate(this.currentInput).toString();
      } catch (e) {
        this.result = 'Error';
      }
    }

    private simpleEvaluate(expression: string): number {
      return new Function('return' + expression)();
    }
}
