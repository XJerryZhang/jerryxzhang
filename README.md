# How to Update the Website

## Updating Articles

1. Open this file: `components/pages/writing.tsx`
2. Find the list that looks like this:
   ```json
   {
     "title": "My Cool Article",
     "date": "2025-02-05",
     "description": "This is about something awesome!",
     "image": "cool-article-pic.jpg"
   }
   ```
   This is called JSON. It's like a recipe card for your article.

3. Copy this "recipe card" and fill it out for your new article.
   **CRITICAL:** Use the exact same format, including quotation marks!

4. Put your article's picture in the `public/article_covers/` folder.
   **CRITICAL:** Name it EXACTLY like you wrote in the "image" part of your JSON.

## Adding New Image Galleries

1. Make a new folder in `public/gallery`
2. Put your pictures in this new folder
3. Open `galleryData.ts`
4. Add your new folder's name to the list there
   **CRITICAL:** Spell the folder name EXACTLY the same as you named it

## Editing Photos in the Landing Carousel

1. Go to `public/carousel_covers`
2. Find the folder for the picture you want to change
3. Replace the picture in that folder
   **CRITICAL:** Only ONE picture per folder!

## Adding a New Heading + Photo in the Landing Carousel

1. In `public/carousel_covers`, make a new folder
2. Name it like "1. My Cool Heading"
   **CRITICAL:** Use this exact format: Number, period, space, then name
3. Put ONE picture in this new folder
4. For gallery links: Make sure there's a matching folder in `public/gallery` (without the number)
   **CRITICAL:** Names must match EXACTLY (except for the number)

## Changing Image Order in the Galleries

1. Find your gallery pictures
2. Change the number at the end of picture names to set the order. **CRITICAL:** Use the format: Jerry_Zhang_Folder_Name-1, Jerry_Zhang_Folder_Name-2, etc.

   **EXTRA CRITICAL:** Replace ALL spaces in the folder name with underscores (_). Example: For a folder named "Cool Photos", use "Jerry_Zhang_Cool_Photos-1"

## Adding New Images to Galleries

1. Make a new folder if needed
2. Name pictures like: Jerry_Zhang_Folder_Name-1, Jerry_Zhang_Folder_Name-2, etc.
   **CRITICAL:** Follow this naming convention EXACTLY
3. Open `lib/galleryData.ts`
4. Add your new folder name and the number of pictures to the list
   **CRITICAL:** Spell the folder name EXACTLY as you named it

Remember: You will need to wait for the ✅ green check mark before seeing the pages on the website link.
