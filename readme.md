# Calculadora Geométrica y de Costos — Evidencia SENA

**Evidencia:** GA2-240201528-AA2-EV01 — Planteamiento de ecuación  
**Aprendiz:** Cristian C  

## Descripción del Proyecto
Aplicación web interactiva desarrollada en **Node.js** y **JavaScript** (con asistencia de inteligencia artificial) para automatizar el cálculo geométrico y financiero en la fabricación de señalizadores de escritorio en madera MDF para la empresa **PubliArte S.A.S.**

El sistema calcula el área superficial de una figura compuesta (rectángulo y triángulo), el volumen total de material según su grosor, la función lineal de costos totales y el punto de equilibrio de producción.

## Modelo Matemático Implementado
- **Área frontal total:** $A_{\text{total}} = (b \cdot h_1) + \left(\frac{b \cdot h_2}{2}\right)$
- **Volumen de material:** $V = A_{\text{total}} \cdot p$
- **Función lineal de costos:** $C(x) = C_v \cdot x + C_f$
- **Punto de equilibrio:** $x = \frac{C_f}{P_v - C_v}$

## Estructura del Repositorio
- `index.js`: Servidor HTTP nativo en Node.js que sirve la aplicación web en el puerto `3000`.
- `public/index.html`: Interfaz gráfica interactiva con representación SVG de la figura y lógica de cálculo en JavaScript.
- `package.json`: Configuración y metadatos del proyecto Node.js.
- `README.md`: Documentación técnica del proyecto.

## Instrucciones de Ejecución
1. Clonar el repositorio:
   ```bash
   git clone [https://github.com/cristiancua/Plantamiento-Ecuación-.git](https://github.com/cristiancua/Plantamiento-Ecuación-.git)