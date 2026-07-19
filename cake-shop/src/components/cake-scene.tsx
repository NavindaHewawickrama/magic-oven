"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { forwardRef, useMemo } from "react";
import * as THREE from "three";
import { CakeConfig } from "@/lib/builder-types";

// Helper function to adjust color brightness
// amount > 0 lightens, amount < 0 darkens
function shade(hex: string, amount: number) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amount);
  return c;
}

// Individual cake tier component
// Creates a single tier with configurable shape, color, and layered bands
function Tier({
  radius,
  height,
  y,
  shape,
  color,
  layers,
}: {
  radius: number;      // Width of the tier
  height: number;      // Height of the tier
  y: number;           // Vertical position in the scene
  shape: CakeConfig["shape"];  // "Round", "Square", or "Heart"
  color: string;       // Base color for the tier
  layers: number;      // Number of horizontal color bands
}) {
  // Calculate height of each color band
  const bandHeight = height / layers;
  // Create band data with alternating colors for striped effect
  const bands = useMemo(() => {
    return Array.from({ length: layers }).map((_, i) => ({
      y: y - height / 2 + bandHeight / 2 + i * bandHeight,
      // Alternate between base color and slightly darker shade
      color: i % 2 === 0 ? color : shade(color, -0.08).getStyle(),
    }));
  }, [layers, height, y, bandHeight, color]);

  return (
    <group>
      {bands.map((b, i) =>
        shape === "Round" ? (
          // Round tier: cylinder geometry
          <mesh key={i} position={[0, b.y, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[radius, radius, bandHeight * 0.96, 48]} />
            <meshStandardMaterial color={b.color} roughness={0.55} />
          </mesh>
        ) : shape === "Square" ? (
          // Square tier: box geometry (scaled by radius)
          <mesh key={i} position={[0, b.y, 0]} castShadow receiveShadow>
            <boxGeometry args={[radius * 1.7, bandHeight * 0.96, radius * 1.7]} />
            <meshStandardMaterial color={b.color} roughness={0.55} />
          </mesh>
        ) : (
          // Heart tier: approximated with two offset cylinders + rotated box
          <group key={i} position={[0, b.y, 0]}>
            <mesh position={[radius * 0.45, 0, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[radius * 0.55, radius * 0.55, bandHeight * 0.96, 32]} />
              <meshStandardMaterial color={b.color} roughness={0.55} />
            </mesh>
            <mesh position={[-radius * 0.45, 0, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[radius * 0.55, radius * 0.55, bandHeight * 0.96, 32]} />
              <meshStandardMaterial color={b.color} roughness={0.55} />
            </mesh>
            <mesh position={[0, 0, radius * 0.4]} rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
              <boxGeometry args={[radius * 1.05, bandHeight * 0.96, radius * 1.05]} />
              <meshStandardMaterial color={b.color} roughness={0.55} />
            </mesh>
          </group>
        )
      )}
    </group>
  );
}

// Decorations component - adds decorative elements to the top of the top tier
function Decorations({ topY, radius, decoration, color }: { topY: number; radius: number; decoration: CakeConfig["decoration"]; color: string }) {
  if (decoration === "None") return null;
  
  // Chocolate drip decoration - small spheres hanging from the edge
  if (decoration === "Drip") {
    const drips = 14;
    return (
      <group>
        {Array.from({ length: drips }).map((_, i) => {
          const angle = (i / drips) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * radius, topY - 0.15, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial color={shade(color, -0.25)} />
            </mesh>
          );
        })}
      </group>
    );
  }
  // Pearl decoration - white beads around the top edge
  if (decoration === "Pearls") {
    const pearls = 24;
    return (
      <group>
        {Array.from({ length: pearls }).map((_, i) => {
          const angle = (i / pearls) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * (radius + 0.05), topY, Math.sin(angle) * (radius + 0.05)]}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshStandardMaterial color="#FFFFFF" metalness={0.3} roughness={0.2} />
            </mesh>
          );
        })}
      </group>
    );
  }
  
  // Flowers decoration - pink flowers on top
  const flowers = 5;
  return (
    <group>
      {Array.from({ length: flowers }).map((_, i) => {
        const angle = (i / flowers) * Math.PI * 2;
        const r = radius * 0.55;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, topY + 0.06, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.13, 10, 10]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#E8879A" : "#F2C6D6"} />
          </mesh>
        );
      })}
    </group>
  );
}

