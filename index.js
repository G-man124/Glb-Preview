    const fileInput = document.getElementById('file-input');
    const viewer = document.getElementById('viewer');
    const fileNameDisplay = document.getElementById('file-name');
    const emptyState = document.getElementById('empty-state');
    const dropOverlay = document.getElementById('drop-overlay');
    const animSelect = document.getElementById('anim-select');
    const rotateBtn = document.getElementById('rotate-btn');
    const bgBtn = document.getElementById('bg-btn');

    let currentUrl = null;
    let isDark = true;

    function loadFile(file) {
      if (!file) return;
      if (currentUrl) URL.revokeObjectURL(currentUrl);
      
      currentUrl = URL.createObjectURL(file);
      viewer.src = currentUrl;
      fileNameDisplay.textContent = file.name;
      emptyState.style.display = 'none';
    }

    // File input upload
    fileInput.addEventListener('change', (e) => loadFile(e.target.files[0]));

    // Drag & Drop
    window.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropOverlay.classList.add('active');
    });
    window.addEventListener('dragleave', (e) => {
      if (e.relatedTarget === null) dropOverlay.classList.remove('active');
    });
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      dropOverlay.classList.remove('active');
      if (e.dataTransfer.files.length) loadFile(e.dataTransfer.files[0]);
    });

    // Populate animations if the GLB has any
    viewer.addEventListener('load', () => {
      const animations = viewer.availableAnimations;
      animSelect.innerHTML = '';
      if (animations.length > 0) {
        animations.forEach((name) => {
          const opt = document.createElement('option');
          opt.value = name;
          opt.textContent = `Anim: ${name}`;
          animSelect.appendChild(opt);
        });
        animSelect.style.display = 'inline-block';
      } else {
        animSelect.style.display = 'none';
      }
    });

    animSelect.addEventListener('change', (e) => {
      viewer.animationName = e.target.value;
    });

    // Toggle Auto-Rotate
    rotateBtn.addEventListener('click', () => {
      viewer.autoRotate = !viewer.autoRotate;
      rotateBtn.textContent = `Auto-Rotate: ${viewer.autoRotate ? 'On' : 'Off'}`;
    });

    // Toggle Background Theme
    bgBtn.addEventListener('click', () => {
      isDark = !isDark;
      viewer.style.backgroundColor = isDark ? '#1a1a1a' : '#e5e5e5';
      bgBtn.textContent = isDark ? 'Light BG' : 'Dark BG';
    });
