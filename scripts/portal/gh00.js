/*
Return from Free Market Script
*/

function enter(pi) {
    var returnMap = pi.getSavedLocation("MULUNG_TC");
    pi.clearSavedLocation("MULUNG_TC");

    if (returnMap < 0) {
	returnMap = 102000000;
    }
    var target = pi.getMap(returnMap);
    var portal;

    if (returnMap == 230000000) {
	portal = target.getPortal("market01");
    } else {
	portal = target.getPortal("market00");
    }
    if (portal == null) {
	portal = target.getPortal(0);
    }
    if (pi.getMapId() != target) {
	pi.getPlayer().changeMap(target, portal);
    }
}