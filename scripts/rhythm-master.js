
////////////////
//CODE EXECUTION
////////////////

    let count = 4

    let bin = binarySeq(count)
    let euclids = []
    let euclids2 = []

    for (let i = 0; i < bin.length; i++) {
      euclids.push(makeEuclid(bin[i], 2))
      euclids2.push(makeEuclid(bin[i], 3))
    }



    let next = []
    for (let i = 1; i <= count; i++) {

      let go = makeNecklace(i,2)

      for (let j = 0; j < go.length; j++) {

        next.push(go[j].join(""))
      }
    } 


    next = next.map(a => rotateSeq(a))
 next = next.map(a => a.reverse())


    let pulses = []
    let beats = []
    let starts = []

    let paints = []
    let mirrors = []
    let inverses = []
    let palindromes = []
    let palindromes2 = []
    let mirrorInverses = []

    let ones = []
    let zeros = []

    let RAW2 = []
    let partitions = []
    let compGroups = []
    let necklaces = []

    let euclideans = []
    let euclideans2 = []
    let euclideanGroups = []
    let euclideanGroups2 = []

    let euclideansStr = []
    let euclideansStrRev = []

    let reduced = []
    let reducedBool = []
    let breakables = []
    let breakablesBool = []
    let inversionBool = []
    let inversionMirrorBool = []

    let music = []

    let begin = "<sup>"
    let end = "</sup>"

    for (let i = 0; i < next.length; i++) {

//uses binary

      pulses.push(
        next[i].map(a => countPulse(a))
      )

      beats.push(
        next[i].map(a => countBeat(a))
      )

      starts.push(
        next[i].map(a => findDownbeat(a))
      )

      paints.push(
        next[i].map(a => paintCore(a))
      )

      mirrors.push(
        next[i].map(a => paintMirror(a))
      )

      inverses.push(
        next[i].map(a => paintInverse(a))
      )

      mirrorInverses.push(
        next[i].map(a => paintMirrorInverse(a))
      ) 

      palindromes.push(
        next[i].map(a => isPalindrome(a))
      )

      music.push([...next[i]])
      music[i] = musicNotes(music[i])


      inversionBool.push([...next[i]])
      inversionBool[i] = isSelfInverse(inversionBool[i])

      inversionMirrorBool.push([...next[i]])
      inversionMirrorBool[i] = isSelfMirrorInverse(inversionMirrorBool[i])

//core groups

      ones.push([...next[i]])
      ones[i] = groupOne(ones[i])

      zeros.push([...next[i]])
      zeros[i] = groupZero(zeros[i])

      compGroups.push([...ones[i]])
      compGroups[i] = groupCompSet(compGroups[i], zeros[i]) //two parameters


//family tree

      RAW2.push([...compGroups[i]])
      RAW2[i] = groupComposition(RAW2[i], zeros[i]) //two parameters

      partitions.push([...compGroups[i]])
      partitions[i] = groupPartition(partitions[i])

      necklaces.push([...compGroups[i]])
      necklaces[i] = groupNecklace(necklaces[i])


//rhythms types

      reduced.push([...compGroups[i]])
      reduced[i] = reduced[i].map((a, j) => makeReducable(a, zeros[i][j]))

      reducedBool.push([...reduced[i]])
      reducedBool[i] = isReducable(reduced[i], RAW2[i]) //two parameters

      reduced[i] = reduceSeq(reduced[i], reducedBool[i]) 



      breakables.push([...RAW2[i]])
      breakables[i] = makeBreakable(breakables[i], pulses[i])

      breakablesBool.push([...breakables[i]])
      breakablesBool[i] = isBreakable(breakablesBool[i])



      euclideans.push([...next[i]])
      euclideans[i] = isEuclidRhythm(euclideans[i], euclids)

      euclideanGroups.push([...euclideans[i]])
      euclideanGroups[i] = isEuclidNecklace(euclideanGroups[i])

      euclideans2.push([...next[i]])
      euclideans2[i] = isEuclidRhythm(euclideans2[i], euclids2)

      euclideanGroups2.push([...euclideans2[i]])
      euclideanGroups2[i] = isEuclidNecklace(euclideanGroups2[i])



      euclideansStr.push([...RAW2[i]])
      euclideansStr[i] = isEuclidStr(euclideansStr[i], RAW2[i])

      euclideansStrRev.push([...RAW2[i]])
      euclideansStrRev[i] = isRevEuclidStr(euclideansStrRev[i], RAW2[i])

      palindromes2.push(
        RAW2[i].map(a => isPalindrome(a))
      )



//replacing with HTML superscript

      RAW2[i] = RAW2[i].map(a => a
                            .replace(/s/g, begin)
                            .replace(/e/g, end)
                           )

      reduced[i] = reduced[i].map(a => a
                                  .replace(/s/g, begin)
                                  .replace(/e/g, end)
                                 )

    }


