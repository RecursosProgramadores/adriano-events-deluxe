/// <reference types="vite/client" />

const modules = import.meta.glob("./*.{png,jpg,jpeg,PNG,JPG,JPEG}", {
    eager: true,
    query: '?url',
});

const entries = Object.entries(modules).map(([path, mod]: [string, any]) => {
    const name = path.replace(/^\.\//, '').replace(/\.\w+$/, '');
    return { src: mod.default || mod, name };
});

export function getMobiliariosImages() {
    return entries;
}
