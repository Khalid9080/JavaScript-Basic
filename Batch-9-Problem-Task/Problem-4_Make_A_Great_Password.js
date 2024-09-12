

/**
 * Make a password function name password() to store the password of a website.
 * 
 * 
 * Hint:
 * 
 * Input: 
 * --> password() function take a input as object. And there will be only three Property:
 *      {name: "koilimuddin", birthday:1999 siteName:"google"}
 * 
 * 
 * 
 * Password-structure: 
 *             Website Name           #        User Name       @       birthYear
 *    (Fist words latter uppercase)
 * 
 * 
 * 
 * Output: 
 * Above the structure as following, function wil return a string. Like: Google#kolimuddin@1999
 * 
 * 
 * 
 * Challange:
 * If any property will missing or birthyear will not in 4 digit then the function will return a string, Which value is invalid.
 */


function password(obj) {
    let capitalSitename = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = capitalSitename + '#' + obj.name + '@' + obj.birthYear;


    return passwordString;
}

console.log(password({ name: 'kolimuddin', birthYear: 1999, siteName: 'google' }));

