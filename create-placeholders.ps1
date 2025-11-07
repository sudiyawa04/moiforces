# Simple Placeholder Image Generator for MFA Website
# This creates basic colored placeholder images for testing

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "MFA Placeholder Image Generator" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Load System.Drawing
Add-Type -AssemblyName System.Drawing

# Create images directory if it doesn't exist
$imagesDir = "C:\xampp\htdocs\MFA\images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir | Out-Null
}

# Function to create placeholder
function Create-Placeholder {
    param(
        [int]$width,
        [int]$height,
        [string]$filename,
        [string]$text
    )
    
    try {
        # Create bitmap
        $bmp = New-Object System.Drawing.Bitmap($width, $height)
        $graphics = [System.Drawing.Graphics]::FromImage($bmp)
        
        # Sky blue background
        $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(14, 165, 233))
        $graphics.FillRectangle($brush, 0, 0, $width, $height)
        
        # White text
        $fontSize = [Math]::Min($width, $height) / 20
        $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
        $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
        
        # Center text
        $textSize = $graphics.MeasureString($text, $font)
        $x = ($width - $textSize.Width) / 2
        $y = ($height - $textSize.Height) / 2
        
        $graphics.DrawString($text, $font, $textBrush, $x, $y)
        
        # Save
        $filepath = Join-Path $imagesDir $filename
        $bmp.Save($filepath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        
        # Cleanup
        $bmp.Dispose()
        $graphics.Dispose()
        
        Write-Host "Created $filename" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "Failed to create $filename" -ForegroundColor Red
        return $false
    }
}

Write-Host "Creating placeholder images..." -ForegroundColor Yellow
Write-Host ""

# Hero slider images
Write-Host "Hero Slider Images..." -ForegroundColor Magenta
Create-Placeholder 1920 1080 "hero-1.jpg" "MFA Campus"
Create-Placeholder 1920 1080 "hero-2.jpg" "Excellence"
Create-Placeholder 1920 1080 "hero-3.jpg" "Our Commitment"

# About section preview
Write-Host "About Section..." -ForegroundColor Magenta
Create-Placeholder 800 600 "about-preview.jpg" "About MFA"

# Activity images
Write-Host "Co-curricular Activities..." -ForegroundColor Magenta
Create-Placeholder 800 600 "sports.jpg" "Sports"
Create-Placeholder 800 600 "cadets.jpg" "Cadets"
Create-Placeholder 800 600 "music.jpg" "Music"
Create-Placeholder 800 600 "clubs.jpg" "Clubs"

# News images
Write-Host "News Articles..." -ForegroundColor Magenta
Create-Placeholder 600 400 "news-1.jpg" "Latest News"
Create-Placeholder 600 400 "news-2.jpg" "Achievements"
Create-Placeholder 600 400 "news-3.jpg" "Events"

# Testimonial photos
Write-Host "Testimonials..." -ForegroundColor Magenta
Create-Placeholder 150 150 "alumni-1.jpg" "Alumni"
Create-Placeholder 150 150 "alumni-2.jpg" "Alumni"
Create-Placeholder 150 150 "parent-1.jpg" "Parent"

# CTA background
Write-Host "Call to Action..." -ForegroundColor Magenta
Create-Placeholder 1920 600 "cta-bg.jpg" "Join MFA"

# About page images
Write-Host "About Page..." -ForegroundColor Magenta
Create-Placeholder 1920 600 "about-hero.jpg" "Our Story"
Create-Placeholder 400 500 "principal.jpg" "Principal"
Create-Placeholder 400 500 "team-1.jpg" "Team"
Create-Placeholder 400 500 "team-2.jpg" "Team"
Create-Placeholder 400 500 "team-3.jpg" "Team"
Create-Placeholder 400 500 "team-4.jpg" "Team"

# Contact page
Write-Host "Contact Page..." -ForegroundColor Magenta
Create-Placeholder 1920 600 "contact-hero.jpg" "Contact Us"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "All 22 placeholder images created!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Images saved to: $imagesDir" -ForegroundColor Yellow
Write-Host ""
Write-Host "View your website at: http://localhost/MFA" -ForegroundColor Cyan
Write-Host ""
Write-Host "Note: Replace these placeholders with real photos before launching!" -ForegroundColor Yellow
