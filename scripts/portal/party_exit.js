function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap != 0) {
		pi.warp(103000000, "unityPortal2"); 
	} else {
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(returnMap, "unityPortal2"); 
	}
	return true;
}