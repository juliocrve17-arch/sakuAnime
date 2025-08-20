# SakuAnime — Entrega 3 (Responsive + SCSS 7–1)

Sitio responsive con estética anime, grillas con Grid+Flex, SCSS (arquitectura 7–1), animaciones y componentes.
Incluye páginas: **index, animes, noticias, contacto** y posters generados para animes populares.

## Estructura
- `scss/` (7–1): abstracts, base, components, layout, pages, themes, vendors
- `assets/css/main.css` (precompilado)
- `assets/js/main.js`
- `assets/img/hero.jpg` y `assets/img/posters/*`

## Compilar SCSS (opcional)
```bash
sass --no-source-map --style=compressed scss/main.scss assets/css/main.css
```

## Publicar en GitHub
```bash
git init
git add .
git commit -m "feat: SakuAnime — entrega 3 responsive + SCSS"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
git push -u origin main
```
### GitHub Pages
En Settings → Pages → Source: **Deploy from a branch**, Branch: **main / root**.

## Notas
- Las imágenes fueron **generadas** con estética anime para evitar derechos de terceros.
- Si deseas reemplazarlas por posters oficiales, colócalos en `assets/img/posters/` con el mismo nombre de archivo.
