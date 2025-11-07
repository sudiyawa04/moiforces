# PowerShell Script to Download Placeholder Images for MFA Website
# Run this script to automatically download free stock images

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "MFA Website Image Download Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Create images directory if it doesn't exist
$imagesDir = "C:\xampp\htdocs\MFA\images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir
}

# Function to download image
function Download-Image {
    param (
        [string]$Url,
        [string]$FileName
    )
    
    $destination = Join-Path $imagesDir $FileName
    
    try {
        Write-Host "Downloading $FileName..." -ForegroundColor Yellow
        Invoke-WebRequest -Uri $Url -OutFile $destination -UseBasicParsing
        Write-Host "✓ Downloaded $FileName successfully!" -ForegroundColor Green
        return $true
    }
    catch {
        Write-Host "✗ Failed to download $FileName" -ForegroundColor Red
        return $false
    }
}

Write-Host "Starting image downloads from Unsplash (free stock photos)..." -ForegroundColor Cyan
Write-Host ""

# Hero Slider Images (1920x1080)
Write-Host "[1/22] Hero Slider Images..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop" "hero-1.jpg"
Download-Image "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop" "hero-2.jpg"
Download-Image "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop" "hero-3.jpg"

# About Preview Image (800x600)
Write-Host "`n[2/22] About Section..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" "about-preview.jpg"

# Activity Images (800x600)
Write-Host "`n[3/22] Co-curricular Activities..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop" "sports.jpg"
Download-Image "https://images.unsplash.com/photo-1571182478357-86a6b5dbd8a2?w=800&h=600&fit=crop" "cadets.jpg"
Download-Image "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" "music.jpg"
Download-Image "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" "clubs.jpg"

# News Images (600x400)
Write-Host "`n[4/22] News Articles..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" "news-1.jpg"
Download-Image "https://images.unsplash.com/photo-1553003785-57e3ce8c7a6c?w=600&h=400&fit=crop" "news-2.jpg"
Download-Image "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" "news-3.jpg"

# Testimonial Photos (150x150)
Write-Host "`n[5/22] Testimonials..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces" "alumni-1.jpg"
Download-Image "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" "alumni-2.jpg"
Download-Image "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces" "parent-1.jpg"

# CTA Background (1920x600)
Write-Host "`n[6/22] Call to Action..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop" "cta-bg.jpg"

# About Page Images
Write-Host "`n[7/22] About Page..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=600&fit=crop" "about-hero.jpg"
Download-Image "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=faces" "principal.jpg"
Download-Image "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces" "team-1.jpg"
Download-Image "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces" "team-2.jpg"
Download-Image "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces" "team-3.jpg"
Download-Image "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=faces" "team-4.jpg"

# Contact Page
Write-Host "`n[8/22] Contact Page..." -ForegroundColor Magenta
Download-Image "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop" "contact-hero.jpg"

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Download Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "`nAll images have been downloaded to: $imagesDir" -ForegroundColor Yellow
Write-Host "`nYou can now refresh your website to see the images!" -ForegroundColor Yellow
Write-Host "Visit: http://localhost/MFA" -ForegroundColor Cyan
