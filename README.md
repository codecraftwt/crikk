# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


https://www.figma.com/design/iWko8AMaoEzqFLbmRrmMMs/Crickk-Dashboard?node-id=8-1248&t=PTJJLZZPtPpgHk2M-0

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const DeveloperPortfolio3D = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const codeBlocksRef = useRef([]);
  const particlesRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00ff88, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x0088ff, 0.6, 10);
    pointLight.position.set(-5, 0, 5);
    scene.add(pointLight);

    // Create floating code blocks
    const codeBlocks = [];
    const technologies = ['JS', 'React', 'Node', 'Python', 'Three.js', 'CSS', 'HTML', 'Git'];
    
    technologies.forEach((tech, index) => {
      const geometry = new THREE.BoxGeometry(1.2, 0.8, 0.3);
      const material = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color().setHSL((index * 0.1) % 1, 0.7, 0.6),
        shininess: 100
      });
      const cube = new THREE.Mesh(geometry, material);
      
      // Position in a spiral
      const angle = (index / technologies.length) * Math.PI * 2;
      cube.position.set(
        Math.cos(angle) * 3,
        (index - technologies.length / 2) * 0.8,
        Math.sin(angle) * 2
      );
      
      cube.castShadow = true;
      cube.userData = { tech, originalPosition: cube.position.clone() };
      scene.add(cube);
      codeBlocks.push(cube);
    });
    codeBlocksRef.current = codeBlocks;

    // Create particle system (representing data/connections)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      colors[i * 3] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 1] = Math.random() * 0.5 + 0.5;
      colors[i * 3 + 2] = 1;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Create wireframe sphere (representing network/connections)
    const sphereGeometry = new THREE.SphereGeometry(4, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.002;
      }

      // Animate code blocks
      codeBlocksRef.current.forEach((block, index) => {
        block.rotation.x += 0.005;
        block.rotation.y += 0.01;
        
        // Floating animation
        const time = Date.now() * 0.001;
        block.position.y = block.userData.originalPosition.y + Math.sin(time + index) * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      setScrollProgress(scrollPercent);

      if (sceneRef.current && cameraRef.current) {
        // Dynamic camera movement
        cameraRef.current.position.z = 8 - scrollPercent * 5;
        cameraRef.current.position.y = scrollPercent * 3;
        cameraRef.current.lookAt(0, 0, 0);
        
        // Animate code blocks based on scroll
        codeBlocksRef.current.forEach((block, index) => {
          const progress = Math.max(0, scrollPercent * 4 - index * 0.1);
          block.rotation.z = progress * Math.PI * 2;
          
          // Scale based on scroll
          const scale = 1 + progress * 0.5;
          block.scale.setScalar(scale);
          
          // Move blocks in formation
          if (scrollPercent > 0.3) {
            const formationProgress = (scrollPercent - 0.3) / 0.7;
            block.position.x = block.userData.originalPosition.x * (1 - formationProgress) + 
                             (index - 4) * 1.5 * formationProgress;
            block.position.z = block.userData.originalPosition.z * (1 - formationProgress);
          }
        });

        // Animate particles
        if (particlesRef.current) {
          const positions = particlesRef.current.geometry.attributes.position.array;
          for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
          }
          particlesRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // Change scene ambiance based on scroll
        const hue = 0.3 + scrollPercent * 0.4; // Green to blue spectrum
        sceneRef.current.background = new THREE.Color().setHSL(hue, 0.3, 0.05);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Fixed 3D canvas */}
      <div 
        ref={mountRef}
        className="fixed top-0 left-0 w-full h-screen z-0"
        style={{ height: '100vh' }}
      />
      
      {/* Scrollable content */}
      <div className="relative z-10 pointer-events-none">
        {/* Hero Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white pointer-events-auto max-w-4xl mx-auto px-8">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Alex Johnson
            </h1>
            <p className="text-2xl mb-8 text-gray-300">Full Stack Developer</p>
            <p className="text-lg leading-relaxed opacity-90 mb-8">
              Crafting digital experiences with code, creativity, and cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors">
                View Projects
              </button>
              <button className="px-8 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-lg font-semibold transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white pointer-events-auto max-w-4xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-8 text-green-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <p className="text-lg leading-relaxed opacity-90 mb-6">
                  I'm a passionate developer with 5+ years of experience building scalable web applications. 
                  I love turning complex problems into simple, beautiful solutions.
                </p>
                <p className="text-lg leading-relaxed opacity-90">
                  Specializing in modern JavaScript frameworks, cloud architecture, and creating 
                  immersive user experiences with cutting-edge technologies like Three.js.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-blue-400 font-semibold mb-2">Frontend</h3>
                  <p className="text-sm">React, Vue.js, TypeScript, Three.js</p>
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-green-400 font-semibold mb-2">Backend</h3>
                  <p className="text-sm">Node.js, Python, PostgreSQL, MongoDB</p>
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h3 className="text-purple-400 font-semibold mb-2">DevOps</h3>
                  <p className="text-sm">Docker, AWS, CI/CD, Kubernetes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white pointer-events-auto max-w-4xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-8 text-blue-400">Technical Skills</h2>
            <p className="text-xl mb-12 opacity-90">
              Watch the floating code blocks transform as you scroll - each represents a technology I work with
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              {['JavaScript', 'React', 'Node.js', 'Python', 'Three.js', 'CSS', 'HTML', 'Git'].map((skill, index) => (
                <div key={skill} className="bg-black bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all">
                  <div className="text-2xl mb-2">
                    {index === 0 && '🟨'}
                    {index === 1 && '⚛️'}
                    {index === 2 && '🟢'}
                    {index === 3 && '🐍'}
                    {index === 4 && '🎮'}
                    {index === 5 && '🎨'}
                    {index === 6 && '📄'}
                    {index === 7 && '🔧'}
                  </div>
                  <h3 className="font-semibold text-lg">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white pointer-events-auto max-w-4xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-8 text-purple-400">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-green-400">E-Commerce Platform</h3>
                <p className="text-sm opacity-90 mb-4">
                  Full-stack React application with Node.js backend, featuring real-time inventory management and payment processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-500 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-green-500 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-yellow-500 text-xs rounded">MongoDB</span>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">3D Data Visualization</h3>
                <p className="text-sm opacity-90 mb-4">
                  Interactive 3D dashboard using Three.js for visualizing complex datasets with real-time updates.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-500 text-xs rounded">Three.js</span>
                  <span className="px-2 py-1 bg-blue-500 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-red-500 text-xs rounded">WebGL</span>
                </div>
              </div>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg hover:bg-opacity-70 transition-all">
                <h3 className="text-xl font-semibold mb-4 text-red-400">AI Chat Application</h3>
                <p className="text-sm opacity-90 mb-4">
                  Real-time chat application with AI integration, featuring voice recognition and sentiment analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-green-500 text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-blue-500 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-purple-500 text-xs rounded">AI/ML</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white pointer-events-auto max-w-4xl mx-auto px-8">
            <h2 className="text-5xl font-bold mb-8 text-yellow-400">Let's Connect</h2>
            <p className="text-xl mb-12 opacity-90">
              Ready to build something amazing together?
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors">📧</a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors">💼</a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors">🐙</a>
              <a href="#" className="text-2xl hover:text-blue-400 transition-colors">🐦</a>
            </div>
            <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-gray-300 mb-2">Scroll Progress</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                {Math.round(scrollProgress * 100)}% complete
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPortfolio3D;
