var form = document.querySelector(".exchangeForm");
form.onsubmit = function(e){
    e.preventDefault();
    var data = e.target.elements[0].value;
    var select =e.target.elements[1].value;
    if (select =="dollar")
        document.querySelector(".result").innerHTML = (data * 0.285) ;
    else if (select =="dinar")
        document.querySelector(".result").innerHTML = (data * 0.2);
    else document.querySelector(".result").innerHTML = data;
}