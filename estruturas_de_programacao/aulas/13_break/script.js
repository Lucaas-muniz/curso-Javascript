for (let i = 1; i <= 10; i++) {
    if (i == 3) {
        nome = 'lucas';
    }

    if (i == 5 && nome == 'lucas') {
        console.log('O nome é lucas, pode parar');
        break;
    }

    console.log(i);
}