"use client";

import React, { useEffect, useRef, useState } from "react";
import rawLandPoints from "./globeData.json";

interface NodeLocation {
  name: string;
  tag: string;
  lat: number;
  lon: number;
  color: string;
  isPrimary?: boolean;
}

const GLOBAL_NODES: NodeLocation[] = [
  {
    name: "Dhaka Base",
    tag: "PRIMARY LAB [UTC+6]",
    lat: 23.81,
    lon: 90.41,
    color: "#10b981", // Emerald
    isPrimary: true,
  },
  {
    name: "Silicon Valley",
    tag: "COMPUTE & LLM RESEARCH",
    lat: 37.77,
    lon: -122.42,
    color: "#ec4899", // Pink
  },
  {
    name: "London",
    tag: "SAFETY & FRONTIER LABS",
    lat: 51.51,
    lon: -0.13,
    color: "#38bdf8", // Sky blue
  },
  {
    name: "Tokyo",
    tag: "APAC DISTRIBUTED NODE",
    lat: 35.68,
    lon: 139.77,
    color: "#a855f7", // Purple
  },
];

// Pre-project land points to Cartesian unit vectors for 60fps performance
interface PrecomputedPoint {
  x: number;
  y: number;
  z: number;
}

export function FirstbaseGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    // Convert raw [lat, lon] to 3D Cartesian coordinates on unit sphere
    const unitPoints: PrecomputedPoint[] = (rawLandPoints as [number, number][]).map(([lat, lon]) => {
      const latRad = (lat * Math.PI) / 180;
      const lonRad = (lon * Math.PI) / 180;
      return {
        x: Math.cos(latRad) * Math.sin(lonRad),
        y: -Math.sin(latRad), // screen Y is downwards
        z: Math.cos(latRad) * Math.cos(lonRad),
      };
    });

    // Also precalculate node coordinates
    const nodeVectors = GLOBAL_NODES.map((node) => {
      const latRad = (node.lat * Math.PI) / 180;
      const lonRad = (node.lon * Math.PI) / 180;
      return {
        ...node,
        unitX: Math.cos(latRad) * Math.sin(lonRad),
        unitY: -Math.sin(latRad),
        unitZ: Math.cos(latRad) * Math.cos(lonRad),
      };
    });

    // The iconic 3 Firstbase beacon dots in the Pacific
    const pacificBeacons = [
      { lat: -2, lon: -110 },
      { lat: -2, lon: -116 },
      { lat: -2, lon: -122 },
    ].map((b) => {
      const latRad = (b.lat * Math.PI) / 180;
      const lonRad = (b.lon * Math.PI) / 180;
      return {
        unitX: Math.cos(latRad) * Math.sin(lonRad),
        unitY: -Math.sin(latRad),
        unitZ: Math.cos(latRad) * Math.cos(lonRad),
      };
    });

    // Viewport sizing
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      if (!canvas) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Initial rotation angles (starts with Americas & Pacific in view, exactly like Firstbase!)
    let rotationY = 1.35;
    let rotationX = 0.22;
    let velocityY = 0.0022; // gentle auto-spin
    let velocityX = 0;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let pulsePhase = 0;

    // Mouse handlers
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      setHasInteracted(true);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      velocityY = dx * 0.004;
      velocityX = dy * 0.003;
      rotationY += velocityY;
      rotationX += velocityX;
      // Clamp tilt so globe doesn't invert
      rotationX = Math.max(-0.65, Math.min(0.65, rotationX));
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch handlers
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
        setHasInteracted(true);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      velocityY = dx * 0.004;
      velocityX = dy * 0.003;
      rotationY += velocityY;
      rotationX += velocityX;
      rotationX = Math.max(-0.65, Math.min(0.65, rotationX));
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
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

    // Main 60fps render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Centered position and massive radius
      const centerX = width * 0.5;
      // Globe apex sits nicely below hero text, rising from bottom
      const centerY = height * 0.52;
      const globeRadius = Math.min(width * 0.46, height * 0.47, 340);

      // Spin physics
      if (!isDragging) {
        rotationY += 0.0018; // continuous idle spin
        velocityY *= 0.94;
        velocityX *= 0.94;
        rotationY += velocityY;
        rotationX += velocityX;
        rotationX = Math.max(-0.65, Math.min(0.65, rotationX));
      }

      pulsePhase += 0.04;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      // 1. Draw Globe Base Sphere (Dark Silhouette Disk with subtle 3D lighting)
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2);

      const sphereGrad = ctx.createRadialGradient(
        centerX - globeRadius * 0.25,
        centerY - globeRadius * 0.35,
        globeRadius * 0.1,
        centerX,
        centerY,
        globeRadius
      );
      sphereGrad.addColorStop(0, "rgba(24, 25, 33, 0.92)");
      sphereGrad.addColorStop(0.7, "rgba(12, 13, 18, 0.96)");
      sphereGrad.addColorStop(1, "rgba(4, 5, 8, 0.99)");
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Atmospheric rim highlight
      ctx.strokeStyle = "rgba(255, 255, 255, 0.09)";
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.restore();

      // 2. Render Land Halftone Dots
      ctx.save();
      const dotCount = unitPoints.length;

      for (let i = 0; i < dotCount; i++) {
        const pt = unitPoints[i];

        // Rotate Y (longitude)
        const x1 = pt.x * cosY + pt.z * sinY;
        const y1 = pt.y;
        const z1 = -pt.x * sinY + pt.z * cosY;

        // Rotate X (latitude tilt)
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // Only draw points on the visible front hemisphere
        if (z2 > -0.02) {
          const screenX = centerX + x2 * globeRadius;
          const screenY = centerY + y2 * globeRadius;

          // Depth scaling (halftone effect): dots near the center facing camera are larger and brighter
          const depth = Math.max(0, z2);
          const dotRadius = Math.max(0.65, (0.55 + 0.85 * depth) * (globeRadius / 260));
          const opacity = Math.min(1, Math.max(0.18, 0.2 + depth * 0.78));

          ctx.beginPath();
          ctx.arc(screenX, screenY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }
      }
      ctx.restore();

      // 3. Render the 3 Iconic Pacific Beacon Dots (Firstbase signature)
      ctx.save();
      for (let i = 0; i < pacificBeacons.length; i++) {
        const b = pacificBeacons[i];
        const x1 = b.unitX * cosY + b.unitZ * sinY;
        const y1 = b.unitY;
        const z1 = -b.unitX * sinY + b.unitZ * cosY;

        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        if (z2 > 0) {
          const sx = centerX + x2 * globeRadius;
          const sy = centerY + y2 * globeRadius;

          // Glowing bright white/cyan dot
          ctx.beginPath();
          ctx.arc(sx, sy, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 8;
          ctx.fill();
        }
      }
      ctx.restore();

      // 4. Render Telemetry Nodes (Dhaka Base, SF, London, Tokyo)
      ctx.save();
      const projectedNodes: {
        node: NodeLocation;
        sx: number;
        sy: number;
        z2: number;
      }[] = [];

      for (let i = 0; i < nodeVectors.length; i++) {
        const n = nodeVectors[i];
        const x1 = n.unitX * cosY + n.unitZ * sinY;
        const y1 = n.unitY;
        const z1 = -n.unitX * sinY + n.unitZ * cosY;

        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        if (z2 > 0.05) {
          const sx = centerX + x2 * globeRadius;
          const sy = centerY + y2 * globeRadius;
          projectedNodes.push({ node: n, sx, sy, z2 });

          // Animated concentric radar waves
          const pulse1 = (pulsePhase % 2) / 2;
          const pulse2 = ((pulsePhase + 1) % 2) / 2;

          ctx.beginPath();
          ctx.arc(sx, sy, 4 + pulse1 * 18, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = (1 - pulse1) * 0.7 * z2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(sx, sy, 4 + pulse2 * 18, 0, Math.PI * 2);
          ctx.strokeStyle = n.color;
          ctx.lineWidth = 1;
          ctx.globalAlpha = (1 - pulse2) * 0.5 * z2;
          ctx.stroke();

          // Core beacon dot
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(sx, sy, n.isPrimary ? 4.5 : 3.5, 0, Math.PI * 2);
          ctx.fillStyle = n.color;
          ctx.shadowColor = n.color;
          ctx.shadowBlur = 12;
          ctx.fill();

          // Floating sleek badge label for primary node (Dhaka Base)
          if (n.isPrimary && z2 > 0.25) {
            ctx.shadowBlur = 0;
            const labelText = "DHAKA LAB [BASE]";
            ctx.font = "bold 9px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
            const metrics = ctx.measureText(labelText);
            const badgeW = metrics.width + 14;
            const badgeH = 18;
            const badgeX = sx + 8;
            const badgeY = sy - 22;

            // Badge pill background
            ctx.fillStyle = "rgba(10, 12, 16, 0.88)";
            ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 4);
            ctx.fill();
            ctx.stroke();

            // Badge text
            ctx.fillStyle = "#34d399";
            ctx.fillText(labelText, badgeX + 7, badgeY + 12);
          }
        }
      }
      ctx.restore();

      // 5. Draw Flight / Distributed Synapse Arcs between Dhaka and other nodes
      const dhaka = projectedNodes.find((p) => p.node.isPrimary);
      if (dhaka) {
        projectedNodes.forEach((other) => {
          if (!other.node.isPrimary && (dhaka.z2 > 0.1 || other.z2 > 0.1)) {
            ctx.save();
            ctx.beginPath();
            const midX = (dhaka.sx + other.sx) / 2;
            const midY = (dhaka.sy + other.sy) / 2 - 35; // arch curvature
            ctx.moveTo(dhaka.sx, dhaka.sy);
            ctx.quadraticCurveTo(midX, midY, other.sx, other.sy);

            ctx.strokeStyle = "rgba(56, 189, 248, 0.28)";
            ctx.lineWidth = 1.2;
            ctx.setLineDash([3, 4]);
            ctx.stroke();

            // Photon particle traveling along arc
            const t = (pulsePhase * 0.4) % 1;
            const photonX = (1 - t) * (1 - t) * dhaka.sx + 2 * (1 - t) * t * midX + t * t * other.sx;
            const photonY = (1 - t) * (1 - t) * dhaka.sy + 2 * (1 - t) * t * midY + t * t * other.sy;

            ctx.setLineDash([]);
            ctx.beginPath();
            ctx.arc(photonX, photonY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "#38bdf8";
            ctx.shadowColor = "#38bdf8";
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.restore();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Signature Firstbase Ambient Horizon Glow at bottom of globe */}
      <div className="absolute pointer-events-none w-full max-w-4xl h-[280px] -bottom-10 left-1/2 -translate-x-1/2 z-0">
        {/* Left deep magenta/pink atmospheric glow */}
        <div className="absolute -left-12 bottom-0 w-[380px] h-[220px] rounded-full bg-gradient-to-tr from-pink-600/35 via-rose-500/25 to-transparent blur-3xl" />
        {/* Center violet atmospheric glow */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[480px] h-[180px] rounded-full bg-gradient-to-t from-purple-600/30 via-indigo-500/20 to-transparent blur-3xl" />
        {/* Right warm amber/cyan horizon glow */}
        <div className="absolute -right-12 bottom-0 w-[360px] h-[200px] rounded-full bg-gradient-to-tl from-amber-500/20 via-cyan-500/20 to-transparent blur-3xl" />
      </div>

      {/* Interactive 3D Canvas */}
      <div className="relative z-10 w-full max-w-[760px] h-[480px] sm:h-[540px] md:h-[600px] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-none"
          title="Interactive 3D Halftone Globe — Drag to rotate"
        />

        {/* Floating helper hint (fades after interaction) */}
        {!hasInteracted && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tech tracking-wider text-[var(--foreground-subtle)] bg-[var(--surface)]/80 backdrop-blur-md border border-[var(--surface-border)] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              DRAG TO ROTATE 3D GLOBE
            </span>
          </div>
        )}
      </div>

      {/* Firstbase-Style Bottom Metrics Divider Strip */}
      <div className="w-full max-w-5xl relative z-10 border-t border-b border-[var(--surface-border)] bg-[var(--surface)]/40 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--surface-border)]">
          {/* Stat 1 */}
          <div className="px-6 py-5 text-center sm:text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono-tech flex items-baseline justify-center sm:justify-start gap-1">
              <span>4</span>
              <span className="text-xs text-[var(--foreground-subtle)] font-normal uppercase">Systems</span>
            </div>
            <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider font-mono-tech">
              Flagship Architectures
            </div>
          </div>

          {/* Stat 2 */}
          <div className="px-6 py-5 text-center sm:text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono-tech flex items-baseline justify-center sm:justify-start gap-1">
              <span>6</span>
              <span className="text-xs text-emerald-400 font-normal uppercase">Verified</span>
            </div>
            <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider font-mono-tech">
              Anthropic & Google DeepMind
            </div>
          </div>

          {/* Stat 3 */}
          <div className="px-6 py-5 text-center sm:text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-400 font-mono-tech flex items-baseline justify-center sm:justify-start gap-1">
              <span>Multi-Node</span>
            </div>
            <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider font-mono-tech">
              Distributed FSDP & Slurm
            </div>
          </div>

          {/* Stat 4 */}
          <div className="px-6 py-5 text-center sm:text-left space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] font-mono-tech flex items-baseline justify-center sm:justify-start gap-1">
              <span>UTC+6</span>
              <span className="text-xs text-emerald-400 font-normal uppercase">Active</span>
            </div>
            <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider font-mono-tech">
              Dhaka Base · Global Impact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
