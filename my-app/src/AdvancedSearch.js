import Information from "./Information";

//search list
export default function AdvancedSearch()
{
    //init variable
    var input, filter, ul, li, a, i, txtValue;
return(
<div>
<h2>🅵🅾🅾🅳🅶🅿🆃</h2>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name" />


//****this part will be stored into database ******
<ul id="myUL">
  <li><a href="#">food1</a></li>
  <li><a href="#">food2</a></li>

  <li><a href="#">food3</a></li>
  <li><a href="#">food4</a></li>

  <li><a href="#">food5</a></li>
  <li><a href="#">food6</a></li>
  <li><a href="#">food7</a></li>
</ul>



    //assign input to variable
    input = document.getElementById("myInput"); //*** */
    
    //assign all value to upperCase
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0]
        txtValue = a.textContent || a.innerText
        //if txtvalue are used
        if (txtValue.toUpperCase().indexOf(filter) > -1) 
            li[i].style.display = ""
         else 
            li[i].style.display = "none"
        
    }
</div>

);
}
