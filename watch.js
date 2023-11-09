function initwatch(){
    updatewatch();
    window.setInterval("updatewatch()",1);
}
function updatewatch(){
const t=new Date();
let h=t.getHours(),
m=t.getMinutes(),
s=t.getSeconds();
d=t.getDate(),
mo=t.getMonth(),
y=t.getFullYear(),
da=t.getDay(),
pe="AM";

if(h==0)
{
    h=12;
}
if(h>12)
{
    h=h-12;
    pe="PM";
}
Number.prototype.pad=function(digits){
    for(var n = this.toString();n.length < digits;n = 0 + n);
    return n;
}
let months=["JAN","FEB","MAR","APRIL","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
let weeks=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
let values=[h.pad(2),m.pad(2),s.pad(2),d.pad(2),months[mo],y,weeks[da],pe];
let ids=["hour","min","sec","date","month","year","day","period"];

for(let i=0;i<values.length;i++)
{
    document.getElementById(ids[i]).firstChild.nodeValue=values[i];
}




}
