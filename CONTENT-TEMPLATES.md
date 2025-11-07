# 📝 Content Update Templates

Quick copy-paste templates for common content updates.

---

## 🗞️ Adding a News Article

**Location**: `index.html` - Find the news grid section

**Copy this template**:
```html
<article class="news-card" data-aos="fade-up">
    <div class="news-image">
        <img src="images/news-NEW.jpg" alt="Description of news image">
        <div class="news-date">
            <span class="day">15</span>
            <span class="month">Nov</span>
        </div>
    </div>
    <div class="news-content">
        <div class="news-meta">
            <span><i class="fas fa-tag"></i> Category</span>
            <span><i class="fas fa-user"></i> Author</span>
        </div>
        <h3>Your News Headline Here</h3>
        <p>Brief description of the news article. Keep it concise and engaging, around 100-150 characters.</p>
        <a href="news.html#article-id" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

**Steps**:
1. Find `<div class="news-grid">` in index.html
2. Copy existing article or use template above
3. Update: date, image, title, description, link
4. Save and refresh

---

## 👥 Adding a Team Member

**Location**: `about.html` - Leadership team section

**Template**:
```html
<div class="team-member" data-aos="fade-up">
    <div class="member-image">
        <img src="images/team-NEW.jpg" alt="Name of team member">
    </div>
    <div class="member-info">
        <h3>Full Name</h3>
        <p class="position">Job Title/Position</p>
        <p class="bio">Qualifications | Years of experience</p>
    </div>
</div>
```

---

## 💬 Adding a Testimonial

**Location**: `index.html` - Testimonials section

**Template**:
```html
<div class="testimonial-card" data-aos="fade-up">
    <div class="quote-icon">
        <i class="fas fa-quote-left"></i>
    </div>
    <p class="testimonial-text">"Insert the testimonial quote here. Make it authentic and impactful. Keep it between 50-150 words for best visual balance."</p>
    <div class="testimonial-author">
        <img src="images/testimonial-NEW.jpg" alt="Person name">
        <div class="author-info">
            <h4>Person Name</h4>
            <p>Role - Alumni/Parent/Student</p>
        </div>
    </div>
</div>
```

---

## 🎓 Adding an Academic Program

**Location**: `index.html` - Academic programs section

**Template**:
```html
<div class="program-card" data-aos="zoom-in">
    <div class="program-icon">
        <i class="fas fa-ICON-NAME"></i>
    </div>
    <h3>Program Name</h3>
    <p>Brief description of the program, highlighting key benefits and features.</p>
    <a href="academics.html#program-id" class="card-link">Learn More <i class="fas fa-arrow-right"></i></a>
</div>
```

**Icon options**:
- `fa-flask` - Sciences
- `fa-calculator` - Mathematics
- `fa-language` - Languages
- `fa-laptop-code` - Technology
- `fa-palette` - Arts
- `fa-globe` - Geography
- `fa-book` - Literature

---

## 🏃 Adding a Co-curricular Activity

**Location**: `index.html` - Activities section

**Template**:
```html
<div class="activity-card" data-aos="flip-left">
    <img src="images/activity-NEW.jpg" alt="Activity description">
    <div class="activity-overlay">
        <div class="activity-content">
            <i class="fas fa-ICON-NAME"></i>
            <h3>Activity Name</h3>
            <p>Brief description of the activity</p>
        </div>
    </div>
</div>
```

**Icon options**:
- `fa-running` - Sports
- `fa-medal` - Cadets
- `fa-music` - Music/Drama
- `fa-users` - Clubs
- `fa-microscope` - Science Club
- `fa-gavel` - Debate

---

## 📊 Updating Statistics

**Location**: `index.html` - Stats section

**Find and update**:
```html
<div class="stat-card" data-aos="fade-up">
    <i class="fas fa-graduation-cap stat-icon"></i>
    <h3 class="stat-number" data-count="2000">0</h3>
    <!-- ↑ Change 2000 to your actual number -->
    <p class="stat-label">Students</p>
</div>
```

**Available icons**:
- `fa-graduation-cap` - Students
- `fa-chalkboard-teacher` - Staff
- `fa-trophy` - Years/Awards
- `fa-award` - Success rate
- `fa-building` - Facilities
- `fa-book-reader` - Programs

---

## ❓ Adding FAQ

**Location**: `contact.html` - FAQ section

**Template**:
```html
<div class="faq-item" data-aos="fade-up">
    <button class="faq-question">
        <span>Your question here?</span>
        <i class="fas fa-chevron-down"></i>
    </button>
    <div class="faq-answer">
        <p>Your detailed answer here. You can include <a href="#">links</a> and multiple sentences for comprehensive information.</p>
    </div>
</div>
```

---

## 📅 Timeline/History Entry

**Location**: `about.html` - History timeline

**Template**:
```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <span class="timeline-year">2025</span>
        <h3>Milestone Title</h3>
        <p>Description of what happened during this period or event.</p>
    </div>
</div>
```

**Note**: Alternate `data-aos` between "fade-right" and "fade-left" for visual effect.

---

## 🎯 Core Values Card

**Location**: `about.html` - Values section

**Template**:
```html
<div class="value-card" data-aos="flip-up">
    <div class="value-icon">
        <i class="fas fa-ICON-NAME"></i>
    </div>
    <h3>Value Name</h3>
    <p>Description of this core value and how it's practiced at MFA.</p>
</div>
```

---

## 📞 Contact Information Card

**Location**: `contact.html` - Contact info section

**Template**:
```html
<div class="contact-info-card" data-aos="zoom-in">
    <div class="contact-icon">
        <i class="fas fa-ICON-NAME"></i>
    </div>
    <h3>Card Title</h3>
    <p>Information line 1<br>
    Information line 2<br>
    Information line 3</p>
