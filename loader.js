let clk=0;
Clickk=()=>{
    data=document.getElementById("loader");
    if(clk===0){
        data .setAttribute("style","box-shadow:5px 5px 5px pink");
        clk=1;
    }
    else{
        data .setAttribute("style","box-shadow:none;");
        clk=0;
    }
}