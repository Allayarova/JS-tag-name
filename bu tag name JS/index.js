function ozgar1()
{
    let a = document.getElementsByTagName("h2");
    for (let i = 0; i < a.length; i++)
     {
        a[i].style.color = "purple";
        a[i].style.fontFamily = "Monotype corsiva";
        a[i].style.textShadow = "5px 0 0 10px"

        
    }
}
function ozgar2()
{
    let a = document.getElementsByClassName('matn1');
    for (let j = 0; j < a.length; j++)
    {
        a[j].style.color = "blue";
        a[j].style.fontWeight = "600";
        a[j].style.textDecoration = "underline";


    }

    let b = document.getElementsByClassName('matn2');
    for (let j = 0; j < b.length; j++)
    {
        b[j].style.color = "blue";
        b[j].style.fontWeight = "600";
        b[j].style.textDecoration = "underline";


    }
}
 function yop(){
     let a=document.querySelectorAll('.reklama .btn')
     for (let i = 0; i < a.length; i++)
     {
        a[i].style.animationName='anim';

     }
 }  
