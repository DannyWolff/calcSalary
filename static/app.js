document.getElementById('salary-form').addEventListener('submit', (e) => {
    document.getElementById('result').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

     setTimeout(calcSal, 2000);
    e.preventDefault();
});

function calcSal() {
    const salNet = document.getElementById('nst').value;
    const days   = document.getElementById('nza').value;
    const rez    = document.getElementById('res');
    
    if (salNet=='' ||  isNaN(salNet)){
        console.log('Please check numbers')
        showError('Please check numbers');

    } else {

        let result =Number.parseFloat(((22-days)/22)*salNet).toFixed(2);
        rez.value = result;
        document.getElementById('loading').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
}


function showError(error) {
    document.getElementById('loading').style.display = 'none';
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
