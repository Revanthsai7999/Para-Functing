var name_of_the_student_array = [];
function submit()
{
var display_array_student=[];
for (var j=1; j<=4; j++)
{
var name_of_the_student=document.getElementById("name_of_the_student"+j).value;
console.log(name_of_the_student);
name_of_the_student_array.push(name_of_the_student);
}
console.log(name_of_the_student_array);
var length_of_the_name_of_the_student_array=name_of_the_student_array.length;
console.log(length_of_the_name_of_the_student_array);
for (var k=1;k<=length_of_the_name_of_the_student_array;k++)

{
    display_array_student.push("<h4>Name-"+ name_of_the_student_array[k] +"</h4>");
    console.log(display_array_student);
    
}

console.log (display_array_student);
document.getElementById("display_name_with_commas").innerHTML=display_array_student;

var remove_commas=display_array_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

function sorting()
{
name_of_the_student_array.sort();
console.log(name_of_the_student);
var display_array_student_sorting=[];
var length_of_the_name_of_the_student_array=name_of_the_student_array.length;
console.log(length_of_the_name_of_the_student_array);
for (var k=1;k<=length_of_the_name_of_the_student_array;k++)

{
    display_array_student.push("<h4>Name-"+ name_of_the_student_array[k] +"</h4>");
    console.log(display_array_student_sorting);
    
}
var remove_commas=display_array_student_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}