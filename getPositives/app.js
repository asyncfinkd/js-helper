function getPositives(x) {
	let arr = [];
	for(tx in x) {
		if(x[tx]>=0) {
    	arr = [...arr, x[tx]];
    }
	}
  
  return arr;
}

console.log(getPositives([-1,-2,-35,1,2,3,4]))
