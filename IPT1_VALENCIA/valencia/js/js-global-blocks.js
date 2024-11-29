function headerfixed(){
			let getheaderdiv = document.getElementsByTagName('header')[0].classList;
			if(document.documentElement.scrollTop > 100){
				getheaderdiv.add('fixed');
			}else{
				getheaderdiv.remove('fixed');
			}
		}
		window.onscroll = headerfixed;


	
		$(document).ready(function(){


			
			$('a.showmenu').click(function(){$('.navigation').fadeIn(); $(this).hide(); $('a.hidemenu').fadeIn('slow'); });
			$('a.hidemenu').click(function(){ $('.navigation').fadeOut(); $(this).hide(); $('a.showmenu').fadeIn('slow'); });
			$('.navigation ul li').click(function(){
				let getscreenwidth = $(window).width();
				if(getscreenwidth < 1201){
					$('.navigation').fadeOut();
					$('a.showmenu').fadeIn('slow');
					$('a.hidemenu').hide();
				}
			});


		});