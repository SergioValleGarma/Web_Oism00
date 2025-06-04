(function(){

    let atci = document.getElementsByClassName('atci');
    let masmidis = document.getElementsByClassName('masmidis');


    for (let index = 0; index < atci.length; index++) {
        atci[index].addEventListener('mouseover', (e) => {          
                atci[index].firstElementChild.classList.add('animationaccesodiercto')
                atci[index].firstElementChild.firstElementChild.setAttribute("style", " fill: rgb(32,114,185); filter:drop-shadow(1px 1px 3px #888);")
        })

        atci[index].addEventListener('mouseout',()=>{
            atci[index].firstElementChild.classList.remove('animationaccesodiercto')
            atci[index].firstElementChild.firstElementChild.removeAttribute("style")
        })
    }


    for (let index = 0; index < masmidis.length; index++) {
        masmidis[index].addEventListener('mouseover',(e)=>{
            masmidis[index].firstElementChild.classList.add('animationaccesodiercto')
             masmidis[index].firstElementChild.firstElementChild.setAttribute("style"," fill: rgb(229,40,48); filter:drop-shadow(1px 1px 3px #888)")
        })

        masmidis[index].addEventListener('mouseout',()=>{
            masmidis[index].firstElementChild.classList.remove('animationaccesodiercto')
            masmidis[index].firstElementChild.firstElementChild.removeAttribute("style")
        })
    }

})();