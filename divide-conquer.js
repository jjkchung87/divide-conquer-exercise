
//   L       M       R
//   L M   R
//       L R
//     R L     
//  [1,1,0,0,0,0,0,0,0]
//i: 0,1,2,3,4,5,6,7,8
//length = 9



function countZeroes(arr){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal=arr[middleIdx]

        if(middleVal === 0){
            rightIdx = middleIdx -1
        }

        else if(middleVal === 1){
            leftIdx = middleIdx + 1
        }
    }

    return arr.length-leftIdx
}

//Value=2
//    L     M     R
//
//      
//   [1,1,2,2,2,2,3]


function countZeroes2(arr, highIdx=arr.length-1, lowIdx=0){

    if(arr[highIdx] !== 0) return 0
    if(arr[lowIdx] === 0) return arr.length
    let middleIdx = Math.floor((lowIdx + highIdx)/2)
    
    if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 1) return highIdx - middleIdx + 1
    if (arr[middleIdx] === 1 && arr[middleIdx + 1] === 0) return highIdx - middleIdx

    if (arr[middleIdx] === 0 && arr[middleIdx - 1] === 0){
        highIdx = middleIdx -1;
        return countZeroes2(arr, highIdx, lowIdx)}
        else{
            lowIdx = middleIdx + 1;
            return countZeroes2(arr,highIdx,lowIdx)
        }
}
    


function findRotatedIndex(arr,val){
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let middleIdx = Math.floor((leftIdx + rightIdx)/2)
    let middleVal = arr[middleIdx]

    if(val >= arr[0] && val <= middleVal){ //if value is between first and mid index
        rightIdx = middleIdx     // move rightindex to middle
    } else{
        leftIdx = middleIdx // or else move left index to middle
    }

    while (leftIdx <= rightIdx){ //basic binary search
        let middleIdx = Math.floor((leftIdx + rightIdx)/2) 
        let middleVal = arr[middleIdx];

        if(middleVal < val){  
            leftIdx = middleIdx +1; 
        }

        else if(middleVal > val){
            rightIdx = middleIdx -1;
        }

        else {return middleIdx}

    }

    return -1

}

function findRotationCount(arr){

}


function findFloor(arr,val){
    let leftIdx = 0;
    let rightIdx = arr.length-1

    if(arr[0] > val) {
        return -1
        } else {
            while (leftIdx <= rightIdx) {
            let middleIdx = Math.ceil((leftIdx+rightIdx)/2)
            let middleVal = arr[middleIdx]
        
                if(leftIdx === rightIdx){
                    return arr[leftIdx]
                }
                
                if(middleVal < val){
                    leftIdx = middleIdx
                }

                else if(middleVal > val){
                    rightIdx = middleIdx-1
                }

            }
        }
}

