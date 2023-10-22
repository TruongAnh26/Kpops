const buybtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContent = document.querySelector('.js-modal-content')
function showBuytickets() {
    modal.classList.add('open')
}
function hideBuytickets() {
    modal.classList.remove('open')
}
for(const buybtn of buybtns) {
    buybtn.addEventListener('click',showBuytickets)
}
modalClose.onclick = function() {
    hideBuytickets()
}
modal.onclick = function(e) {
    if(e.target.closest('.js-modal-content')) {
        stopPropagation()
    }
    else{
        hideBuytickets()
    }
}




var header=document.getElementById('header');
var mobileMenu=document.getElementById('mobile-bar-btn');
var heightHeader=header.clientHeight;
mobileMenu.onclick = function() {
    var isClosed=header.clientHeight===heightHeader;
    if(isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}


var menuItems=document.querySelectorAll('#nav li a[href*="#"]')
for (var i=0; i<menuItems.length ; i++) {
    var menuItem=menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav')
        if(isParentMenu) {
            event.preventDefault();
        }else {
            header.style.height = null ;
        }
    }
}