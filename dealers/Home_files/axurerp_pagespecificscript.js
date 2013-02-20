
var PageName = 'Home';
var PageId = '9a5c221cdd2c4e01a6395a685cc3a98a'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $pubfrom = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&pubfrom=' + encodeURIComponent($pubfrom) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[pubfrom\]\]/g, $pubfrom);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '19');
  value = value.replace(/\[\[GenMonth\]\]/g, '2');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'February');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Tuesday');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u963 = document.getElementById('u963');
gv_vAlignTable['u963'] = 'center';
var u964 = document.getElementById('u964');

u964.style.cursor = 'pointer';
if (bIE) u964.attachEvent("onclick", Clicku964);
else u964.addEventListener("click", Clicku964, true);
function Clicku964(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u965 = document.getElementById('u965');
gv_vAlignTable['u965'] = 'center';
var u966 = document.getElementById('u966');

u966.style.cursor = 'pointer';
if (bIE) u966.attachEvent("onclick", Clicku966);
else u966.addEventListener("click", Clicku966, true);
function Clicku966(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u967 = document.getElementById('u967');
gv_vAlignTable['u967'] = 'center';
var u968 = document.getElementById('u968');

u968.style.cursor = 'pointer';
if (bIE) u968.attachEvent("onclick", Clicku968);
else u968.addEventListener("click", Clicku968, true);
function Clicku968(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u969 = document.getElementById('u969');
gv_vAlignTable['u969'] = 'center';
var u2214 = document.getElementById('u2214');

var u2037 = document.getElementById('u2037');
gv_vAlignTable['u2037'] = 'top';
var u2216 = document.getElementById('u2216');

var u2217 = document.getElementById('u2217');
gv_vAlignTable['u2217'] = 'center';
var u2218 = document.getElementById('u2218');

var u2219 = document.getElementById('u2219');
gv_vAlignTable['u2219'] = 'center';
var u1718 = document.getElementById('u1718');

var u1719 = document.getElementById('u1719');
gv_vAlignTable['u1719'] = 'center';
var u970 = document.getElementById('u970');

u970.style.cursor = 'pointer';
if (bIE) u970.attachEvent("onclick", Clicku970);
else u970.addEventListener("click", Clicku970, true);
function Clicku970(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u971 = document.getElementById('u971');
gv_vAlignTable['u971'] = 'center';
var u972 = document.getElementById('u972');

u972.style.cursor = 'pointer';
if (bIE) u972.attachEvent("onclick", Clicku972);
else u972.addEventListener("click", Clicku972, true);
function Clicku972(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u973 = document.getElementById('u973');
gv_vAlignTable['u973'] = 'center';
var u974 = document.getElementById('u974');

u974.style.cursor = 'pointer';
if (bIE) u974.attachEvent("onclick", Clicku974);
else u974.addEventListener("click", Clicku974, true);
function Clicku974(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u975 = document.getElementById('u975');
gv_vAlignTable['u975'] = 'center';
var u976 = document.getElementById('u976');

u976.style.cursor = 'pointer';
if (bIE) u976.attachEvent("onclick", Clicku976);
else u976.addEventListener("click", Clicku976, true);
function Clicku976(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u977 = document.getElementById('u977');
gv_vAlignTable['u977'] = 'center';
var u978 = document.getElementById('u978');

u978.style.cursor = 'pointer';
if (bIE) u978.attachEvent("onclick", Clicku978);
else u978.addEventListener("click", Clicku978, true);
function Clicku978(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u979 = document.getElementById('u979');
gv_vAlignTable['u979'] = 'center';
var u2224 = document.getElementById('u2224');

var u2225 = document.getElementById('u2225');
gv_vAlignTable['u2225'] = 'center';
var u2047 = document.getElementById('u2047');

var u2227 = document.getElementById('u2227');
gv_vAlignTable['u2227'] = 'center';
var u2228 = document.getElementById('u2228');

var u2229 = document.getElementById('u2229');
gv_vAlignTable['u2229'] = 'center';
var u1728 = document.getElementById('u1728');
gv_vAlignTable['u1728'] = 'center';
var u1729 = document.getElementById('u1729');

u1729.style.cursor = 'pointer';
if (bIE) u1729.attachEvent("onclick", Clicku1729);
else u1729.addEventListener("click", Clicku1729, true);
function Clicku1729(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd2u1703','none','',500,'swing','up',150);

}

}

var u980 = document.getElementById('u980');

u980.style.cursor = 'pointer';
if (bIE) u980.attachEvent("onclick", Clicku980);
else u980.addEventListener("click", Clicku980, true);
function Clicku980(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u981 = document.getElementById('u981');
gv_vAlignTable['u981'] = 'center';
var u982 = document.getElementById('u982');

var u983 = document.getElementById('u983');
gv_vAlignTable['u983'] = 'center';
var u984 = document.getElementById('u984');

var u985 = document.getElementById('u985');
gv_vAlignTable['u985'] = 'center';
var u986 = document.getElementById('u986');

var u987 = document.getElementById('u987');
gv_vAlignTable['u987'] = 'center';
var u988 = document.getElementById('u988');

var u989 = document.getElementById('u989');
gv_vAlignTable['u989'] = 'center';
var u2234 = document.getElementById('u2234');
gv_vAlignTable['u2234'] = 'center';
var u2055 = document.getElementById('u2055');

var u2236 = document.getElementById('u2236');
gv_vAlignTable['u2236'] = 'center';
var u2057 = document.getElementById('u2057');

var u2058 = document.getElementById('u2058');
gv_vAlignTable['u2058'] = 'center';
var u2239 = document.getElementById('u2239');
gv_vAlignTable['u2239'] = 'top';
var u1738 = document.getElementById('u1738');
gv_vAlignTable['u1738'] = 'center';
var u1739 = document.getElementById('u1739');

var u990 = document.getElementById('u990');

var u991 = document.getElementById('u991');
gv_vAlignTable['u991'] = 'center';
var u992 = document.getElementById('u992');

var u993 = document.getElementById('u993');
gv_vAlignTable['u993'] = 'center';
var u994 = document.getElementById('u994');

var u995 = document.getElementById('u995');
gv_vAlignTable['u995'] = 'center';
var u996 = document.getElementById('u996');

var u997 = document.getElementById('u997');
gv_vAlignTable['u997'] = 'center';
var u998 = document.getElementById('u998');

var u999 = document.getElementById('u999');
gv_vAlignTable['u999'] = 'center';
var u2244 = document.getElementById('u2244');

var u2245 = document.getElementById('u2245');
gv_vAlignTable['u2245'] = 'center';
var u2246 = document.getElementById('u2246');
gv_vAlignTable['u2246'] = 'top';
var u2247 = document.getElementById('u2247');
gv_vAlignTable['u2247'] = 'top';
var u2067 = document.getElementById('u2067');
gv_vAlignTable['u2067'] = 'center';
var u2249 = document.getElementById('u2249');
gv_vAlignTable['u2249'] = 'center';
var u1748 = document.getElementById('u1748');
gv_vAlignTable['u1748'] = 'top';
var u1749 = document.getElementById('u1749');
gv_vAlignTable['u1749'] = 'top';
var u1600 = document.getElementById('u1600');
gv_vAlignTable['u1600'] = 'center';
var u1601 = document.getElementById('u1601');

var u1602 = document.getElementById('u1602');
gv_vAlignTable['u1602'] = 'center';
var u1603 = document.getElementById('u1603');

var u1604 = document.getElementById('u1604');
gv_vAlignTable['u1604'] = 'center';
var u1605 = document.getElementById('u1605');
gv_vAlignTable['u1605'] = 'top';
var u1606 = document.getElementById('u1606');
gv_vAlignTable['u1606'] = 'top';
var u1607 = document.getElementById('u1607');
gv_vAlignTable['u1607'] = 'top';
var u2250 = document.getElementById('u2250');
gv_vAlignTable['u2250'] = 'top';
var u2251 = document.getElementById('u2251');
gv_vAlignTable['u2251'] = 'top';
var u2252 = document.getElementById('u2252');

var u2253 = document.getElementById('u2253');
gv_vAlignTable['u2253'] = 'center';
var u2254 = document.getElementById('u2254');

var u2255 = document.getElementById('u2255');
gv_vAlignTable['u2255'] = 'center';
var u2256 = document.getElementById('u2256');
gv_vAlignTable['u2256'] = 'top';
var u2257 = document.getElementById('u2257');
gv_vAlignTable['u2257'] = 'top';
var u2258 = document.getElementById('u2258');

var u2077 = document.getElementById('u2077');
gv_vAlignTable['u2077'] = 'center';
var u1758 = document.getElementById('u1758');
gv_vAlignTable['u1758'] = 'top';
var u1759 = document.getElementById('u1759');
gv_vAlignTable['u1759'] = 'top';
var u1610 = document.getElementById('u1610');

var u1611 = document.getElementById('u1611');
gv_vAlignTable['u1611'] = 'center';
var u1612 = document.getElementById('u1612');
gv_vAlignTable['u1612'] = 'top';
var u1613 = document.getElementById('u1613');
gv_vAlignTable['u1613'] = 'top';
var u1614 = document.getElementById('u1614');
gv_vAlignTable['u1614'] = 'top';
var u1615 = document.getElementById('u1615');
gv_vAlignTable['u1615'] = 'top';
var u1616 = document.getElementById('u1616');
gv_vAlignTable['u1616'] = 'top';
var u1617 = document.getElementById('u1617');

var u2260 = document.getElementById('u2260');
gv_vAlignTable['u2260'] = 'top';
var u2261 = document.getElementById('u2261');
gv_vAlignTable['u2261'] = 'top';
var u2262 = document.getElementById('u2262');

var u2263 = document.getElementById('u2263');
gv_vAlignTable['u2263'] = 'center';
var u2264 = document.getElementById('u2264');
gv_vAlignTable['u2264'] = 'top';
var u2265 = document.getElementById('u2265');
gv_vAlignTable['u2265'] = 'top';
var u2266 = document.getElementById('u2266');

var u2267 = document.getElementById('u2267');
gv_vAlignTable['u2267'] = 'center';
var u2268 = document.getElementById('u2268');
gv_vAlignTable['u2268'] = 'top';
var u2086 = document.getElementById('u2086');
gv_vAlignTable['u2086'] = 'center';
var u1768 = document.getElementById('u1768');
gv_vAlignTable['u1768'] = 'center';
var u2088 = document.getElementById('u2088');
gv_vAlignTable['u2088'] = 'center';
var u1620 = document.getElementById('u1620');
gv_vAlignTable['u1620'] = 'top';
var u1621 = document.getElementById('u1621');
gv_vAlignTable['u1621'] = 'top';
var u1622 = document.getElementById('u1622');
gv_vAlignTable['u1622'] = 'top';
var u1623 = document.getElementById('u1623');
gv_vAlignTable['u1623'] = 'top';
var u1624 = document.getElementById('u1624');

var u1625 = document.getElementById('u1625');
gv_vAlignTable['u1625'] = 'center';
var u1626 = document.getElementById('u1626');
gv_vAlignTable['u1626'] = 'top';
var u1627 = document.getElementById('u1627');
gv_vAlignTable['u1627'] = 'top';
var u2270 = document.getElementById('u2270');

var u2271 = document.getElementById('u2271');
gv_vAlignTable['u2271'] = 'center';
var u2272 = document.getElementById('u2272');
gv_vAlignTable['u2272'] = 'top';
var u2273 = document.getElementById('u2273');
gv_vAlignTable['u2273'] = 'top';
var u2274 = document.getElementById('u2274');

var u2275 = document.getElementById('u2275');
gv_vAlignTable['u2275'] = 'center';
var u2276 = document.getElementById('u2276');

var u2277 = document.getElementById('u2277');
gv_vAlignTable['u2277'] = 'center';
var u2278 = document.getElementById('u2278');

var u2279 = document.getElementById('u2279');
gv_vAlignTable['u2279'] = 'center';
var u1778 = document.getElementById('u1778');
gv_vAlignTable['u1778'] = 'top';
var u1779 = document.getElementById('u1779');
gv_vAlignTable['u1779'] = 'top';
var u2098 = document.getElementById('u2098');
gv_vAlignTable['u2098'] = 'top';
var u2099 = document.getElementById('u2099');
gv_vAlignTable['u2099'] = 'top';
var u1506 = document.getElementById('u1506');
gv_vAlignTable['u1506'] = 'top';
var u1507 = document.getElementById('u1507');
gv_vAlignTable['u1507'] = 'top';
var u1630 = document.getElementById('u1630');
gv_vAlignTable['u1630'] = 'top';
var u1631 = document.getElementById('u1631');

var u1632 = document.getElementById('u1632');
gv_vAlignTable['u1632'] = 'center';
var u1633 = document.getElementById('u1633');
gv_vAlignTable['u1633'] = 'top';
var u1634 = document.getElementById('u1634');
gv_vAlignTable['u1634'] = 'top';
var u1635 = document.getElementById('u1635');
gv_vAlignTable['u1635'] = 'top';
var u1636 = document.getElementById('u1636');
gv_vAlignTable['u1636'] = 'top';
var u1637 = document.getElementById('u1637');
gv_vAlignTable['u1637'] = 'top';
var u2281 = document.getElementById('u2281');
gv_vAlignTable['u2281'] = 'center';
var u1780 = document.getElementById('u1780');
gv_vAlignTable['u1780'] = 'top';
var u2283 = document.getElementById('u2283');
gv_vAlignTable['u2283'] = 'center';
var u2284 = document.getElementById('u2284');

var u2285 = document.getElementById('u2285');
gv_vAlignTable['u2285'] = 'center';
var u2286 = document.getElementById('u2286');

var u2287 = document.getElementById('u2287');
gv_vAlignTable['u2287'] = 'center';
var u2288 = document.getElementById('u2288');

var u2289 = document.getElementById('u2289');
gv_vAlignTable['u2289'] = 'center';
var u1788 = document.getElementById('u1788');

var u1789 = document.getElementById('u1789');
gv_vAlignTable['u1789'] = 'center';
var u1640 = document.getElementById('u1640');
gv_vAlignTable['u1640'] = 'top';
var u1643 = document.getElementById('u1643');
gv_vAlignTable['u1643'] = 'top';
var u1644 = document.getElementById('u1644');
gv_vAlignTable['u1644'] = 'top';
var u1645 = document.getElementById('u1645');

var u1646 = document.getElementById('u1646');
gv_vAlignTable['u1646'] = 'center';
var u2291 = document.getElementById('u2291');
gv_vAlignTable['u2291'] = 'center';
var u2292 = document.getElementById('u2292');
gv_vAlignTable['u2292'] = 'top';
var u2293 = document.getElementById('u2293');
gv_vAlignTable['u2293'] = 'top';
var u2294 = document.getElementById('u2294');

var u2295 = document.getElementById('u2295');
gv_vAlignTable['u2295'] = 'center';
var u2296 = document.getElementById('u2296');
gv_vAlignTable['u2296'] = 'top';
var u2297 = document.getElementById('u2297');

var u2298 = document.getElementById('u2298');
gv_vAlignTable['u2298'] = 'center';
var u2299 = document.getElementById('u2299');
gv_vAlignTable['u2299'] = 'top';
var u1798 = document.getElementById('u1798');
gv_vAlignTable['u1798'] = 'top';
var u1799 = document.getElementById('u1799');
gv_vAlignTable['u1799'] = 'top';
var u1527 = document.getElementById('u1527');
gv_vAlignTable['u1527'] = 'top';
var u1650 = document.getElementById('u1650');
gv_vAlignTable['u1650'] = 'top';
var u1651 = document.getElementById('u1651');
gv_vAlignTable['u1651'] = 'top';
var u1652 = document.getElementById('u1652');

var u1653 = document.getElementById('u1653');
gv_vAlignTable['u1653'] = 'center';
var u1654 = document.getElementById('u1654');
gv_vAlignTable['u1654'] = 'top';
var u1655 = document.getElementById('u1655');
gv_vAlignTable['u1655'] = 'top';
var u1656 = document.getElementById('u1656');
gv_vAlignTable['u1656'] = 'top';
var u1657 = document.getElementById('u1657');
gv_vAlignTable['u1657'] = 'top';
var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'top';
var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'top';
var u306 = document.getElementById('u306');

var u307 = document.getElementById('u307');
gv_vAlignTable['u307'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'top';
var u309 = document.getElementById('u309');

var u1537 = document.getElementById('u1537');
gv_vAlignTable['u1537'] = 'center';
var u1660 = document.getElementById('u1660');
gv_vAlignTable['u1660'] = 'center';
var u1661 = document.getElementById('u1661');
gv_vAlignTable['u1661'] = 'top';
var u1662 = document.getElementById('u1662');
gv_vAlignTable['u1662'] = 'top';
var u1663 = document.getElementById('u1663');
gv_vAlignTable['u1663'] = 'top';
var u1664 = document.getElementById('u1664');
gv_vAlignTable['u1664'] = 'top';
var u1665 = document.getElementById('u1665');
gv_vAlignTable['u1665'] = 'top';
var u1666 = document.getElementById('u1666');

var u1667 = document.getElementById('u1667');
gv_vAlignTable['u1667'] = 'center';
var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'top';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'top';
var u316 = document.getElementById('u316');

u316.style.cursor = 'pointer';
if (bIE) u316.attachEvent("onclick", Clicku316);
else u316.addEventListener("click", Clicku316, true);
function Clicku316(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u318 = document.getElementById('u318');

u318.style.cursor = 'pointer';
if (bIE) u318.attachEvent("onclick", Clicku318);
else u318.addEventListener("click", Clicku318, true);
function Clicku318(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u1670 = document.getElementById('u1670');

var u1671 = document.getElementById('u1671');
gv_vAlignTable['u1671'] = 'center';
var u1672 = document.getElementById('u1672');

var u1673 = document.getElementById('u1673');
gv_vAlignTable['u1673'] = 'center';
var u1674 = document.getElementById('u1674');

var u1675 = document.getElementById('u1675');
gv_vAlignTable['u1675'] = 'center';
var u1676 = document.getElementById('u1676');

var u1677 = document.getElementById('u1677');
gv_vAlignTable['u1677'] = 'center';
var u320 = document.getElementById('u320');

u320.style.cursor = 'pointer';
if (bIE) u320.attachEvent("onclick", Clicku320);
else u320.addEventListener("click", Clicku320, true);
function Clicku320(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'center';
var u322 = document.getElementById('u322');

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", Clicku322);
else u322.addEventListener("click", Clicku322, true);
function Clicku322(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');

u326.style.cursor = 'pointer';
if (bIE) u326.attachEvent("onclick", Clicku326);
else u326.addEventListener("click", Clicku326, true);
function Clicku326(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u327 = document.getElementById('u327');
gv_vAlignTable['u327'] = 'center';
var u328 = document.getElementById('u328');

u328.style.cursor = 'pointer';
if (bIE) u328.attachEvent("onclick", Clicku328);
else u328.addEventListener("click", Clicku328, true);
function Clicku328(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u329 = document.getElementById('u329');
gv_vAlignTable['u329'] = 'center';
var u1680 = document.getElementById('u1680');
gv_vAlignTable['u1680'] = 'center';
var u1681 = document.getElementById('u1681');

var u1682 = document.getElementById('u1682');
gv_vAlignTable['u1682'] = 'center';
var u1683 = document.getElementById('u1683');

var u1684 = document.getElementById('u1684');
gv_vAlignTable['u1684'] = 'center';
var u1685 = document.getElementById('u1685');

u1685.style.cursor = 'pointer';
if (bIE) u1685.attachEvent("onclick", Clicku1685);
else u1685.addEventListener("click", Clicku1685, true);
function Clicku1685(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 230,60,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1686 = document.getElementById('u1686');
gv_vAlignTable['u1686'] = 'center';
var u1687 = document.getElementById('u1687');

u1687.style.cursor = 'pointer';
if (bIE) u1687.attachEvent("onclick", Clicku1687);
else u1687.addEventListener("click", Clicku1687, true);
function Clicku1687(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 455,60,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u330 = document.getElementById('u330');

u330.style.cursor = 'pointer';
if (bIE) u330.attachEvent("onclick", Clicku330);
else u330.addEventListener("click", Clicku330, true);
function Clicku330(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u331 = document.getElementById('u331');
gv_vAlignTable['u331'] = 'center';
var u332 = document.getElementById('u332');

var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'center';
var u334 = document.getElementById('u334');

u334.style.cursor = 'pointer';
if (bIE) u334.attachEvent("onclick", Clicku334);
else u334.addEventListener("click", Clicku334, true);
function Clicku334(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','fade','',150,'fade','',150);

}

}

var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'center';
var u336 = document.getElementById('u336');

u336.style.cursor = 'pointer';
if (bIE) u336.attachEvent("onclick", Clicku336);
else u336.addEventListener("click", Clicku336, true);
function Clicku336(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd1u7','fade','',150,'fade','',150);

}

}

var u337 = document.getElementById('u337');
gv_vAlignTable['u337'] = 'center';
var u338 = document.getElementById('u338');

u338.style.cursor = 'pointer';
if (bIE) u338.attachEvent("onclick", Clicku338);
else u338.addEventListener("click", Clicku338, true);
function Clicku338(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd2u7','fade','',150,'fade','',150);

}

}

var u339 = document.getElementById('u339');
gv_vAlignTable['u339'] = 'center';
var u1691 = document.getElementById('u1691');

u1691.style.cursor = 'pointer';
if (bIE) u1691.attachEvent("onclick", Clicku1691);
else u1691.addEventListener("click", Clicku1691, true);
function Clicku1691(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 230,295,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1692 = document.getElementById('u1692');
gv_vAlignTable['u1692'] = 'center';
var u1693 = document.getElementById('u1693');

u1693.style.cursor = 'pointer';
if (bIE) u1693.attachEvent("onclick", Clicku1693);
else u1693.addEventListener("click", Clicku1693, true);
function Clicku1693(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 455,295,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1694 = document.getElementById('u1694');
gv_vAlignTable['u1694'] = 'center';
var u1695 = document.getElementById('u1695');

u1695.style.cursor = 'pointer';
if (bIE) u1695.attachEvent("onclick", Clicku1695);
else u1695.addEventListener("click", Clicku1695, true);
function Clicku1695(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 5,530,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u340 = document.getElementById('u340');

u340.style.cursor = 'pointer';
if (bIE) u340.attachEvent("onclick", Clicku340);
else u340.addEventListener("click", Clicku340, true);
function Clicku340(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','fade','',150,'fade','',150);

}

}

var u341 = document.getElementById('u341');
gv_vAlignTable['u341'] = 'center';
var u342 = document.getElementById('u342');

u342.style.cursor = 'pointer';
if (bIE) u342.attachEvent("onclick", Clicku342);
else u342.addEventListener("click", Clicku342, true);
function Clicku342(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd4u7','fade','',150,'fade','',150);

}

}

var u343 = document.getElementById('u343');
gv_vAlignTable['u343'] = 'center';
var u344 = document.getElementById('u344');

var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'top';
var u347 = document.getElementById('u347');

var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'top';
var u350 = document.getElementById('u350');

var u351 = document.getElementById('u351');
gv_vAlignTable['u351'] = 'center';
var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'top';
var u353 = document.getElementById('u353');
gv_vAlignTable['u353'] = 'top';
var u354 = document.getElementById('u354');

var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'center';
var u356 = document.getElementById('u356');
gv_vAlignTable['u356'] = 'top';
var u357 = document.getElementById('u357');

var u358 = document.getElementById('u358');
gv_vAlignTable['u358'] = 'center';
var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'top';
var u1102 = document.getElementById('u1102');
gv_vAlignTable['u1102'] = 'center';
var u1103 = document.getElementById('u1103');
gv_vAlignTable['u1103'] = 'top';
var u1104 = document.getElementById('u1104');

var u1105 = document.getElementById('u1105');
gv_vAlignTable['u1105'] = 'center';
var u1106 = document.getElementById('u1106');
gv_vAlignTable['u1106'] = 'top';
var u1107 = document.getElementById('u1107');

var u1108 = document.getElementById('u1108');
gv_vAlignTable['u1108'] = 'center';
var u1109 = document.getElementById('u1109');

var u360 = document.getElementById('u360');

var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'center';
var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'top';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u364 = document.getElementById('u364');

var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'center';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u367 = document.getElementById('u367');

var u368 = document.getElementById('u368');
gv_vAlignTable['u368'] = 'center';
var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'top';
var u1112 = document.getElementById('u1112');

var u1113 = document.getElementById('u1113');
gv_vAlignTable['u1113'] = 'center';
var u1114 = document.getElementById('u1114');
gv_vAlignTable['u1114'] = 'top';
var u1115 = document.getElementById('u1115');

var u1116 = document.getElementById('u1116');
gv_vAlignTable['u1116'] = 'center';
var u1117 = document.getElementById('u1117');

u1117.style.cursor = 'pointer';
if (bIE) u1117.attachEvent("onclick", Clicku1117);
else u1117.addEventListener("click", Clicku1117, true);
function Clicku1117(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1117')) {
SetWidgetNotSelected('u1117'); } else {
SetWidgetSelected('u1117');
}
SetWidgetNotSelected('u1119');
}

}

var u1118 = document.getElementById('u1118');
gv_vAlignTable['u1118'] = 'center';
var u1119 = document.getElementById('u1119');

u1119.style.cursor = 'pointer';
if (bIE) u1119.attachEvent("onclick", Clicku1119);
else u1119.addEventListener("click", Clicku1119, true);
function Clicku1119(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1117');
if (IsWidgetSelected('u1119')) {
SetWidgetNotSelected('u1119'); } else {
SetWidgetSelected('u1119');
}
}

}

var u370 = document.getElementById('u370');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');

var u375 = document.getElementById('u375');
gv_vAlignTable['u375'] = 'center';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'top';
var u377 = document.getElementById('u377');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u1122 = document.getElementById('u1122');
gv_vAlignTable['u1122'] = 'center';
var u1123 = document.getElementById('u1123');

var u1124 = document.getElementById('u1124');
gv_vAlignTable['u1124'] = 'center';
var u1125 = document.getElementById('u1125');

var u1126 = document.getElementById('u1126');
gv_vAlignTable['u1126'] = 'center';
var u1127 = document.getElementById('u1127');

u1127.style.cursor = 'pointer';
if (bIE) u1127.attachEvent("onclick", Clicku1127);
else u1127.addEventListener("click", Clicku1127, true);
function Clicku1127(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1127')) {
SetWidgetNotSelected('u1127'); } else {
SetWidgetSelected('u1127');
}
SetWidgetNotSelected('u1129');
}

}

var u1128 = document.getElementById('u1128');
gv_vAlignTable['u1128'] = 'center';
var u1129 = document.getElementById('u1129');

u1129.style.cursor = 'pointer';
if (bIE) u1129.attachEvent("onclick", Clicku1129);
else u1129.addEventListener("click", Clicku1129, true);
function Clicku1129(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1127');
if (IsWidgetSelected('u1129')) {
SetWidgetNotSelected('u1129'); } else {
SetWidgetSelected('u1129');
}
}

}

var u380 = document.getElementById('u380');

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u384 = document.getElementById('u384');

var u385 = document.getElementById('u385');
gv_vAlignTable['u385'] = 'center';
var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'top';
var u387 = document.getElementById('u387');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u1132 = document.getElementById('u1132');
gv_vAlignTable['u1132'] = 'center';
var u1133 = document.getElementById('u1133');

u1133.style.cursor = 'pointer';
if (bIE) u1133.attachEvent("onclick", Clicku1133);
else u1133.addEventListener("click", Clicku1133, true);
function Clicku1133(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1131');
if (IsWidgetSelected('u1133')) {
SetWidgetNotSelected('u1133'); } else {
SetWidgetSelected('u1133');
}
}

}

var u1134 = document.getElementById('u1134');
gv_vAlignTable['u1134'] = 'center';
var u1135 = document.getElementById('u1135');

u1135.style.cursor = 'pointer';
if (bIE) u1135.attachEvent("onclick", Clicku1135);
else u1135.addEventListener("click", Clicku1135, true);
function Clicku1135(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1135')) {
SetWidgetNotSelected('u1135'); } else {
SetWidgetSelected('u1135');
}
SetWidgetNotSelected('u1137');
}

}

var u1136 = document.getElementById('u1136');
gv_vAlignTable['u1136'] = 'center';
var u1137 = document.getElementById('u1137');

u1137.style.cursor = 'pointer';
if (bIE) u1137.attachEvent("onclick", Clicku1137);
else u1137.addEventListener("click", Clicku1137, true);
function Clicku1137(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1135');
if (IsWidgetSelected('u1137')) {
SetWidgetNotSelected('u1137'); } else {
SetWidgetSelected('u1137');
}
}

}

var u1138 = document.getElementById('u1138');
gv_vAlignTable['u1138'] = 'center';
var u1139 = document.getElementById('u1139');

u1139.style.cursor = 'pointer';
if (bIE) u1139.attachEvent("onclick", Clicku1139);
else u1139.addEventListener("click", Clicku1139, true);
function Clicku1139(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd0u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 310,260,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u390 = document.getElementById('u390');

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'top';
var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'top';
var u394 = document.getElementById('u394');

var u395 = document.getElementById('u395');
gv_vAlignTable['u395'] = 'center';
var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'top';
var u397 = document.getElementById('u397');

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u1142 = document.getElementById('u1142');
gv_vAlignTable['u1142'] = 'center';
var u1143 = document.getElementById('u1143');

u1143.style.cursor = 'pointer';
if (bIE) u1143.attachEvent("onclick", Clicku1143);
else u1143.addEventListener("click", Clicku1143, true);
function Clicku1143(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd1u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 310,190,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1144 = document.getElementById('u1144');
gv_vAlignTable['u1144'] = 'center';
var u1145 = document.getElementById('u1145');

var u1146 = document.getElementById('u1146');
gv_vAlignTable['u1146'] = 'center';
var u1147 = document.getElementById('u1147');
gv_vAlignTable['u1147'] = 'top';
var u1148 = document.getElementById('u1148');

var u1149 = document.getElementById('u1149');
gv_vAlignTable['u1149'] = 'center';
var u2700 = document.getElementById('u2700');
gv_vAlignTable['u2700'] = 'center';
var u2701 = document.getElementById('u2701');
gv_vAlignTable['u2701'] = 'top';
var u2702 = document.getElementById('u2702');

var u2703 = document.getElementById('u2703');
gv_vAlignTable['u2703'] = 'center';
var u2704 = document.getElementById('u2704');
gv_vAlignTable['u2704'] = 'top';
var u580 = document.getElementById('u580');

var u581 = document.getElementById('u581');
gv_vAlignTable['u581'] = 'center';
var u1150 = document.getElementById('u1150');

u1150.style.cursor = 'pointer';
if (bIE) u1150.attachEvent("onclick", Clicku1150);
else u1150.addEventListener("click", Clicku1150, true);
function Clicku1150(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd5u639','none','',500,'swing','up',150);

	SetPanelState('u644', 'pd0u644','none','',500,'none','',500);

}

}

var u1151 = document.getElementById('u1151');
gv_vAlignTable['u1151'] = 'center';
var u1152 = document.getElementById('u1152');

var u1153 = document.getElementById('u1153');
gv_vAlignTable['u1153'] = 'center';
var u1154 = document.getElementById('u1154');

u1154.style.cursor = 'pointer';
if (bIE) u1154.attachEvent("onclick", Clicku1154);
else u1154.addEventListener("click", Clicku1154, true);
function Clicku1154(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1154')) {
SetWidgetNotSelected('u1154'); } else {
SetWidgetSelected('u1154');
}
SetWidgetNotSelected('u1156');
SetWidgetNotSelected('u1158');
SetWidgetNotSelected('u1160');
SetWidgetNotSelected('u1162');
}

}

var u1155 = document.getElementById('u1155');
gv_vAlignTable['u1155'] = 'center';
var u1156 = document.getElementById('u1156');

u1156.style.cursor = 'pointer';
if (bIE) u1156.attachEvent("onclick", Clicku1156);
else u1156.addEventListener("click", Clicku1156, true);
function Clicku1156(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1154');
if (IsWidgetSelected('u1156')) {
SetWidgetNotSelected('u1156'); } else {
SetWidgetSelected('u1156');
}
SetWidgetNotSelected('u1158');
SetWidgetNotSelected('u1160');
SetWidgetNotSelected('u1162');
}

}

var u1157 = document.getElementById('u1157');
gv_vAlignTable['u1157'] = 'center';
var u1158 = document.getElementById('u1158');

u1158.style.cursor = 'pointer';
if (bIE) u1158.attachEvent("onclick", Clicku1158);
else u1158.addEventListener("click", Clicku1158, true);
function Clicku1158(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1154');
SetWidgetNotSelected('u1156');
if (IsWidgetSelected('u1158')) {
SetWidgetNotSelected('u1158'); } else {
SetWidgetSelected('u1158');
}
SetWidgetNotSelected('u1160');
SetWidgetNotSelected('u1162');
}

}

var u1159 = document.getElementById('u1159');
gv_vAlignTable['u1159'] = 'center';
var u2710 = document.getElementById('u2710');

var u2711 = document.getElementById('u2711');
gv_vAlignTable['u2711'] = 'center';
var u2712 = document.getElementById('u2712');

u2712.style.cursor = 'pointer';
if (bIE) u2712.attachEvent("onclick", Clicku2712);
else u2712.addEventListener("click", Clicku2712, true);
function Clicku2712(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2709','hidden','none',500);

}

}

var u2713 = document.getElementById('u2713');
gv_vAlignTable['u2713'] = 'center';
var u2714 = document.getElementById('u2714');
gv_vAlignTable['u2714'] = 'top';
var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u593 = document.getElementById('u593');

var u1160 = document.getElementById('u1160');

u1160.style.cursor = 'pointer';
if (bIE) u1160.attachEvent("onclick", Clicku1160);
else u1160.addEventListener("click", Clicku1160, true);
function Clicku1160(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1154');
SetWidgetNotSelected('u1156');
SetWidgetNotSelected('u1158');
if (IsWidgetSelected('u1160')) {
SetWidgetNotSelected('u1160'); } else {
SetWidgetSelected('u1160');
}
SetWidgetNotSelected('u1162');
}

}

var u1161 = document.getElementById('u1161');
gv_vAlignTable['u1161'] = 'center';
var u1162 = document.getElementById('u1162');

u1162.style.cursor = 'pointer';
if (bIE) u1162.attachEvent("onclick", Clicku1162);
else u1162.addEventListener("click", Clicku1162, true);
function Clicku1162(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1154');
SetWidgetNotSelected('u1156');
SetWidgetNotSelected('u1158');
SetWidgetNotSelected('u1160');
if (IsWidgetSelected('u1162')) {
SetWidgetNotSelected('u1162'); } else {
SetWidgetSelected('u1162');
}
}

}

