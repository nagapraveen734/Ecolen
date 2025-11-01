// --- 1. MOCK DATA ---
// In a real app, this would come from an API
const photoData = [
    {
        id: 1,
        title: "Emerald Lake",
        category: "Scenery",
        location: "Yoho National Park, Canada",
        photographer: "A. visuals",
        contact:"9987489786",
        date: "2024-07-15",
        story: "Caught in the soft morning light, the lake was a perfect mirror, reflecting the stillness of the mountains. A truly peaceful, adventurous moment.",
        imgSrc: "https://cdn.wallpapersafari.com/77/85/g4Tf6Wq.jpg",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.469902517869!2d-116.536100684226!3d51.44146497962438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53775b37651a0001%3A0x86c0f666b6b55c63!2sEmerald%20Lake!5e0!3m2!1sen!2sus!4v1675890000000!5m2!1sen!2sus"
    },
    {
        id: 2,
        title: "Arctic Fox",
        category: "Wildlife",
        location: "Svalbard, Norway",
        photographer: "N. Geographer",
        contact:"9987489786",
        date: "2024-02-20",
        story: "After days of tracking, this curious fox appeared, its white coat a stark contrast to the blue ice. A fleeting glance of arctic life.",
        imgSrc: "https://tse1.mm.bing.net/th/id/OIP.Q3es4e1fSAXET1GnB5hCJgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        mapEmbedUrl: "https://tse3.mm.bing.net/th/id/OIP.7A7w0TZ1ir5ub93Ndk4E2QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: 3,
        title: "Coastal Arch",
        category: "Oceans",
        location: "Big Sur, California",
        photographer: "Cal. Dreams",
        contact:"9987489786",
        date: "2024-09-05",
        story: "The sunset exploded with color, framing the ancient arch as waves crashed below. The raw power of the ocean on display.",
        imgSrc: "https://static.vecteezy.com/system/resources/previews/048/614/533/non_2x/majestic-coastal-arch-with-waves-crashing-through-it-under-vibrant-sunset-sky-nature-background-free-photo.jpg",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.13329433306!2d-121.9016138847143!3d36.59827097999133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de431061f871b%3A0x6295f13a1a63c647!2sBixby%20Creek%20Bridge!5e0!3m2!1sen!2sus!4v1675890000002!5m2!1sen!2sus"
    },
    {
        id: 4,
        title: "Forest Trail",
        category: "Forest Trails",
        location: "Black Forest, Germany",
        photographer: "W. Wanderer",
        contact:"9987489786",
        date: "2024-05-10",
        story: "Sunlight filtering through the dense canopy, illuminating a path that seemed to go on forever. A walk of discovery and serenity.",
        imgSrc: "https://tse4.mm.bing.net/th/id/OIP.lqDs_4Gr3uaLtLjESSYMoQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169498.4526684781!2d8.0600000!3d48.0000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479086a42a48a3df%3A0x400d1820380f2d0!2sBlack%20Forest!5e0!3m2!1sen!2sus!4v1675890000003!5m2!1sen!2sus"
    },
    {
        id: 5,
        title: "Milky Way",
        category: "Sky Shots",
        location: "Atacama Desert, Chile",
        photographer: "S. Gazer",
        contact:"9987489786",
        date: "2024-08-01",
        story: "In one of the darkest places on Earth, the sky explodes with life. It's humbling to see our galaxy stretch out above.",
        imgSrc: "https://wallpaperaccess.com/full/2078478.jpg",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7607147.45293233!2d-70.93297127453488!3d-23.86311634591411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6a00000000000001%3A0x6f3801f6f1c40f5a!2sAtacama%20Desert!5e0!3m2!1sen!2sus!4v1675890000004!5m2!1sen!2sus"
    },
    {
        id: 6,
        title: "Alpenglow Peak",
        category: "Mountains",
        location: "The Dolomites, Italy",
        photographer: "A. visuals",
        contact:"9987489786",
        date: "2024-06-22",
        story: "Just as the sun dipped below the horizon, the peaks lit up in a vibrant red, known as 'Alpenglow.' A magical and fleeting moment of adventure.",
        imgSrc: "https://images.squarespace-cdn.com/content/v1/56578c63e4b0f06765e83ad4/8a158db5-d889-4bbe-9df9-2d02069d82fa/alpenglow+glacier+peak.jpeg?format=1500w",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.688881329596!2d12.1650000!3d46.5166670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47783352054a84e3%3A0x33b5c65a06941b21!2sDolomites!5e0!3m2!1sen!2sus!4v1675890000005!5m2!1sen!2sus"
    },
    {
        id: 7,
        title: "Cactus Bloom",
        category: "Desert Life",
        location: "Sonoran Desert, Arizona",
        photographer: "Cal. Dreams",
        contact:"9987489786",
        date: "2024-04-18",
        story: "The desert is often seen as barren, but in spring, it bursts with color. This single cactus bloom stood defiant and beautiful against the arid landscape.",
        imgSrc: "https://wallpapers.com/images/hd/sunny-cactus-arizona-desert-5yz6gtc3394vaan6.jpg",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732934.3414237618!2d-112.52187056250001!3d32.91000020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d1000000000001%3A0x1de16f1a82aeb92!2sSonoran%20Desert!5e0!3m2!1sen!2sus!4v1675890000006!5m2!1sen!2sus"
    },
    {
        id: 8,
        title: "Glacial Fjord",
        category: "Arctic View",
        location: "Greenland",
        photographer: "N. Geographer",
        contact:"9987489786",
        date: "2024-01-30",
        story: "The silence of the arctic is profound, broken only by the calving of glaciers. This view captures the immense, cold beauty of a world on the edge.",
        imgSrc: "https://vulplex.com/images/featured/Frozen-Splendor-Captivating-8k-Ultra-Hd-Wallpaper-Showcasing-the-Breathtaking-Antarctic-Glacier-and-its-Serene-Bluish-Waters-64be4ea0ef282.jpg",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449270.39517374!2d-53.27218388836592!3d71.70693600946026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x44f28f41349f7f8b%3A0x90f771c536449191!2sGreenland!5e0!3m2!1sen!2sus!4v1675890000007!5m2!1sen!2sus"
    },
    {
        id: 9,
        title: "Majestic Lion",
        category: "Wildlife",
        location: "Serengeti, Tanzania",
        photographer: "W. Wanderer",
        contact:"9987489786",
        date: "2024-10-02",
        story: "We watched this male lion for an hour as he patrolled his territory. The quiet confidence and power in his gaze was unforgettable.",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGRfWrMZEX15GzWcoTv_Vq1EkdfsAu8_4Vg&s",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013009.349666878!2d31.78280629555627!3d-2.3333330000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1835000000000001%3A0x7a7934c066348f6c!2sSerengeti%20National%20Park!5e0!3m2!1sen!2sus!4v1675890000008!5m2!1sen!2sus"
    }
];

