import { getElement, slideDown, slideUp, fadeOut, $, $$,$body } from "./utils.js";

const activateMenu = (deviceType, deviceSize) => {
    const menu = getElement('.main_menu');
    const burgerBtn = $('.menu_btn');
    let openedSubs, menuDelayTime = null;

    const closeOpenedSubs = ($sub) => {
        for (let i = 0; i < $sub.length; i++) {
            $sub[i].classList.remove('opened');
            if(window.innerWidth > deviceSize) {
                fadeOut($sub[i].querySelector('.submenu_list'));
            } else {
                slideUp($sub[i].querySelector('.submenu_list'));
            }
        }
    }

    const mouseLeaveItem = (item) => {
        item.classList.remove('hovered')      
    }

    const openSubWithHover = (evt) => {
        if(evt.target.classList.contains('submenu_btn') || evt.target.parentNode.classList.contains('submenu_btn')) {
            if (!deviceType && window.innerWidth > deviceSize) {
                if(menuDelayTime) {
                    clearTimeout(menuDelayTime);
                };
                const subBtn = evt.target.classList.contains('submenu_btn') ? evt.target : evt.target.parentNode;
                const subParent = subBtn.closest('li');
                const currentSubList = subParent.querySelector('.submenu_list');
                subParent.classList.add('hovered');
                menuDelayTime = setTimeout(() =>{
                    if (subParent.classList.contains('hovered') && !subParent.classList.contains('opened')) {
                        subParent.classList.add('opened')
                        slideDown(currentSubList);
                    }
                },300)
            };
        }
    }

    const closeSubWithHover = ($item) => {
        if (!deviceType && $item.classList.contains('opened')) {
            $item.classList.remove('opened');
            fadeOut($item.querySelector('.submenu_list'))
        }
    }

    const openSubWithClick = (evt) => {
        if(evt.target.classList.contains('submenu_btn')) {
            evt.preventDefault();
            const subBtn = evt.target;
            const subParent = subBtn.closest('li');
            const parentList = subBtn.closest('ul');
            const subMenu = subParent.querySelector('.submenu_list');
            const allSubs = parentList.querySelector('.submenu_list');
            
            if(deviceType && window.innerWidth > deviceSize) {
                evt.preventDefault();
                evt.stopPropagation();
                if (subParent.classList.contains('opened')) {
                    subParent.classList.remove('opened');
                    slideUp(subMenu);
                } else {
                    openedSubs = parentList.querySelectorAll('.opened').length > 0 ? parentList.querySelectorAll('.opened') : null;
                    if(openedSubs) {
                        closeOpenedSubs(openedSubs);
                    };
                    
                    subParent.classList.add('opened');
                    openedSubs = menu.querySelectorAll('.opened');
                    slideDown(subMenu);
                    
                    
                }
            } else if (window.innerWidth <= deviceSize) {

                if (subParent.classList.contains('opened')) {
                    subParent.classList.remove('opened')
                    slideUp(subMenu);
                } else {
                    openedSubs = parentList.querySelectorAll('.opened').length > 0 ? parentList.querySelectorAll('.opened') : null;
                    if(openedSubs) {
                        closeOpenedSubs(openedSubs);
                    };
                    subParent.classList.add('opened')
                    slideDown(subMenu);
                }
            }
        }
    }

    const closeSubsWithOutsideClick = (e) => {
        if(!menu.contains(e.target)) {
            menu.querySelectorAll('.opened').forEach($item => {
                $item.classList.remove('opened');
                fadeOut($item.querySelector('.submenu_list'))
            })
        }
    }

    document.addEventListener('click', (e) => {
        if(deviceType && window.innerWidth > deviceSize && menu.querySelectorAll('.opened').length > 0) {
            closeSubsWithOutsideClick(e);
        }
    })

    const togglemobileMenu = () => {
        if ($body.classList.contains('menu_opened')) {
            $body.classList.remove('menu_opened');
        } else {
            openedSubs = menu.querySelectorAll('.opened').length > 0 ? menu.querySelectorAll('.opened') : null;
            if(openedSubs) {
                closeOpenedSubs(openedSubs);
                openedSubs = null;
            }
            // $('.submenu_list').hide();
            // $('.menu_inner, $body, html').animate({scrollTop: 0},0);
            $body.classList.add('menu_opened');
        }
    };

   
    burgerBtn.addEventListener('click', togglemobileMenu);
    menu.onClick(openSubWithClick);
    menu.onHover(openSubWithHover);

    $$('.submenu_btn').forEach($sub => {
        const subParrent = $sub.closest('li');
        $sub.addEventListener('mouseleave', () => {
            mouseLeaveItem(subParrent)
        })

        subParrent.addEventListener('mouseleave', ()=>{
            closeSubWithHover(subParrent)
        })
    })
    // // menu.unHover(closeAllSubs);

    
    // // headerDropBtn.onClick(showDropBlock);
}

export {
    activateMenu
}