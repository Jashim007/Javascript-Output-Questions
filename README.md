# Javascript-Output-Questions

#Implementation of counter using closures
function counter()
{
    let x=0;
    return function increaseCounter()
    {
        ++x;
        console.log(x);
    }
}
let count=counter();
count();
