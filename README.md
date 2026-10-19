# 🟢 TRAZA//CO2 — Suite de Eficiencia en Preparación de Pedidos

![versión](https://img.shields.io/badge/version-2.1.0-emerald)
![PWA](https://img.shields.io/badge/PWA-offline--first-0ea5e9)
![Sin build](https://img.shields.io/badge/build-no%20required-green)
![Licencia](https://img.shields.io/badge/licencia-MIT-yellow)

**Autoría:** Miguel Ángel Layunta López · 2026

Aplicación profesional de eficiencia en *picking* para almacenes: enrutamiento
inteligente, asignación automática de tareas, interfaz ergonómica de operario con
validación por doble escaneo, KPIs logísticos en tiempo real, simulador de campañas,
planificador de olas, módulo de inducción y modo offline con sincronización WMS/ERP.

---

## ⚡ Cómo usarlo (sin instalar nada)

Este proyecto es un **fichero único autocontenido**: las librerías (React, Recharts,
Tailwind) se cargan por CDN. No necesita `npm`, ni Node, ni compilación.

1. Abre `index.html` en el navegador (necesita internet la primera vez).
2. O súbelo a GitHub Pages (ver abajo) y tendrás una PWA instalable.

## 🧩 Módulos incluidos

| Módulo | Funcionalidades críticas | Objetivo operativo |
|---|---|---|
| **Dashboard Manager** | KPIs en vivo, pipeline de pedidos, cuellos de botella, ranking de operarios, CO₂ evitado | Visibilidad en caliente |
| **Terminal Operario** | Tipografía gigante, doble escaneo obligatorio (SKU + ubicación), Voice-Picking, reporte rápido de incidencias | Error cero |
| **Enrutamiento** | S-Shape, Largest-Gap, Return, In-the-Aisle, olas/batch, mapa animado | −30/−48% de distancia |
| **Simulador de Campañas** | Escenarios Black Friday/Navidad (×1–×4), capacidad vs. demanda, operarios necesarios, plan de choque | Continuidad en picos |
| **Planificador de Olas** | Agrupación por cutoff/zona/temperatura/ruta, estimación de líneas, duración y distancia, lanzamiento | Evitar duplicidades |
| **Inducción Operario** | 6 módulos con práctica obligatoria de doble escaneo y certificado | Mínima curva de aprendizaje |
| **KPIs Logísticos** | LPH, UPH, densidad, % desplazamiento, tiempo de ciclo por fases, precisión, POR, IRA, coste/línea, utilización, SLA, MTTR, CO₂ | Detectar desviaciones |
| **Incidencias** | Reporte rápido sin detener el flujo, severidad, MTTR | Continuidad |
| **Integraciones** | WMS/ERP bidireccional, latencias, cola offline, arquitectura escalable | Integridad de datos |

## 🧮 KPIs principales

- `LPH = líneas ÷ horas efectivas` · objetivo 130–160
- `Precisión = 1 − (errores ÷ líneas)` · objetivo ≥ 99,5 %
- `% Tdespl = Tdesplazamiento ÷ Tciclo` · objetivo < 45 %
- `Densidad = líneas ÷ m recorridos` · objetivo ≥ 3,5
- `POR = pedidos perfectos ÷ total` · objetivo ≥ 98 %
- `CO₂ evitado = Δdistancia × factor kgCO₂/kWh`

## 🌐 Publicar en GitHub Pages (gratis)

1. Crea un repositorio (p. ej. `TRAZA-CO2-Picking`) y sube estos 4 ficheros.
2. Ve a **Settings → Pages**.
3. En **Source** elige `Deploy from a branch`, rama `main` y carpeta `/ (root)`.
4. Guarda. En 1–2 minutos tu app estará en
   `https://TU-USUARIO.github.io/TRAZA-CO2-Picking/`.

> No hace falta ningún workflow ni `npm run build`: al ser HTML puro con CDN,
> la rama `main` se publica tal cual.

## 📱 PWA / iconos

- `manifest.webmanifest` referencia **únicamente** `icons/icon.svg` con
  `"sizes": "any"`, por lo que **no se requieren PNG**.
- Chrome/Edge/Android muestran el icono vectorial y permiten «Instalar aplicación».
- Si algún día quieres PNG (p. ej. para iOS), conviértelos gratis en
  [realfavicongenerator.net](https://realfavicongenerator.net) y añade las entradas
  correspondientes al manifest.

## 🗂️ Estructura del repositorio

