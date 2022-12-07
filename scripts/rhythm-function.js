//find Varcount and figure why regex in 7 fails
//PAINT 


    //pulse counter
    function countPulse(n){

      return n.length
    }


    //beat counter
    function countBeat(n){

      let bag = []
      for (let j = 0; j < n.length; j++) {
        if (n[j] == 1) {
          bag.push(1)
        }
      }

      return bag.length
    }


    //starting point: downbeat or syncopation
    function findDownbeat(n){

      if (n[0] == 1) {
        return "D"
      }
      else if (n[0] == 0) {
        return "S"
      }
    }





    //rhythm illustration
    function paintCore(n){

      return n
        .replace(/0/g, `⚪`) //`⚪`
        .replace(/1/g, `⚫`) //`⚫`
    }


    function paintInverse(n){

      return n
        .replace(/0/g, `o`)
        .replace(/1/g, `0`)
        .replace(/o/g, `1`)	
        .replace(/0/g, `⚪`)
        .replace(/1/g, `⚫`)

    }


    //reflection or mirror
    function paintMirror(n){

      return n
        .split("")
        .reverse()
        .join("")
        .replace(/0/g, `⚪`)
        .replace(/1/g, `⚫`) 
    }


    //reflection or mirror
    function paintMirrorInverse(n){

      return n
        .split("")
        .reverse()
        .join("")
        .replace(/0/g, `o`)
        .replace(/1/g, `0`)
        .replace(/o/g, `1`)	
        .replace(/0/g, `⚪`)
        .replace(/1/g, `⚫`) 
    }


    //musical notes
    let note = [
"s","e","e.","q",
"q-s","q.","q-e.","h",
"h-s","h,","h-e.","h.",
"h.-s","h-q.","h.-e","w"
]

    let rest = [
"S","E","E.","Q",
"Q_S","Q.","Q_E.","H",
"H_S","H,","H_E.","H.",
"H._S","H_Q.","H._E","W"
]

    function musicNotes(arr) {


      for (let varCount = count; 0 < varCount; varCount--) {
        arr = arr.map(a => a
                      .replace(new RegExp(`1${"0".repeat(varCount - 1)}`, "g"), note[varCount - 1]))

      }

      //why does starting on 7 in regex fail
      for (let varCount = count; 0 < varCount; varCount--) {
        arr = arr.map(a => a
                      .replace(new RegExp(`${"0".repeat(varCount)}`, "g"), rest[varCount - 1]))

      }

      return arr


    }


//BOOLEAN

    //binary palindrome or the same forwards as backwards
    function isPalindrome(n){

      return n == n
        .split("")
        .reverse()
        .join("")
    }

   function isReducable(arr, arr2){

      return arr.map((a,i) => a != arr2[i])

    }

    function isBreakable(arr){

      return arr.map((a,i) => a.length > 0)

    }

    function isSelfInverse(arr) {

      return arr.map(function (a) {
        let len = a.length / 2

        return a.length % 2 == 0
          ? a.slice(0, len) == a.slice(len)
          .replace(/0/g, `o`)
          .replace(/1/g, `0`)
          .replace(/o/g, `1`)
        : false
      })

    }
    
    function isSelfMirrorInverse(arr) {

  return arr.map(function (a) {
    let len = a.length / 2

    return a.length % 2 == 0
      ? a.slice(0, len) == a.slice(len)
        .replace(/0/g, `o`)
        .replace(/1/g, `0`)
        .replace(/o/g, `1`)
        .split("")
        .reverse()
        .join("")
      : false
  })

}

 

function isEuclidRhythm(arr, euc) {

      for (let j = 0; j < euc.length; j++) {

        if (arr.includes(true)) {

        }

        else {
          arr = arr.map(a =>
                        a == euc[j]
                        ? a = true
                        : a
                       )

        }
      }

      for (let j = 0; j < euc.length; j++) {

        if (arr.includes(false)) {

        }

        else{
          arr = arr.map(a =>
                        a !== true //used strict here
                        ? a = false
                        : a
                       )
        }

      }


      return arr

    }



    function isEuclidNecklace(arr) {

      if (arr.includes(true)) {

        arr = arr.map(a => a = true)
      }

      return arr

    }



   function isEuclidStr(arr, arr2) {

      for (let j = 0; j < arr.length; j++) {
        let bag;
        bag = arr[j].split("")
        bag[bag.length - 1] = +bag[bag.length - 1] - 1
        bag[0] = +bag[0] + 1
        arr[j] = bag.join("")

        arr2.includes(arr[j])
          ? arr[j] = true
        : arr[j] = false
      }

      return arr

    }


    function isRevEuclidStr(arr, arr2) {

      for (let j = 0; j < arr.length; j++) {
        let bag;
        bag = arr[j].split("")
        bag[bag.length - 1] = +bag[bag.length - 1] + 1
        bag[0] = +bag[0] - 1
        arr[j] = bag.join("")

        arr2.includes(arr[j])
          ? arr[j] = true
        : arr[j] = false
      }

      return arr

    }


