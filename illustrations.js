// 2D Cartoon SVG Illustrations for NPRA Website
const SVG = {
  // Hero - Clipboard with shield & checkmark
  hero: `<svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Floating pills -->
    <ellipse cx="60" cy="80" rx="18" ry="10" fill="#e8a838" opacity="0.6" rx="18"/>
    <ellipse cx="340" cy="60" rx="14" ry="8" fill="#1a6bb5" opacity="0.5"/>
    <ellipse cx="320" cy="280" rx="16" ry="9" fill="#e8a838" opacity="0.4"/>
    <circle cx="80" cy="260" r="8" fill="#1a6bb5" opacity="0.4"/>
    <circle cx="350" cy="160" r="6" fill="#e8a838" opacity="0.5"/>
    <!-- Main clipboard -->
    <rect x="120" y="40" width="160" height="220" rx="16" fill="#f0f4f8" stroke="#0f4c81" stroke-width="3"/>
    <rect x="170" y="28" width="60" height="24" rx="12" fill="#0f4c81"/>
    <circle cx="200" cy="40" r="5" fill="#fff"/>
    <!-- Checkmark lines -->
    <rect x="148" y="90" width="104" height="8" rx="4" fill="#dbeafe"/>
    <rect x="148" y="115" width="80" height="8" rx="4" fill="#dbeafe"/>
    <rect x="148" y="140" width="104" height="8" rx="4" fill="#dbeafe"/>
    <rect x="148" y="165" width="70" height="8" rx="4" fill="#dbeafe"/>
    <rect x="148" y="190" width="90" height="8" rx="4" fill="#dbeafe"/>
    <!-- Shield with check -->
    <path d="M200 215 L200 215" fill="none"/>
    <g transform="translate(260, 180)">
      <path d="M0-45 C0-45 35-30 35-10 C35 25 0 55 0 55 C0 55 -35 25 -35-10 C-35-30 0-45 0-45Z" fill="#0f4c81"/>
      <path d="M0-35 C0-35 25-23 25-8 C25 18 0 42 0 42 C0 42 -25 18 -25-8 C-25-23 0-35 0-35Z" fill="#1a6bb5"/>
      <polyline points="-12,2 -4,12 14,-8" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
    <!-- Certificate ribbon -->
    <g transform="translate(105, 190)">
      <circle cx="22" cy="22" r="22" fill="#e8a838"/>
      <circle cx="22" cy="22" r="16" fill="#d4952e"/>
      <text x="22" y="27" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">A+</text>
    </g>
  </svg>`,

  // Building / Regulatory
  building: `<svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Ground -->
    <ellipse cx="200" cy="330" rx="170" ry="18" fill="#e8edf3" opacity="0.6"/>
    <!-- Main building -->
    <rect x="100" y="100" width="200" height="230" rx="4" fill="#f0f4f8" stroke="#0f4c81" stroke-width="2.5"/>
    <!-- Roof / pediment -->
    <polygon points="80,100 200,35 320,100" fill="#0f4c81"/>
    <polygon points="100,100 200,50 300,100" fill="#1a6bb5"/>
    <!-- Pillars -->
    <rect x="130" y="100" width="16" height="180" rx="3" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <rect x="192" y="100" width="16" height="180" rx="3" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <rect x="254" y="100" width="16" height="180" rx="3" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <!-- Door -->
    <rect x="172" y="260" width="56" height="70" rx="28" fill="#0f4c81"/>
    <rect x="180" y="268" width="40" height="62" rx="20" fill="#1a6bb5"/>
    <circle cx="210" cy="295" r="3" fill="#e8a838"/>
    <!-- Windows -->
    <rect x="118" y="140" width="30" height="35" rx="4" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <line x1="133" y1="140" x2="133" y2="175" stroke="#0f4c81" stroke-width="1"/>
    <line x1="118" y1="157" x2="148" y2="157" stroke="#0f4c81" stroke-width="1"/>
    <rect x="252" y="140" width="30" height="35" rx="4" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <line x1="267" y1="140" x2="267" y2="175" stroke="#0f4c81" stroke-width="1"/>
    <line x1="252" y1="157" x2="282" y2="157" stroke="#0f4c81" stroke-width="1"/>
    <rect x="118" y="200" width="30" height="35" rx="4" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <rect x="252" y="200" width="30" height="35" rx="4" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
    <!-- Flag -->
    <line x1="200" y1="10" x2="200" y2="50" stroke="#0f4c81" stroke-width="2"/>
    <rect x="200" y="10" width="30" height="20" rx="2" fill="#e8a838"/>
    <!-- NPRA text -->
    <rect x="155" y="105" width="90" height="22" rx="4" fill="#0f4c81"/>
    <text x="200" y="121" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold" font-family="Inter, sans-serif">NPRA</text>
  </svg>`,

  // Pharmaceutical pills
  pharma: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="30" width="160" height="120" rx="12" fill="#f0f4f8" stroke="#0f4c81" stroke-width="2"/>
    <!-- Pill capsule 1 -->
    <g transform="translate(100, 65) rotate(-20)">
      <rect x="0" y="0" width="50" height="22" rx="11" fill="#0f4c81"/>
      <rect x="25" y="0" width="25" height="22" rx="0 11 11 0" fill="#1a6bb5"/>
    </g>
    <!-- Pill capsule 2 -->
    <g transform="translate(155, 85) rotate(15)">
      <rect x="0" y="0" width="45" height="20" rx="10" fill="#e8a838"/>
      <rect x="22" y="0" width="23" height="20" rx="0 10 10 0" fill="#d4952e"/>
    </g>
    <!-- Round pill -->
    <circle cx="120" cy="110" r="14" fill="#1a6bb5" opacity="0.8"/>
    <circle cx="120" cy="110" r="10" fill="#1a6bb5"/>
    <line x1="112" y1="110" x2="128" y2="110" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
    <!-- Tablet -->
    <ellipse cx="175" cy="60" rx="16" ry="10" fill="#e8a838" opacity="0.7"/>
    <!-- Plus sign -->
    <g transform="translate(90, 35)">
      <circle cx="0" cy="0" r="12" fill="#0f4c81"/>
      <line x1="-6" y1="0" x2="6" y2="0" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="0" y1="-6" x2="0" y2="6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    </g>
  </svg>`,

  // Traditional herbs
  herbs: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Mortar -->
    <ellipse cx="140" cy="155" rx="55" ry="15" fill="#d4952e"/>
    <path d="M85 115 Q85 155 90 155 L190 155 Q195 155 195 115 Z" fill="#e8a838"/>
    <ellipse cx="140" cy="115" rx="55" ry="16" fill="#edc06e"/>
    <ellipse cx="140" cy="115" rx="42" ry="12" fill="#d4952e" opacity="0.3"/>
    <!-- Pestle -->
    <g transform="translate(175,60) rotate(30)">
      <rect x="-6" y="0" width="12" height="65" rx="6" fill="#94a3b8"/>
      <ellipse cx="0" cy="65" rx="10" ry="6" fill="#64748b"/>
    </g>
    <!-- Leaves -->
    <g transform="translate(100,80)">
      <path d="M0,0 C-15,-25 5,-40 20,-20 C25,-15 10,-5 0,0Z" fill="#22c55e" opacity="0.8"/>
      <line x1="0" y1="0" x2="12" y2="-22" stroke="#16a34a" stroke-width="1.5"/>
    </g>
    <g transform="translate(155,75)">
      <path d="M0,0 C15,-20 30,-15 20,0 C15,5 5,5 0,0Z" fill="#4ade80" opacity="0.7"/>
    </g>
    <g transform="translate(125,70)">
      <path d="M0,0 C-5,-30 15,-35 15,-10 C15,-5 5,2 0,0Z" fill="#22c55e" opacity="0.6"/>
    </g>
  </svg>`,

  // Health supplements / vitamins
  supplements: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Bottle -->
    <rect x="100" y="60" width="80" height="110" rx="8" fill="#f0f4f8" stroke="#0f4c81" stroke-width="2"/>
    <rect x="115" y="45" width="50" height="20" rx="4" fill="#0f4c81"/>
    <rect x="112" y="38" width="56" height="12" rx="3" fill="#1a6bb5"/>
    <!-- Label -->
    <rect x="112" y="90" width="56" height="40" rx="4" fill="#dbeafe"/>
    <text x="140" y="108" text-anchor="middle" fill="#0f4c81" font-size="9" font-weight="bold" font-family="Inter, sans-serif">VITAMIN</text>
    <text x="140" y="122" text-anchor="middle" fill="#1a6bb5" font-size="14" font-weight="bold" font-family="Inter, sans-serif">A+</text>
    <!-- Floating capsules -->
    <g transform="translate(60, 50) rotate(-15)">
      <rect x="0" y="0" width="30" height="14" rx="7" fill="#e8a838"/>
      <rect x="15" y="0" width="15" height="14" rx="0 7 7 0" fill="#d4952e"/>
    </g>
    <g transform="translate(200, 80) rotate(20)">
      <rect x="0" y="0" width="30" height="14" rx="7" fill="#22c55e"/>
      <rect x="15" y="0" width="15" height="14" rx="0 7 7 0" fill="#16a34a"/>
    </g>
    <circle cx="220" cy="140" r="10" fill="#e8a838" opacity="0.5"/>
    <circle cx="65" cy="130" r="8" fill="#1a6bb5" opacity="0.4"/>
  </svg>`,

  // Skincare - simple: serum bottle, cream jar, leaf
  skincare: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Serum dropper bottle -->
    <g transform="translate(55,20)">
      <rect x="12" y="50" width="36" height="90" rx="8" fill="#dbeafe" stroke="#0f4c81" stroke-width="2"/>
      <rect x="18" y="35" width="24" height="18" rx="4" fill="#0f4c81"/>
      <circle cx="30" cy="28" r="8" fill="#94a3b8"/>
      <circle cx="30" cy="28" r="5" fill="#cbd5e1"/>
      <rect x="20" y="72" width="20" height="40" rx="4" fill="#93c5fd" opacity="0.4"/>
      <path d="M30,145 C30,145 24,154 24,158 C24,162 27,164 30,164 C33,164 36,162 36,158 C36,154 30,145 30,145Z" fill="#60a5fa" opacity="0.6"/>
    </g>
    <!-- Cream jar -->
    <g transform="translate(135,65)">
      <rect x="0" y="18" width="65" height="48" rx="10" fill="#f0f4f8" stroke="#e8a838" stroke-width="2"/>
      <rect x="-4" y="8" width="73" height="16" rx="6" fill="#e8a838"/>
      <rect x="14" y="36" width="37" height="8" rx="3" fill="#fef3c7"/>
    </g>
    <!-- Leaf decoration -->
    <g transform="translate(215,25)">
      <path d="M0,40 C-20,10 10,-10 25,15 C30,24 15,38 0,40Z" fill="#22c55e" opacity="0.6"/>
      <line x1="0" y1="40" x2="18" y2="12" stroke="#16a34a" stroke-width="1.5" opacity="0.5"/>
      <path d="M20,50 C30,25 50,30 35,50 C28,55 18,52 20,50Z" fill="#4ade80" opacity="0.4"/>
    </g>
    <!-- Sparkles -->
    <circle cx="120" cy="30" r="3" fill="#e8a838" opacity="0.4"/>
    <circle cx="240" cy="100" r="2.5" fill="#60a5fa" opacity="0.3"/>
    <circle cx="50" cy="170" r="2" fill="#22c55e" opacity="0.3"/>
  </svg>`,

  // Haircare - simple: shampoo bottle, comb, bubbles
  haircare: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Shampoo pump bottle -->
    <g transform="translate(60,15)">
      <rect x="8" y="50" width="48" height="100" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <rect x="16" y="32" width="32" height="22" rx="4" fill="#16a34a"/>
      <rect x="22" y="18" width="20" height="18" rx="4" fill="#22c55e"/>
      <rect x="28" y="8" width="8" height="14" rx="3" fill="#64748b"/>
      <rect x="22" y="4" width="20" height="8" rx="3" fill="#94a3b8"/>
      <rect x="16" y="75" width="32" height="18" rx="4" fill="#fff" opacity="0.5"/>
      <rect x="20" y="80" width="24" height="4" rx="2" fill="#16a34a" opacity="0.3"/>
    </g>
    <!-- Comb -->
    <g transform="translate(150,50) rotate(10)">
      <rect x="0" y="0" width="55" height="18" rx="4" fill="#e8a838"/>
      <rect x="6" y="18" width="4" height="28" rx="1.5" fill="#d4952e"/>
      <rect x="14" y="18" width="4" height="32" rx="1.5" fill="#d4952e"/>
      <rect x="22" y="18" width="4" height="30" rx="1.5" fill="#d4952e"/>
      <rect x="30" y="18" width="4" height="34" rx="1.5" fill="#d4952e"/>
      <rect x="38" y="18" width="4" height="28" rx="1.5" fill="#d4952e"/>
      <rect x="46" y="18" width="4" height="24" rx="1.5" fill="#d4952e"/>
    </g>
    <!-- Bubbles -->
    <circle cx="185" cy="130" r="10" fill="#dcfce7" stroke="#86efac" stroke-width="1.5"/>
    <circle cx="210" cy="145" r="7" fill="#dcfce7" stroke="#86efac" stroke-width="1.5"/>
    <circle cx="200" cy="118" r="5" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
    <circle cx="225" cy="135" r="4" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
    <!-- Sparkles -->
    <circle cx="240" cy="50" r="3" fill="#e8a838" opacity="0.4"/>
    <circle cx="45" cy="170" r="2.5" fill="#16a34a" opacity="0.3"/>
  </svg>`,

  // Cosmetics - simple: lipstick, palette, brush
  colour: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Lipstick -->
    <g transform="translate(45,30)">
      <rect x="5" y="55" width="30" height="75" rx="4" fill="#be123c"/>
      <rect x="5" y="55" width="30" height="20" rx="4" fill="#e11d48"/>
      <path d="M5,55 L20,35 L35,55 Z" fill="#fb7185"/>
      <rect x="3" y="120" width="34" height="10" rx="3" fill="#881337"/>
    </g>
    <!-- Eye shadow palette -->
    <g transform="translate(105,35)">
      <rect x="0" y="0" width="85" height="65" rx="8" fill="#f0f4f8" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="22" cy="22" r="12" fill="#c084fc"/>
      <circle cx="50" cy="22" r="12" fill="#f472b6"/>
      <circle cx="68" cy="22" r="10" fill="#fb923c"/>
      <circle cx="22" cy="47" r="12" fill="#e8a838"/>
      <circle cx="50" cy="47" r="12" fill="#60a5fa"/>
      <circle cx="68" cy="47" r="10" fill="#a78bfa"/>
    </g>
    <!-- Makeup brush -->
    <g transform="translate(200,55) rotate(15)">
      <rect x="0" y="35" width="10" height="80" rx="3" fill="#e8a838"/>
      <rect x="-1" y="30" width="12" height="10" rx="3" fill="#d4952e"/>
      <path d="M-1,30 C-1,8 11,8 11,30 Z" fill="#374151"/>
      <path d="M0,26 C0,12 10,12 10,26 Z" fill="#4b5563"/>
    </g>
    <!-- Sparkles -->
    <circle cx="60" cy="25" r="3" fill="#f472b6" opacity="0.4"/>
    <circle cx="240" cy="140" r="2.5" fill="#c084fc" opacity="0.3"/>
    <circle cx="100" cy="160" r="2" fill="#e8a838" opacity="0.3"/>
  </svg>`,

  // Personal Care - simple: perfume bottle, lotion pump, fragrance lines
  personal: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Perfume bottle -->
    <g transform="translate(50,15)">
      <rect x="10" y="55" width="48" height="80" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
      <rect x="18" y="40" width="32" height="18" rx="4" fill="#7c3aed"/>
      <rect x="24" y="24" width="20" height="18" rx="4" fill="#8b5cf6"/>
      <rect x="28" y="14" width="12" height="14" rx="3" fill="#a78bfa"/>
      <ellipse cx="34" cy="13" rx="10" ry="4.5" fill="#c4b5fd"/>
      <rect x="18" y="80" width="32" height="14" rx="3" fill="#fff" opacity="0.4"/>
      <!-- Fragrance lines -->
      <path d="M65,35 C72,30 76,35 72,40" stroke="#c4b5fd" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M70,26 C78,20 82,26 77,32" stroke="#c4b5fd" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M62,44 C68,40 72,45 67,49" stroke="#c4b5fd" stroke-width="1.5" fill="none" opacity="0.3"/>
    </g>
    <!-- Body lotion pump -->
    <g transform="translate(155,20)">
      <rect x="8" y="48" width="44" height="90" rx="8" fill="#fef3c7" stroke="#e8a838" stroke-width="2"/>
      <rect x="15" y="32" width="30" height="20" rx="4" fill="#e8a838"/>
      <rect x="21" y="18" width="18" height="18" rx="4" fill="#d4952e"/>
      <rect x="25" y="8" width="10" height="14" rx="3" fill="#b45309"/>
      <rect x="32" y="12" width="16" height="5" rx="2" fill="#92400e"/>
      <rect x="15" y="72" width="30" height="15" rx="3" fill="#fff" opacity="0.5"/>
      <rect x="19" y="77" width="22" height="4" rx="2" fill="#e8a838" opacity="0.4"/>
    </g>
    <!-- Sparkles -->
    <circle cx="130" cy="30" r="3" fill="#7c3aed" opacity="0.4"/>
    <circle cx="240" cy="80" r="2.5" fill="#e8a838" opacity="0.3"/>
    <circle cx="45" cy="160" r="2" fill="#c4b5fd" opacity="0.3"/>
  </svg>`,

  // Cosmetics (general fallback)
  cosmetics: `<svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Mirror -->
    <ellipse cx="90" cy="75" rx="45" ry="50" fill="#f0f4f8" stroke="#e8a838" stroke-width="2.5"/>
    <ellipse cx="90" cy="75" rx="36" ry="40" fill="#dbeafe"/>
    <rect x="85" y="122" width="10" height="35" rx="3" fill="#e8a838"/>
    <ellipse cx="90" cy="160" rx="20" ry="6" fill="#d4952e"/>
    <!-- Lipstick -->
    <g transform="translate(170,40)">
      <rect x="0" y="30" width="28" height="70" rx="4" fill="#ef4444" opacity="0.8"/>
      <rect x="0" y="30" width="28" height="20" rx="4" fill="#dc2626"/>
      <path d="M0,30 L14,10 L28,30 Z" fill="#ef4444"/>
      <rect x="2" y="52" width="24" height="8" rx="2" fill="#fca5a5" opacity="0.4"/>
    </g>
    <!-- Cream jar -->
    <g transform="translate(210,100)">
      <rect x="0" y="10" width="50" height="35" rx="6" fill="#f0f4f8" stroke="#0f4c81" stroke-width="1.5"/>
      <rect x="-3" y="5" width="56" height="12" rx="4" fill="#0f4c81"/>
      <rect x="10" y="22" width="30" height="6" rx="2" fill="#dbeafe"/>
    </g>
    <!-- Sparkles -->
    <g fill="#e8a838">
      <circle cx="140" cy="30" r="3"/>
      <circle cx="155" cy="95" r="2.5"/>
      <circle cx="240" cy="60" r="2"/>
      <path d="M130,60 l3,-8 3,8 -8,-3 8,-3Z" fill="#e8a838" opacity="0.6"/>
    </g>
  </svg>`,

  // License / Documents
  license: `<svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Shadow doc -->
    <rect x="130" y="60" width="180" height="230" rx="10" fill="#dbeafe" opacity="0.5"/>
    <!-- Main document -->
    <rect x="110" y="45" width="180" height="230" rx="10" fill="#fff" stroke="#0f4c81" stroke-width="2.5"/>
    <!-- Header bar -->
    <rect x="110" y="45" width="180" height="50" rx="10" fill="#0f4c81"/>
    <rect x="110" y="80" width="180" height="15" fill="#0f4c81"/>
    <text x="200" y="76" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold" font-family="Inter, sans-serif">LICENCE</text>
    <!-- Content lines -->
    <rect x="135" y="110" width="130" height="7" rx="3.5" fill="#e2e8f0"/>
    <rect x="135" y="130" width="100" height="7" rx="3.5" fill="#e2e8f0"/>
    <rect x="135" y="150" width="115" height="7" rx="3.5" fill="#e2e8f0"/>
    <rect x="135" y="170" width="90" height="7" rx="3.5" fill="#e2e8f0"/>
    <!-- Stamp -->
    <g transform="translate(230, 210)">
      <circle cx="0" cy="0" r="28" fill="none" stroke="#e8a838" stroke-width="3" stroke-dasharray="6 3"/>
      <circle cx="0" cy="0" r="20" fill="#e8a838" opacity="0.15"/>
      <text x="0" y="5" text-anchor="middle" fill="#e8a838" font-size="11" font-weight="bold" font-family="Inter, sans-serif">NPRA</text>
    </g>
    <!-- Signature line -->
    <line x1="135" y1="245" x2="210" y2="245" stroke="#0f4c81" stroke-width="1.5"/>
    <path d="M140,242 C150,235 160,248 170,238 C175,235 180,240 185,237" stroke="#0f4c81" stroke-width="1.5" fill="none"/>
    <!-- Pen -->
    <g transform="translate(280, 220) rotate(-45)">
      <rect x="0" y="0" width="10" height="70" rx="2" fill="#e8a838"/>
      <polygon points="0,70 5,85 10,70" fill="#1e293b"/>
      <rect x="0" y="0" width="10" height="10" rx="2" fill="#d4952e"/>
    </g>
    <!-- Checkmark badge -->
    <g transform="translate(105, 65)">
      <circle cx="0" cy="0" r="18" fill="#22c55e"/>
      <polyline points="-7,0 -2,6 8,-5" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </g>
  </svg>`,

  // Microscope / Lab
  microscope: `<svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Base -->
    <ellipse cx="200" cy="320" rx="100" ry="14" fill="#e2e8f0"/>
    <rect x="140" y="300" width="120" height="25" rx="6" fill="#0f4c81"/>
    <!-- Stand -->
    <rect x="190" y="120" width="20" height="185" rx="4" fill="#1a6bb5"/>
    <!-- Arm -->
    <path d="M200,120 L200,100 Q200,80 180,80 L120,80" stroke="#0f4c81" stroke-width="16" stroke-linecap="round" fill="none"/>
    <!-- Eyepiece -->
    <rect x="185" y="85" width="30" height="40" rx="6" fill="#64748b"/>
    <rect x="188" y="80" width="24" height="12" rx="4" fill="#94a3b8"/>
    <ellipse cx="200" cy="80" rx="14" ry="4" fill="#cbd5e1"/>
    <!-- Objective lens -->
    <rect x="108" y="76" width="20" height="35" rx="4" fill="#64748b"/>
    <rect x="110" y="108" width="16" height="10" rx="3" fill="#94a3b8"/>
    <!-- Stage / slide -->
    <rect x="90" y="122" width="60" height="8" rx="2" fill="#0f4c81"/>
    <rect x="100" y="126" width="40" height="16" rx="2" fill="#dbeafe" stroke="#0f4c81" stroke-width="1"/>
    <circle cx="120" cy="134" r="4" fill="#e8a838" opacity="0.6"/>
    <!-- Focus knob -->
    <circle cx="225" cy="200" r="14" fill="#64748b"/>
    <circle cx="225" cy="200" r="10" fill="#94a3b8"/>
    <!-- Floating elements -->
    <g transform="translate(280,100)">
      <circle cx="0" cy="0" r="22" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="8" fill="#1a6bb5" opacity="0.3"/>
      <circle cx="-5" cy="5" r="3" fill="#0f4c81" opacity="0.4"/>
      <circle cx="7" cy="-3" r="2" fill="#0f4c81" opacity="0.3"/>
    </g>
    <g transform="translate(310,180)">
      <circle cx="0" cy="0" r="16" fill="#dbeafe" stroke="#0f4c81" stroke-width="1.5"/>
      <circle cx="3" cy="-2" r="5" fill="#e8a838" opacity="0.3"/>
    </g>
    <!-- DNA helix hint -->
    <g transform="translate(65,140)" opacity="0.5">
      <path d="M0,0 C10,15 -10,30 0,45 C10,60 -10,75 0,90" stroke="#0f4c81" stroke-width="2" fill="none"/>
      <path d="M15,0 C5,15 25,30 15,45 C5,60 25,75 15,90" stroke="#1a6bb5" stroke-width="2" fill="none"/>
      <line x1="3" y1="10" x2="12" y2="10" stroke="#0f4c81" stroke-width="1.5"/>
      <line x1="-1" y1="30" x2="16" y2="30" stroke="#0f4c81" stroke-width="1.5"/>
      <line x1="3" y1="50" x2="12" y2="50" stroke="#0f4c81" stroke-width="1.5"/>
      <line x1="-1" y1="70" x2="16" y2="70" stroke="#0f4c81" stroke-width="1.5"/>
    </g>
  </svg>`
};

// Inject SVGs into the page
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-illustration]').forEach(el => {
    const key = el.getAttribute('data-illustration');
    if (SVG[key]) {
      el.innerHTML = SVG[key];
    }
  });
});
