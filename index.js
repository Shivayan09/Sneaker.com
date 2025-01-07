const slides = [
    {
        name: "AIR JORDAN <br> DUB ZERO",
        price: "$299",
        sizes: ["8", "9", "10", "11", "12"],
        image: "slider-img2.png",
        desc: `"Real talk—people are about to start noticing your kicks. Inspired by the AJ4, this remix features
                laser-etched art on the upper and visible Air in the sole. With its shiny patent leather that wraps 
                around the shoe, the Dub Zero makes sure you catch the spotlight, and the 3D logo on the back lets 
                everyone know who you're reppin'."`
    },
    {
        name: "AIR JORDAN <br> 9G NRG",
        price: "$199",
        sizes: ["8", "9", "10", "11", "12"],
        image: "slider-img3.png",
        desc: `"Pay homage to the great history and heritage of the game in this special AJ9. The rustic wood-grain
                prints with warm vintage finishes nod to the sport's old-school long hitters that have that special 
                smack off the tee, making for a happy life in any era. The metal-accented eyelets, lace tips and 
                backtabs speak to the iconic, cutting-edge clubs that continue to set trends and smash through 
                performance barriers."`
    },
    {
        name: "AIR JORDAN 5 RETRO SE",
        price: "$199",
        sizes: ["8", "9", "10", "11", "12"],
        image: "slider-img4.png",
        desc: `"Set sail in the AJ5. With a fresh take on a classic colourway, this special edition brings trendy
                neutrals to the iconic silhouette. Premium leather and a Max Air unit in the heel make it distinctively
                Jordan."`
    },
    {
        name: "LUKA 3 SE PF",
        price: "$299",
        sizes: ["8", "9", "10", "11", "12"],
        image: "slider-img5.png",
        desc: `"Shift your game into high gear with the lightest Luka yet. Designed to help you create space through
                acceleration, the Luka 3 features full-length Cushlon 3.0 foam for a smooth heel-to-toe transition.
                A strong but flexible plate underfoot brings lateral containment, helping you drive out of your step-back
                to attack the basket. We built speed into the design as well, helping you look 100 as you blow past."`
    },
    {
        name: "LUKA 3 MOTORSPORT",
        price: "$299",
        sizes: ["8", "9", "10", "11", "12"],
        image: "slider-img1.png",
        desc: `"Designed to be soft and flexible, this Luka 3 puts a little magic in your steps. Springy foam underfoot
                helps you create space on the court while the lightweight design is made to move. Plus, Luka's love of 
                cars inspired us to infuse the design with high-speed style, helping you look 100 as you blow past 
                defenders."`
    },
];

let currrIdx = 0;

function updateSlide() {
    const slide = slides[currrIdx];
    document.getElementById("product-name").innerHTML = slide.name;
    document.getElementById("product-price").innerHTML = slide.price;
    document.getElementById("product-desc").innerHTML = slide.desc;
    slide.sizes.forEach((size) => {
        document.getElementById(`size-${size}`).innerText = size;
    });
    document.getElementById("shoe-image").style.backgroundImage = `url(${slide.image})`;
}

document.getElementById("prev").addEventListener("click", () => {
    currrIdx = (currrIdx===0) ? slides.length-1 : currrIdx-1;
    updateSlide();
});

document.getElementById("next").addEventListener("click", () => {
    currrIdx = (currrIdx=== slides.length-1) ? 0 : currrIdx+1;
    updateSlide();
});

updateSlide();
