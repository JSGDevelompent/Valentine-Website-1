        let currentSlide = 0;
        let sliderInterval;

        function createHearts() {
            const container = document.getElementById('heartsContainer');
            for (let i = 0; i < 50; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart-emoji';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.animationDuration = 5 + Math.random() * 10 + 's';
                container.appendChild(heart);
            }
        }

        function toggleCard() {
            document.querySelector('.valentine-card').classList.toggle('flipped');
        }

        function startSlider() {
            const sliderTrack = document.getElementById('sliderTrack');
            const slides = document.querySelectorAll('.slider-item');
            
            sliderInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            }, 3000);
        }

        function showMemoryModal() {
            document.getElementById('overlay').classList.add('active');
            document.getElementById('memoryModal').classList.add('active');
            document.querySelector('.container').style.transform = 'scale(0.9)';
            currentSlide = 0;
            startSlider();
        }

        function closeMemoryModal() {
            document.getElementById('overlay').classList.remove('active');
            document.getElementById('memoryModal').classList.remove('active');
            document.querySelector('.container').style.transform = 'scale(1)';
            clearInterval(sliderInterval);
        }
        window.onload = function() {
            createHearts();
            document.getElementById('overlay').addEventListener('click', closeMemoryModal);
        };
