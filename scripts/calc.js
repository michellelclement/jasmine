Calculator = function() {
    this.value = 0;
}


Calculator.prtotype.add = fucntion(number){
    if(typeof(number) == "number") {
        this.value += number;
    } else {
        alert("error!");
    }
}