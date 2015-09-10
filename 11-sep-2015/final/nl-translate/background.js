var $textbox = $("textarea,input[type='text']");

$(document).on("keydown", "textarea,input[type='text'],.input", process);
// $(document).on("click", "textarea,input[type='text']", function(){alert("AAAA");});

function process(e) {

    if (e.ctrlKey && e.keyCode == 32) {
        e.preventDefault();
        translate($(e.target));
    }
}

function getValue(target){
    if (target.prop("tagName") === "TEXTAREA" || target.prop("tagName") === "INPUT"){
        return target.val();
    } 
    else {
        return target.html();
    }
}
function setValue(target, value){
    if (target.prop("tagName") === "TEXTAREA" || target.prop("tagName") === "INPUT"){
        target.val(value);
    } 
    else {
        target.html(value);
    }
}

function getToken(){
    if(bingTranslateToken){
        return bingTranslateToken;
    }
    else{
        return "YOUR TOKEN HERE";
    }
}

function translate(target) {
    var fromText = getValue(target),
        hightlight = window.getSelection(),
        uri = "https://api.datamarket.azure.com/Data.ashx/Bing/MicrosoftTranslator/v1/Translate?" + "Text=%27" + fromText + "%27" + "&To=%27nl%27";

    if (hightlight.toString() !== "") {
      fromText = hightlight.toString();
    }

    $.ajax({
        type: 'GET',
        url: uri,
        dataType: "json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Basic ' + getToken());
        },
        success: function(data, status) {
            var result = data.d.results[0].Text;
            setValue(target, getValue(target).replace(fromText, result));
        },
        error: function(error) {
            debugger;
        }
    });
}
