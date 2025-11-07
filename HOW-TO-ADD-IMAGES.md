# How to Add Images to Your MFA Website

## Quick Overview
Your website needs 22 images in total. You can either use **free stock photos** from the websites below, or use **actual photos from Moi Forces Academy**.

---

## Option 1: Free Stock Photos (Fastest - 15 minutes)

### Step 1: Download from Pexels or Pixabay

Visit these websites:
- **Pexels**: https://www.pexels.com
- **Pixabay**: https://www.pixabay.com
- **Unsplash**: https://unsplash.com

### Step 2: Search and Download

| Image Name | Size | Search Term | Location |
|------------|------|-------------|----------|
| `hero-1.jpg` | 1920x1080 | "university campus" or "school building" | `C:\xampp\htdocs\MFA\images\` |
| `hero-2.jpg` | 1920x1080 | "students learning" or "classroom" | `C:\xampp\htdocs\MFA\images\` |
| `hero-3.jpg` | 1920x1080 | "graduation ceremony" or "students" | `C:\xampp\htdocs\MFA\images\` |
| `about-preview.jpg` | 800x600 | "school building" or "education" | `C:\xampp\htdocs\MFA\images\` |
| `sports.jpg` | 800x600 | "students sports" or "athletics" | `C:\xampp\htdocs\MFA\images\` |
| `cadets.jpg` | 800x600 | "military training" or "cadets" | `C:\xampp\htdocs\MFA\images\` |
| `music.jpg` | 800x600 | "students music" or "orchestra" | `C:\xampp\htdocs\MFA\images\` |
| `clubs.jpg` | 800x600 | "students group" or "teamwork" | `C:\xampp\htdocs\MFA\images\` |
| `news-1.jpg` | 600x400 | "school achievement" or "trophy" | `C:\xampp\htdocs\MFA\images\` |
| `news-2.jpg` | 600x400 | "students event" or "science" | `C:\xampp\htdocs\MFA\images\` |
| `news-3.jpg` | 600x400 | "students technology" or "computers" | `C:\xampp\htdocs\MFA\images\` |
| `alumni-1.jpg` | 150x150 | "professional headshot male" | `C:\xampp\htdocs\MFA\images\` |
| `alumni-2.jpg` | 150x150 | "professional headshot female" | `C:\xampp\htdocs\MFA\images\` |
| `parent-1.jpg` | 150x150 | "professional headshot woman" | `C:\xampp\htdocs\MFA\images\` |
| `cta-bg.jpg` | 1920x600 | "school campus aerial" | `C:\xampp\htdocs\MFA\images\` |
| `about-hero.jpg` | 1920x600 | "historic building" or "school heritage" | `C:\xampp\htdocs\MFA\images\` |
| `principal.jpg` | 400x500 | "professional headshot principal" | `C:\xampp\htdocs\MFA\images\` |
| `team-1.jpg` | 400x500 | "professional woman" | `C:\xampp\htdocs\MFA\images\` |
| `team-2.jpg` | 400x500 | "professional man" | `C:\xampp\htdocs\MFA\images\` |
| `team-3.jpg` | 400x500 | "professional woman teacher" | `C:\xampp\htdocs\MFA\images\` |
| `team-4.jpg` | 400x500 | "professional man teacher" | `C:\xampp\htdocs\MFA\images\` |
| `contact-hero.jpg` | 1920x600 | "school contact" or "campus entrance" | `C:\xampp\htdocs\MFA\images\` |

### Step 3: Resize Images (If Needed)

If the downloaded images aren't the exact size:

**Option A: Online Tools (Easy)**
- Visit https://www.iloveimg.com/resize-image
- Upload your image
- Enter the exact dimensions from the table above
- Download and rename to match the Image Name column

**Option B: Windows Photos App**
- Right-click image → Edit with Photos
- Resize → Custom dimensions → Enter size
- Save a copy with the correct name

---

## Option 2: Use Actual School Photos (Recommended for Production)

### What You Need:
1. **Hero Images (3)**: Wide shots of campus, buildings, or key areas
2. **Activities (4)**: Photos of sports, cadets, music, clubs
3. **News (3)**: Recent events, achievements, or activities
4. **People (10)**: Principal, teachers, alumni, parents (headshots)
5. **Backgrounds (3)**: Wide landscape shots for headers

### How to Get Them:
1. Contact the school's photography department
2. Check the school's archive or yearbooks
3. Take new photos with a decent camera/smartphone
4. Ask permission for any photos with people

### Resize and Save:
- Use the same table above for exact dimensions
- Save all images in: `C:\xampp\htdocs\MFA\images\`
- Use exact filenames from the table

---

## Option 3: Quick Placeholder Generator (Testing Only)

If you just want to see how the site looks with images quickly:

### Create Colored Placeholders:

1. Open PowerShell in `C:\xampp\htdocs\MFA`
2. Run this command:

```powershell
# Create simple colored placeholder images
Add-Type -AssemblyName System.Drawing

