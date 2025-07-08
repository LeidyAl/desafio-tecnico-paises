# Desafío Técnico Frontend

Es una aplicación creada con **React**, **TypeScript** y **Vite**, que permite listar países del mundo usando la API pública [countries.trevorblades.com](https://countries.trevorblades.com/) mediante **GraphQL (Apollo Client)**.

Incluye filtrado por continente y búsqueda por nombre y divisa (currency). Está diseñada con **Material UI** y navega entre rutas usando **React Router DOM**.

---

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [React Router DOM](https://reactrouter.com/)
- [Material UI](https://mui.com/)
- [Countries GraphQL API](https://countries.trevorblades.com/)

---

## Instalación

```bash
# Clona el repositorio
git clone https://github.com/LeidyAl/desafio-tecnico-paises.git
cd desafio-tecnico-paises

# Instala dependencias
npm install

# Inicia la app en desarrollo
npm run dev

# Compila para producción
npm run build

# Vista previa del build de producción
npm run preview

```

---

## Estructura del proyecto

```
  src/
  ├── API/                    # Configuración y queries GraphQL
  │   └── countries.ts        # Queries GraphQL
  ├── components/             # Componentes reutilizables (CardInformation, Loading)
  ├── interfaces/             # Tipos TypeScript (Country, Continent, etc.)
  ├── pages/                  # Páginas de la app (Home, Details)
  ├── App.tsx                 # Configuración principal de rutas (BrowserRouter) + ThemeProvider
  └── main.tsx                # Configuración de ApolloProvider
```

## Autora

- Leidy Álvarez
- GitHub: @LeidyAl
- LinkedIn: https://www.linkedin.com/in/leidy-alvarez/


> [!NOTE]
> La segunda parte del reto se encuentra en la carpeta **algorithm**