document.getElementById('salary-form').addEventListener('submit', (e) => {
    // document.getElementById('result').style.display = 'none';

    // document.getElementById('loading').style.display = 'block';

     setTimeout(calcSal, 500);
    e.preventDefault();
});


/** Calcul zile totale in luna */
function daysInMonth(year, month){
    d =  32 -new Date(year, month, 32).getDate();
    return d
}

function isWeekday(year, month,day){
    var dd = new Date(year, month-1,day).getDay();
    //console.log(dd);
    return dd !=0 && dd !=6
}


function getWeekdaysInMonth (year, month){
    let days = daysInMonth(year, month);
    var weekdays = 0;
    for (let i=0 ;i< days;i++){
        if (isWeekday(year,month, i+1)) weekdays+=1
        }
    return weekdays;
}
/** Sfarsit calcul zile totale in luna */


/**
 * Calcul Salariu
 */



function calcSal() {
    const salNet = document.getElementById('nst').value;
    const days   = document.getElementById('nza').value;
    const req_month = document.getElementById('mnt').value;
    const req_year = document.getElementById('yr').value
    const wd = document.getElementById('wd') 
    const wp = document.getElementById('wp') 
    const rez    = document.getElementById('res');
    
    if (salNet=='' ||  isNaN(salNet)){
        console.log('Please check numbers')
        showError('Please check numbers');

    } else {

        let wkdys = getWeekdaysInMonth (req_year, req_month)
        let day_worked = wkdys - days
        console.log(wkdys);
        

        let result =Number.parseFloat(((wkdys-days)/wkdys)*salNet).toFixed(2);
        rez.value = result;
        wp.value = day_worked;
        wd.value=wkdys;
        
        // document.getElementById('loading').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
}


function showError(error) {
    // document.getElementById('loading').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    const errorDiv = document.createElement('div');

    const card =  document.querySelector('.card');
    const heading =  document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}
