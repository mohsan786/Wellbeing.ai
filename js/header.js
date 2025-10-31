const header = `
    <a href="index.html">
        <img src="assets/index/header-sehatti-posts.png" class="header-sehatti-posts">
    </a>

    <!-- BURGER MENU BUTTON (hidden on desktop) -->
    <div class="burger" id="burger">
        <span></span>
        <span></span>
        <span></span>
    </div>

    <!-- NAVIGATION -->
    <div class="header-nav" id="mobileNav">
        <p class="header-text"><a href="about-us.html">About Us</a></p>
        <p class="header-text"><a href="ecosystem.html">Ecosystem</a></p>
        <p class="header-text"><a href="solutions.html">Solutions</a></p>
        <p class="header-text"><a href="resources.html">Resources</a></p>
        <p class="header-text"><a href="ai-insights.html">AI Insights</a></p>
    </div>

    <a href="request-a-demo.html" class="btn-cta header-btn-cta hover-dark">Request A Demo</a>
`;

document.querySelector("#header").innerHTML = header;

		document.getElementById("burger").addEventListener("click", function () {
			document.getElementById("mobileNav").classList.toggle("mobile-open");
		});