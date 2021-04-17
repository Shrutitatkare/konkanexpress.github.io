burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
rightnav=document.querySelector('.rightnav')
burger.addeventlistener('click',()=>{
    rightnav.classlist.toggle('vclass-resp')
    navlist.classlist.toggle('vclass-resp')
    navbar.classlist.toggle('hnav-resp')

})