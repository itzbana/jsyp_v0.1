document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const scene = document.getElementById('intro-scene');
    const layers = document.querySelectorAll('.scene1');
    
    // Preloader functionality
    let imagesLoaded = 0;
    const totalImages = layers.length;
    
    // Function to check if all images are loaded
    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            // All images are loaded, hide preloader and start animation
            setTimeout(() => {
                // Use GSAP to fade out preloader and fade in content
                gsap.to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    onComplete: () => {
                        preloader.style.display = 'none';
                        // Make scene visible
                        gsap.to(scene, {
                            opacity: 1,
                            duration: 0.8
                        });
                        // Initialize parallax after everything is loaded
                        initParallax();
                    }
                });
            }, 500); // Small delay for smoother transition
        }
    }
    
    // Check each image
    layers.forEach(layer => {
        const img = new Image();
        img.src = layer.src;
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Count error as loaded to avoid hanging
        }
    });
    
    // Initialize parallax effect (moved into a function to be called after loading)
    function initParallax() {
        // Get the center point of the scene
        let sceneCenter = {
            x: scene.offsetWidth / 2,
            y: scene.offsetHeight / 2
        };
        
        // Update scene center on window resize with debounce
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                sceneCenter = {
                    x: scene.offsetWidth / 2,
                    y: scene.offsetHeight / 2
                };
            }, 250);
        });
        
        // Mouse position variables
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        
        // Track mouse movement
        scene.addEventListener('mousemove', (e) => {
            mouseX = e.clientX - sceneCenter.x;
            mouseY = e.clientY - sceneCenter.y;
        });
        
        // Animate frames with requestAnimationFrame for smoother performance
        function animateParallax() {
            // Ease the movement for smoother transitions
            targetX += (mouseX - targetX) * 0.05;
            targetY += (mouseY - targetY) * 0.05;
            
            layers.forEach(layer => {
                // Check if layer has data-speed attribute
                if (layer.hasAttribute('data-speed')) {
                    const speed = parseFloat(layer.getAttribute('data-speed'));
                    
                    // Calculate movement (invert for natural parallax feel)
                    const moveX = (targetX * speed) * -1; 
                    const moveY = (targetY * speed) * -1;
                    
                    // Use GSAP for the transform
                    gsap.to(layer, {
                        x: moveX,
                        y: moveY,
                        duration: 0.5,
                        ease: "power2.out",
                        overwrite: "auto" // Prevents animation queue buildup
                    });
                }
            });
            
            // Continue the animation loop
            requestAnimationFrame(animateParallax);
        }
        
        // Start the animation loop
        animateParallax();
        
        // Add subtle initial animation
        setTimeout(() => {
            mouseX = 10;
            mouseY = -10;
            setTimeout(() => {
                mouseX = 0;
                mouseY = 0;
            }, 1200);
        }, 500);
    }
});

