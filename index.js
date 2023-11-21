$(document).ready(function(){
    // JQuery Effects
    $("#event_cl").click(function(){
        alert("Hello world")
    })
    $("#event_dbcl").dblclick(function(){
        $(this).css("color","red")
    })
    $("#event_mouseenter").mouseenter(function(){
        $(this).css('background','greenyellow')
    })
    $("#event_mouseleave").mouseleave(function(){
        $(this).css('font-size','30px')
    })
    $("#event_hover").hover(function(){
        $(this).hide()
    })
    $("#event_on").on({
        click: function(){
            $(this).css('color','red')
        },
        mouseenter: function(){
            $(this).css('background','aqua')
        },
        dblclick: function(){
            $(this).css("font-size",'30px')
        }
    })
    
    $("#effect_hd").click(function(){
        $("#effect_hd_2").hide(1000)
    })
    $("#effect_hd").click(function(){
        $("#effect_hd_2").show(1000)
    })
    
    $("#effect_fade").click(function(){
        $("#effect_fade_2").fadeToggle(1000)
    })
    $("#effect_slide").click(function(){
        $("#effect_slide_2").slideToggle(1000)
    })

    // JQuery HTML
    // HTML Get
    $("#get_text").click(function(){
        alert($("#html_get").text())
    })
    $("#get_html").click(function(){
        alert($("#html_get").html())
    })
    $("#get_val").click(function(){
        alert($("#html_get_val").val())
    })
    $("#get_attr").click(function(){
        alert($("#html_ge((t_attr").attr('href'))
    })
    // HTML Set
    $("#set_all").click(function(){
        $("#html_set_all").html('<a href="https://youtube.com">facebook.com</a>')
        $("#html_set_all").text("youtube.com")
    })
    $("#set_all_2").click(function(){
        $("#html_set_all_2").attr('href','https://youtube.com')
        $("#html_set_all_2").text("youtube.com")
    })
    // Add (pend)
    $("#html_add_ap").click(function(){
        $("ul").append('<li>rau</li>')
    })
    $("#html_add_pre").click(function(){
        $("ul").prepend('<li>rau</li>')
    })
    $("#html_add_af").click(function(){
        $("ul").after('<li>rau</li>')
    })
    $("#html_add_bf").click(function(){
        $("ul").before('<li>rau</li>')
    })
    // Remove 
    $("#html_remove").click(function(){
        $("#div").remove()
    })
    $("#html_empty").click(function(){
        $("#div").empty()
    })
    // CssClass
    $("#html_cssClass").click(function(){
        $("#cssClass").toggleClass("cssClass")
    })
    $("#html_cssClass_2").click(function(){
        $("#cssClass").css({
            'color':'violet',
            'background-color':'aqua',
            'font-size':'30px'
        })
    })
})