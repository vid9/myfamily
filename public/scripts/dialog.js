"use strict";var applicationServerPublicKey="BGa5M248kds3Uw6AkR6igb3aq4OQw1zFmSBNuFj10kwdsqZ8DXoYtvLUPCMsUIpMKQiPzdOY-s-3mkVnPhRUiQg",isSubscribed=!1,swRegistration=null,pageWidth=$(document).width(),pageHeight=$(document).height(),currentElement=void 0,colors=["#FEC3BF","#FFDDB9","#A5D8F3","#97EBED","#FEC3BF","#FFDDB9","#A5D8F3","#FEC3BF","#FFDDB9","#A5D8F3"];function r(e){/in/.test(document.readyState)?setTimeout("r("+e+")",9):e()}function clearData(){$("#newDialog").val(""),$("#imeDialog").val("").parent().removeClass("is-dirty"),$("#opisDialog").val("").parent().removeClass("is-dirty"),$("#targetZacetek").val("").parent().removeClass("is-dirty"),$("#targetKonec").val("").parent().removeClass("is-dirty"),$("#oldStatus").val(""),$("#newStatus").val(""),$("#xpNaloge").val("").parent().removeClass("is-dirty"),$("#vezanCilj").get(0).placeholder="",$("input[name='sampleCilj']").parent().removeClass("is-dirty").find("li").removeAttr("data-selected"),getmdlSelect.init("#dialogCilj"),$("#statusNaloge").val("").removeAttr("placeholder").parent().removeClass("is-dirty"),$("#kategorija").get(0).placeholder="",$("input[name='sampleKategorija']").parent().removeClass("is-dirty").find("li").attr("data-selected",""),getmdlSelect.init("#dialogKategorija"),$("#statusNaloge").get(0).placeholder="",$("#statusNaloge").parent().removeClass("is-dirty").find("li").attr("data-selected",""),getmdlSelect.init("#dialogStatus"),$("#listClani").find("input[type='checkbox']").parent().removeClass("is-checked")}function fillNaloge(){$("#iDialog").html("Ime naloge"),$("#oDialog").html("Opis naloge"),$("#tZacetek").html("Začetek naloge"),$("#tKonec").html("Konec naloge"),$("#ciljiVsi").attr("style","display: none!important"),$("#dialogKategorija").attr("style","display: block!important"),$("#dialogZacetek").attr("style","display: block!important"),$("#dialogKonec").attr("style","display: block!important"),$("#claniNaloge").attr("style","display: block!important"),$("#dialogCilj").attr("style","display: block!important"),$("#dialogStatus").attr("style","display: block!important"),$("#ustvari").attr("onclick","validateNaloga(event, 0)"),$("#closeBtn").next().removeClass("color-cyan").addClass("color-red")}function fillCilji(){$("#iDialog").html("Ime cilja"),$("#oDialog").html("Opis cilja"),$("#tZacetek").html("Zacetek cilja"),$("#tKonec").html("Konec cilja"),$("#ciljiVsi").attr("style","display: block!important"),$("#dialogKategorija").attr("style","display: none!important"),$("#dialogZacetek").attr("style","display: none!important"),$("#dialogKonec").attr("style","display: none!important"),$("#claniNaloge").attr("style","display: none!important"),$("#dialogCilj").attr("style","display: none!important"),$("#dialogStatus").attr("style","display: none!important"),$("#ustvari").attr("onclick","validateNaloga(event, 1)"),$("#closeBtn").next().removeClass("color-red").addClass("color-cyan")}function posodobiCilj(e){clearData(),fillCilji(),document.getElementById("dialog-title").innerHTML="Uredi cilj",document.getElementById("ustvari").innerHTML="Posodobi",$("#imeDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[0].innerHTML).parent().addClass("is-dirty"),$("#opisDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[1].innerHTML).parent().addClass("is-dirty"),$("#xpNaloge").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[2].value).parent().addClass("is-dirty"),"true"===e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[3].value&&$("#skupnaNaloga").parent().get(0).MaterialCheckbox.check(),$("#newDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[4].value),dialog.showModal(),$("#dialog-div").attr("style","height: auto"),$("#izbrisi").removeClass("hide-element"),currentElement=e}function posodobiNalogo(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Uredi nalogo",document.getElementById("ustvari").innerHTML="Posodobi",dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").removeClass("hide-element")}function dodajNovCilj(){clearData(),fillCilji(),document.getElementById("dialog-title").innerHTML="Dodaj nov cilj",document.getElementById("ustvari").innerHTML="Ustvari",dialog.showModal(),$("#izbrisi").addClass("hide-element")}function dodajNovoNalogo(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Dodaj novo nalogo",document.getElementById("ustvari").innerHTML="Ustvari",$("#newDialog").val(""),dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").addClass("hide-element")}function dodajPredlog(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Dodaj novo nalogo",document.getElementById("ustvari").innerHTML="Ustvari",$("#newDialog").val(""),dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").addClass("hide-element"),$("#imeDialog").val($("#ime_aktivnosti").text()).parent().addClass("is-dirty"),$("#opisDialog").val($("#opis_aktivnosti").text()).parent().addClass("is-dirty"),$("#xpNaloge").val("100").parent().addClass("is-dirty"),$("#kategorija").get(0).placeholder=$(".list-kategorija").find("[data-val=5aeabcd8be609116280b4d9c]").get(0).textContent.trim(),$("input[name='sampleKategorija']").parent().addClass("is-dirty").find("li[data-val=5aeabcd8be609116280b4d9c]").attr("data-selected","true"),getmdlSelect.init("#dialogKategorija"),$("#statusNaloge").get(0).placeholder="Neopravljena",$("#statusNaloge").parent().addClass("is-dirty").find("li[data-val=false]").attr("data-selected","true"),$("input[name='oldStatus']").val("false"),$("input[name='newStatus']").val("false"),getmdlSelect.init("#dialogStatus")}function validateNaloga(e,t){if(""==document.forms.update_dialog.imeDialog.value)return $("#imeDialogErr").text("Polje je obvezno!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.opisDialog.value)return $("#opisDialogErr").text("Polje je obvezno!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.xpNaloge.value)return!1;if(0==t){var a=document.forms.update_dialog.dateZacetek.value,i=document.forms.update_dialog.dateKonec.value;if(""!=a&&""!=i&&i<a)return $("#dateKonecErr").text("Datum konca mora biti po datumu začetka!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.sampleKategorija.value)return alert("Kategorija mora biti izbrana."),!1;if(""==document.forms.update_dialog.statusNaloge.value)return alert("Status naloge mora biti izbran."),!1}if(0==t){var n=$("#update_dialog").serialize();e.preventDefault(),$.ajax({url:"/ustvari_nalogo",type:"POST",contentType:"application/x-www-form-urlencoded",data:n,success:function(e){localStorage.setItem("Status",e);localStorage.setItem("Stran",2),window.location.reload(!0)},error:function(e,t,a,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:e}),console.log(t,a,i,e)}})}else{var o=$("#update_dialog").serialize();e.preventDefault(),$.ajax({url:"/ustvari_cilj",type:"POST",contentType:"application/x-www-form-urlencoded",data:o,success:function(e){localStorage.setItem("Status",e);localStorage.setItem("Stran",3),window.location.reload(!0)},error:function(e,t,a,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:i})}})}}function registerDateTimePicker(t,a,i,n,o){var l=document.getElementById(t);l.addEventListener("click",function(e){a.trigger=l,a.toggle()}),l.addEventListener("onOk",function(e){openTimePicker(t,a,i,n,o)})}function openTimePicker(e,t,a,i,n){var o=document.getElementById(e),l=document.getElementById(a),r=document.getElementById(i);n.trigger=o,n.toggle(),o.addEventListener("onOk",function(e){r.value=t.time.format("Y-MM-DD")+" "+n.time.format("HH:mm Z"),l.value=t.time.format("DD-MM-Y")+" ob "+n.time.format("HH:mm"),l.parentNode.MaterialTextfield.checkDirty()}),o.addEventListener("onCancel",function(e){r.value=t.time.format("Y-MM-DD")+" "+(new Date).toLocaleTimeString("sl-SI",{hour:"numeric",minute:"numeric",timeZoneName:"short"}),l.value=t.time.format("DD-MM-Y"),l.parentNode.MaterialTextfield.checkDirty()})}function zapriVse(e){$(".hideOnClick").attr("style","display: none!important"),console.log("close all")}function onUserClick(e,t){var a=document.getElementsByClassName(e)[0].getElementsByClassName("user"),i=void 0;for(i=0;i<a.length;i++)a[i].onclick=function(e){return function(){t(e)}}(a[i])}function cleanNav(){$("#dashboard").removeClass("is-active"),$("#cilj").removeClass("is-active"),$("#naloge").removeClass("is-active"),$("#koledar").removeClass("is-active"),$("#menuDashboard").removeClass("is-active"),$("#menuCilj").removeClass("is-active"),$("#menuNaloge").removeClass("is-active"),$("#menuKoledar").removeClass("is-active")}function openSettings(){cleanNav(),$("#notifications").removeClass("is-active"),$("#druzina").removeClass("is-active"),$("#settings").addClass("is-active")}function openNotifications(){cleanNav(),$("#druzina").removeClass("is-active"),$("#settings").removeClass("is-active"),$("#notifications").addClass("is-active")}function openDruzina(){cleanNav(),$("#settings").removeClass("is-active"),$("#notifications").removeClass("is-active"),$("#druzina").addClass("is-active")}function initializeUI(){pushButton.addEventListener("click",function(){pushButton.disabled=!0,$("#pushButton").parent().addClass("is-disabled"),isSubscribed?unsubscribeUser():subscribeUser()}),swRegistration.pushManager.getSubscription().then(function(e){(isSubscribed=!(null===e))?console.log("User IS subscribed."):console.log("User is NOT subscribed."),updateBtn()})}function subscribeUser(){var e=urlB64ToUint8Array(applicationServerPublicKey);swRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e}).then(function(e){updateSubscriptionOnServer(e),console.log("User is subscribed."),isSubscribed=!0,updateBtn()}).catch(function(e){console.log("Failed to subscribe the user: ",e),updateBtn()})}function updateSubscriptionOnServer(e){return fetch("/api/save-subscription",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then(function(e){if(!e.ok)throw new Error("Bad status code from server.");return e.json()}).then(function(e){if(!e.data||!e.data.success)throw new Error("Bad response from server.")})}function unsubscribeUser(){swRegistration.pushManager.getSubscription().then(function(e){if(e)return e.unsubscribe()}).catch(function(e){console.log("Error unsubscribing",e)}).then(function(){updateSubscriptionOnServer(null),console.log("User is unsubscribed."),isSubscribed=!1,updateBtn()})}function urlB64ToUint8Array(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(t),i=new Uint8Array(a.length),n=0;n<a.length;++n)i[n]=a.charCodeAt(n);return i}function updateBtn(){if("denied"===Notification.permission)return pushButton.nextElementSibling.textContent="Obvestila so blokirana",pushButton.disabled=!0,$("#pushButton").parent().addClass("is-disabled"),void updateSubscriptionOnServer(null);pushButton.nextElementSibling.textContent=isSubscribed?"Izklopi obvestila v brskalniku":"Vklopi obvestila v brskalniku",$("#pushButton").removeAttr("disabled"),$("#pushButton").parent().removeClass("is-disabled")}function tockeUdelezencev(e,t,a){for(var i=0;i<e;i++){var n=$("."+t+i).children(),o=n.length,l=0;if(n.each(function(){l+=parseInt($(this)[0].innerHTML)}),$("#"+a+i).text(l+"/"+$("."+t+i).parent().prev().prev().find("input[name=maxXp]").val()),0==o)$("."+t+i).attr("style","display: none!important");else if(1==o)$("."+t+i+" :nth-child(1)").addClass("spanOnly");else{$("."+t+i+" :nth-child(1)").attr("style","width: "+n[0].innerHTML/l*100+"%; background-color: #BCD4F8").addClass("spanFirst");for(var r=2;r<o;r++)$("."+t+i+" :nth-child("+r+")").attr("style","width: "+n[r-1].innerHTML/l*100+"%; background-color: "+colors[r-2]+";");$("."+t+i+" :nth-child("+o+")").attr("style","width: "+n[o-1].innerHTML/l*100+"%; background-color: #96ECED;").addClass("spanLast")}}}function zapriNalogo(){$("#NalogaPopUp").css("display","none")}function distanceX(e){return function(e){var t=0;if(e.offsetParent)for(;t+=e.offsetTop,e=e.offsetParent;);return 0<=t?t:0}(e)}function napolniNalogo(e){deleteShowNaloga(e),$("#dashboardNaloga").removeClass("hide-element"),$("#opomnikKategorija").text(e.lastElementChild.children[0].value);var t=e.lastElementChild.children[1].value;$("#opomnikZacetek").text(moment(t).format("DD-MM-YYYY")+" ob "+moment(t).format("HH:mm"));var a=e.lastElementChild.children[2].value;$("#opomnikKonec").text(moment(a).format("DD-MM-YYYY")+" ob "+moment(a).format("HH:mm")),$("#opomnikCilj").append(e.lastElementChild.children[3].value),$("#opomnikStatus").text(e.lastElementChild.children[4].value),$("#opomnikIme").text(e.children[0].children[0].innerHTML),$("#opomnikOpis").text(e.children[0].children[2].innerHTML),$("#opomnikXp").text("+"+e.children[0].children[1].children[0].innerHTML);var i=e.lastElementChild.children[5].cloneNode(!0),n=e.lastElementChild.children[6].cloneNode(!0);n.classList.remove("hide-element"),i.classList.remove("hide-element"),document.getElementById("opomnikVezani").appendChild(i),document.getElementById("opomnikAvtor").appendChild(n),""!=t&&""!=a||$("#opomnikBrezDatuma").removeClass("hide-element")}function deleteShowNaloga(e){$("#opomnikKategorija").text(""),$("#opomnikXp").text(""),$("#opomnikIme").text(""),$("#opomnikOpis").text(""),$("#opomnikVezani").empty(),$("#opomnikAvtor").empty(),$("#opomnikKategorija").text(""),$("#opomnikZacetek").text(""),$("#opomnikKonec").text(""),$("#opomnikBrezDatuma").addClass("hide-element"),$("#opomnikCilj").html($("#opomnikCilj").children())}function potrdiIzbris(){var t="/delete-naloga";"Uredi cilj"==document.getElementById("dialog-title").innerHTML&&(t="/delete-cilj");var e="id="+document.forms.update_dialog.newDialog.value;$.ajax({url:t,type:"POST",contentType:"application/x-www-form-urlencoded",data:e,success:function(e){localStorage.setItem("Status",e);if("/delete-naloga"==t);localStorage.setItem("Stran",3),window.location.reload(!0)},error:function(e,t,a,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:i})}})}r(function(){localStorage.getItem("Status")&&(document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:localStorage.getItem("Status")}),localStorage.clear())}),$(function(){console.log("test"),setTimeout(function(){console.log(localStorage.getItem("Status")),console.log("done")},1e3)}),jQuery(function(i){switch(setTimeout(function(){alert("Vaša seja je potekla, za nadaljevanje se morate ponovno prijaviti!"),window.open("https://ekosmartweb.herokuapp.com/","_blank")},36e5),"serviceWorker"in navigator&&"PushManager"in window?(console.log("Service Worker and Push is supported"),navigator.serviceWorker.register("sw.js").then(function(e){console.log("Service Worker is registered",e),swRegistration=e,initializeUI()}).catch(function(e){console.error("Service Worker Error",e)})):(console.warn("Push messaging is not supported"),pushButton.textContent="Push Not Supported"),document.onclick=zapriVse(),document.onmouseup=function(e){var t=i(".card-info");i(t).is(":visible")&&(t.is(e.target)||0!==t.has(e.target).length||t.hide())},tockeUdelezencev(i("#table-cilji").find("tr").length-1,"progress","razmerje"),tockeUdelezencev(i("#table-cilji-end").find("tr").length-1,"progressE","razmerjeE"),onUserClick("container",function(e){var t=e.getBoundingClientRect(),a=i(".card-info");i("#userCard").text(e.nextElementSibling.value),i("#phoneCall").attr("href","tel:"+e.nextElementSibling.nextElementSibling.value),i("#smsSend").attr("href","sms:"+e.nextElementSibling.nextElementSibling.value),i("#mailSend").attr("href","mailto:"+e.nextElementSibling.nextElementSibling.nextElementSibling.value),i("#viberOpen").attr("href","viber://chats?number="+e.nextElementSibling.nextElementSibling.value),e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling?(i("#status").html(e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerHTML),i(".tri-card-no-status").removeClass("tri-card-no-status").addClass("tri-card-status")):(i("#status").html(""),i(".tri-card-status").addClass("tri-card-no-status").removeClass("tri-card-status")),600<pageWidth?i(".card-info").css({top:distanceX(e)-parseFloat(a.css("height")),left:t.left-93,display:"block"}):i(".card-info").css({top:distanceX(e)-parseFloat(a.css("height")),left:t.left-50,display:"block"})}),i("#mycalendar").monthly({mode:"event",dataType:"json",jsonUrl:"/public/calendar/"+id+"/events.json"}),window.location.protocol){case"http:":case"https:":break;case"file:":alert("Just a heads-up, events will not work when run locally.")}document.querySelector("#izbrisi").onclick=function(){var e="Ali res želite izbirisati nalogo? S pritiskom na gumb Izbriši bo naloga dokočno izbrisana in do nje ne boste mogli več dostopati!";"Uredi cilj"==document.getElementById("dialog-title").innerHTML&&(e="Ali res želite izbirisati cilj? S pritiskom na gumb Izbriši bo vaš cilj dokočno izbrisan in do njega ne boste mogli več dostopati!");var t=confirm(e);console.log(t),t&&potrdiIzbris()};var e=document.querySelector("dialog");e.showModal||dialogPolyfill.registerDialog(e);for(var t=document.querySelectorAll(".closeX"),a=function(e){t[e].onclick=function(){t[e].parentNode.classList.add("hide-element")}},n=0;n<t.length;n++)a(n);function o(e,t){var a=document.getElementById(e),i=a.getElementsByTagName("TR"),n=void 0;for(n=1;n<i.length;n++)a.rows[n].onclick=function(e){return function(){t(e)}}(a.rows[n])}e.querySelector(".close").onclick=function(){e.close()},function(e,t){var a=document.getElementById(e).getElementsByTagName("li"),i=void 0;for(i=0;i<a.length;i++)a[i].onclick=function(e){return function(){t(e)}}(a[i])}("opomnikiList",function(e){napolniNalogo(e)}),o("table-cilji",function(e){posodobiCilj(e)}),o("table-cilji-end",function(e){posodobiCilj(e)});var l=i("input[name=person]");i("#checkboxVsi").on("click",function(){i(this).is(":checked")?l.parent().each(function(e,t){t.MaterialCheckbox.check()}):l.parent().each(function(e,t){t.MaterialCheckbox.uncheck()})}),i(document).on("change","input[name=person]",function(e){i("#checkboxVsi").is(":checked")&&i("input[name=person]:checked").length<l.length?i("#checkboxVsi").parent()[0].MaterialCheckbox.uncheck():i("#checkboxVsi").is(":checked")||i("input[name=person]:checked").length!==l.length-1||i("#checkboxVsi").parent()[0].MaterialCheckbox.check()}),registerDateTimePicker("dialogZacetek",new mdDateTimePicker.default({type:"date",past:moment().subtract(1,"years"),future:moment().add(1,"years")}),"targetZacetek","dateZacetek",new mdDateTimePicker.default({type:"time"})),registerDateTimePicker("dialogKonec",new mdDateTimePicker.default({type:"date",past:moment().subtract(1,"years"),future:moment().add(1,"years")}),"targetKonec","dateKonec",new mdDateTimePicker.default({type:"time"})),e.appendChild(document.getElementById("mddtp-picker__time")),e.appendChild(document.getElementById("mddtp-picker__date"))});