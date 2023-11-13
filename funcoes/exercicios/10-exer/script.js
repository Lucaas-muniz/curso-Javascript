function decrementaExibeNumerosPares (n) {
    while(n > 0) {
        if (n % 2 == 0) {
            console.log(n);
        }
        n--;
    }
}

decrementaExibeNumerosPares(10);
decrementaExibeNumerosPares(15);