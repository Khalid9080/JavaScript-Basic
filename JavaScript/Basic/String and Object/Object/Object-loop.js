

/**  --------Objects loop()----------
 * 
 *  for in -> object
 *  for of -> array
 * (mobile[property_key]) -> working
 * ['property_key'] -> will not working.
 * 
 */


const mobile = {

//  property_key    values
    Brand:         'samsung',
    Price:         '13513',
    Color:         'black',
    Camera:        '23mp',
    isNew:          true
}

for (const property_key in mobile){
//console.log(property_key);   this only returns the property/key
console.log(mobile[property_key]);  // this will returns the Values of the property/key.

}









/* --------------- To Show all the Key vale piars of an object in a loop ----------------*/

const propertyKeys =Object.keys(mobile); // keys() --> it stores all the property/key of mobile object.
console.log(propertyKeys);

for(const key of propertyKeys){
    console.log(key,':', mobile[key]); // mobile[key] --> it will shows the values of property/key.
}