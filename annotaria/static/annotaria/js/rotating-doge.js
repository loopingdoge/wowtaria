$.fn.extend({
	doge: function(){
		running = true;
		$(this).css("display", "block");
		shootingDoge(this);
		ruota(this, 72000, 100000);
	}
});

$.fn.extend({
	shootingDoge: function(){
		running = true;
		$(this).css("display", "block");
		shootingDoge(this);
		ruota(this, 1440, 3000);
	}
});

// da finire
$.fn.extend({
	wow: function(){
		$(this).add("<div id='wow'>wow</div>");
		$("#wow").show();
	}
});

$.fn.extend({
	load: function(){
		//initLoading($(this));
		//loading.play();
		$(this).width(100);
		$(this).height(100);
		TweenMax.to($(this), 1.5, {rotation:360, ease:Linear.easeNone, repeat:-1});
		return $(this);
	},
	stop: function(){
		TweenMax.set($(this), {rotation:0});
		TweenMax.killTweensOf($(this));
		//$(this).remove();
	}
});

coso = 0;
rot = 0;
running = true;

function randomMove(element){
	l = (Math.random() * 50) + 1;
	t = (Math.random() * 50) + 1;
	if((coso%2)==0){
		t = -t;
		l = -l;
	}
	$(element).animate({
		top: "+="+t,
		left: "+="+l
	}, 500, function(){
		a(element);
	});
	coso++;
}

function shootingDoge(element){
	t = (Math.random() * ($(window).height())) + 1;
	l = $(document).width() - 50;
	from = (Math.random() * 1) - 1;
	$(element).css("top", t);
	$(element).css("left", "-50px");
	$(element).animate({
		top: "+="+  t,
		left: "+=" + l
	}, 1500, function(){
		running = false;
		$(element).hide();
	});
}

function ruota(element, angolo, durata){
	rot += angolo;
	$(element).rotate({
		animateTo: rot,
		duration: durata,
		callback: function(){
			if(running){
				ruota();
			}
		}
	});
}