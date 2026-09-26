let num = 17;

let prime = true;

if (num <= 1) {
    prime = false;
} else {

    for (let i = 2; i <= parseInt(num / 2); i++) {

        if (num % i == 0) {
            prime = false;
            break;
        }

    }
}

if (prime == true) {
    console.log("prime no");
} else {
    console.log("not a prime no");
}