function Create-Placeholder {
    param($width, $height, $filename, $text)
    $bmp = New-Object System.Drawing.Bitmap($width, $height)
    $graphics = [System.Drawing.Graphics]::FromImage($bmp)
    
    # Sky blue background
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(14, 165, 233))
    $graphics.FillRectangle($brush, 0, 0, $width, $height)
    
    # White text
    $font = New-Object System.Drawing.Font("Arial", 48, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    $graphics.DrawString($text, $font, $textBrush, 50, $height/2 - 50)
    
    $bmp.Save("images\$filename", [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Host "Created $filename" -ForegroundColor Green
}

# Create all placeholders
Create-Placeholder 1920 1080 "hero-1.jpg" "MFA Campus"
Create-Placeholder 1920 1080 "hero-2.jpg" "Excellence"
Create-Placeholder 1920 1080 "hero-3.jpg" "Our Commitment"
Create-Placeholder 800 600 "about-preview.jpg" "About MFA"
Create-Placeholder 800 600 "sports.jpg" "Sports"
Create-Placeholder 800 600 "cadets.jpg" "Cadets"
Create-Placeholder 800 600 "music.jpg" "Music"
Create-Placeholder 800 600 "clubs.jpg" "Clubs"
Create-Placeholder 600 400 "news-1.jpg" "News 1"
Create-Placeholder 600 400 "news-2.jpg" "News 2"
Create-Placeholder 600 400 "news-3.jpg" "News 3"
Create-Placeholder 150 150 "alumni-1.jpg" "A1"
Create-Placeholder 150 150 "alumni-2.jpg" "A2"
Create-Placeholder 150 150 "parent-1.jpg" "P1"
Create-Placeholder 1920 600 "cta-bg.jpg" "Join MFA"
Create-Placeholder 1920 600 "about-hero.jpg" "Our Story"
Create-Placeholder 400 500 "principal.jpg" "Principal"
Create-Placeholder 400 500 "team-1.jpg" "Team 1"
Create-Placeholder 400 500 "team-2.jpg" "Team 2"
Create-Placeholder 400 500 "team-3.jpg" "Team 3"
Create-Placeholder 400 500 "team-4.jpg" "Team 4"
Create-Placeholder 1920 600 "contact-hero.jpg" "Contact Us"

Write-Host "`nAll placeholder images created!" -ForegroundColor Cyan
```

**Note**: These are basic colored placeholders. Replace them with real photos before launching!

---

## Verification

After adding all images:

1. Check that all 22 files exist in `C:\xampp\htdocs\MFA\images\`
2. Visit http://localhost/MFA
3. Scroll through all pages
4. Check that images appear correctly
5. Test on mobile view (resize browser window)

---

## Troubleshooting

### Images Don't Show Up?
1. Check file names exactly match (case-sensitive)
2. Ensure files are .jpg format
3. Verify they're in the `images` folder
4. Clear browser cache (Ctrl+Shift+R)

### Images Look Stretched?
- Make sure you used the correct dimensions from the table
- Use the resize tools mentioned above

### Can't Find Good Photos?
- Start with 5-6 key images (heroes, about)
- Add more gradually
- Placeholder option works for testing

---

## Next Steps

Once images are added:

1. ✅ Test the website thoroughly
2. ✅ Show it to stakeholders for feedback
3. ✅ Replace placeholders with actual school photos
4. ✅ Create remaining pages (Academics, Admissions, etc.)
5. ✅ Set up contact form backend
6. ✅ Deploy to live hosting

---

## Need Help?

If you're stuck:
1. Start with Option 3 (Placeholders) to see the site working
2. Gradually replace with Option 1 (Stock photos)
3. Finally use Option 2 (Real school photos) for launch

**Remember**: The website works perfectly - it just needs images to look complete!