var u1163 = document.getElementById('u1163');
gv_vAlignTable['u1163'] = 'center';
var u1164 = document.getElementById('u1164');

var u1165 = document.getElementById('u1165');
gv_vAlignTable['u1165'] = 'center';
var u1166 = document.getElementById('u1166');

var u1167 = document.getElementById('u1167');
gv_vAlignTable['u1167'] = 'center';
var u1168 = document.getElementById('u1168');
gv_vAlignTable['u1168'] = 'top';
var u1169 = document.getElementById('u1169');

u1169.style.cursor = 'pointer';
if (bIE) u1169.attachEvent("onclick", Clicku1169);
else u1169.addEventListener("click", Clicku1169, true);
function Clicku1169(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1169')) {
SetWidgetNotSelected('u1169'); } else {
SetWidgetSelected('u1169');
}
}

}

var u2720 = document.getElementById('u2720');

var u2721 = document.getElementById('u2721');
gv_vAlignTable['u2721'] = 'center';
var u2722 = document.getElementById('u2722');
gv_vAlignTable['u2722'] = 'top';
var u2723 = document.getElementById('u2723');

u2723.style.cursor = 'pointer';
if (bIE) u2723.attachEvent("onclick", Clicku2723);
else u2723.addEventListener("click", Clicku2723, true);
function Clicku2723(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd1u2381','fade','',200,'none','',500);

}

}

var u2724 = document.getElementById('u2724');
gv_vAlignTable['u2724'] = 'center';
var u1170 = document.getElementById('u1170');
gv_vAlignTable['u1170'] = 'center';
var u1171 = document.getElementById('u1171');

var u1172 = document.getElementById('u1172');
gv_vAlignTable['u1172'] = 'center';
var u1173 = document.getElementById('u1173');

var u1174 = document.getElementById('u1174');
gv_vAlignTable['u1174'] = 'center';
var u1175 = document.getElementById('u1175');
gv_vAlignTable['u1175'] = 'top';
var u1176 = document.getElementById('u1176');

var u1177 = document.getElementById('u1177');
gv_vAlignTable['u1177'] = 'center';
var u1178 = document.getElementById('u1178');
gv_vAlignTable['u1178'] = 'top';
var u1179 = document.getElementById('u1179');

u1179.style.cursor = 'pointer';
if (bIE) u1179.attachEvent("onclick", Clicku1179);
else u1179.addEventListener("click", Clicku1179, true);
function Clicku1179(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1179')) {
SetWidgetNotSelected('u1179'); } else {
SetWidgetSelected('u1179');
}
}

}

var u2730 = document.getElementById('u2730');
gv_vAlignTable['u2730'] = 'center';
var u759 = document.getElementById('u759');
gv_vAlignTable['u759'] = 'center';
var u1180 = document.getElementById('u1180');
gv_vAlignTable['u1180'] = 'center';
var u1181 = document.getElementById('u1181');

var u1182 = document.getElementById('u1182');
gv_vAlignTable['u1182'] = 'center';
var u1183 = document.getElementById('u1183');

var u1184 = document.getElementById('u1184');
gv_vAlignTable['u1184'] = 'center';
var u1185 = document.getElementById('u1185');
gv_vAlignTable['u1185'] = 'top';
var u1186 = document.getElementById('u1186');

var u1187 = document.getElementById('u1187');
gv_vAlignTable['u1187'] = 'center';
var u1188 = document.getElementById('u1188');

var u1189 = document.getElementById('u1189');
gv_vAlignTable['u1189'] = 'center';
var u768 = document.getElementById('u768');
gv_vAlignTable['u768'] = 'center';
var u1191 = document.getElementById('u1191');

var u1192 = document.getElementById('u1192');
gv_vAlignTable['u1192'] = 'center';
var u1193 = document.getElementById('u1193');
gv_vAlignTable['u1193'] = 'top';
var u1194 = document.getElementById('u1194');

var u1195 = document.getElementById('u1195');
gv_vAlignTable['u1195'] = 'center';
var u1196 = document.getElementById('u1196');

u1196.style.cursor = 'pointer';
if (bIE) u1196.attachEvent("onclick", Clicku1196);
else u1196.addEventListener("click", Clicku1196, true);
function Clicku1196(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1198');
if (IsWidgetSelected('u1196')) {
SetWidgetNotSelected('u1196'); } else {
SetWidgetSelected('u1196');
}
}

}

var u1197 = document.getElementById('u1197');
gv_vAlignTable['u1197'] = 'center';
var u1198 = document.getElementById('u1198');

u1198.style.cursor = 'pointer';
if (bIE) u1198.attachEvent("onclick", Clicku1198);
else u1198.addEventListener("click", Clicku1198, true);
function Clicku1198(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1198')) {
SetWidgetNotSelected('u1198'); } else {
SetWidgetSelected('u1198');
}
SetWidgetNotSelected('u1196');
}

}

var u1199 = document.getElementById('u1199');
gv_vAlignTable['u1199'] = 'center';
var u778 = document.getElementById('u778');
gv_vAlignTable['u778'] = 'center';
var u2382 = document.getElementById('u2382');

var u2383 = document.getElementById('u2383');

var u2384 = document.getElementById('u2384');
gv_vAlignTable['u2384'] = 'center';
var u786 = document.getElementById('u786');
gv_vAlignTable['u786'] = 'center';
var u787 = document.getElementById('u787');

var u788 = document.getElementById('u788');
gv_vAlignTable['u788'] = 'center';
var u789 = document.getElementById('u789');

var u797 = document.getElementById('u797');

var u798 = document.getElementById('u798');
gv_vAlignTable['u798'] = 'center';
var u799 = document.getElementById('u799');

var u2399 = document.getElementById('u2399');

var u2100 = document.getElementById('u2100');

var u2101 = document.getElementById('u2101');
gv_vAlignTable['u2101'] = 'center';
var u2102 = document.getElementById('u2102');
gv_vAlignTable['u2102'] = 'top';
var u2103 = document.getElementById('u2103');
gv_vAlignTable['u2103'] = 'top';
var u2110 = document.getElementById('u2110');
gv_vAlignTable['u2110'] = 'center';
var u2111 = document.getElementById('u2111');

var u2112 = document.getElementById('u2112');
gv_vAlignTable['u2112'] = 'center';
var u2113 = document.getElementById('u2113');
gv_vAlignTable['u2113'] = 'top';
var u2300 = document.getElementById('u2300');

var u2301 = document.getElementById('u2301');
gv_vAlignTable['u2301'] = 'center';
var u1800 = document.getElementById('u1800');
gv_vAlignTable['u1800'] = 'top';
var u1801 = document.getElementById('u1801');
gv_vAlignTable['u1801'] = 'top';
var u2304 = document.getElementById('u2304');
gv_vAlignTable['u2304'] = 'center';
var u2305 = document.getElementById('u2305');
gv_vAlignTable['u2305'] = 'top';
var u2306 = document.getElementById('u2306');

var u1805 = document.getElementById('u1805');
gv_vAlignTable['u1805'] = 'center';
var u1806 = document.getElementById('u1806');

var u2309 = document.getElementById('u2309');

var u1808 = document.getElementById('u1808');

var u1809 = document.getElementById('u1809');
gv_vAlignTable['u1809'] = 'center';
var u2120 = document.getElementById('u2120');

var u2121 = document.getElementById('u2121');
gv_vAlignTable['u2121'] = 'center';
var u2122 = document.getElementById('u2122');
gv_vAlignTable['u2122'] = 'top';
var u2310 = document.getElementById('u2310');
gv_vAlignTable['u2310'] = 'center';
var u2311 = document.getElementById('u2311');
gv_vAlignTable['u2311'] = 'top';
var u1810 = document.getElementById('u1810');

var u1811 = document.getElementById('u1811');
gv_vAlignTable['u1811'] = 'center';
var u2314 = document.getElementById('u2314');
gv_vAlignTable['u2314'] = 'top';
var u1813 = document.getElementById('u1813');
gv_vAlignTable['u1813'] = 'center';
var u2316 = document.getElementById('u2316');
gv_vAlignTable['u2316'] = 'top';
var u1815 = document.getElementById('u1815');

var u1816 = document.getElementById('u1816');
gv_vAlignTable['u1816'] = 'center';
var u2319 = document.getElementById('u2319');
gv_vAlignTable['u2319'] = 'center';
var u1818 = document.getElementById('u1818');
gv_vAlignTable['u1818'] = 'center';
var u1819 = document.getElementById('u1819');

var u2130 = document.getElementById('u2130');
gv_vAlignTable['u2130'] = 'center';
var u2131 = document.getElementById('u2131');

var u2132 = document.getElementById('u2132');
gv_vAlignTable['u2132'] = 'center';
var u2320 = document.getElementById('u2320');

u2320.style.cursor = 'pointer';
if (bIE) u2320.attachEvent("onclick", Clicku2320);
else u2320.addEventListener("click", Clicku2320, true);
function Clicku2320(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,60,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2321 = document.getElementById('u2321');
gv_vAlignTable['u2321'] = 'center';
var u1820 = document.getElementById('u1820');
gv_vAlignTable['u1820'] = 'center';
var u1821 = document.getElementById('u1821');

u1821.style.cursor = 'pointer';
if (bIE) u1821.attachEvent("onclick", Clicku1821);
else u1821.addEventListener("click", Clicku1821, true);
function Clicku1821(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 230,60,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u2324 = document.getElementById('u2324');

u2324.style.cursor = 'pointer';
if (bIE) u2324.attachEvent("onclick", Clicku2324);
else u2324.addEventListener("click", Clicku2324, true);
function Clicku2324(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,180,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u1823 = document.getElementById('u1823');

u1823.style.cursor = 'pointer';
if (bIE) u1823.attachEvent("onclick", Clicku1823);
else u1823.addEventListener("click", Clicku1823, true);
function Clicku1823(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 455,60,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u1824 = document.getElementById('u1824');
gv_vAlignTable['u1824'] = 'center';
var u1825 = document.getElementById('u1825');

u1825.style.cursor = 'pointer';
if (bIE) u1825.attachEvent("onclick", Clicku1825);
else u1825.addEventListener("click", Clicku1825, true);
function Clicku1825(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 5,295,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u1826 = document.getElementById('u1826');
gv_vAlignTable['u1826'] = 'center';
var u2329 = document.getElementById('u2329');
gv_vAlignTable['u2329'] = 'center';
var u1828 = document.getElementById('u1828');
gv_vAlignTable['u1828'] = 'center';
var u1829 = document.getElementById('u1829');

u1829.style.cursor = 'pointer';
if (bIE) u1829.attachEvent("onclick", Clicku1829);
else u1829.addEventListener("click", Clicku1829, true);
function Clicku1829(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 455,295,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u2140 = document.getElementById('u2140');
gv_vAlignTable['u2140'] = 'center';
var u2141 = document.getElementById('u2141');

var u2142 = document.getElementById('u2142');
gv_vAlignTable['u2142'] = 'center';
var u2143 = document.getElementById('u2143');

var u1830 = document.getElementById('u1830');
gv_vAlignTable['u1830'] = 'center';
var u1831 = document.getElementById('u1831');

u1831.style.cursor = 'pointer';
if (bIE) u1831.attachEvent("onclick", Clicku1831);
else u1831.addEventListener("click", Clicku1831, true);
function Clicku1831(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 5,530,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u2334 = document.getElementById('u2334');
gv_vAlignTable['u2334'] = 'center';
var u1833 = document.getElementById('u1833');

u1833.style.cursor = 'pointer';
if (bIE) u1833.attachEvent("onclick", Clicku1833);
else u1833.addEventListener("click", Clicku1833, true);
function Clicku1833(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 230,530,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u1834 = document.getElementById('u1834');
gv_vAlignTable['u1834'] = 'center';
var u1835 = document.getElementById('u1835');

u1835.style.cursor = 'pointer';
if (bIE) u1835.attachEvent("onclick", Clicku1835);
else u1835.addEventListener("click", Clicku1835, true);
function Clicku1835(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 455,530,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u1836 = document.getElementById('u1836');
gv_vAlignTable['u1836'] = 'center';
var u1837 = document.getElementById('u1837');

u1837.style.cursor = 'pointer';
if (bIE) u1837.attachEvent("onclick", Clicku1837);
else u1837.addEventListener("click", Clicku1837, true);
function Clicku1837(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 5,60,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u1838 = document.getElementById('u1838');
gv_vAlignTable['u1838'] = 'center';
var u1839 = document.getElementById('u1839');

var u2340 = document.getElementById('u2340');
gv_vAlignTable['u2340'] = 'center';
var u2341 = document.getElementById('u2341');

var u1840 = document.getElementById('u1840');

var u1841 = document.getElementById('u1841');
gv_vAlignTable['u1841'] = 'center';
var u1842 = document.getElementById('u1842');
gv_vAlignTable['u1842'] = 'top';
var u1843 = document.getElementById('u1843');

u1843.style.cursor = 'pointer';
if (bIE) u1843.attachEvent("onclick", Clicku1843);
else u1843.addEventListener("click", Clicku1843, true);
function Clicku1843(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1839', 'pd0u1839','swing','down',150,'none','',500);

}

}

var u1844 = document.getElementById('u1844');
gv_vAlignTable['u1844'] = 'center';
var u1845 = document.getElementById('u1845');

var u1846 = document.getElementById('u1846');
gv_vAlignTable['u1846'] = 'center';
var u1847 = document.getElementById('u1847');
gv_vAlignTable['u1847'] = 'top';
var u1848 = document.getElementById('u1848');

u1848.style.cursor = 'pointer';
if (bIE) u1848.attachEvent("onclick", Clicku1848);
else u1848.addEventListener("click", Clicku1848, true);
function Clicku1848(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','fade',100);

}

}

var u1849 = document.getElementById('u1849');
gv_vAlignTable['u1849'] = 'center';
var u2350 = document.getElementById('u2350');
gv_vAlignTable['u2350'] = 'center';
var u2351 = document.getElementById('u2351');

var u1850 = document.getElementById('u1850');

u1850.style.cursor = 'pointer';
if (bIE) u1850.attachEvent("onclick", Clicku1850);
else u1850.addEventListener("click", Clicku1850, true);
function Clicku1850(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1839', 'pd0u1839','swing','down',150,'none','',500);

}

}

var u1851 = document.getElementById('u1851');
gv_vAlignTable['u1851'] = 'center';
var u1852 = document.getElementById('u1852');

var u1853 = document.getElementById('u1853');
gv_vAlignTable['u1853'] = 'center';
var u1854 = document.getElementById('u1854');

u1854.style.cursor = 'pointer';
if (bIE) u1854.attachEvent("onclick", Clicku1854);
else u1854.addEventListener("click", Clicku1854, true);
function Clicku1854(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',150);

SetGlobalVariableValue('$pubfrom', 'fail');

}

}

var u1855 = document.getElementById('u1855');
gv_vAlignTable['u1855'] = 'center';
var u1856 = document.getElementById('u1856');

u1856.style.cursor = 'pointer';
if (bIE) u1856.attachEvent("onclick", Clicku1856);
else u1856.addEventListener("click", Clicku1856, true);
function Clicku1856(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','fade',100);

}

}

var u1857 = document.getElementById('u1857');
gv_vAlignTable['u1857'] = 'center';
var u1858 = document.getElementById('u1858');

u1858.style.cursor = 'pointer';
if (bIE) u1858.attachEvent("onclick", Clicku1858);
else u1858.addEventListener("click", Clicku1858, true);
function Clicku1858(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1839', 'pd1u1839','none','',500,'swing','up',150);

}

}

var u1859 = document.getElementById('u1859');
gv_vAlignTable['u1859'] = 'center';
var u1700 = document.getElementById('u1700');
gv_vAlignTable['u1700'] = 'center';
var u1701 = document.getElementById('u1701');

u1701.style.cursor = 'pointer';
if (bIE) u1701.attachEvent("onclick", Clicku1701);
else u1701.addEventListener("click", Clicku1701, true);
function Clicku1701(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 5,60,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1702 = document.getElementById('u1702');
gv_vAlignTable['u1702'] = 'center';
var u1703 = document.getElementById('u1703');

var u1704 = document.getElementById('u1704');

var u1705 = document.getElementById('u1705');
gv_vAlignTable['u1705'] = 'center';
var u2360 = document.getElementById('u2360');
gv_vAlignTable['u2360'] = 'center';
var u2170 = document.getElementById('u2170');
gv_vAlignTable['u2170'] = 'center';
var u1860 = document.getElementById('u1860');

u1860.style.cursor = 'pointer';
if (bIE) u1860.attachEvent("onclick", Clicku1860);
else u1860.addEventListener("click", Clicku1860, true);
function Clicku1860(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1839', 'pd2u1839','none','',500,'swing','up',150);

}

}

var u1861 = document.getElementById('u1861');
gv_vAlignTable['u1861'] = 'center';
var u1862 = document.getElementById('u1862');

var u1863 = document.getElementById('u1863');
gv_vAlignTable['u1863'] = 'center';
var u1864 = document.getElementById('u1864');

var u1865 = document.getElementById('u1865');
gv_vAlignTable['u1865'] = 'center';
var u1866 = document.getElementById('u1866');
gv_vAlignTable['u1866'] = 'top';
var u1867 = document.getElementById('u1867');
gv_vAlignTable['u1867'] = 'top';
var u1868 = document.getElementById('u1868');
gv_vAlignTable['u1868'] = 'top';
var u1869 = document.getElementById('u1869');
gv_vAlignTable['u1869'] = 'top';
var u1710 = document.getElementById('u1710');
gv_vAlignTable['u1710'] = 'center';
var u1711 = document.getElementById('u1711');

var u1712 = document.getElementById('u1712');
gv_vAlignTable['u1712'] = 'center';
var u1713 = document.getElementById('u1713');
gv_vAlignTable['u1713'] = 'top';
var u1714 = document.getElementById('u1714');

u1714.style.cursor = 'pointer';
if (bIE) u1714.attachEvent("onclick", Clicku1714);
else u1714.addEventListener("click", Clicku1714, true);
function Clicku1714(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','fade',100);

}

}

var u1715 = document.getElementById('u1715');
gv_vAlignTable['u1715'] = 'center';
var u1716 = document.getElementById('u1716');

u1716.style.cursor = 'pointer';
if (bIE) u1716.attachEvent("onclick", Clicku1716);
else u1716.addEventListener("click", Clicku1716, true);
function Clicku1716(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd0u1703','swing','down',150,'none','',500);

}

}

var u1717 = document.getElementById('u1717');
gv_vAlignTable['u1717'] = 'center';
var u2370 = document.getElementById('u2370');
gv_vAlignTable['u2370'] = 'center';
var u2371 = document.getElementById('u2371');

u2371.style.cursor = 'pointer';
if (bIE) u2371.attachEvent("onclick", Clicku2371);
else u2371.addEventListener("click", Clicku2371, true);
function Clicku2371(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd4u1432','none','',500,'swing','left',200);

}

}

var u1870 = document.getElementById('u1870');
gv_vAlignTable['u1870'] = 'top';
var u1871 = document.getElementById('u1871');

var u1872 = document.getElementById('u1872');
gv_vAlignTable['u1872'] = 'center';
var u1873 = document.getElementById('u1873');
gv_vAlignTable['u1873'] = 'top';
var u1874 = document.getElementById('u1874');
gv_vAlignTable['u1874'] = 'top';
var u1875 = document.getElementById('u1875');
gv_vAlignTable['u1875'] = 'top';
var u1876 = document.getElementById('u1876');
gv_vAlignTable['u1876'] = 'top';
var u1877 = document.getElementById('u1877');
gv_vAlignTable['u1877'] = 'top';
var u1878 = document.getElementById('u1878');

var u1879 = document.getElementById('u1879');
gv_vAlignTable['u1879'] = 'center';
var u1720 = document.getElementById('u1720');
gv_vAlignTable['u1720'] = 'top';
var u1721 = document.getElementById('u1721');

u1721.style.cursor = 'pointer';
if (bIE) u1721.attachEvent("onclick", Clicku1721);
else u1721.addEventListener("click", Clicku1721, true);
function Clicku1721(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','fade',100);

}

}

var u1722 = document.getElementById('u1722');
gv_vAlignTable['u1722'] = 'center';
var u1723 = document.getElementById('u1723');

u1723.style.cursor = 'pointer';
if (bIE) u1723.attachEvent("onclick", Clicku1723);
else u1723.addEventListener("click", Clicku1723, true);
function Clicku1723(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd0u1703','swing','down',150,'none','',500);

}

}

var u1724 = document.getElementById('u1724');
gv_vAlignTable['u1724'] = 'center';
var u1725 = document.getElementById('u1725');

var u1726 = document.getElementById('u1726');
gv_vAlignTable['u1726'] = 'center';
var u1727 = document.getElementById('u1727');

u1727.style.cursor = 'pointer';
if (bIE) u1727.attachEvent("onclick", Clicku1727);
else u1727.addEventListener("click", Clicku1727, true);
function Clicku1727(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','fade',100);

}

}

var u2380 = document.getElementById('u2380');
gv_vAlignTable['u2380'] = 'center';
var u2381 = document.getElementById('u2381');

var u1880 = document.getElementById('u1880');
gv_vAlignTable['u1880'] = 'top';
var u1881 = document.getElementById('u1881');
gv_vAlignTable['u1881'] = 'top';
var u1882 = document.getElementById('u1882');
gv_vAlignTable['u1882'] = 'top';
var u1883 = document.getElementById('u1883');
gv_vAlignTable['u1883'] = 'top';
var u1884 = document.getElementById('u1884');
gv_vAlignTable['u1884'] = 'top';
var u1885 = document.getElementById('u1885');

var u1886 = document.getElementById('u1886');
gv_vAlignTable['u1886'] = 'center';
var u1887 = document.getElementById('u1887');
gv_vAlignTable['u1887'] = 'top';
var u1888 = document.getElementById('u1888');
gv_vAlignTable['u1888'] = 'top';
var u1889 = document.getElementById('u1889');
gv_vAlignTable['u1889'] = 'top';
var u2199 = document.getElementById('u2199');

u2199.style.cursor = 'pointer';
if (bIE) u2199.attachEvent("onclick", Clicku2199);
else u2199.addEventListener("click", Clicku2199, true);
function Clicku2199(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd4u2084','none','',500,'swing','up',150);

}

}

var u1730 = document.getElementById('u1730');
gv_vAlignTable['u1730'] = 'center';
var u1731 = document.getElementById('u1731');

u1731.style.cursor = 'pointer';
if (bIE) u1731.attachEvent("onclick", Clicku1731);
else u1731.addEventListener("click", Clicku1731, true);
function Clicku1731(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd1u1703','none','',500,'swing','up',150);

}

}

var u1732 = document.getElementById('u1732');
gv_vAlignTable['u1732'] = 'center';
var u1733 = document.getElementById('u1733');

u1733.style.cursor = 'pointer';
if (bIE) u1733.attachEvent("onclick", Clicku1733);
else u1733.addEventListener("click", Clicku1733, true);
function Clicku1733(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd3u1703','none','',500,'swing','up',150);

}

}

var u1734 = document.getElementById('u1734');
gv_vAlignTable['u1734'] = 'center';
var u1735 = document.getElementById('u1735');

