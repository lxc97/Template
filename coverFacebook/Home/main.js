function openDropdown() {
    let click = document.querySelector('.login-dropdown')
    let icon = document.querySelector('.icon-drop')
    if (click.style.display === 'none') {
        click.style.display = 'block'
        icon.style.color = '#fff'
    }else {
        click.style.display = 'none'
        icon.style.color = '#000'
    }
}
function openQuickHelp() {
    let click = document.querySelector('.quick-help-modal')
    let icon = document.querySelector('.icon-quick-help')
    if (click.style.display === 'none') {
        click.style.display = 'block'
        icon.style.color = '#fff'
    }else {
        click.style.display = 'none'
        icon.style.color = '#000'
    }
}

function openModal(event) {
    if (event) {
      document.querySelector(".bg-modal").style.display = "block"
    } else {
      document.querySelector(".bg-modal").style.display = "none"
    }
  }
function openSearchModal(event) {
    let search = document.querySelector(".search button")
    if (event) {
      document.querySelector(".search-modal").style.display = "block"
      search.style.background = "#4080ff"
      search.style.border = '1px solid #4080ff'
      search.style.color = '#fff'
    } else {
      document.querySelector(".search-modal").style.display = "none"
    }
  }