// Toppings component - adds toppings to the top of the top tier
function Toppings({ topY, radius, topping }: { topY: number; radius: number; topping: CakeConfig["topping"] }) {
  if (topping === "None") return null;
  
  // Candles topping - birthday candles with flames
  if (topping === "Candles") {
    const candles = 5;
    return (
      <group>
        {Array.from({ length: candles }).map((_, i) => {
          const angle = (i / candles) * Math.PI * 2;
          const r = radius * 0.4;
          return (
            <group key={i} position={[Math.cos(angle) * r, topY, Math.sin(angle) * r]}>
              <mesh position={[0, 0.15, 0]}>
                <cylinderGeometry args={[0.025, 0.025, 0.3, 10]} />
                <meshStandardMaterial color="#F2E1B0" />
              </mesh>
              <mesh position={[0, 0.32, 0]}>
                <sphereGeometry args={[0.03, 8, 8]} />
                <meshStandardMaterial color="#F2A65A" emissive="#F2A65A" emissiveIntensity={0.8} />
              </mesh>
            </group>
          );
        })}
      </group>
    );
  }
  // Fresh fruit topping - berries around the top
  if (topping === "Fresh Fruit") {
    const fruit = 8;
    return (
      <group>
        {Array.from({ length: fruit }).map((_, i) => {
          const angle = (i / fruit) * Math.PI * 2;
          const r = radius * 0.6;
          return (
            <mesh key={i} position={[Math.cos(angle) * r, topY + 0.08, Math.sin(angle) * r]}>
              <sphereGeometry args={[0.09, 10, 10]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#B03A2E" : "#7C3F58"} roughness={0.4} />
            </mesh>
          );
        })}
      </group>
    );
  }
  
  // Macarons topping - colorful macarons around the top
  const macarons = 6;
  return (
    <group>
      {Array.from({ length: macarons }).map((_, i) => {
        const angle = (i / macarons) * Math.PI * 2;
        const r = radius * 0.55;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, topY + 0.05, Math.sin(angle) * r]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 0.06, 20]} />
            <meshStandardMaterial color={i % 2 === 0 ? "#D9A5C0" : "#F2D6A2"} />
          </mesh>
        );
      })}
    </group>
  );
}

// Main cake model component - assembles all tiers, decorations, and toppings
function CakeModel({ config }: { config: CakeConfig }) {
  const { levels, layers, shape, color, decoration, topping } = config;

  // Calculate tier dimensions and positions
  // Each tier is smaller than the one below it for a tapered effect
  const tiers = useMemo(() => {
    const result: { radius: number; height: number; y: number }[] = [];
    let currentY = 0;
    const baseRadius = 1.5;  // Starting radius for the bottom tier
    
    for (let i = 0; i < levels; i++) {
      // Radius decreases as we go up (tapered cake)
      const radius = baseRadius - i * (baseRadius / (levels + 1.4));
      const height = 0.85;  // Fixed height for each tier
      const y = currentY + height / 2;  // Center position of this tier
      result.push({ radius, height, y });
      currentY += height;  // Stack next tier on top
    }
    return result;
  }, [levels]);

  const top = tiers[tiers.length - 1];
  const totalHeight = tiers.reduce((acc, t) => acc + t.height, 0);

  return (
    // Position entire cake so it's centered vertically
    <group position={[0, -totalHeight / 2, 0]}>
      {/* Render all tiers from bottom to top */}
      {tiers.map((t, i) => (
        <Tier key={i} radius={t.radius} height={t.height} y={t.y} shape={shape} color={color} layers={layers} />
      ))}
      
      {/* Add decorations and toppings to the top tier */}
      {top && (
        <>
          <Decorations topY={top.y + top.height / 2} radius={top.radius} decoration={decoration} color={color} />
          <Toppings topY={top.y + top.height / 2} radius={top.radius} topping={topping} />
        </>
      )}
      
      {/* Cake board - circular base under the cake */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[tiers[0].radius + 0.35, tiers[0].radius + 0.35, 0.08, 48]} />
        <meshStandardMaterial color="#EFE3CB" roughness={0.9} />
      </mesh>
    </group>
  );
}

