const productivityHistory = [];

function calculate (){
    const name = document.getElementById("name").value;
    const worked = Number(document.getElementById("worked").value);
    const wasted = Number(document.getElementById("wasted").value); 

    const productivityHours = Math.floor(worked / (worked + wasted) * 100);
    const remainingHours = 24 - (worked + wasted);

    results(name, productivityHours, remainingHours);
    productivityMessage(name, productivityHours);
    getRandomQuote(quotes, name);
    productivityHistory.push(productivityHours);



}

function results(name, productivityHours, remainingHours){
    document.getElementById("result").innerHTML = "Result: " + productivityHours + "%";
    //document.getElementById("message").innerHTML = name + ", your productivity today is " + productivityHours + "%. Keep Pushing!";
    document.getElementById("hoursRemain").innerHTML = "Remaining Hours: " + remainingHours + " hours";
    document.getElementById("history").innerHTML = "Number of Entries: " + productivityHistory.length;
    
}

function productivityMessage(name, productivityHours){
    if (productivityHours >= 80){
        document.getElementById("message").innerHTML = "Elite Focus, " + name + ", great work. Your productivity is " + productivityHours + "%. Keep this up and you will be a star in no time. ";
    } else if(productivityHours >= 60 && productivityHours <= 79) {
        document.getElementById("message").innerHTML = "Strong effort, " + name + ", your productivity is " + productivityHours + "%. Keep it up. "; 
    } else if(productivityHours >= 50 && productivityHours <= 59){
        document.getElementById("message").innerHTML = "Decent work, " + name + ", your productivity is " + productivityHours + "%. This is great, but there is definitely room for improvement. ";
    } else {
        document.getElementById("message").innerHTML = name + ", your productivity today is " + productivityHours + "%. Too much time wasted.";
    }
}

function getRandomQuote(quotes, name){
    var quoteRandom = Math.random() * quotes.length;
    quoteRandom = Math.floor(quoteRandom);
    var randomQuotes = quotes[quoteRandom];

    document.getElementById("quote").innerHTML = "Motivational Quote: " + name + " " + randomQuotes + ".";

    
}

const quotes = [

    "Stay disciplined.",
    "Small progress is still progress.",
    "Focus beats talent.",
    "You control your time.",
    "Consistency creates success.",
    "Discipline over motivation.",
    "Win the morning, win the day.",
    "Do it now.",
    "Progress, not perfection.",
    "Your future is built today.",
    "Time is your most valuable asset.",
    "Eliminate distractions.",
    "Deep work builds greatness.",
    "Effort compounds.",
    "One hour of focus beats three hours of distraction.",
    "Protect your energy.",
    "Habits shape your destiny.",
    "Start before you're ready.",
    "Discomfort builds strength.",
    "Focus is a superpower.",
    "You become what you repeat.",
    "Less scrolling, more building.",
    "Action creates clarity.",
    "Dream big. Work bigger.",
    "Stay sharp.",
    "Momentum matters.",
    "Hard work wins.",
    "Excellence is a habit.",
    "Be stronger than your excuses.",
    "Show up every day.",
    "Results love discipline.",
    "Build, don't complain.",
    "Stay hungry.",
    "Improve 1% daily.",
    "Sacrifice now, shine later.",
    "Focus fuels success.",
    "Keep pushing.",
    "Effort never lies.",
    "Stay committed.",
    "Control your habits.",
    "Success rewards consistency.",
    "Work in silence.",
    "Master your time.",
    "Be unstoppable.",
    "No distractions.",
    "Execution beats ideas.",
    "Sharpen your focus.",
    "Stay locked in.",
    "Your goals deserve effort.",
    "Discipline equals freedom."

];
    
