let score = prompt("Enter your score:");

if(score <= 100 && score >= 80)
{
    console.log("You scored grade A");
}
else if(score <= 89 && score >= 70)
{
    console.log("You scored grade B");
}
else if(score <= 69 && score >= 60)
{
    console.log("You scored grade C");
}
else if(score <= 59 && score >= 50)
{
    console.log("You scored grade D");
}
else
{
    console.log("You scored grade F");
}