"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { forwardRef, useMemo } from "react";
import * as THREE from "three";
import { CakeConfig } from "@/lib/builder-types";

function shade(hex: string, amount: number) {
  const c = new THREE.Color(hex);
  c.offsetHSL(0, 0, amount);
  return c;
}

function Tier({
  radius,
  height,
  y,
  shape,
  color,
  layers,
}: {
  radius: number;
  height: number;
  y: number;
  shape: CakeConfig["shape"];
  color: string;
  layers: number;
}) {
  const bandHeight = height / layers;
  const bands = useMemo(() => {
    return Array.from({ length: layers }).map((_, i) => ({
      y: y - height / 2 + bandHeight / 2 + i * bandHeight,
      color: i % 2 === 0 ? color : shade(color, -0.08).getStyle(),
    }));
  }, [layers, height, y, bandHeight, color]);

  return (
    <group>
      {bands.map((b, i) =>
        shape === "Round" ? (
          <mesh key={i} position={[0, b.y, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[radius, radius, bandHeight * 0.96, 48]} />
            <meshStandardMaterial color={b.color} roughness={0.55} />
          </mesh>
        ) : shape === "Square" ? (
          <mesh key={i} position={[0, b.y, 0]} castShadow receiveShadow>
            <boxGeometry args={[radius * 1.7, bandHeight * 0.96, radius * 1.7]} />
            <meshStandardMaterial color={b.color} roughness={0.55} />
          </mesh>
        ) : (
          // Heart -> approximate with two offset rounded lobes + wedge using cylinders (stylized)
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

function Decorations({ topY, radius, decoration, color }: { topY: number; radius: number; decoration: CakeConfig["decoration"]; color: string }) {
  if (decoration === "None") return null;
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
  // Flowers
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

function Toppings({ topY, radius, topping }: { topY: number; radius: number; topping: CakeConfig["topping"] }) {
  if (topping === "None") return null;
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
  // Macarons
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

function CakeModel({ config }: { config: CakeConfig }) {
  const { levels, layers, shape, color, decoration, topping } = config;

  const tiers = useMemo(() => {
    const result: { radius: number; height: number; y: number }[] = [];
    let currentY = 0;
    const baseRadius = 1.5;
    for (let i = 0; i < levels; i++) {
      const radius = baseRadius - i * (baseRadius / (levels + 1.4));
      const height = 0.85;
      const y = currentY + height / 2;
      result.push({ radius, height, y });
      currentY += height;
    }
    return result;
  }, [levels]);

  const top = tiers[tiers.length - 1];
  const totalHeight = tiers.reduce((acc, t) => acc + t.height, 0);

  return (
    <group position={[0, -totalHeight / 2, 0]}>
      {tiers.map((t, i) => (
        <Tier key={i} radius={t.radius} height={t.height} y={t.y} shape={shape} color={color} layers={layers} />
      ))}
      {top && (
        <>
          <Decorations topY={top.y + top.height / 2} radius={top.radius} decoration={decoration} color={color} />
          <Toppings topY={top.y + top.height / 2} radius={top.radius} topping={topping} />
        </>
      )}
      {/* cake board */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[tiers[0].radius + 0.35, tiers[0].radius + 0.35, 0.08, 48]} />
        <meshStandardMaterial color="#EFE3CB" roughness={0.9} />
      </mesh>
    </group>
  );
}

const CakeScene = forwardRef<HTMLCanvasElement, { config: CakeConfig }>(function CakeScene(
  { config },
  canvasRef
) {
  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2.2, 3.8], fov: 38 }}
      gl={{ preserveDrawingBuffer: true }}
      ref={canvasRef as never}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[4, 6, 3]} intensity={1.1} castShadow shadow-mapSize={[1024, 1024]} />
      <CakeModel config={config} />
      <ContactShadows position={[0, -1.35, 0]} opacity={0.35} scale={8} blur={2.4} far={3} />
      <Environment preset="apartment" />
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

export default CakeScene;
