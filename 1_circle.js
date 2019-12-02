// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value > 0) {
        this._radius = value;
        } else {
            console.log("Радиус не может быть =< 0")
        }
    }
    
    get diameter() {
        return this.radius * 2;
    }

    area() {
        let area =  (Math.PI * this.radius ** 2).toFixed(1);
        return area;
    }

    lenght() {
        let lenght =  (Math.PI * this.diameter).toFixed(1);
        return lenght;
    }
}
  
let circle = new Circle(35);

circle.radius = -2;
console.log(circle);
console.log(circle.radius);
console.log(circle.diameter);
console.log(circle.area());
console.log(circle.lenght());
