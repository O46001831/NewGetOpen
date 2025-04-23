document.addEventListener('DOMContentLoaded', () => {
    const numberOfImages = 5; 
    const galleryPlaceholder = document.getElementById('galleryPlaceholder');
  
    if (galleryPlaceholder) {
      galleryPlaceholder.style.height = (100 * numberOfImages) + 'vw';
    } else {
      console.error("Element with id 'galleryPlaceholder' not found.");
    }
  });