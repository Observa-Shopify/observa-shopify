# 📸 How to Add Screenshots to Your App

## 🎯 **Where to Add Your Images**

### **Step 1: Create Images Folder**
First, create a folder for your images:
```
public/
  └── images/
      ├── dashboard.png
      ├── analytics.png
      ├── alerts.png
      └── mobile-app.png
```

### **Step 2: Add Your Screenshots**

#### **Option A: Single Main Screenshot**
In `app/page.tsx`, find this section (around line 300):

```jsx
{/* TO ADD YOUR ACTUAL IMAGE, UNCOMMENT THIS AND REPLACE THE PATH: */}
{/* 
<img 
  src="/images/dashboard-screenshot.png" 
  alt="Observa Dashboard Screenshot"
  className="w-full h-auto rounded-xl shadow-lg"
/>
*/}
```

**To use your image:**
1. Remove the `/*` and `*/` comment markers
2. Replace `/images/dashboard-screenshot.png` with your image path
3. Update the `alt` text

**Example:**
```jsx
<img 
  src="/images/my-dashboard.png" 
  alt="Observa Dashboard Screenshot"
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

#### **Option B: Multiple Screenshots Grid**
For multiple screenshots, find this section (around line 320):

```jsx
{/* OPTION 2: Multiple Screenshots Grid */}
{/* 
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-900">Dashboard</h3>
    <img 
      src="/images/dashboard.png" 
      alt="Dashboard Screenshot"
      className="w-full h-48 object-cover rounded-lg shadow-md"
    />
  </div>
  // ... more screenshots
</div>
*/}
```

**To use multiple screenshots:**
1. Remove the `/*` and `*/` comment markers
2. Replace the image paths with your actual screenshots
3. Update titles and alt text

## 📁 **Image File Structure**

### **Recommended Image Names:**
- `dashboard.png` - Main dashboard screenshot
- `analytics.png` - Analytics/performance page
- `alerts.png` - Alerts/notifications page
- `mobile-app.png` - Mobile app screenshot
- `settings.png` - Settings/configuration page

### **Image Requirements:**
- **Format**: PNG, JPG, or WebP
- **Size**: 1200x800px or larger (will be responsive)
- **Quality**: High quality, clear screenshots
- **File Size**: Under 2MB each for fast loading

## 🎨 **Styling Options**

### **Different Layout Options:**

#### **1. Single Large Screenshot:**
```jsx
<img 
  src="/images/dashboard.png" 
  alt="Dashboard Screenshot"
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

#### **2. Grid of Multiple Screenshots:**
```jsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  <img src="/images/dashboard.png" alt="Dashboard" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/analytics.png" alt="Analytics" className="w-full h-48 object-cover rounded-lg" />
  <img src="/images/alerts.png" alt="Alerts" className="w-full h-48 object-cover rounded-lg" />
</div>
```

#### **3. Carousel/Slider (Advanced):**
You can also create a carousel for multiple screenshots using libraries like `react-slick` or `swiper`.

## 🚀 **Quick Start**

1. **Add your screenshot files** to `public/images/`
2. **Choose your layout** (single or multiple)
3. **Uncomment the code** you want to use
4. **Replace the image paths** with your actual files
5. **Test your changes** at `http://localhost:3000`

## 💡 **Pro Tips**

- **Use descriptive alt text** for accessibility
- **Optimize images** for web (compress them)
- **Test on mobile** to ensure responsive design
- **Keep consistent aspect ratios** for grid layouts
- **Use high-quality screenshots** that showcase your app's best features

## 🔧 **Troubleshooting**

### **Image Not Showing?**
- Check the file path is correct
- Ensure the image file exists in `public/images/`
- Verify the file name matches exactly (case-sensitive)
- Check browser console for errors

### **Image Too Large/Small?**
- Adjust the `className` styling
- Use `object-cover` for consistent sizing
- Modify `h-48` (height) or `w-full` (width) classes

### **Want Different Layout?**
- Copy the grid example and modify the columns
- Change `grid-cols-3` to `grid-cols-2` for 2 columns
- Adjust spacing with `gap-6` or `gap-4` 