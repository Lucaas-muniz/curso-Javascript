try{
    let a = 2 + b;
} catch(e) {
    console.log('O erro foi ' + e);
} finally {
    console.log("Executou");
}

// o finally executa quando o codigo passa pelo try ou pelo catch
