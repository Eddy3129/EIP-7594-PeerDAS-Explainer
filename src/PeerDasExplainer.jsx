import React, { useState, useEffect, useRef } from "react";
import {
  BookOpen,
  Share2,
  ShieldCheck,
  Zap,
  Database,
  Network,
  ArrowRight,
  CheckCircle,
  XCircle,
  Search,
  Sliders,
  Activity,
  Thermometer,
  Smartphone,
  Lock,
  Clock,
  Cpu,
} from "lucide-react";

const PeerDasExplainer = () => {
  const [activeTab, setActiveTab] = useState("concept");

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-gray-800 font-sans selection:bg-yellow-200">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Patrick+Hand&display=swap');
          
          .font-hand {
            font-family: 'Shadows Into Light', cursive;
          }
          .font-note {
            font-family: 'Patrick Hand', cursive;
          }
          
          .paper-pattern {
            background-image: radial-gradient(#d1d5db 1px, transparent 1px);
            background-size: 24px 24px;
          }

          /* Custom Range Slider */
          input[type=range] {
            -webkit-appearance: none; 
            background: transparent; 
          }
          input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            background: #2563eb;
            cursor: pointer;
            margin-top: -10px; 
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 4px;
            cursor: pointer;
            background: #d1d5db;
            border-radius: 2px;
          }

          /* Animation Keyframes */
          @keyframes flowDown {
            0% { top: 0; opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
          
          @keyframes scatter {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }
        `}
      </style>

      {/* Header */}
      <header className="relative pt-12 pb-16 px-4 overflow-hidden border-b-4 border-dashed border-gray-300 paper-pattern">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block bg-yellow-200 px-4 py-1 rotate-[-2deg] mb-4 shadow-sm border border-yellow-300">
            <span className="font-hand text-xl font-bold text-yellow-900">
              Next Upgrade: Fusaka (Dec 3rd) 🚀
            </span>
          </div>
          <h1 className="font-hand text-6xl md:text-7xl font-bold text-gray-900 mb-4 tracking-wide">
            EIP-7594 - PeerDAS{" "}
          </h1>
          <p className="font-note text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unpacking the infrastructure layer that makes Ethereum viable at
            scale.
            <br />
            <span className="text-sm text-gray-500">
              (Osaka Execution + Fulu Consensus)
            </span>
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["concept", "fusaka", "comparison", "simulator"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-hand text-2xl px-8 py-3 rounded-tl-2xl rounded-br-2xl border-2 transition-all duration-300 transform hover:-translate-y-1 ${
                activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg rotate-1"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-400 hover:text-blue-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "concept" && <ConceptTab />}
        {activeTab === "fusaka" && <FusakaTab />}
        {activeTab === "comparison" && <ComparisonTab />}
        {activeTab === "simulator" && <SimulatorTab />}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-12 px-4 text-center border-t-2 border-dashed border-gray-300 mt-12">
        <p className="font-note text-gray-500 text-lg">
          Based on the technical deep dive & study notes. Built for the Ethereum
          community.
        </p>
      </footer>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const ConceptTab = () => (
  <div className="space-y-12 animate-in fade-in zoom-in duration-500">
    <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-gray-800 relative transform -rotate-1">
      <div className="absolute -top-5 -left-5 bg-red-100 text-red-800 font-hand text-2xl px-4 py-2 border-2 border-red-800 rounded-lg shadow-sm rotate-[-5deg]">
        The Bottleneck 🛑
      </div>
      <h2 className="font-hand text-4xl mb-6 mt-4 text-gray-800">
        Why EIP-4844 wasn't enough
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="font-note text-xl space-y-4 leading-loose">
          <p>
            <span className="font-bold text-blue-600">EIP-4844</span> introduced
            "Blobs", but validators currently download{" "}
            <span className="underline decoration-wavy decoration-red-400">
              the entire blob
            </span>
            .
          </p>
          <p className="bg-yellow-50 p-4 border-l-4 border-yellow-400">
            <strong>The Reality:</strong> Every node holding ALL data is
            expensive and slow. It limits us to ~6 blobs per block.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
          <Database className="w-16 h-16 text-blue-500 mx-auto mb-2" />
          <p className="font-hand text-xl text-gray-500">
            Current: "Download All"
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white p-8 rounded-xl shadow-xl border-2 border-blue-600 relative transform rotate-1">
      <div className="absolute -top-5 -right-5 bg-green-100 text-green-800 font-hand text-2xl px-4 py-2 border-2 border-green-800 rounded-lg shadow-sm rotate-[5deg]">
        The Solution: PeerDAS ✨
      </div>
      <h2 className="font-hand text-4xl mb-6 mt-4 text-gray-800">
        The "Fusaka" Vision
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 bg-blue-50 p-6 rounded-lg border-2 border-dashed border-blue-300 text-center">
          <div className="grid grid-cols-4 gap-2 mb-4 w-48 mx-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`h-8 w-8 rounded flex items-center justify-center text-[10px] font-bold ${
                  [1].includes(i)
                    ? "bg-green-400 ring-2 ring-green-600 scale-110"
                    : "bg-blue-200 opacity-30"
                }`}
              >
                {i === 1 ? "ME" : ""}
              </div>
            ))}
          </div>
          <p className="font-hand text-xl text-blue-600">
            New: "Hold 1/8th of Data"
          </p>
        </div>
        <div className="order-1 md:order-2 font-note text-xl space-y-4 leading-loose">
          <p>
            With <span className="font-bold text-blue-600">PeerDAS</span> in
            Fusaka:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Each node only holds <strong>1/8th</strong> of the data.
            </li>
            <li>
              Enables <strong>8x more blob capacity</strong>.
            </li>
            <li>
              Results in significantly lower bandwidth costs for operators.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const FusakaTab = () => (
  <div className="grid md:grid-cols-2 gap-6 animate-in fade-in zoom-in duration-500">
    {/* Card 1: Blob Scaling */}
    <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white p-2 rounded-full border border-yellow-500">
          <Activity className="text-yellow-600 w-6 h-6" />
        </div>
        <h3 className="font-hand text-3xl text-yellow-900">Blob Scaling</h3>
      </div>
      <ul className="font-note text-lg space-y-2 text-yellow-900">
        <li>
          • <strong>BPO Forks:</strong> Increase blob count without major hard
          forks.
        </li>
        <li>
          • <strong>Target:</strong> Going from 6 → 14+ blobs.
        </li>
        <li>• More blobs = Cheaper L2 fees.</li>
      </ul>
    </div>

    {/* Card 2: Better UX */}
    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-300 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white p-2 rounded-full border border-purple-500">
          <Smartphone className="text-purple-600 w-6 h-6" />
        </div>
        <h3 className="font-hand text-3xl text-purple-900">Better UX</h3>
      </div>
      <ul className="font-note text-lg space-y-2 text-purple-900">
        <li>
          • <strong>Biometrics:</strong> Use FaceID/TouchID as wallets
          (secp256r1).
        </li>
        <li>
          • <strong>No Seed Phrases:</strong> Easier onboarding for regular
          users.
        </li>
        <li>
          • <strong>Preconfirmations:</strong> Faster deterministic transaction
          confirms.
        </li>
      </ul>
    </div>

    {/* Card 3: Block Limits */}
    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-300 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white p-2 rounded-full border border-blue-500">
          <Cpu className="text-blue-600 w-6 h-6" />
        </div>
        <h3 className="font-hand text-3xl text-blue-900">Block Limits</h3>
      </div>
      <ul className="font-note text-lg space-y-2 text-blue-900">
        <li>
          • <strong>Gas Limit:</strong> Rising 45M → ~60M.
        </li>
        <li>
          • <strong>Block Size:</strong> Capped at 10 MiB to prevent congestion.
        </li>
        <li>
          • <strong>Single Tx:</strong> Capped at 16.7M gas (prevent hogging).
        </li>
      </ul>
    </div>

    {/* Card 4: Security */}
    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-300 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white p-2 rounded-full border border-red-500">
          <ShieldCheck className="text-red-600 w-6 h-6" />
        </div>
        <h3 className="font-hand text-3xl text-red-900">Security & Timeline</h3>
      </div>
      <ul className="font-note text-lg space-y-2 text-red-900">
        <li>
          • <strong>DoS Protection:</strong> MODEXP cost increased.
        </li>
        <li>
          • <strong>Launch:</strong> December 3rd (Mainnet).
        </li>
        <li>
          • <strong>History Expiry:</strong> Reduces disk space needs.
        </li>
      </ul>
    </div>
  </div>
);

const ComparisonTab = () => (
  <div className="grid md:grid-cols-2 gap-8 animate-in fade-in zoom-in duration-500">
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-8 border-gray-400">
      <h3 className="font-hand text-4xl text-gray-500 mb-2">
        Pre-Fusaka (Now)
      </h3>
      <ul className="space-y-4 font-note text-xl mt-6">
        <li className="flex gap-3">
          <Zap className="text-gray-400" /> Download 100% of Data.
        </li>
        <li className="flex gap-3">
          <Database className="text-gray-400" /> Max ~6 blobs/block.
        </li>
        <li className="flex gap-3">
          <Activity className="text-gray-400" /> TPS cap ~30 (L1).
        </li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-xl border-t-8 border-green-500 transform scale-105">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-hand text-4xl text-green-600">Fusaka + PeerDAS</h3>
        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full uppercase">
          Dec 3rd
        </span>
      </div>
      <ul className="space-y-4 font-note text-xl mt-6">
        <li className="flex gap-3">
          <Zap className="text-yellow-500" /> Download <strong>1/8th</strong> of
          Data.
        </li>
        <li className="flex gap-3">
          <Database className="text-green-500" /> <strong>8x</strong> More
          Capacity (Target 14+).
        </li>
        <li className="flex gap-3">
          <Activity className="text-green-500" /> Path to 100k+ TPS via L2s.
        </li>
        <li className="flex gap-3">
          <CheckCircle className="text-green-500" /> <strong>~80%</strong> Less
          Bandwidth for Regular Nodes.
        </li>
      </ul>
    </div>
  </div>
);

/* --- ADVANCED SIMULATOR --- */

const SimulatorTab = () => {
  const [blobCount, setBlobCount] = useState(6);
  const [packets, setPackets] = useState([]);
  const requestRef = useRef();
  const lastSpawnTime = useRef(0);

  // Metrics Calculation based on Fusaka stats
  // Legacy: Linear scale (100% download)
  // Fusaka (PeerDAS): "Regular nodes ~80% less blob bandwidth" or "holds 1/8th data".
  // So PeerDAS load is roughly 1/8th (12.5%) or 20% of Legacy load.
  const legacyLoadMB = (blobCount * 0.128).toFixed(2);
  const peerDasLoadMB = (legacyLoadMB * 0.2).toFixed(2); // Using conservative 80% reduction
  const savingsPercent = 80; // Hardcoded based on "80% less" claim for clarity, or can be dynamic

  // Simulation Constants
  const PIPE_HEIGHT = 400; // px
  const SPEED_BASE = 2; // px per tick

  // Game Loop
  useEffect(() => {
    const animate = (time) => {
      // 1. Calculate Load
      // Legacy: Each packet is HUGE load. Max valid load is ~10 active big packets.
      // PeerDAS: Packets are tiny.
      const legacyLoad = packets.filter((p) => p.type === "legacy").length;

      // Congestion Factor
      const congestionFactor = Math.max(0.1, 1 - legacyLoad / 12);

      // 2. Spawn New Packets
      // Spawn rate depends on blobCount slider
      const spawnInterval = 20000 / blobCount; // Higher blob count = lower interval = faster spawn

      if (time - lastSpawnTime.current > spawnInterval) {
        const id = Date.now();
        // Add Legacy Packet
        const newLegacy = {
          id: `l-${id}`,
          type: "legacy",
          y: 0,
          speed: SPEED_BASE,
        };
        // Add PeerDAS Packet (Visualized as a group of particles, but logic is one obj for simplicity of render loop)
        const newPeerDas = {
          id: `p-${id}`,
          type: "peerdas",
          y: 0,
          speed: SPEED_BASE,
        }; // PeerDAS always fast

        setPackets((prev) => [...prev, newLegacy, newPeerDas]);
        lastSpawnTime.current = time;
      }

      // 3. Move Packets
      setPackets((prevPackets) => {
        return prevPackets
          .map((p) => ({
            ...p,
            y:
              p.y +
              (p.type === "legacy" ? p.speed * congestionFactor : p.speed), // Legacy slows down, PeerDAS doesn't
          }))
          .filter((p) => p.y < PIPE_HEIGHT + 50); // Remove when off screen
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [blobCount, packets]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border-2 border-purple-600 animate-in fade-in zoom-in duration-500">
      {/* Controls */}
      <div className="text-center mb-8">
        <div className="inline-block bg-purple-100 text-purple-900 font-hand text-2xl px-6 py-2 border-2 border-purple-800 rounded-lg shadow-sm mb-4">
          Visual Network Simulation
        </div>
        <p className="font-note text-lg text-gray-600 mb-4">
          Drag the slider to increase Block Production (Blobs per Block).
          <br />
          Watch how the{" "}
          <span className="text-red-500 font-bold">Legacy Pipe</span> clogs
          while <span className="text-green-600 font-bold">PeerDAS</span> flows
          freely.
        </p>

        <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <div className="flex justify-between items-center mb-2 font-hand text-xl">
            <span className="text-sm text-gray-500">Current (6)</span>
            <span className="font-bold text-blue-600 text-2xl">
              {blobCount} Blobs
            </span>
            <span className="text-sm text-green-600 font-bold">
              Target (14+)
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="64"
            value={blobCount}
            onChange={(e) => setBlobCount(parseInt(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs font-mono text-gray-400 mt-2">
            <span>1</span>
            <span>16</span>
            <span>32</span>
            <span>64</span>
          </div>
        </div>
      </div>

      {/* Visualization Container */}
      <div className="grid grid-cols-2 gap-4 h-[500px] border-4 border-gray-800 rounded-lg overflow-hidden bg-gray-900 relative">
        {/* LEFT: LEGACY */}
        <div className="relative border-r-2 border-gray-700 bg-gray-800/50">
          <div className="absolute top-0 w-full text-center py-2 bg-red-900/80 text-red-100 font-bold border-b border-red-500 z-10">
            Legacy (Full Download)
          </div>
          <div className="absolute bottom-0 w-full text-center py-4 bg-gray-900 text-gray-400 font-note z-10 border-t border-gray-700">
            YOUR NODE
          </div>

          {/* Render Legacy Packets */}
          {packets
            .filter((p) => p.type === "legacy")
            .map((p) => (
              <div
                key={p.id}
                className="absolute left-1/2 transform -translate-x-1/2 bg-red-500 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.6)] flex items-center justify-center text-[10px] font-bold text-white border border-red-300"
                style={{
                  top: `${p.y}px`,
                  width: "80%",
                  height: "60px",
                  transition: "top 0s linear", // handled by JS loop
                }}
              >
                FULL BLOB
              </div>
            ))}

          {/* Congestion Overlay */}
          {packets.filter((p) => p.type === "legacy").length > 8 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/70 text-red-500 font-hand text-4xl px-6 py-4 rounded-xl border-4 border-red-500 animate-pulse transform -rotate-12">
                CONGESTION!
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: PEERDAS */}
        <div className="relative bg-gray-800/50">
          <div className="absolute top-0 w-full text-center py-2 bg-green-900/80 text-green-100 font-bold border-b border-green-500 z-10">
            Fusaka (1/8th Data)
          </div>
          <div className="absolute bottom-0 w-full text-center py-4 bg-gray-900 text-gray-400 font-note z-10 border-t border-gray-700">
            YOUR NODE
          </div>

          {/* Render PeerDAS Packets (As Particles) */}
          {packets
            .filter((p) => p.type === "peerdas")
            .map((p) => (
              <div
                key={p.id}
                className="absolute left-0 w-full"
                style={{ top: `${p.y}px` }}
              >
                {/* Visual Trick: Tiny particles representing the 1/8th data */}
                <div className="absolute left-[20%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80] animate-bounce"></div>
                <div
                  className="absolute left-[50%] w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]"
                  style={{ marginTop: "10px" }}
                ></div>
              </div>
            ))}
        </div>
      </div>

      {/* METRICS DASHBOARD */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Legacy Metric */}
        <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg text-center">
          <h4 className="font-hand text-xl text-red-800 mb-1">Legacy Load</h4>
          <p className="font-mono text-2xl font-bold text-red-600">
            {legacyLoadMB} MB
          </p>
          <p className="font-note text-gray-500 text-sm">per block</p>
        </div>

        {/* Efficiency Metric */}
        <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg text-center transform scale-105 shadow-md">
          <h4 className="font-hand text-xl text-blue-800 mb-1">
            Bandwidth Saved
          </h4>
          <p className="font-mono text-3xl font-bold text-blue-600">
            {savingsPercent}%
          </p>
          <p className="font-note text-gray-500 text-sm">For Regular Nodes</p>
        </div>

        {/* PeerDAS Metric */}
        <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg text-center">
          <h4 className="font-hand text-xl text-green-800 mb-1">Fusaka Load</h4>
          <p className="font-mono text-2xl font-bold text-green-600">
            {peerDasLoadMB} MB
          </p>
          <p className="font-note text-gray-500 text-sm">per block (1/8th)</p>
        </div>
      </div>
    </div>
  );
};

export default PeerDasExplainer;
