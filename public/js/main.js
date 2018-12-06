window.onload = function () {
        var GetDocumentScrollTop = function () {
            var isScrollBodyIE = ASPx.Browser.IE && ASPx.GetCurrentStyle(document.body).overflow == "hidden" && document.body.scrollTop > 0;
            if (ASPx.Browser.WebKitFamily || isScrollBodyIE) {
                if (ASPx.Browser.MacOSMobilePlatform)
                    return window.pageYOffset;
                else if (ASPx.Browser.WebKitFamily)
                    return document.documentElement.scrollTop || document.body.scrollTop;
                return document.body.scrollTop;
            }
            else
                return document.documentElement.scrollTop;
        };
        var _aspxGetDocumentScrollTop = function () {
            if (__aspxWebKitFamily) {
                if (__aspxMacOSMobilePlatform)
                    return window.pageYOffset;
                else
                    return document.documentElement.scrollTop || document.body.scrollTop;
            }
            else
                return document.documentElement.scrollTop;
        }
        if (window._aspxGetDocumentScrollTop) {
            window._aspxGetDocumentScrollTop = _aspxGetDocumentScrollTop;
            window.ASPxClientUtils.GetDocumentScrollTop = _aspxGetDocumentScrollTop;
        } else {
            window.ASPx.GetDocumentScrollTop = GetDocumentScrollTop;
            window.ASPxClientUtils.GetDocumentScrollTop = GetDocumentScrollTop;
        }
    };
