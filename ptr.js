

let n = 5; 

for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    for (let j = 0; j < 2 * i; j++) {
        str += "-";
    }

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    console.log(str);
}

for (let i = n - 1; i >= 0; i--) {
    let str = "";

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    for (let j = 0; j < 2 * i; j++) {
        str += " ";
    }

    for (let j = 0; j < n - i; j++) {
        str += "*";
    }

    console.log(str);
}

