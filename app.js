// Question 1
var student_names = [];

// Question 2
var student_names = new Array();

// Question 3
var educationalPlaces = ['College', 'Schools', 'Universities'];

// Question 4
var numbers = [1, 2, 3, 4, 5];

// Question 5
var booleanArray = [false, true, true, false];

// Question 6
var mixedArray = ['College', 'Schools', 'Universities', 1, 2, 3, 4, 5, false, true, true, false];

// Question 7
var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write('Qualifications: <br />')
document.write('1 ) ' + qualifications[0] + '<br />');
document.write('2 ) ' + qualifications[1] + '<br />');
document.write('3 ) ' + qualifications[2] + '<br />');
document.write('4 ) ' + qualifications[3] + '<br />');
document.write('5 ) ' + qualifications[4] + '<br />');
document.write('6 ) ' + qualifications[5] + '<br />');
document.write('7 ) ' + qualifications[6] + '<br />');
document.write('8 ) ' + qualifications[7] + '<br />');


// Question 8
var student_names = new Array(3);
var marks = new Array(3);
student_names[0] = prompt('Enter your name');
student_names[1] = prompt('Enter your name');
student_names[2] = prompt('Enter your name');
marks[0] = +prompt('Enter your marks out of 500');
marks[1] = +prompt('Enter your marks out of 500');
marks[2] = +prompt('Enter your marks out of 500');
var percentage1 = (marks[0] / 500) * 100;
var percentage2 = (marks[1] / 500) * 100;
var percentage3 = (marks[2] / 500) * 100;
document.write("Score of " + student_names[0] + "is: " + marks[0] + ". Percentage: " + percentage1 + "<br>");
document.write("Score of " + student_names[1] + "is: " + marks[1] + ". Percentage: " + percentage2 + "<br>");
document.write("Score of " + student_names[2] + "is: " + marks[2] + ". Percentage: " + percentage3 + "<br>");


// Question 9
var colors = ['red', 'blue', 'green'];
document.write(colors + '<br />');
var user_color1 = prompt('Enter the color you want');
colors.unshift(user_color1);
document.write(colors + '<br />');
var user_color2 = prompt('Enter the color you want');
colors.push(user_color2);
document.write(colors + '<br />');
colors.unshift('grey', 'aqua');
document.write(colors + '<br />');
colors.shift();
document.write(colors + '<br />');
colors.pop();
document.write(colors + '<br />');
var user_index1 = +prompt('Enter index at which you want to add color');
var user_color3 = prompt('Enter the color you want');
colors.splice(user_index1, 0, user_color3);
document.write(colors + '<br />');
var user_index2 = +prompt('Enter index at which you want to delete')
var number_of_deletions = +prompt('Enter number of colors you want to delete');
colors.splice(user_index2, number_of_deletions);
document.write(colors + '<br />');

// Question 10
var studentArray = [320, 230, 480, 120];
document.write("Score of Students: " +studentArray + '<br />');
var sortedArray = studentArray.sort();
document.write("Ordered Score of Students: "+ sortedArray+ '<br />');

// Question 11
document.write('Cities list:' + '<br />');
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write(cities + '<br />');
var selectedCities = cities.slice(1, 4);
document.write('Selected Cities list:' + '<br />');
document.write(selectedCities + '<br />');

// Question 12
var arr = [' This ', ' is', ' my ', ' cat '];
 var arrjoin = arr.join();
document.write("Array: <br />" + arr + "<br />") 
document.write("String: <br />" + arrjoin + "<br />")
// Question 13
var arr = ['keyboard', 'mouse', 'printer', 'monitor'];

document.write("Out:  <br />" + arr.shift() + "<br />") 
document.write("Out:  <br />" + arr.shift() + "<br />") 
document.write("Out:  <br />" + arr.shift() + "<br />") 
document.write("Out:  <br />" + arr.shift() + "<br />") 


// Question 14
var arr = ['keyboard', 'mouse', 'printer', 'monitor'];

document.write("Out:  <br />" + arr.pop() + "<br />") 
document.write("Out:  <br />" + arr.pop() + "<br />") 
document.write("Out:  <br />" + arr.pop() + "<br />") 
document.write("Out:  <br />" + arr.pop() + "<br />") 



// Question 15
var mobileCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write(`<select> 
<option>${mobileCompanies[0]}</option>
<option>${mobileCompanies[1]} </option>
<option>${mobileCompanies[2]} </option>
<option>${mobileCompanies[3]} </option>
<option>${mobileCompanies[4]} </option>
<option>${mobileCompanies[5]} </option>
</select>`)