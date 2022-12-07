
//CORE 

    //necklace generator
    function makeNecklace(n, k) {
      var necklaces = [],
          a = [],
          i = -1,
          j;
      while (++i < n) a[i] = 0;
      necklaces.push(a.slice());
      while (1) {
        i = n;
        while (--i >= 0) if (a[i] < k - 1) break;
        if (i < 0) break;
        a[j = i++]++;
        while (++j < n) a[j] = a[j % i];
        if (n % i === 0) necklaces.push(a.slice());
      }
      return necklaces;
    }


    //remove duplicates
    function removeDuplicate(n) {
      let clean = []

      for (let i = 0; i < n.length; i++) {
        if (!clean.includes(n[i])) {
          clean.push(n[i])
        }
      }

      return clean

    }

    //rotate sequences,requires removeDuplicate
    function rotateSeq(n) {
      let num = []

      for (let i = 0; i < n.length; i++) {
        num.push(n)
        n += n[0]
        n = n.slice(1)
      }
      console.log()
      return removeDuplicate(num)
    }

