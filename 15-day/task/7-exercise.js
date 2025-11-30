/* 7. Find Years When Jan 1 is Sunday (2014?2050)

Write a JavaScript program to find out if 1st January will be a Sunday 
between 2014 and 2050.  */

for (let year = 2014; year <= 2050; year++) {

    let firstJan = new Date(year, 0, 1); // mes 0 = enero
    if (firstJan.getDay() === 0) { // 0 representa domingo
        console.log("1st January is a Sunday in the year: " + year);
    }
}
