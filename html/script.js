function tabella()
{
	var arrayskill = new array();
		arrayskill[0] = "JS-AngularJS 2";
		arrayskill[1] = "JS-jQuery";
		arrayskill[2] = "JAVA-EJB";
		arrayskill[3] = "JAVA-JavaEE";
		arrayskill[4] = "JSFS-NodeJS";
		arrayskill[5] = "DEVOPS-Azure App Services";
		arrayskill[6] = "DB-Relation database";
		arrayskill[7] = "IOT-Robotics";
		arrayskill[8] = "R&D-Elettronic circuits simulator";
		arrayskill[9] = "DEV-Software devolpment common design pattern";
	
	var arrayprofili = new array();
		arrayprofili[0] = "Front-End Web Developer";
		arrayprofili[1] = "Front-End Web Developer";
		arrayprofili[2] = "Java EE Web Developer";
		arrayprofili[3] = "Java EE Web Developer";
		arrayprofili[4] = "Javascript Backend Developer";
		arrayprofili[5] = "DevOps Engineer";
		arrayprofili[6] = "IoT Engineer";
		arrayprofili[7] = "IoT Engineer";
		arrayprofili[8] = "IoT Engineer";
		arrayprofili[9] = "Dot Net Web Developer";


	var arrayliv = new array();
		arrayliv[0] = "2";
		arrayliv[1] = "4";
		arrayliv[2] = "3";
		arrayliv[3] = "2";
		arrayliv[4] = "2";
		arrayliv[5] = "4";
		arrayliv[6] = "5";
		arrayliv[7] = "1";
		arrayliv[8] = "2";
		arrayliv[9] = "1";
	
	for(var c=0; c<arrayskill.length;c++){
		document.write("<tr><td>" + arrayskill[c] + "</td>");
		document.write("<td>" + arrayprofili[c] + "</td>");
		document.write("<td>" + arrayliv[c] + "</td></tr>");
		
	}
		
}