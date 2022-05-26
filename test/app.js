// // // // const circle = {
// // // //     radius: 10,
// // // //     color: 'orange',
// // // //     getArea: function() {
// // // //       return Math.PI * this.radius * this.radius;
// // // //     },
// // // //     getCircumference: function() {
// // // //       return 2 * Math.PI * this.radius;
// // // //     }
// // // //   };
// // // //   let {radius, getArea, getCircumference} = circle;
// // // //   console.log(radius);
// // // //   console.log(getArea);
// // // //   console.log(getCircumference);

// // // // (function(x)
// // // // {
// // // // return (function(y){
// // // // console.log(x);
// // // // })(2)
// // // // })(1)

// // // let fruits=["Apple",'Orange',"Kiwi","Pear"];
// // // const[x,y,,,,z]=monthsname;

// // // let newvalue=[,,fruits,,monthsname];
// // // console.log(newvalue);

// // class Vehicle {
// // 	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
// // 		this.color = color;
// // 		this.wheels = wheels;
// // 		this.horn = horn;
// // 	}

// // 	honkHorn() {
// //     console.log(this.horn);
// //     console.log(this.color);
// // 	}
// // }
// // class Bicycle extends Vehicle
// // {
// //     constructor(color='blue',wheels = 2, horn = 'honk honk') {
// // 		super(undefined,wheels,horn)
// // 		this.colors=color;
// // 		this.wheels=wheels;
// // 		this.horn=horn;
// //   }
// //   honkHorn()
// //       {  
// //         console.log(this.horn);   
        
// //   }
// // }
  
// // let b=new  Bicycle();
// // b.honkHorn();

// var x= 0;
// var y=-1;
// var z= 4;
// if (x>y && x>z)
// {
//         if (y>z)
//         {
//             console.log(x + ", " + y + ", " +z);
//         }
//         else
//         {
//             console.log(x + ", " + z + ", " +y);
//         }
// }
// else if (y>x && y >z)
// {
//         if (x>z)
//         {
//              console.log(y + ", " + x + ", " +z);
//         }
//         else
//         {
//              console.log(y + ", " + z + ", " +x);
//         }
// }
// else if (z>x && z>y)
// {
//         if (x>y)
//         {
//             console.log(z + ", " + x + ", " +y);
//         }
//         else
//         {
//             console.log(z + ", " + y + ", " +x);
//         }
// }

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));