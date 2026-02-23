function calculate (){
    const name = document.getElementById("name").value;
    const worked = Number(document.getElementById("worked").value);
    const wasted = Number(document.getElementById("wasted").value); 

    const productivityHours = Math.floor(worked / (worked + wasted) * 100);
    const remainingHours = 24 - (worked + wasted);

    results(name, productivityHours, remainingHours);
    productivityMessage(name, productivityHours);

}

function results(name, productivityHours, remainingHours){
    document.getElementById("result").innerHTML = "Result: " + productivityHours + "%";
    //document.getElementById("message").innerHTML = name + ", your productivity today is " + productivityHours + "%. Keep Pushing!";
    document.getElementById("hoursRemain").innerHTML = "Remaining Hours: " + remainingHours + " hours";
    
}

function productivityMessage(name, productivityHours){
    if (productivityHours >= 80){
        document.getElementById("message").innerHTML = "Elite Focus, " + name + ", great work. Your productivity is " + productivityHours + "%. Keep this up and you will be a star in no time. ";
    } else if(productivityHours >= 60 && productivityHours <= 79) {
        document.getElementById("message").innerHTML = "Strong effort, " + name + ", your productivity is " + productivityHours + "%. Keep it up. "; 
    } else if(productivityHours >= 40 && productivityHours <= 59){
        document.getElementById("message").innerHTML = "Decent work, " + name + ", your productivity is " + productivityHours + "%. This is great, but there is definitely room for improvement. ";
    } else {
        document.getElementById("message").innerHTML = name + ", your productivity today is " + productivityHours + "%. Too much time wasted.";
    }
}