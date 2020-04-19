export const mergedsort=(arr)=> {
    console.log("array",arr)
   if (arr.length < 2) {
     return arr; }
   else {
     var midpoint = parseInt(arr.length / 2);
     console.log("array",midpoint)
     var leftArr   = mergedsort(arr.slice(0, midpoint));
     var rightArr  = mergedsort(arr.slice(midpoint, arr.length));
     return merge(leftArr, rightArr);
     
   }
}

const  merge=(leftArr, rightArr)=>{
    console.log("left",leftArr)
    console.log("right",rightArr)
   var sortedArr = [];
     while (leftArr.length && rightArr.length) {
       if (leftArr[0] <= rightArr[0]) {
         sortedArr.push(leftArr[0]);
         leftArr = leftArr.slice(1)
      } else {
         sortedArr.push(rightArr[0]);
         rightArr = rightArr.slice(1)
        }
      }
     while (leftArr.length)
       sortedArr.push(leftArr.shift());
     while (rightArr.length)
       sortedArr.push(rightArr.shift());
       console.log('This should be the sorted array!',sortedArr)
     return sortedArr;
   }

   
   