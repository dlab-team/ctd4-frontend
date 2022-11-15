export const activeItemSidebar = () => {
    const arrayItems = document.getElementsByClassName("nav-text")  

    for(let item = 0; item < arrayItems.length; item++){
        if(window.location.href === arrayItems[item].firstChild.href){
            arrayItems[item].firstChild.classList.add("backgroundActiveItem");
            arrayItems[item].firstChild.firstChild.classList.add("activeItemIcon");
        } 
    } 
}