/**  
 *	This is a template for creating D3JS objects
 *  We receive a javascript object from some external source.  
 *	Generally from the web this will come from asysncronouns 
 *	call and return a JSON object.
 */

 javascriptDataObject = [{name: "Robert",contributions: 1500},{name: "Phillip",contributions: 2750},{name: "Robert",contributions: 2000}];

 // This should be about to be accessed by:

 												javascriptDataObject[index].name
 												javascriptDataObject[index].contributions

 //  I could convert this object into two arrays:
 javascriptDataArryName = ["Robert", "Phillip", "Tommy"];
 javascriptDataArryContributions = [1500, 2750, 2000];

As a helper function, we would define the size of the array (very robustly) as: 

function getSizeOfObject(obj) {
	Object.size = function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	};
}

// Get the size of an object
var size = Object.size(javascriptDataObject);

for (i = 0; i < size; i++) {

	javascriptDataArryName.push(javascriptDataObject.name);
	javascriptDataArryContributions.push(javascriptDataObject.contributions);

}


