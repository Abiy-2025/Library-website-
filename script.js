import SmoothScroll from 'smooth-scroll';

// Initialize smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
});

// Sample books data
const books = [
    {
        id: 1,
        title: "The Silent Echo",
        author: "Eliza Morgan",
        description: "A mesmerizing journey through time and memory.",
        category: "fiction",
        color: "#8a5cf7"
    },
    {
        id: 2,
        title: "Coding the Mind",
        author: "Jason Tech",
        description: "Understanding the psychology behind programming.",
        category: "non-fiction",
        color: "#6a4fc9"
    },
    {
        id: 3,
        title: "Midnight Shadows",
        author: "Robert Night",
        description: "A thrilling mystery set in Victorian London.",
        category: "mystery",
        color: "#5840b8"
    },
    {
        id: 4,
        title: "The Lost Garden",
        author: "Sophia Green",
        description: "A tale of discovery and growth in an abandoned garden.",
        category: "fiction",
        color: "#7a60cb"
    },
    {
        id: 5,
        title: "Quantum Physics Simplified",
        author: "Dr. Alan Wave",
        description: "Complex physics concepts explained for everyone.",
        category: "non-fiction",
        color: "#9b7ade"
    },
    {
        id: 6,
        title: "The Vanishing Painting",
        author: "Claire Mystery",
        description: "An art heist that baffles the world's greatest detectives.",
        category: "mystery",
        color: "#6a4fc9"
    },
    {
        id: 7,
        title: "Beyond the Horizon",
        author: "Mark Journey",
        description: "An epic adventure across uncharted territories.",
        category: "fiction",
        color: "#8a5cf7"
    },
    {
        id: 8,
        title: "Mindful Living",
        author: "Serena Peace",
        description: "Practical meditation techniques for everyday life.",
        category: "non-fiction",
        color: "#7a60cb"
    }
];

// Sample services data
const services = [
    {
        id: 1,
        title: "Premium Membership",
        price: "$9.99/month",
        description: "Unlimited access to our entire collection with premium features.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        id: 2,
        title: "Book Restoration",
        price: "From $49.99",
        description: "Professional restoration services for your precious books.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        id: 3,
        title: "Author Events",
        price: "$15 per event",
        description: "Exclusive access to author readings, signings and Q&A sessions.",
        image: "https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        id: 4,
        title: "Reading Rooms",
        price: "$5/hour",
        description: "Quiet, comfortable spaces designed for focused reading.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        id: 5,
        title: "Book Club",
        price: "$20/month",
        description: "Join our community of readers for weekly discussions and recommendations.",
        image: "https://images.unsplash.com/photo-1529148482759-b35b25c5f217?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        id: 6,
        title: "Home Delivery",
        price: "From $3.99",
        description: "Get your favorite books delivered straight to your doorstep.",
        image: "https://images.unsplash.com/photo-1554494878-8930373d4205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
];

// Function to generate random book cover SVG
function generateBookCover(color) {
    const randomPattern = Math.floor(Math.random() * 5) + 1;
    let svgPattern = '';
    
    switch(randomPattern) {
        case 1:
            svgPattern = `
                <rect width="100%" height="100%" fill="${color}"/>
                <circle cx="50%" cy="50%" r="30%" fill="rgba(255,255,255,0.1)"/>
                <circle cx="70%" cy="30%" r="15%" fill="rgba(255,255,255,0.2)"/>
            `;
            break;
        case 2:
            svgPattern = `
                <rect width="100%" height="100%" fill="${color}"/>
                <polygon points="0,0 100,0 50,100" fill="rgba(255,255,255,0.1)"/>
                <polygon points="0,100 100,100 50,0" fill="rgba(255,255,255,0.2)"/>
            `;
            break;
        case 3:
            svgPattern = `
                <rect width="100%" height="100%" fill="${color}"/>
                <rect x="10%" y="10%" width="80%" height="80%" rx="10" fill="rgba(255,255,255,0.1)"/>
                <rect x="20%" y="20%" width="60%" height="60%" rx="10" fill="rgba(255,255,255,0.2)"/>
            `;
            break;
        case 4:
            svgPattern = `
                <rect width="100%" height="100%" fill="${color}"/>
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.2)" stroke-width="5"/>
                <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.2)" stroke-width="5"/>
            `;
            break;
        case 5:
            svgPattern = `
                <rect width="100%" height="100%" fill="${color}"/>
                <circle cx="50%" cy="30%" r="20%" fill="rgba(255,255,255,0.1)"/>
                <rect x="20%" y="60%" width="60%" height="10%" fill="rgba(255,255,255,0.2)"/>
                <rect x="20%" y="75%" width="60%" height="5%" fill="rgba(255,255,255,0.2)"/>
            `;
            break;
    }
    
    return `<svg width="100%" height="100%" viewBox="0 0 100 100">${svgPattern}</svg>`;
}

// Function to render books
function renderBooks(booksToRender = books) {
    const booksGrid = document.querySelector('.books-grid');
    booksGrid.innerHTML = '';
    
    booksToRender.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <div class="book-cover">
                ${generateBookCover(book.color)}
            </div>
            <div class="book-info">
                <h3>${book.title}</h3>
                <p class="author">by ${book.author}</p>
                <p>${book.description}</p>
                <span class="category">${book.category}</span>
            </div>
        `;
        
        booksGrid.appendChild(bookCard);
    });
}

// Function to render services
function renderServices() {
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('service-card');
        
        serviceCard.innerHTML = `
            <div class="service-cover">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-info">
                <div>
                    <h3>${service.title}</h3>
                    <p class="service-price">${service.price}</p>
                </div>
                <p class="service-description">${service.description}</p>
            </div>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Function to handle filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter books
            if (filter === 'all') {
                renderBooks();
            } else {
                const filteredBooks = books.filter(book => book.category === filter);
                renderBooks(filteredBooks);
            }
        });
    });
}

// Function to handle form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // In a real app, you would send this data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
}

// Function to handle navigation active state
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Setup newsletter form
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('newsletter-email').value;
        
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        } else {
            alert('Please enter your email address.');
        }
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    renderServices();
    setupFilterButtons();
    setupContactForm();
    setupNewsletterForm();
    setupNavigation();
    
    // CTA button functionality
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        document.querySelector('#books').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Setup search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm) || 
                book.description.toLowerCase().includes(searchTerm)
            );
            renderBooks(filteredBooks);
            document.querySelector('#books').scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});