let isImage = true;
let originalImg;

function toggleImageAndParagraph() {
    const portraitContainer = document.querySelector('.portrait').parentNode;
    
    if (isImage) {
        // Store the original image
        originalImg = document.querySelector('img.portrait');
        
        // Create a new paragraph element
        const paragraph = document.createElement('p');
        paragraph.textContent = "w365412149@gmail.com";
        paragraph.classList.add('portrait');
        
        // Replace the image with the paragraph
        portraitContainer.replaceChild(paragraph, originalImg);
    } else {
        // Replace the paragraph with the original image
        const paragraph = document.querySelector('p.portrait');
        portraitContainer.replaceChild(originalImg, paragraph);
    }
    
    // Toggle the state
    isImage = !isImage;
}

const contact_link =document.getElementById('contactLink')
contact_link.addEventListener('click',toggleImageAndParagraph)
  
  