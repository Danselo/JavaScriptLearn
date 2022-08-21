function add(){
    const form = document.getElementById('form');
    let operandoA = form['operandA'];
    let operandoB = form['operandB'];
    let result = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(result)){
        result = 'The operation does not include numbers';
        document.getElementById('result').innerHTML = `Result: ${result}`;
        alert(`Result: ${result}`);
    }else{
        document.getElementById('result').innerHTML = `Result: ${result}`;
        alert(`Result: ${result}`);
    }
    
}