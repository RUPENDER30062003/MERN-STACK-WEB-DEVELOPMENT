let arr=["abc","abcd","abcde","abcdef","abcdefg"];
let num=3;

function arrmax(arr,num){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            ans.push(arr[i]);
        }
    }
    return ans;
}


let str="abcdabcdefgggh";


function unique(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let curr=str[i];
        if(ans.indexOf(curr)==-1) {
            ans+=curr;
        }
    }
    return ans;
}

let country=["Australia","Germany","UnitedStatesofAmerica"];
function largest(arr){
    let max=country[0];
    for(let i=1;i<country.length;i++){
        if(arr[i].length>max.length){
            max=arr[i];
        }
    }
    return max;
}

function vowels_count(string){
    let count=0;
    let vowels=['a','e','o','i','u'];
    for(let i=0;i<string.length;i++){
        let curr=string[i];
        if(vowels.includes(curr)){
            count++;
        }
    }
    return count;
}

function random_start_to_range(start,end){
    return start+(Math.random()*(end-start));
}
