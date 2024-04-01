//your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

// const images = [
//   { url: "https://picsum.photos/id/237/200/300" },
//   { url: "https://picsum.photos/id/238/200/300" },
//   { url: "https://picsum.photos/id/239/200/300" },
// ];
        const output = document.getElementById("output");
        const btn = document.getElementById("download-images-button");

        const images = [
            { url: "https://picsum.photos/id/239/200/300" },
            { url: "https://fastly.picsum.photos/id/238/200/300.jpg?hmac=WF3u-tnO4aoQvz_F9p7zS0Dr5LwGx74tPabQf7EjHkw" },
            { url: "https://picsum.photos/id/239/200/300" },
        ];

        // Function to download image from a given URL
        const downloadImage = async (image) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
                img.src = image.url;
            });
        };

        // Function to download all images in parallel
        const downloadImages = async (images) => {
            try {
                // Use Promise.all to download images in parallel
                const downloadedImages = await Promise.all(images.map(image => downloadImage(image)));

                // Append each downloaded image to the output div
                downloadedImages.forEach(image => {
                    output.appendChild(image);
                });
            } catch (error) {
                console.error(error);
            }
        };

        // Event listener to start downloading images on button click
        btn.addEventListener('click', () => {
            downloadImages(images);
        });
