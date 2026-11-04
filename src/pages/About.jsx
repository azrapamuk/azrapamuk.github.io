import { useState } from 'react'
import PixelCat from '../components/PixelCat.jsx'

function Portrait() {
  const [missing, setMissing] = useState(false)

  return (
    <figure className="portrait">
      <PixelCat variant="tabby" size="50%" />

      {missing ? (
        <div className="ph">My photo</div>
      ) : (
        <img
          src="/img/picofme.jpg"
          alt="Photo of Azra Pamuk"
          onError={() => setMissing(true)}
        />
      )}
      <figcaption>Azra Pamuk, Brno</figcaption>
    </figure>
  )
}

export default function About() {
  return (
    <section>
      <div className="wrap">
        <div className="who">
          <Portrait />

          <div className="about">
            <h2>About</h2>

            <p>
              Hi, I'm Azra, a Computer Science and Informatics graduate and a second-year Master's student in Visual Informatics, specializing in 
              Computer Game Development, at Masaryk University in Brno.
            </p>

            <p>
              I'm naturally curious and love exploring new ideas,
              discovering how things work, and continuously building
              on what I know. For me, learning is an ongoing process
              of asking questions, experimenting, and connecting
              ideas across different fields. I'm passionate about
              game development and interactive experiences, where
              I can combine technical problem-solving with creativity
              and turn new knowledge into something tangible.
            </p>
          </div>
        </div>

        <div className="skills-block">
          <h2>Skills</h2>

          <div className="inventory">
            <div className="slot">
              <h3>Game Development</h3>
              <p>
                Unity, Unreal Engine, gameplay programming, game mechanics,
                level design, game design, prototyping, AI behaviour,
                collision detection, physics simulation
              </p>
            </div>

            <div className="slot">
              <h3>Programming Languages</h3>
              <p>
                C, C++, C#, Java, Python, Kotlin, JavaScript, TypeScript
              </p>
            </div>

            <div className="slot">
              <h3>Computer Graphics & Game Engines</h3>
              <p>
                OpenGL, GLSL, 3D rendering, shader programming,
                path tracing, fluid rendering, linear algebra,
                procedural geometry, game engine architecture
              </p>
            </div>

            <div className="slot">
              <h3>3D Art & Design</h3>
              <p>
                Blender, Substance 3D Painter, 3D modeling, sculpting,
                retopology, UV mapping, texturing, character design,
                environment art, lighting, animation
              </p>
            </div>

            <div className="slot">
              <h3>Web Development</h3>
              <p>
                React, Angular, Spring Boot, REST APIs, HTML, CSS,
                responsive design, frontend and backend development
              </p>
            </div>

            <div className="slot">
              <h3>UI/UX & Human-Computer Interaction</h3>
              <p>
                Figma, wireframing, prototyping, interaction design,
                user research, usability testing, SUS, SEQ,
                user-centered design
              </p>
            </div>

            <div className="slot">
              <h3>AR & VR Development</h3>
              <p>
                Vuforia, augmented reality, virtual reality,
                immersive environments, VR interaction design
              </p>
            </div>

            <div className="slot">
              <h3>Tools & Databases</h3>
              <p>
                Git, GitHub, GitLab, MySQL, OpenCV, MediaPipe,
                Agile development, version control
              </p>
            </div>

            <div className="slot">
              <h3>Computer Science</h3>
              <p>
                Data structures, algorithms, object-oriented programming,
                software design, linear algebra, mathematical modeling,
                AI fundamentals
              </p>
            </div>
          </div>
        </div>




      </div>
    </section>
  )
}