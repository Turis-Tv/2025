// Function to handle the click event
function handleClick(event) {
  const menuItemId = event.target.id;
  console.log('Clicked on menu item with id:', menuItemId);

  // Redirecting to a specific page
  if (menuItemId === 'home') {
    window.location.href = '/home';
  } else if (menuItemId === 'about') {
    window.location.href = '/about';
  } else if (menuItemId === 'events') {
    window.location.href = '/events';
  } else if (menuItemId === 'donate') {
    window.location.href = '/donate';
  } else if (menuItemId === 'logo') {
    window.location.href = '/home';
  } else if (menuItemId === 'gallery') {
    window.location.href = '/gallery';
  } else if (menuItemId === 'news') {
    window.location.href = '/news';
  } else if (menuItemId === 'contact') {
    window.location.href = '/contact';
  } else if (menuItemId === 'involved') {
    window.location.href = '/involved';
  }
  // Add more conditions for other menu items
}

// Add event listeners to the list items
const menuItems = document.querySelectorAll('.menu-bar li');
menuItems.forEach(item => {
  item.addEventListener('click', handleClick);
});