</div>
```

---

## 🔗 Navigation Menu Item

**Location**: ALL HTML files - Navigation section

**For regular link**:
```html
<li><a href="page.html" class="nav-link">Link Text</a></li>
```

**For dropdown menu**:
```html
<li class="dropdown">
    <a href="#" class="nav-link">Menu Name <i class="fas fa-chevron-down"></i></a>
    <ul class="dropdown-menu">
        <li><a href="page.html#section1">Submenu 1</a></li>
        <li><a href="page.html#section2">Submenu 2</a></li>
        <li><a href="page.html#section3">Submenu 3</a></li>
    </ul>
</li>
```

---

## 📱 Social Media Links

**Location**: ALL HTML files - Footer section

**Update URLs**:
```html
<div class="social-links">
    <a href="https://facebook.com/YourPage" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com/YourHandle" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/YourProfile" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com/company/YourCompany" aria-label="LinkedIn">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a href="https://youtube.com/c/YourChannel" aria-label="YouTube">
        <i class="fab fa-youtube"></i>
    </a>
</div>
```

**Additional social icons available**:
- `fa-tiktok` - TikTok
- `fa-whatsapp` - WhatsApp
- `fa-telegram` - Telegram

---

## 📍 Updating Google Maps

**Location**: `contact.html` - Map section

**Steps**:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your school location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace existing iframe in contact.html

**Template**:
```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy"
    title="Moi Forces Academy Location">
</iframe>
```

---

## 🎨 Changing Colors

**Location**: `css/styles.css` - Top of file

**Find and update**:
```css
:root {
    /* Primary colors - change these values */
    --primary-color: #1a472a;      /* Main green */
    --secondary-color: #8B0000;    /* Maroon/red */
    --accent-color: #FFD700;       /* Gold */
    
    /* Don't change these unless necessary */
    --white: #ffffff;
    --text-dark: #2c3e50;
    --text-light: #6c757d;
}
```

**How to find colors**:
1. Use a color picker tool on your logo
2. Use online color palette generators
3. Get hex codes from your brand guidelines

---

## ✏️ Quick Text Updates

### Homepage Hero Text
**Location**: `index.html` - Line ~75

```html
<h2 class="hero-title">Your New Title</h2>
<p class="hero-subtitle">Your new subtitle here</p>
```

### About Section Text
**Location**: `index.html` - About preview section

```html
<h3>Building Future Leaders</h3>
<p>Your custom text about the school...</p>
```

### Footer Copyright
**Location**: ALL HTML files - Footer bottom

```html
<p>&copy; 2025 Moi Forces Academy. All rights reserved.</p>
<!-- Update year annually -->
```

---

## 🖼️ Image Best Practices

### Adding Any Image

**Steps**:
1. Resize image to recommended dimensions
2. Optimize/compress (aim for < 200KB)
3. Save with descriptive name (lowercase, hyphens)
4. Upload to `images/` folder
5. Update HTML

**HTML template**:
```html
<img src="images/your-image-name.jpg" 
     alt="Descriptive text for accessibility" 
     loading="lazy">
```

**Always include**:
- `src` - Path to image
- `alt` - Description for screen readers
- `loading="lazy"` - For better performance (optional)

---

## 📋 Common Icon Names

For Font Awesome icons (use in `<i class="fas fa-ICON"></i>`):

### Academic
- `book`, `book-reader`, `graduation-cap`, `user-graduate`
- `certificate`, `award`, `medal`, `trophy`
- `chalkboard`, `chalkboard-teacher`

### Contact
- `phone`, `envelope`, `map-marker-alt`, `clock`
- `mobile-alt`, `fax`, `globe`

### Social
- `facebook-f`, `twitter`, `instagram`, `linkedin-in`
- `youtube`, `tiktok`, `whatsapp`

### Activities
- `running`, `football-ball`, `basketball-ball`
- `music`, `guitar`, `microphone`
- `users`, `user-friends`, `hands-helping`

### Navigation
- `chevron-right`, `chevron-left`, `chevron-down`
- `arrow-right`, `arrow-left`, `bars`, `times`

**Full icon list**: https://fontawesome.com/icons

---

## 💡 Tips for Content Updates

1. **Always backup** before making changes
2. **Test on multiple devices** after updates
3. **Keep text concise** - 50-150 words per section
4. **Use high-quality images** - sharp, well-lit
5. **Maintain consistency** - same tone, style
6. **Update regularly** - weekly for news, monthly for content
7. **Check links** - ensure all URLs work
8. **Optimize images** - compress before upload
9. **Use descriptive alt text** - for accessibility
10. **Spell-check everything** - professionalism matters

---

## 🔧 Common Update Workflow

### Weekly Update Routine
1. Add new news article (if any)
2. Update events calendar
3. Check and respond to contact forms
4. Review and fix any broken links
5. Add new photos to gallery

### Monthly Update Routine
1. Review all content for accuracy
2. Update statistics if changed
3. Add new testimonials
4. Refresh featured news
5. Update team photos if needed
6. Check site performance

### Quarterly Update Routine
1. Major content review
2. Update academic achievements
3. Refresh about section
4. Add seasonal photos
5. Review and update FAQ
6. Check mobile responsiveness

---

## 📞 Need Help?

If you're stuck updating content:

1. **Check this file first** - Common templates above
2. **Read README.md** - Comprehensive guide
3. **Check SETUP-GUIDE.md** - Setup instructions
4. **View similar sections** - Copy existing structure
5. **Contact support** - webmaster@mfa.ac.ke

---

**Pro Tip**: Use your browser's "Find" function (Ctrl+F) to quickly locate sections in HTML files!

---

**Last Updated**: November 3, 2025  
**Version**: 1.0  
**For**: Moi Forces Academy Website
