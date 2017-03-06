// When the BBC micro:bit runs.
function onStart(  ) {
	globals.x = 1;
	globals.y = 2;
	globals.xDir = 1;
	globals.yDir = 1;
	while (true) {
		
		globals.x = globals.x + globals.xDir;
		microbit.clear();
		microbit.on(globals.x, globals.y);
		globals.y = globals.y + globals.yDir;
		wait(300);
		if (globals.x >= 4) {
			
			globals.xDir = -1;
			
		}
		
		if (globals.x <= 0) {
			
			globals.xDir = 1;
			
		}
		
		if (globals.y >= 4) {
			
			globals.yDir = -1;
			
		}
		
		if (globals.y <= 0) {
			
			globals.yDir = 1;
			
		}
		
		
	}
	
	
}

function onPressA(  ) {
	globals.x = globals.x - 1;
	microbit.clear();
	microbit.on(globals.x, globals.y);
	
}

function onPressB(  ) {
	globals.x = globals.x + 1;
	microbit.clear();
	microbit.on(globals.x, globals.y);
	
}