// --- 2. UNIQUE DATA for filters ---
const categories = [...new Set(photoData.map(p => p.category))];
const photographers = [...new Set(photoData.map(p => p.photographer))];

// --- 3. DOM Element Cache ---
const dom = {
    views: document.querySelectorAll('.view'),
    homeView: document.getElementById('home-view'),
    galleryView: document.getElementById('gallery-view'),
    galleryContainer: document.getElementById('gallery-container'),
    
    nav: {
        logo: document.getElementById('nav-logo'),
        home: document.getElementById('nav-home'),
        categories: document.getElementById('nav-categories'),
        search: document.getElementById('nav-search')
    },
    
    heroButton: document.getElementById('hero-discover-btn'),
    
    detail: {
        view: document.getElementById('detail-view'),
        closeBtn: document.getElementById('detail-close-btn'),
        img: document.getElementById('detail-img'),
        title: document.getElementById('detail-title'),
        location: document.getElementById('detail-location'),
        category: document.getElementById('detail-category'),
        photographer: document.getElementById('detail-photographer'),
        date: document.getElementById('detail-date'),
        story: document.getElementById('detail-story'),
        mapIframe: document.getElementById('detail-map-iframe') // Added map iframe
    },
    
    categories: {
        overlay: document.getElementById('categories-overlay'),
        closeBtn: document.getElementById('categories-close-btn'),
        grid: document.getElementById('category-grid')
    },
    
    filter: {
        overlay: document.getElementById('filter-overlay'),
        closeBtn: document.getElementById('filter-close-btn'),
        form: document.getElementById('filter-form'),
        location: document.getElementById('filter-location'),
        photographer: document.getElementById('filter-photographer'),
        category: document.getElementById('filter-category')
    }
};

// --- 4. Core App Logic ---

/**
 * @function showView
 * @param {string} viewId - The ID of the view to make active
 * Handles the "page" transitions by fading out all views and fading in the target one.
 */
function showView(viewId) {
    dom.views.forEach(view => {
        view.classList.remove('active');
    });
    const viewToShow = document.getElementById(viewId);
    if (viewToShow) {
        viewToShow.classList.add('active');
        window.scrollTo(0, 0); // Scroll to top on view change
    }
}

/**
 * @function renderGallery
 * @param {Array} photos - An array of photo objects to render
 * Clears and repopulates the gallery container with photo cards.
 */
function renderGallery(photos) {
    dom.galleryContainer.innerHTML = ''; // Clear existing gallery
    
    if (photos.length === 0) {
        dom.galleryContainer.innerHTML = '<p>No photos found matching your criteria.</p>';
        return;
    }
    
    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.dataset.id = photo.id;
        
        card.innerHTML = `
            <img src="${photo.imgSrc}" alt="${photo.title}">
            <div class="card-info">
                <h3>${photo.title}</h3>
                <p>📍 ${photo.location}</p>
            </div>
        `;
        dom.galleryContainer.appendChild(card);
    });
    
    // Re-initialize the Intersection Observer for the new cards
    setupIntersectionObserver();
}

