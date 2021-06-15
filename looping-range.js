function range(start,end,step){
  const nums = [];
  if(start > end || start === undefined || end === undefined || step === undefined || step <= 0){
    return nums;
  } else{
    for(let i = start; i <= end; i += step){
      nums.push(i);
    }
  }
  return nums;
}

console.log(range(0, 10, 1));
console.log(range(40, 30, 5));
console.log(range(-5, 2, 0));