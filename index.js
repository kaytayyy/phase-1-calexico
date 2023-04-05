// Write your code here...
const baseUrl = 'http://localhost:3000/'
const menuUrl = 'http://localhost:3000/menu'

function fetchMenu() {
    fetch(menuUrl)
    .then(response => response.json)
    .then(menuData => renderMenu(menuData))
}
fetchMenu()


const renderMenu = menu => {
    renderMenuItem(menu[0])
    const menuItemsDiv = document.getElementById('menu-items')
    const menuItems = document.createElement('span')
    menuItemsDiv.appendChild(menuItems)
    
    menu.forEach(recipe => {
        const recipename
    })
    menuItems.textContent = `${menu.name}`
}









//     const menuItemSpan = document.createElement('span')
//         menuItemsDiv.appendChild(menuItemSpan)

//         menuItemSpan.textContent = `${game.name} (${game.manufacturer_name})`

//         gameNameH5.onclick = () => {
//             renderGameDetails(game)