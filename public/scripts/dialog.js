"use strict";var applicationServerPublicKey="BGa5M248kds3Uw6AkR6igb3aq4OQw1zFmSBNuFj10kwdsqZ8DXoYtvLUPCMsUIpMKQiPzdOY-s-3mkVnPhRUiQg",isSubscribed=!1,swRegistration=null,pageWidth=$(document).width(),pageHeight=$(document).height(),currentElement=void 0,intro=introJs(),move=0,shown=0,colors=["#FEC3BF","#FFDDB9","#A5D8F3","#97EBED","#FEC3BF","#FFDDB9","#A5D8F3","#FEC3BF","#FFDDB9","#A5D8F3"];function r(e){/in/.test(document.readyState)?setTimeout("r("+e+")",9):e()}function clearData(){$("#newDialog").val(""),$("#imeDialog").val("").parent().removeClass("is-dirty"),$("#opisDialog").val("").parent().removeClass("is-dirty"),$("#targetZacetek").val("").parent().removeClass("is-dirty"),$("#targetKonec").val("").parent().removeClass("is-dirty"),$("#oldStatus").val(""),$("#newStatus").val(""),$("#xpNaloge").val("").parent().removeClass("is-dirty"),$("#vezanCilj").get(0).placeholder="",$("input[name='sampleCilj']").parent().removeClass("is-dirty").find("li").removeAttr("data-selected"),getmdlSelect.init("#dialogCilj"),$("#kategorija").get(0).placeholder="",$("input[name='sampleKategorija']").parent().removeClass("is-dirty").find("li").attr("data-selected",""),getmdlSelect.init("#dialogKategorija"),$("#listClani").find("input[type='checkbox']").parent().removeClass("is-checked")}function fillNaloge(){$("#iDialog").html("Ime naloge*"),$("#oDialog").html("Opis naloge*"),$("#tZacetek").html("Začetek naloge"),$("#tKonec").html("Konec naloge"),$("#ciljiVsi").attr("style","display: none!important"),$("#dialogKategorija").attr("style","display: block!important"),$("#dialogZacetek").attr("style","display: block!important"),$("#dialogKonec").attr("style","display: block!important"),$("#claniNaloge").attr("style","display: block!important"),$("#dialogCilj").attr("style","display: block!important"),$("#dialogStatus").attr("style","display: block!important"),$("#ustvari").attr("onclick","validateNaloga(event, 0)"),$("#closeBtn").next().removeClass("color-cyan").addClass("color-red"),$("#dialog-hint").attr("onclick","helpNaloga()")}function fillCilji(){$("#iDialog").html("Ime cilja*"),$("#oDialog").html("Opis cilja*"),$("#ciljiVsi").attr("style","display: block!important"),$("#dialogKategorija").attr("style","display: none!important"),$("#dialogZacetek").attr("style","display: none!important"),$("#dialogKonec").attr("style","display: none!important"),$("#claniNaloge").attr("style","display: none!important"),$("#dialogCilj").attr("style","display: none!important"),$("#dialogStatus").attr("style","display: none!important"),$("#ustvari").attr("onclick","validateNaloga(event, 1)"),$("#closeBtn").next().removeClass("color-red").addClass("color-cyan"),$("#dialog-hint").attr("onclick","helpCilji()")}function posodobiCilj(e){clearData(),fillCilji(),document.getElementById("dialog-title").innerHTML="Uredi cilj",document.getElementById("ustvari").innerHTML="Posodobi",$("#imeDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[0].innerHTML).parent().addClass("is-dirty"),$("#opisDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[1].innerHTML).parent().addClass("is-dirty"),$("#xpNaloge").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[2].value).parent().addClass("is-dirty"),"true"===e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[3].value&&$("#skupnaNaloga").parent().get(0).MaterialCheckbox.check(),$("#newDialog").val(e.getElementsByTagName("td")[0].lastElementChild.lastElementChild.children[4].value),dialog.showModal(),$("#dialog-div").attr("style","height: auto"),$("#izbrisi").removeClass("hide-element"),currentElement=e}function posodobiNalogo(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Uredi nalogo",document.getElementById("ustvari").innerHTML="Posodobi",dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").removeClass("hide-element")}function dodajNovCilj(){clearData(),fillCilji(),document.getElementById("dialog-title").innerHTML="Dodaj nov cilj",document.getElementById("ustvari").innerHTML="Ustvari",dialog.showModal(),$("#izbrisi").addClass("hide-element")}function dodajNovoNalogo(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Dodaj novo nalogo",document.getElementById("ustvari").innerHTML="Ustvari",$("#newDialog").val(""),dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").addClass("hide-element")}function dodajPredlog(){clearData(),fillNaloge(),document.getElementById("dialog-title").innerHTML="Dodaj novo nalogo",document.getElementById("ustvari").innerHTML="Ustvari",$("#newDialog").val(""),dialog.showModal(),$("#dialog-div").attr("style","height: "+$("#dialog").height()+"px;"),$("#izbrisi").addClass("hide-element"),$("#imeDialog").val($("#ime_aktivnosti").text()).parent().addClass("is-dirty"),$("#opisDialog").val($("#opis_aktivnosti").text()).parent().addClass("is-dirty"),$("#xpNaloge").val("100").parent().addClass("is-dirty"),$("#kategorija").get(0).placeholder=$(".list-kategorija").find("[data-val=5aeabcd8be609116280b4d9c]").get(0).textContent.trim(),$("input[name='sampleKategorija']").parent().addClass("is-dirty").find("li[data-val=5aeabcd8be609116280b4d9c]").attr("data-selected","true"),getmdlSelect.init("#dialogKategorija"),$("#statusNaloge").get(0).placeholder="Neopravljena",$("#dialogStatus").find("li[data-val=false]").attr("data-selected","true"),$("#statusNaloge").parent().addClass("is-dirty"),$("input[name='oldStatus']").val("false"),$("input[name='newStatus']").val("false"),getmdlSelect.init("#dialogStatus")}function validateNaloga(e,a){if(""==document.forms.update_dialog.imeDialog.value)return $("#imeDialogErr").text("Polje je obvezno!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.opisDialog.value)return $("#opisDialogErr").text("Polje je obvezno!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.xpNaloge.value)return!1;if(0==a){var t=document.forms.update_dialog.dateZacetek.value,i=document.forms.update_dialog.dateKonec.value;if(""!=t&&""!=i&&moment(t).isAfter(i))return $("#dateKonecErr").text("Datum konca mora biti po datumu začetka!").parent().addClass("is-invalid"),!1;if(""==document.forms.update_dialog.sampleKategorija.value)return alert("Kategorija mora biti izbrana."),!1;if(""==document.forms.update_dialog.statusNaloge.value)return alert("Status naloge mora biti izbran."),!1}if(0==a){var o=$("#update_dialog").serialize();e.preventDefault(),console.log(o),$.ajax({url:"/ustvari_nalogo",type:"POST",contentType:"application/x-www-form-urlencoded",data:o,success:function(e){localStorage.setItem("Status",e),localStorage.setItem("Stran",2),window.location.reload(!0)},error:function(e,a,t,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:e}),console.log(a,t,i,e)}})}else{var n=$("#update_dialog").serialize();e.preventDefault(),$.ajax({url:"/ustvari_cilj",type:"POST",contentType:"application/x-www-form-urlencoded",data:n,success:function(e){localStorage.setItem("Status",e),localStorage.setItem("Stran",3),window.location.reload(!0)},error:function(e,a,t,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:i})}})}}function zapriVse(e){$(".hideOnClick").attr("style","display: none!important"),console.log("close all")}function onUserClick(e,a){var t=document.getElementsByClassName(e)[0].getElementsByClassName("user"),i=void 0;for(i=0;i<t.length;i++)t[i].onclick=function(e){return function(){a(e)}}(t[i])}function cleanNav(){$("#dashboard").removeClass("is-active"),$("#cilj").removeClass("is-active"),$("#naloge").removeClass("is-active"),$("#koledar").removeClass("is-active"),$("#menuDashboard").removeClass("is-active"),$("#menuCilj").removeClass("is-active"),$("#menuNaloge").removeClass("is-active"),$("#menuKoledar").removeClass("is-active")}function openSettings(){cleanNav(),$("#notifications").removeClass("is-active"),$("#druzina").removeClass("is-active"),$("#settings").addClass("is-active")}function openNotifications(){cleanNav(),$("#druzina").removeClass("is-active"),$("#settings").removeClass("is-active"),$("#notifications").addClass("is-active")}function openDruzina(){cleanNav(),$("#settings").removeClass("is-active"),$("#notifications").removeClass("is-active"),$("#druzina").addClass("is-active")}function initializeUI(){pushButton.addEventListener("click",function(){pushButton.disabled=!0,$("#pushButton").parent().addClass("is-disabled"),isSubscribed?unsubscribeUser():subscribeUser()}),swRegistration.pushManager.getSubscription().then(function(e){(isSubscribed=!(null===e))?console.log("User IS subscribed."):console.log("User is NOT subscribed."),updateBtn()})}function subscribeUser(){var e=urlB64ToUint8Array(applicationServerPublicKey);swRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e}).then(function(e){updateSubscriptionOnServer(e,"/api/save-subscription"),console.log("User is subscribed."),isSubscribed=!0,updateBtn()}).catch(function(e){console.log("Failed to subscribe the user: ",e),updateBtn()})}function updateSubscriptionOnServer(e,a){return fetch(a,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({subscription:e,user_id:$("#trenutniUporabnik").val()})}).then(function(e){if(!e.ok)throw console.log(e),new Error("Bad status code from server.",e);return e.json()}).then(function(e){if(!e.data||!e.data.success)throw new Error("Bad response from server.",e)})}function unsubscribeUser(){var a=void 0;swRegistration.pushManager.getSubscription().then(function(e){if(a=e)return e.unsubscribe()}).catch(function(e){console.log("Error unsubscribing",e)}).then(function(){updateSubscriptionOnServer(a,"/api/disable-subscription"),console.log("User is unsubscribed."),isSubscribed=!1,updateBtn()})}function urlB64ToUint8Array(e){for(var a=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),t=window.atob(a),i=new Uint8Array(t.length),o=0;o<t.length;++o)i[o]=t.charCodeAt(o);return i}function updateBtn(){if("denied"===Notification.permission)return pushButton.nextElementSibling.textContent="Obvestila niso dovoljena",pushButton.disabled=!0,$("#pushButton").parent().addClass("is-disabled"),void updateSubscriptionOnServer(null);$("#pushButton").removeAttr("disabled"),$("#pushButton").parent().removeClass("is-disabled");var e=document.querySelector("#prePush");isSubscribed?(pushButton.nextElementSibling.textContent="Izklopi obvestila v brskalniku",e.MaterialSwitch.on()):($("#pushButton").parent().is(".is-checked")&&e.MaterialSwitch.off(),pushButton.nextElementSibling.textContent="Vklopi obvestila v brskalniku")}function tockeUdelezencev(e,a,t){for(var i=0;i<e;i++){var o=$("."+a+i).children(),n=o.length,l=0;if(o.each(function(){l+=parseInt($(this)[0].innerHTML)}),0==n)$("."+a+i).attr("style","display: none!important");else if(1==n)$("."+a+i+" :nth-child(1)").addClass("spanOnly");else{$("."+a+i+" :nth-child(1)").attr("style","width: "+o[0].innerHTML/l*100+"%; background-color: #BCD4F8").addClass("spanFirst");for(var r=2;r<n;r++)$("."+a+i+" :nth-child("+r+")").attr("style","width: "+o[r-1].innerHTML/l*100+"%; background-color: "+colors[r-2]+";");$("."+a+i+" :nth-child("+n+")").attr("style","width: "+o[n-1].innerHTML/l*100+"%; background-color: #96ECED;").addClass("spanLast")}}}function zapriNalogo(){$("#NalogaPopUp").css("display","none")}function distanceX(e){return function(e){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return 0<=a?a:0}(e)}function napolniNalogo(e){deleteShowNaloga(e),e=e.children[1],console.log(e),$("#dashboardNaloga").removeClass("hide-element"),$("#opomnikKategorija").text(e.lastElementChild.children[0].value);var a=e.lastElementChild.children[1].value;$("#opomnikZacetek").text(moment(a).format("DD. MM. YYYY")+" "+moment(a).format("HH:mm"));var t=e.lastElementChild.children[2].value;$("#opomnikKonec").text(moment(t).format("DD. MM. YYYY")+" "+moment(t).format("HH:mm")),$("#opomnikCilj").append(e.lastElementChild.children[3].value),$("#opomnikId").val(e.lastElementChild.children[4].value),console.log(e.lastElementChild.children[4].value),$("#opomnikIme").text(e.children[0].children[0].innerHTML),$("#opomnikOpis").text(e.children[0].children[2].innerHTML),$("#opomnikXp").text("+"+e.children[0].children[1].children[0].innerHTML);var i=e.lastElementChild.children[5].cloneNode(!0),o=e.lastElementChild.children[6].cloneNode(!0);o.classList.remove("hide-element"),i.classList.remove("hide-element"),document.getElementById("opomnikVezani").appendChild(i),document.getElementById("opomnikAvtor").appendChild(o),""!=a&&""!=t||$("#opomnikBrezDatuma").removeClass("hide-element")}function deleteShowNaloga(e){$("#opomnikKategorija").text(""),$("#opomnikXp").text(""),$("#opomnikIme").text(""),$("#opomnikOpis").text(""),$("#opomnikVezani").empty(),$("#opomnikAvtor").empty(),$("#opomnikKategorija").text(""),$("#opomnikZacetek").text(""),$("#opomnikKonec").text(""),$("#opomnikBrezDatuma").addClass("hide-element"),$("#opomnikCilj").html($("#opomnikCilj").children())}function potrdiIzbris(){var a="/delete-naloga";"Uredi cilj"==document.getElementById("dialog-title").innerHTML&&(a="/delete-cilj");var e="id="+document.forms.update_dialog.newDialog.value;$.ajax({url:a,type:"POST",contentType:"application/x-www-form-urlencoded",data:e,success:function(e){localStorage.setItem("Status",e);if("/delete-naloga"==a);localStorage.setItem("Stran",3),window.location.reload(!0)},error:function(e,a,t,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:i})}})}function chooseHelp(){$("#dashboard").hasClass("is-active")&&(startIntroDashboard(),console.log("dash")),$("#koledar").hasClass("is-active")&&(startIntroKoledar(),console.log("cal")),$("#naloge").hasClass("is-active")&&(startIntroNaloge(),console.log("nal")),$("#cilj").hasClass("is-active")&&(startIntroCilj(),console.log("cilj")),$("#settings").hasClass("is-active")&&(startIntroSettings(),console.log("set")),$("#notifications").hasClass("is-active")&&(startIntroNotifications(),console.log("notf")),$("#druzina").hasClass("is-active")&&(startIntroDruzina(),console.log("drz"))}function startIntroDashboard(){(intro=introJs()).setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{intro:"Pozdravljeni v aplikaciji MyFamily! Kliknili ste na gumb pomoč, ki se nahaja v spodnjem levem kotu. Ob kliku na gumb boste sprožili začetek predstavitve, ki vam bo razložila osnovne funkcionalnosti na strani kjer se nahajate. Če želite nadaljevati s predstavitvijo strani pregled pritisnite gumb naprej.Predstavitev lahko kadarkoli prekinete."},{element:document.querySelector("#dash1"),intro:"Navigacijska vrstica s pomočjo katero se premikate po aplikaciji. Aplikacija je sestavljena iz 4 glavnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#opomnikiList"),intro:"Opomniki za naloge pri katerih sodelujete. Prihajajoče naloge imajo pred sabo zelen krog, naloge, ki se začnejo na današnji dan imajo rumen krog, naloge, ki so se že začele pa rdeč krog. Ob kliku na opomnik se prikažejo podrobnosti naloge."},{element:"#dash3",intro:"Status, s katerim lahko sporočite družini kaj počnete, kako se počutite, kdaj boste naredili nalogo..."},{element:"#dash4",intro:"Družinsko drevo, člani družine so urejeni glede na položaj v družini. Najvišje v drevesu so pradedki in prababice, nato dedki in babice, starši, otroci. Če oseba nima izbranega položaja v družini je prikazana na vrhu drevesa. S klikom na avatar lahko odprete okno kjer lahko vidite status osebe, različne možnosti sporočanja in število točk, ki jih je ta oseba danes zbrala."},{element:"#dash5",intro:"Skupni cilji družine, te cilje si družina izbere kot najpomembnejše in zato so prikazani na pregledu. Od leve proti desni so ime in opis cilja, razmerje med dosedaj zbranimi točkami in točkami potrebnimi za izpolnitev cilja, ter točke prikazane za vsakega člana družine posebej."},{element:"#dash6",intro:"Predlog za novo nalogo, ki je nakljčno generiran. S klikom na gumb DODAJ NALOGO se bodo polja avtomatsko izpolnila in nato lahko predlagano nalogo dodate med svoje naloge."},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V menuju se nahajajo tud nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočil sms in obvestila na vašem pametnem telefonu. V meniju lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function startIntroKoledar(){intro=introJs(),$(".monthly-header-title").attr("id","cal2"),$(".monthly-day-wrap").attr("id","cal3"),intro.setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{element:"#cal1",intro:"Tole je okno z koledarjem. Na njem so prikazane naloge, glede na začetni datum naloge."},{element:"#cal2",intro:"Tole je navigacijska vrstica koledarja. S puščicama se lahko premikate po mesecih naprej ali nazaj. Gumb danes vrne pogled na današnji dan. Gumb mesec pa vrne pogled na mesec v katerem je dan na katerem se nahajate."},{element:"#cal3",intro:"Posamezni dnevi v katerih so prikazane naloge. Če kliknete na nalogo se vam bo odprl podroben opis naloge. Če pa kliknete na dan se vam bo odrl pogled z vsemi nalogami, ki potekajo na današnji dan."}]}),intro.start()}function startIntroNaloge(){(intro=introJs()).setOptions({tooltipPosition:"auto",nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",overlayOpacity:.5,steps:[{element:"#nal1",intro:"S pomočjo tega okna lahko iščete po nalogah. Izbirate lahko med različnimi parametri, ki vam bodo pomagali poiskati nalogo.\n\nVezan cilj - Cilj na katerega je vezana naloga.\nKategorija - kategorija v katero spada naloga.\nZa koga - komu je naloga namenjena.\nStatus - ali je naloga opravljena ali neopravljena.\nAvtor - avtor naloge.\nV koledarju - ali je naloga časovno definirana",position:"bottom-right"},{element:"#card0",intro:"Rezultat iskanja. Naloge iz iste kategorije imajo zgornji del obarvan z isto barvo. Posamezen okvir predstavlja eno nalogo. Če kliknete na gumb v spodnjem desnem kotu lahko nalogo urejate."},{element:document.querySelector("#dash1"),intro:"Tole je navigacijska vrstica. Aplikacija je sestavljena iz 4 različnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V meniju se nahajajo tudi nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočila sms in obvestila na vašem pametnem telefonu. V meniju je tudi povezava do strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function startIntroCilj(){(intro=introJs()).setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{element:"#table-cilji",intro:"V tem oknu so prikazani vsi nedoseženi cilji družine. Cilj lahko urejate z klikom na vrstico v tabeli. Od leve proti desni ime in opis cilja, razmerje med dosedaj zbranimi točkami in točkami potrebnimi za izpolnitev cilja, točke prikazane za vsakega člana družine posebej, datum kdaj je bil cilj ustvarjen in kdaj je bil cilj nazadnje posodobljen."},{element:"#table-cilji-end",intro:"V tem oknu so prikazani vsi cilji družine, ki so že zaključeni. Cilj lahko urejate z klikom na vrstico v tabeli. Od leve proti desni ime in opis cilja, razmerje med dosedaj zbranimi točkami in točkami potrebnimi za izpolnitev cilja, točke prikazane za vsakega člana družine posebej, datum kdaj je bil cilj ustvarjen in kdaj je bil cilj nazadnje posodobljen."},{element:document.querySelector("#dash1"),intro:"Tole je navigacijska vrstica. Aplikacija je sestavljena iz 4 različnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V meniju se nahajajo tudi nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočila sms in obvestila na vašem pametnem telefonu. V meniju je tudi povezava do strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function startIntroSettings(){(intro=introJs()).setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{intro:"Trenutno se nahajate na strani z osebnimi nastavitavami. Tukaj lahko spremenite svoje podatke o imenu, e-pošti, telefoni, svoj položaj v družini, prikazno sliko in svoje geslo za dostom do aplikacije. Za izhod iz osebnih nastavitev kliknite na izmed 4 strani v navigacijski vrstici."},{element:document.querySelector("#dash1"),intro:"Navigacijska vrstica. Aplikacija je sestavljena iz 4 različnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V meniju se nahajajo tudi nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočila sms in obvestila na vašem pametnem telefonu. V meniju je tudi povezava do strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function startIntroNotifications(){(intro=introJs()).setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{intro:"Trenutno se nahajate na strani z nastavitvami sporočanja. Obvestila iz aplikacije lahko prejmete na tri različne načine: SMS, e-pošta in push obvestila v brskalniku ali na telefonu."},{element:document.querySelector("#dash1"),intro:"Navigacijska vrstica. Aplikacija je sestavljena iz 4 različnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V meniju se nahajajo tudi nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočila sms in obvestila na vašem pametnem telefonu. V meniju je tudi povezava do strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function startIntroDruzina(){(intro=introJs()).setOptions({nextLabel:"Naprej &rarr;",prevLabel:"&larr; Nazaj",skipLabel:"Zapri",doneLabel:"Konec",tooltipPosition:"auto",overlayOpacity:.5,steps:[{intro:"Trenutno ste na strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane. V polje E-mail napištite e-poštni naslov osebe, ki jo želite povabiti v vašo družino. Na naslov bo nekaj minutah prispelo elektronsko sporočilo z podrobnimi navodili za včlanitev v družino."},{element:document.querySelector("#dash1"),intro:"Tole je navigacijska vrstica. Aplikacija je sestavljena iz 4 različnih podstrani: PREGLED - pregled celotne aplikacije, KOLEDAR - koledar kjer so prikazane naloge, NALOGE - stran, kjer lahko iščete po nalogah in CILJI - stran kjer so podrobneje prikazani cilji družine"},{element:document.querySelector("#dash7"),intro:"Tukaj se nahajajo osebne nastavitve, kjer lahko kadarkoli spremnite podatke, ki ste jih napisali ob registraciji. V meniju se nahajajo tudi nastanitve sporočanja, kjer lahko vklopite sporočila preko e-pošte, sporočila sms in obvestila na vašem pametnem telefonu. V meniju je tudi povezava do strani kjer lahko k uporabi aplikacije povabite tudi druge družinske člane."}]}),intro.start()}function helpNaloga(){0==move?(intro.removeHints(),(intro=introJs()).setOptions({hintButtonLabel:"Razumem!",hintPosition:"top-right",hintAnimation:"false",hints:[{element:"#imeDialog",hint:"Prikazno ime naloge. Lahko vsebuje do 32 znakov.",position:"left"},{element:"#opisDialog",hint:"Opis naloge, kaj je potrebno narediti, da je naloga dosežena.",position:"left"},{element:"#targetZacetek",hint:"Datum začetka naloge. Naloga je v koledar postavljena glede na njen začetni datum. Če naloga nima izbranega začetnega datuma, je njen začetni datum kadar je bila ustvarjena.",position:"left"},{element:"#targetKonec",hint:"Datum konca naloge. S tem datum določite do kdaj mora biti naloga opravljena, oziroma kdaj je bila opravljena. V primeru, da končni datum ni izbran je avtomatsko določen na isti dan kot začetni datum.",position:"left"},{element:"#vezanCilj",hint:"Cilj na katerega je vezana naloga. Ko je naloga opravljena se pod ta cilj štejejo točke naloge.",position:"left"},{element:"#kategorija",hint:"Kategorija v katero spada naloga.",position:"left"},{element:"#xpNaloge",hint:"Vrednost naloge, ko je opravljena se te naloge prištejejo k vezanemu cilju.",position:"bottom"},{element:"#statusNaloge",hint:"Status naloge, lahko je opravljena ali pa neopravljena.",position:"left"},{element:"#claniNaloge",hint:"Družinski člani, označite tiste katerim je naloga namenjena.",position:"left"}]}),intro.onhintsadded(function(){console.log("all hints added"),0==move&&moveHints("#hintNal")}),intro.onhintclick(function(i,e,a){setTimeout(function(){var e=$(".introjs-tooltipReferenceLayer");e.appendTo($("#hintNal"));var a=$("#dialog").get(0).getBoundingClientRect();e.addClass("notransition");var t=$(i).offset().top-$(i).parent().offset().top-$(i).parent().scrollTop();e.css({color:"black",top:t-5,left:i.getBoundingClientRect().left-a.left-2}),$('[data-step*="6"].introjs-tooltipReferenceLayer').css({color:"black",top:t+15,left:i.getBoundingClientRect().left-a.left-20})},1)}),intro.onhintclose(function(e){console.log("hint closed",e)}),intro.addHints(),console.log("move 1")):0==shown?(intro.showHints(),shown=1):1==shown&&(intro.hideHints(),shown=0),move=1}function helpCilji(){0==move?(intro.removeHints(),(intro=introJs()).setOptions({hintButtonLabel:"Razumem!",hintPosition:"top-right",hintAnimation:"false",hints:[{element:"#imeDialog",hint:"Prikazno ime cilja. Lahko vsebuje do 32 znakov.",position:"left"},{element:"#opisDialog",hint:"Opis aktivnosti, ki jih vsebuje cilj.",position:"left"},{element:"#xpNaloge",hint:"Število točk potrebnih za dosego cilja.",position:"bottom"},{element:"#ciljiVsi",hint:"Če je to okno obkljukano se bo cilj vsem članom družine prikazal na prvi strani med skupnimi cilji.",position:"left"}]}),intro.onhintclose(function(e){console.log("hint closed",e)}),intro.onhintsadded(function(){console.log("all hints added"),0==move&&moveHints("#dialog")}),intro.onhintclick(function(i,e,a){console.log("hint clicked",i,e,a),setTimeout(function(){var e=$(".introjs-tooltipReferenceLayer");e.appendTo($("#dialog"));var a=$("#dialog").get(0).getBoundingClientRect();e.addClass("notransition");var t=$(i).offset().top-$(i).parent().offset().top-$(i).parent().scrollTop();e.css({color:"black",top:t-20,left:i.getBoundingClientRect().left-a.left-2}),$('[data-step*="2"].introjs-tooltipReferenceLayer').css({color:"black",top:t,left:i.getBoundingClientRect().left-a.left-20})},1)}),intro.addHints(),console.log("move 1")):0==shown?(console.log("show 1"),intro.showHints(),shown=1):1==shown&&(console.log("hide 1"),intro.hideHints(),shown=0),move=1}function pregled(){var e=location.protocol+"//"+location.host+location.pathname;window.history.replaceState({},document.title,e),localStorage.setItem("Stran",1),window.location.reload(!0)}function moveHints(e){shown=1,$(".introjs-hints").prependTo($(e));var o=$(e).get(0).getBoundingClientRect();$(".introjs-hint").each(function(e,a){var t=a.getBoundingClientRect().left-2*o.left,i=a.getBoundingClientRect().top-2*o.top;a.setAttribute("style","left: "+t+"px;top: "+i+"px;")})}function deleteHints(){shown=move=0;var e=document.querySelector(".introjs-hints");if(e)for(;e.firstChild;)e.removeChild(e.firstChild)}function validateSettings(){return""==document.forms.settingsForm.set_name.value?($("#errIme").text("Polje je obvezno!").parent().addClass("is-invalid"),!1):document.forms.settingsForm.set_password.value!=document.forms.settingsForm.set_password_confirm.value?($("#errPass2").parent().addClass("is-invalid"),!1):""==document.forms.settingsForm.set_phone.value?($("#errTel").text("Polje je obvezno!").parent().addClass("is-invalid"),!1):void 0}$.fn.datepicker.language.sl={days:["Nedelja","Ponedeljek","Torek","Sreda","Četrtek","Petek","Sobota"],daysShort:["Ned","Pon","Tor","Sre","Čet","Pet","Sob"],daysMin:["Ne","Po","To","Sr","Če","Pe","So"],months:["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"],monthsShort:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Avg","Sep","Okt","Nov","Dec"],today:"Danes",clear:"Ponastavi",dateFormat:"dd. mm. yyyy",timeFormat:"hh:ii",firstDay:0},r(function(){localStorage.getItem("Status")&&(document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:localStorage.getItem("Status")}),localStorage.clear())}),jQuery(function(o){if(localStorage.getItem("Stran")){switch(localStorage.getItem("Stran")){case 0:o("#menuDashboard").addClass("is-active"),o("#dashboard").addClass("is-active");break;case 1:o("#menuKoledar").addClass("is-active"),o("#koledar").addClass("is-active");break;case 2:o("#menuNaloge").addClass("is-active"),o("#naloge").addClass("is-active");break;case 3:o("#menuCilj").addClass("is-active"),o("#cilj").addClass("is-active");break;case 4:o("#menuSettings").addClass("is-active"),o("#settings").addClass("is-active");break;case 5:o("#menuNotifications").addClass("is-active"),o("#notifications").addClass("is-active");break;case 6:o("#menuDruzina").addClass("is-active"),o("#druzina").addClass("is-active");break;default:o("#menuDashboard").addClass("is-active"),o("#dashboard").addClass("is-active")}localStorage.removeItem("Stran")}switch(setTimeout(function(){alert("Vaša seja je potekla, za nadaljevanje se morate ponovno prijaviti!"),window.open("https://ekosmartweb.herokuapp.com/","_blank")},36e5),"serviceWorker"in navigator&&"PushManager"in window?(console.log("Service Worker and Push is supported"),navigator.serviceWorker.register("sw.js").then(function(e){console.log("Service Worker is registered",e),swRegistration=e,initializeUI()}).catch(function(e){console.error("Service Worker Error",e)})):(console.warn("Push messaging is not supported"),pushButton.textContent="Push Not Supported"),document.onclick=zapriVse(),document.onmouseup=function(e){var a=o(".card-info");o(a).is(":visible")&&(a.is(e.target)||0!==a.has(e.target).length||a.hide())},tockeUdelezencev(o("#table-cilji").find("tr").length-1,"progZ","razmZ"),tockeUdelezencev(o("#table-cilji-end").find("tr").length-1,"progK","razmK"),tockeUdelezencev(o("#table-skupni").find("tr").length-1,"progS","razmS"),onUserClick("container",function(e){var a=e.getBoundingClientRect(),t=o(".card-info");o("#userCard").text(e.nextElementSibling.value),o("#phoneCall").attr("href","tel:"+e.nextElementSibling.nextElementSibling.value),o("#smsSend").attr("href","sms:"+e.nextElementSibling.nextElementSibling.value),o("#mailSend").attr("href","mailto:"+e.nextElementSibling.nextElementSibling.nextElementSibling.value),o("#viberOpen").attr("href","viber://chats?number="+e.nextElementSibling.nextElementSibling.value);var i=e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value;i||(i=0),o("#dayXp").text("+ "+i+" točk"),e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling?(o("#status").html(e.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerHTML),o(".tri-card-no-status").removeClass("tri-card-no-status").addClass("tri-card-status")):(o("#status").html(""),o(".tri-card-status").addClass("tri-card-no-status").removeClass("tri-card-status")),600<pageWidth?o(".card-info").css({top:distanceX(e)-parseFloat(t.css("height")),left:a.left-93,display:"block"}):o(".card-info").css({top:distanceX(e)-parseFloat(t.css("height")),left:a.left-50,display:"block"})}),o("#mycalendar").monthly({mode:"event",dataType:"json",jsonUrl:"/public/calendar/"+id+"/events.json"}),window.location.protocol){case"http:":case"https:":break;case"file:":alert("Just a heads-up, events will not work when run locally.")}document.querySelector("#izbrisi").onclick=function(){var e="Ali res želite izbirisati nalogo? S pritiskom na gumb Izbriši bo naloga dokočno izbrisana in do nje ne boste mogli več dostopati!";"Uredi cilj"==document.getElementById("dialog-title").innerHTML&&(e="Ali res želite izbirisati cilj? S pritiskom na gumb Izbriši bo vaš cilj dokočno izbrisan in do njega ne boste mogli več dostopati!");var a=confirm(e);console.log(a),a&&potrdiIzbris()};var e=document.querySelector("dialog");e.showModal||dialogPolyfill.registerDialog(e);for(var a=document.querySelectorAll(".closeX"),t=function(e){a[e].onclick=function(){a[e].parentNode.classList.add("hide-element")}},i=0;i<a.length;i++)t(i);function n(e,a){var t=document.getElementById(e),i=t.getElementsByTagName("TR"),o=void 0;for(o=1;o<i.length;o++)t.rows[o].onclick=function(e){return function(){a(e)}}(t.rows[o])}e.querySelector(".close").onclick=function(){e.close(),deleteHints()},function(e,a){var t=document.getElementById(e).getElementsByTagName("li"),i=void 0;for(i=0;i<t.length;i++)t[i].onclick=function(e){return function(){a(e)}}(t[i])}("opomnikiList",function(e){napolniNalogo(e),console.log(e)}),n("table-cilji",function(e){posodobiCilj(e)}),n("table-cilji-end",function(e){posodobiCilj(e)});var l=o("input[name=person]");o("#checkboxVsi").on("click",function(){o(this).is(":checked")?l.parent().each(function(e,a){a.MaterialCheckbox.check()}):l.parent().each(function(e,a){a.MaterialCheckbox.uncheck()})}),o(document).on("change","input[name=person]",function(e){o("#checkboxVsi").is(":checked")&&o("input[name=person]:checked").length<l.length?o("#checkboxVsi").parent()[0].MaterialCheckbox.uncheck():o("#checkboxVsi").is(":checked")||o("input[name=person]:checked").length!==l.length-1||o("#checkboxVsi").parent()[0].MaterialCheckbox.check()}),o("#pickZac").datepicker({language:"sl",timeFormat:"hh:ii",clearButton:"true",position:"right top",onSelect:function(e,a){o("#targetZacetek").val(e),o("#dateZacetek").val(a),document.getElementById("dialogZacetek").MaterialTextfield.checkDirty()}}),o("#pickKon").datepicker({language:"sl",timeFormat:"hh:ii",clearButton:"true",onSelect:function(e,a){o("#targetKonec").val(e),o("#dateKonec").val(a),document.getElementById("dialogKonec").MaterialTextfield.checkDirty()}}),o("#dialogZacetek").click(function(e){console.log("open");var a=o("#pickZac");a.removeClass("hide-element"),o(document).mouseup(function(e){a.is(e.target)||0!==a.has(e.target).length||a.addClass("hide-element")})}),o("#dialogKonec").click(function(e){console.log("open");var a=o("#pickKon");a.removeClass("hide-element"),o(document).mouseup(function(e){a.is(e.target)||0!==a.has(e.target).length||a.addClass("hide-element")})}),o("#nalogaDone").click(function(e){var a="newDialog="+o("#opomnikId").val()+"&status=true&mode=1";o.ajax({url:"/ustvari_nalogo",type:"POST",contentType:"application/x-www-form-urlencoded",data:a,success:function(e){localStorage.setItem("Status",e),localStorage.setItem("Stran",0),window.location.reload(!0)},error:function(e,a,t,i){document.querySelector("#mainToast").MaterialSnackbar.showSnackbar({message:e}),console.log(a,t,i,e)}})})});