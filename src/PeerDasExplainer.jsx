import React, { useState, useEffect, useCallback } from "react";
import {
  Database,
  Network,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Server,
  Layers,
  Cpu,
  Download,
  Boxes,
  Share2,
  RefreshCw,
  AlertCircle,
  Info,
  TrendingUp,
  Sun,
  Moon
} from "lucide-react";

const PeerDasExplainer = () => {
  const [activeSection, setActiveSection] = useState("context");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const sections = [
    { id: "context", title: "1. The Context", icon: Database },
    { id: "mechanism", title: "2. The Mechanism", icon: Network },
    { id: "reconstruction", title: "3. Reconstruction", icon: RefreshCw },
    { id: "result", title: "4. The Impact", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-midnight-900 text-slate-900 dark:text-slate-100 font-sans selection:bg-danger-500/30 transition-colors duration-300">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-midnight-800/90 backdrop-blur-md border-b border-slate-300 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">
              PeerDAS <span className="text-slate-400 dark:text-slate-200 font-normal">Demo</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="flex space-x-1 hidden md:flex">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 ring-1 ring-teal-500/20 shadow-sm"
                        : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-midnight-900"
                    }`}
                  >
                    <Icon size={16} />
                    {section.title}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-midnight-900 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:text-slate-200 border border-transparent dark:border-white/10 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        {/* Mobile Nav (Simplified) */}
        <div className="md:hidden px-4 pb-2 flex gap-2 overflow-x-auto">
           {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {section.title}
              </button>
           ))}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {activeSection === "context" && <ContextSection onNext={() => setActiveSection('mechanism')} />}
        {activeSection === "mechanism" && <MechanismSection onNext={() => setActiveSection('reconstruction')} />}
        {activeSection === "reconstruction" && <ReconstructionSection onNext={() => setActiveSection('result')} />}
        {activeSection === "result" && <ResultSection />}
      </main>
    </div>
  );
};

/* --- SECTION 1: CONTEXT (What & Why) --- */
const ContextSection = ({ onNext }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-200 tracking-tight">
          Scaling Ethereum Data Availability
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          EIP-7594 PeerDAS (Data Availability Sampling) allows Ethereum to scale blob capacity 
          without increasing the load on individual nodes.
        </p>
      </div>

      {/* Interactive Comparison */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Legacy Approach */}
        <div className="bg-white dark:bg-midnight-800 p-6 rounded-2xl border border-slate-300 dark:border-white/10 shadow-sm relative overflow-hidden group transition-colors">
          <div className="absolute top-0 left-0 w-1 h-full bg-slate-300 dark:bg-slate-600"></div>
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-slate-400 dark:text-slate-500" size={22} />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-100">Traditional Validation</h3>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Bandwidth Load</span>
              <span className="font-mono text-pink-500 dark:text-danger-500 font-bold">100% (Heavy)</span>
            </div>
            
            {/* Visualization of Full Download */}
            <div className="h-28 bg-slate-100 dark:bg-midnight-900 rounded-lg border border-slate-300 dark:border-white/5 relative overflow-hidden p-3 grid grid-cols-8 gap-1">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="bg-slate-400 dark:bg-slate-600 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.05}s` }}></div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-midnight-900/90 backdrop-blur-[1px]">
                <div className="text-center">
                  <Download className="mx-auto text-slate-400 dark:text-slate-500 mb-1" size={22} />
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Must download ALL chunks</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every validator must download the entire data blob to verify availability. 
              This limits the network's total capacity because we can't burden nodes with infinite bandwidth.
            </p>
          </div>
        </div>

        {/* PeerDAS Approach */}
        <div className="bg-white dark:bg-midnight-800 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-md relative overflow-hidden transition-colors">
           <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
           <div className="flex items-center gap-3 mb-6">
            <Network className="text-indigo-600 dark:text-indigo-400" size={22} />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-200">PeerDAS Approach</h3>
            <span className="bg-teal-500/10 dark:bg-teal-500/20 text-teal-500 dark:text-teal-400 text-sm font-bold px-2 py-0.5 rounded-full">
              Research Target
            </span>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
              <span>Bandwidth Load</span>
              <span className="font-mono text-teal-500 dark:text-teal-400 font-bold">~12.5% (Light)</span>
            </div>

            {/* Visualization of Partial Download */}
            <div className="h-28 bg-indigo-50/50 dark:bg-midnight-900 rounded-lg border border-indigo-100 dark:border-indigo-500/20 relative p-3 grid grid-cols-8 gap-1">
              {Array.from({ length: 32 }).map((_, i) => {
                 // Simulate random sampling (e.g., taking 4 chunks)
                 const isSampled = [3, 12, 20, 28].includes(i);
                 return (
                   <div 
                    key={i} 
                    className={`rounded-sm transition-all duration-500 ${isSampled ? 'bg-indigo-600 dark:bg-indigo-500 scale-110 shadow-sm' : 'bg-indigo-200/30 dark:bg-indigo-500/20'}`}
                   ></div>
                 );
              })}
            </div>

             <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Validators download only a few random samples (subnets). 
              Mathematics (Erasure Coding) guarantees that if enough unique samples exist collectively, the data is safe.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
            onClick={onNext}
            className="group flex items-center gap-2 bg-slate-900 dark:bg-indigo-600 text-white dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all"
        >
            Explore the Mechanism <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