u1735.style.cursor = 'pointer';
if (bIE) u1735.attachEvent("onclick", Clicku1735);
else u1735.addEventListener("click", Clicku1735, true);
function Clicku1735(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1736 = document.getElementById('u1736');
gv_vAlignTable['u1736'] = 'center';
var u1737 = document.getElementById('u1737');

var u2390 = document.getElementById('u2390');

var u2391 = document.getElementById('u2391');
gv_vAlignTable['u2391'] = 'center';
var u1890 = document.getElementById('u1890');
gv_vAlignTable['u1890'] = 'top';
var u1891 = document.getElementById('u1891');
gv_vAlignTable['u1891'] = 'top';
var u1892 = document.getElementById('u1892');

var u1893 = document.getElementById('u1893');
gv_vAlignTable['u1893'] = 'center';
var u1894 = document.getElementById('u1894');
gv_vAlignTable['u1894'] = 'top';
var u1895 = document.getElementById('u1895');
gv_vAlignTable['u1895'] = 'top';
var u1896 = document.getElementById('u1896');
gv_vAlignTable['u1896'] = 'top';
var u1897 = document.getElementById('u1897');
gv_vAlignTable['u1897'] = 'top';
var u1898 = document.getElementById('u1898');
gv_vAlignTable['u1898'] = 'top';
var u1899 = document.getElementById('u1899');

var u1740 = document.getElementById('u1740');
gv_vAlignTable['u1740'] = 'center';
var u1741 = document.getElementById('u1741');
gv_vAlignTable['u1741'] = 'top';
var u1742 = document.getElementById('u1742');
gv_vAlignTable['u1742'] = 'top';
var u1743 = document.getElementById('u1743');
gv_vAlignTable['u1743'] = 'top';
var u1744 = document.getElementById('u1744');
gv_vAlignTable['u1744'] = 'top';
var u1745 = document.getElementById('u1745');
gv_vAlignTable['u1745'] = 'top';
var u1746 = document.getElementById('u1746');

var u1747 = document.getElementById('u1747');
gv_vAlignTable['u1747'] = 'center';
var u400 = document.getElementById('u400');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'center';
var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u404 = document.getElementById('u404');

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'center';
var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u407 = document.getElementById('u407');

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u1750 = document.getElementById('u1750');
gv_vAlignTable['u1750'] = 'top';
var u1751 = document.getElementById('u1751');
gv_vAlignTable['u1751'] = 'top';
var u1752 = document.getElementById('u1752');
gv_vAlignTable['u1752'] = 'top';
var u1753 = document.getElementById('u1753');

var u1754 = document.getElementById('u1754');
gv_vAlignTable['u1754'] = 'center';
var u1755 = document.getElementById('u1755');
gv_vAlignTable['u1755'] = 'top';
var u1756 = document.getElementById('u1756');
gv_vAlignTable['u1756'] = 'top';
var u1757 = document.getElementById('u1757');
gv_vAlignTable['u1757'] = 'top';
var u410 = document.getElementById('u410');

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');
gv_vAlignTable['u415'] = 'center';
var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'top';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'center';
var u419 = document.getElementById('u419');
gv_vAlignTable['u419'] = 'top';
var u1760 = document.getElementById('u1760');

var u1761 = document.getElementById('u1761');
gv_vAlignTable['u1761'] = 'center';
var u1762 = document.getElementById('u1762');
gv_vAlignTable['u1762'] = 'top';
var u1763 = document.getElementById('u1763');
gv_vAlignTable['u1763'] = 'top';
var u1764 = document.getElementById('u1764');
gv_vAlignTable['u1764'] = 'top';
var u1765 = document.getElementById('u1765');
gv_vAlignTable['u1765'] = 'top';
var u1766 = document.getElementById('u1766');
gv_vAlignTable['u1766'] = 'top';
var u1767 = document.getElementById('u1767');

var u1769 = document.getElementById('u1769');
gv_vAlignTable['u1769'] = 'top';
var u420 = document.getElementById('u420');

var u421 = document.getElementById('u421');
gv_vAlignTable['u421'] = 'center';
var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'top';
var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');

u424.style.cursor = 'pointer';
if (bIE) u424.attachEvent("onclick", Clicku424);
else u424.addEventListener("click", Clicku424, true);
function Clicku424(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

u426.style.cursor = 'pointer';
if (bIE) u426.attachEvent("onclick", Clicku426);
else u426.addEventListener("click", Clicku426, true);
function Clicku426(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
var u428 = document.getElementById('u428');

u428.style.cursor = 'pointer';
if (bIE) u428.attachEvent("onclick", Clicku428);
else u428.addEventListener("click", Clicku428, true);
function Clicku428(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'center';
var u1770 = document.getElementById('u1770');
gv_vAlignTable['u1770'] = 'top';
var u1771 = document.getElementById('u1771');
gv_vAlignTable['u1771'] = 'top';
var u1772 = document.getElementById('u1772');
gv_vAlignTable['u1772'] = 'top';
var u1773 = document.getElementById('u1773');
gv_vAlignTable['u1773'] = 'top';
var u1774 = document.getElementById('u1774');

var u1775 = document.getElementById('u1775');
gv_vAlignTable['u1775'] = 'center';
var u1776 = document.getElementById('u1776');
gv_vAlignTable['u1776'] = 'top';
var u1777 = document.getElementById('u1777');
gv_vAlignTable['u1777'] = 'top';
var u1000 = document.getElementById('u1000');

var u1001 = document.getElementById('u1001');
gv_vAlignTable['u1001'] = 'center';
var u430 = document.getElementById('u430');

u430.style.cursor = 'pointer';
if (bIE) u430.attachEvent("onclick", Clicku430);
else u430.addEventListener("click", Clicku430, true);
function Clicku430(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u431 = document.getElementById('u431');
gv_vAlignTable['u431'] = 'center';
var u432 = document.getElementById('u432');

u432.style.cursor = 'pointer';
if (bIE) u432.attachEvent("onclick", Clicku432);
else u432.addEventListener("click", Clicku432, true);
function Clicku432(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'center';
var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');

u436.style.cursor = 'pointer';
if (bIE) u436.attachEvent("onclick", Clicku436);
else u436.addEventListener("click", Clicku436, true);
function Clicku436(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');

u438.style.cursor = 'pointer';
if (bIE) u438.attachEvent("onclick", Clicku438);
else u438.addEventListener("click", Clicku438, true);
function Clicku438(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u439 = document.getElementById('u439');
gv_vAlignTable['u439'] = 'center';
var u1781 = document.getElementById('u1781');

var u1782 = document.getElementById('u1782');
gv_vAlignTable['u1782'] = 'center';
var u1783 = document.getElementById('u1783');
gv_vAlignTable['u1783'] = 'top';
var u1784 = document.getElementById('u1784');
gv_vAlignTable['u1784'] = 'top';
var u1785 = document.getElementById('u1785');
gv_vAlignTable['u1785'] = 'top';
var u1786 = document.getElementById('u1786');
gv_vAlignTable['u1786'] = 'top';
var u1787 = document.getElementById('u1787');
gv_vAlignTable['u1787'] = 'top';
var u1010 = document.getElementById('u1010');
gv_vAlignTable['u1010'] = 'top';
var u1011 = document.getElementById('u1011');
gv_vAlignTable['u1011'] = 'top';
var u440 = document.getElementById('u440');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'center';
var u442 = document.getElementById('u442');

u442.style.cursor = 'pointer';
if (bIE) u442.attachEvent("onclick", Clicku442);
else u442.addEventListener("click", Clicku442, true);
function Clicku442(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','fade','',150,'fade','',150);

}

}

var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'center';
var u444 = document.getElementById('u444');

u444.style.cursor = 'pointer';
if (bIE) u444.attachEvent("onclick", Clicku444);
else u444.addEventListener("click", Clicku444, true);
function Clicku444(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd1u7','fade','',150,'fade','',150);

}

}

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u446 = document.getElementById('u446');

u446.style.cursor = 'pointer';
if (bIE) u446.attachEvent("onclick", Clicku446);
else u446.addEventListener("click", Clicku446, true);
function Clicku446(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd2u7','fade','',150,'fade','',150);

}

}

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

u448.style.cursor = 'pointer';
if (bIE) u448.attachEvent("onclick", Clicku448);
else u448.addEventListener("click", Clicku448, true);
function Clicku448(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','fade','',150,'fade','',150);

}

}

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u1790 = document.getElementById('u1790');
gv_vAlignTable['u1790'] = 'top';
var u1791 = document.getElementById('u1791');
gv_vAlignTable['u1791'] = 'top';
var u1792 = document.getElementById('u1792');
gv_vAlignTable['u1792'] = 'top';
var u1793 = document.getElementById('u1793');
gv_vAlignTable['u1793'] = 'top';
var u1794 = document.getElementById('u1794');
gv_vAlignTable['u1794'] = 'top';
var u1795 = document.getElementById('u1795');

var u1796 = document.getElementById('u1796');
gv_vAlignTable['u1796'] = 'center';
var u1797 = document.getElementById('u1797');
gv_vAlignTable['u1797'] = 'top';
var u1020 = document.getElementById('u1020');
gv_vAlignTable['u1020'] = 'top';
var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'top';
var u455 = document.getElementById('u455');

var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u1200 = document.getElementById('u1200');

var u1201 = document.getElementById('u1201');
gv_vAlignTable['u1201'] = 'center';
var u1202 = document.getElementById('u1202');

var u1203 = document.getElementById('u1203');
gv_vAlignTable['u1203'] = 'center';
var u1204 = document.getElementById('u1204');
gv_vAlignTable['u1204'] = 'top';
var u1205 = document.getElementById('u1205');

u1205.style.cursor = 'pointer';
if (bIE) u1205.attachEvent("onclick", Clicku1205);
else u1205.addEventListener("click", Clicku1205, true);
function Clicku1205(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1205')) {
SetWidgetNotSelected('u1205'); } else {
SetWidgetSelected('u1205');
}
}

}

var u1206 = document.getElementById('u1206');
gv_vAlignTable['u1206'] = 'center';
var u1207 = document.getElementById('u1207');

var u1208 = document.getElementById('u1208');
gv_vAlignTable['u1208'] = 'center';
var u1209 = document.getElementById('u1209');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'top';
var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'top';
var u1030 = document.getElementById('u1030');

var u1031 = document.getElementById('u1031');
gv_vAlignTable['u1031'] = 'center';
var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'top';
var u1210 = document.getElementById('u1210');
gv_vAlignTable['u1210'] = 'center';
var u1211 = document.getElementById('u1211');
gv_vAlignTable['u1211'] = 'top';
var u1212 = document.getElementById('u1212');

u1212.style.cursor = 'pointer';
if (bIE) u1212.attachEvent("onclick", Clicku1212);
else u1212.addEventListener("click", Clicku1212, true);
function Clicku1212(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd0u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 160,380,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1213 = document.getElementById('u1213');
gv_vAlignTable['u1213'] = 'center';
var u1214 = document.getElementById('u1214');

u1214.style.cursor = 'pointer';
if (bIE) u1214.attachEvent("onclick", Clicku1214);
else u1214.addEventListener("click", Clicku1214, true);
function Clicku1214(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd4u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 160,450,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1215 = document.getElementById('u1215');
gv_vAlignTable['u1215'] = 'center';
var u1216 = document.getElementById('u1216');

u1216.style.cursor = 'pointer';
if (bIE) u1216.attachEvent("onclick", Clicku1216);
else u1216.addEventListener("click", Clicku1216, true);
function Clicku1216(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd3u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 160,310,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1217 = document.getElementById('u1217');
gv_vAlignTable['u1217'] = 'center';
var u1218 = document.getElementById('u1218');

u1218.style.cursor = 'pointer';
if (bIE) u1218.attachEvent("onclick", Clicku1218);
else u1218.addEventListener("click", Clicku1218, true);
function Clicku1218(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd3u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 160,310,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1219 = document.getElementById('u1219');
gv_vAlignTable['u1219'] = 'center';
var u470 = document.getElementById('u470');
gv_vAlignTable['u470'] = 'top';
var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'top';
var u472 = document.getElementById('u472');

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u1040 = document.getElementById('u1040');

var u1041 = document.getElementById('u1041');

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'top';
var u1220 = document.getElementById('u1220');

u1220.style.cursor = 'pointer';
if (bIE) u1220.attachEvent("onclick", Clicku1220);
else u1220.addEventListener("click", Clicku1220, true);
function Clicku1220(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd2u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 160,380,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1221 = document.getElementById('u1221');
gv_vAlignTable['u1221'] = 'center';
var u1222 = document.getElementById('u1222');

var u1223 = document.getElementById('u1223');
gv_vAlignTable['u1223'] = 'center';
var u1224 = document.getElementById('u1224');
gv_vAlignTable['u1224'] = 'top';
var u1225 = document.getElementById('u1225');

var u1226 = document.getElementById('u1226');
gv_vAlignTable['u1226'] = 'center';
var u1227 = document.getElementById('u1227');

var u1228 = document.getElementById('u1228');
gv_vAlignTable['u1228'] = 'center';
var u1229 = document.getElementById('u1229');

var u480 = document.getElementById('u480');
gv_vAlignTable['u480'] = 'top';
var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'top';
var u482 = document.getElementById('u482');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'top';
var u1230 = document.getElementById('u1230');
gv_vAlignTable['u1230'] = 'center';
var u1231 = document.getElementById('u1231');

var u1232 = document.getElementById('u1232');
gv_vAlignTable['u1232'] = 'center';
var u1233 = document.getElementById('u1233');

var u1234 = document.getElementById('u1234');
gv_vAlignTable['u1234'] = 'center';
var u1235 = document.getElementById('u1235');

var u1236 = document.getElementById('u1236');
gv_vAlignTable['u1236'] = 'center';
var u1237 = document.getElementById('u1237');

u1237.style.cursor = 'pointer';
if (bIE) u1237.attachEvent("onclick", Clicku1237);
else u1237.addEventListener("click", Clicku1237, true);
function Clicku1237(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1237')) {
SetWidgetNotSelected('u1237'); } else {
SetWidgetSelected('u1237');
}
SetWidgetNotSelected('u1239');
SetWidgetNotSelected('u1241');
}

}

var u1238 = document.getElementById('u1238');
gv_vAlignTable['u1238'] = 'center';
var u1239 = document.getElementById('u1239');

u1239.style.cursor = 'pointer';
if (bIE) u1239.attachEvent("onclick", Clicku1239);
else u1239.addEventListener("click", Clicku1239, true);
function Clicku1239(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1239')) {
SetWidgetNotSelected('u1239'); } else {
SetWidgetSelected('u1239');
}
SetWidgetNotSelected('u1241');
SetWidgetNotSelected('u1237');
}

}

var u490 = document.getElementById('u490');
gv_vAlignTable['u490'] = 'top';
var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'top';
var u492 = document.getElementById('u492');

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u494 = document.getElementById('u494');
gv_vAlignTable['u494'] = 'top';
var u495 = document.getElementById('u495');

var u496 = document.getElementById('u496');
gv_vAlignTable['u496'] = 'center';
var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'top';
var u1240 = document.getElementById('u1240');
gv_vAlignTable['u1240'] = 'center';
var u1241 = document.getElementById('u1241');

u1241.style.cursor = 'pointer';
if (bIE) u1241.attachEvent("onclick", Clicku1241);
else u1241.addEventListener("click", Clicku1241, true);
function Clicku1241(e)
{
windowEvent = e;


if (true) {

SetWidgetNotSelected('u1237');
SetWidgetNotSelected('u1239');
if (IsWidgetSelected('u1241')) {
SetWidgetNotSelected('u1241'); } else {
SetWidgetSelected('u1241');
}
}

}

var u1242 = document.getElementById('u1242');
gv_vAlignTable['u1242'] = 'center';
var u1243 = document.getElementById('u1243');
gv_vAlignTable['u1243'] = 'top';
var u1244 = document.getElementById('u1244');
gv_vAlignTable['u1244'] = 'top';
var u1245 = document.getElementById('u1245');

u1245.style.cursor = 'pointer';
if (bIE) u1245.attachEvent("onclick", Clicku1245);
else u1245.addEventListener("click", Clicku1245, true);
function Clicku1245(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1245')) {
SetWidgetNotSelected('u1245'); } else {
SetWidgetSelected('u1245');
}
}

}

var u1246 = document.getElementById('u1246');
gv_vAlignTable['u1246'] = 'center';
var u1247 = document.getElementById('u1247');

u1247.style.cursor = 'pointer';
if (bIE) u1247.attachEvent("onclick", Clicku1247);
else u1247.addEventListener("click", Clicku1247, true);
function Clicku1247(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1247')) {
SetWidgetNotSelected('u1247'); } else {
SetWidgetSelected('u1247');
}
}

}

var u1248 = document.getElementById('u1248');
gv_vAlignTable['u1248'] = 'center';
var u1249 = document.getElementById('u1249');

u1249.style.cursor = 'pointer';
if (bIE) u1249.attachEvent("onclick", Clicku1249);
else u1249.addEventListener("click", Clicku1249, true);
function Clicku1249(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1249')) {
SetWidgetNotSelected('u1249'); } else {
SetWidgetSelected('u1249');
}
}

}

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','fade','',150,'fade','',150);

}

}

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd1u7','fade','',150,'fade','',150);

}

}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd2u7','fade','',150,'fade','',150);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", Clicku16);
else u16.addEventListener("click", Clicku16, true);
function Clicku16(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','fade','',150,'fade','',150);

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd4u7','fade','',150,'fade','',150);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u1250 = document.getElementById('u1250');
gv_vAlignTable['u1250'] = 'center';
var u1251 = document.getElementById('u1251');

u1251.style.cursor = 'pointer';
if (bIE) u1251.attachEvent("onclick", Clicku1251);
else u1251.addEventListener("click", Clicku1251, true);
function Clicku1251(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1251')) {
SetWidgetNotSelected('u1251'); } else {
SetWidgetSelected('u1251');
}
}

}

var u1252 = document.getElementById('u1252');
gv_vAlignTable['u1252'] = 'center';
var u1253 = document.getElementById('u1253');

u1253.style.cursor = 'pointer';
if (bIE) u1253.attachEvent("onclick", Clicku1253);
else u1253.addEventListener("click", Clicku1253, true);
function Clicku1253(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1253')) {
SetWidgetNotSelected('u1253'); } else {
SetWidgetSelected('u1253');
}
}

}

var u1254 = document.getElementById('u1254');
gv_vAlignTable['u1254'] = 'center';
var u1255 = document.getElementById('u1255');

u1255.style.cursor = 'pointer';
if (bIE) u1255.attachEvent("onclick", Clicku1255);
else u1255.addEventListener("click", Clicku1255, true);
function Clicku1255(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1255')) {
SetWidgetNotSelected('u1255'); } else {
SetWidgetSelected('u1255');
}
}

}

var u1256 = document.getElementById('u1256');
gv_vAlignTable['u1256'] = 'center';
var u1257 = document.getElementById('u1257');

u1257.style.cursor = 'pointer';
if (bIE) u1257.attachEvent("onclick", Clicku1257);
else u1257.addEventListener("click", Clicku1257, true);
function Clicku1257(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1257')) {
SetWidgetNotSelected('u1257'); } else {
SetWidgetSelected('u1257');
}
}

}

var u1258 = document.getElementById('u1258');
gv_vAlignTable['u1258'] = 'center';
var u1259 = document.getElementById('u1259');

u1259.style.cursor = 'pointer';
if (bIE) u1259.attachEvent("onclick", Clicku1259);
else u1259.addEventListener("click", Clicku1259, true);
function Clicku1259(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1259')) {
SetWidgetNotSelected('u1259'); } else {
SetWidgetSelected('u1259');
}
}

}

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u1260 = document.getElementById('u1260');
gv_vAlignTable['u1260'] = 'center';
var u1261 = document.getElementById('u1261');

u1261.style.cursor = 'pointer';
if (bIE) u1261.attachEvent("onclick", Clicku1261);
else u1261.addEventListener("click", Clicku1261, true);
function Clicku1261(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1261')) {
SetWidgetNotSelected('u1261'); } else {
SetWidgetSelected('u1261');
}
}

}

var u1262 = document.getElementById('u1262');
gv_vAlignTable['u1262'] = 'center';
var u1263 = document.getElementById('u1263');

u1263.style.cursor = 'pointer';
if (bIE) u1263.attachEvent("onclick", Clicku1263);
else u1263.addEventListener("click", Clicku1263, true);
function Clicku1263(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1263')) {
SetWidgetNotSelected('u1263'); } else {
SetWidgetSelected('u1263');
}
}

}

var u1264 = document.getElementById('u1264');
gv_vAlignTable['u1264'] = 'center';
var u1265 = document.getElementById('u1265');

u1265.style.cursor = 'pointer';
if (bIE) u1265.attachEvent("onclick", Clicku1265);
else u1265.addEventListener("click", Clicku1265, true);
function Clicku1265(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd3u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 60,290,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u1266 = document.getElementById('u1266');
gv_vAlignTable['u1266'] = 'center';
var u1267 = document.getElementById('u1267');

var u1268 = document.getElementById('u1268');
gv_vAlignTable['u1268'] = 'center';
var u1269 = document.getElementById('u1269');

u1269.style.cursor = 'pointer';
if (bIE) u1269.attachEvent("onclick", Clicku1269);
else u1269.addEventListener("click", Clicku1269, true);
function Clicku1269(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1269')) {
SetWidgetNotSelected('u1269'); } else {
SetWidgetSelected('u1269');
}
}

}

var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u33 = document.getElementById('u33');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u1270 = document.getElementById('u1270');
gv_vAlignTable['u1270'] = 'center';
var u1271 = document.getElementById('u1271');

u1271.style.cursor = 'pointer';
if (bIE) u1271.attachEvent("onclick", Clicku1271);
else u1271.addEventListener("click", Clicku1271, true);
function Clicku1271(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u1273')) == (false)) {

	SetPanelVisibility('u1273','','none',500);

}
else
if ((GetWidgetVisibility('u1273')) == (true)) {

	SetPanelVisibility('u1273','hidden','none',500);

}

}

var u1272 = document.getElementById('u1272');
gv_vAlignTable['u1272'] = 'center';
var u1273 = document.getElementById('u1273');

var u1274 = document.getElementById('u1274');

var u1275 = document.getElementById('u1275');
gv_vAlignTable['u1275'] = 'center';
var u1276 = document.getElementById('u1276');

var u1277 = document.getElementById('u1277');

var u1278 = document.getElementById('u1278');
gv_vAlignTable['u1278'] = 'center';
var u1279 = document.getElementById('u1279');

u1279.style.cursor = 'pointer';
if (bIE) u1279.attachEvent("onclick", Clicku1279);
else u1279.addEventListener("click", Clicku1279, true);
function Clicku1279(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd4u639','none','',500,'none','',500);

}

}

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u1280 = document.getElementById('u1280');
gv_vAlignTable['u1280'] = 'center';
var u1281 = document.getElementById('u1281');

u1281.style.cursor = 'pointer';
if (bIE) u1281.attachEvent("onclick", Clicku1281);
else u1281.addEventListener("click", Clicku1281, true);
function Clicku1281(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',200,'none','',500);

	SetPanelState('u1432', 'pd5u1432','swing','down',200,'none','',500);

}

}

var u1282 = document.getElementById('u1282');
gv_vAlignTable['u1282'] = 'center';
var u1283 = document.getElementById('u1283');

u1283.style.cursor = 'pointer';
if (bIE) u1283.attachEvent("onclick", Clicku1283);
else u1283.addEventListener("click", Clicku1283, true);
function Clicku1283(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd1u1432','swing','down',200,'none','',500);

}

}

var u1284 = document.getElementById('u1284');
gv_vAlignTable['u1284'] = 'center';
var u1285 = document.getElementById('u1285');

var u1286 = document.getElementById('u1286');
gv_vAlignTable['u1286'] = 'center';
var u1287 = document.getElementById('u1287');

u1287.style.cursor = 'pointer';
if (bIE) u1287.attachEvent("onclick", Clicku1287);
else u1287.addEventListener("click", Clicku1287, true);
function Clicku1287(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd1u639','none','',500,'none','',500);

}

}

var u1288 = document.getElementById('u1288');
gv_vAlignTable['u1288'] = 'center';
var u1289 = document.getElementById('u1289');

var u2436 = document.getElementById('u2436');
gv_vAlignTable['u2436'] = 'top';
var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'top';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u56 = document.getElementById('u56');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u1290 = document.getElementById('u1290');
gv_vAlignTable['u1290'] = 'center';
var u1291 = document.getElementById('u1291');

u1291.style.cursor = 'pointer';
if (bIE) u1291.attachEvent("onclick", Clicku1291);
else u1291.addEventListener("click", Clicku1291, true);
function Clicku1291(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd2u639','none','',500,'none','',500);

}

}

var u1292 = document.getElementById('u1292');
gv_vAlignTable['u1292'] = 'center';
var u1293 = document.getElementById('u1293');

var u1294 = document.getElementById('u1294');
gv_vAlignTable['u1294'] = 'center';
var u1295 = document.getElementById('u1295');

u1295.style.cursor = 'pointer';
if (bIE) u1295.attachEvent("onclick", Clicku1295);
else u1295.addEventListener("click", Clicku1295, true);
function Clicku1295(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd0u639','none','',500,'none','',500);

}

}

var u1296 = document.getElementById('u1296');
gv_vAlignTable['u1296'] = 'center';
var u1297 = document.getElementById('u1297');

var u1298 = document.getElementById('u1298');
gv_vAlignTable['u1298'] = 'center';
var u1299 = document.getElementById('u1299');

u1299.style.cursor = 'pointer';
if (bIE) u1299.attachEvent("onclick", Clicku1299);
else u1299.addEventListener("click", Clicku1299, true);
function Clicku1299(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd3u639','none','',500,'none','',500);

}

}

var u60 = document.getElementById('u60');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u63 = document.getElementById('u63');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u70 = document.getElementById('u70');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u2000 = document.getElementById('u2000');
gv_vAlignTable['u2000'] = 'top';
var u2001 = document.getElementById('u2001');
gv_vAlignTable['u2001'] = 'top';
var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u86 = document.getElementById('u86');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u2017 = document.getElementById('u2017');
gv_vAlignTable['u2017'] = 'top';
var u90 = document.getElementById('u90');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u2664 = document.getElementById('u2664');

var u2672 = document.getElementById('u2672');
gv_vAlignTable['u2672'] = 'center';
var u2200 = document.getElementById('u2200');
gv_vAlignTable['u2200'] = 'center';
var u2201 = document.getElementById('u2201');

u2201.style.cursor = 'pointer';
if (bIE) u2201.attachEvent("onclick", Clicku2201);
else u2201.addEventListener("click", Clicku2201, true);
function Clicku2201(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u2202 = document.getElementById('u2202');
gv_vAlignTable['u2202'] = 'center';
var u2203 = document.getElementById('u2203');

var u2204 = document.getElementById('u2204');

var u2400 = document.getElementById('u2400');
gv_vAlignTable['u2400'] = 'center';
var u2208 = document.getElementById('u2208');

var u1900 = document.getElementById('u1900');
gv_vAlignTable['u1900'] = 'center';
var u1901 = document.getElementById('u1901');
gv_vAlignTable['u1901'] = 'top';
var u1902 = document.getElementById('u1902');
gv_vAlignTable['u1902'] = 'top';
var u1903 = document.getElementById('u1903');
gv_vAlignTable['u1903'] = 'top';
var u1904 = document.getElementById('u1904');
gv_vAlignTable['u1904'] = 'top';
var u1905 = document.getElementById('u1905');
gv_vAlignTable['u1905'] = 'top';
var u1906 = document.getElementById('u1906');

var u1907 = document.getElementById('u1907');
gv_vAlignTable['u1907'] = 'center';
var u1908 = document.getElementById('u1908');
gv_vAlignTable['u1908'] = 'top';
var u1909 = document.getElementById('u1909');
gv_vAlignTable['u1909'] = 'top';
var u2210 = document.getElementById('u2210');

var u2211 = document.getElementById('u2211');
gv_vAlignTable['u2211'] = 'center';
var u2212 = document.getElementById('u2212');

var u2213 = document.getElementById('u2213');
gv_vAlignTable['u2213'] = 'center';
var u2215 = document.getElementById('u2215');
gv_vAlignTable['u2215'] = 'center';
var u2410 = document.getElementById('u2410');
gv_vAlignTable['u2410'] = 'center';
var u2411 = document.getElementById('u2411');

var u1910 = document.getElementById('u1910');
gv_vAlignTable['u1910'] = 'top';
var u1911 = document.getElementById('u1911');
gv_vAlignTable['u1911'] = 'top';
var u1912 = document.getElementById('u1912');
gv_vAlignTable['u1912'] = 'top';
var u1913 = document.getElementById('u1913');

var u1914 = document.getElementById('u1914');
gv_vAlignTable['u1914'] = 'center';
var u1915 = document.getElementById('u1915');
gv_vAlignTable['u1915'] = 'top';
var u1916 = document.getElementById('u1916');
gv_vAlignTable['u1916'] = 'top';
var u1917 = document.getElementById('u1917');
gv_vAlignTable['u1917'] = 'top';
var u1918 = document.getElementById('u1918');
gv_vAlignTable['u1918'] = 'top';
var u1919 = document.getElementById('u1919');
gv_vAlignTable['u1919'] = 'top';
var u2220 = document.getElementById('u2220');

var u2221 = document.getElementById('u2221');
gv_vAlignTable['u2221'] = 'center';
var u2222 = document.getElementById('u2222');

var u2223 = document.getElementById('u2223');
gv_vAlignTable['u2223'] = 'center';
var u2420 = document.getElementById('u2420');
gv_vAlignTable['u2420'] = 'center';
var u2226 = document.getElementById('u2226');

var u1920 = document.getElementById('u1920');

var u1921 = document.getElementById('u1921');
gv_vAlignTable['u1921'] = 'center';
var u1922 = document.getElementById('u1922');
gv_vAlignTable['u1922'] = 'top';
var u1923 = document.getElementById('u1923');
gv_vAlignTable['u1923'] = 'top';
var u1924 = document.getElementById('u1924');
gv_vAlignTable['u1924'] = 'top';
var u1925 = document.getElementById('u1925');
gv_vAlignTable['u1925'] = 'top';
var u1926 = document.getElementById('u1926');
gv_vAlignTable['u1926'] = 'top';
var u1927 = document.getElementById('u1927');

var u1928 = document.getElementById('u1928');
gv_vAlignTable['u1928'] = 'center';
var u1929 = document.getElementById('u1929');

var u2230 = document.getElementById('u2230');

var u2231 = document.getElementById('u2231');

var u2232 = document.getElementById('u2232');
gv_vAlignTable['u2232'] = 'center';
var u2233 = document.getElementById('u2233');

u2233.style.cursor = 'pointer';
if (bIE) u2233.attachEvent("onclick", Clicku2233);
else u2233.addEventListener("click", Clicku2233, true);
function Clicku2233(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2230', 'pd0u2230','swing','right',200,'none','',500);

}

}

var u2430 = document.getElementById('u2430');
gv_vAlignTable['u2430'] = 'top';
var u2235 = document.getElementById('u2235');

var u1930 = document.getElementById('u1930');
gv_vAlignTable['u1930'] = 'center';
var u2237 = document.getElementById('u2237');

var u2238 = document.getElementById('u2238');
gv_vAlignTable['u2238'] = 'center';
var u1933 = document.getElementById('u1933');

var u1934 = document.getElementById('u1934');
gv_vAlignTable['u1934'] = 'center';
var u1935 = document.getElementById('u1935');

var u1936 = document.getElementById('u1936');
gv_vAlignTable['u1936'] = 'center';
var u1937 = document.getElementById('u1937');

var u1938 = document.getElementById('u1938');
gv_vAlignTable['u1938'] = 'center';
var u1939 = document.getElementById('u1939');
gv_vAlignTable['u1939'] = 'top';
var u2240 = document.getElementById('u2240');

var u2241 = document.getElementById('u2241');
gv_vAlignTable['u2241'] = 'center';
var u2242 = document.getElementById('u2242');
gv_vAlignTable['u2242'] = 'top';
var u2243 = document.getElementById('u2243');
gv_vAlignTable['u2243'] = 'top';
var u2441 = document.getElementById('u2441');
gv_vAlignTable['u2441'] = 'center';
var u1940 = document.getElementById('u1940');

var u1941 = document.getElementById('u1941');
gv_vAlignTable['u1941'] = 'center';
var u1942 = document.getElementById('u1942');

var u2248 = document.getElementById('u2248');

var u1944 = document.getElementById('u1944');

var u1945 = document.getElementById('u1945');
gv_vAlignTable['u1945'] = 'center';
var u1946 = document.getElementById('u1946');

