// Gallery data
const galleryData = [
  {
    id: 1,
    title: "The 2-Minute Rule_ How Micro-Breaks Can Supercharge Your Day",
    category: "blogs",
    image:
      "/assets/resource/1Batch/1.png",
    description: "In a world where productivity is often equated with long hours, it’s easy to forget that the human brain isn’t wired for endless concentration. Most employees push through fatigue, believing that staying glued to the screen proves commitment. In reality, working without breaks drains focus, weakens creativity, and increases burnout risk"
  },
  {
    id: 2,
    title: "Stress Isn’t the Enemy_ How to Turn Pressure Into Power",
    category: "blogs",
    image:
      "/assets/resource/1Batch/2.png",
    description: "Stress is often seen as the villain in the workplace. We associate it with sleepless nights, endless deadlines, and emotional exhaustion. Yet, not all stress is harmful. In fact, when understood and managed well, stress can be a catalyst for growth and resilience."
  },
  {
    id: 3,
    title: "Why Perfectionism is Killing Your Productivity — And How “Good Enough” Wins",
    category: "blogs",
    image:
      "/assets/resource/1Batch/3.png",
    description: "Perfectionism sounds admirable. After all, who wouldn’t want flawless results? But in reality, striving for perfection often leads to procrastination, wasted time, and burnout. It’s a silent productivity killer."
  },
  {
    id: 4,
    title: "The Gratitude Effect_ One Simple Shift That Rewires Your Brain",
    category: "blogs",
    image:
      "/assets/resource/1Batch/4.png",
    description: "Gratitude is more than a polite thank-you. It’s a scientifically backed practice that reshapes the way your brain processes experiences. Regularly practicing gratitude improves mood, reduces stress, and enhances overall wellbeing."
  },
  {
    id: 5,
    title: "Sleep Like a CEO_ Why Rest Is the Ultimate Productivity Tool",
    category: "blogs",
    image:
      "/assets/resource/1Batch/5.png",
    description: "Sleep is often sacrificed in the pursuit of productivity. Yet, science tells us that sleep is the foundation of high performance. Leaders who protect their sleep make better decisions, inspire healthier teams, and avoid burnout."
  },
  {
    id: 6,
    title: "The Value of Worker Well-Being",
    category: "research",
    image:
      "/assets/resource/researchbatch1/1.png",
    description: `Purpose of the Study: <br>
This research reviews the importance of worker wellbeing as a determinant of health, productivity, and public policy. It stresses that wellbeing is not simply the absence of illness, but the presence of positive health across physical, emotional, and social dimensions.
<br>
Methodology:
<br>
Narrative review of occupational health and organizational psychology studies, drawing on U.S. and global references (WHO, OSHA, National Academy of Medicine).

`
  },
  {
    id: 7,
    title: "State of the Global Workplace (Gallup Report)",
    category: "research",
    image:
      "/assets/resource/researchbatch1/2.png",
    description: `Purpose of the Study: <br>
Gallup’s report provides a global snapshot of employee engagement and wellbeing, measuring how workers feel about their jobs, stress, and productivity.
<br>
Methodology: <br>
Survey of over 100,000 employees across 140+ countries. Measures engagement, stress, and overall wellbeing.


`
  },
  {
    id: 8,
    title: "Advancing Workforce Well-Being (Deloitte Report)",
    category: "research",
    image:
      "/assets/resource/researchbatch1/3.png",
    description: `Purpose of the Study: <br>
This report explores the state of workforce wellbeing, with a particular focus on C-suite responsibility and how wellbeing is embedded into organizations.
<br>
Methodology: <br>
Survey-based study with thousands of respondents worldwide, including executives and employees. Focuses on wellbeing practices, leadership, and challenges.

`
  },
  {
    id: 9,
    title: "Indeed Global Work Wellbeing Report 2024",
    category: "research",
    image:
      "/assets/resource/researchbatch1/4.png",
    description: `Purpose of the Study: <br>
The report evaluates global workforce wellbeing, measuring engagement, culture, and stress across multiple industries and regions.
<br>
Methodology: <br>
Survey data collected from millions of workers globally using Indeed’s platform, analyzed in partnership with academic researchers.

`
  },
  {
    id: 10,
    title: "Impact of Financial Literacy, Mental Budgeting and Self-Control on Financial Wellbeing",
    category: "research",
    image:
      "/assets/resource/researchbatch1/5.png",
    description: `Purpose of the Study: <br>
This study examines how cognitive and behavioral factors (financial literacy, budgeting, and self-control) influence personal financial wellbeing.
<br>
Methodology: <br>
Empirical study using quantitative data, surveys, and statistical modeling to identify relationships between knowledge, behaviors, and financial wellbeing.

`
  },
 
];

// DOM elements
const tabs = document.querySelectorAll(".tab");
const galleryContainer = document.getElementById("gallery");

// Function to generate gallery items
function generateGalleryItems(items) {
  galleryContainer.innerHTML = "";

  if (items.length === 0) {
    galleryContainer.innerHTML =
      '<div class="no-results">No images found in this category.</div>';
    return;
  }

  items.forEach((item, index) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.setAttribute("data-category", item.category);
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="item-info">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;

    galleryContainer.appendChild(galleryItem);
  });
}

// Function to filter gallery by category
function filterGallery(category) {
  if (category === "all") {
    generateGalleryItems(galleryData);
  } else {
    const filteredItems = galleryData.filter(
      (item) => item.category === category
    );
    generateGalleryItems(filteredItems);
  }
}

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active class to clicked tab
    this.classList.add("active");

    // Filter gallery
    const category = this.getAttribute("data-category");
    filterGallery(category);
  });
});

// Initialize gallery with all items
generateGalleryItems(galleryData);
