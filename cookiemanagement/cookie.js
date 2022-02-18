function setcookie(name, value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 10);
    document.cookie = name + "=" + escape(value) + ";expires=" + exdate;
}
function getcookie(name) {
    if (document.cookie.length > 0) {
        start = document.cookie.indexOf(name + "=");
        if (start != -1) {
            start = start + name.lenght + 1;
            end = document.cookie.indexOf(";", start);
            if (end == -1) end = document.cookie.length;
            return unescape(document.cookie.substring(start, end));
        }
    }
    return "";
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deletecookie(name) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 10);
    document.cookie = name + "=" + escape("") + ";expires=" + exdate;
}
