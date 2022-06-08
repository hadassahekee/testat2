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

    this.addPawn("cell8-4")
    this.addPawn("cell7-5", false)


  }

  addPawn(cellId: string, isWhite = true) {
    const sourse = isWhite ? '"./assets/pawn_white.png"' : '"./assets/pawn_black.png"'

    const img = `<img src="${sourse}" class="pawn-in-ceell"/>`
    // cellElement.nativeElement.innerHTML = img


  }

  isOdd(number: number) {
    return ((number % 2) == 0)
  }
}
