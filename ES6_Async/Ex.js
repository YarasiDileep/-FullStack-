let goToMovie = (success, failure) => {
    let amount = 1000;
    if (amount >= 700) {
        success("Go To Movie with POP Corn")
    }
    else {
        failure("Go To PG, Bring Laptop and practice")
    }

}

goToMovie((success) => {
    console.log(success)
}, (failure) => {
    console.error(failure)
})