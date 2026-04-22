import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoService } from '../services/foro.service';
import * as THREE from 'three';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-expresate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expresate.html',
  styleUrls: ['./expresate.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpresateComponent implements OnInit, AfterViewInit, OnDestroy {
  ultimosTemas: any[] = [];
  loading = true;
  activeTab: string = 'tab1';
  private intervalId: any;
  private animationId: number | null = null;

  constructor(private foroService: ForoService) {}

  ngOnInit() {
    this.cargarTemas();
  }

  cargarTemas() {
    this.foroService.getUltimosTemas().subscribe({
      next: (data: any) => {
        this.ultimosTemas = data.topic_list?.topics?.slice(0, 5) || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error al cargar temas:', err);
        this.ultimosTemas = [
          { id: 1, title: '¿Cómo manejar la ansiedad antes de dormir?', posts_count: 12, views: 45 },
          { id: 2, title: 'Consejos para reducir el uso del celular', posts_count: 8, views: 32 },
          { id: 3, title: 'Mi experiencia con la terapia online', posts_count: 23, views: 89 },
          { id: 4, title: 'Mindfulness para principiantes', posts_count: 15, views: 67 },
          { id: 5, title: 'Relaciones tóxicas: cómo identificarlas', posts_count: 19, views: 73 }
        ];
        this.loading = false;
      }
    });
  }

  ngAfterViewInit() {
    this.initTabs();
    this.iniciarCarruselAutomatico();
    this.iniciarRedConexiones();
  }

  iniciarRedConexiones() {
    const container = document.getElementById('planetaContainer');
    if (!container) return;
    
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050b1a);
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 3.5);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);
    
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');
    
    const geometry = new THREE.SphereGeometry(1.2, 128, 128);
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.3,
      metalness: 0.1,
      emissive: 0x112244,
      emissiveIntensity: 0.15
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);
    
    const atmosGeometry = new THREE.SphereGeometry(1.22, 64, 64);
    const atmosMaterial = new THREE.MeshPhongMaterial({
      color: 0x3388ff,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosphere);
    
    const ciudades = [
      { lat: 40.7128, lon: -74.0060 }, { lat: 51.5074, lon: -0.1278 },
      { lat: 48.8566, lon: 2.3522 }, { lat: 35.6895, lon: 139.6917 },
      { lat: -33.8688, lon: 151.2093 }, { lat: 55.7558, lon: 37.6173 },
      { lat: -23.5505, lon: -46.6333 }, { lat: 28.6139, lon: 77.2090 },
      { lat: 31.2304, lon: 121.4737 }, { lat: 19.0760, lon: 72.8777 },
      { lat: 41.9028, lon: 12.4964 }, { lat: 52.5200, lon: 13.4050 },
      { lat: 39.9042, lon: 116.4074 }, { lat: 34.0522, lon: -118.2437 },
      { lat: 37.7749, lon: -122.4194 }, { lat: 1.3521, lon: 103.8198 },
      { lat: -1.2864, lon: 36.8172 }, { lat: 30.0444, lon: 31.2357 },
      { lat: 33.6844, lon: 73.0479 }, { lat: -34.6037, lon: -58.3816 }
    ];
    
    const latLonToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = lon * Math.PI / 180;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return new THREE.Vector3(x, y, z);
    };
    
    const puntos: THREE.Vector3[] = [];
    const puntosMesh: THREE.Mesh[] = [];
    const radiusSuperficie = 1.21;
    
    ciudades.forEach(ciudad => {
      const pos = latLonToVector3(ciudad.lat, ciudad.lon, radiusSuperficie);
      puntos.push(pos);
      
      const pointGeo = new THREE.SphereGeometry(0.01, 16, 16);
      const pointMat = new THREE.MeshStandardMaterial({ color: 0xffaa66, emissive: 0xff4422, emissiveIntensity: 0.8 });
      const point = new THREE.Mesh(pointGeo, pointMat);
      point.position.copy(pos);
      scene.add(point);
      puntosMesh.push(point);
    });
    
    const conexiones: { start: THREE.Vector3, end: THREE.Vector3, particula: THREE.Mesh, velocidad: number }[] = [];
    
    const paresConexiones = [
      [0,1], [1,2], [2,3], [3,4], [4,5], [5,6], [6,7], [7,8], [8,9], [9,10],
      [10,11], [11,12], [12,13], [13,14], [14,15], [15,16], [16,17], [17,18], [18,19],
      [0,13], [1,5], [2,10], [3,12], [4,15], [6,16], [7,17], [8,18], [9,19]
    ];
    
    paresConexiones.forEach(par => {
      const i = par[0];
      const j = par[1];
      if (i >= puntos.length || j >= puntos.length) return;
      
      const start = puntos[i];
      const end = puntos[j];
      const midDir = start.clone().add(end).normalize();
      const distancia = start.distanceTo(end);
      const altura = distancia * 0.35;
      const mid = midDir.multiplyScalar(1.2 + altura);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(60);
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const lineMat = new THREE.LineBasicMaterial({ color: 0x33aaff, transparent: true, opacity: 0.4 });
      const curveLine = new THREE.Line(lineGeo, lineMat);
      scene.add(curveLine);
      
      const particulaGeo = new THREE.SphereGeometry(0.008, 8, 8);
      const particulaMat = new THREE.MeshStandardMaterial({ color: 0x88ddff, emissive: 0x44aaff, emissiveIntensity: 0.9 });
      const particula = new THREE.Mesh(particulaGeo, particulaMat);
      scene.add(particula);
      conexiones.push({ start, end, particula, velocidad: 0.3 + Math.random() * 0.4 });
    });
    
    const starGeo = new THREE.BufferGeometry();
    const starCount = 2000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 400;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 400;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 150 - 80;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.06 }));
    scene.add(stars);
    
    const ambientLight = new THREE.AmbientLight(0x111122);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    
    let time = 0;
    
    const animate = () => {
      this.animationId = requestAnimationFrame(animate);
      time += 0.008;
      
      conexiones.forEach(conn => {
        const t = (time * conn.velocidad) % 1;
        const start = conn.start;
        const end = conn.end;
        const midDir = start.clone().add(end).normalize();
        const distancia = start.distanceTo(end);
        const altura = distancia * 0.35;
        const mid = midDir.multiplyScalar(1.2 + altura);
        
        const t2 = t * t;
        const mt = 1 - t;
        const mt2 = mt * mt;
        const x = mt2 * start.x + 2 * mt * t * mid.x + t2 * end.x;
        const y = mt2 * start.y + 2 * mt * t * mid.y + t2 * end.y;
        const z = mt2 * start.z + 2 * mt * t * mid.z + t2 * end.z;
        
        conn.particula.position.set(x, y, z);
        
        const scale = 1 + Math.sin(time * 12) * 0.5;
        conn.particula.scale.set(scale, scale, scale);
      });
      
      puntosMesh.forEach((point, idx) => {
        const scale = 1 + Math.sin(time * 3 + idx) * 0.3;
        point.scale.set(scale, scale, scale);
      });
      
      earth.rotation.y += 0.0015;
      atmosphere.rotation.y += 0.0015;
      stars.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
  }

  initTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        if (tabId) {
          this.activeTab = tabId;
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
          });
          const activeContent = document.getElementById(tabId);
          if (activeContent) {
            activeContent.classList.add('active');
          }
        }
      });
    });
  }

  iniciarCarruselAutomatico() {
    const tabs = ['tab1', 'tab2', 'tab3', 'tab4'];
    let index = 0;
    
    this.intervalId = setInterval(() => {
      index = (index + 1) % tabs.length;
      this.setActiveTab(tabs[index]);
    }, 5000);
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    const activeContent = document.getElementById(tab);
    if (activeContent) {
      activeContent.classList.add('active');
    }
  }

  irAlForo() {
    window.location.href = 'http://localhost';
  }

  irAlTema(temaId: number) {
    window.location.href = `http://localhost/t/${temaId}`;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}