//EUCLIDEAN RHYTHMS

  //for euclidean rhythms, makes different binary groupings
    function binarySeq(n) {

      let str = []

      for (let j = 1; j <= n; j++) {

        for (let i = 0, o = j; i <= j; i++ , o--) {
          str
            .push(
            ("1".repeat(i) + "0".repeat(o))
            .split("")
          )
        }

      }
      return str
    }



    function makeEuclid(n, limit) {

      //base case
      if (n.length <= limit
         ) {
        return n.join("")
      }

      else {

        //formatting
        let as = n
        .sort((a, b) => b - a)
        .map(a => "" + a)

        //find index of difference
        let nd = 0
        for (let i = 0; i < as.length; i++) {

          if (as[i] != as[i + 1]) {
            nd = i + 1
            break
          }
        }
        //create arrays
        let ones = as
        .slice(0, nd)

        let zeros = as
        .slice(nd)

        //length of loop
        let len = 0
        ones.length > zeros.length
          ? len = ones.length
        : len = zeros.length

        //new array balanced
        let go = []
        for (let i = 0; i < len; i++) {

          go[i] = ones[i] + zeros[i]
          go[i] = go[i].replace(/undefined/g, "")
        }

        //stops arrays such 111 from overflowing
        return n.join("") == go.join("") 
          ? go.join("")
        : makeEuclid(go, limit)
      }



    }






//BREAKABLES
//needs list factor
    function makeBreakable(arr, arr2) {

      let pulse = arr2[0]

      return arr.map(function (a) {
        let ftr = listFactor(pulse)
        let final = []

a = a.split(",")//needed from the addition of commas

        for (let j = 0; j < ftr.length; j++) {
          let truth = []
          let ct = 0
          let num = pulse / ftr[j]

          for (let i = 0; i < a.length; i++) {
            ct += +a[i]

            if (ct == num && ct != pulse) {
              ct = 0
              truth.push(true)
            }

          }

          if (truth.length == ftr[j]) {
            final.push(num)
          }

        }

        return final.join(":")
      })

    }
    



//REDUCABLES

    //factor finder
    function listFactor(n) {
      let num = []
      for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
          num.push(i)
        }
      }
      return num
    }



    //greatest common factor, needs factor function, this one runs faster than gcf
    function findGCF2(n) {
      n.sort((a, b) => a - b)//smallest number first

      let arr = []
      for (let i = 0; i < n.length; i++) {
        arr.push(
          listFactor(n[i])
          .sort((a, b) => b - a)//largest number first
        )
      }


      let tester;
      for (let j = 0; j < arr[0].length; j++) {
        let tester = []

        for (let i = 0; i < arr.length; i++) {

          if (arr[i].includes(arr[0][j])) {
            tester.push(arr[0][j])
          }

        }

        if (tester.length == arr.length) {
          return tester[0]
        }

      }

      return "none"

    }

//reduces rhythms to their lowest common denominator
function makeReducable(one, zero) {
if (one == 0) return one


  let crack = (zero + "," + one)
    .split(",")
    .filter(a => Number.isInteger(+a) && +a !== 0)
    .map(a => +a)

  let great = findGCF2(crack)

  return +zero !== 0
    ? `s${zero / great}e` + one
      .split(",")
      .map(a => +a / great)
      .join(",")
    : one
      .split(",")
      .map(a => +a / great)
      .join(",")
}


 

    function reduceSeq(arr, arr2){

      return arr.map((a,i) => arr2[i] == false 
                     
                     ? "" 
                     : a )

    }



//FAMILY TREE

function groupOne(arr) {

  arr = arr.map(a => a
    .split("")
    .slice(a.indexOf("1"))
    .join("")
    .replace(/1/g, "x")
    .replace(/0/g, "o")
  )

  for (let varCount = count; 0 < varCount; varCount--) {
    arr = arr.map(function (a) {

      return a
        .replace(new RegExp(`x${"o".repeat(varCount - 1)}`, "g"),
          `${varCount},`)
    }
    )

  }

  return arr
    .map(function (a) {
      return a[a.length - 1] == ","
        ? a
          .slice(0, a.length - 1)
          .replace(/o/g, "0")
        : a
          .replace(/o/g, "0")
    })


}





function groupZero(arr) {

  arr = arr.map(a => (a + "1")//needed for zero superscript
    .split("")
    .slice(0, a.indexOf("1"))
    .join("")
    .replace(/1/g, "x")//should be no "x"
    .replace(/0/g, "o")
  )

  for (let varCount = count; 0 < varCount; varCount--) {
    arr = arr.map(function (a) {

      return a
        .replace(new RegExp(`${"o".repeat(varCount)}`, "g"),
          `${varCount}`)
    }
    )
  }



  return arr.map(function (a) {
    return a[a.length - 1] == ","
      ? a
        .slice(0, a.length - 1)
        .replace(/o/g, "0")
      : a
        .replace(/o/g, "0")
  })

}


//composition groups
function groupCompSet(arr, zero) {
  return arr.map(function (a, i) {
    let num = a.split("")

    a == 0
      ? num[num.length - 1] = 0 //can remove conditional if 4^4 is needed instead of 4^0
      : num[num.length - 1] = +num[num.length - 1] + +zero[i]

    return num.join("")
  }
  )
}


//partitions sorted comp set
function groupPartition(arr) {
    return arr.map(el => el
        .split("")
        .sort((a, b) => b - a)
        .join("")
    )
}

//use comp set
function groupComposition(arr, zero) {


    return arr.map((a, i) =>
        zero[i]
            ? `s${zero[i]}e${a}`
            : a)
}

//use comp set
function groupNecklace(arr) {
    return arr.map(a => a = arr[0])
}


