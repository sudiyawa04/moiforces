# 🚀 Quick Setup Guide - Moi Forces Academy Website

This guide will help you get the MFA website up and running in minutes.

---

## ✅ Pre-Setup Checklist

Before starting, ensure you have:
- [ ] XAMPP installed (or any web server)
- [ ] Modern web browser (Chrome, Firefox, Edge, Safari)
- [ ] Text editor (VS Code recommended)
- [ ] School logo (logo.png) - ✅ Already in images folder
- [ ] Internet connection (for CDN resources)

---

## 🎯 5-Minute Quick Start

### Step 1: Verify Installation ✅
Your website is already in the correct location:
```
C:\xampp\htdocs\MFA
```

### Step 2: Start Web Server

**Using XAMPP:**
1. Open **XAMPP Control Panel**
2. Click **Start** next to **Apache**
3. Wait for it to turn green

![XAMPP Screenshot](https://via.placeholder.com/600x200/1a472a/ffffff?text=Start+Apache+in+XAMPP)

### Step 3: Open Website

**In your browser, visit:**
```
http://localhost/MFA
```

Or directly:
```
http://localhost/MFA/index.html
```

### Step 4: Verify Everything Works

Check these features:
- [ ] Page loads correctly
- [ ] Navigation menu works
- [ ] Hero slider auto-plays
- [ ] Animations appear on scroll
- [ ] All links navigate properly
- [ ] Mobile menu toggle works (resize browser)

---

## 📁 File Structure Overview

```
MFA/
├── 📄 index.html           ← Homepage
├── 📄 about.html           ← About Us page
├── 📄 contact.html         ← Contact page
├── 📄 README.md            ← Full documentation
├── 📄 IMAGE-REQUIREMENTS.md ← Image guide
│
├── 📂 css/
│   └── styles.css          ← All styles (edit colors here)
│
├── 📂 js/
│   └── script.js           ← All JavaScript
│
└── 📂 images/
    └── logo.png            ← School logo ✅
    └── [other images needed - see IMAGE-REQUIREMENTS.md]
```

---

## 🎨 First Customizations

### 1. Update School Contact Information

**Edit ALL HTML files** (index.html, about.html, contact.html):

Find the footer section and update:
```html
<!-- In Footer -->
<li>
    <i class="fas fa-map-marker-alt"></i>
    <span>P.O. Box 1234-00100<br>Nairobi, Kenya</span>
    <!-- ↑ Replace with actual address -->
</li>
<li>
    <i class="fas fa-phone"></i>
    <span>+254 700 000 000</span>
    <!-- ↑ Replace with actual phone -->
</li>
<li>
    <i class="fas fa-envelope"></i>
    <span>info@mfa.ac.ke</span>
    <!-- ↑ Replace with actual email -->
</li>
```

**Also update in Contact page** (contact.html):
- Contact information cards
- Contact form department emails
- Google Maps coordinates

### 2. Verify School Colors

The colors are extracted from your badge logo. Check `css/styles.css`:

```css
:root {
    --primary-color: #1a472a;      /* Deep Green - check logo */
    --secondary-color: #8B0000;    /* Dark Red - check logo */
    --accent-color: #FFD700;       /* Gold - check logo */
}
```

**To update:** Use a color picker tool on your logo, then replace these values.

### 3. Update Statistics (Homepage)

**Edit index.html**, find the stats section:

```html
<h3 class="stat-number" data-count="2000">0</h3>
<p class="stat-label">Students</p>
<!-- Update data-count with actual number -->

<h3 class="stat-number" data-count="150">0</h3>
<p class="stat-label">Staff Members</p>
<!-- Update with actual staff count -->

<h3 class="stat-number" data-count="50">0</h3>
<p class="stat-label">Years of Excellence</p>
<!-- Update with actual years since founding -->
```

### 4. Add Social Media Links

**In ALL HTML files**, update footer social links:

```html
<div class="social-links">
    <a href="https://facebook.com/your-page" aria-label="Facebook">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com/your-handle" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <!-- Add actual social media URLs -->
</div>
```

---

## 📸 Adding Images

### Priority: Add These Images First

1. **Hero Slider Images** (3 required)
   - Save as: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`
   - Size: 1920 x 1080px
   - Location: `images/` folder

2. **Activity Images** (4 required)
   - Save as: `sports.jpg`, `cadets.jpg`, `music.jpg`, `clubs.jpg`
   - Size: 800 x 600px
   - Location: `images/` folder

3. **News Thumbnails** (3 required)
   - Save as: `news-1.jpg`, `news-2.jpg`, `news-3.jpg`
   - Size: 600 x 400px
   - Location: `images/` folder

**See `IMAGE-REQUIREMENTS.md` for complete list and specifications.**

---

## 🔧 Common Customizations

### Change Website Title

**In each HTML file's `<head>` section:**

```html
<title>Your Custom Title - Moi Forces Academy</title>
```

### Update Meta Description (for SEO)

```html
<meta name="description" content="Your custom description here">
```

### Change Font

**In CSS file** (`css/styles.css`):

```css
:root {
    --font-primary: 'Poppins', sans-serif;
    --font-heading: 'Playfair Display', serif;
}
```

Replace with your preferred Google Fonts.

### Adjust Section Spacing

```css
.section-padding {
    padding: 4rem 0; /* Increase/decrease for more/less space */
}
```

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Open in Chrome
- [ ] Open in Firefox
- [ ] Open in Edge
- [ ] Test all page links
- [ ] Test dropdown menus
- [ ] Test hero slider controls
- [ ] Test contact form
- [ ] Scroll through all sections
- [ ] Check animations

### Mobile Testing
- [ ] Resize browser to mobile size
- [ ] Test hamburger menu
- [ ] Test touch interactions
- [ ] Check image sizing
- [ ] Test form on mobile
- [ ] Check readability
- [ ] Test on actual phone/tablet

### Performance Testing
- [ ] Page loads in < 3 seconds
- [ ] Images load properly
- [ ] No console errors (F12 Developer Tools)
- [ ] Smooth scrolling
- [ ] Animations don't lag

---

## 📝 Content Update Guide

### Updating Homepage Hero Text

**File**: `index.html`  
**Find**: Hero slide sections (around line 70-120)

```html
<div class="hero-slide active">
    <div class="hero-content">
        <h2 class="hero-title">Your New Title</h2>
        <p class="hero-subtitle">Your new subtitle</p>
    </div>
</div>
```

### Updating About Section

**File**: `index.html`  
**Find**: About preview section

```html
<div class="about-text">
    <h3>Building Future Leaders</h3>
    <p>Update this paragraph with your content...</p>
</div>
```

### Adding News Article

**File**: `index.html`  
**Find**: News grid section  
**Copy** one news card and update:

```html
<article class="news-card">
    <div class="news-image">
        <img src="images/your-news-image.jpg" alt="Description">
        <div class="news-date">
            <span class="day">15</span>
            <span class="month">Nov</span>
        </div>
    </div>
    <div class="news-content">
        <h3>Your News Title</h3>
        <p>Your news description...</p>
        <a href="#" class="read-more">Read More</a>
    </div>
</article>
```

---

## 🌐 Making Website Live

### Option 1: Using Your Current Hosting

**If you have cPanel hosting:**

1. **Compress MFA folder to ZIP**
   ```
   Right-click MFA folder → Send to → Compressed (zipped) folder
   ```

2. **Login to cPanel**
   - Go to your hosting control panel
   - Navigate to File Manager

3. **Upload**
   - Go to `public_html` folder
   - Upload ZIP file
   - Extract files

4. **Test**
   - Visit: `http://yourschool.com`

### Option 2: Free Hosting (GitHub Pages)

1. **Create GitHub account** (if you don't have one)
   - Go to github.com
   - Sign up

2. **Create new repository**
   - Name it: `mfa-website`
   - Make it public

3. **Upload files**
   - Drag and drop all MFA files
   - Commit changes

4. **Enable GitHub Pages**
   - Go to Settings
   - Pages section
   - Select main branch
   - Save

5. **Access website**
   - URL: `https://yourusername.github.io/mfa-website`

### Option 3: Professional Hosting

**Recommended providers in Kenya:**
- **Safaricom Cloud**
- **Truehost Kenya**
- **Sasahost**

**Average cost**: KES 3,000 - 10,000/year

---

## 🆘 Troubleshooting

### Problem: Page shows "404 Not Found"
**Solution**: 
- Check XAMPP Apache is running
- Verify URL: `http://localhost/MFA`
- Ensure files are in `C:\xampp\htdocs\MFA`

### Problem: Images not showing
**Solution**:
- Check images are in `images/` folder
- Verify file names match exactly (case-sensitive)
- Check file extensions (.jpg, .png)

### Problem: Menu not working
**Solution**:
- Clear browser cache (Ctrl+Shift+Delete)
- Check JavaScript console for errors (F12)
- Verify `script.js` is in `js/` folder

### Problem: Mobile menu not opening
**Solution**:
- Test on actual device, not just browser resize
- Check JavaScript is loaded
- Verify hamburger icon HTML exists

### Problem: Contact form not submitting
**Solution**:
- Form needs backend (PHP/Node.js) to actually send emails
- For now, it shows validation only
- See README.md for backend setup

---

## 📞 Getting Help

### Resources
1. **Full Documentation**: Read `README.md`
2. **Image Guide**: Read `IMAGE-REQUIREMENTS.md`
3. **Online Resources**:
   - W3Schools: https://w3schools.com
   - MDN Web Docs: https://developer.mozilla.org
   - Stack Overflow: https://stackoverflow.com

### Support
- **Technical Issues**: webmaster@mfa.ac.ke
- **Content Updates**: info@mfa.ac.ke

---

## ✨ Next Steps

After basic setup:

1. **Add all images** (see IMAGE-REQUIREMENTS.md)
2. **Create remaining pages**:
   - academics.html
   - admissions.html
   - activities.html
   - news.html
   - gallery.html
3. **Set up contact form backend**
4. **Configure SSL certificate** (for https://)
5. **Set up analytics** (Google Analytics)
6. **Submit to search engines** (Google, Bing)

---

## 🎉 Congratulations!

Your MFA website is now ready! 

**What you have:**
- ✅ Modern, responsive website
- ✅ Professional design with school colors
- ✅ Interactive features and animations
- ✅ Contact form (frontend ready)
- ✅ SEO-optimized structure
- ✅ Accessible and fast-loading

**Remember:**
- Keep content updated regularly
- Add real school photos ASAP
- Test on different devices
- Backup your files regularly

---

**Need More Help?**  
Open `README.md` for comprehensive documentation.

**Ready to customize?**  
Start editing HTML files with your preferred text editor!

---

**Document Version**: 1.0  
**Last Updated**: November 3, 2025  
**Quick Setup Time**: ~5 minutes  
**Full Customization Time**: 1-2 hours
