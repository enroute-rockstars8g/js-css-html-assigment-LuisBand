const fibonacci = (number) => {
    const fib = [0, 1];

    for(let i = 2; i <= number; i++){
        fib[i] = fib[i - 1] + fib[i - 2] ;
    }

    return fib[number];
}

const factorial = (number) => {
    if (number < 0) 
            return -1;
    else if (number == 0) 
        return 1;
    else {
        return (number * factorial(number - 1));
    }
}

const renderTaquitos = (number) => {
    document.getElementById('results').innerHTML = "";

    for(let i=0; i<number; i++){
        let img = document.createElement("img");
        img.src = "../assets/taquito.png";
        document.getElementById('results').appendChild(img);
    }
}

const getResult = () => {
    let option = document.getElementById("combo-box").value;
    let value = document.getElementById("input-number").value;

    switch(option){
        case "fibonacci":
            renderTaquitos(fibonacci(value));
            break;
        case "factorial":
            renderTaquitos(factorial(value));
            break;
    }
}