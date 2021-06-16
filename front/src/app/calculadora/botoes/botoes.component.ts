import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css']
})
export class BotoesComponent implements OnInit, OnDestroy {

  @Input() simbol: string = ''
  @Input() icon: string = ''
  @Output() press: EventEmitter<string> = new EventEmitter<string>()
  isTouch: boolean = false;

  private _this: BotoesComponent = this;

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("keydown", ev => {
      this.keyDownPress(ev, this._this)
    })
    document.addEventListener("keyup", ev => {
      this.keyUpPress(ev, this._this)
    })
  }

  emitEvent(): void {
    this.press.emit(this.simbol)
  }

  ngOnDestroy(): void{
    document.removeEventListener("keydown", ev => {
      this.keyDownPress(ev, this._this)
    });
    document.removeEventListener("keyup", ev => {
      this.keyUpPress(ev, this._this)
    })
  }

  keyDownPress(event: KeyboardEvent, _this: BotoesComponent): void {
    if(event.key === _this.simbol){
      _this.isTouch = true
      _this.emitEvent()
    }
    if(event.key === '/' && _this.simbol === ':'){
      _this.isTouch = true
      _this.emitEvent()
    }
  }

  keyUpPress(event: KeyboardEvent, _this: BotoesComponent): void {
    if(event.key === _this.simbol){
      _this.isTouch = false
    }
    if(event.key === '/' && _this.simbol === ':'){
      _this.isTouch = false
    }
  }

}
