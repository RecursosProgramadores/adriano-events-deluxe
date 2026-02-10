<<<<<<< HEAD
import img1 from "./mobiliario.jpg";
import img2 from "./mobiliario10.jpg";
import img3 from "./mobiliario11.jpg";
import img4 from "./mobiliario12.jpeg";
import img5 from "./mobiliario13.jpg";
import img6 from "./mobiliario14.jpg";
import img7 from "./mobiliario15.jpg";
import img8 from "./mobiliario16.jpeg";
import img9 from "./mobiliario17.jpeg";
import img10 from "./mobiliario18.jpeg";
import img11 from "./mobiliario2.jpg";
import img12 from "./mobiliario3.png";
import img13 from "./mobiliario4.png";
import img14 from "./mobiliario5.png";
import img15 from "./mobiliario6.png";
import img16 from "./mobiliario7.jpg";
import img17 from "./mobiliario8.jpg";
import img18 from "./mobiliario9.jpg";
=======
/// <reference types="vite/client" />

const modules = import.meta.glob("./*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
    eager: true,
    query: '?url',
});

const entries = Object.entries(modules).map(([path, mod]: [string, any]) => {
    const name = path.replace(/^\.\//, '').replace(/\.\w+$/, '');
    return { src: mod.default || mod, name };
});
>>>>>>> 8da7ee3fcfa4e3b5a4d0c786c443a7091f7eb11d

export function getMobiliariosImages() {
    return entries;
}
