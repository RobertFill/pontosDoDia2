function load(){
    const titleTime = document.querySelector('.msg');
    const msgDay = document.getElementById('msgDay');
    const msgHours = document.getElementById('msgHours');
    const imgTime = document.getElementById('imgTime');

    function realTimeUpdate(){ /* atualizar hora em tempo real */
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let hours = date.getHours();
        let minuts = date.getMinutes();
        let seconds = date.getSeconds();
    
        minuts = minuts < 10 ? '0' + minuts : minuts; /* acrecenter um numero antes*/
        seconds = seconds <10 ? '0' + seconds : seconds;
    
        msgDay.innerHTML = `Dia <strong>${day} / ${month} / ${year}</strong>`;
        msgHours.innerHTML = `Horário <strong> ${hours}  :  ${minuts} : ${seconds} </strong>`;
        
        if(hours >=0 && hours <=12){
            titleTime.innerHTML ='Bom Dia!', titleTime.style.fontSize ='2pc',titleTime.style.textShadow ='3px 3px 2px black';
            imgTime.src ='./assets/sol-mini.png'
            document.body.style.backgroundImage ='url(./assets/manhãDeSol.jpg)'
        }
        else if(hours >= 13 && hours <=18){
            titleTime.innerHTML ='Boa Tarde!', titleTime.style.fontSize ='2pc',titleTime.style.textShadow ='3px 3px 2px black';
            imgTime.src ='./assets/por-do-sol-mini.png'
            msgDay.style.fontSize = '1.7pc'
            document.body.style.backgroundImage ='url(./assets/imagetarde.jpg)'
        }
        else{
            titleTime.innerHTML = 'Boa Noite.', titleTime.style.fontSize ='2pc',titleTime.style.textShadow ='3px 3px 2px black';
            imgTime.src ='./assets/lua-mini.png'
            document.body.style.backgroundImage ='url(./assets/noite.jpg)'
        }
    }
    realTimeUpdate();
    setInterval(realTimeUpdate, 1000); /* atualizar os segundos em tempo real*/
}
load()