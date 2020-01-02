$('input:last').click(function(){
    $.post("/ajax",$('form').serialize(),function(res){
        result=res.revrese().map((val)=>{return JSON.stringify(val)+"<br>"})
        $("#result").empty().append($("<div></div>").html(result))
    })
})