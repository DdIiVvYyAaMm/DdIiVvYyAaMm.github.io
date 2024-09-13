// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll('.links ul li a');

//     links.forEach(link => {
//         link.addEventListener('mouseover', () => {
//             link.style.color = '#0056b3';
//         });

//         link.addEventListener('mouseout', () => {
//             link.style.color = '#007BFF';
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const cvSection = document.querySelector('.cv-section');

//     function revealOnScroll() {
//         const sectionPosition = cvSection.getBoundingClientRect().top;
//         const screenPosition = window.innerHeight / 1.2;

//         if (sectionPosition < screenPosition) {
//             cvSection.classList.add('visible');
//         }
//     }

//     window.addEventListener('scroll', revealOnScroll);
// });

// gsap.registerPlugin(ScrollTrigger);
// const textElements = gsap.utils.toArray('.text');
// textElements.forEach(text => {
//     gsap.to(text, {
//       backgroundSize: '100%',
//       ease: 'none',
//       scrollTrigger: {
//         trigger: text,
//         start: 'center 80%',
//         end: 'center 20%',
//         scrub: true,
//       },
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.cv-section');

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
});

