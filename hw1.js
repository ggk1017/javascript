 $(function(){ 

 	var colors = [];
 	var animals = [];
 	var people = [];

 	var response = prompt('(a)nimals, (c)olors, or (p)eople? or (q)uit');
 	while(response != 'q') //use while so we can set up a loop - keep looping till they hit q//
 	{
 		var count = prompt('How many would you like?'); //this is common to the below 3 if/else ifs so put it at the top//
 		count = parseInt(count);

 		if(response =='a')
 		{
 			for(var i = 0; i < count; i++)
 			{
 				var selection = prompt('Enter an animal?');
 				animals.push(selection);
 			}
 		}
 		else if(response =='p')
 		{
 			for(var i = 0; i < count; i++)
 			{
 				var selection = prompt('Enter a person?');
 				people.push(selection);
 			}
 		}
 		else if(response =='c')
 		{
 			for(var i = 0; i < count; i++)
 			{
 				var selection = prompt('Enter a color?');
 				colors.push(selection);
 			}
 		}

 	var response = prompt('(a)nimals, (c)olors, or (p)eople? or (q)uit');
 	}

 		response = prompt('Do you want to remove (c)olor (p)erson (a)nimal or (q)uit?');
 		while(response != 'q')
 		{
 			if(response == 'c')
 			{
 				console.log('colors : ' + colors);
 				var del = prompt('which one do you want to delete?');
 				var index = colors.indexof(del);
 				color.splice(index, 1);

 			}
 			else if(response == 'p')
 			{
				console.log('people : ' + people);
 				var del = prompt('which one do you want to delete?');
 				var index = people.indexof(del);
 				people.splice(index, 1);
 			}
 			else if(response == 'a')
 			{
 				console.log('animals : ' + animals);
 				var del = prompt('which one do you want to delete?');
 				var index = animals.indexof(del);
 				animals.splice(index, 1);
 			}

 		}

 		console.log('Here are your colors : ' + colors);
 		console.log('Here are your people : ' + people);
 		console.log('Here are your animals : ' + animals);


 });
