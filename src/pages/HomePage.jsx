import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <h2>HomePage</h2>
      <div className="container-description">
        <section class="project-card">
          <div class="project-header">
            <span class="project-badge">React App</span>
            <h3>QuickNotes</h3>
          </div>

          <p class="project-description">
            Una aplicación web de notas moderna y minimalista diseñada para capturar tus ideas al instante.
            Construida con React, permite crear, editar y organizar anotaciones de forma rápida a través
            de una interfaz fluida e intuitiva, ideal para la productividad diaria.
          </p>

          <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">JavaScript (ES6)</span>
            <span class="tech-tag">CSS3 / Flexbox</span>
            <span class="tech-tag">LocalStorage</span>
          </div>

          <div class="project-links">
            <a href="https://github.com/febrel/my-notes-app" class="btn btn-secondary" target="_blank">Código en GitHub</a>
          </div>
        </section>
      </div>
    </>

  )
}

export default HomePage;