function compute() { // this function will compute the interest rate
    let principal = document.getElementById("principal").value;
     
    if (principal <= 0) { // use if statement to check validation
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
        result.innerHTML = "";
        return;
    }

    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);  
    let result = document.getElementById("result");
    result.innerHTML =  "If you deposit <mark>" + principal + 
                        "</mark>,<br/>at an interest rate of <mark>" + rate + 
                        "%</mark><br/>You will receive an amount of <mark>" + interest + 
                        "</mark>,<br/>in the year <mark>" + year + "</mark><br/>";                    
}

function updateRate() {
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_value").innerText = rateval;
}