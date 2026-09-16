import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates & target
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    };

    // Responsive scaling
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particles array
    interface Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      density: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(120, Math.floor((width * height) / 12000));

    // Colors that look clean in both light and dark modes
    const isDarkMode = () => document.documentElement.classList.contains("dark");

    const getParticleColor = () => {
      if (isDarkMode()) {
        // Soft glowing golden/white sand in dark mode
        const randomGold = Math.random() > 0.5 ? "245, 245, 245" : "217, 119, 6";
        return randomGold;
      } else {
        // Charcoal sand in light mode
        const randomCharcoal = Math.random() > 0.5 ? "82, 82, 82" : "156, 163, 175";
        return randomCharcoal;
      }
    };

    for (let i = 0; i < particleCount; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      particles.push({
        x: rx,
        y: ry,
        baseX: rx,
        baseY: ry,
        size: Math.random() * 1.8 + 0.6,
        color: getParticleColor(),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        density: Math.random() * 20 + 2,
        alpha: Math.random() * 0.3 + 0.15,
      });
    }

    // Animation Loop
    const animate = () => {
      // Clear with very slight transparency to leave a beautiful motion trail
      ctx.clearRect(0, 0, width, height);

      const dark = isDarkMode();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Idle drifting
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse collision physics (sand dispersal)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          
          // Force strength decreases with distance
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * p.density * 0.6;
          const directionY = forceDirectionY * force * p.density * 0.6;

          // Push away smoothly like real sand blown by breath/wind
          p.x -= directionX;
          p.y -= directionY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Sync color dynamically on state change
        ctx.fillStyle = `rgba(${dark ? "255, 255, 255" : "38, 38, 38"}, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-500"
    />
  );
}