/**
 * @function populateDetailView
 * @param {object} photo - The photo object to display
 * Fills the detail view with the selected photo's data.
 */
function populateDetailView(photo) {
    dom.detail.img.style.backgroundImage = `url('${photo.imgSrc}')`;
    dom.detail.title.textContent = photo.title;
    dom.detail.location.textContent = photo.location;
    dom.detail.category.textContent = photo.category;
    dom.detail.photographer.textContent = photo.photographer;
    dom.detail.date.textContent = photo.date;
    dom.detail.story.textContent = photo.story;
    dom.detail.mapIframe.src = photo.mapEmbedUrl; // Set map source
    
    // Show/hide story and map based on content
    const storyContainer = dom.detail.story.closest('.photo-story');
    storyContainer.style.display = photo.story ? 'block' : 'none';
    
    const mapContainer = dom.detail.mapIframe.closest('.map-container');
    mapContainer.style.display = photo.mapEmbedUrl ? 'block' : 'none';
    
    // Adjust titles visibility
    document.getElementById('detail-story-title').style.display = photo.story ? 'block' : 'none';
    document.getElementById('detail-map-title').style.display = photo.mapEmbedUrl ? 'block' : 'none';
}

/**
 * @function populateFilterOptions
 * Populates the select dropdowns in the filter modal.
 */
function populateFilterOptions() {
    // Populate categories
    categories.forEach(cat => {
        const option = new Option(cat, cat);
        dom.filter.category.add(option);
    });
    
    // Populate photographers
    photographers.forEach(photog => {
        const option = new Option(photog, photog);
        dom.filter.photographer.add(option);
    });
}

/**
 * @function populateCategoriesOverlay
 * Fills the categories overlay with links.
 */
function populateCategoriesOverlay() {
    // Add "View All" first
    const allLink = document.createElement('span');
    allLink.className = 'category-link';
    allLink.textContent = 'View All';
    allLink.dataset.category = 'All';
    dom.categories.grid.appendChild(allLink);
    
    categories.forEach(cat => {
        const link = document.createElement('span');
        link.className = 'category-link';
        link.textContent = cat;
        link.dataset.category = cat;
        dom.categories.grid.appendChild(link);
    });
}

// --- 5. Intersection Observer (for scroll animations) ---
let observer;
function setupIntersectionObserver() {
    const options = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item must be visible
    };
    
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, options);
    
    // Observe all gallery cards
    document.querySelectorAll('.gallery-card').forEach(card => {
        observer.observe(card);
    });
}

// --- 6. Event Listeners ---

// Navigation
dom.nav.logo.addEventListener('click', () => showView('home-view'));
dom.nav.home.addEventListener('click', () => showView('home-view'));
dom.heroButton.addEventListener('click', () => showView('gallery-view'));

// Overlays
dom.nav.categories.addEventListener('click', () => dom.categories.overlay.classList.add('active'));
dom.categories.closeBtn.addEventListener('click', () => dom.categories.overlay.classList.remove('active'));

dom.nav.search.addEventListener('click', () => dom.filter.overlay.classList.add('active'));
dom.filter.closeBtn.addEventListener('click', () => dom.filter.overlay.classList.remove('active'));

// Close overlays on background click
[dom.categories.overlay, dom.filter.overlay].forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

// Gallery Click -> Open Detail View
dom.galleryContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.gallery-card');
    if (card) {
        const id = Number(card.dataset.id);
        const photo = photoData.find(p => p.id === id);
        if (photo) {
            populateDetailView(photo);
            dom.detail.view.classList.add('active');
        }
    }
});

// Close Detail View
dom.detail.closeBtn.addEventListener('click', () => {
    dom.detail.view.classList.remove('active');
    // Clear map src to stop loading
    dom.detail.mapIframe.src = "about:blank";
});

// Category Click
dom.categories.grid.addEventListener('click', (e) => {
    const link = e.target.closest('.category-link');
    if (link) {
        const category = link.dataset.category;
        let photosToRender;
        
        if (category === 'All') {
            photosToRender = photoData;
        } else {
            photosToRender = photoData.filter(p => p.category === category);
        }
        
        renderGallery(photosToRender);
        dom.categories.overlay.classList.remove('active');
        showView('gallery-view');
    }
});

// Filter Form Submit
dom.filter.form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const location = dom.filter.location.value.toLowerCase();
    const photographer = dom.filter.photographer.value;
    const category = dom.filter.category.value;
    
    const filteredPhotos = photoData.filter(photo => {
        const locationMatch = location ? photo.location.toLowerCase().includes(location) : true;
        const photographerMatch = photographer ? photo.photographer === photographer : true;
        const categoryMatch = category ? photo.category === category : true;
        
        return locationMatch && photographerMatch && categoryMatch;
    });
    
    renderGallery(filteredPhotos);
    dom.filter.overlay.classList.remove('active');
    showView('gallery-view');
});

// --- 7. Initial App Setup ---
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(photoData);
    populateFilterOptions();
    populateCategoriesOverlay();
    // Show home view by default (already set in HTML)
});
