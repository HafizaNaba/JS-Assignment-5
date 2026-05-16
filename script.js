var num1 = (3);
var num2 = (5);
var sum = (num1 + num2);
document.write("Sum of 3 and 5 is "  + sum + "<br>");

var sub =(num1 - num2);
document.write("Sub of 3 and 5 is " + sub + "<br>");

var multiply =(num1 * num2);
document.write("Multiply of 3 and 5 is " + multiply + "<br>");


var division =(num1 / num2);
document.write("division of 3 and 5 is " + division + "<br>");

var modulus =(num1 % num2);
document.write("modulus of 3 and 5 is " + modulus + "<br>" + "<br>");

var num;
document.write("Value after variable declaration is undefined " + "<br>");

num = 5;
document.write("Initial value: " + num  + "<br>");

num++;
document.write("value after increment is:" + num  + "<br>");

var num = num + 7;
document.write("Value after addition is: " + num  + "<br>");

num--;
document.write("Value after decrement is: " + num  + "<br>");

var reminder = num % 3;
document.write( "The remainder is: " + reminder  + "<br>");

var ticketPrice = ("600 PKR");
var quantity = (5);
var totalAmount =(600 * 5);

document.write( "<br>"+ "Total cost to buy 5 tickets to a movie is : "  +  totalAmount+"PKR" + "<br>");

document.write(  "<h1> Table </h1>");

var table=("4");

document.write( "<br>"+"4 x 1 = " + table * 1  );
document.write( "<br>"+"4 x 2 = " + table * 2  );
document.write( "<br>"+"4 x 3 = " + table * 3 );
document.write( "<br>"+"4 x 4= " + table * 4 );
document.write( "<br>"+"4 x 5 = " + table * 5 );
document.write( "<br>"+"4 x 6 = " + table * 6 );
document.write( "<br>"+"4 x 7 = " + table * 7 );
document.write( "<br>"+"4 x 8 = " + table * 8);
document.write( "<br>"+"4 x 9 = " + table * 9 );
document.write( "<br>"+"4 x 10 = " + table * 10   + "<br>");
  

document.write(  "<h3> Convert celsius into fahrenheit and fehrenheit into celsius </h3>" +"<br>" );
var celsius =(25);
var fahrenheit  =( celsius * 9/5 +32);
document.write( "<br>"+ "25°C is " + fahrenheit + "°F" +"<br>")

var fahrenheit =(70);
var celsius =(fahrenheit - 32 ) * 5/9;
document.write( "70°F is " + celsius +"°C" +"<br>");

document.write("<h1> Shopping Cart </h1>" );

var item1 =(650);
document.write("Price of item 1 is " + item1  +"<br>");
var item1Quantity =(3);
document.write("Quantity of item 1 is " +item1Quantity  +"<br>" );
var item2 =(100);
document.write("Price of item 2 is " + item2  +"<br>");
var item1Quantity2 =(7);
document.write("Quantity of item 2 is " +item1Quantity2  +"<br>" );
var charges =(100);
document.write("Shipping Charges is " + charges  +"<br>"   );
var totalCost = (item1*item1Quantity );
var totalAmount=(item2*item1Quantity2 );
var finalTotal =(totalCost + totalAmount + charges)


document.write(  "<br>"+"Total cost of your order is "+finalTotal  +"<br>");

document.write("<h1>Mark Sheet</h1>");
var totalMarks =(980);
document.write("Total marks : " + totalMarks   +"<br>");
var markObtain = (804);
document.write("Marks Obtain : " + markObtain );
var percentage =(markObtain / totalMarks);
document.write("<br>"+ "Percentage : " + percentage +"%");


document.write(  "<h1> Currency in PKR </h1>" );
var exchangeRate =(10*104.80);
var exchangeRate2 =(25*28);
var totalCurrency =(exchangeRate + exchangeRate2 );
document.write("Total cirrency in PKR : " + totalCurrency  +"<br>");
document.write("<h1>Arithmetic Calculation</h1>");

var number =(50);
var calculation =(50 + 5 * 10 / 2);
document.write("Result is : " + calculation  +"<br>");

document.write(  "<h1> Age Calculator </h1>" +"<br>" );
var currentYear = 2026;
document.write( "Current Year : " + currentYear +"<br>" );
var birthYear = 2010;
document.write( "Birth Year : " + birthYear +"<br>" );
var totalAge = currentYear - birthYear;
document.write( "Your age is: "+totalAge);

document.write(  "<h1> The Geometrizer </h1>" +"<br>" );
var radius =20;
document.write("Radius of circle is : " + radius  +"<br>");
var circumference = 2 * 3.142 * 20;
document.write("The circumference is: " + circumference  +"<br>");
var area= 3.142 * radius*radius;
document.write("The Area is : "+area);

document.write(  "<h1> The Lifetime supply calculator </h1>" +"<br>" );
var Snack = "Chocochips";
document.write("Favourite Snack is : " +Snack +"<br>" );
var currentAge = 15;
document.write("Current age : " + currentAge +"<br>" );
var maxAge = 65;
document.write("Estimated Maximum Age: " + maxAge  +"<br>")
var snacksPerDay = 3;
document.write("Amount of snacks per day: " + snacksPerDay  +"<br>" );
var totalsnacksAmount = maxAge - currentAge * snacksPerDay * 365;
document.write("You will need" +totalsnacksAmount +" chocolate chip to last you until the ripe old age of " + maxAge)
