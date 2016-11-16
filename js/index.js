//function big(){
//		var cir=document.getElementById("circles-1");
//		cir.update(cir._value + 10, 250);
//}

$(document).ready(function(){


	$('#fullpage').fullpage({
		anchors:['page1','page2','page3','page4','page5','page6'],
		navigation:true,
		loopBottom:true,
		autoScrolling:true,
		paddingTop:'5px',
		//scrollOverflow:true,
		afterLoad:function(link,index){
					switch(index){
						case 1:
							move('.sec1_userPic').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('top','0px').set('border-radius','100px').duration('1.2s').end();
							move('.section1 .sec_container p:nth-of-type(2)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-left','0px').duration('1s').end();
							move('.section1 .sec_container p:nth-of-type(3)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-left','0px').duration('1s').end();
							move('.section1 .sec_container div:nth-of-type(2)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('width','790px').duration('1s').end();
							move('.section1 .sec_container p:nth-of-type(4)').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('margin-top','10px').duration('1s').end();
						break;
						case 2:
							move('.sec2_introduce h2').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('font-size','32px').duration('0.7s').end();
							move('.skill_1 i').set('width','350px').duration('0.2s').end();
							//move('.skill_li i').set('width','350px').duration('0.7s').end();
							move('.skill_4 i').set('width','320px').duration('0.5s').end();
							move('.skill_2 i').set('width','340px').duration('1s').end();
							move('.skill_3 i').set('width','320px').duration('1.8s').end();

							move('.skill_5 i').set('width','320px').duration('2.5s').end();
							break;
						case 3:

							break;
						case 4:

						break;
						case 5:
						break;
						case 6:
							move('.sec6_title h1').ease('cubic-bezier(0.60, 0.37, 0.23, 0.94)').set('font-size','120px').duration('0.7s').end();
						break;
					}
		},

		onLeave:function(link,index) {
			switch(index){
				case 1:
					move('.sec1_userPic').set('top','-100px').set('border-radius','50px').end();
					move('.section1 .sec_container div:nth-of-type(2)').set('width','1200px').end();
					move('.section1 .sec_container p:nth-of-type(4)').set('margin-top','50px').end();
				break;

				case 3:

				break;
			}
						
		}
	});
});