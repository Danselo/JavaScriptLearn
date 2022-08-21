const showClock= () => {
    let date = new Date();
    let hr = formatHour(date.getHours());
    let min = formatHour(date.getMinutes());
    let sec = formatHour(date.getSeconds());
    document.getElementById('hours').innerHTML= `${hr} ${min} ${sec}`;

    const months = ['Ene','Feb','Mar','Ago','May','Jun','Jul','Ago','Sep','Oct','Nov','Des'];
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    let dayWeek= days[date.getDay()];
    let day = date.getDate();
    let month= months[date.getMonth()]
    let dateText = `${dayWeek}, ${day} ${month}`;
    document.getElementById('date').innerHTML = dateText;
    document.getElementById('container').classList.toggle('animate');
}

const formatHour = (hour)=>{
    if(hour < 10)
    hour = '0'+hour;
    return hour;
}
setInterval(showClock,1000);