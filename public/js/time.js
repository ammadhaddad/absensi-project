
        
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clocknow").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */

    var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    var curWeekDay = days[date.getDay()]; // get day
    var curDay = date.getDate(); // get date
    var curMonth = months[date.getMonth()]; // get month
    var curYear = date.getFullYear(); // get year
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear; // get full date
    document.getElementById("datenow").innerHTML = date;

    var t = setTimeout(function() {
        currentTime()
    }, 1000); /* setting timer */
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

if (document.getElementById("clocknow")) {
    currentTime(); /* calling currentTime() function to initiate the process */
}