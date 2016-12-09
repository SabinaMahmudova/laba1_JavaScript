var request=require('request');
var url='http://www.mosigra.ru/';
		var mass= new Array();
		var mass_unique= new Array();
		var temp= new Array();
		var email= new Array();
		var email_unique=new Array();
request(url,function(err,res,body){
		var reg=/[http]+[s]?[:]..[w]+\.[mosigra]+\.[a-zA-Z0-9_\/]+/g;  //есть g - match возвращаем массив со всеми совпадениями
		mass=body.match(reg);
				console.log(   );
		for (let i=0; i< mass.length; i++) 
			if((mass_unique.indexOf(mass[i]))==-1) // в питоне mass[i] in mass_unique[j]
				mass_unique.push(mass[i]);
				
		var n=mass_unique.length;
			for(let j=0; j<mass_unique.length; j++)
			request(mass_unique[j],function(err,res,body2){
				var reg=/[http]+[s]?[:]..[w]+\.[mosigra]+\.[a-zA-Z0-9_\/]+/g;
				temp=body2.match(reg);
				for (let i=0; i< temp.length; i++) 
					if((mass_unique.indexOf(temp[i]))==-1)
						mass_unique.push(temp[i]);
			})
			
		for(let j=0; j<mass_unique.length; j++)
			request(mass_unique[j],function(err,res,body3){
				var reg_email=/\w+\.?[a-zA-Z0-9&!#$%&*+?^_`{|}~,-]*@\w+\.?\w+[.][a-z]{2,3}/g;
				email=body3.match(reg_email);
				for (let i=0; i< email.length; i++) 
					if((email_unique.indexOf(email[i]))==-1)
						email_unique.push(email[i]);
				if (j=mass_unique.length)
					console.log(email_unique.length);
					console.log(email_unique);
			})
	});
	