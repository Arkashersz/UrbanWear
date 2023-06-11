const galleryImgs = document.querySelectorAll('.gallery-img');

    // Adicionar manipulador de eventos a cada imagem
    galleryImgs.forEach(img => {
      // Armazenar a imagem original
        const originalImg = img.getAttribute('src');
    
      // Manipulador para quando o mouse entra na imagem
        img.addEventListener('mouseenter', () => {
        const newImg = img.getAttribute('data-img');
        img.setAttribute('src', newImg);
    });
    
      // Manipulador para quando o mouse sai da imagem
        img.addEventListener('mouseleave', () => {
        img.setAttribute('src', originalImg);
        });
    });
