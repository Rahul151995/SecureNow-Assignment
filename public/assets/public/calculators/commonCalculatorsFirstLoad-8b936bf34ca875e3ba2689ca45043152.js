//# sourceMappingURL=commonCalculatorsFirstLoad.js.map
var isContactDetailsSaved=$.Deferred();
$(document).ready(function(){function a(a){$.ajax({url:"/prospect/rm/"+a+".create.json",type:"GET",success:function(a,c){$("#prospectId").val(a.prospect.id);a.prospect.company.match(/[a-z]/i)&&($("#name").val(a.prospect.company),$("#company").val(a.prospect.company));$("#location").val(a.prospect.location);$("#mobile").val(a.prospect.mobile);$("#email").val(a.prospect.email);$("#selectedProduct").val(a.product.id);4!=a.product.id&&95!=a.product.id&&(console.log("Condition satisfied 1"),$("#firstNext").click(),
getFieldsAutoFocused())},error:function(a,c){showErrorMessage("Server Error! Please try again later")}})}redirectRiskDiagnostic();var b=pageURL.searchParams.get("prospectId");""!=$("#email").val()?sessionStorage.getItem("location")&&$("#location").val(sessionStorage.getItem("location")):sessionStorage.removeItem("location");b&&($("#prospectId").val(b),a(b));document.getElementById("askContactInfo")&&"false"==document.getElementById("askContactInfo").value&&("Architects"==$("#profession").val()||"Lawyers"==
$("#profession").val()||"Chartered Accountants"==$("#profession").val()?(console.log("m here ",$("#profession").val()),getQuoteDetailsAndShowSection2(),$("#navigationStep1").hide(),$("#quotePageNavigationStep1").hide(),$("#backButtonQuotePage").hide()):"4"==$("#selectedProduct").val()?(console.log("4"==$("#selectedProduct").val()),$("#navigationStep2").hide(),$("#previous").hide(),$("#quotePageNavigationStep2").hide(),$("#backButtonQuotePage").hide()):(pressFirstNextForCalculator(),adjustBannerForQuotePrerequisitesBox(),
getFieldsAutoFocused(),$("#previous").hide(),$("#navigationStep1").hide(),$("#quotePageNavigationStep1").hide()));document.getElementById("quoteId")&&document.getElementById("quoteId").value&&showSection2();$("#company, #location, #mobile, #email").keyup(function(a){13==a.keyCode&&$("#firstNext").click()});$("#company, #location").keydown(function(a){if(a.altKey)a.preventDefault();else{var b=a.keyCode;8==b||9==b||32==b||46==b||35<=b&&40>=b||65<=b&&90>=b||a.preventDefault()}});$("#mobile").keypress(function(a){(8!=
a.which&&0!=a.which&&48>a.which||57<a.which)&&a.preventDefault()});$(".numberOnly").on("keypress",function(a){(8!=a.which&&0!=a.which&&48>a.which||57<a.which)&&a.preventDefault()});$(".numberWithDecimal").on("keypress keyup blur",function(a){var b=new RegExp(/(?!\.)[0-9]*?[.]{1}[0-9]{4}/i);(b=$(this).val().match(b))&&$(this).val(b);if(0==$(this).val().length&&46==a.which)return!1;8!=a.which&&0!=a.which&&(46!=a.which||0<=$(this).val().indexOf("."))&&(48>a.which||57<a.which)&&a.preventDefault()});$(".numberWithDecimal").on("focusout",
function(a){$(this).val().indexOf(".")==$(this).val().length-1&&(a=$(this).val(),$(this).val(a.substring(0,a.length-1)))});$("#firstNextPA").click(function(a){console.log("fclickedPA...");validateContactInfo()&&(saveContactInfo(),callConversionCode(),"true"==$("#isCalculator").val()&&(pressFirstNextForCalculator(),getFieldsAutoFocused(),callEventTrackingOnContactDetails(),sumAssuredSubmit()))});$("#firstNext").click(function(a){console.log("fclicked...");validateContactInfo()&&(saveContactInfo(),
"4"==$("#selectedProduct").val()&&($("#calcMobile").val($("#mobile").val()),sendClickToCall()),callConversionCode(),"true"==$("#isCalculator").val()?"Architects"==$("#profession").val()||"Lawyers"==$("#profession").val()||"Chartered Accountants"==$("#profession").val()?(callEventTrackingOnQuotePrerequisites(),getQuoteDetailsAndShowSection2()):(console.log("m here1"),pressFirstNextForCalculator(),adjustBannerForQuotePrerequisitesBox(),getFieldsAutoFocused(),callEventTrackingOnContactDetails()):"96"==
$("#selectedProduct").val()?window.location="https://general.bajajallianz.com/Insurance/travel/basicinfo.jsp?src=CBM_061537":(console.log("m here2"),pressFirstNextForNonCalculator(),callEventTrackingOnNonCalculatorContactDetails()))});$("#calculatorsWithSecondSlideAsContactFirstNext").on("click",function(a){if(!validateBenefits())return!1;"false"==document.getElementById("askContactInfo").value?(console.log("m here"),getQuoteDetailsAndShowSection2()):(pressFirstNextForCalculator(),adjustBannerForContactDetails(),
callEventTrackingOnQuotePrerequisites())});$("#calculatorsWithContactMePopUpFirstNext").on("click",function(a){if(!validateBenefits())return!1;getQuoteDetailsAndShowSection2();$("#prospectId").val()||$("#calculatorContactMeModal").remodal().open()});$("#calculatorsContactMePopUpSubmit").click(function(a){validateContactInfo()&&(saveContactInfo(),"4"==$("#selectedProduct").val()&&($("#calcMobile").val($("#mobile").val()),sendClickToCall()),isContactDetailsSaved.done(function(a){saveQuoteData();$("#calculatorContactMeModal").remodal().close()}),
callEventTrackingOnContactDetails())});$("#calculatorsWithContactMePopUpAfter5SecFirstNext").on("click",function(a){if(!validateBenefits())return!1;getQuoteDetailsAndShowSection2();$("#prospectId").val()||setTimeout(function(){$("#calculatorContactMeModal").remodal().open()},5E3)});setTimeout(function(){$.getScript("/assets/public/calculators/commonCalculatorsNew.js")},3E3)});
function redirectRiskDiagnostic(){var a=new URLSearchParams(window.location.search),b=a.get("riskType"),a=a.get("prospect");console.log("check");b&&getRiskProspectData(a)}function getRiskProspectData(a){$.ajax({url:riskURL+"diagnostic-tool/client/"+a,type:"GET",success:function(a,c){$("#company").val(a.data.name);$("#location").val("Gurgaon");$("#mobile").val(a.data.mobile);$("#email").val(a.data.email);$("#firstNext").click()},error:function(a,c){}})}
function getQuoteDetailsAndShowSection2(){$("#quoteId").val()?showSection2():!$("#prospectId").val()&&document.getElementById("askContactInfo")&&"false"!=document.getElementById("askContactInfo").value?isContactDetailsSaved.done(function(a){getQuotes();showSection2()}):(getQuotes(),showSection2())}function preventCompanyWhiteSpaceAtFirst(a){0==document.getElementById("company").value.length&&32==a.keyCode&&a.preventDefault()}
function preventLocationWhiteSpaceAtFirst(a){0==document.getElementById("location").value.length&&32==a.keyCode&&a.preventDefault()}function showSection2(){$("#section-1").hide();$("#section-2").show();"true"!=$("#owl-value").val()||83!=$("#selectedProduct").val()&&79!=$("#selectedProduct").val()&&4!=$("#selectedProduct").val()||callInsurerLogoSlider()}
function hideSection2(){hideCalculatorError();$("#section-1").show();$(".black-box .wizard .nav-tabs li:nth-child(2)").removeClass("disabled");$('.black-box .wizard .nav-tabs li a[href="#step2"]').click();$(".group").find(".group_banner>.group_form_main>.content").addClass("ac-main03");$(".doctor-professional").find(".group_banner>.group_form_main>.content").removeClass("ac-main03");$("#section-2").hide()}
function pressFirstNextForCalculator(){var a=$(".wizard .nav-tabs li.active");a.next().removeClass("disabled");a.next().find('a[data-toggle="tab"]').click()}function pressFirstNextForNonCalculator(){$(".vertical-mid.thanks-msg").css("padding","65px 0");$("#step1, .wizard").hide();$("#complete").removeClass("tab-pane");setTimeout(function(){$("html, body").animate({scrollTop:$(".why_secure_now").offset().top-70},2E3)},1E3)}
function adjustBannerForQuotePrerequisitesBox(){var a=$("#selectedProduct").val();a&&"4"==a?$(".group").find(".group_banner>.group_form_main>.content").removeClass("ac-main03"):$(".group").find(".group_banner>.group_form_main>.content").addClass("ac-main03");$(".group").find(".content-box>div:nth-child(1)").removeAttr("class").addClass("black-box-sm");$(".doctor-professional").find(".content-box>div:nth-child(1)").removeAttr("class").addClass("black-box");768<$(document).width()?($(".group").find(".content-box>div:nth-child(2)").removeAttr("class").addClass("black-box-lg"),
$(".doctor-professional").find(".content-box>div:nth-child(2)").removeAttr("class").addClass("black-box"),$(".workman-compensation-insurance").find(".content-box>div:nth-child(2)").removeAttr("class").addClass("black-box")):$(".group").find(".content-box>div:nth-child(2)").removeAttr("class").addClass("black-box-xl")}
function adjustBannerForContactDetails(){$(".group_banner>.group_form_main>.content").removeClass("ac-main03");$(".group").find(".content-box>div").removeAttr("class").addClass("black-box")}
function getFieldsAutoFocused(){$(".group-accident-insurance #XLEW_3_4_4,.group-health-insurance #XLEW_4_5_3,.workman-compensation-insurance #industry,.office-insurance #tangibleFixedAssestsCost,.construction-all-risk-insurance #Categories,.senior-citizen #age,.home-insurance #XLEW_1_3_8,.critical-illness-insurance #age").focus()}var contactInfo;
function validateContactInfo(){contactInfo=getContactInfo();var a=$("#selectedProduct").val();if(""==contactInfo.company)return 24!=a&&41!=a&&23!=a&&96!=a&&59!=a&&79!=a&&42!=a&&113!=a?showError("Company name required","#company"):showError("Name required","#company"),!1;if(""==contactInfo.location)return showError("Please select a location","#location"),!1;if(""==contactInfo.mobile)return showError("Mobile number required","#mobile"),!1;if(isValidMobile(contactInfo.mobile)){if("0"==contactInfo.mobile.charAt(0))return showError("Invalid Mobile Number (can't start with '0')",
"#mobile"),!1;if(""==contactInfo.email)return showError("Email address required","#email"),!1;if(!isValidEmail(contactInfo.email))return showError("Invalid email address","#email"),!1}else return showError("Invalid mobile number","#mobile"),!1;""!=contactInfo.location&&sessionStorage.setItem("location",contactInfo.location);hideError();return!0}
function getContactInfo(){var a=pageURL.searchParams.get("partner");return{prospectId:$("#prospectId").val(),company:$("#company").val(),location:$("#location").val(),mobile:$("#mobile").val(),email:$("#email").val(),couponCode:$("#couponCode").val(),product:$("#selectedProduct").val(),channel:"Online",partnerId:a?a:null,leadSource:String(pageURL),googleClickID:pageURL.searchParams.get("gclid")}}
function saveContactInfo(){$.ajax({url:"/api/v1/createOrUpdateProspect",type:"POST",data:contactInfo,success:function(a){1==a.isSuccess?($("#prospectId").val(a.data.prospectId),$("#sentQuoteEmailAddress").text(contactInfo.email),isContactDetailsSaved.resolve()):showError(a.error)},error:function(a,b,c){showError("Server Error! Please try again later");return!1}})}function setProspectIdNull(){console.log("setProspectIdNull")}function setQuoteIdNull(){$("#quoteId").val("")}
function checkNoOfEmployee(){var a=0,b=0,c,d;for(i=0;5>i;i++)c="#self"+i,c=$(c).val(),""!=c&&(c=parseInt(c),a+=c);for(i=0;5>i;i++)if(d="#spouse"+i,c=$(d).val(),""!=c&&(c=parseInt(c),b+=c,b>a))return showError("Number of Spouse Cannot be More than Employees"),$(d).val(""),!1;return!0}function addField(){validateBenefits()&&($(".tab-pane,.active").find(".hidden-row").first().removeClass("hidden-row").show(),0==$(".tab-pane,.active").find(".hidden-row").length&&$(".add-field").hide())}
function showError(a,b){console.log("Error initiated: "+a);a?$("#contactFormErrorMessage").html(a):$("#contactFormErrorMessage").html("All fields required");b&&$(b).focus();$("#contactFormErrorMessage").css("visibility","visible");setTimeout(function(){hideError()},3E3)}function hideError(){$("#contactFormErrorMessage").css("visibility","hidden")}
function showCalculatorError(a,b){a?$("#calculatorErrorMessage").html(a):$("#calculatorErrorMessage").html("Internal Server Error");b&&$(b).focus();$("#calculatorErrorMessage").css("visibility","visible");$("html, body").animate({scrollTop:30},1E3);setTimeout(function(){hideCalculatorError()},3E3)}function hideCalculatorError(){$("#calculatorErrorMessage").css("visibility","hidden")}
function callEventTrackingOnNonCalculatorContactDetails(){switch($("#selectedProduct").val()){case "5":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_ Group_Gratuity"});break;case "13":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_MI"});break;case "29":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_PLI"});break;case "39":ga("send",
"event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_PI"});break;case "50":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_Edli"});break;case "59":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_THI"});break;case "82":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_CLL"});break;case "84":ga("send",
"event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_ GS"});break;case "85":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_GTI"});break;case "87":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_ERI"});break;case "88":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_MHI"});break;case "90":ga("send",
"event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_MFI"});break;case "94":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_CCI"});break;case "96":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_Travel_Insurance"});break;case "98":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_TLKI"});
break;case "104":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_AI"});break;case "114":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_CI"});break;case "118":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_RPP"});break;case "120":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_SPP"});
break;case "121":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_FFI"});break;case "125":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_ACMI"});break;case "126":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_GHCI"});break;case "137":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_Claims_Advisory"})}}
function callEventTrackingOnContactDetails(){var a=$("#selectedProduct").val();console.log("callEventTrackingOnContactDetails");console.log("selectedProduct"+a);switch(a){case "1":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_GHI"});break;case "2":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_GPAI"});break;case "3":ga("send","event",{eventCategory:"Contact Information",
eventAction:"Next_Button",eventLabel:"Contact_Next_Button_GTLI"});break;case "4":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Get_Quote_Button",eventLabel:"Contact_Information_Get_Quote_Button_GWC"});break;case "8":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_Office_Insurance"});break;case "14":ga("send","event",{eventCategory:"Get_Quote",eventAction:"Next_Button",eventLabel:"Quote_Next_Button_D&O_Liability"});
break;case "15":ga("send","event",{eventCategory:"Contact Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_E&O"});break;case "16":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_CGLI"});break;case "23":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Submit_Button",eventLabel:"Info_Submit_Button_Individual_Motor"});break;case "24":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Submit_Button",
eventLabel:"Info_Submit_Button_Individual_Insurance"});break;case "28":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_CRI"});break;case "41":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Submit_Button",eventLabel:"Info_Submit_Button_Individual_Life_Keyman"});break;case "42":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_CII"});break;case "61":ga("send",
"event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_CRI"});break;case "79":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_Home_Insurance"});break;case "82":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_CLL"});break;case "83":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_DPI"});
break;case "89":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_FWI"});break;case "91":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_E&I_Insurance"});break;case "92":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_ButtonIT_Insurance"});break;case "93":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",
eventLabel:"Contact_Next_Button_STI"});break;case "102":ga("send","event",{eventCategory:"Contact_InformationSubmit_Button",eventLabel:"Contact_Information_Submit_Gi"});break;case "103":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Submit_Button",eventLabel:"Info_Submit_Button_Commercial_Liability"});break;case "107":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_MTO"});break;case "109":ga("send","event",{eventCategory:"Contact_Information",
eventAction:"Next_Button",eventLabel:"Contact_Next_Button_TCI"});break;case "113":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_SCI"});break;case "115":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_JBI"});break;case "123":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_Architects_Insurance"});break;case "130":ga("send",
"event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_Title_Insurance"});break;case "132":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Information_Next_Button_EII"});break;case "133":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Information_Next_Button_EII"});break;case "134":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",
eventLabel:"Contact_Next_Button_LIC"});break;case "135":ga("send","event",{eventCategory:"Contact_Information",eventAction:"Next_Button",eventLabel:"Contact_Next_Button_Esecure-Insurance"})}}
function callConversionCode(){switch($("#selectedProduct").val()){case "1":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=PoeCCPzd52MQyNay6AM&guid=ON&script=0";break;case "2":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=l_eDCPm4sGQQyNay6AM&guid=ON&script=0";break;case "3":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=L9ItCJu_84IBEMjWsugD&guid=ON&script=0";break;case "4":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=gbboCOyfumQQyNay6AM&guid=ON&script=0";
break;case "5":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=nHemCIfD84IBEMjWsugD&guid=ON&script=0";break;case "8":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=E6kECN_7umQQyNay6AM&guid=ON&script=0";break;case "13":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=ySyvCIqVvXMQyNay6AM&guid=ON&script=0";break;case "14":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=06OaCMqKu2QQyNay6AM&guid=ON&script=0";
break;case "15":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=OIpCCIz8umQQyNay6AM&guid=ON&script=0";break;case "16":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=xKNTCNOKu2QQyNay6AM&guid=ON&script=0";break;case "23":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=TojwCMTo1XMQyNay6AM&guid=ON&script=0";break;case "24":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=cwJJCI-s-IIBEMjWsugD&guid=ON&script=0";
break;case "28":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=gOFJCLHP0GkQyNay6AM&guid=ON&script=0";break;case "29":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=iVUWCPmyz3MQyNay6AM&guid=ON&script=0";break;case "39":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=HWRgCIj224IBEMjWsugD&guid=ON&script=0";break;case "41":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=6TftCPve1nMQyNay6AM&guid=ON&script=0";
break;case "42":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=qowRCMT_sm0QyNay6AM&guid=ON&script=0";break;case "50":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=1sGdCPva7IIBEMjWsugD&guid=ON&script=0";break;case "59":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=KuwDCMGx-IIBEMjWsugD&guid=ON&script=0";break;case "61":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=-sebCKGs-IIBEMjWsugD&guid=ON&script=0";
break;case "79":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=7XwbCOivt20QyNay6AM&guid=ON&script=0";break;case "82":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=ZYa4CLqYvXMQyNay6AM&guid=ON&script=0";break;case "83":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=mLe8CP3O1WkQyNay6AM&guid=ON&script=0";break;case "84":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=E4dICL_O84IBEMjWsugD&guid=ON&script=0";
break;case "85":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=6ePGCOb024IBEMjWsugD&guid=ON&script=0";break;case "87":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=wry-CIj824IBEMjWsugD&guid=ON&script=0";break;case "88":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=9OdrCPO37IIBEMjWsugD&guid=ON&script=0";break;case "89":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=bMnRCLPt1nMQyNay6AM&guid=ON&script=0";
break;case "90":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=doFTCKOx8YIBEMjWsugD&guid=ON&script=0";break;case "91":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=zsAqCPfW04IBEMjWsugD&guid=ON&script=0";break;case "92":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=mDbSCLyy24IBEMjWsugD&guid=ON&script=0";break;case "93":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=5050CP_I24IBEMjWsugD&guid=ON&script=0";
break;case "94":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=iLdyCNev8YIBEMjWsugD&guid=ON&script=0";break;case "95":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=WcRNCJifnmkQyNay6AM&guid=ON&script=0";break;case "96":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=h2m0COOy8YIBEMjWsugD&guid=ON&script=0";break;case "100":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=I72OCJiYg2kQyNay6AM&guid=ON&script=0";
break;case "102":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240457/?label=GgTfCLfb7IIBEMjWsugD&guid=ON&script=0";break;case "103":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=s-ZoCPOY-IIBEMjWsugD&guid=ON&script=0";break;case "104":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=OPzECM-t-IIBEMjWsugD&guid=ON&script=0";break;case "109":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=qELKCOOv8YIBEMjWsugD&guid=ON&script=0";
break;case "113":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=LYbPCN7r1nMQyNay6AM&guid=ON&script=0";break;case "115":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=xrkeCPnK4IIBEMjWsugD&guid=ON&script=0";break;case "118":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=DZi3CJvM4IIBEMjWsugD&guid=ON&script=0";break;case "119":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=mDsMCNCx-IIBEMjWsugD&guid=ON&script=0";
break;case "120":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=6dZ3CL2z8YIBEMjWsugD&guid=ON&script=0";break;case "121":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=fEc_CP6y-IIBEMjWsugD&guid=ON&script=0";break;case "123":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=bDauCIXO4IIBEMjWsugD&guid=ON&script=0";break;case "125":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=lrKJCJCz-IIBEMjWsugD&guid=ON&script=0";
break;case "124":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=3IC3CLWx8YIBEMjWsugD&guid=ON&script=0";break;case "126":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=YjCwCP208YIBEMjWsugD&guid=ON&script=0";break;case "127":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=ogXrCMbK4IIBEMjWsugD&guid=ON&script=0";break;case "130":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=BgODCP2u_YoBEMjWsugD&guid=ON&script=0";
break;case "129":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=FCUbCLLKjogBEMjWsugD&guid=ON&script=0";break;case "95":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=5Kx0CNGq8IcBEMjWsugD&guid=ON&script=0";break;case "134":(new Image).src="//www.googleadservices.com/pagead/conversion/1024240456/?label=UUw0CPf5hZMBEMjWsugD&guid=ON&script=0"}}
function checkPremiumValueIfLessThanThousand(a){var b=a.toString().replace(",","");return isNaN(b)?a:1E3>parseInt(b)?"1,000":a}var eedecreg=/\./g,eeth=",",near0RegExp=/[.](.*0000000|.*9999999)/,eedec=".";function eeparseFloat(a){a=String(a).replace(eedecreg,".");a=parseFloat(a);return isNaN(a)?0:a}
function eedisplayFloatNDTh(a,b){if(myIsNaN(a))return Number.NaN;var c=round(a,b);if(0<b){c=String(c);if(-1!=c.indexOf("e")||-1!=c.indexOf("E"))return c;var d=c.split("."),c=eeinsertThousand(d[0].toString()),d=2>d.length?"00000000000000".substring(0,b):(d[1].toString()+"00000000000000").substring(0,b);return c+eedec+d}console.log("temporarly");return eeinsertThousand(c.toString())}function myIsNaN(a){return isNaN(a)||"number"==typeof a&&!isFinite(a)}
function round(a,b){if(isFinite(a)&&isFinite(b)){var c=0>a?-1:1,d=Math.abs(a),e=Math.pow(10,b);return c*Math.round(d*e)/e}return NaN}function eeinsertThousand(a){if(""==a||0<=a.indexOf("e"))return a;var b="";"-"==a.charAt(0)&&(b="-",a=a.substring(1));for(var c="",d=a.length-1,e=0;e<=d;e++)0<e&&0==e%3&&(c=eeth+c),c=a.charAt(d-e)+c;return b+c}function eedisplayFloat(a){if(myIsNaN(a))return Number.NaN;var b=String(a);near0RegExp.test(b)&&(a=round(a,8),b=String(a));return b.replace(/\./g,eedec)}
function eeisnumber(a){if(isNaN(a)||a==Number.NEGATIVE_INFINITY||a==Number.POSITIVE_INFINITY||null==a)return!1;switch(typeof a){case "number":return!0;case "object":return a.constructor==Number;default:return!1}}function dynamicTickSelect(a){if("Covered"==a||"Tick"==a||"\u2714"==a)return"right";if("Not Covered"==a||"Cross"==a||"\u2718"==a)return"cross"}
function getPaymentDetails(){var a=$("#selectedProduct").val();$.ajax({url:"/api/v1/getPaymentDetails/?id="+a,type:"GET",success:function(a){a.isSuccess?($("#option1Percentage").text(a.data.option1),$("#option2Percentage").text(a.data.option2),$("#option3Percentage").text(a.data.option3)):showError(a.message)},error:function(a,c,d){}})}function eegetdropdownvalue(a){return"INPUT"==$(a).get(0).tagName?$("input[name="+$(a).attr("name")+"]:checked").val():$(a).val()};