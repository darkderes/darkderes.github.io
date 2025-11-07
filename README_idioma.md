# Cómo agregar y personalizar el selector de idioma en tu portafolio

## ¿Qué hace este cambio?

- Agrega un icono de globo terráqueo en la cabecera como selector de idioma.
- Al hacer hover o click, muestra un menú desplegable para elegir Español (ES) o Inglés (EN).
- Cada opción redirige a la versión correspondiente (`index.html` para español, `index_en.html` para inglés).

## ¿Cómo personalizar o mejorar?

- Puedes cambiar los enlaces de los idiomas si usas rutas diferentes.
- El icono usa FontAwesome (`<i class="fas fa-globe"></i>`), asegúrate de tener la librería cargada.
- El menú se muestra al pasar el mouse o enfocar el icono. Si quieres que funcione con click en móviles, puedes agregar un pequeño script JS.

## Ejemplo de estructura HTML

```html
<div class="language-switcher">
  <div class="dropdown-lang">
    <button class="btn-lang-icon" title="Cambiar idioma">
      <i class="fas fa-globe"></i>
    </button>
    <div class="dropdown-content">
      <a href="index.html" class="lang-option active">ES</a>
      <a href="index_en.html" class="lang-option">EN</a>
    </div>
  </div>
</div>
```

## Ejemplo de estilos CSS

```css
.language-switcher {
  position: absolute;
  top: 30px;
  right: 40px;
  z-index: 10;
}
.dropdown-lang {
  position: relative;
  display: inline-block;
}
.btn-lang-icon {
  background: #fff;
  color: #2563eb;
  border: none;
  border-radius: 50%;
  padding: 8px 10px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  transition: background 0.2s, color 0.2s;
}
.btn-lang-icon:hover {
  background: #3b82f6;
  color: #fff;
}
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background: #fff;
  min-width: 80px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin-top: 8px;
  z-index: 20;
}
.dropdown-lang:hover .dropdown-content,
.dropdown-lang:focus-within .dropdown-content {
  display: block;
}
.lang-option {
  color: #2563eb;
  padding: 10px 16px;
  text-decoration: none;
  display: block;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
}
.lang-option:hover,
.lang-option.active {
  background: #3b82f6;
  color: #fff;
}
```

## Sugerencias adicionales

- Si quieres que el menú funcione con click en vez de hover, puedes agregar este JS:

```js
document
  .querySelector(".btn-lang-icon")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".dropdown-content").classList.toggle("show");
  });
document.addEventListener("click", function (e) {
  if (!e.target.closest(".dropdown-lang")) {
    document.querySelector(".dropdown-content").classList.remove("show");
  }
});
```

Y en el CSS:

```css
.dropdown-content {
  display: none;
}
.dropdown-content.show {
  display: block;
}
```

- Puedes personalizar los textos, colores y posición según tu diseño.

---

¿Necesitas instrucciones para otro componente o funcionalidad? ¡Solo pídelo!
