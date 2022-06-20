
body = document.getElementsByTagName('body')[0];
// Hack but i don't care
var old_style = body.getAttribute('_style');
if(old_style == null) old_style = '';

if(old_style != '') {
    body.setAttribute('style', old_style);
    body.setAttribute('_style', '');
}
else {
    body.setAttribute('_style', body.getAttribute('style'));
    body.setAttribute('style', 'max-width:80ch;margin:auto');
}
