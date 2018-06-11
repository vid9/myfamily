"use strict";var $paginator=void 0,items=void 0;function clearField(a,e){getmdlSelect.init(".mdl-filter"+a),document.getElementsByClassName("mdl-filter"+a)[0].classList.remove("is-dirty"),e.style.display="none"}function objaviStatus(){var a=$("#trenutniUporabnik").val();if(""!=$("#currStatus").val()){$("#status"+a).text($("#currStatus").val()).parent().removeClass("hide-element");var e={currStatus:$("#currStatus").val()};$.ajax({url:"/status",type:"POST",contentType:"application/json",data:JSON.stringify(e),success:function(){$("#currStatus").val("");document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:"Status je bil uspešno posodobljen!"})},error:function(a,e,t){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:"Prišlo je do napake, status ni bil shranjen!"})}})}else $("#status"+a).parent.addClass("hide-element")}function updateItems(){items=$(".paginate"),$paginator.pagination("updateItems",items.length);var a=Math.min($paginator.pagination("getCurrentPage"),$paginator.pagination("getPagesCount"));$paginator.pagination("selectPage",a),24<items.length&&$("#pagination").attr("style","display: list-view")}function queryNaloge(){$("body").css("cursor","progress");var a={};""!=$("input[name='osebaSearch']").val()&&(a.oseba=$("input[name='osebaSearch']").val()),""!=$("input[name='statusSearch']").val()&&(a.status=$("input[name='statusSearch']").val()),""!=$("input[name='kategorijaSearch']").val()&&(a.kategorija=$("input[name='kategorijaSearch']").val()),""!=$("input[name='avtorSearch']").val()&&(a.avtor=$("input[name='avtorSearch']").val()),""!=$("input[name='koledarSearch']").val()&&(a.koledar=$("input[name='koledarSearch']").val()),""!=$("input[name='ciljSearch']").val()&&(a.cilj=$("input[name='ciljSearch']").val()),console.log(a),$.ajax({url:"/prikazi_naloge",type:"POST",data:a,success:function(a,e){if($("body").css("cursor","default"),a.includes("<!doctype html>"))window.location.reload();else if(0==a.length){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:"Nobena naloga ne ustreza iskalnim parametrom!"})}else{$("#nalogeGrid").html(a),updateItems(),function(a,e){var t=document.getElementById("nalogeGrid").getElementsByClassName("mdl-card"),l=void 0;for(l=0;l<t.length;l++)t[l].getElementsByTagName("button")[0].onclick=function(a){return function(){e(a,event)}}(t[l])}(0,function(a,e){currentElement=a,posodobiNalogo(),$("#newDialog").val(a.getElementsByClassName("idNaloga")[0].value),$("#imeDialog").val(a.getElementsByClassName("queryIme")[0].innerHTML).parent().addClass("is-dirty"),$("#opisDialog").val(a.getElementsByClassName("queryOpis")[0].innerHTML).parent().addClass("is-dirty");var t=void 0,l=void 0;try{t=a.getElementsByClassName("dateNaloga")[0].innerHTML,l=a.getElementsByClassName("dateNaloga")[1].innerHTML}catch(a){console.log(a)}t&&($("#targetZacetek").val(t).parent().addClass("is-dirty"),$("#dateZacetek").val(moment(t.replace(" ob "," "),"DD-MM-Y HH:mm").format("Y-MM-DD HH:mm"))),l&&($("#targetKonec").val(l).parent().addClass("is-dirty"),$("#dateKonec").val(moment(l.replace(" ob "," "),"DD-MM-Y HH:mm").format("Y-MM-DD HH:mm")));var n=a.getElementsByClassName("kategorijaNaloga")[0].value;$("#kategorija").get(0).placeholder=$(".list-kategorija").find("[data-val="+n+"]").get(0).textContent.trim(),$("input[name='sampleKategorija']").parent().addClass("is-dirty").find("li[data-val="+n+"]").attr("data-selected","true"),getmdlSelect.init("#dialogKategorija");var i=a.getElementsByClassName("ciljNaloga")[0].value;$("#vezanCilj").get(0).placeholder=$(".list-cilj").find("[data-val="+i+"]").get(0).textContent.trim(),$("input[name='sampleCilj']").parent().addClass("is-dirty").find("li[data-val="+i+"]").attr("data-selected","true"),$("input[name='oldCilj']").val(i),getmdlSelect.init("#dialogCilj");var s=a.getElementsByClassName("statusNaloga")[0].innerHTML;"Neopravljena"==($("#statusNaloge").get(0).placeholder=s)?($("#statusNaloge").parent().addClass("is-dirty").find("li[data-val=false]").attr("data-selected","true"),$("input[name='oldStatus']").val("false"),$("input[name='newStatus']").val("false")):($("#statusNaloge").parent().addClass("is-dirty").find("li[data-val=true]").attr("data-selected","true"),$("input[name='oldStatus']").val("true"),$("input[name='newStatus']").val("true")),getmdlSelect.init("#dialogStatus"),$("#xpNaloge").val(a.getElementsByClassName("xpNaloga")[0].innerHTML.match(/\d/g).join("")).parent().addClass("is-dirty");for(var r=a.getElementsByClassName("udelezenecNaloga"),o=$("input:checkbox[name='person']"),c=[],d=1;d<o.length;d++)c.push($("#"+o[d].id).val());$("#checkboxVsi").parent()[0].MaterialCheckbox.uncheck(),o.length-1==r.length&&$("#checkboxVsi").parent()[0].MaterialCheckbox.check();for(var u=0,m=1;m<o.length;m++)$("#"+o[m].id).parent()[0].MaterialCheckbox.uncheck();for(;u<r.length;){var p=c.indexOf(r[u].value);-1!==p&&($("#"+o[p+1].id).parent()[0].MaterialCheckbox.check(),u++)}e.stopPropagation()})}},error:function(a,e,t){$("body").css("cursor","default"),console.log(a.status,a.responseText,t);document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:"Med nalaganjem nalog je prišlo do napake!"})}}),updateItems()}jQuery(function(i){i("#osebaSearch").get(0).onchange=function(){i("#chipOseba").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},i("#statusSearch").get(0).onchange=function(){i("#chipStatus").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},i("#kategorijaSearch").get(0).onchange=function(){i("#chipKategorija").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},i("#avtorSearch").get(0).onchange=function(){i("#chipAvtor").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},i("#koledarSearch").get(0).onchange=function(){i("#chipKoledar").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},i("#ciljSearch").get(0).onchange=function(){i("#chipCilj").attr("style","display: inline-block;").find("span:first-child").text(i(this).val())},($paginator=i("#pagination")).pagination({itemsOnPage:24,cssStyle:"light-theme",onPageClick:function(a){var e=i(document).width(),t=24*(a-1),l=t+24;i(".naloge-center").attr("style","display: none!important");for(var n=t;n<=l;n++)1440<e?(i("#cellHa"+n).attr("style","display: block!important"),i("#cellHb"+n).attr("style","display: block!important")):840<e&&(i("#cellPa"+n).attr("style","display: block!important"),i("#cellPb"+n).attr("style","display: block!important"));items.hide().slice(t,l).show()}}),i("#filter").click(function(){queryNaloge()}),i("#reset").click(function(){getmdlSelect.init(".mdl-filter"),i(".selected").removeClass("selected"),i("input[name='osebaSearch']").val("").parent().removeClass("is-dirty"),i("#statusSearch").val("").parent().removeClass("is-dirty"),i("input[name='kategorijaSearch']").val("").parent().removeClass("is-dirty"),i("input[name='avtorSearch']").val("").parent().removeClass("is-dirty"),i("#koledarSearch").val("").parent().removeClass("is-dirty"),i("#ciljSearch").val("").parent().removeClass("is-dirty")}),queryNaloge(),i("#menuDashboard").addClass("is-active"),i("#dashboard").addClass("is-active")});