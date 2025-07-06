# 🔁 TanStack Query Practice - Random Number Fetcher

Este repositorio contiene una práctica sencilla que demuestra cómo utilizar **TanStack Query (antes React Query)** para realizar peticiones HTTP de forma eficiente, limpia y reutilizable.

## 🧪 ¿De qué se trata?

Se trata de una app construida como ejercicio de aprendizaje, en la que se realiza una **petición GET a una API que devuelve números aleatorios**. El objetivo principal fue evidenciar cómo **TanStack Query** permite refactorizar el código y reducir la lógica repetida, en comparación con enfoques tradicionales con `useEffect` y `useState`.

## 🚀 Funcionalidad

- Al cargar la app, se realiza una petición para obtener un número aleatorio desde una URL externa.
- Ese número se muestra en pantalla.
- Un botón permite **disparar una nueva petición** para obtener otro número random.

## 🧰 Tecnologías utilizadas

- ⚛️ React
- 🔁 [TanStack Query](https://tanstack.com/query/latest) (React Query)
- 🌐 API de números aleatorios (simulada o real, según configuración)

## 💡 Objetivo del proyecto

El propósito de esta práctica es:

- Comprender el flujo de peticiones y manejo de datos con **TanStack Query**.
- Comparar contra métodos tradicionales (`fetch`, `axios` + `useEffect`).
- Reforzar conceptos de cacheo, refetching y manejo del estado de carga/error.
