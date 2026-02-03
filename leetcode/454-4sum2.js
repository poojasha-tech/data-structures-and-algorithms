function fourSum(nums1, nums2, nums3, nums4) {
    let sum1and2=new Map();
    let sum3and4=new Map();

    function twoArraySum(numsA,numsB,map){
        for(let i=0;i<numsA.length;i++){
            for(let j=0;j<numsB.length;j++){
                const sum=numsA[i]+numsB[j]
                map.set(sum, (map.get(sum)||0) +1)
            }
        }

    }
    twoArraySum(nums1,nums2,sum1and2);
    twoArraySum(nums3,nums4,sum3and4);

    let count=0;

    for(const [key,value] of sum1and2.entries()){ // key : sum , value: frequency
        if(sum3and4.has(-key)){ // key from sum1and2 + key from sum3and4 =0 
            count+= value * sum3and4.get(-key) // why multiply? because of combinations // if sum1and2 has sum x with frequency m and sum3and4 has sum -x with frequency n , then total combinations = m*n
        }
    }
    return count;
        
};


var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let n=nums1.length;
    let map= new Map();
    let count=0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            let sum=nums1[i]+nums2[j]
            map.set(sum,(map.get(sum)||0 )+ 1)
        }
    }

    for(let i=0; i<n;i++){
        for(let j=0;j<n;j++){
            let req = 0 - (nums3[i]+nums4[j]);
            count+= (map.get(req) ||0 )
        }
    }
    return count;



        
};

console.log(fourSum(nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]))