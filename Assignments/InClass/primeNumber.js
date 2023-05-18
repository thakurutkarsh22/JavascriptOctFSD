function nuuberOfPrimes(n) {
    // n is basically th input 

    const arr = new Array(n+1) // 51

    for(let i =0; i<= n; i++) {
        arr[i] = 0;
    }

    arr[2] = 1;

    for(let i=2; i*i <= n; i++) {

        //  multiples of i
        for(let j =i; j<= n; j +=i ) {
            if(arr[j] % i) {
                arr[i] = -1;
            }
        }


    }


}

// TODO: do this. 