    //table maker, end of code execution for rhythm
    let mow = []
    mow.push(`<table>`)
    mow.push(`  
<tr>
<th>pulse</th>
<th>beat</th>
<th>start</th>

<th>paint</th>
<th>inner1</th>
<th>inner2</th>

<th>reduced</th>
<th>reBool</th>
<th>break</th>
<th>breakBool</th>

<th>mirror</th>

<th>inverse</th>
<th>mirrInv</th>
<th>pali</th>

<th>parti</th>
<th>neck</th>
<th>compGr</th>
<th>comps</th>

<th>eucs</th>
<th>euc2</th>
<th>music</th>

  </tr>
`)


//TABLEFILTER HEADERS

<table style="width:100%"id="grouped-headers">
  <thead>
    <tr>
      <th colspan="3" style="background-color:orange">Filter</th>
      <th colspan="3" style="background-color:lightblue">Visual</th>
    </tr>
    <tr>
      <th   nowrap="">Start  <img src="tablefilter/style/themes/updown.png"></th>

      <th  nowrap="">Pulse  <img src="tablefilter/style/themes/updown.png"></th>
      <th   >Beat  <img src="tablefilter/style/themes/updown.png"></th>
      <th  nowrap="">Muse  <img src="tablefilter/style/themes/updown.png"></th>
      <th  nowrap="">Rhythm  <img src="tablefilter/style/themes/updown.png"></th>

      <th   >Composition  <img src="tablefilter/style/themes/updown.png"></th>


    </tr>
  </thead>



//UNOBTRUSIVE JAVASCRIPT EXAMPLE


<input class="swamp" type="checkbox">
<span id="bus">flub</span>

<script>
  let bus = document.getElementById("bus")


  /*FORMAT BAR SCRIPT START*/  
  document.querySelectorAll('.swamp').forEach(el => {

    el.addEventListener('click', function (ev) {
      ev.target.checked
        ? bus.innerHTML = "bugger"
        : bus.innerHTML = "flub"
      

    });

  });
  /*FORMAT BAR SCRIPT END*/  
</script>



//CHANGING THE DOM WITH LOOPS
<span id="bus"></span>
<br>
<br>
<span id="goose"></span>
<br>
<br>
<span id="grow"></span>

<script>
  let bus = document.getElementById("bus")
  let brick = [];
  function rugby(){

    for (let i = 0; i < 4; i++){
      brick.push(`<input  value="${i}" class="swamp" type="checkbox"> Mr.${i}`)
    }
  }

  rugby()

  bus.innerHTML = brick.join(" ")



  /*FORMAT BAR SCRIPT START*/  
  let fun = document.querySelectorAll('.swamp')
  let goose = document.getElementById("goose")
  let george;
  fun.forEach(el => {

    let para = document.createElement('p');
    para.textContent = el.value


    el.addEventListener('click', function (ev) {
      goose.innerHTML = ""
      george = []
      
      for (let i = 0; i < fun.length; i++){
        if(fun[i].checked){
          george.push(`<input  value="${fun[i].value}" class="cloud" type="checkbox"> ${fun[i].value}`)
        }
      }

      goose.innerHTML = george.join(" ")

    });

  });
  /*FORMAT BAR SCRIPT END*/  
  
  

</script>



//STYLE FOR TABLES IN RHYTHM
<style>
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

 
  table {
    border-collapse: collapse;

  }

  th,
  td {
    border-width: .5px;
    border-style: solid;
    border-color: lightgrey;
    text-align: center;
    width: 30px;
    height: 30px;

  }

  .lucy {
    font-size: 14px;
  }

  .jelly {
    display: inline-block;
  }

  #party {
    overflow: scroll;
    height: 100px;
    width: 300px;
  }
</style>



//HTML FOR FIELDSET RHYTHM
<fieldset class="jelly">
  <legend>Additional Info</legend>
  <div>
    <input type="checkbox" id="singlet" checked>
    <label>Singlet</label>
    <input type="checkbox" id="zeroMe">start at 0
  </div>
  <div>
    <input type="checkbox" id="duplet">
    <label>Duplets</label>
  </div>
  <div>
    <input type="checkbox" id="triplet">
    <label for="music">Triplets</label>
  </div>
  <div>
    <input type="checkbox" id="customMe">
    <label for="music">Custom</label>
    <input id="custom1" type="text" size="1">
    <input id="custom2" type="text" size="1">
    <input id="custom3" type="text" size="1">
    <input id="custom4" type="text" size="1">
  </div>
</fieldset>


//NEST LOOP GENERATOR
//create array to loop through with letters i, j ,k , then place in string
    //add into eval code for performance tests


 let pulseGroup = "group"
    let PC = 8 


    //3 stages
    //define variables
    let varDef = []

    //create loop nests
    let full = []
    let pushed = ""
    let closer = ""

    //combine arrays
	//fix group1 concat it gets used twice
    let arrcat = ["\nlet RAW = group1.concat("]


    
    for (let i = 1; i <= PC; i++){
      //define variables
      varDef.push(`let group${i} = []`)

      //loop nesting
      pushed += "${i" + i + "}"
      full.push(`    
for (let i${i} = VC; i${i} >= 0; i${i}--) {
group${i}.push(` + "`" + pushed + "`)")


      //count loop closings
      closer += `}\n`

      //count array groups
      arrcat.push(`group${i},`)

    }


//closing loop nest and array concat
    full.push(closer)
    arrcat.push(")")

    //creating code here
    stamp.value = 
      varDef.join("\n") 
      + "\nlet VC = 1\n" 

      + full.join("\n")
      + arrcat.join("\n")


    
  