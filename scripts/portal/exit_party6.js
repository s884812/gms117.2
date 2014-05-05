function enter(pi) {
	var returnMap = pi.getSavedLocation("MULUNG_TC");
	if (returnMap != 0) {
		pi.warp(300030000,2); 
	} else {
	pi.clearSavedLocation("MULUNG_TC");
	pi.warp(returnMap, "unityPortal2"); 
	}
	return true;
}