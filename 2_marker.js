// Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
//     поле, которое хранит цвет маркера;
//     поле, которое хранит количество чернил в маркере (в процентах);
//     метод для печати (метод принимает строку и выводит текст соответствующим цветом; 
//         текст выводится до тех пор, пока в маркере есть чернила; 
//         один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера 
// и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    printText(text) {
        let str = "";
        for (let symbol of text) {
            str += symbol;
            symbol !== " " ? this.ink -= 0.5 : this.ink;
            if (this.ink == 0) {
                console.log("Заправьте маркер");
                break;
            }
        }
        console.log(text);
        console.log(str);
        document.write(`<p style="color:${this.color}">${str}</p>`);
    }
}

class RefuelingMarker extends Marker {

    refillMarker(addedInk) {
        (this.ink + addedInk) > 100 ? this.ink = 100 : this.ink += addedInk;
        console.log(`Маркер заправлен на ${this.ink}%`);
        document.write(`<p style="color:${this.color}">Маркер заправлен</p>`);
    }
    
}

let marker = new Marker("green", 5);
let refuelingMarker = new RefuelingMarker("red", 2);

marker.printText("jh fohrolwhflw");
refuelingMarker.refillMarker(100);
