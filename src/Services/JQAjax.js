import $                from 'jquery';
import log              from 'consolelog'

const urlBase           = 'http://sim-rest.poiz.me/';
export default {
    $                   : $,
    log                 : log,
    resourceBase        : urlBase,
    endPointBaseURL     : urlBase   + 'en/data/api/v1',
    employeeEndPoint    : '/employees',
    ajaxURI             : urlBase + '/api',
	restAccessURI       : urlBase,

    flatAjaxFetch: function(URL, payLoad, rqType, retType){
        rqType          = (undefined === rqType)    ? 'GET'   : rqType;
        retType         = (undefined === retType)   ? 'JSON'  : retType;
        const config    = {
            url         : URL,
            dataType    : retType,
            cache       : true,
            type        : rqType,
        };
        if(undefined !== payLoad){
            config.data = payLoad;
        }
        if(undefined !== config._){delete config._;}

        return $.ajax(config);
    },

    PoizAlert: function PoizAlert(msgText, delay){
            msgText         = (msgText !== undefined) ? msgText : "Das Bild wurde kopiert!";
            delay           = (delay !== undefined) ? delay: 2000;
            let objDim      = this.getWindowParams();
            let message     = "<span " +
                "style='display:block;padding:30px;margin:0 auto;width:350px;max-width:350px;color:#000000;" +
                "text-align:center;background:rgba(189,189,189,0.9);border-radius:7px;border:double 3px rgba(255,255,255,0.4);" +
                "font-size:14px;font-weight:500;letter-spacing:0.01em;'>" + msgText +
                "</span>";

            //CREATE WRAPPER OVERLAY-DIV
            let alertBox    = $("<div />", {
                id: "pz-alert",
                "class": "pz-alert"
            }).css( {
                position    : "fixed",
                width       : "100%",
                height      : "80px",
                background  : "transparent",
                display     : "none",
                margin      : 0,
                padding     : 0,
                left        : 0,
                zIndex      : 9999,
                top         : ((objDim.winHeight - 140)/2) + "px"
            } ).append($(message));
            $("body").append(alertBox);
            alertBox.fadeIn(500, function(){
                setTimeout(function(){
                    alertBox.fadeOut(1000, function(){alertBox.remove();});
                }, delay);
            });
        },

    getWindowParams: function getWindowParams(){
        let config              = {};
        config.winWidth         = $(window).width();
        config.winHeight        = $(window).height();
        config.docWidth         = $(document).width();
        config.docHeight        = $(document).height();
        config.halfDocHeight    = (config.winHeight - config.popHeight)/2;
        return config;
    },
}