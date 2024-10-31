// Defining the functions

function isOdd(n)
{
    console.log((n % 2) ? true : false);
}

function oddsSmallerThan(n) 
{
    totalOddNumbers = 0;
    for (let i=0; i < n; i++)
    totalOddNumbers = (i % 2) ? totalOddNumbers + 1 : totalOddNumbers;
    console.log(totalOddNumbers);
}

function squareOrDouble(n) {
    console.log((n % 2) ? Math.pow(n,2):(2*n));  
  }


// Calling the functions
isOdd(7);
isOdd(10);
oddsSmallerThan(7);
oddsSmallerThan(15);
squareOrDouble(16);
squareOrDouble(9);

