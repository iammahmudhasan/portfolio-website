"use client";

import React, { useEffect, useRef } from "react";

interface GlobePoint {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  brightness: number;
}

export function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    // Auto resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    window.addEventListener("resize", handleResize);

    // Generate points on a sphere using Fibonacci sphere algorithm
    const numPoints = 650;
    const globeRadius = Math.min(width, height) * 0.42;
    const points: GlobePoint[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      // Add continents clustering bias: create regions with denser dots
      // approximate continents
      const isLand =
        (y > -0.6 && y < 0.7 && Math.sin(theta * 2 + y) > -0.2) ||
        (y > 0.1 && y < 0.8 && Math.cos(theta * 3) > -0.4) ||
        (y < -0.1 && y > -0.7 && Math.sin(theta * 1.5) > 0.1);

      points.push({
        x: x * globeRadius,
        y: y * globeRadius,
        z: z * globeRadius,
        baseRadius: isLand ? 1.4 : 0.9,
        brightness: isLand ? 1.0 : 0.45,
      });
    }

    // Interactive rotation state
    let rotationY = 0.5;
    let rotationX = 0.25;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velocityY = 0.0035; // auto-spin velocity
    let velocityX = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      velocityY = deltaX * 0.005;
      velocityX = deltaY * 0.005;
      rotationY += velocityY;
      rotationX += velocityX;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - lastMouseX;
      const deltaY = e.touches[0].clientY - lastMouseY;
      velocityY = deltaX * 0.005;
      velocityX = deltaY * 0.005;
      rotationY += velocityY;
      rotationX += velocityX;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Orbital Arcs parameters
    let arcPhase = 0;

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.52;
      const centerY = height * 0.5;

      // Decay velocity back to gentle spin when not dragging
      if (!isDragging) {
        rotationY += 0.0028;
        velocityY *= 0.95;
        velocityX *= 0.95;
        rotationY += velocityY;
        rotationX += velocityX;
        // Clamp X rotation so it doesn't flip upside down
        rotationX = Math.max(-0.8, Math.min(0.8, rotationX));
      }

      arcPhase += 0.015;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // Transform and sort points by Z depth
      const projectedPoints = points.map((p) => {
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Perspective scale
        const scale = (globeRadius * 2.2) / (globeRadius * 2.2 + z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        return {
          screenX,
          screenY,
          z: z2,
          radius: Math.max(0.6, p.baseRadius * scale * window.devicePixelRatio),
          brightness: p.brightness,
        };
      });

      // Sort points so back points are drawn first
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw globe back atmosphere glow
      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        globeRadius * 0.1,
        centerX,
        centerY,
        globeRadius * 1.05
      );
      grad.addColorStop(0, "rgba(20, 25, 35, 0.4)");
      grad.addColorStop(0.85, "rgba(10, 12, 18, 0.85)");
      grad.addColorStop(1, "rgba(4, 5, 7, 0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Draw points
      for (const pt of projectedPoints) {
        // Points in front are brighter and crisp; points in back are faded
        const depthFactor = (pt.z + globeRadius) / (globeRadius * 2); // 0 (back) to 1 (front)

        if (depthFactor < 0.15) continue; // culled back hemisphere deepest points

        const opacity = Math.min(
          1,
          Math.max(0.12, depthFactor * pt.brightness * 1.2)
        );

        ctx.fillStyle =
          depthFactor > 0.65
            ? `rgba(240, 248, 255, ${opacity})`
            : `rgba(148, 163, 184, ${opacity * 0.7})`;

        ctx.beginPath();
        ctx.arc(pt.screenX, pt.screenY, pt.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra highlight on front points
        if (depthFactor > 0.82 && pt.brightness > 0.8) {
          ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(pt.screenX, pt.screenY, pt.radius * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw Orbiting Curved Arcs with glowing trail particles
      const drawOrbitArc = (
        tiltAngle: number,
        orbitR: number,
        color: string,
        speedMultiplier: number,
        offsetPhase: number
      ) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(tiltAngle);

        const currentAngle = (arcPhase * speedMultiplier + offsetPhase) % (Math.PI * 2);

        // Thin orbital ring
        ctx.beginPath();
        ctx.ellipse(0, 0, orbitR, orbitR * 0.38, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Glowing active arc segment
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          orbitR,
          orbitR * 0.38,
          0,
          currentAngle,
          currentAngle + 1.2
        );
        ctx.strokeStyle = color;
        ctx.lineWidth = 2 * window.devicePixelRatio;
        ctx.stroke();

        // Orbiting pulse dot
        const dotX = Math.cos(currentAngle + 1.2) * orbitR;
        const dotY = Math.sin(currentAngle + 1.2) * (orbitR * 0.38);

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(dotX, dotY, 3 * window.devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.fill();

        ctx.restore();
      };

      // Two elegant orbital rings (matching reference visual)
      drawOrbitArc(-0.35, globeRadius * 1.25, "rgba(245, 158, 11, 0.85)", 1.2, 0);
      drawOrbitArc(0.48, globeRadius * 1.35, "rgba(34, 211, 238, 0.8)", 0.9, 2.5);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none text-[10px] font-mono-tech text-[var(--foreground-subtle)] px-2.5 py-1 rounded-full border border-[var(--surface-border)] bg-[var(--surface)]/80 backdrop-blur-sm">
        Drag to rotate sphere
      </div>
    </div>
  );
}
