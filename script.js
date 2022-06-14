$("button").click(function(){
	let value1;
    value1=$(".answer-one").val(); 
    let value2; 
    value2=$(".answer-two").val();
    let value3;
    value3=$(".answer-three").val(); 
    let value4;
    value4=$(".answer-four").val();
    let x;
    x=value4*5;
    $(".result").append("You will watch "+value1 +" "+ x +" times this month with "+ " " + value3 + " while drinking "+value2+" with them!");
    $(".text").fadeOut();
});