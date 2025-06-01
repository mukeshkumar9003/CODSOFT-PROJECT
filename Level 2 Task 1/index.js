 
    // Auto-scroll simulation
    let scrollInterval = setInterval(() => {
      window.scrollBy(0, 5);
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        clearInterval(scrollInterval);
      }
    }, 40);
  