function adding(){
    var txt = document.getElementById("text-bar")
    var value = txt.value
    var ul = document.getElementById("biglist")
    var li = document.createElement("li")
    var span = document.createElement("span")
    span.className = "close";
    span.setAttribute("onclick", "testing(this.parentNode)")
    li.setAttribute("onclick", "check(event.target)")
    var close = document.createTextNode("\u00D7");
    span.appendChild(close);

    if (value == ""){
        window.alert("You must write something")
    }

    else{
        li.appendChild(document.createTextNode(value))
        li.append(span)
        ul.append(li)
    }

}

function testing(parentNode){
    var ul = document.getElementById("biglist")
    ul.removeChild(parentNode);
}


function check(currentNode){
    currentNode.classList.toggle("checked")
}