import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularEsbs';
  @ViewChild('board') board!: ElementRef

  constructor(
    private renderer: Renderer2) {
  }


  ngAfterViewInit() {

    this.setCells()
  }

  ngOnInit(): void {
    // this.setCells()
  }

  setCells() {
    let color = ""
    const whiteCellColor = "#fff"
    const darkCellColor = "#000"
    let table = `<table class="board" style="border: 5px solid black" >`;
    const cellSize = 90


    for (let row = 1; row <= 8; row++) {
      color = color == whiteCellColor ? darkCellColor : whiteCellColor;
      table += "<tr>"
      for (let head = 1; head <= 8; head++) {
        color = color == whiteCellColor ? darkCellColor : whiteCellColor;
        table += `<th class="" #cell${row}-${head} id="cell${row}-${head}" style="background-color:${color};width: ${cellSize}px;height:${cellSize}px;">

            </th>`
      }
      table += "</tr>"
    }

    table += "</table"

    // const element = this.renderer.createElement(table)

    this.board.nativeElement.innerHTML = table

    // Add Chess Pawn
    this.addChessPawn("cell5-2",true)
    this.addChessPawn("cell6-3", true)

    // Add Chess King
    this.addChessKing("cell8-4", false)
    this.addChessKing("cell7-5", false)


  }

  addChessPawn(cellId: string, isWhite = true) {
    const source = isWhite ? "/assets/pawn_black.jpg" : "/assets/pawn_white.jpg"
    const size = 50;
    const img = '<img src="${source}" class="pawn-in-cell"/>';
    // cellElement.nativeElement.innerHTML = img
      (<HTMLElement>document.getElementById(cellId)).innerHTML = `<img draggable="true"  src="${source}"  alt="pawn" style="padding: 5px;width: ${size}px;height: :${size}px;" />`

  }
  addChessKing(cellId: string, isWhite = true) {
    const source = !isWhite ? "/assets/white_king.jpg" : "/assets/black_king.jpg"
    const size = 50;
    const img = '<img src="${source}" class="pawn-in-cell"/>';
    // cellElement.nativeElement.innerHTML = img
    (<HTMLElement>document.getElementById(cellId)).innerHTML = `<img draggable="true"  src="${source}"  alt="pawn" style="padding: 5px;width: ${size}px;height: :${size}px;" />`

  }

  isOdd(number: number) {
    return ((number % 2) == 0)
  }
}
