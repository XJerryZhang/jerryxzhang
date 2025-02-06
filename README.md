# How to Update the Website

## Updating Articles

1. Open this file: `components/pages/writing.tsx`
2. Find the list that looks like this:
   ```json
   {
     "title": "My Article",
     "date": "2025-02-05",
     "description": "This is about xyz!",
     "image": "cool-article-pic.jpg"
   }
   ```
   This is called JSON. It's like a recipe card for your article.

   In the `components/pages/writing.tsx`, it should start like this: <img width="948" alt="Screenshot 2025-02-05 at 11 45 52 PM" src="https://github.com/user-attachments/assets/4166babc-8d36-4ec1-b5e9-3147881d1ed2" />

3. Copy this "recipe card" and fill it out for your new article.
   **CRITICAL:** Use the exact same format, including quotation marks! AI can be helpful for checking your work here.

4. Put your article's picture in the `public/article_covers/` folder.
   **CRITICAL:** Name it EXACTLY like you wrote in the "image" part of your JSON.


## Adding New Image Galleries or Images to Existing Galleries

1. If creating a new gallery:
   - Make a new folder in `public/gallery`
   - Name it descriptively (e.g., "Cool_Landscapes")

2. Add your pictures to the folder (new or existing)
   - Name each picture like this: Jerry_Zhang_Folder_Name-1, Jerry_Zhang_Folder_Name-2, etc.
   **CRITICAL:** Follow this naming convention EXACTLY
   **CRITICAL:** Replace spaces in the folder name with underscores (_)
   **EXTRA CRITICAL:** 
     - Numbers must start at 1 and increase sequentially (1, 2, 3, ...)
     - No missing numbers or duplicates allowed
     - The highest number should match the total count of images
   Example: For a folder named "Cool Landscapes" with 3 images:
     Jerry_Zhang_Cool_Landscapes-1
     Jerry_Zhang_Cool_Landscapes-2
     Jerry_Zhang_Cool_Landscapes-3

3. Open `lib/galleryData.ts`

4. Find or add your folder's entry in the list:
   - If it's a new folder, add a new entry
   - If it's an existing folder, find its entry
   
5. Update the entry with the folder name and the TOTAL number of pictures now in the folder

   **CRITICAL:** Spell the folder name EXACTLY as you named it in step 1

    **CRITICAL:** Make sure the number matches the total count of images in the folder
                 (which should also match the highest number in the image names)

Example in `galleryData.ts`:
```javascript
export const projects = {
  "Cool_Landscapes": 3,  // This folder has 3 images total, numbered 1, 2, and 3
  // ... other entries ...
};
```

   
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

Remember: You will need to wait for the ✅ green check mark before seeing the pages on the website link.
