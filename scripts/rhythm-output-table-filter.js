
    //table maker
    let mow = []
    mow.push(`<table style="width:100%"id="grouped-headers">`)
    mow.push(`  

    <thead>


        <tr>
		<th nowrap="">Pulse  <img src="tablefilter/style/themes/updown.png"></th>
            	<th nowrap="">Beat  <img src="tablefilter/style/themes/updown.png"></th>
           	<th>Start  <img src="tablefilter/style/themes/updown.png"></th>
		<th nowrap="">On/Off  <img src="tablefilter/style/themes/updown.png"></th>



            	<th>Inter-Onset  <img src="tablefilter/style/themes/updown.png"></th>
		<th nowrap="">Necklace Group  <img src="tablefilter/style/themes/updown.png"></th>

<th>reduced  <img src="tablefilter/style/themes/updown.png"></th>
<th>reducable  <img src="tablefilter/style/themes/updown.png"></th>

<th>broken  <img src="tablefilter/style/themes/updown.png"></th>
<th>breakable  <img src="tablefilter/style/themes/updown.png"></th>



<th>music  <img src="tablefilter/style/themes/updown.png"></th>

<th>euclidean  <img src="tablefilter/style/themes/updown.png"></th>
<th>euclidean2  <img src="tablefilter/style/themes/updown.png"></th>

<th>palindrome  <img src="tablefilter/style/themes/updown.png"></th>
<th>palindrome2  <img src="tablefilter/style/themes/updown.png"></th>

<th>mirror  <img src="tablefilter/style/themes/updown.png"></th>
<th>inverse  <img src="tablefilter/style/themes/updown.png"></th>

        </tr>

    </thead>
    <tbody style="text-align:left">
`)

/*
<th>reduced</th>
<th>break</th>

<th>eucs</th>
<th>euc2</th>
<th>reBool</th>
<th>breakBool</th>
<th>pali</th>
*/




    for (let i = 0; i < next.length; i++) {

      for (let j = 0; j < next[i].length; j++) {



//if (palindromes[i][j] == true){

        mow.push(
          `
<tr>
<td>${pulses[i][j]}</td>
<td>${beats[i][j]}</td>
<td>${starts[i][j]}</td>

<td>${paints[i][j]}</td>



<td>${RAW2[i][j]}</td>
<td>${necklaces[i][j]}</td>


<td>${reduced[i][j]}</td>
<td>${reducedBool[i][j]}</td>

<td>${breakables[i][j]}</td>
<td>${breakablesBool[i][j]}</td>

<td><span class="muse">${music[i][j]}</span></td>

<td>${euclideans[i][j]}</td>
<td>${euclideans2[i][j]}</td>

<td>${palindromes[i][j]}</td>
<td>${palindromes2[i][j]}</td>

<td>${mirrors[i][j]}</td>
<td>${inverses[i][j]}</td>


  </tr>
`) 

//}

      }
    } 

	mow.push(`
	</tbody>
	</table>
	`)

