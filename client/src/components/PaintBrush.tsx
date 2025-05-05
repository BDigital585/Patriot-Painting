const PaintBrush = () => {
  return (
    <div className="relative w-full">
      {/* Red paint stroke */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#dd1c1c] rounded-tr-3xl rounded-tl-sm rounded-br-sm rounded-bl-sm"></div>
      
      {/* Hand with brush - positioned similar to reference image */}
      <div className="relative pt-4 pl-4">
        <svg width="300" height="250" viewBox="0 0 300 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-6">
          {/* Hand holding brush */}
          <path d="M95 180 Q100 160 120 150 Q145 140 150 155 L165 185 Q170 200 155 205 Q135 210 120 200 Q105 190 95 180 Z" fill="#f0d0b0" stroke="#d0a080" strokeWidth="1" />
          
          {/* Thumb */}
          <path d="M130 150 Q140 145 145 150 Q150 160 145 170 Q140 175 135 170 Q130 160 130 150 Z" fill="#f0d0b0" stroke="#d0a080" strokeWidth="1" />
          
          {/* Brush handle */}
          <path d="M150 155 L200 100 Q205 95 210 100 L220 110 Q225 115 220 120 L170 165 Z" fill="#dd1c1c" stroke="#c41c1c" strokeWidth="1" />
          
          {/* Brush metal ferrule */}
          <rect x="192" y="107" width="40" height="12" transform="rotate(-45 192 107)" fill="#e0e0e0" stroke="#9e9e9e" strokeWidth="1" />
          
          {/* Brush bristles */}
          <path d="M210 100 Q220 90 230 100 L240 110 Q260 90 270 100 Q280 110 260 130 Q250 140 240 130 Q230 120 220 120 Z" fill="#f8f8f8" stroke="#e0e0e0" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
};

export default PaintBrush;