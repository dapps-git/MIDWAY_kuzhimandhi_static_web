const fs = require('fs');
const path = require('path');

const branches = [
  { id: 'manjeri', name: 'Manjeri', landmark: 'Bypass Road, Manjeri' },
  { id: 'perinthalmanna', name: 'Perinthalmanna', landmark: 'Calicut Road Bypass' },
  { id: 'vaniyambalam', name: 'Vaniyambalam', landmark: 'Station Road, Wandoor' },
  { id: 'nilambur', name: 'Nilambur', landmark: 'Main Road, Nilambur' },
  { id: 'valluvalmbram', name: 'Valluvalmbram', landmark: 'NH Bypass Junction' }
];

branches.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
  <defs>
    <linearGradient id="bg-${b.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8ECE9" />
      <stop offset="100%" stop-color="#DCE3DD" />
    </linearGradient>
    <pattern id="grid-${b.id}" width="36" height="36" patternUnits="userSpaceOnUse">
      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#C9D3CC" stroke-width="0.8"/>
    </pattern>
    <filter id="shadow-${b.id}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.25"/>
    </filter>
  </defs>
  
  <rect width="600" height="340" fill="url(#bg-${b.id})"/>
  <rect width="600" height="340" fill="url(#grid-${b.id})" opacity="0.6"/>
  
  <!-- Parks & Water Bodies -->
  <path d="M20,20 Q100,10 130,70 T40,110 Z" fill="#D4EAD8" opacity="0.8"/>
  <path d="M460,200 Q550,190 580,270 T440,310 Z" fill="#D4EAD8" opacity="0.8"/>
  <path d="M-10,290 Q150,270 240,330 T320,350 L-10,350 Z" fill="#D2E4F2" opacity="0.7"/>

  <!-- Roads & Highways -->
  <path d="M-20,170 Q160,130 300,170 T620,160" fill="none" stroke="#FFFFFF" stroke-width="18"/>
  <path d="M-20,170 Q160,130 300,170 T620,160" fill="none" stroke="#FDE68A" stroke-width="12"/>
  
  <path d="M300,-20 L300,360" fill="none" stroke="#FFFFFF" stroke-width="14"/>
  <path d="M300,-20 L300,360" fill="none" stroke="#FBBF24" stroke-width="8"/>
  
  <path d="M70,350 Q180,240 300,170 T530,20" fill="none" stroke="#FFFFFF" stroke-width="10"/>
  <path d="M70,350 Q180,240 300,170 T530,20" fill="none" stroke="#E5E7EB" stroke-width="6"/>

  <!-- Pulse Rings -->
  <circle cx="300" cy="170" r="48" fill="none" stroke="#800C11" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.4"/>
  <circle cx="300" cy="170" r="24" fill="#800C11" fill-opacity="0.12"/>
  
  <!-- Google Maps Pin Marker -->
  <g transform="translate(300, 170)" filter="url(#shadow-${b.id})">
    <path d="M 0 0 C -18 -26, -24 -46, -24 -60 C -24 -73, -13 -84, 0 -84 C 13 -84, 24 -73, 24 -60 C 24 -46, 18 -26, 0 0 Z" fill="#EA4335" />
    <circle cx="0" cy="-60" r="11" fill="#FFFFFF" />
    <circle cx="0" cy="-60" r="6" fill="#800C11" />
    <ellipse cx="0" cy="0" rx="7" ry="3" fill="#000000" fill-opacity="0.3"/>
  </g>

  <!-- Location Badge (Top Left) -->
  <g transform="translate(18, 18)">
    <rect width="250" height="54" rx="10" fill="#FFFFFF" fill-opacity="0.96" filter="url(#shadow-${b.id})"/>
    <text x="14" y="24" font-family="Montserrat, system-ui, sans-serif" font-size="13" font-weight="700" fill="#800C11">${b.name.toUpperCase()}</text>
    <text x="14" y="42" font-family="Montserrat, system-ui, sans-serif" font-size="10" font-weight="500" fill="#4B5563">${b.landmark}</text>
  </g>

  <!-- Google Maps Open Indicator (Bottom Right) -->
  <g transform="translate(460, 290)">
    <rect width="122" height="32" rx="16" fill="#FFFFFF" fill-opacity="0.96" filter="url(#shadow-${b.id})"/>
    <text x="61" y="20" font-family="Montserrat, system-ui, sans-serif" font-size="10" font-weight="600" fill="#1F2937" text-anchor="middle">Google Maps ↗</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join('public', 'images', `map-${b.id}.svg`), svg, 'utf8');
});
console.log('Created 5 map graphics in public/images/ successfully!');

