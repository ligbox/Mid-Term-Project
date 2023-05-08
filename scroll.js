document.querySelectorAll('.click').forEach(function (item) {
    item.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    });
  });