/* --- SECTION 2: MECHANISM (How) --- */
const MechanismSection = ({ onNext }) => {
  const [step, setStep] = useState(0);
  
  const steps = [
    { title: "1. Extension", desc: "The original data blob (matrix) is extended using Reed-Solomon erasure coding. We add redundant rows and columns.", highlight: "extend" },
    { title: "2. Commitment", desc: "KZG commitments (cryptographic fingerprints) are generated for the data. These allow anyone to verify a tiny sample is correct without seeing the whole file.", highlight: "verify" },
    { title: "3. Sampling", desc: "Nodes join specific 'subnets' and download only the columns relevant to that subnet. They gossip these samples to peers.", highlight: "sample" }
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
       <div className="flex flex-col md:flex-row gap-8">
         {/* Left: Narrative Control */}
         <div className="md:w-1/3 space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-3">The Protocol</h2>
                <p className="text-md text-slate-600 dark:text-slate-300 leading-relaxed">
                    PeerDAS relies on a 2D grid structure. Data is not just a linear stream; it's a matrix that can be recovered from multiple directions.
                </p>
            </div>

            <div className="space-y-3 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-300 dark:bg-midnight-800"></div>
                {steps.map((s, idx) => (
                    <div 
                        key={idx}
                        onClick={() => setStep(idx)}
                        className={`relative pl-10 py-1.5 cursor-pointer transition-all ${step === idx ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                    >
                        <div className={`absolute left-[10px] top-2.5 w-4 h-4 rounded-full border-2 z-10 bg-white dark:bg-midnight-800 ${step === idx ? 'border-indigo-600 scale-110' : 'border-slate-300 dark:border-slate-600'}`}>
                            {step === idx && <div className="absolute inset-1 bg-indigo-600 rounded-full"></div>}
                        </div>
                        <h3 className={`text-sm font-semibold ${step === idx ? 'text-indigo-700 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>{s.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">{s.desc}</p>
                    </div>
                ))}
            </div>
         </div>

         {/* Right: Visualization */}
         <div className="md:w-2/3 bg-slate-900 dark:bg-midnight-800 rounded-2xl p-8 shadow-2xl border border-slate-800 dark:border-white/10 flex items-center justify-center min-h-[360px] relative overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <MechanismVisualizer step={step} />
         </div>
       </div>

       <div className="flex justify-end pt-6 border-t border-slate-300 dark:border-white/10">
        <button 
            onClick={onNext}
            className="group flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none"
        >
            Try the Reconstruction Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const MechanismVisualizer = ({ step }) => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const gridSize = 8;
  
  const cells = [];
  for(let r=0; r<gridSize; r++) {
      for(let c=0; c<gridSize; c++) {
          let isOriginal = r < 4 && c < 4;
          
          let opacity = 0.2; 
          let color = "bg-slate-600";
          let scale = 1;

          if (step === 0) { // Extension
             if (isOriginal) { opacity = 1; color = "bg-teal-500"; }
             else { opacity = 1; color = "bg-midnight-900"; } 
          } else if (step === 1) { // Commitment
              opacity = 1;
              if (isOriginal) color = "bg-teal-500";
              else color = "bg-midnight-900";
          } else if (step === 2) { // Sampling
              if (c === 2 || c === 6) { 
                  opacity = 1; 
                  color = "bg-danger-500"; 
                  scale = 1.1;
              } else {
                  opacity = 0.1;
              }
          }

          if (hoveredCell) {
              if (hoveredCell.r === r || hoveredCell.c === c) {
                  opacity = Math.max(opacity, 0.6);
                  if (opacity < 1) color = "bg-indigo-400";
              }
          }

          cells.push(
              <div 
                key={`${r}-${c}`}
                onMouseEnter={() => setHoveredCell({r, c})}
                onMouseLeave={() => setHoveredCell(null)}
                className={`rounded-sm w-full h-full transition-all duration-300 ${color} hover:scale-110 hover:z-10 cursor-crosshair`}
                style={{ 
                    opacity, 
                    transform: `scale(${scale})`,
                    boxShadow: hoveredCell && (hoveredCell.r === r || hoveredCell.c === c) ? '0 0 8px rgba(220, 38, 38, 0.3)' : 'none'
                }}
              >
                {step === 1 && (r === 0 || c === 0) && <div className="w-1 h-1 bg-white/50 rounded-full mx-auto mt-1"></div>}
              </div>
          );
      }
  }

  return (
      <div className="w-60 h-60 grid grid-cols-8 gap-1 relative">
         {cells}
         {step === 1 && (
             <div className="absolute -right-24 top-0 text-white text-sm font-mono opacity-0 animate-in fade-in slide-in-from-left-4 duration-500 fill-mode-forwards">
                 KZG Proofs Valid
             </div>
         )}
         {step === 2 && (
             <div className="absolute inset-0 pointer-events-none">
                 <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-danger-500 rounded-full animate-ping"></div>
                 <div className="absolute top-1/4 left-3/4 w-2 h-2 bg-danger-500 rounded-full animate-ping" style={{ animationDelay: '0.3s'}}></div>
             </div>
         )}
      </div>
  )
}

/* --- SECTION 3: RECONSTRUCTION (Result/Proof) --- */
const ReconstructionSection = ({ onNext }) => {
  const [message, setMessage] = useState("PeerDAS");
  const [chunks, setChunks] = useState([]);
  const [sampledIndices, setSampledIndices] = useState(new Set());
  const [isReconstructed, setIsReconstructed] = useState(false);
  const [reconstructionLog, setLog] = useState([]);

  const TOTAL_CHUNKS = 8;
  const DATA_CHUNKS = 4;

  useEffect(() => {
      setSampledIndices(new Set());
      setIsReconstructed(false);
      setLog([]);
      
      const newChunks = Array.from({ length: TOTAL_CHUNKS }, (_, i) => ({
          id: i,
          type: i < DATA_CHUNKS ? 'data' : 'parity',
          value: i < DATA_CHUNKS ? message.charCodeAt(i % message.length) : (message.charCodeAt(i % message.length) ^ 0xFF)
      }));
      setChunks(newChunks);
  }, [message]);

  const sampleChunk = () => {
      if (sampledIndices.size >= TOTAL_CHUNKS) return;

      let available = chunks.filter(c => !sampledIndices.has(c.id));
      if (available.length === 0) return;

      const pick = available[Math.floor(Math.random() * available.length)];
      
      setSampledIndices(prev => {
          const next = new Set(prev);
          next.add(pick.id);
          return next;
      });
      
      setLog(prev => [`Received chunk #${pick.id} (${pick.type})`, ...prev].slice(0, 5));
  };

  const reconstruct = () => {
      if (sampledIndices.size < DATA_CHUNKS) {
          setLog(prev => ["❌ Not enough data to reconstruct!", ...prev]);
          return;
      }
      
      setIsReconstructed(true);
      setLog(prev => ["✅ Reconstruction Successful! (Reed-Solomon property satisfied)", ...prev]);
  };

  const progress = (sampledIndices.size / DATA_CHUNKS) * 100;
  const canReconstruct = sampledIndices.size >= DATA_CHUNKS;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-200 mb-2">Data Reconstruction Live Demo</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm">
              Experience the "magic" of Reed-Solomon coding. You only need 50% of the distributed chunks (any combination of original or parity) to recover the full message.
          </p>
      </div>

      <div className="bg-white dark:bg-midnight-800 rounded-xl shadow-xl border border-slate-300 dark:border-white/10 overflow-hidden flex flex-col md:flex-row transition-colors">
          {/* Control Panel */}
          <div className="p-6 md:w-1/3 bg-slate-50 dark:bg-midnight-900/50 border-r border-slate-300 dark:border-white/10 flex flex-col gap-4">
              <div>
                  <label className="block text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Original Data (Message)</label>
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value.slice(0, 8))}
                    className="w-full px-3 py-2 border border-slate-300 dark:border-white/20 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-slate-800 dark:text-slate-300 text-sm dark:bg-midnight-900"
                    placeholder="Type something..."
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Max 4 chars for visualization</p>
              </div>

              <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                      <span className="dark:text-slate-300">Data Collected</span>
                      <span className={canReconstruct ? "text-teal-500" : "text-slate-500 dark:text-slate-400"}>
                          {sampledIndices.size} / {DATA_CHUNKS} chunks needed
                      </span>
                  </div>
                  <div className="h-1.5 bg-slate-300 dark:bg-midnight-900 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-500 ${canReconstruct ? 'bg-teal-500' : 'bg-indigo-500'}`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                  </div>
              </div>

              <div className="flex flex-col gap-2 mt-auto">
                  <button 
                    onClick={sampleChunk}
                    disabled={sampledIndices.size >= TOTAL_CHUNKS}
                    className="w-full py-2 bg-white dark:bg-midnight-800 border border-indigo-100 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
                  >
                    <Boxes size={16} /> Sample Random Chunk
                  </button>
                  
                  <button 
                    onClick={reconstruct}
                    disabled={!canReconstruct || isReconstructed}
                    className={`w-full py-2 font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 text-sm
                        ${canReconstruct && !isReconstructed
                            ? "bg-teal-500 text-white hover:bg-teal-600 hover:shadow-lg hover:-translate-y-0.5" 
                            : "bg-slate-300 dark:bg-midnight-900/50 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                        }`}
                  >
                    <ShieldCheck size={16} /> Reconstruct Data
                  </button>
                   <button 
                    onClick={() => { setSampledIndices(new Set()); setIsReconstructed(false); setLog([]); }}
                    className="w-full py-1 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    Reset
                  </button>
              </div>
          </div>

          {/* Visualization Panel */}
          <div className="p-6 md:w-2/3 bg-slate-900 dark:bg-midnight-900/80 relative min-h-[400px]">
              {/* Grid of Chunks */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                  {chunks.map((chunk) => {
                      const isSampled = sampledIndices.has(chunk.id);
                      return (
                          <div 
                            key={chunk.id}
                            className={`relative h-16 rounded-lg border flex items-center justify-center transition-all duration-500
                                ${isSampled 
                                    ? (chunk.type === 'data' ? 'bg-teal-500/20 border-teal-500' : 'bg-indigo-500/20 border-indigo-500') 
                                    : 'bg-slate-800/50 border-slate-700 opacity-40'
                                }
                            `}
                          >
                              <span className={`font-mono font-bold text-lg ${isSampled ? 'text-white' : 'text-slate-600'}`}>
                                  {isSampled ? '0x' + chunk.value.toString(16).toUpperCase() : '?'}
                              </span>
                              <div className="absolute top-1 right-2 text-[10px] uppercase font-bold text-slate-500">
                                  {chunk.type === 'data' ? 'D' : 'P'}
                              </div>
                          </div>
                      )
                  })}
              </div>

              {/* Result Area */}
              <div className={`mt-4 p-4 rounded-xl border-2 border-dashed transition-all duration-700 flex flex-col items-center justify-center min-h-[100px]
                  ${isReconstructed ? 'border-teal-500/50 bg-teal-900/20' : 'border-slate-700 bg-slate-800/30'}
              `}>
                  {isReconstructed ? (
                      <div className="text-center animate-in zoom-in duration-500">
                          <p className="text-teal-500 text-[10px] font-bold uppercase tracking-widest mb-1">Decoded Output</p>
                          <h3 className="text-4xl font-mono text-white tracking-widest">{message}</h3>
                      </div>
                  ) : (
                      <div className="text-center text-slate-500">
                          <Layers size={32} className="mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Waiting for sufficient samples...</p>
                      </div>
                  )}
              </div>
              
              {/* Log Overlay */}
              <div className="absolute bottom-4 right-4 left-4 pointer-events-none">
                  <div className="flex flex-col items-end space-y-1">
                      {reconstructionLog.map((log, i) => (
                          <div key={i} className="bg-black/80 backdrop-blur-md text-[10px] font-mono text-teal-500 px-2 py-1 rounded-md border border-teal-500/30 shadow-lg animate-in slide-in-from-right-10 fade-in duration-300">
                              {log}
                          </div>
                      ))}
                  </div>
              </div>

          </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <button 
            onClick={onNext}
            className="group flex items-center gap-2 bg-slate-900 dark:bg-indigo-600 text-white dark:text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all"
        >
            See The Impact <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

/* --- SECTION 4: RESULT (Impact & Future) --- */
const ResultSection = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-200">The Path to Full Danksharding</h2>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          PeerDAS is the critical unlocking technology that decouples <span className="font-bold text-indigo-600 dark:text-indigo-400">data capacity</span> from <span className="font-bold text-indigo-600 dark:text-indigo-400">node bandwidth</span>.
        </p>
      </div>

      {/* Metrics Comparison Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* 1. EIP-4844 (Now) */}
        <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl border border-slate-300 dark:border-white/10 shadow-sm relative overflow-hidden transition-colors">
           <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 dark:bg-slate-600"></div>
           <div className="flex justify-between items-start mb-4">
             <h3 className="font-bold text-slate-500 dark:text-slate-300 text-lg">EIP-4844 (Dencun)</h3>
             <Cpu className="text-slate-300 dark:text-slate-600" />
           </div>
           <div className="space-y-4">
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-400 dark:text-slate-500 font-semibold">Blob Capacity</p>
               <p className="text-3xl font-bold text-slate-700 dark:text-slate-300">3 - 6 <span className="text-sm font-normal">blobs/block</span></p>
             </div>
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-400 dark:text-slate-500 font-semibold">Node Requirement</p>
               <p className="text-xl font-medium text-pink-500 dark:text-danger-500 flex items-center gap-2">
                 <Download size={16} /> Full Download
               </p>
               <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Bandwidth linearly increases with capacity.</p>
             </div>
           </div>
        </div>

        {/* 2. PeerDAS (Next) */}
        <div className="bg-white dark:bg-midnight-800 p-6 rounded-xl border-2 border-indigo-500 shadow-xl transform scale-105 z-10 relative overflow-hidden transition-colors">
           <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
           <div className="flex justify-between items-start mb-4">
             <h3 className="font-bold text-indigo-700 dark:text-indigo-400 text-lg">PeerDAS (Fusaka)</h3>
             <Network className="text-indigo-500" />
           </div>
           <div className="space-y-4">
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-400 dark:text-slate-500 font-semibold">Blob Capacity</p>
               <p className="text-3xl font-bold text-indigo-900 dark:text-slate-200">64+ <span className="text-sm font-normal">blobs/block</span></p>
               <span className="inline-block bg-teal-500/10 text-teal-500 dark:text-teal-400 text-sm px-2 py-1 rounded-full mt-1 font-bold">+10x Scale</span>
             </div>
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-400 dark:text-slate-500 font-semibold">Node Requirement</p>
               <p className="text-xl font-medium text-teal-500 dark:text-teal-400 flex items-center gap-2">
                 <Share2 size={16} /> ~12.5% Sample
               </p>
               <p className="text-sm text-slate-500 dark:text-slate-300 mt-1">Bandwidth remains <strong>flat</strong> even as capacity grows.</p>
             </div>
           </div>
        </div>

        {/* 3. Danksharding (Future) */}
        <div className="bg-slate-900 dark:bg-black/50 p-6 rounded-xl border border-slate-800 dark:border-slate-700 shadow-lg relative overflow-hidden text-white">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-danger-500"></div>
           <div className="flex justify-between items-start mb-4">
             <h3 className="font-bold text-slate-300 text-lg">Full Danksharding</h3>
             <Database className="text-danger-500" />
           </div>
           <div className="space-y-4">
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">Blob Capacity</p>
               <p className="text-3xl font-bold text-white">256 <span className="text-sm font-normal">blobs/block</span></p>
             </div>
             <div>
               <p className="text-sm uppercase tracking-wide text-slate-500 font-semibold">Throughput Goal</p>
               <p className="text-xl font-medium text-danger-300 flex items-center gap-2">
                 <TrendingUp size={16} /> 1.3 MB/s+
               </p>
               <p className="text-sm text-slate-400 mt-1">Supporting millions of users on L2s.</p>
             </div>
           </div>
        </div>
      </div>

      {/* Visual Chart */}
      <div className="bg-white dark:bg-midnight-800 p-8 rounded-2xl border border-slate-300 dark:border-white/10 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-6">Network Throughput Visualization</h3>
        <div className="space-y-6">
          {/* Bar 1 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-600 dark:text-slate-300">EIP-4844 (Now)</span>
              <span className="text-slate-400 dark:text-slate-500">~0.375 MB per block</span>
            </div>
            <div className="h-8 w-full bg-slate-100 dark:bg-midnight-900 rounded-full overflow-hidden">
              <div className="h-full bg-slate-400 dark:bg-slate-600 w-[5%] relative group">
                <div className="absolute -right-2 top-0 bottom-0 w-1 bg-white dark:bg-slate-400"></div>
              </div>
            </div>
          </div>

          {/* Bar 2 */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-bold text-indigo-700 dark:text-indigo-400">PeerDAS Target</span>
              <span className="text-indigo-600 dark:text-indigo-300 font-bold">~8.0 MB per block</span>
            </div>
            <div className="h-8 w-full bg-slate-100 dark:bg-midnight-900 rounded-full overflow-hidden relative">
               {/* Animated Pulse */}
               <div className="absolute top-0 bottom-0 left-0 bg-indigo-500 opacity-20 animate-pulse w-[40%]"></div>
              <div className="h-full bg-indigo-600 dark:bg-indigo-500 w-[40%] relative shadow-lg">
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold text-white">21x Increase</div>
              </div>
            </div>
          </div>

           {/* Bar 3 */}
           <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-pink-600 dark:text-danger-400">Full Danksharding</span>
              <span className="text-pink-500 dark:text-danger-300">~32.0 MB per block</span>
            </div>
            <div className="h-8 w-full bg-slate-100 dark:bg-midnight-900 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-danger-600 w-full relative">
                 <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white">Future Goal</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20 rounded-lg flex gap-4 items-start transition-colors">
            <Info className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-indigo-900 dark:text-slate-200">Why does this matter?</h4>
                <p className="text-indigo-700 dark:text-indigo-200 text-sm leading-relaxed mt-1">
                    By breaking the link between <strong>network capacity</strong> and <strong>individual node load</strong>, PeerDAS solves the scalability trilemma. 
                    We can now increase the block size (to accommodate millions of L2 transactions) while keeping the requirements for running a home validator low. 
                    This preserves Ethereum's decentralization while achieving Visa-scale throughput.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PeerDasExplainer;
