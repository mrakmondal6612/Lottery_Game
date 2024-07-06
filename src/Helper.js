function generateTicket(n){
     let arr = new Array(n);
     for(let i =0; i<n; i++){
          arr[i] = Math.floor(Math.random() * 10);
     }
     return arr;
}

function sum(arr){
     let ans= 0;
     for(let i=0; i<arr.length; i++){
          ans += arr[i];
     }
     return ans;
}

export {generateTicket, sum};