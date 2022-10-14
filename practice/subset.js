function isSubset(a1, a2, n, m) {
    // let ans = "No"
    a1.sort(function(a,b){return a - b});
    a2.sort(function(a,b){return a - b});
    // console.log(a2,a1);
    for (let i = 0; i < m; i++) {
        let ans = "No";
        // console.log("OK");
        let start = 0;
        let end = a1.length - 1;
        let mid = Math.floor((start + end) / 2);
        let num = a2[i];
        while (start <= end) {
            console.log(a1);
            a1.sort(function(a,b){return a - b});
            // console.log(`a2 = ${a2[i]}`);
            // console.log(a1[mid]);
            if (num == a1[mid]) {
                // return true;
                // continue;
                // console.log("KKKKKK")
                ans = "Yes";
                a1[mid] = 0;
                // console.log(a1);
                break;
            }
            if (num > a1[mid]) {
                start = mid + 1;
            }
            if (num < a1[mid]) {
                end = mid - 1;
            }
            mid = Math.floor((start + end) / 2);
        }
        // console.log(ans);
        if (ans === "No") {
            // console.log("YYAYYA")
            return "No"
        };
        // return "No";
    }
    return "Yes";
}
let a1 = [1,2,3,4,5,1,1,1];
let a2 = [1,2,3,1]
let n = 8;
let m = 4;
console.log(isSubset(a1, a2, n, m))