u1946.style.cursor = 'pointer';
if (bIE) u1946.attachEvent("onclick", Clicku1946);
else u1946.addEventListener("click", Clicku1946, true);
function Clicku1946(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 230,60,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1947 = document.getElementById('u1947');
gv_vAlignTable['u1947'] = 'center';
var u1948 = document.getElementById('u1948');

u1948.style.cursor = 'pointer';
if (bIE) u1948.attachEvent("onclick", Clicku1948);
else u1948.addEventListener("click", Clicku1948, true);
function Clicku1948(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 455,60,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1949 = document.getElementById('u1949');
gv_vAlignTable['u1949'] = 'center';
var u2450 = document.getElementById('u2450');
gv_vAlignTable['u2450'] = 'center';
var u2451 = document.getElementById('u2451');
gv_vAlignTable['u2451'] = 'top';
var u1950 = document.getElementById('u1950');

u1950.style.cursor = 'pointer';
if (bIE) u1950.attachEvent("onclick", Clicku1950);
else u1950.addEventListener("click", Clicku1950, true);
function Clicku1950(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 5,295,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1951 = document.getElementById('u1951');
gv_vAlignTable['u1951'] = 'center';
var u1952 = document.getElementById('u1952');

u1952.style.cursor = 'pointer';
if (bIE) u1952.attachEvent("onclick", Clicku1952);
else u1952.addEventListener("click", Clicku1952, true);
function Clicku1952(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 230,295,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1953 = document.getElementById('u1953');
gv_vAlignTable['u1953'] = 'center';
var u1954 = document.getElementById('u1954');

u1954.style.cursor = 'pointer';
if (bIE) u1954.attachEvent("onclick", Clicku1954);
else u1954.addEventListener("click", Clicku1954, true);
function Clicku1954(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 455,295,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u2259 = document.getElementById('u2259');
gv_vAlignTable['u2259'] = 'center';
var u1956 = document.getElementById('u1956');

u1956.style.cursor = 'pointer';
if (bIE) u1956.attachEvent("onclick", Clicku1956);
else u1956.addEventListener("click", Clicku1956, true);
function Clicku1956(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 5,530,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1957 = document.getElementById('u1957');
gv_vAlignTable['u1957'] = 'center';
var u1958 = document.getElementById('u1958');

u1958.style.cursor = 'pointer';
if (bIE) u1958.attachEvent("onclick", Clicku1958);
else u1958.addEventListener("click", Clicku1958, true);
function Clicku1958(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 230,530,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1959 = document.getElementById('u1959');
gv_vAlignTable['u1959'] = 'center';
var u2097 = document.getElementById('u2097');
gv_vAlignTable['u2097'] = 'top';
var u2460 = document.getElementById('u2460');
gv_vAlignTable['u2460'] = 'top';
var u2461 = document.getElementById('u2461');
gv_vAlignTable['u2461'] = 'top';
var u1960 = document.getElementById('u1960');

u1960.style.cursor = 'pointer';
if (bIE) u1960.attachEvent("onclick", Clicku1960);
else u1960.addEventListener("click", Clicku1960, true);
function Clicku1960(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 455,530,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1961 = document.getElementById('u1961');
gv_vAlignTable['u1961'] = 'center';
var u1962 = document.getElementById('u1962');

u1962.style.cursor = 'pointer';
if (bIE) u1962.attachEvent("onclick", Clicku1962);
else u1962.addEventListener("click", Clicku1962, true);
function Clicku1962(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','none',500);

	SetPanelState('u1964', 'pd0u1964','none','',500,'none','',500);

	MoveWidgetTo('u1964', 5,60,'none',500);

	SetPanelVisibility('u1964','','fade',100);

}

}

var u1963 = document.getElementById('u1963');
gv_vAlignTable['u1963'] = 'center';
var u1964 = document.getElementById('u1964');

var u1965 = document.getElementById('u1965');

var u2269 = document.getElementById('u2269');
gv_vAlignTable['u2269'] = 'top';
var u1967 = document.getElementById('u1967');
gv_vAlignTable['u1967'] = 'top';
var u1968 = document.getElementById('u1968');

u1968.style.cursor = 'pointer';
if (bIE) u1968.attachEvent("onclick", Clicku1968);
else u1968.addEventListener("click", Clicku1968, true);
function Clicku1968(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','fade',100);

}

}

var u1969 = document.getElementById('u1969');
gv_vAlignTable['u1969'] = 'center';
var u1802 = document.getElementById('u1802');

var u1803 = document.getElementById('u1803');
gv_vAlignTable['u1803'] = 'center';
var u1804 = document.getElementById('u1804');

var u1807 = document.getElementById('u1807');
gv_vAlignTable['u1807'] = 'center';
var u2470 = document.getElementById('u2470');

u2470.style.cursor = 'pointer';
if (bIE) u2470.attachEvent("onclick", Clicku2470);
else u2470.addEventListener("click", Clicku2470, true);
function Clicku2470(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u2472')) == (false)) {

	SetPanelVisibility('u2664','','none',500);

	SetPanelVisibility('u2472','','none',500);

	SetPanelState('u2664', 'pd0u2664','none','',500,'swing','left',150);

	SetPanelState('u2472', 'pd0u2472','none','',500,'swing','up',150);

}
else
if ((GetWidgetVisibility('u2472')) == (true)) {

	SetPanelVisibility('u2664','hidden','none',500);

	SetPanelVisibility('u2472','hidden','none',500);

}

}

var u2471 = document.getElementById('u2471');
gv_vAlignTable['u2471'] = 'center';
var u1970 = document.getElementById('u1970');

u1970.style.cursor = 'pointer';
if (bIE) u1970.attachEvent("onclick", Clicku1970);
else u1970.addEventListener("click", Clicku1970, true);
function Clicku1970(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1964', 'pd0u1964','swing','down',150,'none','',500);

}

}

var u1971 = document.getElementById('u1971');
gv_vAlignTable['u1971'] = 'center';
var u1972 = document.getElementById('u1972');

var u1973 = document.getElementById('u1973');
gv_vAlignTable['u1973'] = 'center';
var u1974 = document.getElementById('u1974');

u1974.style.cursor = 'pointer';
if (bIE) u1974.attachEvent("onclick", Clicku1974);
else u1974.addEventListener("click", Clicku1974, true);
function Clicku1974(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',150);

SetGlobalVariableValue('$pubfrom', 'check');

}

}

var u1975 = document.getElementById('u1975');
gv_vAlignTable['u1975'] = 'center';
var u1976 = document.getElementById('u1976');

u1976.style.cursor = 'pointer';
if (bIE) u1976.attachEvent("onclick", Clicku1976);
else u1976.addEventListener("click", Clicku1976, true);
function Clicku1976(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1964','hidden','fade',100);

}

}

var u1977 = document.getElementById('u1977');
gv_vAlignTable['u1977'] = 'center';
var u1978 = document.getElementById('u1978');

u1978.style.cursor = 'pointer';
if (bIE) u1978.attachEvent("onclick", Clicku1978);
else u1978.addEventListener("click", Clicku1978, true);
function Clicku1978(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1964', 'pd1u1964','none','',500,'swing','up',150);

}

}

var u1979 = document.getElementById('u1979');
gv_vAlignTable['u1979'] = 'center';
var u1812 = document.getElementById('u1812');

var u1814 = document.getElementById('u1814');
gv_vAlignTable['u1814'] = 'top';
var u1817 = document.getElementById('u1817');

var u2480 = document.getElementById('u2480');

var u2280 = document.getElementById('u2280');

var u1980 = document.getElementById('u1980');

u1980.style.cursor = 'pointer';
if (bIE) u1980.attachEvent("onclick", Clicku1980);
else u1980.addEventListener("click", Clicku1980, true);
function Clicku1980(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1981 = document.getElementById('u1981');
gv_vAlignTable['u1981'] = 'center';
var u1982 = document.getElementById('u1982');

var u1983 = document.getElementById('u1983');
gv_vAlignTable['u1983'] = 'center';
var u1984 = document.getElementById('u1984');

var u1985 = document.getElementById('u1985');
gv_vAlignTable['u1985'] = 'center';
var u1986 = document.getElementById('u1986');
gv_vAlignTable['u1986'] = 'top';
var u1987 = document.getElementById('u1987');
gv_vAlignTable['u1987'] = 'top';
var u1988 = document.getElementById('u1988');
gv_vAlignTable['u1988'] = 'top';
var u1989 = document.getElementById('u1989');
gv_vAlignTable['u1989'] = 'top';
var u1822 = document.getElementById('u1822');
gv_vAlignTable['u1822'] = 'center';
var u1827 = document.getElementById('u1827');

u1827.style.cursor = 'pointer';
if (bIE) u1827.attachEvent("onclick", Clicku1827);
else u1827.addEventListener("click", Clicku1827, true);
function Clicku1827(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1839','hidden','none',500);

	SetPanelState('u1839', 'pd0u1839','none','',500,'none','',500);

	MoveWidgetTo('u1839', 230,295,'none',500);

	SetPanelVisibility('u1839','','fade',100);

}

}

var u2490 = document.getElementById('u2490');

var u2491 = document.getElementById('u2491');
gv_vAlignTable['u2491'] = 'center';
var u1990 = document.getElementById('u1990');
gv_vAlignTable['u1990'] = 'top';
var u1991 = document.getElementById('u1991');

var u1992 = document.getElementById('u1992');
gv_vAlignTable['u1992'] = 'center';
var u1993 = document.getElementById('u1993');
gv_vAlignTable['u1993'] = 'top';
var u1994 = document.getElementById('u1994');
gv_vAlignTable['u1994'] = 'top';
var u1995 = document.getElementById('u1995');
gv_vAlignTable['u1995'] = 'top';
var u1996 = document.getElementById('u1996');
gv_vAlignTable['u1996'] = 'top';
var u1997 = document.getElementById('u1997');
gv_vAlignTable['u1997'] = 'top';
var u1998 = document.getElementById('u1998');

var u1999 = document.getElementById('u1999');
gv_vAlignTable['u1999'] = 'center';
var u1832 = document.getElementById('u1832');
gv_vAlignTable['u1832'] = 'center';
var u500 = document.getElementById('u500');
gv_vAlignTable['u500'] = 'top';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'top';
var u502 = document.getElementById('u502');

var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u504 = document.getElementById('u504');
gv_vAlignTable['u504'] = 'top';
var u505 = document.getElementById('u505');

var u506 = document.getElementById('u506');
gv_vAlignTable['u506'] = 'center';
var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'top';
var u508 = document.getElementById('u508');

var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u510 = document.getElementById('u510');
gv_vAlignTable['u510'] = 'top';
var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'top';
var u512 = document.getElementById('u512');

var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'center';
var u514 = document.getElementById('u514');
gv_vAlignTable['u514'] = 'top';
var u515 = document.getElementById('u515');

var u516 = document.getElementById('u516');
gv_vAlignTable['u516'] = 'center';
var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'top';
var u518 = document.getElementById('u518');

var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u520 = document.getElementById('u520');
gv_vAlignTable['u520'] = 'top';
var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'top';
var u522 = document.getElementById('u522');

var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u524 = document.getElementById('u524');
gv_vAlignTable['u524'] = 'top';
var u525 = document.getElementById('u525');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'center';
var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'top';
var u528 = document.getElementById('u528');

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'center';
var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u532 = document.getElementById('u532');

u532.style.cursor = 'pointer';
if (bIE) u532.attachEvent("onclick", Clicku532);
else u532.addEventListener("click", Clicku532, true);
function Clicku532(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u533 = document.getElementById('u533');
gv_vAlignTable['u533'] = 'center';
var u534 = document.getElementById('u534');

u534.style.cursor = 'pointer';
if (bIE) u534.attachEvent("onclick", Clicku534);
else u534.addEventListener("click", Clicku534, true);
function Clicku534(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u535 = document.getElementById('u535');
gv_vAlignTable['u535'] = 'center';
var u536 = document.getElementById('u536');

u536.style.cursor = 'pointer';
if (bIE) u536.attachEvent("onclick", Clicku536);
else u536.addEventListener("click", Clicku536, true);
function Clicku536(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u538 = document.getElementById('u538');

u538.style.cursor = 'pointer';
if (bIE) u538.attachEvent("onclick", Clicku538);
else u538.addEventListener("click", Clicku538, true);
function Clicku538(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u1021 = document.getElementById('u1021');
gv_vAlignTable['u1021'] = 'top';
var u540 = document.getElementById('u540');

u540.style.cursor = 'pointer';
if (bIE) u540.attachEvent("onclick", Clicku540);
else u540.addEventListener("click", Clicku540, true);
function Clicku540(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u542 = document.getElementById('u542');

u542.style.cursor = 'pointer';
if (bIE) u542.attachEvent("onclick", Clicku542);
else u542.addEventListener("click", Clicku542, true);
function Clicku542(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u543 = document.getElementById('u543');
gv_vAlignTable['u543'] = 'center';
var u544 = document.getElementById('u544');

u544.style.cursor = 'pointer';
if (bIE) u544.attachEvent("onclick", Clicku544);
else u544.addEventListener("click", Clicku544, true);
function Clicku544(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u545 = document.getElementById('u545');
gv_vAlignTable['u545'] = 'center';
var u546 = document.getElementById('u546');

u546.style.cursor = 'pointer';
if (bIE) u546.attachEvent("onclick", Clicku546);
else u546.addEventListener("click", Clicku546, true);
function Clicku546(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u547 = document.getElementById('u547');
gv_vAlignTable['u547'] = 'center';
var u548 = document.getElementById('u548');

var u549 = document.getElementById('u549');

var u1100 = document.getElementById('u1100');
gv_vAlignTable['u1100'] = 'center';
var u1101 = document.getElementById('u1101');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u551 = document.getElementById('u551');

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u553 = document.getElementById('u553');

var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u555 = document.getElementById('u555');
gv_vAlignTable['u555'] = 'top';
var u556 = document.getElementById('u556');

var u557 = document.getElementById('u557');
gv_vAlignTable['u557'] = 'center';
var u1300 = document.getElementById('u1300');
gv_vAlignTable['u1300'] = 'center';
var u1301 = document.getElementById('u1301');

var u1302 = document.getElementById('u1302');
gv_vAlignTable['u1302'] = 'center';
var u1303 = document.getElementById('u1303');

var u1304 = document.getElementById('u1304');
gv_vAlignTable['u1304'] = 'center';
var u1305 = document.getElementById('u1305');

u1305.style.cursor = 'pointer';
if (bIE) u1305.attachEvent("onclick", Clicku1305);
else u1305.addEventListener("click", Clicku1305, true);
function Clicku1305(e)
{
windowEvent = e;


if ((GetGlobalVariableValue('$pubfrom')) == ('online')) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd0u1432','swing','down',200,'none','',500);

}
else
if ((GetGlobalVariableValue('$pubfrom')) == ('check')) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd1u1432','swing','down',200,'none','',500);

}
else
if ((GetGlobalVariableValue('$pubfrom')) == ('fail')) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd2u1432','swing','down',200,'none','',500);

}
else
if ((GetGlobalVariableValue('$pubfrom')) == ('temp')) {

	SetPanelState('u6', 'pd0u6','swing','down',200,'none','',500);

	SetPanelState('u1432', 'pd5u1432','swing','down',200,'none','',500);

}

}

var u1306 = document.getElementById('u1306');
gv_vAlignTable['u1306'] = 'center';
var u1307 = document.getElementById('u1307');

var u1308 = document.getElementById('u1308');

var u1309 = document.getElementById('u1309');
gv_vAlignTable['u1309'] = 'center';
var u1110 = document.getElementById('u1110');
gv_vAlignTable['u1110'] = 'center';
var u1111 = document.getElementById('u1111');
gv_vAlignTable['u1111'] = 'top';
var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'top';
var u561 = document.getElementById('u561');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u563 = document.getElementById('u563');

var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u565 = document.getElementById('u565');
gv_vAlignTable['u565'] = 'top';
var u566 = document.getElementById('u566');

var u567 = document.getElementById('u567');
gv_vAlignTable['u567'] = 'center';
var u1310 = document.getElementById('u1310');

u1310.style.cursor = 'pointer';
if (bIE) u1310.attachEvent("onclick", Clicku1310);
else u1310.addEventListener("click", Clicku1310, true);
function Clicku1310(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1311 = document.getElementById('u1311');
gv_vAlignTable['u1311'] = 'center';
var u1312 = document.getElementById('u1312');

u1312.style.cursor = 'pointer';
if (bIE) u1312.attachEvent("onclick", Clicku1312);
else u1312.addEventListener("click", Clicku1312, true);
function Clicku1312(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1313 = document.getElementById('u1313');
gv_vAlignTable['u1313'] = 'center';
var u1314 = document.getElementById('u1314');

var u1315 = document.getElementById('u1315');
gv_vAlignTable['u1315'] = 'center';
var u1316 = document.getElementById('u1316');

var u1317 = document.getElementById('u1317');
gv_vAlignTable['u1317'] = 'center';
var u1318 = document.getElementById('u1318');
gv_vAlignTable['u1318'] = 'top';
var u1319 = document.getElementById('u1319');

var u1120 = document.getElementById('u1120');
gv_vAlignTable['u1120'] = 'center';
var u1121 = document.getElementById('u1121');

var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'top';
var u571 = document.getElementById('u571');

var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u573 = document.getElementById('u573');

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u575 = document.getElementById('u575');
gv_vAlignTable['u575'] = 'top';
var u576 = document.getElementById('u576');

var u577 = document.getElementById('u577');
gv_vAlignTable['u577'] = 'center';
var u1320 = document.getElementById('u1320');
gv_vAlignTable['u1320'] = 'center';
var u1321 = document.getElementById('u1321');

var u1322 = document.getElementById('u1322');
gv_vAlignTable['u1322'] = 'center';
var u1323 = document.getElementById('u1323');
gv_vAlignTable['u1323'] = 'top';
var u1324 = document.getElementById('u1324');

var u1325 = document.getElementById('u1325');
gv_vAlignTable['u1325'] = 'center';
var u1326 = document.getElementById('u1326');

var u1327 = document.getElementById('u1327');
gv_vAlignTable['u1327'] = 'center';
var u1328 = document.getElementById('u1328');
gv_vAlignTable['u1328'] = 'top';
var u1329 = document.getElementById('u1329');

var u1130 = document.getElementById('u1130');
gv_vAlignTable['u1130'] = 'center';
var u1131 = document.getElementById('u1131');

u1131.style.cursor = 'pointer';
if (bIE) u1131.attachEvent("onclick", Clicku1131);
else u1131.addEventListener("click", Clicku1131, true);
function Clicku1131(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u1131')) {
SetWidgetNotSelected('u1131'); } else {
SetWidgetSelected('u1131');
}
SetWidgetNotSelected('u1133');
}

}

var u582 = document.getElementById('u582');

var u583 = document.getElementById('u583');
gv_vAlignTable['u583'] = 'center';
var u584 = document.getElementById('u584');

var u585 = document.getElementById('u585');
gv_vAlignTable['u585'] = 'center';
var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'top';
var u587 = document.getElementById('u587');

var u1330 = document.getElementById('u1330');
gv_vAlignTable['u1330'] = 'center';
var u1331 = document.getElementById('u1331');

var u1332 = document.getElementById('u1332');
gv_vAlignTable['u1332'] = 'center';
var u1333 = document.getElementById('u1333');
gv_vAlignTable['u1333'] = 'top';
var u1334 = document.getElementById('u1334');

var u1335 = document.getElementById('u1335');
gv_vAlignTable['u1335'] = 'center';
var u1336 = document.getElementById('u1336');

u1336.style.cursor = 'pointer';
if (bIE) u1336.attachEvent("onclick", Clicku1336);
else u1336.addEventListener("click", Clicku1336, true);
function Clicku1336(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1337 = document.getElementById('u1337');
gv_vAlignTable['u1337'] = 'center';
var u1338 = document.getElementById('u1338');

u1338.style.cursor = 'pointer';
if (bIE) u1338.attachEvent("onclick", Clicku1338);
else u1338.addEventListener("click", Clicku1338, true);
function Clicku1338(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1339 = document.getElementById('u1339');
gv_vAlignTable['u1339'] = 'center';
var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u591 = document.getElementById('u591');

var u1140 = document.getElementById('u1140');
gv_vAlignTable['u1140'] = 'center';
var u1141 = document.getElementById('u1141');

u1141.style.cursor = 'pointer';
if (bIE) u1141.attachEvent("onclick", Clicku1141);
else u1141.addEventListener("click", Clicku1141, true);
function Clicku1141(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1307', 'pd0u1307','none','',500,'none','',500);

	MoveWidgetTo('u1307', 310,330,'none',500);

	SetPanelVisibility('u1307','','fade',200);

}

}

var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u595 = document.getElementById('u595');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u758 = document.getElementById('u758');

var u1340 = document.getElementById('u1340');

var u1341 = document.getElementById('u1341');
gv_vAlignTable['u1341'] = 'center';
var u1342 = document.getElementById('u1342');

var u1343 = document.getElementById('u1343');
gv_vAlignTable['u1343'] = 'center';
var u1344 = document.getElementById('u1344');

var u1345 = document.getElementById('u1345');
gv_vAlignTable['u1345'] = 'center';
var u1346 = document.getElementById('u1346');

var u1347 = document.getElementById('u1347');
gv_vAlignTable['u1347'] = 'center';
var u1348 = document.getElementById('u1348');

var u1349 = document.getElementById('u1349');
gv_vAlignTable['u1349'] = 'center';
var u766 = document.getElementById('u766');
gv_vAlignTable['u766'] = 'center';
var u767 = document.getElementById('u767');

var u1350 = document.getElementById('u1350');

var u769 = document.getElementById('u769');

var u1352 = document.getElementById('u1352');

var u1353 = document.getElementById('u1353');
gv_vAlignTable['u1353'] = 'center';
var u1354 = document.getElementById('u1354');

var u1355 = document.getElementById('u1355');
gv_vAlignTable['u1355'] = 'center';
var u1356 = document.getElementById('u1356');

var u1357 = document.getElementById('u1357');
gv_vAlignTable['u1357'] = 'center';
var u1358 = document.getElementById('u1358');

var u1359 = document.getElementById('u1359');
gv_vAlignTable['u1359'] = 'center';
var u776 = document.getElementById('u776');
gv_vAlignTable['u776'] = 'center';
var u777 = document.getElementById('u777');

var u1361 = document.getElementById('u1361');
gv_vAlignTable['u1361'] = 'center';
var u779 = document.getElementById('u779');

var u1363 = document.getElementById('u1363');
gv_vAlignTable['u1363'] = 'center';
var u1364 = document.getElementById('u1364');

var u1365 = document.getElementById('u1365');
gv_vAlignTable['u1365'] = 'center';
var u1366 = document.getElementById('u1366');

var u1367 = document.getElementById('u1367');
gv_vAlignTable['u1367'] = 'center';
var u1368 = document.getElementById('u1368');

u1368.style.cursor = 'pointer';
if (bIE) u1368.attachEvent("onclick", Clicku1368);
else u1368.addEventListener("click", Clicku1368, true);
function Clicku1368(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1369 = document.getElementById('u1369');
gv_vAlignTable['u1369'] = 'center';
var u1370 = document.getElementById('u1370');

u1370.style.cursor = 'pointer';
if (bIE) u1370.attachEvent("onclick", Clicku1370);
else u1370.addEventListener("click", Clicku1370, true);
function Clicku1370(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1371 = document.getElementById('u1371');
gv_vAlignTable['u1371'] = 'center';
var u1372 = document.getElementById('u1372');

var u1373 = document.getElementById('u1373');
gv_vAlignTable['u1373'] = 'center';
var u1374 = document.getElementById('u1374');

var u1375 = document.getElementById('u1375');
gv_vAlignTable['u1375'] = 'center';
var u1376 = document.getElementById('u1376');
gv_vAlignTable['u1376'] = 'top';
var u1377 = document.getElementById('u1377');
gv_vAlignTable['u1377'] = 'top';
var u1378 = document.getElementById('u1378');
gv_vAlignTable['u1378'] = 'top';
var u1379 = document.getElementById('u1379');
gv_vAlignTable['u1379'] = 'top';
var u790 = document.getElementById('u790');
gv_vAlignTable['u790'] = 'center';
var u796 = document.getElementById('u796');
gv_vAlignTable['u796'] = 'center';
var u1381 = document.getElementById('u1381');

var u1382 = document.getElementById('u1382');
gv_vAlignTable['u1382'] = 'center';
var u1383 = document.getElementById('u1383');

var u1384 = document.getElementById('u1384');
gv_vAlignTable['u1384'] = 'center';
var u1385 = document.getElementById('u1385');

var u1386 = document.getElementById('u1386');
gv_vAlignTable['u1386'] = 'center';
var u1387 = document.getElementById('u1387');

u1387.style.cursor = 'pointer';
if (bIE) u1387.attachEvent("onclick", Clicku1387);
else u1387.addEventListener("click", Clicku1387, true);
function Clicku1387(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1388 = document.getElementById('u1388');
gv_vAlignTable['u1388'] = 'center';
var u1389 = document.getElementById('u1389');

u1389.style.cursor = 'pointer';
if (bIE) u1389.attachEvent("onclick", Clicku1389);
else u1389.addEventListener("click", Clicku1389, true);
function Clicku1389(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1390 = document.getElementById('u1390');
gv_vAlignTable['u1390'] = 'center';
var u1391 = document.getElementById('u1391');

var u1392 = document.getElementById('u1392');
gv_vAlignTable['u1392'] = 'center';
var u1393 = document.getElementById('u1393');

var u1394 = document.getElementById('u1394');
gv_vAlignTable['u1394'] = 'center';
var u1395 = document.getElementById('u1395');
gv_vAlignTable['u1395'] = 'top';
var u1396 = document.getElementById('u1396');
gv_vAlignTable['u1396'] = 'top';
var u1397 = document.getElementById('u1397');
gv_vAlignTable['u1397'] = 'top';
var u1398 = document.getElementById('u1398');
gv_vAlignTable['u1398'] = 'top';
var u1399 = document.getElementById('u1399');
gv_vAlignTable['u1399'] = 'top';
var u2385 = document.getElementById('u2385');

var u2386 = document.getElementById('u2386');
gv_vAlignTable['u2386'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u2500 = document.getElementById('u2500');
gv_vAlignTable['u2500'] = 'center';
var u2501 = document.getElementById('u2501');

u2501.style.cursor = 'pointer';
if (bIE) u2501.attachEvent("onclick", Clicku2501);
else u2501.addEventListener("click", Clicku2501, true);
function Clicku2501(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2502 = document.getElementById('u2502');
gv_vAlignTable['u2502'] = 'center';
var u2503 = document.getElementById('u2503');

u2503.style.cursor = 'pointer';
if (bIE) u2503.attachEvent("onclick", Clicku2503);
else u2503.addEventListener("click", Clicku2503, true);
function Clicku2503(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2504 = document.getElementById('u2504');
gv_vAlignTable['u2504'] = 'center';
var u2505 = document.getElementById('u2505');

u2505.style.cursor = 'pointer';
if (bIE) u2505.attachEvent("onclick", Clicku2505);
else u2505.addEventListener("click", Clicku2505, true);
function Clicku2505(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2506 = document.getElementById('u2506');
gv_vAlignTable['u2506'] = 'center';
var u2507 = document.getElementById('u2507');

u2507.style.cursor = 'pointer';
if (bIE) u2507.attachEvent("onclick", Clicku2507);
else u2507.addEventListener("click", Clicku2507, true);
function Clicku2507(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2508 = document.getElementById('u2508');
gv_vAlignTable['u2508'] = 'center';
var u2509 = document.getElementById('u2509');

u2509.style.cursor = 'pointer';
if (bIE) u2509.attachEvent("onclick", Clicku2509);
else u2509.addEventListener("click", Clicku2509, true);
function Clicku2509(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2302 = document.getElementById('u2302');
gv_vAlignTable['u2302'] = 'top';
var u2303 = document.getElementById('u2303');

var u2307 = document.getElementById('u2307');
gv_vAlignTable['u2307'] = 'center';
var u2308 = document.getElementById('u2308');
gv_vAlignTable['u2308'] = 'top';
var u2511 = document.getElementById('u2511');

u2511.style.cursor = 'pointer';
if (bIE) u2511.attachEvent("onclick", Clicku2511);
else u2511.addEventListener("click", Clicku2511, true);
function Clicku2511(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u2512 = document.getElementById('u2512');
gv_vAlignTable['u2512'] = 'center';
var u2513 = document.getElementById('u2513');

u2513.style.cursor = 'pointer';
if (bIE) u2513.attachEvent("onclick", Clicku2513);
else u2513.addEventListener("click", Clicku2513, true);
function Clicku2513(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u2514 = document.getElementById('u2514');
gv_vAlignTable['u2514'] = 'center';
var u2515 = document.getElementById('u2515');

u2515.style.cursor = 'pointer';
if (bIE) u2515.attachEvent("onclick", Clicku2515);
else u2515.addEventListener("click", Clicku2515, true);
function Clicku2515(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2516 = document.getElementById('u2516');
gv_vAlignTable['u2516'] = 'center';
var u2517 = document.getElementById('u2517');

u2517.style.cursor = 'pointer';
if (bIE) u2517.attachEvent("onclick", Clicku2517);
else u2517.addEventListener("click", Clicku2517, true);
function Clicku2517(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2518 = document.getElementById('u2518');
gv_vAlignTable['u2518'] = 'center';
var u2519 = document.getElementById('u2519');

u2519.style.cursor = 'pointer';
if (bIE) u2519.attachEvent("onclick", Clicku2519);
else u2519.addEventListener("click", Clicku2519, true);
function Clicku2519(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2312 = document.getElementById('u2312');
gv_vAlignTable['u2312'] = 'top';
var u2313 = document.getElementById('u2313');
gv_vAlignTable['u2313'] = 'top';
var u2315 = document.getElementById('u2315');
gv_vAlignTable['u2315'] = 'top';
var u2317 = document.getElementById('u2317');
gv_vAlignTable['u2317'] = 'top';
var u2318 = document.getElementById('u2318');

u2318.style.cursor = 'pointer';
if (bIE) u2318.attachEvent("onclick", Clicku2318);
else u2318.addEventListener("click", Clicku2318, true);
function Clicku2318(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,0,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2522 = document.getElementById('u2522');
gv_vAlignTable['u2522'] = 'center';
var u2523 = document.getElementById('u2523');

u2523.style.cursor = 'pointer';
if (bIE) u2523.attachEvent("onclick", Clicku2523);
else u2523.addEventListener("click", Clicku2523, true);
function Clicku2523(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2524 = document.getElementById('u2524');
gv_vAlignTable['u2524'] = 'center';
var u2149 = document.getElementById('u2149');
gv_vAlignTable['u2149'] = 'top';
var u2526 = document.getElementById('u2526');
gv_vAlignTable['u2526'] = 'center';
var u2527 = document.getElementById('u2527');

u2527.style.cursor = 'pointer';
if (bIE) u2527.attachEvent("onclick", Clicku2527);
else u2527.addEventListener("click", Clicku2527, true);
function Clicku2527(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u2528 = document.getElementById('u2528');
gv_vAlignTable['u2528'] = 'center';
var u2529 = document.getElementById('u2529');

u2529.style.cursor = 'pointer';
if (bIE) u2529.attachEvent("onclick", Clicku2529);
else u2529.addEventListener("click", Clicku2529, true);
function Clicku2529(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2322 = document.getElementById('u2322');

u2322.style.cursor = 'pointer';
if (bIE) u2322.attachEvent("onclick", Clicku2322);
else u2322.addEventListener("click", Clicku2322, true);
function Clicku2322(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,120,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2323 = document.getElementById('u2323');
gv_vAlignTable['u2323'] = 'center';
var u2325 = document.getElementById('u2325');
gv_vAlignTable['u2325'] = 'center';
var u2326 = document.getElementById('u2326');

u2326.style.cursor = 'pointer';
if (bIE) u2326.attachEvent("onclick", Clicku2326);
else u2326.addEventListener("click", Clicku2326, true);
function Clicku2326(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,240,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2327 = document.getElementById('u2327');
gv_vAlignTable['u2327'] = 'center';
var u2328 = document.getElementById('u2328');

u2328.style.cursor = 'pointer';
if (bIE) u2328.attachEvent("onclick", Clicku2328);
else u2328.addEventListener("click", Clicku2328, true);
function Clicku2328(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,300,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2533 = document.getElementById('u2533');

u2533.style.cursor = 'pointer';
if (bIE) u2533.attachEvent("onclick", Clicku2533);
else u2533.addEventListener("click", Clicku2533, true);
function Clicku2533(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2534 = document.getElementById('u2534');
gv_vAlignTable['u2534'] = 'center';
var u2535 = document.getElementById('u2535');

u2535.style.cursor = 'pointer';
if (bIE) u2535.attachEvent("onclick", Clicku2535);
else u2535.addEventListener("click", Clicku2535, true);
function Clicku2535(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2536 = document.getElementById('u2536');
gv_vAlignTable['u2536'] = 'center';
var u2537 = document.getElementById('u2537');

u2537.style.cursor = 'pointer';
if (bIE) u2537.attachEvent("onclick", Clicku2537);
else u2537.addEventListener("click", Clicku2537, true);
function Clicku2537(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2538 = document.getElementById('u2538');
gv_vAlignTable['u2538'] = 'center';
var u2539 = document.getElementById('u2539');

u2539.style.cursor = 'pointer';
if (bIE) u2539.attachEvent("onclick", Clicku2539);
else u2539.addEventListener("click", Clicku2539, true);
function Clicku2539(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u2330 = document.getElementById('u2330');

u2330.style.cursor = 'pointer';
if (bIE) u2330.attachEvent("onclick", Clicku2330);
else u2330.addEventListener("click", Clicku2330, true);
function Clicku2330(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2332','hidden','none',500);

	MoveWidgetTo('u2332', 170,360,'none',500);

	SetPanelVisibility('u2332','','none',500);

}

}

var u2331 = document.getElementById('u2331');
gv_vAlignTable['u2331'] = 'center';
var u2332 = document.getElementById('u2332');

var u2333 = document.getElementById('u2333');

u2333.style.cursor = 'pointer';
if (bIE) u2333.attachEvent("onclick", Clicku2333);
else u2333.addEventListener("click", Clicku2333, true);
function Clicku2333(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2230', 'pd1u2230','none','',500,'swing','left',200);

}

}

var u2335 = document.getElementById('u2335');

u2335.style.cursor = 'pointer';
if (bIE) u2335.attachEvent("onclick", Clicku2335);
else u2335.addEventListener("click", Clicku2335, true);
function Clicku2335(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd2u6','none','',500,'swing','left',200);

}

}

var u2336 = document.getElementById('u2336');
gv_vAlignTable['u2336'] = 'center';
var u2337 = document.getElementById('u2337');

var u2338 = document.getElementById('u2338');
gv_vAlignTable['u2338'] = 'center';
var u2339 = document.getElementById('u2339');

var u2545 = document.getElementById('u2545');

u2545.style.cursor = 'pointer';
if (bIE) u2545.attachEvent("onclick", Clicku2545);
else u2545.addEventListener("click", Clicku2545, true);
function Clicku2545(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2546 = document.getElementById('u2546');
gv_vAlignTable['u2546'] = 'center';
var u2547 = document.getElementById('u2547');

u2547.style.cursor = 'pointer';
if (bIE) u2547.attachEvent("onclick", Clicku2547);
else u2547.addEventListener("click", Clicku2547, true);
function Clicku2547(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2548 = document.getElementById('u2548');
gv_vAlignTable['u2548'] = 'center';
var u2549 = document.getElementById('u2549');

u2549.style.cursor = 'pointer';
if (bIE) u2549.attachEvent("onclick", Clicku2549);
else u2549.addEventListener("click", Clicku2549, true);
function Clicku2549(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2342 = document.getElementById('u2342');
gv_vAlignTable['u2342'] = 'center';
var u2343 = document.getElementById('u2343');

var u2344 = document.getElementById('u2344');
gv_vAlignTable['u2344'] = 'center';
var u2345 = document.getElementById('u2345');

u2345.style.cursor = 'pointer';
if (bIE) u2345.attachEvent("onclick", Clicku2345);
else u2345.addEventListener("click", Clicku2345, true);
function Clicku2345(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

	SetPanelState('u639', 'pd0u639','none','',500,'none','',500);

SetGlobalVariableValue('$pubfrom', 'new');

}

}

var u2346 = document.getElementById('u2346');
gv_vAlignTable['u2346'] = 'center';
var u2347 = document.getElementById('u2347');

var u2348 = document.getElementById('u2348');
gv_vAlignTable['u2348'] = 'center';
var u2349 = document.getElementById('u2349');

var u2556 = document.getElementById('u2556');
gv_vAlignTable['u2556'] = 'center';
var u2557 = document.getElementById('u2557');

u2557.style.cursor = 'pointer';
if (bIE) u2557.attachEvent("onclick", Clicku2557);
else u2557.addEventListener("click", Clicku2557, true);
function Clicku2557(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2558 = document.getElementById('u2558');
gv_vAlignTable['u2558'] = 'center';
var u2559 = document.getElementById('u2559');

u2559.style.cursor = 'pointer';
if (bIE) u2559.attachEvent("onclick", Clicku2559);
else u2559.addEventListener("click", Clicku2559, true);
function Clicku2559(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2352 = document.getElementById('u2352');
gv_vAlignTable['u2352'] = 'center';
var u2353 = document.getElementById('u2353');

var u2354 = document.getElementById('u2354');
gv_vAlignTable['u2354'] = 'center';
var u2355 = document.getElementById('u2355');

var u2356 = document.getElementById('u2356');
gv_vAlignTable['u2356'] = 'center';
var u2357 = document.getElementById('u2357');

var u2181 = document.getElementById('u2181');
gv_vAlignTable['u2181'] = 'center';
var u2182 = document.getElementById('u2182');
gv_vAlignTable['u2182'] = 'top';
var u2567 = document.getElementById('u2567');

u2567.style.cursor = 'pointer';
if (bIE) u2567.attachEvent("onclick", Clicku2567);
else u2567.addEventListener("click", Clicku2567, true);
function Clicku2567(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u2568 = document.getElementById('u2568');
gv_vAlignTable['u2568'] = 'center';
var u2569 = document.getElementById('u2569');

u2569.style.cursor = 'pointer';
if (bIE) u2569.attachEvent("onclick", Clicku2569);
else u2569.addEventListener("click", Clicku2569, true);
function Clicku2569(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u2361 = document.getElementById('u2361');

var u2362 = document.getElementById('u2362');
gv_vAlignTable['u2362'] = 'center';
var u2363 = document.getElementById('u2363');

var u2364 = document.getElementById('u2364');
gv_vAlignTable['u2364'] = 'center';
var u2365 = document.getElementById('u2365');

var u2366 = document.getElementById('u2366');
gv_vAlignTable['u2366'] = 'center';
var u2367 = document.getElementById('u2367');

u2367.style.cursor = 'pointer';
if (bIE) u2367.attachEvent("onclick", Clicku2367);
else u2367.addEventListener("click", Clicku2367, true);
function Clicku2367(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd5u2381','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u2190 = document.getElementById('u2190');
gv_vAlignTable['u2190'] = 'center';
var u2369 = document.getElementById('u2369');

u2369.style.cursor = 'pointer';
if (bIE) u2369.attachEvent("onclick", Clicku2369);
else u2369.addEventListener("click", Clicku2369, true);
function Clicku2369(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd5u1432','none','',500,'swing','left',200);

}

}

var u2192 = document.getElementById('u2192');
gv_vAlignTable['u2192'] = 'center';
var u2193 = document.getElementById('u2193');

u2193.style.cursor = 'pointer';
if (bIE) u2193.attachEvent("onclick", Clicku2193);
else u2193.addEventListener("click", Clicku2193, true);
function Clicku2193(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd2u2084','none','',500,'swing','up',150);

}

}

var u2198 = document.getElementById('u2198');
gv_vAlignTable['u2198'] = 'center';
var u2580 = document.getElementById('u2580');
gv_vAlignTable['u2580'] = 'center';
var u2372 = document.getElementById('u2372');
gv_vAlignTable['u2372'] = 'center';
var u2373 = document.getElementById('u2373');

u2373.style.cursor = 'pointer';
if (bIE) u2373.attachEvent("onclick", Clicku2373);
else u2373.addEventListener("click", Clicku2373, true);
function Clicku2373(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd3u1432','none','',500,'swing','left',200);

}

}

var u2374 = document.getElementById('u2374');
gv_vAlignTable['u2374'] = 'center';
var u2375 = document.getElementById('u2375');

u2375.style.cursor = 'pointer';
if (bIE) u2375.attachEvent("onclick", Clicku2375);
else u2375.addEventListener("click", Clicku2375, true);
function Clicku2375(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd2u1432','none','',500,'swing','left',200);

}

}

var u2376 = document.getElementById('u2376');
gv_vAlignTable['u2376'] = 'center';
var u2377 = document.getElementById('u2377');

u2377.style.cursor = 'pointer';
if (bIE) u2377.attachEvent("onclick", Clicku2377);
else u2377.addEventListener("click", Clicku2377, true);
function Clicku2377(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd1u1432','none','',500,'swing','left',200);

}

}

var u2378 = document.getElementById('u2378');
gv_vAlignTable['u2378'] = 'center';
var u2379 = document.getElementById('u2379');

u2379.style.cursor = 'pointer';
if (bIE) u2379.attachEvent("onclick", Clicku2379);
else u2379.addEventListener("click", Clicku2379, true);
function Clicku2379(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelState('u1432', 'pd0u1432','none','',500,'swing','left',200);

}

}

var u2589 = document.getElementById('u2589');

var u2590 = document.getElementById('u2590');
gv_vAlignTable['u2590'] = 'center';
var u2591 = document.getElementById('u2591');
gv_vAlignTable['u2591'] = 'top';
var u2592 = document.getElementById('u2592');

var u2593 = document.getElementById('u2593');
gv_vAlignTable['u2593'] = 'center';
var u2594 = document.getElementById('u2594');
gv_vAlignTable['u2594'] = 'top';
var u2595 = document.getElementById('u2595');

var u2596 = document.getElementById('u2596');
gv_vAlignTable['u2596'] = 'center';
var u2597 = document.getElementById('u2597');
gv_vAlignTable['u2597'] = 'top';
var u2598 = document.getElementById('u2598');

var u2599 = document.getElementById('u2599');
gv_vAlignTable['u2599'] = 'center';
var u2392 = document.getElementById('u2392');
gv_vAlignTable['u2392'] = 'top';
var u2393 = document.getElementById('u2393');

var u2394 = document.getElementById('u2394');
gv_vAlignTable['u2394'] = 'center';
var u2395 = document.getElementById('u2395');
gv_vAlignTable['u2395'] = 'top';
var u2396 = document.getElementById('u2396');

var u2397 = document.getElementById('u2397');
gv_vAlignTable['u2397'] = 'center';
var u2398 = document.getElementById('u2398');
gv_vAlignTable['u2398'] = 'top';
var u600 = document.getElementById('u600');

u600.style.cursor = 'pointer';
if (bIE) u600.attachEvent("onclick", Clicku600);
else u600.addEventListener("click", Clicku600, true);
function Clicku600(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u597','hidden','none',500);

}

}

var u601 = document.getElementById('u601');
gv_vAlignTable['u601'] = 'center';
var u602 = document.getElementById('u602');

u602.style.cursor = 'pointer';
if (bIE) u602.attachEvent("onclick", Clicku602);
else u602.addEventListener("click", Clicku602, true);
function Clicku602(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u597','hidden','none',500);

}

}

var u603 = document.getElementById('u603');
gv_vAlignTable['u603'] = 'center';
var u604 = document.getElementById('u604');

var u605 = document.getElementById('u605');
gv_vAlignTable['u605'] = 'center';
var u606 = document.getElementById('u606');

var u607 = document.getElementById('u607');
gv_vAlignTable['u607'] = 'center';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'top';
var u609 = document.getElementById('u609');
gv_vAlignTable['u609'] = 'top';
var u1931 = document.getElementById('u1931');

var u1932 = document.getElementById('u1932');
gv_vAlignTable['u1932'] = 'center';
var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'top';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'top';
var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'top';
var u613 = document.getElementById('u613');

var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'center';
var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'top';
var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'top';
var u618 = document.getElementById('u618');
gv_vAlignTable['u618'] = 'top';
var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'top';
var u1943 = document.getElementById('u1943');
gv_vAlignTable['u1943'] = 'center';
var u620 = document.getElementById('u620');

var u621 = document.getElementById('u621');
gv_vAlignTable['u621'] = 'center';
var u622 = document.getElementById('u622');

var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'center';
var u624 = document.getElementById('u624');

var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'center';
var u626 = document.getElementById('u626');
gv_vAlignTable['u626'] = 'top';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u628 = document.getElementById('u628');
gv_vAlignTable['u628'] = 'top';
var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'top';
var u1955 = document.getElementById('u1955');
gv_vAlignTable['u1955'] = 'center';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u631 = document.getElementById('u631');

var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'center';
var u633 = document.getElementById('u633');

var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'center';
var u635 = document.getElementById('u635');

u635.style.cursor = 'pointer';
if (bIE) u635.attachEvent("onclick", Clicku635);
else u635.addEventListener("click", Clicku635, true);
function Clicku635(e)
{
windowEvent = e;


if (true) {

	MoveWidgetTo('u597', 300,50,'none',500);

	SetPanelState('u597', 'pd0u597','none','',500,'none','',500);

	SetPanelVisibility('u597','','fade',200);

}

}

var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'center';
var u637 = document.getElementById('u637');

u637.style.cursor = 'pointer';
if (bIE) u637.attachEvent("onclick", Clicku637);
else u637.addEventListener("click", Clicku637, true);
function Clicku637(e)
{
windowEvent = e;


if (true) {

	MoveWidgetTo('u597', 410,50,'none',500);

	SetPanelState('u597', 'pd0u597','none','',500,'none','',500);

	SetPanelVisibility('u597','','fade',200);

}

}

var u638 = document.getElementById('u638');
gv_vAlignTable['u638'] = 'center';
var u639 = document.getElementById('u639');

var u1966 = document.getElementById('u1966');
gv_vAlignTable['u1966'] = 'center';
var u640 = document.getElementById('u640');

var u641 = document.getElementById('u641');
gv_vAlignTable['u641'] = 'center';
var u642 = document.getElementById('u642');
gv_vAlignTable['u642'] = 'top';
var u643 = document.getElementById('u643');
gv_vAlignTable['u643'] = 'top';
var u644 = document.getElementById('u644');

var u645 = document.getElementById('u645');

var u646 = document.getElementById('u646');
gv_vAlignTable['u646'] = 'center';
var u647 = document.getElementById('u647');

var u648 = document.getElementById('u648');
gv_vAlignTable['u648'] = 'center';
var u649 = document.getElementById('u649');

var u650 = document.getElementById('u650');
gv_vAlignTable['u650'] = 'center';
var u651 = document.getElementById('u651');
gv_vAlignTable['u651'] = 'top';
var u652 = document.getElementById('u652');

var u653 = document.getElementById('u653');
gv_vAlignTable['u653'] = 'center';
var u654 = document.getElementById('u654');

var u655 = document.getElementById('u655');
gv_vAlignTable['u655'] = 'center';
var u656 = document.getElementById('u656');
gv_vAlignTable['u656'] = 'top';
var u657 = document.getElementById('u657');

var u658 = document.getElementById('u658');
gv_vAlignTable['u658'] = 'center';
var u659 = document.getElementById('u659');

var u1402 = document.getElementById('u1402');

var u1403 = document.getElementById('u1403');
gv_vAlignTable['u1403'] = 'center';
var u1404 = document.getElementById('u1404');

var u1405 = document.getElementById('u1405');
gv_vAlignTable['u1405'] = 'center';
var u1406 = document.getElementById('u1406');

u1406.style.cursor = 'pointer';
if (bIE) u1406.attachEvent("onclick", Clicku1406);
else u1406.addEventListener("click", Clicku1406, true);
function Clicku1406(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1407 = document.getElementById('u1407');
gv_vAlignTable['u1407'] = 'center';
var u1408 = document.getElementById('u1408');

u1408.style.cursor = 'pointer';
if (bIE) u1408.attachEvent("onclick", Clicku1408);
else u1408.addEventListener("click", Clicku1408, true);
function Clicku1408(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1307','hidden','none',500);

}

}

var u1409 = document.getElementById('u1409');
gv_vAlignTable['u1409'] = 'center';
var u660 = document.getElementById('u660');
gv_vAlignTable['u660'] = 'center';
var u661 = document.getElementById('u661');

var u662 = document.getElementById('u662');
gv_vAlignTable['u662'] = 'center';
var u663 = document.getElementById('u663');
gv_vAlignTable['u663'] = 'top';
var u664 = document.getElementById('u664');

var u665 = document.getElementById('u665');
gv_vAlignTable['u665'] = 'center';
var u666 = document.getElementById('u666');

var u667 = document.getElementById('u667');
gv_vAlignTable['u667'] = 'center';
var u668 = document.getElementById('u668');
gv_vAlignTable['u668'] = 'top';
var u669 = document.getElementById('u669');

var u1412 = document.getElementById('u1412');

var u1413 = document.getElementById('u1413');
gv_vAlignTable['u1413'] = 'center';
var u1414 = document.getElementById('u1414');
gv_vAlignTable['u1414'] = 'top';
var u1415 = document.getElementById('u1415');
gv_vAlignTable['u1415'] = 'top';
var u1416 = document.getElementById('u1416');
gv_vAlignTable['u1416'] = 'top';
var u1417 = document.getElementById('u1417');
gv_vAlignTable['u1417'] = 'top';
var u1418 = document.getElementById('u1418');
gv_vAlignTable['u1418'] = 'top';
var u1419 = document.getElementById('u1419');

var u670 = document.getElementById('u670');
gv_vAlignTable['u670'] = 'center';
var u671 = document.getElementById('u671');

var u672 = document.getElementById('u672');
gv_vAlignTable['u672'] = 'center';
var u673 = document.getElementById('u673');
gv_vAlignTable['u673'] = 'top';
var u674 = document.getElementById('u674');

var u675 = document.getElementById('u675');
gv_vAlignTable['u675'] = 'center';
var u676 = document.getElementById('u676');

var u677 = document.getElementById('u677');
gv_vAlignTable['u677'] = 'center';
var u1420 = document.getElementById('u1420');
gv_vAlignTable['u1420'] = 'center';
var u679 = document.getElementById('u679');

var u1422 = document.getElementById('u1422');
gv_vAlignTable['u1422'] = 'top';
var u1423 = document.getElementById('u1423');
gv_vAlignTable['u1423'] = 'top';
var u1424 = document.getElementById('u1424');
gv_vAlignTable['u1424'] = 'top';
var u1425 = document.getElementById('u1425');
gv_vAlignTable['u1425'] = 'top';
var u1426 = document.getElementById('u1426');

var u1427 = document.getElementById('u1427');
gv_vAlignTable['u1427'] = 'center';
var u1428 = document.getElementById('u1428');

var u1429 = document.getElementById('u1429');
gv_vAlignTable['u1429'] = 'center';
var u680 = document.getElementById('u680');
gv_vAlignTable['u680'] = 'center';
var u681 = document.getElementById('u681');

var u682 = document.getElementById('u682');
gv_vAlignTable['u682'] = 'center';
var u683 = document.getElementById('u683');
gv_vAlignTable['u683'] = 'top';
var u684 = document.getElementById('u684');

var u685 = document.getElementById('u685');
gv_vAlignTable['u685'] = 'center';
var u686 = document.getElementById('u686');

var u687 = document.getElementById('u687');
gv_vAlignTable['u687'] = 'center';
var u688 = document.getElementById('u688');
gv_vAlignTable['u688'] = 'top';
var u689 = document.getElementById('u689');

var u1432 = document.getElementById('u1432');

var u1433 = document.getElementById('u1433');

var u1434 = document.getElementById('u1434');
gv_vAlignTable['u1434'] = 'center';
var u1435 = document.getElementById('u1435');

var u1436 = document.getElementById('u1436');
gv_vAlignTable['u1436'] = 'center';
var u1437 = document.getElementById('u1437');
gv_vAlignTable['u1437'] = 'top';
var u1438 = document.getElementById('u1438');
gv_vAlignTable['u1438'] = 'top';
var u1439 = document.getElementById('u1439');
gv_vAlignTable['u1439'] = 'top';
var u690 = document.getElementById('u690');
gv_vAlignTable['u690'] = 'center';
var u691 = document.getElementById('u691');

var u692 = document.getElementById('u692');
gv_vAlignTable['u692'] = 'center';
var u693 = document.getElementById('u693');
gv_vAlignTable['u693'] = 'top';
var u694 = document.getElementById('u694');

var u695 = document.getElementById('u695');
gv_vAlignTable['u695'] = 'center';
var u696 = document.getElementById('u696');

var u697 = document.getElementById('u697');
gv_vAlignTable['u697'] = 'center';
var u698 = document.getElementById('u698');
gv_vAlignTable['u698'] = 'top';
var u699 = document.getElementById('u699');

var u1442 = document.getElementById('u1442');

var u1443 = document.getElementById('u1443');
gv_vAlignTable['u1443'] = 'center';
var u1444 = document.getElementById('u1444');
gv_vAlignTable['u1444'] = 'top';
var u1445 = document.getElementById('u1445');
gv_vAlignTable['u1445'] = 'top';
var u1446 = document.getElementById('u1446');
gv_vAlignTable['u1446'] = 'top';
var u1447 = document.getElementById('u1447');
gv_vAlignTable['u1447'] = 'top';
var u1448 = document.getElementById('u1448');
gv_vAlignTable['u1448'] = 'top';
var u1449 = document.getElementById('u1449');

var u1450 = document.getElementById('u1450');
gv_vAlignTable['u1450'] = 'center';
var u1451 = document.getElementById('u1451');
gv_vAlignTable['u1451'] = 'top';
var u1452 = document.getElementById('u1452');
gv_vAlignTable['u1452'] = 'top';
var u1453 = document.getElementById('u1453');
gv_vAlignTable['u1453'] = 'top';
var u1454 = document.getElementById('u1454');
gv_vAlignTable['u1454'] = 'top';
var u1455 = document.getElementById('u1455');
gv_vAlignTable['u1455'] = 'top';
var u1456 = document.getElementById('u1456');

var u1457 = document.getElementById('u1457');
gv_vAlignTable['u1457'] = 'center';
var u1458 = document.getElementById('u1458');
gv_vAlignTable['u1458'] = 'top';
var u1459 = document.getElementById('u1459');
gv_vAlignTable['u1459'] = 'top';
var u1460 = document.getElementById('u1460');
gv_vAlignTable['u1460'] = 'top';
var u1461 = document.getElementById('u1461');
gv_vAlignTable['u1461'] = 'top';
var u1462 = document.getElementById('u1462');
gv_vAlignTable['u1462'] = 'top';
var u1463 = document.getElementById('u1463');

var u1464 = document.getElementById('u1464');
gv_vAlignTable['u1464'] = 'center';
var u1465 = document.getElementById('u1465');
gv_vAlignTable['u1465'] = 'top';
var u1466 = document.getElementById('u1466');
gv_vAlignTable['u1466'] = 'top';
var u1467 = document.getElementById('u1467');
gv_vAlignTable['u1467'] = 'top';
var u1468 = document.getElementById('u1468');
gv_vAlignTable['u1468'] = 'top';
var u1469 = document.getElementById('u1469');
gv_vAlignTable['u1469'] = 'top';
var u1351 = document.getElementById('u1351');
gv_vAlignTable['u1351'] = 'center';
var u1470 = document.getElementById('u1470');

var u879 = document.getElementById('u879');
gv_vAlignTable['u879'] = 'top';
var u1472 = document.getElementById('u1472');

var u1473 = document.getElementById('u1473');
gv_vAlignTable['u1473'] = 'center';
var u1474 = document.getElementById('u1474');

var u1475 = document.getElementById('u1475');
gv_vAlignTable['u1475'] = 'center';
var u1476 = document.getElementById('u1476');

var u1477 = document.getElementById('u1477');
gv_vAlignTable['u1477'] = 'center';
var u1478 = document.getElementById('u1478');

var u1479 = document.getElementById('u1479');
gv_vAlignTable['u1479'] = 'center';
var u1360 = document.getElementById('u1360');

var u1362 = document.getElementById('u1362');

var u1480 = document.getElementById('u1480');

var u1481 = document.getElementById('u1481');
gv_vAlignTable['u1481'] = 'center';
var u889 = document.getElementById('u889');
gv_vAlignTable['u889'] = 'top';
var u1483 = document.getElementById('u1483');

var u1484 = document.getElementById('u1484');
gv_vAlignTable['u1484'] = 'center';
var u1485 = document.getElementById('u1485');

var u1486 = document.getElementById('u1486');
gv_vAlignTable['u1486'] = 'center';
var u1487 = document.getElementById('u1487');

var u1488 = document.getElementById('u1488');
gv_vAlignTable['u1488'] = 'center';
var u1489 = document.getElementById('u1489');

u1489.style.cursor = 'pointer';
if (bIE) u1489.attachEvent("onclick", Clicku1489);
else u1489.addEventListener("click", Clicku1489, true);
function Clicku1489(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

SetGlobalVariableValue('$pubfrom', 'temp');

}

}

var u890 = document.getElementById('u890');

var u891 = document.getElementById('u891');
gv_vAlignTable['u891'] = 'center';
var u892 = document.getElementById('u892');

var u1490 = document.getElementById('u1490');
gv_vAlignTable['u1490'] = 'center';
var u1491 = document.getElementById('u1491');

u1491.style.cursor = 'pointer';
if (bIE) u1491.attachEvent("onclick", Clicku1491);
else u1491.addEventListener("click", Clicku1491, true);
function Clicku1491(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

SetGlobalVariableValue('$pubfrom', 'temp');

}

}

var u1492 = document.getElementById('u1492');
gv_vAlignTable['u1492'] = 'center';
var u899 = document.getElementById('u899');

var u1494 = document.getElementById('u1494');
gv_vAlignTable['u1494'] = 'center';
var u1495 = document.getElementById('u1495');

u1495.style.cursor = 'pointer';
if (bIE) u1495.attachEvent("onclick", Clicku1495);
else u1495.addEventListener("click", Clicku1495, true);
function Clicku1495(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

SetGlobalVariableValue('$pubfrom', 'temp');

}

}

var u1496 = document.getElementById('u1496');
gv_vAlignTable['u1496'] = 'center';
var u1497 = document.getElementById('u1497');

u1497.style.cursor = 'pointer';
if (bIE) u1497.attachEvent("onclick", Clicku1497);
else u1497.addEventListener("click", Clicku1497, true);
function Clicku1497(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

SetGlobalVariableValue('$pubfrom', 'temp');

}

}

var u1498 = document.getElementById('u1498');
gv_vAlignTable['u1498'] = 'center';
var u1499 = document.getElementById('u1499');

var u1380 = document.getElementById('u1380');
gv_vAlignTable['u1380'] = 'top';
var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u2448 = document.getElementById('u2448');
gv_vAlignTable['u2448'] = 'top';
var u2209 = document.getElementById('u2209');
gv_vAlignTable['u2209'] = 'center';
var u2600 = document.getElementById('u2600');
gv_vAlignTable['u2600'] = 'top';
var u2601 = document.getElementById('u2601');

var u2602 = document.getElementById('u2602');
gv_vAlignTable['u2602'] = 'center';
var u2603 = document.getElementById('u2603');
gv_vAlignTable['u2603'] = 'top';
var u2604 = document.getElementById('u2604');

var u2605 = document.getElementById('u2605');
gv_vAlignTable['u2605'] = 'center';
var u2606 = document.getElementById('u2606');
gv_vAlignTable['u2606'] = 'top';
var u2607 = document.getElementById('u2607');

var u2608 = document.getElementById('u2608');
gv_vAlignTable['u2608'] = 'center';
var u2609 = document.getElementById('u2609');
gv_vAlignTable['u2609'] = 'top';
var u2610 = document.getElementById('u2610');

var u2611 = document.getElementById('u2611');
gv_vAlignTable['u2611'] = 'center';
var u2612 = document.getElementById('u2612');
gv_vAlignTable['u2612'] = 'top';
var u2613 = document.getElementById('u2613');

var u2614 = document.getElementById('u2614');
gv_vAlignTable['u2614'] = 'top';
var u2615 = document.getElementById('u2615');
gv_vAlignTable['u2615'] = 'top';
var u2616 = document.getElementById('u2616');

var u2617 = document.getElementById('u2617');
gv_vAlignTable['u2617'] = 'center';
var u2618 = document.getElementById('u2618');

var u2619 = document.getElementById('u2619');
gv_vAlignTable['u2619'] = 'center';
var u2401 = document.getElementById('u2401');
gv_vAlignTable['u2401'] = 'top';
var u2402 = document.getElementById('u2402');

var u2403 = document.getElementById('u2403');
gv_vAlignTable['u2403'] = 'center';
var u2404 = document.getElementById('u2404');
gv_vAlignTable['u2404'] = 'top';
var u2405 = document.getElementById('u2405');
gv_vAlignTable['u2405'] = 'top';
var u450 = document.getElementById('u450');

u450.style.cursor = 'pointer';
if (bIE) u450.attachEvent("onclick", Clicku450);
else u450.addEventListener("click", Clicku450, true);
function Clicku450(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd4u7','fade','',150,'fade','',150);

}

}

var u2407 = document.getElementById('u2407');

var u2408 = document.getElementById('u2408');
gv_vAlignTable['u2408'] = 'center';
var u2620 = document.getElementById('u2620');

var u2621 = document.getElementById('u2621');
gv_vAlignTable['u2621'] = 'center';
var u2622 = document.getElementById('u2622');

u2622.style.cursor = 'pointer';
if (bIE) u2622.attachEvent("onclick", Clicku2622);
else u2622.addEventListener("click", Clicku2622, true);
function Clicku2622(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2613', 'pd0u2613','swing','left',150,'swing','left',150);

}

}

var u2623 = document.getElementById('u2623');
gv_vAlignTable['u2623'] = 'center';
var u2624 = document.getElementById('u2624');
gv_vAlignTable['u2624'] = 'top';
var u2625 = document.getElementById('u2625');
gv_vAlignTable['u2625'] = 'top';
var u2626 = document.getElementById('u2626');
gv_vAlignTable['u2626'] = 'top';
var u458 = document.getElementById('u458');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u2629 = document.getElementById('u2629');
gv_vAlignTable['u2629'] = 'top';
var u2412 = document.getElementById('u2412');
gv_vAlignTable['u2412'] = 'center';
var u2413 = document.getElementById('u2413');

var u2414 = document.getElementById('u2414');
gv_vAlignTable['u2414'] = 'center';
var u2415 = document.getElementById('u2415');

var u2416 = document.getElementById('u2416');
gv_vAlignTable['u2416'] = 'center';
var u2417 = document.getElementById('u2417');

var u2630 = document.getElementById('u2630');
gv_vAlignTable['u2630'] = 'top';
var u462 = document.getElementById('u462');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u2633 = document.getElementById('u2633');
gv_vAlignTable['u2633'] = 'top';
var u2634 = document.getElementById('u2634');
gv_vAlignTable['u2634'] = 'top';
var u2635 = document.getElementById('u2635');
gv_vAlignTable['u2635'] = 'top';
var u2636 = document.getElementById('u2636');
gv_vAlignTable['u2636'] = 'top';
var u2637 = document.getElementById('u2637');
gv_vAlignTable['u2637'] = 'top';
var u2638 = document.getElementById('u2638');
gv_vAlignTable['u2638'] = 'top';
var u468 = document.getElementById('u468');

var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u2421 = document.getElementById('u2421');

var u2422 = document.getElementById('u2422');

var u2423 = document.getElementById('u2423');
gv_vAlignTable['u2423'] = 'center';
var u2424 = document.getElementById('u2424');

var u2425 = document.getElementById('u2425');
gv_vAlignTable['u2425'] = 'center';
var u2426 = document.getElementById('u2426');
gv_vAlignTable['u2426'] = 'top';
var u2640 = document.getElementById('u2640');
gv_vAlignTable['u2640'] = 'top';
var u2641 = document.getElementById('u2641');
gv_vAlignTable['u2641'] = 'top';
var u2642 = document.getElementById('u2642');
gv_vAlignTable['u2642'] = 'top';
var u2643 = document.getElementById('u2643');
gv_vAlignTable['u2643'] = 'top';
var u2644 = document.getElementById('u2644');

var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u475 = document.getElementById('u475');

var u2647 = document.getElementById('u2647');
gv_vAlignTable['u2647'] = 'center';
var u2648 = document.getElementById('u2648');

var u2649 = document.getElementById('u2649');
gv_vAlignTable['u2649'] = 'center';
var u478 = document.getElementById('u478');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u2431 = document.getElementById('u2431');
gv_vAlignTable['u2431'] = 'top';
var u2432 = document.getElementById('u2432');
gv_vAlignTable['u2432'] = 'top';
var u2433 = document.getElementById('u2433');
gv_vAlignTable['u2433'] = 'top';
var u2434 = document.getElementById('u2434');

var u2435 = document.getElementById('u2435');
gv_vAlignTable['u2435'] = 'center';
var u2650 = document.getElementById('u2650');

u2650.style.cursor = 'pointer';
if (bIE) u2650.attachEvent("onclick", Clicku2650);
else u2650.addEventListener("click", Clicku2650, true);
function Clicku2650(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2613', 'pd2u2613','swing','left',150,'swing','left',150);

}

}

var u2651 = document.getElementById('u2651');
gv_vAlignTable['u2651'] = 'center';
var u2652 = document.getElementById('u2652');
gv_vAlignTable['u2652'] = 'top';
var u2653 = document.getElementById('u2653');
gv_vAlignTable['u2653'] = 'top';
var u2654 = document.getElementById('u2654');

var u2655 = document.getElementById('u2655');
gv_vAlignTable['u2655'] = 'center';
var u2656 = document.getElementById('u2656');

var u2657 = document.getElementById('u2657');
gv_vAlignTable['u2657'] = 'center';
var u2658 = document.getElementById('u2658');

var u2659 = document.getElementById('u2659');
gv_vAlignTable['u2659'] = 'center';
var u488 = document.getElementById('u488');

var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u2440 = document.getElementById('u2440');

var u2442 = document.getElementById('u2442');
gv_vAlignTable['u2442'] = 'top';
var u2443 = document.getElementById('u2443');

var u2444 = document.getElementById('u2444');
gv_vAlignTable['u2444'] = 'center';
var u2660 = document.getElementById('u2660');

u2660.style.cursor = 'pointer';
if (bIE) u2660.attachEvent("onclick", Clicku2660);
else u2660.addEventListener("click", Clicku2660, true);
function Clicku2660(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2613', 'pd1u2613','swing','left',150,'swing','left',150);

}

}

var u2661 = document.getElementById('u2661');
gv_vAlignTable['u2661'] = 'center';
var u2662 = document.getElementById('u2662');

u2662.style.cursor = 'pointer';
if (bIE) u2662.attachEvent("onclick", Clicku2662);
else u2662.addEventListener("click", Clicku2662, true);
function Clicku2662(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u2664')) == (false)) {

	SetPanelVisibility('u2664','','none',500);

	SetPanelState('u2664', 'pd0u2664','none','',500,'swing','left',150);

}
else
if ((GetWidgetVisibility('u2664')) == (true)) {

	SetPanelVisibility('u2664','hidden','none',500);

}

}

var u2663 = document.getElementById('u2663');
gv_vAlignTable['u2663'] = 'center';
var u2449 = document.getElementById('u2449');

var u2665 = document.getElementById('u2665');

u2665.style.cursor = 'pointer';
if (bIE) u2665.attachEvent("onclick", Clicku2665);
else u2665.addEventListener("click", Clicku2665, true);
function Clicku2665(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','hidden','none',500);

}

}

var u2666 = document.getElementById('u2666');
gv_vAlignTable['u2666'] = 'center';
var u2667 = document.getElementById('u2667');

u2667.style.cursor = 'pointer';
if (bIE) u2667.attachEvent("onclick", Clicku2667);
else u2667.addEventListener("click", Clicku2667, true);
function Clicku2667(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2664','hidden','none',500);

}

}

var u2668 = document.getElementById('u2668');
gv_vAlignTable['u2668'] = 'center';
var u2669 = document.getElementById('u2669');

u2669.style.cursor = 'pointer';
if (bIE) u2669.attachEvent("onclick", Clicku2669);
else u2669.addEventListener("click", Clicku2669, true);
function Clicku2669(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'none','',500);

	SetPanelVisibility('u2664','hidden','none',500);

}

}

var u498 = document.getElementById('u498');

var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u2452 = document.getElementById('u2452');

var u2453 = document.getElementById('u2453');
gv_vAlignTable['u2453'] = 'center';
var u2454 = document.getElementById('u2454');
gv_vAlignTable['u2454'] = 'top';
var u2455 = document.getElementById('u2455');

var u2456 = document.getElementById('u2456');
gv_vAlignTable['u2456'] = 'center';
var u2673 = document.getElementById('u2673');

var u2674 = document.getElementById('u2674');
gv_vAlignTable['u2674'] = 'center';
var u2675 = document.getElementById('u2675');

var u2676 = document.getElementById('u2676');
gv_vAlignTable['u2676'] = 'center';
var u2677 = document.getElementById('u2677');

u2677.style.cursor = 'pointer';
if (bIE) u2677.attachEvent("onclick", Clicku2677);
else u2677.addEventListener("click", Clicku2677, true);
function Clicku2677(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd1u2381','swing','down',200,'none','',500);

}

}

var u2678 = document.getElementById('u2678');
gv_vAlignTable['u2678'] = 'center';
var u2679 = document.getElementById('u2679');

var u2462 = document.getElementById('u2462');
gv_vAlignTable['u2462'] = 'top';
var u2680 = document.getElementById('u2680');
gv_vAlignTable['u2680'] = 'center';
var u2681 = document.getElementById('u2681');

var u2682 = document.getElementById('u2682');
gv_vAlignTable['u2682'] = 'center';
var u2683 = document.getElementById('u2683');

var u2282 = document.getElementById('u2282');

var u2685 = document.getElementById('u2685');

var u2686 = document.getElementById('u2686');
gv_vAlignTable['u2686'] = 'center';
var u2687 = document.getElementById('u2687');

var u2688 = document.getElementById('u2688');
gv_vAlignTable['u2688'] = 'center';
var u2689 = document.getElementById('u2689');

u2689.style.cursor = 'pointer';
if (bIE) u2689.attachEvent("onclick", Clicku2689);
else u2689.addEventListener("click", Clicku2689, true);
function Clicku2689(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2709','','none',500);

}

}

var u2690 = document.getElementById('u2690');
gv_vAlignTable['u2690'] = 'center';
var u2691 = document.getElementById('u2691');

u2691.style.cursor = 'pointer';
if (bIE) u2691.attachEvent("onclick", Clicku2691);
else u2691.addEventListener("click", Clicku2691, true);
function Clicku2691(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u2691')) {
SetWidgetNotSelected('u2691'); } else {
SetWidgetSelected('u2691');
}
}

}

var u2692 = document.getElementById('u2692');
gv_vAlignTable['u2692'] = 'center';
var u2693 = document.getElementById('u2693');
gv_vAlignTable['u2693'] = 'top';
var u2290 = document.getElementById('u2290');

var u2695 = document.getElementById('u2695');
gv_vAlignTable['u2695'] = 'center';
var u2696 = document.getElementById('u2696');
gv_vAlignTable['u2696'] = 'top';
var u2697 = document.getElementById('u2697');

u2697.style.cursor = 'pointer';
if (bIE) u2697.attachEvent("onclick", Clicku2697);
else u2697.addEventListener("click", Clicku2697, true);
function Clicku2697(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd0u6','none','',500,'none','',500);

	SetPanelVisibility('u2381','hidden','none',500);

}

}

var u2698 = document.getElementById('u2698');
gv_vAlignTable['u2698'] = 'center';
var u2699 = document.getElementById('u2699');

var u2481 = document.getElementById('u2481');
gv_vAlignTable['u2481'] = 'center';
var u2482 = document.getElementById('u2482');

var u2483 = document.getElementById('u2483');
gv_vAlignTable['u2483'] = 'center';
var u2484 = document.getElementById('u2484');

var u2485 = document.getElementById('u2485');
gv_vAlignTable['u2485'] = 'center';
var u2486 = document.getElementById('u2486');

var u2487 = document.getElementById('u2487');
gv_vAlignTable['u2487'] = 'center';
var u2488 = document.getElementById('u2488');

var u2489 = document.getElementById('u2489');
gv_vAlignTable['u2489'] = 'center';
var u700 = document.getElementById('u700');
gv_vAlignTable['u700'] = 'center';
var u701 = document.getElementById('u701');

var u702 = document.getElementById('u702');
gv_vAlignTable['u702'] = 'center';
var u703 = document.getElementById('u703');
gv_vAlignTable['u703'] = 'top';
var u704 = document.getElementById('u704');

var u705 = document.getElementById('u705');
gv_vAlignTable['u705'] = 'center';
var u706 = document.getElementById('u706');

var u707 = document.getElementById('u707');
gv_vAlignTable['u707'] = 'center';
var u708 = document.getElementById('u708');
gv_vAlignTable['u708'] = 'top';
var u709 = document.getElementById('u709');

var u2492 = document.getElementById('u2492');

var u2493 = document.getElementById('u2493');
gv_vAlignTable['u2493'] = 'center';
var u2494 = document.getElementById('u2494');

var u2495 = document.getElementById('u2495');
gv_vAlignTable['u2495'] = 'center';
var u2496 = document.getElementById('u2496');

var u2497 = document.getElementById('u2497');

u2497.style.cursor = 'pointer';
if (bIE) u2497.attachEvent("onclick", Clicku2497);
else u2497.addEventListener("click", Clicku2497, true);
function Clicku2497(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u2498 = document.getElementById('u2498');
gv_vAlignTable['u2498'] = 'center';
var u678 = document.getElementById('u678');
gv_vAlignTable['u678'] = 'top';
var u710 = document.getElementById('u710');
gv_vAlignTable['u710'] = 'center';
var u711 = document.getElementById('u711');

var u712 = document.getElementById('u712');
gv_vAlignTable['u712'] = 'center';
var u713 = document.getElementById('u713');
gv_vAlignTable['u713'] = 'top';
var u714 = document.getElementById('u714');

var u715 = document.getElementById('u715');
gv_vAlignTable['u715'] = 'center';
var u716 = document.getElementById('u716');
gv_vAlignTable['u716'] = 'top';
var u717 = document.getElementById('u717');

var u718 = document.getElementById('u718');
gv_vAlignTable['u718'] = 'center';
var u719 = document.getElementById('u719');
gv_vAlignTable['u719'] = 'top';
var u720 = document.getElementById('u720');

var u721 = document.getElementById('u721');
gv_vAlignTable['u721'] = 'center';
var u722 = document.getElementById('u722');
gv_vAlignTable['u722'] = 'top';
var u723 = document.getElementById('u723');

var u724 = document.getElementById('u724');
gv_vAlignTable['u724'] = 'center';
var u725 = document.getElementById('u725');
gv_vAlignTable['u725'] = 'top';
var u726 = document.getElementById('u726');

var u727 = document.getElementById('u727');
gv_vAlignTable['u727'] = 'center';
var u728 = document.getElementById('u728');
gv_vAlignTable['u728'] = 'top';
var u729 = document.getElementById('u729');

var u730 = document.getElementById('u730');
gv_vAlignTable['u730'] = 'center';
var u731 = document.getElementById('u731');
gv_vAlignTable['u731'] = 'top';
var u732 = document.getElementById('u732');

var u733 = document.getElementById('u733');
gv_vAlignTable['u733'] = 'center';
var u734 = document.getElementById('u734');
gv_vAlignTable['u734'] = 'top';
var u735 = document.getElementById('u735');

var u736 = document.getElementById('u736');
gv_vAlignTable['u736'] = 'center';
var u737 = document.getElementById('u737');

var u738 = document.getElementById('u738');
gv_vAlignTable['u738'] = 'center';
var u739 = document.getElementById('u739');
gv_vAlignTable['u739'] = 'top';
var u740 = document.getElementById('u740');

var u741 = document.getElementById('u741');
gv_vAlignTable['u741'] = 'center';
var u742 = document.getElementById('u742');
gv_vAlignTable['u742'] = 'top';
var u743 = document.getElementById('u743');

var u744 = document.getElementById('u744');
gv_vAlignTable['u744'] = 'center';
var u745 = document.getElementById('u745');
gv_vAlignTable['u745'] = 'top';
var u746 = document.getElementById('u746');

var u747 = document.getElementById('u747');
gv_vAlignTable['u747'] = 'center';
var u748 = document.getElementById('u748');
gv_vAlignTable['u748'] = 'top';
var u749 = document.getElementById('u749');

var u750 = document.getElementById('u750');
gv_vAlignTable['u750'] = 'center';
var u751 = document.getElementById('u751');
gv_vAlignTable['u751'] = 'top';
var u752 = document.getElementById('u752');

var u753 = document.getElementById('u753');
gv_vAlignTable['u753'] = 'center';
var u754 = document.getElementById('u754');
gv_vAlignTable['u754'] = 'top';
var u755 = document.getElementById('u755');

var u756 = document.getElementById('u756');
gv_vAlignTable['u756'] = 'center';
var u757 = document.getElementById('u757');
gv_vAlignTable['u757'] = 'top';
var u2002 = document.getElementById('u2002');
gv_vAlignTable['u2002'] = 'top';
var u2003 = document.getElementById('u2003');
gv_vAlignTable['u2003'] = 'top';
var u2004 = document.getElementById('u2004');
gv_vAlignTable['u2004'] = 'top';
var u2005 = document.getElementById('u2005');

var u2006 = document.getElementById('u2006');
gv_vAlignTable['u2006'] = 'center';
var u2007 = document.getElementById('u2007');
gv_vAlignTable['u2007'] = 'top';
var u2008 = document.getElementById('u2008');
gv_vAlignTable['u2008'] = 'top';
var u2009 = document.getElementById('u2009');
gv_vAlignTable['u2009'] = 'top';
var u1508 = document.getElementById('u1508');

var u1509 = document.getElementById('u1509');
gv_vAlignTable['u1509'] = 'center';
var u760 = document.getElementById('u760');
gv_vAlignTable['u760'] = 'top';
var u761 = document.getElementById('u761');

var u762 = document.getElementById('u762');
gv_vAlignTable['u762'] = 'center';
var u763 = document.getElementById('u763');

var u764 = document.getElementById('u764');
gv_vAlignTable['u764'] = 'center';
var u765 = document.getElementById('u765');

var u2010 = document.getElementById('u2010');
gv_vAlignTable['u2010'] = 'top';
var u2011 = document.getElementById('u2011');
gv_vAlignTable['u2011'] = 'top';
var u2012 = document.getElementById('u2012');

var u2013 = document.getElementById('u2013');
gv_vAlignTable['u2013'] = 'center';
var u2014 = document.getElementById('u2014');
gv_vAlignTable['u2014'] = 'top';
var u2015 = document.getElementById('u2015');
gv_vAlignTable['u2015'] = 'top';
var u2016 = document.getElementById('u2016');
gv_vAlignTable['u2016'] = 'top';
var u1515 = document.getElementById('u1515');

var u2018 = document.getElementById('u2018');
gv_vAlignTable['u2018'] = 'top';
var u2019 = document.getElementById('u2019');

var u1518 = document.getElementById('u1518');
gv_vAlignTable['u1518'] = 'top';
var u1519 = document.getElementById('u1519');
gv_vAlignTable['u1519'] = 'top';
var u770 = document.getElementById('u770');
gv_vAlignTable['u770'] = 'center';
var u771 = document.getElementById('u771');

var u772 = document.getElementById('u772');
gv_vAlignTable['u772'] = 'center';
var u773 = document.getElementById('u773');

var u774 = document.getElementById('u774');
gv_vAlignTable['u774'] = 'center';
var u775 = document.getElementById('u775');

var u2020 = document.getElementById('u2020');
gv_vAlignTable['u2020'] = 'center';
var u2021 = document.getElementById('u2021');
gv_vAlignTable['u2021'] = 'top';
var u2022 = document.getElementById('u2022');
gv_vAlignTable['u2022'] = 'top';
var u2023 = document.getElementById('u2023');
gv_vAlignTable['u2023'] = 'top';
var u2024 = document.getElementById('u2024');
gv_vAlignTable['u2024'] = 'top';
var u2025 = document.getElementById('u2025');
gv_vAlignTable['u2025'] = 'top';
var u2026 = document.getElementById('u2026');

var u1525 = document.getElementById('u1525');
gv_vAlignTable['u1525'] = 'top';
var u2028 = document.getElementById('u2028');
gv_vAlignTable['u2028'] = 'top';
var u2029 = document.getElementById('u2029');
gv_vAlignTable['u2029'] = 'top';
var u1528 = document.getElementById('u1528');
gv_vAlignTable['u1528'] = 'top';
var u1529 = document.getElementById('u1529');

var u1400 = document.getElementById('u1400');

var u1401 = document.getElementById('u1401');
gv_vAlignTable['u1401'] = 'center';
var u780 = document.getElementById('u780');
gv_vAlignTable['u780'] = 'center';
var u781 = document.getElementById('u781');

var u782 = document.getElementById('u782');
gv_vAlignTable['u782'] = 'center';
var u783 = document.getElementById('u783');

var u784 = document.getElementById('u784');
gv_vAlignTable['u784'] = 'center';
var u785 = document.getElementById('u785');

var u2030 = document.getElementById('u2030');
gv_vAlignTable['u2030'] = 'top';
var u2031 = document.getElementById('u2031');
gv_vAlignTable['u2031'] = 'top';
var u2032 = document.getElementById('u2032');
gv_vAlignTable['u2032'] = 'top';
var u2033 = document.getElementById('u2033');

var u2034 = document.getElementById('u2034');
gv_vAlignTable['u2034'] = 'center';
var u2035 = document.getElementById('u2035');
gv_vAlignTable['u2035'] = 'top';
var u2036 = document.getElementById('u2036');
gv_vAlignTable['u2036'] = 'top';
var u1535 = document.getElementById('u1535');
gv_vAlignTable['u1535'] = 'top';
var u2038 = document.getElementById('u2038');
gv_vAlignTable['u2038'] = 'top';
var u2039 = document.getElementById('u2039');
gv_vAlignTable['u2039'] = 'top';
var u1538 = document.getElementById('u1538');
gv_vAlignTable['u1538'] = 'top';
var u1539 = document.getElementById('u1539');
gv_vAlignTable['u1539'] = 'top';
var u1410 = document.getElementById('u1410');

var u1411 = document.getElementById('u1411');
gv_vAlignTable['u1411'] = 'center';
var u791 = document.getElementById('u791');

var u792 = document.getElementById('u792');
gv_vAlignTable['u792'] = 'center';
var u793 = document.getElementById('u793');

var u794 = document.getElementById('u794');
gv_vAlignTable['u794'] = 'center';
var u795 = document.getElementById('u795');

var u2040 = document.getElementById('u2040');

var u2041 = document.getElementById('u2041');
gv_vAlignTable['u2041'] = 'center';
var u2042 = document.getElementById('u2042');
gv_vAlignTable['u2042'] = 'top';
var u2043 = document.getElementById('u2043');
gv_vAlignTable['u2043'] = 'top';
var u2044 = document.getElementById('u2044');
gv_vAlignTable['u2044'] = 'top';
var u2045 = document.getElementById('u2045');
gv_vAlignTable['u2045'] = 'top';
var u2046 = document.getElementById('u2046');
gv_vAlignTable['u2046'] = 'top';
var u1545 = document.getElementById('u1545');
gv_vAlignTable['u1545'] = 'top';
var u2048 = document.getElementById('u2048');
gv_vAlignTable['u2048'] = 'center';
var u2049 = document.getElementById('u2049');

var u1548 = document.getElementById('u1548');
gv_vAlignTable['u1548'] = 'top';
var u1549 = document.getElementById('u1549');
gv_vAlignTable['u1549'] = 'top';
var u1421 = document.getElementById('u1421');
gv_vAlignTable['u1421'] = 'top';
var u2050 = document.getElementById('u2050');
gv_vAlignTable['u2050'] = 'center';
var u2051 = document.getElementById('u2051');

var u2052 = document.getElementById('u2052');
gv_vAlignTable['u2052'] = 'center';
var u2053 = document.getElementById('u2053');

var u2054 = document.getElementById('u2054');
gv_vAlignTable['u2054'] = 'center';
var u1553 = document.getElementById('u1553');
gv_vAlignTable['u1553'] = 'top';
var u2056 = document.getElementById('u2056');
gv_vAlignTable['u2056'] = 'center';
var u1555 = document.getElementById('u1555');
gv_vAlignTable['u1555'] = 'top';
var u1556 = document.getElementById('u1556');
gv_vAlignTable['u1556'] = 'top';
var u2059 = document.getElementById('u2059');
gv_vAlignTable['u2059'] = 'top';
var u1558 = document.getElementById('u1558');
gv_vAlignTable['u1558'] = 'center';
var u1559 = document.getElementById('u1559');
gv_vAlignTable['u1559'] = 'top';
var u1430 = document.getElementById('u1430');

var u1431 = document.getElementById('u1431');
gv_vAlignTable['u1431'] = 'center';
var u2060 = document.getElementById('u2060');

var u2061 = document.getElementById('u2061');
gv_vAlignTable['u2061'] = 'center';
var u2062 = document.getElementById('u2062');

var u2063 = document.getElementById('u2063');
gv_vAlignTable['u2063'] = 'center';
var u2064 = document.getElementById('u2064');

var u2065 = document.getElementById('u2065');
gv_vAlignTable['u2065'] = 'center';
var u2066 = document.getElementById('u2066');

u2066.style.cursor = 'pointer';
if (bIE) u2066.attachEvent("onclick", Clicku2066);
else u2066.addEventListener("click", Clicku2066, true);
function Clicku2066(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 230,60,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u1565 = document.getElementById('u1565');
gv_vAlignTable['u1565'] = 'center';
var u2068 = document.getElementById('u2068');

u2068.style.cursor = 'pointer';
if (bIE) u2068.attachEvent("onclick", Clicku2068);
else u2068.addEventListener("click", Clicku2068, true);
function Clicku2068(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 455,60,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2069 = document.getElementById('u2069');
gv_vAlignTable['u2069'] = 'center';
var u1568 = document.getElementById('u1568');

var u1569 = document.getElementById('u1569');
gv_vAlignTable['u1569'] = 'center';
var u1440 = document.getElementById('u1440');
gv_vAlignTable['u1440'] = 'top';
var u1441 = document.getElementById('u1441');
gv_vAlignTable['u1441'] = 'top';
var u2070 = document.getElementById('u2070');

u2070.style.cursor = 'pointer';
if (bIE) u2070.attachEvent("onclick", Clicku2070);
else u2070.addEventListener("click", Clicku2070, true);
function Clicku2070(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 5,295,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2071 = document.getElementById('u2071');
gv_vAlignTable['u2071'] = 'center';
var u2072 = document.getElementById('u2072');

u2072.style.cursor = 'pointer';
if (bIE) u2072.attachEvent("onclick", Clicku2072);
else u2072.addEventListener("click", Clicku2072, true);
function Clicku2072(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 230,295,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2073 = document.getElementById('u2073');
gv_vAlignTable['u2073'] = 'center';
var u2074 = document.getElementById('u2074');

u2074.style.cursor = 'pointer';
if (bIE) u2074.attachEvent("onclick", Clicku2074);
else u2074.addEventListener("click", Clicku2074, true);
function Clicku2074(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 455,295,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2075 = document.getElementById('u2075');
gv_vAlignTable['u2075'] = 'center';
var u2076 = document.getElementById('u2076');

u2076.style.cursor = 'pointer';
if (bIE) u2076.attachEvent("onclick", Clicku2076);
else u2076.addEventListener("click", Clicku2076, true);
function Clicku2076(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 5,530,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u1575 = document.getElementById('u1575');
gv_vAlignTable['u1575'] = 'center';
var u2078 = document.getElementById('u2078');

u2078.style.cursor = 'pointer';
if (bIE) u2078.attachEvent("onclick", Clicku2078);
else u2078.addEventListener("click", Clicku2078, true);
function Clicku2078(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 230,530,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2079 = document.getElementById('u2079');
gv_vAlignTable['u2079'] = 'center';
var u1578 = document.getElementById('u1578');
gv_vAlignTable['u1578'] = 'center';
var u1579 = document.getElementById('u1579');

var u2080 = document.getElementById('u2080');

u2080.style.cursor = 'pointer';
if (bIE) u2080.attachEvent("onclick", Clicku2080);
else u2080.addEventListener("click", Clicku2080, true);
function Clicku2080(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 455,530,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2081 = document.getElementById('u2081');
gv_vAlignTable['u2081'] = 'center';
var u2082 = document.getElementById('u2082');

u2082.style.cursor = 'pointer';
if (bIE) u2082.attachEvent("onclick", Clicku2082);
else u2082.addEventListener("click", Clicku2082, true);
function Clicku2082(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','none',500);

	SetPanelState('u2084', 'pd0u2084','none','',500,'none','',500);

	MoveWidgetTo('u2084', 5,60,'none',500);

	SetPanelVisibility('u2084','','fade',100);

}

}

var u2083 = document.getElementById('u2083');
gv_vAlignTable['u2083'] = 'center';
var u2084 = document.getElementById('u2084');

var u2085 = document.getElementById('u2085');

var u1584 = document.getElementById('u1584');
gv_vAlignTable['u1584'] = 'center';
var u2087 = document.getElementById('u2087');

u2087.style.cursor = 'pointer';
if (bIE) u2087.attachEvent("onclick", Clicku2087);
else u2087.addEventListener("click", Clicku2087, true);
function Clicku2087(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd4u2084','swing','down',150,'none','',500);

}

}

var u1586 = document.getElementById('u1586');
gv_vAlignTable['u1586'] = 'center';
var u2089 = document.getElementById('u2089');

u2089.style.cursor = 'pointer';
if (bIE) u2089.attachEvent("onclick", Clicku2089);
else u2089.addEventListener("click", Clicku2089, true);
function Clicku2089(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd4u2084','swing','down',150,'none','',500);

}

}

var u1588 = document.getElementById('u1588');
gv_vAlignTable['u1588'] = 'center';
var u1589 = document.getElementById('u1589');

u1589.style.cursor = 'pointer';
if (bIE) u1589.attachEvent("onclick", Clicku1589);
else u1589.addEventListener("click", Clicku1589, true);
function Clicku1589(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u2090 = document.getElementById('u2090');
gv_vAlignTable['u2090'] = 'center';
var u2091 = document.getElementById('u2091');

var u2092 = document.getElementById('u2092');
gv_vAlignTable['u2092'] = 'center';
var u2093 = document.getElementById('u2093');

var u2094 = document.getElementById('u2094');
gv_vAlignTable['u2094'] = 'center';
var u2095 = document.getElementById('u2095');
gv_vAlignTable['u2095'] = 'top';
var u2096 = document.getElementById('u2096');
gv_vAlignTable['u2096'] = 'top';
var u1595 = document.getElementById('u1595');

u1595.style.cursor = 'pointer';
if (bIE) u1595.attachEvent("onclick", Clicku1595);
else u1595.addEventListener("click", Clicku1595, true);
function Clicku1595(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1596 = document.getElementById('u1596');
gv_vAlignTable['u1596'] = 'center';
var u1597 = document.getElementById('u1597');

u1597.style.cursor = 'pointer';
if (bIE) u1597.attachEvent("onclick", Clicku1597);
else u1597.addEventListener("click", Clicku1597, true);
function Clicku1597(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1598 = document.getElementById('u1598');
gv_vAlignTable['u1598'] = 'center';
var u1599 = document.getElementById('u1599');

u1599.style.cursor = 'pointer';
if (bIE) u1599.attachEvent("onclick", Clicku1599);
else u1599.addEventListener("click", Clicku1599, true);
function Clicku1599(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1471 = document.getElementById('u1471');
gv_vAlignTable['u1471'] = 'center';
var u100 = document.getElementById('u100');

u100.style.cursor = 'pointer';
if (bIE) u100.attachEvent("onclick", Clicku100);
else u100.addEventListener("click", Clicku100, true);
function Clicku100(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u102 = document.getElementById('u102');

u102.style.cursor = 'pointer';
if (bIE) u102.attachEvent("onclick", Clicku102);
else u102.addEventListener("click", Clicku102, true);
function Clicku102(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u104 = document.getElementById('u104');

u104.style.cursor = 'pointer';
if (bIE) u104.attachEvent("onclick", Clicku104);
else u104.addEventListener("click", Clicku104, true);
function Clicku104(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u106 = document.getElementById('u106');

u106.style.cursor = 'pointer';
if (bIE) u106.attachEvent("onclick", Clicku106);
else u106.addEventListener("click", Clicku106, true);
function Clicku106(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u108 = document.getElementById('u108');

u108.style.cursor = 'pointer';
if (bIE) u108.attachEvent("onclick", Clicku108);
else u108.addEventListener("click", Clicku108, true);
function Clicku108(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u1482 = document.getElementById('u1482');
gv_vAlignTable['u1482'] = 'top';
var u110 = document.getElementById('u110');

u110.style.cursor = 'pointer';
if (bIE) u110.attachEvent("onclick", Clicku110);
else u110.addEventListener("click", Clicku110, true);
function Clicku110(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

u112.style.cursor = 'pointer';
if (bIE) u112.attachEvent("onclick", Clicku112);
else u112.addEventListener("click", Clicku112, true);
function Clicku112(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');

u118.style.cursor = 'pointer';
if (bIE) u118.attachEvent("onclick", Clicku118);
else u118.addEventListener("click", Clicku118, true);
function Clicku118(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','fade','',150,'fade','',150);

}

}

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u1493 = document.getElementById('u1493');

u1493.style.cursor = 'pointer';
if (bIE) u1493.attachEvent("onclick", Clicku1493);
else u1493.addEventListener("click", Clicku1493, true);
function Clicku1493(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',200);

SetGlobalVariableValue('$pubfrom', 'temp');

}

}

var u120 = document.getElementById('u120');

u120.style.cursor = 'pointer';
if (bIE) u120.attachEvent("onclick", Clicku120);
else u120.addEventListener("click", Clicku120, true);
function Clicku120(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd1u7','fade','',150,'fade','',150);

}

}

var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u122 = document.getElementById('u122');

u122.style.cursor = 'pointer';
if (bIE) u122.attachEvent("onclick", Clicku122);
else u122.addEventListener("click", Clicku122, true);
function Clicku122(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd2u7','fade','',150,'fade','',150);

}

}

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u124 = document.getElementById('u124');

u124.style.cursor = 'pointer';
if (bIE) u124.attachEvent("onclick", Clicku124);
else u124.addEventListener("click", Clicku124, true);
function Clicku124(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd4u7','fade','',150,'fade','',150);

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'center';
var u126 = document.getElementById('u126');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u132 = document.getElementById('u132');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u142 = document.getElementById('u142');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u149 = document.getElementById('u149');

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u152 = document.getElementById('u152');

var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u159 = document.getElementById('u159');

var u2705 = document.getElementById('u2705');

u2705.style.cursor = 'pointer';
if (bIE) u2705.attachEvent("onclick", Clicku2705);
else u2705.addEventListener("click", Clicku2705, true);
function Clicku2705(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd2u2381','none','',500,'swing','up',200);

}

}

var u2706 = document.getElementById('u2706');
gv_vAlignTable['u2706'] = 'center';
var u2707 = document.getElementById('u2707');

var u2708 = document.getElementById('u2708');
gv_vAlignTable['u2708'] = 'center';
var u2709 = document.getElementById('u2709');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u162 = document.getElementById('u162');

var u2144 = document.getElementById('u2144');
gv_vAlignTable['u2144'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'top';
var u169 = document.getElementById('u169');

var u2715 = document.getElementById('u2715');

var u2716 = document.getElementById('u2716');
gv_vAlignTable['u2716'] = 'center';
var u2717 = document.getElementById('u2717');

var u2718 = document.getElementById('u2718');
gv_vAlignTable['u2718'] = 'center';
var u2719 = document.getElementById('u2719');
gv_vAlignTable['u2719'] = 'top';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'top';
var u172 = document.getElementById('u172');

var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u176 = document.getElementById('u176');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');

var u2725 = document.getElementById('u2725');

var u2726 = document.getElementById('u2726');
gv_vAlignTable['u2726'] = 'center';
var u2727 = document.getElementById('u2727');

var u2728 = document.getElementById('u2728');
gv_vAlignTable['u2728'] = 'center';
var u2729 = document.getElementById('u2729');

var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u182 = document.getElementById('u182');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u186 = document.getElementById('u186');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u189 = document.getElementById('u189');

var u2510 = document.getElementById('u2510');
gv_vAlignTable['u2510'] = 'center';
var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'top';
var u192 = document.getElementById('u192');

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'top';
var u196 = document.getElementById('u196');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'top';
var u199 = document.getElementById('u199');

var u558 = document.getElementById('u558');

var u559 = document.getElementById('u559');
gv_vAlignTable['u559'] = 'center';
var u2520 = document.getElementById('u2520');
gv_vAlignTable['u2520'] = 'center';
var u2521 = document.getElementById('u2521');

u2521.style.cursor = 'pointer';
if (bIE) u2521.attachEvent("onclick", Clicku2521);
else u2521.addEventListener("click", Clicku2521, true);
function Clicku2521(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2525 = document.getElementById('u2525');

u2525.style.cursor = 'pointer';
if (bIE) u2525.attachEvent("onclick", Clicku2525);
else u2525.addEventListener("click", Clicku2525, true);
function Clicku2525(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u568 = document.getElementById('u568');

var u569 = document.getElementById('u569');
gv_vAlignTable['u569'] = 'center';
var u2530 = document.getElementById('u2530');
gv_vAlignTable['u2530'] = 'center';
var u2531 = document.getElementById('u2531');

u2531.style.cursor = 'pointer';
if (bIE) u2531.attachEvent("onclick", Clicku2531);
else u2531.addEventListener("click", Clicku2531, true);
function Clicku2531(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2532 = document.getElementById('u2532');
gv_vAlignTable['u2532'] = 'center';
var u578 = document.getElementById('u578');

var u579 = document.getElementById('u579');
gv_vAlignTable['u579'] = 'center';
var u2540 = document.getElementById('u2540');
gv_vAlignTable['u2540'] = 'center';
var u2541 = document.getElementById('u2541');

u2541.style.cursor = 'pointer';
if (bIE) u2541.attachEvent("onclick", Clicku2541);
else u2541.addEventListener("click", Clicku2541, true);
function Clicku2541(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u2542 = document.getElementById('u2542');
gv_vAlignTable['u2542'] = 'center';
var u2543 = document.getElementById('u2543');

u2543.style.cursor = 'pointer';
if (bIE) u2543.attachEvent("onclick", Clicku2543);
else u2543.addEventListener("click", Clicku2543, true);
function Clicku2543(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2544 = document.getElementById('u2544');
gv_vAlignTable['u2544'] = 'center';
var u2358 = document.getElementById('u2358');
gv_vAlignTable['u2358'] = 'center';
var u2359 = document.getElementById('u2359');

var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u589 = document.getElementById('u589');

var u2550 = document.getElementById('u2550');
gv_vAlignTable['u2550'] = 'center';
var u2551 = document.getElementById('u2551');

u2551.style.cursor = 'pointer';
if (bIE) u2551.attachEvent("onclick", Clicku2551);
else u2551.addEventListener("click", Clicku2551, true);
function Clicku2551(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2552 = document.getElementById('u2552');
gv_vAlignTable['u2552'] = 'center';
var u2553 = document.getElementById('u2553');

u2553.style.cursor = 'pointer';
if (bIE) u2553.attachEvent("onclick", Clicku2553);
else u2553.addEventListener("click", Clicku2553, true);
function Clicku2553(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd1u2421','none','',500,'fade','',200);

}

}

var u2554 = document.getElementById('u2554');
gv_vAlignTable['u2554'] = 'center';
var u2555 = document.getElementById('u2555');

u2555.style.cursor = 'pointer';
if (bIE) u2555.attachEvent("onclick", Clicku2555);
else u2555.addEventListener("click", Clicku2555, true);
function Clicku2555(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u2368 = document.getElementById('u2368');
gv_vAlignTable['u2368'] = 'center';
var u597 = document.getElementById('u597');

var u598 = document.getElementById('u598');

var u599 = document.getElementById('u599');
gv_vAlignTable['u599'] = 'center';
var u2560 = document.getElementById('u2560');
gv_vAlignTable['u2560'] = 'center';
var u2561 = document.getElementById('u2561');

u2561.style.cursor = 'pointer';
if (bIE) u2561.attachEvent("onclick", Clicku2561);
else u2561.addEventListener("click", Clicku2561, true);
function Clicku2561(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2562 = document.getElementById('u2562');
gv_vAlignTable['u2562'] = 'center';
var u2563 = document.getElementById('u2563');

u2563.style.cursor = 'pointer';
if (bIE) u2563.attachEvent("onclick", Clicku2563);
else u2563.addEventListener("click", Clicku2563, true);
function Clicku2563(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2564 = document.getElementById('u2564');
gv_vAlignTable['u2564'] = 'center';
var u2565 = document.getElementById('u2565');

u2565.style.cursor = 'pointer';
if (bIE) u2565.attachEvent("onclick", Clicku2565);
else u2565.addEventListener("click", Clicku2565, true);
function Clicku2565(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2566 = document.getElementById('u2566');
gv_vAlignTable['u2566'] = 'center';
var u2570 = document.getElementById('u2570');
gv_vAlignTable['u2570'] = 'center';
var u2571 = document.getElementById('u2571');

u2571.style.cursor = 'pointer';
if (bIE) u2571.attachEvent("onclick", Clicku2571);
else u2571.addEventListener("click", Clicku2571, true);
function Clicku2571(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd1u2496','swing','left',150,'swing','left',150);

}

}

var u2572 = document.getElementById('u2572');
gv_vAlignTable['u2572'] = 'center';
var u2573 = document.getElementById('u2573');

u2573.style.cursor = 'pointer';
if (bIE) u2573.attachEvent("onclick", Clicku2573);
else u2573.addEventListener("click", Clicku2573, true);
function Clicku2573(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd2u2496','swing','left',150,'swing','left',150);

}

}

var u2574 = document.getElementById('u2574');
gv_vAlignTable['u2574'] = 'center';
var u2575 = document.getElementById('u2575');

u2575.style.cursor = 'pointer';
if (bIE) u2575.attachEvent("onclick", Clicku2575);
else u2575.addEventListener("click", Clicku2575, true);
function Clicku2575(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd3u2496','swing','left',150,'swing','left',150);

}

}

var u2576 = document.getElementById('u2576');
gv_vAlignTable['u2576'] = 'center';
var u2577 = document.getElementById('u2577');

u2577.style.cursor = 'pointer';
if (bIE) u2577.attachEvent("onclick", Clicku2577);
else u2577.addEventListener("click", Clicku2577, true);
function Clicku2577(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd4u2496','swing','left',150,'swing','left',150);

}

}

var u2578 = document.getElementById('u2578');
gv_vAlignTable['u2578'] = 'center';
var u2579 = document.getElementById('u2579');

u2579.style.cursor = 'pointer';
if (bIE) u2579.attachEvent("onclick", Clicku2579);
else u2579.addEventListener("click", Clicku2579, true);
function Clicku2579(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd5u2496','swing','left',150,'swing','left',150);

}

}

var u2387 = document.getElementById('u2387');

var u2388 = document.getElementById('u2388');
gv_vAlignTable['u2388'] = 'center';
var u2389 = document.getElementById('u2389');
gv_vAlignTable['u2389'] = 'top';
var u800 = document.getElementById('u800');
gv_vAlignTable['u800'] = 'center';
var u801 = document.getElementById('u801');

var u802 = document.getElementById('u802');
gv_vAlignTable['u802'] = 'center';
var u803 = document.getElementById('u803');

var u804 = document.getElementById('u804');
gv_vAlignTable['u804'] = 'center';
var u805 = document.getElementById('u805');

var u806 = document.getElementById('u806');
gv_vAlignTable['u806'] = 'center';
var u807 = document.getElementById('u807');

var u808 = document.getElementById('u808');
gv_vAlignTable['u808'] = 'center';
var u809 = document.getElementById('u809');

var u2581 = document.getElementById('u2581');
gv_vAlignTable['u2581'] = 'top';
var u2582 = document.getElementById('u2582');
gv_vAlignTable['u2582'] = 'top';
var u2583 = document.getElementById('u2583');
gv_vAlignTable['u2583'] = 'top';
var u2584 = document.getElementById('u2584');
gv_vAlignTable['u2584'] = 'top';
var u2585 = document.getElementById('u2585');
gv_vAlignTable['u2585'] = 'top';
var u2586 = document.getElementById('u2586');
gv_vAlignTable['u2586'] = 'top';
var u2587 = document.getElementById('u2587');
gv_vAlignTable['u2587'] = 'top';
var u2588 = document.getElementById('u2588');
gv_vAlignTable['u2588'] = 'top';
var u810 = document.getElementById('u810');
gv_vAlignTable['u810'] = 'center';
var u811 = document.getElementById('u811');

var u812 = document.getElementById('u812');
gv_vAlignTable['u812'] = 'center';
var u813 = document.getElementById('u813');

var u814 = document.getElementById('u814');
gv_vAlignTable['u814'] = 'center';
var u815 = document.getElementById('u815');

var u816 = document.getElementById('u816');
gv_vAlignTable['u816'] = 'center';
var u817 = document.getElementById('u817');

var u818 = document.getElementById('u818');
gv_vAlignTable['u818'] = 'center';
var u819 = document.getElementById('u819');

u819.style.cursor = 'pointer';
if (bIE) u819.attachEvent("onclick", Clicku819);
else u819.addEventListener("click", Clicku819, true);
function Clicku819(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd0u644','swing','right',150,'none','',500);

}

}

var u820 = document.getElementById('u820');
gv_vAlignTable['u820'] = 'center';
var u821 = document.getElementById('u821');

var u822 = document.getElementById('u822');
gv_vAlignTable['u822'] = 'center';
var u823 = document.getElementById('u823');
gv_vAlignTable['u823'] = 'top';
var u824 = document.getElementById('u824');

var u825 = document.getElementById('u825');
gv_vAlignTable['u825'] = 'center';
var u826 = document.getElementById('u826');

var u827 = document.getElementById('u827');
gv_vAlignTable['u827'] = 'center';
var u828 = document.getElementById('u828');

var u829 = document.getElementById('u829');
gv_vAlignTable['u829'] = 'center';
var u830 = document.getElementById('u830');

var u831 = document.getElementById('u831');
gv_vAlignTable['u831'] = 'center';
var u832 = document.getElementById('u832');
gv_vAlignTable['u832'] = 'top';
var u833 = document.getElementById('u833');

var u834 = document.getElementById('u834');
gv_vAlignTable['u834'] = 'center';
var u835 = document.getElementById('u835');

var u836 = document.getElementById('u836');
gv_vAlignTable['u836'] = 'center';
var u837 = document.getElementById('u837');
gv_vAlignTable['u837'] = 'top';
var u838 = document.getElementById('u838');

var u839 = document.getElementById('u839');
gv_vAlignTable['u839'] = 'center';
var u840 = document.getElementById('u840');

var u841 = document.getElementById('u841');
gv_vAlignTable['u841'] = 'center';
var u842 = document.getElementById('u842');

var u843 = document.getElementById('u843');
gv_vAlignTable['u843'] = 'center';
var u844 = document.getElementById('u844');
gv_vAlignTable['u844'] = 'top';
var u845 = document.getElementById('u845');

var u846 = document.getElementById('u846');
gv_vAlignTable['u846'] = 'center';
var u847 = document.getElementById('u847');

var u848 = document.getElementById('u848');
gv_vAlignTable['u848'] = 'center';
var u849 = document.getElementById('u849');
gv_vAlignTable['u849'] = 'top';
var u850 = document.getElementById('u850');

var u851 = document.getElementById('u851');
gv_vAlignTable['u851'] = 'center';
var u852 = document.getElementById('u852');

var u853 = document.getElementById('u853');
gv_vAlignTable['u853'] = 'center';
var u854 = document.getElementById('u854');
gv_vAlignTable['u854'] = 'top';
var u855 = document.getElementById('u855');

var u856 = document.getElementById('u856');
gv_vAlignTable['u856'] = 'center';
var u857 = document.getElementById('u857');

var u858 = document.getElementById('u858');
gv_vAlignTable['u858'] = 'center';
var u859 = document.getElementById('u859');
gv_vAlignTable['u859'] = 'top';
var u2104 = document.getElementById('u2104');
gv_vAlignTable['u2104'] = 'top';
var u2105 = document.getElementById('u2105');
gv_vAlignTable['u2105'] = 'top';
var u2106 = document.getElementById('u2106');
gv_vAlignTable['u2106'] = 'top';
var u2107 = document.getElementById('u2107');

var u2108 = document.getElementById('u2108');
gv_vAlignTable['u2108'] = 'center';
var u2109 = document.getElementById('u2109');

var u1608 = document.getElementById('u1608');
gv_vAlignTable['u1608'] = 'top';
var u1609 = document.getElementById('u1609');
gv_vAlignTable['u1609'] = 'top';
var u860 = document.getElementById('u860');

var u861 = document.getElementById('u861');
gv_vAlignTable['u861'] = 'center';
var u862 = document.getElementById('u862');

var u863 = document.getElementById('u863');
gv_vAlignTable['u863'] = 'center';
var u864 = document.getElementById('u864');
gv_vAlignTable['u864'] = 'top';
var u865 = document.getElementById('u865');

var u866 = document.getElementById('u866');
gv_vAlignTable['u866'] = 'center';
var u867 = document.getElementById('u867');

var u868 = document.getElementById('u868');
gv_vAlignTable['u868'] = 'center';
var u869 = document.getElementById('u869');
gv_vAlignTable['u869'] = 'top';
var u2114 = document.getElementById('u2114');
gv_vAlignTable['u2114'] = 'top';
var u2115 = document.getElementById('u2115');
gv_vAlignTable['u2115'] = 'top';
var u2116 = document.getElementById('u2116');
gv_vAlignTable['u2116'] = 'top';
var u2117 = document.getElementById('u2117');
gv_vAlignTable['u2117'] = 'top';
var u2118 = document.getElementById('u2118');

var u2119 = document.getElementById('u2119');
gv_vAlignTable['u2119'] = 'center';
var u1618 = document.getElementById('u1618');
gv_vAlignTable['u1618'] = 'center';
var u1619 = document.getElementById('u1619');
gv_vAlignTable['u1619'] = 'top';
var u870 = document.getElementById('u870');

var u871 = document.getElementById('u871');
gv_vAlignTable['u871'] = 'center';
var u872 = document.getElementById('u872');

var u873 = document.getElementById('u873');
gv_vAlignTable['u873'] = 'center';
var u874 = document.getElementById('u874');
gv_vAlignTable['u874'] = 'top';
var u875 = document.getElementById('u875');

var u876 = document.getElementById('u876');
gv_vAlignTable['u876'] = 'center';
var u877 = document.getElementById('u877');

var u878 = document.getElementById('u878');
gv_vAlignTable['u878'] = 'center';
var u2123 = document.getElementById('u2123');

var u2124 = document.getElementById('u2124');
gv_vAlignTable['u2124'] = 'center';
var u2125 = document.getElementById('u2125');

var u2126 = document.getElementById('u2126');
gv_vAlignTable['u2126'] = 'center';
var u2127 = document.getElementById('u2127');

var u2128 = document.getElementById('u2128');
gv_vAlignTable['u2128'] = 'center';
var u2129 = document.getElementById('u2129');

var u1628 = document.getElementById('u1628');
gv_vAlignTable['u1628'] = 'top';
var u1629 = document.getElementById('u1629');
gv_vAlignTable['u1629'] = 'top';
var u880 = document.getElementById('u880');

var u881 = document.getElementById('u881');
gv_vAlignTable['u881'] = 'center';
var u882 = document.getElementById('u882');

var u883 = document.getElementById('u883');
gv_vAlignTable['u883'] = 'center';
var u884 = document.getElementById('u884');
gv_vAlignTable['u884'] = 'top';
var u885 = document.getElementById('u885');

var u886 = document.getElementById('u886');
gv_vAlignTable['u886'] = 'center';
var u887 = document.getElementById('u887');

var u888 = document.getElementById('u888');
gv_vAlignTable['u888'] = 'center';
var u2133 = document.getElementById('u2133');

var u2134 = document.getElementById('u2134');
gv_vAlignTable['u2134'] = 'center';
var u2135 = document.getElementById('u2135');

var u2136 = document.getElementById('u2136');
gv_vAlignTable['u2136'] = 'center';
var u2137 = document.getElementById('u2137');

var u2138 = document.getElementById('u2138');
gv_vAlignTable['u2138'] = 'center';
var u2139 = document.getElementById('u2139');

var u1638 = document.getElementById('u1638');

var u1639 = document.getElementById('u1639');
gv_vAlignTable['u1639'] = 'center';
var u1500 = document.getElementById('u1500');
gv_vAlignTable['u1500'] = 'center';
var u1501 = document.getElementById('u1501');

var u1502 = document.getElementById('u1502');
gv_vAlignTable['u1502'] = 'center';
var u1503 = document.getElementById('u1503');
gv_vAlignTable['u1503'] = 'top';
var u1504 = document.getElementById('u1504');
gv_vAlignTable['u1504'] = 'top';
var u1505 = document.getElementById('u1505');
gv_vAlignTable['u1505'] = 'top';
var u893 = document.getElementById('u893');
gv_vAlignTable['u893'] = 'center';
var u894 = document.getElementById('u894');

var u895 = document.getElementById('u895');
gv_vAlignTable['u895'] = 'center';
var u896 = document.getElementById('u896');

var u897 = document.getElementById('u897');
gv_vAlignTable['u897'] = 'center';
var u898 = document.getElementById('u898');
gv_vAlignTable['u898'] = 'top';
var u1641 = document.getElementById('u1641');
gv_vAlignTable['u1641'] = 'top';
var u1642 = document.getElementById('u1642');
gv_vAlignTable['u1642'] = 'top';
var u2145 = document.getElementById('u2145');

var u2146 = document.getElementById('u2146');
gv_vAlignTable['u2146'] = 'center';
var u2147 = document.getElementById('u2147');

var u2148 = document.getElementById('u2148');
gv_vAlignTable['u2148'] = 'center';
var u1647 = document.getElementById('u1647');
gv_vAlignTable['u1647'] = 'top';
var u1648 = document.getElementById('u1648');
gv_vAlignTable['u1648'] = 'top';
var u1649 = document.getElementById('u1649');
gv_vAlignTable['u1649'] = 'top';
var u1510 = document.getElementById('u1510');
gv_vAlignTable['u1510'] = 'top';
var u1511 = document.getElementById('u1511');
gv_vAlignTable['u1511'] = 'top';
var u1512 = document.getElementById('u1512');
gv_vAlignTable['u1512'] = 'top';
var u1513 = document.getElementById('u1513');
gv_vAlignTable['u1513'] = 'top';
var u1514 = document.getElementById('u1514');
gv_vAlignTable['u1514'] = 'top';
var u1516 = document.getElementById('u1516');
gv_vAlignTable['u1516'] = 'center';
var u1517 = document.getElementById('u1517');
gv_vAlignTable['u1517'] = 'top';
var u2150 = document.getElementById('u2150');

u2150.style.cursor = 'pointer';
if (bIE) u2150.attachEvent("onclick", Clicku2150);
else u2150.addEventListener("click", Clicku2150, true);
function Clicku2150(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd4u2084','swing','down',150,'none','',500);

}

}

var u2151 = document.getElementById('u2151');
gv_vAlignTable['u2151'] = 'center';
var u2152 = document.getElementById('u2152');
gv_vAlignTable['u2152'] = 'top';
var u2153 = document.getElementById('u2153');

u2153.style.cursor = 'pointer';
if (bIE) u2153.attachEvent("onclick", Clicku2153);
else u2153.addEventListener("click", Clicku2153, true);
function Clicku2153(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd4u2084','swing','down',150,'none','',500);

}

}

var u2154 = document.getElementById('u2154');
gv_vAlignTable['u2154'] = 'center';
var u2155 = document.getElementById('u2155');

var u2156 = document.getElementById('u2156');
gv_vAlignTable['u2156'] = 'center';
var u2157 = document.getElementById('u2157');

u2157.style.cursor = 'pointer';
if (bIE) u2157.attachEvent("onclick", Clicku2157);
else u2157.addEventListener("click", Clicku2157, true);
function Clicku2157(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd0u2084','swing','down',150,'none','',500);

}

}

var u2158 = document.getElementById('u2158');
gv_vAlignTable['u2158'] = 'center';
var u2159 = document.getElementById('u2159');
gv_vAlignTable['u2159'] = 'top';
var u1658 = document.getElementById('u1658');
gv_vAlignTable['u1658'] = 'top';
var u1659 = document.getElementById('u1659');

var u1520 = document.getElementById('u1520');
gv_vAlignTable['u1520'] = 'top';
var u1521 = document.getElementById('u1521');
gv_vAlignTable['u1521'] = 'top';
var u1522 = document.getElementById('u1522');

var u1523 = document.getElementById('u1523');
gv_vAlignTable['u1523'] = 'center';
var u1524 = document.getElementById('u1524');
gv_vAlignTable['u1524'] = 'top';
var u1526 = document.getElementById('u1526');
gv_vAlignTable['u1526'] = 'top';
var u2160 = document.getElementById('u2160');

u2160.style.cursor = 'pointer';
if (bIE) u2160.attachEvent("onclick", Clicku2160);
else u2160.addEventListener("click", Clicku2160, true);
function Clicku2160(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd5u2084','none','',500,'swing','up',150);

}

}
gv_vAlignTable['u2160'] = 'top';
var u2161 = document.getElementById('u2161');

var u2162 = document.getElementById('u2162');

u2162.style.cursor = 'pointer';
if (bIE) u2162.attachEvent("onclick", Clicku2162);
else u2162.addEventListener("click", Clicku2162, true);
function Clicku2162(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd6u2084','none','',500,'swing','up',150);

}

}
gv_vAlignTable['u2162'] = 'top';
var u2163 = document.getElementById('u2163');

var u2164 = document.getElementById('u2164');

u2164.style.cursor = 'pointer';
if (bIE) u2164.attachEvent("onclick", Clicku2164);
else u2164.addEventListener("click", Clicku2164, true);
function Clicku2164(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd6u2084','none','',500,'swing','up',150);

}

}
gv_vAlignTable['u2164'] = 'top';
var u2165 = document.getElementById('u2165');

var u2166 = document.getElementById('u2166');

var u2167 = document.getElementById('u2167');
gv_vAlignTable['u2167'] = 'center';
var u2168 = document.getElementById('u2168');
gv_vAlignTable['u2168'] = 'top';
var u2169 = document.getElementById('u2169');

u2169.style.cursor = 'pointer';
if (bIE) u2169.attachEvent("onclick", Clicku2169);
else u2169.addEventListener("click", Clicku2169, true);
function Clicku2169(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','fade',100);

}

}

var u1668 = document.getElementById('u1668');

var u1669 = document.getElementById('u1669');
gv_vAlignTable['u1669'] = 'center';
var u1530 = document.getElementById('u1530');
gv_vAlignTable['u1530'] = 'center';
var u1531 = document.getElementById('u1531');
gv_vAlignTable['u1531'] = 'top';
var u1532 = document.getElementById('u1532');
gv_vAlignTable['u1532'] = 'top';
var u1533 = document.getElementById('u1533');
gv_vAlignTable['u1533'] = 'top';
var u1534 = document.getElementById('u1534');
gv_vAlignTable['u1534'] = 'top';
var u1536 = document.getElementById('u1536');

var u2171 = document.getElementById('u2171');

u2171.style.cursor = 'pointer';
if (bIE) u2171.attachEvent("onclick", Clicku2171);
else u2171.addEventListener("click", Clicku2171, true);
function Clicku2171(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd0u2084','swing','down',150,'none','',500);

}

}

var u2172 = document.getElementById('u2172');
gv_vAlignTable['u2172'] = 'center';
var u2173 = document.getElementById('u2173');

var u2174 = document.getElementById('u2174');
gv_vAlignTable['u2174'] = 'center';
var u2175 = document.getElementById('u2175');
gv_vAlignTable['u2175'] = 'top';
var u2176 = document.getElementById('u2176');

u2176.style.cursor = 'pointer';
if (bIE) u2176.attachEvent("onclick", Clicku2176);
else u2176.addEventListener("click", Clicku2176, true);
function Clicku2176(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','fade',100);

}

}

var u2177 = document.getElementById('u2177');
gv_vAlignTable['u2177'] = 'center';
var u2178 = document.getElementById('u2178');

u2178.style.cursor = 'pointer';
if (bIE) u2178.attachEvent("onclick", Clicku2178);
else u2178.addEventListener("click", Clicku2178, true);
function Clicku2178(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd0u2084','swing','down',150,'none','',500);

}

}

var u2179 = document.getElementById('u2179');
gv_vAlignTable['u2179'] = 'center';
var u1678 = document.getElementById('u1678');
gv_vAlignTable['u1678'] = 'top';
var u1679 = document.getElementById('u1679');

var u1540 = document.getElementById('u1540');
gv_vAlignTable['u1540'] = 'top';
var u1541 = document.getElementById('u1541');
gv_vAlignTable['u1541'] = 'top';
var u1542 = document.getElementById('u1542');
gv_vAlignTable['u1542'] = 'top';
var u1543 = document.getElementById('u1543');

var u1544 = document.getElementById('u1544');
gv_vAlignTable['u1544'] = 'center';
var u2180 = document.getElementById('u2180');

var u1546 = document.getElementById('u1546');
gv_vAlignTable['u1546'] = 'top';
var u1547 = document.getElementById('u1547');
gv_vAlignTable['u1547'] = 'top';
var u2183 = document.getElementById('u2183');

u2183.style.cursor = 'pointer';
if (bIE) u2183.attachEvent("onclick", Clicku2183);
else u2183.addEventListener("click", Clicku2183, true);
function Clicku2183(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','fade',100);

}

}

var u2184 = document.getElementById('u2184');
gv_vAlignTable['u2184'] = 'center';
var u2185 = document.getElementById('u2185');

u2185.style.cursor = 'pointer';
if (bIE) u2185.attachEvent("onclick", Clicku2185);
else u2185.addEventListener("click", Clicku2185, true);
function Clicku2185(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd0u2084','swing','down',150,'none','',500);

}

}

var u2186 = document.getElementById('u2186');
gv_vAlignTable['u2186'] = 'center';
var u2187 = document.getElementById('u2187');

var u2188 = document.getElementById('u2188');
gv_vAlignTable['u2188'] = 'center';
var u2189 = document.getElementById('u2189');

u2189.style.cursor = 'pointer';
if (bIE) u2189.attachEvent("onclick", Clicku2189);
else u2189.addEventListener("click", Clicku2189, true);
function Clicku2189(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u6', 'pd1u6','none','',500,'swing','up',150);

SetGlobalVariableValue('$pubfrom', 'online');

}

}

var u1688 = document.getElementById('u1688');
gv_vAlignTable['u1688'] = 'center';
var u1689 = document.getElementById('u1689');

u1689.style.cursor = 'pointer';
if (bIE) u1689.attachEvent("onclick", Clicku1689);
else u1689.addEventListener("click", Clicku1689, true);
function Clicku1689(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 5,295,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1550 = document.getElementById('u1550');

var u1551 = document.getElementById('u1551');
gv_vAlignTable['u1551'] = 'center';
var u1552 = document.getElementById('u1552');
gv_vAlignTable['u1552'] = 'top';
var u1554 = document.getElementById('u1554');
gv_vAlignTable['u1554'] = 'top';
var u2191 = document.getElementById('u2191');

u2191.style.cursor = 'pointer';
if (bIE) u2191.attachEvent("onclick", Clicku2191);
else u2191.addEventListener("click", Clicku2191, true);
function Clicku2191(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2084','hidden','fade',100);

}

}

var u1690 = document.getElementById('u1690');
gv_vAlignTable['u1690'] = 'center';
var u1557 = document.getElementById('u1557');

var u2194 = document.getElementById('u2194');
gv_vAlignTable['u2194'] = 'center';
var u2195 = document.getElementById('u2195');

u2195.style.cursor = 'pointer';
if (bIE) u2195.attachEvent("onclick", Clicku2195);
else u2195.addEventListener("click", Clicku2195, true);
function Clicku2195(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd1u2084','none','',500,'swing','up',150);

}

}

var u2196 = document.getElementById('u2196');
gv_vAlignTable['u2196'] = 'center';
var u2197 = document.getElementById('u2197');

u2197.style.cursor = 'pointer';
if (bIE) u2197.attachEvent("onclick", Clicku2197);
else u2197.addEventListener("click", Clicku2197, true);
function Clicku2197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2084', 'pd3u2084','none','',500,'swing','up',150);

}

}

var u1696 = document.getElementById('u1696');
gv_vAlignTable['u1696'] = 'center';
var u1697 = document.getElementById('u1697');

u1697.style.cursor = 'pointer';
if (bIE) u1697.attachEvent("onclick", Clicku1697);
else u1697.addEventListener("click", Clicku1697, true);
function Clicku1697(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 230,530,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1698 = document.getElementById('u1698');
gv_vAlignTable['u1698'] = 'center';
var u1699 = document.getElementById('u1699');

u1699.style.cursor = 'pointer';
if (bIE) u1699.attachEvent("onclick", Clicku1699);
else u1699.addEventListener("click", Clicku1699, true);
function Clicku1699(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','none',500);

	SetPanelState('u1703', 'pd0u1703','none','',500,'none','',500);

	MoveWidgetTo('u1703', 455,530,'none',500);

	SetPanelVisibility('u1703','','fade',100);

}

}

var u1190 = document.getElementById('u1190');
gv_vAlignTable['u1190'] = 'top';
var u1560 = document.getElementById('u1560');
gv_vAlignTable['u1560'] = 'top';
var u1561 = document.getElementById('u1561');
gv_vAlignTable['u1561'] = 'top';
var u1562 = document.getElementById('u1562');
gv_vAlignTable['u1562'] = 'top';
var u1563 = document.getElementById('u1563');
gv_vAlignTable['u1563'] = 'top';
var u1564 = document.getElementById('u1564');

var u1566 = document.getElementById('u1566');

var u1567 = document.getElementById('u1567');
gv_vAlignTable['u1567'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u202 = document.getElementById('u202');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u208 = document.getElementById('u208');

u208.style.cursor = 'pointer';
if (bIE) u208.attachEvent("onclick", Clicku208);
else u208.addEventListener("click", Clicku208, true);
function Clicku208(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'center';
var u1570 = document.getElementById('u1570');

var u1571 = document.getElementById('u1571');
gv_vAlignTable['u1571'] = 'center';
var u1572 = document.getElementById('u1572');

var u1573 = document.getElementById('u1573');
gv_vAlignTable['u1573'] = 'center';
var u1574 = document.getElementById('u1574');

var u1576 = document.getElementById('u1576');
gv_vAlignTable['u1576'] = 'top';
var u1577 = document.getElementById('u1577');

var u210 = document.getElementById('u210');

u210.style.cursor = 'pointer';
if (bIE) u210.attachEvent("onclick", Clicku210);
else u210.addEventListener("click", Clicku210, true);
function Clicku210(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

u214.style.cursor = 'pointer';
if (bIE) u214.attachEvent("onclick", Clicku214);
else u214.addEventListener("click", Clicku214, true);
function Clicku214(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u218 = document.getElementById('u218');

u218.style.cursor = 'pointer';
if (bIE) u218.attachEvent("onclick", Clicku218);
else u218.addEventListener("click", Clicku218, true);
function Clicku218(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u1580 = document.getElementById('u1580');
gv_vAlignTable['u1580'] = 'center';
var u1581 = document.getElementById('u1581');

var u1582 = document.getElementById('u1582');
gv_vAlignTable['u1582'] = 'center';
var u1583 = document.getElementById('u1583');

u1583.style.cursor = 'pointer';
if (bIE) u1583.attachEvent("onclick", Clicku1583);
else u1583.addEventListener("click", Clicku1583, true);
function Clicku1583(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1585 = document.getElementById('u1585');

u1585.style.cursor = 'pointer';
if (bIE) u1585.attachEvent("onclick", Clicku1585);
else u1585.addEventListener("click", Clicku1585, true);
function Clicku1585(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1587 = document.getElementById('u1587');

u1587.style.cursor = 'pointer';
if (bIE) u1587.attachEvent("onclick", Clicku1587);
else u1587.addEventListener("click", Clicku1587, true);
function Clicku1587(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','','none',500);

	SetPanelState('u2381', 'pd4u2381','none','',500,'swing','left',200);

}

}

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','fade','',150,'fade','',150);

}

}

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u224 = document.getElementById('u224');

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd0u7','fade','',150,'fade','',150);

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');

u228.style.cursor = 'pointer';
if (bIE) u228.attachEvent("onclick", Clicku228);
else u228.addEventListener("click", Clicku228, true);
function Clicku228(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd1u7','fade','',150,'fade','',150);

}

}

var u229 = document.getElementById('u229');
gv_vAlignTable['u229'] = 'center';
var u1590 = document.getElementById('u1590');
gv_vAlignTable['u1590'] = 'center';
var u1591 = document.getElementById('u1591');

u1591.style.cursor = 'pointer';
if (bIE) u1591.attachEvent("onclick", Clicku1591);
else u1591.addEventListener("click", Clicku1591, true);
function Clicku1591(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1592 = document.getElementById('u1592');
gv_vAlignTable['u1592'] = 'center';
var u1593 = document.getElementById('u1593');

u1593.style.cursor = 'pointer';
if (bIE) u1593.attachEvent("onclick", Clicku1593);
else u1593.addEventListener("click", Clicku1593, true);
function Clicku1593(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2381', 'pd3u2381','none','',500,'none','',500);

	SetPanelState('u2421', 'pd0u2421','none','',500,'none','',500);

	SetPanelVisibility('u2381','','none',500);

}

}

var u1594 = document.getElementById('u1594');
gv_vAlignTable['u1594'] = 'center';
var u230 = document.getElementById('u230');

u230.style.cursor = 'pointer';
if (bIE) u230.attachEvent("onclick", Clicku230);
else u230.addEventListener("click", Clicku230, true);
function Clicku230(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd2u7','fade','',150,'fade','',150);

}

}

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'center';
var u232 = document.getElementById('u232');

u232.style.cursor = 'pointer';
if (bIE) u232.attachEvent("onclick", Clicku232);
else u232.addEventListener("click", Clicku232, true);
function Clicku232(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd3u7','fade','',150,'fade','',150);

}

}

var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u7', 'pd4u7','fade','',150,'fade','',150);

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');
gv_vAlignTable['u241'] = 'top';
var u242 = document.getElementById('u242');

var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'top';
var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u246 = document.getElementById('u246');

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u252 = document.getElementById('u252');

var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');

var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'top';
var u259 = document.getElementById('u259');

var u1002 = document.getElementById('u1002');

var u1003 = document.getElementById('u1003');
gv_vAlignTable['u1003'] = 'center';
var u1004 = document.getElementById('u1004');

var u1005 = document.getElementById('u1005');
gv_vAlignTable['u1005'] = 'center';
var u1006 = document.getElementById('u1006');
gv_vAlignTable['u1006'] = 'top';
var u1007 = document.getElementById('u1007');
gv_vAlignTable['u1007'] = 'top';
var u1008 = document.getElementById('u1008');
gv_vAlignTable['u1008'] = 'top';
var u1009 = document.getElementById('u1009');
gv_vAlignTable['u1009'] = 'top';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'top';
var u262 = document.getElementById('u262');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'top';
var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'top';
var u266 = document.getElementById('u266');

var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'top';
var u269 = document.getElementById('u269');

var u1012 = document.getElementById('u1012');
gv_vAlignTable['u1012'] = 'top';
var u1013 = document.getElementById('u1013');
gv_vAlignTable['u1013'] = 'top';
var u1014 = document.getElementById('u1014');
gv_vAlignTable['u1014'] = 'top';
var u1015 = document.getElementById('u1015');
gv_vAlignTable['u1015'] = 'top';
var u1016 = document.getElementById('u1016');
gv_vAlignTable['u1016'] = 'top';
var u1017 = document.getElementById('u1017');
gv_vAlignTable['u1017'] = 'top';
var u1018 = document.getElementById('u1018');
gv_vAlignTable['u1018'] = 'top';
var u1019 = document.getElementById('u1019');
gv_vAlignTable['u1019'] = 'top';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'top';
var u272 = document.getElementById('u272');

var u273 = document.getElementById('u273');
gv_vAlignTable['u273'] = 'center';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'top';
var u275 = document.getElementById('u275');
gv_vAlignTable['u275'] = 'top';
var u276 = document.getElementById('u276');

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'top';
var u279 = document.getElementById('u279');

var u1022 = document.getElementById('u1022');
gv_vAlignTable['u1022'] = 'top';
var u1023 = document.getElementById('u1023');
gv_vAlignTable['u1023'] = 'top';
var u1024 = document.getElementById('u1024');

var u1025 = document.getElementById('u1025');
gv_vAlignTable['u1025'] = 'center';
var u1026 = document.getElementById('u1026');

u1026.style.cursor = 'pointer';
if (bIE) u1026.attachEvent("onclick", Clicku1026);
else u1026.addEventListener("click", Clicku1026, true);
function Clicku1026(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd1u639','swing','down',150,'none','',500);

}

}

var u1027 = document.getElementById('u1027');
gv_vAlignTable['u1027'] = 'center';
var u1028 = document.getElementById('u1028');

u1028.style.cursor = 'pointer';
if (bIE) u1028.attachEvent("onclick", Clicku1028);
else u1028.addEventListener("click", Clicku1028, true);
function Clicku1028(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u639', 'pd1u639','swing','down',150,'none','',500);

}

}

var u1029 = document.getElementById('u1029');
gv_vAlignTable['u1029'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'top';
var u282 = document.getElementById('u282');

var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'top';
var u285 = document.getElementById('u285');
gv_vAlignTable['u285'] = 'top';
var u286 = document.getElementById('u286');

var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'top';
var u289 = document.getElementById('u289');

var u1032 = document.getElementById('u1032');
gv_vAlignTable['u1032'] = 'top';
var u1033 = document.getElementById('u1033');

var u1034 = document.getElementById('u1034');
gv_vAlignTable['u1034'] = 'center';
var u1035 = document.getElementById('u1035');
gv_vAlignTable['u1035'] = 'top';
var u1036 = document.getElementById('u1036');

var u1037 = document.getElementById('u1037');
gv_vAlignTable['u1037'] = 'center';
var u1038 = document.getElementById('u1038');

var u1039 = document.getElementById('u1039');
gv_vAlignTable['u1039'] = 'center';
var u2406 = document.getElementById('u2406');
gv_vAlignTable['u2406'] = 'top';
var u2409 = document.getElementById('u2409');

u2409.style.cursor = 'pointer';
if (bIE) u2409.attachEvent("onclick", Clicku2409);
else u2409.addEventListener("click", Clicku2409, true);
function Clicku2409(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','hidden','none',500);

}

}

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'top';
var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');

var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'top';
var u299 = document.getElementById('u299');

var u1042 = document.getElementById('u1042');

var u1043 = document.getElementById('u1043');
gv_vAlignTable['u1043'] = 'center';
var u1044 = document.getElementById('u1044');

var u1045 = document.getElementById('u1045');
gv_vAlignTable['u1045'] = 'center';
var u1046 = document.getElementById('u1046');
gv_vAlignTable['u1046'] = 'top';
var u1047 = document.getElementById('u1047');
gv_vAlignTable['u1047'] = 'top';
var u1048 = document.getElementById('u1048');

var u1049 = document.getElementById('u1049');
gv_vAlignTable['u1049'] = 'center';
var u2418 = document.getElementById('u2418');
gv_vAlignTable['u2418'] = 'center';
var u2419 = document.getElementById('u2419');

u2419.style.cursor = 'pointer';
if (bIE) u2419.attachEvent("onclick", Clicku2419);
else u2419.addEventListener("click", Clicku2419, true);
function Clicku2419(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2381','hidden','none',500);

}

}

var u1050 = document.getElementById('u1050');

var u1051 = document.getElementById('u1051');
gv_vAlignTable['u1051'] = 'center';
var u1052 = document.getElementById('u1052');

var u1053 = document.getElementById('u1053');
gv_vAlignTable['u1053'] = 'center';
var u1054 = document.getElementById('u1054');
gv_vAlignTable['u1054'] = 'top';
var u1055 = document.getElementById('u1055');

var u1056 = document.getElementById('u1056');
gv_vAlignTable['u1056'] = 'center';
var u1057 = document.getElementById('u1057');

var u1058 = document.getElementById('u1058');
gv_vAlignTable['u1058'] = 'center';
var u1059 = document.getElementById('u1059');

var u2427 = document.getElementById('u2427');
gv_vAlignTable['u2427'] = 'top';
var u2428 = document.getElementById('u2428');
gv_vAlignTable['u2428'] = 'top';
var u2429 = document.getElementById('u2429');
gv_vAlignTable['u2429'] = 'top';
var u2627 = document.getElementById('u2627');
gv_vAlignTable['u2627'] = 'top';
var u2628 = document.getElementById('u2628');
gv_vAlignTable['u2628'] = 'top';
var u1060 = document.getElementById('u1060');
gv_vAlignTable['u1060'] = 'center';
var u1061 = document.getElementById('u1061');

var u1062 = document.getElementById('u1062');
gv_vAlignTable['u1062'] = 'center';
var u1063 = document.getElementById('u1063');
gv_vAlignTable['u1063'] = 'top';
var u1064 = document.getElementById('u1064');

var u1065 = document.getElementById('u1065');
gv_vAlignTable['u1065'] = 'center';
var u1066 = document.getElementById('u1066');

var u1067 = document.getElementById('u1067');
gv_vAlignTable['u1067'] = 'center';
var u1068 = document.getElementById('u1068');

var u1069 = document.getElementById('u1069');
gv_vAlignTable['u1069'] = 'center';
var u2631 = document.getElementById('u2631');
gv_vAlignTable['u2631'] = 'top';
var u2632 = document.getElementById('u2632');
gv_vAlignTable['u2632'] = 'top';
var u2437 = document.getElementById('u2437');

var u2438 = document.getElementById('u2438');
gv_vAlignTable['u2438'] = 'center';
var u2439 = document.getElementById('u2439');
gv_vAlignTable['u2439'] = 'top';
var u2639 = document.getElementById('u2639');
gv_vAlignTable['u2639'] = 'top';
var u1070 = document.getElementById('u1070');

var u1071 = document.getElementById('u1071');
gv_vAlignTable['u1071'] = 'center';
var u1072 = document.getElementById('u1072');

var u1073 = document.getElementById('u1073');
gv_vAlignTable['u1073'] = 'center';
var u1074 = document.getElementById('u1074');

var u1075 = document.getElementById('u1075');
gv_vAlignTable['u1075'] = 'center';
var u1076 = document.getElementById('u1076');

var u1077 = document.getElementById('u1077');
gv_vAlignTable['u1077'] = 'center';
var u1078 = document.getElementById('u1078');

var u1079 = document.getElementById('u1079');

u1079.style.cursor = 'pointer';
if (bIE) u1079.attachEvent("onclick", Clicku1079);
else u1079.addEventListener("click", Clicku1079, true);
function Clicku1079(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1078', 'pd1u1078','fade','',200,'none','',500);

}

}

var u2445 = document.getElementById('u2445');
gv_vAlignTable['u2445'] = 'top';
var u2446 = document.getElementById('u2446');

var u2447 = document.getElementById('u2447');
gv_vAlignTable['u2447'] = 'center';
var u2645 = document.getElementById('u2645');
gv_vAlignTable['u2645'] = 'center';
var u2646 = document.getElementById('u2646');

var u1080 = document.getElementById('u1080');
gv_vAlignTable['u1080'] = 'center';
var u1081 = document.getElementById('u1081');

u1081.style.cursor = 'pointer';
if (bIE) u1081.attachEvent("onclick", Clicku1081);
else u1081.addEventListener("click", Clicku1081, true);
function Clicku1081(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1078', 'pd1u1078','fade','',200,'none','',500);

}

}

var u1082 = document.getElementById('u1082');
gv_vAlignTable['u1082'] = 'center';
var u1083 = document.getElementById('u1083');

u1083.style.cursor = 'pointer';
if (bIE) u1083.attachEvent("onclick", Clicku1083);
else u1083.addEventListener("click", Clicku1083, true);
function Clicku1083(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1078', 'pd0u1078','swing','down',200,'none','',500);

}

}

var u1084 = document.getElementById('u1084');
gv_vAlignTable['u1084'] = 'center';
var u1085 = document.getElementById('u1085');

var u1086 = document.getElementById('u1086');
gv_vAlignTable['u1086'] = 'center';
var u1087 = document.getElementById('u1087');

u1087.style.cursor = 'pointer';
if (bIE) u1087.attachEvent("onclick", Clicku1087);
else u1087.addEventListener("click", Clicku1087, true);
function Clicku1087(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1078', 'pd0u1078','none','',500,'none','',500);

}

}

var u1088 = document.getElementById('u1088');
gv_vAlignTable['u1088'] = 'center';
var u1089 = document.getElementById('u1089');

u1089.style.cursor = 'pointer';
if (bIE) u1089.attachEvent("onclick", Clicku1089);
else u1089.addEventListener("click", Clicku1089, true);
function Clicku1089(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1078', 'pd2u1078','none','',500,'swing','up',200);

}

}

var u2457 = document.getElementById('u2457');
gv_vAlignTable['u2457'] = 'top';
var u2458 = document.getElementById('u2458');

var u2459 = document.getElementById('u2459');
gv_vAlignTable['u2459'] = 'center';
var u1090 = document.getElementById('u1090');
gv_vAlignTable['u1090'] = 'center';
var u1091 = document.getElementById('u1091');

var u1092 = document.getElementById('u1092');
gv_vAlignTable['u1092'] = 'center';
var u1093 = document.getElementById('u1093');
gv_vAlignTable['u1093'] = 'top';
var u1094 = document.getElementById('u1094');

var u1095 = document.getElementById('u1095');
gv_vAlignTable['u1095'] = 'center';
var u1096 = document.getElementById('u1096');

var u1097 = document.getElementById('u1097');
gv_vAlignTable['u1097'] = 'center';
var u1098 = document.getElementById('u1098');
gv_vAlignTable['u1098'] = 'top';
var u1099 = document.getElementById('u1099');

var u2463 = document.getElementById('u2463');
gv_vAlignTable['u2463'] = 'top';
var u2464 = document.getElementById('u2464');
gv_vAlignTable['u2464'] = 'top';
var u2465 = document.getElementById('u2465');

u2465.style.cursor = 'pointer';
if (bIE) u2465.attachEvent("onclick", Clicku2465);
else u2465.addEventListener("click", Clicku2465, true);
function Clicku2465(e)
{
windowEvent = e;


if ((GetWidgetVisibility('u2664')) == (false)) {

	SetPanelVisibility('u2664','','none',500);

	SetPanelVisibility('u2467','','none',500);

}
else
if ((GetWidgetVisibility('u2664')) == (true)) {

	SetPanelVisibility('u2467','hidden','none',500);

	SetPanelVisibility('u2664','hidden','none',500);

}

}

var u2466 = document.getElementById('u2466');
gv_vAlignTable['u2466'] = 'center';
var u2467 = document.getElementById('u2467');

var u2468 = document.getElementById('u2468');

u2468.style.cursor = 'pointer';
if (bIE) u2468.attachEvent("onclick", Clicku2468);
else u2468.addEventListener("click", Clicku2468, true);
function Clicku2468(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u2664','hidden','none',500);

	SetPanelVisibility('u2467','hidden','none',500);

}

}

var u2469 = document.getElementById('u2469');
gv_vAlignTable['u2469'] = 'center';
var u900 = document.getElementById('u900');
gv_vAlignTable['u900'] = 'center';
var u901 = document.getElementById('u901');

var u902 = document.getElementById('u902');
gv_vAlignTable['u902'] = 'center';
var u903 = document.getElementById('u903');

var u904 = document.getElementById('u904');
gv_vAlignTable['u904'] = 'center';
var u905 = document.getElementById('u905');
gv_vAlignTable['u905'] = 'top';
var u906 = document.getElementById('u906');

var u907 = document.getElementById('u907');
gv_vAlignTable['u907'] = 'center';
var u908 = document.getElementById('u908');

var u909 = document.getElementById('u909');
gv_vAlignTable['u909'] = 'center';
var u2670 = document.getElementById('u2670');
gv_vAlignTable['u2670'] = 'center';
var u2671 = document.getElementById('u2671');

u2671.style.cursor = 'pointer';
if (bIE) u2671.attachEvent("onclick", Clicku2671);
else u2671.addEventListener("click", Clicku2671, true);
function Clicku2671(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2421', 'pd2u2421','none','',500,'none','',500);

	SetPanelVisibility('u2664','hidden','none',500);

}

}

var u2472 = document.getElementById('u2472');

var u2473 = document.getElementById('u2473');

var u2474 = document.getElementById('u2474');

var u2475 = document.getElementById('u2475');
gv_vAlignTable['u2475'] = 'center';
var u2476 = document.getElementById('u2476');

var u2477 = document.getElementById('u2477');
gv_vAlignTable['u2477'] = 'center';
var u2478 = document.getElementById('u2478');

var u2479 = document.getElementById('u2479');
gv_vAlignTable['u2479'] = 'center';
var u910 = document.getElementById('u910');
gv_vAlignTable['u910'] = 'top';
var u911 = document.getElementById('u911');

var u912 = document.getElementById('u912');
gv_vAlignTable['u912'] = 'center';
var u913 = document.getElementById('u913');

var u914 = document.getElementById('u914');
gv_vAlignTable['u914'] = 'center';
var u915 = document.getElementById('u915');

var u916 = document.getElementById('u916');
gv_vAlignTable['u916'] = 'center';
var u917 = document.getElementById('u917');
gv_vAlignTable['u917'] = 'top';
var u918 = document.getElementById('u918');

var u919 = document.getElementById('u919');
gv_vAlignTable['u919'] = 'center';
var u2684 = document.getElementById('u2684');
gv_vAlignTable['u2684'] = 'center';
var u920 = document.getElementById('u920');

var u921 = document.getElementById('u921');
gv_vAlignTable['u921'] = 'center';
var u922 = document.getElementById('u922');
gv_vAlignTable['u922'] = 'top';
var u923 = document.getElementById('u923');

var u924 = document.getElementById('u924');
gv_vAlignTable['u924'] = 'center';
var u925 = document.getElementById('u925');

var u926 = document.getElementById('u926');
gv_vAlignTable['u926'] = 'center';
var u927 = document.getElementById('u927');
gv_vAlignTable['u927'] = 'top';
var u928 = document.getElementById('u928');

var u929 = document.getElementById('u929');
gv_vAlignTable['u929'] = 'center';
var u2694 = document.getElementById('u2694');

u2694.style.cursor = 'pointer';
if (bIE) u2694.attachEvent("onclick", Clicku2694);
else u2694.addEventListener("click", Clicku2694, true);
function Clicku2694(e)
{
windowEvent = e;


if (true) {

if (IsWidgetSelected('u2694')) {
SetWidgetNotSelected('u2694'); } else {
SetWidgetSelected('u2694');
}
}

}

var u2499 = document.getElementById('u2499');

u2499.style.cursor = 'pointer';
if (bIE) u2499.attachEvent("onclick", Clicku2499);
else u2499.addEventListener("click", Clicku2499, true);
function Clicku2499(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u2496', 'pd0u2496','swing','left',150,'swing','left',150);

}

}

var u930 = document.getElementById('u930');

var u931 = document.getElementById('u931');
gv_vAlignTable['u931'] = 'center';
var u932 = document.getElementById('u932');
gv_vAlignTable['u932'] = 'top';
var u933 = document.getElementById('u933');

var u934 = document.getElementById('u934');
gv_vAlignTable['u934'] = 'center';
var u935 = document.getElementById('u935');

var u936 = document.getElementById('u936');
gv_vAlignTable['u936'] = 'center';
var u937 = document.getElementById('u937');
gv_vAlignTable['u937'] = 'top';
var u938 = document.getElementById('u938');

var u939 = document.getElementById('u939');
gv_vAlignTable['u939'] = 'center';
var u940 = document.getElementById('u940');

var u941 = document.getElementById('u941');
gv_vAlignTable['u941'] = 'center';
var u942 = document.getElementById('u942');
gv_vAlignTable['u942'] = 'top';
var u943 = document.getElementById('u943');

var u944 = document.getElementById('u944');
gv_vAlignTable['u944'] = 'center';
var u945 = document.getElementById('u945');

var u946 = document.getElementById('u946');
gv_vAlignTable['u946'] = 'center';
var u947 = document.getElementById('u947');
gv_vAlignTable['u947'] = 'top';
var u948 = document.getElementById('u948');

var u949 = document.getElementById('u949');
gv_vAlignTable['u949'] = 'center';
var u950 = document.getElementById('u950');

var u951 = document.getElementById('u951');
gv_vAlignTable['u951'] = 'center';
var u952 = document.getElementById('u952');
gv_vAlignTable['u952'] = 'top';
var u953 = document.getElementById('u953');

var u954 = document.getElementById('u954');
gv_vAlignTable['u954'] = 'center';
var u955 = document.getElementById('u955');

var u956 = document.getElementById('u956');
gv_vAlignTable['u956'] = 'center';
var u957 = document.getElementById('u957');
gv_vAlignTable['u957'] = 'top';
var u958 = document.getElementById('u958');

u958.style.cursor = 'pointer';
if (bIE) u958.attachEvent("onclick", Clicku958);
else u958.addEventListener("click", Clicku958, true);
function Clicku958(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u959 = document.getElementById('u959');
gv_vAlignTable['u959'] = 'center';
var u2027 = document.getElementById('u2027');
gv_vAlignTable['u2027'] = 'center';
var u2205 = document.getElementById('u2205');
gv_vAlignTable['u2205'] = 'center';
var u2206 = document.getElementById('u2206');

var u2207 = document.getElementById('u2207');
gv_vAlignTable['u2207'] = 'center';
var u1706 = document.getElementById('u1706');
gv_vAlignTable['u1706'] = 'top';
var u1707 = document.getElementById('u1707');

u1707.style.cursor = 'pointer';
if (bIE) u1707.attachEvent("onclick", Clicku1707);
else u1707.addEventListener("click", Clicku1707, true);
function Clicku1707(e)
{
windowEvent = e;


if (true) {

	SetPanelVisibility('u1703','hidden','fade',100);

}

}

var u1708 = document.getElementById('u1708');
gv_vAlignTable['u1708'] = 'center';
var u1709 = document.getElementById('u1709');

u1709.style.cursor = 'pointer';
if (bIE) u1709.attachEvent("onclick", Clicku1709);
else u1709.addEventListener("click", Clicku1709, true);
function Clicku1709(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u1703', 'pd0u1703','swing','down',150,'none','',500);

}

}

var u960 = document.getElementById('u960');

u960.style.cursor = 'pointer';
if (bIE) u960.attachEvent("onclick", Clicku960);
else u960.addEventListener("click", Clicku960, true);
function Clicku960(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

var u961 = document.getElementById('u961');
gv_vAlignTable['u961'] = 'center';
var u962 = document.getElementById('u962');

u962.style.cursor = 'pointer';
if (bIE) u962.attachEvent("onclick", Clicku962);
else u962.addEventListener("click", Clicku962, true);
function Clicku962(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u644', 'pd1u644','none','',500,'swing','left',150);

}

}

if (window.OnLoad) OnLoad();