// Main scene component - sets up the 3D canvas and rendering environment
const CakeScene = forwardRef<HTMLCanvasElement, { config: CakeConfig }>(function CakeScene(
  { config },
  canvasRef
) {
  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2.2, 3.8], fov: 38 }}
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        // Get the canvas element from the WebGL renderer and forward it to the ref
        if (gl.domElement instanceof HTMLCanvasElement) {
          // Handle both callback refs and RefObjects
          if (typeof canvasRef === 'function') {
            canvasRef(gl.domElement);
          } else if (canvasRef) {
            (canvasRef as React.RefObject<HTMLCanvasElement | null>).current = gl.domElement;
          }
        }
      }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      
      {/* The 3D cake model */}
      <CakeModel config={config} />
      
      {/* Ground shadow for realism */}
      <ContactShadows position={[0, -1.35, 0]} opacity={0.35} scale={8} blur={2.4} far={3} />
      
      {/* Environment for realistic reflections */}
      <Environment preset="apartment" />
      
      {/* Camera controls - allow rotation but prevent panning */}
      <OrbitControls
        enablePan={false}
        minDistance={2.5}
        maxDistance={7}
        minPolarAngle={0.3}
        maxPolarAngle={1.45}
      />
    </Canvas>
  );
});

/*
 * COMPONENT FLOW & DATA FLOW:
 * 
 * CakeScene (Parent)
 *   │
 *   ├── Receives: CakeConfig object from parent component
 *   │
 *   ├── Sets up: Canvas, lighting, shadows, camera, environment
 *   │
 *   └── Renders: CakeModel
 *        │
 *        ├── Receives: CakeConfig
 *        │
 *        ├── Calculates: Tier positions/sizes based on 'levels'
 *        │
 *        ├── Renders: Tier[] (one for each level)
 *        │    │
 *        │    └── Each Tier receives: radius, height, y, shape, color, layers
 *        │         │
 *        │         ├── Creates: Layered bands with alternating colors
 *        │         │
 *        │         └── Renders geometry based on shape:
 *        │              ├── Round → cylinderGeometry
 *        │              ├── Square → boxGeometry
 *        │              └── Heart → cylinders + box (approximated)
 *        │
 *        ├── Renders: Decorations (on top tier only)
 *        │    └── Receives: topY, radius, decoration type, color
 *        │         └── Renders: Drip | Pearls | Flowers | null
 *        │
 *        ├── Renders: Toppings (on top tier only)
 *        │    └── Receives: topY, radius, topping type
 *        │         └── Renders: Candles | Fresh Fruit | Macarons | null
 *        │
 *        └── Renders: Cake board (circular base)
 *
 * DATA FLOW:
 * CakeConfig → CakeScene → CakeModel → Tier[] + Decorations + Toppings
 * 
 * RENDER ORDER (bottom to top):
 * 1. Cake board
 * 2. Tier 1 (bottom)
 * 3. Tier 2
 * 4. ...
 * 5. Tier N (top)
 * 6. Decorations (on top tier)
 * 7. Toppings (on top tier)
 */

export default CakeScene;
