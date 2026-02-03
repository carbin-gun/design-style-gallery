// Gallery functionality
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Generate style preview based on style type
    function generatePreview(style) {
        const previewGenerators = {
            1: minimalistPreview,
            2: neumorphismPreview,
            3: glassmorphismPreview,
            4: brutalismPreview,
            5: hyperrealism3DPreview,
            6: vibrantBlockPreview,
            7: darkModePreview,
            8: accessiblePreview,
            9: claymorphismPreview,
            10: auroraPreview,
            11: retroFuturismPreview,
            12: flatDesignPreview,
            13: skeuomorphismPreview,
            14: liquidGlassPreview,
            15: motionDrivenPreview,
            16: microInteractionsPreview,
            17: inclusiveDesignPreview,
            18: zeroInterfacePreview,
            19: softUIPreview,
            20: heroCentricPreview,
            21: conversionOptimizedPreview,
            22: featureRichPreview,
            23: minimalDirectPreview,
            24: socialProofPreview,
            25: interactiveDemoPreview,
            26: trustAuthorityPreview,
            27: storytellingPreview,
            28: dataDensePreview,
            29: heatMapPreview,
            30: executiveDashboardPreview,
            31: realTimePreview,
            32: drillDownPreview,
            33: comparativePreview,
            34: predictivePreview,
            35: userBehaviorPreview,
            36: financialPreview,
            37: salesIntelligencePreview,
            38: neubrutalismPreview,
            39: bentoBoxPreview,
            40: y2kPreview,
            41: cyberpunkPreview,
            42: biophilicPreview,
            43: aiNativePreview,
            44: memphisPreview,
            45: vaporwavePreview,
            46: dimensionalPreview,
            47: exaggeratedMinimalPreview,
            48: kineticTypoPreview,
            49: parallaxPreview,
            50: swissModernismPreview,
            51: hudSciFiPreview,
            52: pixelArtPreview,
            53: bentoGridsPreview,
            54: neoBrutalismPreview,
            55: spatialUIPreview,
            56: eInkPreview,
            57: genZChaosPreview,
            58: biomimeticPreview,
            59: synthwavePreview
        };

        return previewGenerators[style.id] ? previewGenerators[style.id](style) : defaultPreview(style);
    }

    // Default preview
    function defaultPreview(style) {
        const colors = style.primaryColors.slice(0, 3);
        return `
            <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,${colors[0] || '#333'},${colors[1] || '#666'});">
                <div style="font-size:3rem;opacity:0.5;">${style.id}</div>
            </div>
        `;
    }

    // 1. Minimalism & Swiss Style
    function minimalistPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:20px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div style="grid-column:span 2;height:40px;background:#000;"></div>
                <div style="background:#F5F5F5;display:flex;align-items:center;justify-content:center;">
                    <div style="width:30px;height:30px;border:2px solid #000;"></div>
                </div>
                <div style="background:#F5F5F5;display:flex;flex-direction:column;gap:6px;padding:12px;">
                    <div style="height:4px;background:#000;width:80%;"></div>
                    <div style="height:4px;background:#ccc;width:60%;"></div>
                    <div style="height:4px;background:#ccc;width:70%;"></div>
                </div>
                <div style="grid-column:span 2;display:flex;gap:8px;">
                    <div style="flex:1;height:50px;background:#000;"></div>
                    <div style="flex:1;height:50px;border:1px solid #000;"></div>
                </div>
            </div>
        `;
    }

    // 2. Neumorphism
    function neumorphismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#E0E5EC;padding:20px;display:flex;flex-direction:column;gap:15px;align-items:center;justify-content:center;">
                <div style="width:80px;height:80px;border-radius:20px;background:#E0E5EC;box-shadow:8px 8px 16px #b8bec7,-8px -8px 16px #ffffff;"></div>
                <div style="width:120px;height:35px;border-radius:25px;background:#E0E5EC;box-shadow:inset 4px 4px 8px #b8bec7,inset -4px -4px 8px #ffffff;"></div>
                <div style="display:flex;gap:12px;">
                    <div style="width:40px;height:40px;border-radius:10px;background:#E0E5EC;box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #ffffff;"></div>
                    <div style="width:40px;height:40px;border-radius:10px;background:#E0E5EC;box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #ffffff;"></div>
                    <div style="width:40px;height:40px;border-radius:10px;background:#E0E5EC;box-shadow:4px 4px 8px #b8bec7,-4px -4px 8px #ffffff;"></div>
                </div>
            </div>
        `;
    }

    // 3. Glassmorphism
    function glassmorphismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f093fb 100%);padding:20px;display:flex;align-items:center;justify-content:center;position:relative;">
                <div style="position:absolute;top:20px;left:30px;width:60px;height:60px;background:#ff6b6b;border-radius:50%;filter:blur(20px);opacity:0.7;"></div>
                <div style="position:absolute;bottom:30px;right:20px;width:80px;height:80px;background:#4ecdc4;border-radius:50%;filter:blur(25px);opacity:0.6;"></div>
                <div style="width:85%;height:75%;background:rgba(255,255,255,0.15);backdrop-filter:blur(10px);border-radius:16px;border:1px solid rgba(255,255,255,0.2);padding:15px;display:flex;flex-direction:column;gap:10px;">
                    <div style="display:flex;gap:6px;">
                        <div style="width:10px;height:10px;border-radius:50%;background:#ff5f56;"></div>
                        <div style="width:10px;height:10px;border-radius:50%;background:#ffbd2e;"></div>
                        <div style="width:10px;height:10px;border-radius:50%;background:#27ca40;"></div>
                    </div>
                    <div style="flex:1;display:flex;flex-direction:column;gap:8px;justify-content:center;">
                        <div style="height:8px;background:rgba(255,255,255,0.4);border-radius:4px;width:70%;"></div>
                        <div style="height:8px;background:rgba(255,255,255,0.25);border-radius:4px;width:50%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 4. Brutalism
    function brutalismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:15px;font-family:monospace;">
                <div style="border:3px solid #000;padding:10px;margin-bottom:10px;">
                    <div style="font-size:18px;font-weight:bold;color:#000;">BRUTALIST</div>
                </div>
                <div style="display:flex;gap:10px;">
                    <div style="flex:1;background:#FF0000;height:60px;border:3px solid #000;"></div>
                    <div style="flex:1;background:#0000FF;height:60px;border:3px solid #000;"></div>
                </div>
                <div style="margin-top:10px;background:#FFFF00;padding:8px;border:3px solid #000;">
                    <div style="height:4px;background:#000;width:60%;"></div>
                </div>
            </div>
        `;
    }

    // 5. 3D & Hyperrealism
    function hyperrealism3DPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#0a1628 0%,#1a2a4a 100%);display:flex;align-items:center;justify-content:center;perspective:500px;">
                <div style="width:100px;height:100px;background:linear-gradient(145deg,#FFD700,#B8860B);border-radius:20px;transform:rotateX(15deg) rotateY(-15deg);box-shadow:0 30px 60px rgba(0,0,0,0.5),0 0 40px rgba(255,215,0,0.3);position:relative;">
                    <div style="position:absolute;top:10px;left:10px;right:10px;bottom:10px;background:linear-gradient(145deg,rgba(255,255,255,0.3),transparent);border-radius:15px;"></div>
                </div>
            </div>
        `;
    }

    // 6. Vibrant & Block-based
    function vibrantBlockPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#0D0D0D;padding:12px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:8px;">
                <div style="background:#39FF14;border-radius:8px;"></div>
                <div style="background:#BF00FF;border-radius:8px;"></div>
                <div style="background:#FF1493;border-radius:8px;"></div>
                <div style="background:#00FFFF;border-radius:8px;display:flex;align-items:center;justify-content:center;">
                    <div style="width:30px;height:30px;background:#FFAA00;border-radius:50%;"></div>
                </div>
            </div>
        `;
    }

    // 7. Dark Mode (OLED)
    function darkModePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#000000;padding:20px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;gap:8px;align-items:center;">
                    <div style="width:35px;height:35px;background:#121212;border-radius:8px;border:1px solid #222;"></div>
                    <div style="flex:1;height:8px;background:#121212;border-radius:4px;"></div>
                </div>
                <div style="flex:1;background:#0A0E27;border-radius:12px;padding:15px;display:flex;flex-direction:column;justify-content:center;gap:8px;">
                    <div style="height:6px;background:#39FF14;border-radius:3px;width:70%;box-shadow:0 0 10px #39FF14;"></div>
                    <div style="height:6px;background:#0080FF;border-radius:3px;width:50%;box-shadow:0 0 10px #0080FF;"></div>
                </div>
                <div style="display:flex;gap:10px;justify-content:center;">
                    <div style="width:40px;height:40px;background:#FFD700;border-radius:50%;box-shadow:0 0 15px #FFD700;"></div>
                </div>
            </div>
        `;
    }

    // 8. Accessible & Ethical
    function accessiblePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:20px;display:flex;flex-direction:column;gap:15px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <div style="width:24px;height:24px;background:#0066CC;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:12px;">A</div>
                    <div style="height:12px;background:#000;width:60%;border-radius:2px;"></div>
                </div>
                <div style="flex:1;border:3px solid #000;border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:8px;">
                    <div style="height:8px;background:#333;border-radius:2px;width:80%;"></div>
                    <div style="height:8px;background:#666;border-radius:2px;width:60%;"></div>
                </div>
                <div style="display:flex;gap:10px;">
                    <div style="flex:1;height:35px;background:#0066CC;border-radius:6px;border:3px solid #004499;"></div>
                    <div style="flex:1;height:35px;background:#228B22;border-radius:6px;border:3px solid #1a6b1a;"></div>
                </div>
            </div>
        `;
    }

    // 9. Claymorphism
    function claymorphismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(145deg,#f0e6ff,#e6f0ff);padding:20px;display:flex;align-items:center;justify-content:center;">
                <div style="width:90%;height:80%;background:linear-gradient(145deg,#FDBCB4,#f5a89e);border-radius:24px;border:3px solid rgba(0,0,0,0.08);box-shadow:0 8px 0 rgba(0,0,0,0.1),inset 0 -4px 0 rgba(0,0,0,0.05),inset 0 4px 0 rgba(255,255,255,0.5);padding:15px;display:flex;flex-direction:column;gap:12px;">
                    <div style="display:flex;gap:10px;">
                        <div style="width:40px;height:40px;background:linear-gradient(145deg,#ADD8E6,#98c8d8);border-radius:12px;border:2px solid rgba(0,0,0,0.05);box-shadow:0 4px 0 rgba(0,0,0,0.1);"></div>
                        <div style="width:40px;height:40px;background:linear-gradient(145deg,#98FF98,#88ef88);border-radius:12px;border:2px solid rgba(0,0,0,0.05);box-shadow:0 4px 0 rgba(0,0,0,0.1);"></div>
                        <div style="width:40px;height:40px;background:linear-gradient(145deg,#E6E6FA,#d6d6ea);border-radius:12px;border:2px solid rgba(0,0,0,0.05);box-shadow:0 4px 0 rgba(0,0,0,0.1);"></div>
                    </div>
                    <div style="flex:1;background:rgba(255,255,255,0.5);border-radius:16px;"></div>
                </div>
            </div>
        `;
    }

    // 10. Aurora UI
    function auroraPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a1a2e 0%,#16213e 100%);position:relative;overflow:hidden;">
                <div style="position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:conic-gradient(from 0deg at 50% 50%,#0080FF,#FF1493,#00FFFF,#8B00FF,#0080FF);opacity:0.3;animation:rotate 20s linear infinite;filter:blur(60px);"></div>
                <div style="position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:20px;">
                    <div style="width:80%;height:70%;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border-radius:16px;border:1px solid rgba(255,255,255,0.1);"></div>
                </div>
            </div>
            <style>@keyframes rotate{to{transform:rotate(360deg)}}</style>
        `;
    }

    // 11. Retro-Futurism
    function retroFuturismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#1A1A2E;position:relative;overflow:hidden;display:flex;flex-direction:column;">
                <div style="position:absolute;bottom:0;left:0;right:0;height:60%;background:linear-gradient(0deg,#FF006E 0%,transparent 100%);opacity:0.2;"></div>
                <div style="flex:1;display:flex;align-items:center;justify-content:center;">
                    <div style="font-size:24px;font-weight:bold;color:#00FFFF;text-shadow:0 0 10px #00FFFF,0 0 20px #00FFFF;font-family:monospace;">RETRO</div>
                </div>
                <div style="height:50px;display:flex;align-items:end;justify-content:center;gap:4px;padding-bottom:20px;">
                    ${Array(12).fill().map((_, i) => `<div style="width:6px;background:linear-gradient(0deg,#FF006E,#0080FF);height:${15 + Math.sin(i * 0.8) * 15}px;"></div>`).join('')}
                </div>
            </div>
        `;
    }

    // 12. Flat Design
    function flatDesignPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#ECEFF1;padding:15px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto 1fr auto;gap:10px;">
                <div style="grid-column:span 2;height:25px;background:#2196F3;border-radius:4px;"></div>
                <div style="background:#4CAF50;border-radius:8px;"></div>
                <div style="background:#FF5722;border-radius:8px;"></div>
                <div style="grid-column:span 2;height:30px;background:#FFC107;border-radius:4px;"></div>
            </div>
        `;
    }

    // 13. Skeuomorphism
    function skeuomorphismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#c9c9c9,#a0a0a0);padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="background:linear-gradient(180deg,#f0f0f0,#d0d0d0);border-radius:8px;border:1px solid #999;box-shadow:0 2px 4px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.8);padding:10px;">
                    <div style="height:8px;background:linear-gradient(180deg,#333,#555);border-radius:4px;width:60%;"></div>
                </div>
                <div style="flex:1;background:linear-gradient(145deg,#8B4513,#654321);border-radius:8px;border:1px solid #5a3a1a;box-shadow:inset 0 2px 4px rgba(0,0,0,0.5),0 2px 4px rgba(0,0,0,0.3);"></div>
                <div style="height:35px;background:linear-gradient(180deg,#4a90d9,#357abd);border-radius:6px;border:1px solid #2a5f8f;box-shadow:0 2px 4px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.3);"></div>
            </div>
        `;
    }

    // 14. Liquid Glass
    function liquidGlassPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#ff9a9e 0%,#fecfef 50%,#a18cd1 100%);position:relative;overflow:hidden;">
                <div style="position:absolute;top:20%;left:10%;width:60%;height:60%;background:linear-gradient(135deg,rgba(255,255,255,0.4),rgba(255,255,255,0.1));border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.3);animation:morph 8s ease-in-out infinite;"></div>
                <div style="position:absolute;bottom:15%;right:15%;width:40%;height:40%;background:linear-gradient(135deg,rgba(255,255,255,0.3),rgba(255,255,255,0.05));border-radius:60% 40% 30% 70% / 60% 30% 70% 40%;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);"></div>
            </div>
            <style>@keyframes morph{0%,100%{border-radius:30% 70% 70% 30% / 30% 30% 70% 70%}50%{border-radius:70% 30% 30% 70% / 70% 70% 30% 30%}}</style>
        `;
    }

    // 15. Motion-Driven
    function motionDrivenPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a1a2e,#16213e);padding:20px;display:flex;flex-direction:column;gap:15px;overflow:hidden;">
                <div style="height:20px;background:linear-gradient(90deg,#6366F1,#EC4899);border-radius:10px;animation:slideIn 2s ease-in-out infinite;"></div>
                <div style="height:20px;background:linear-gradient(90deg,#10B981,#6366F1);border-radius:10px;animation:slideIn 2s ease-in-out infinite 0.2s;"></div>
                <div style="flex:1;display:flex;align-items:center;justify-content:center;">
                    <div style="width:60px;height:60px;background:#F59E0B;border-radius:12px;animation:pulse 1.5s ease-in-out infinite;"></div>
                </div>
                <div style="height:20px;background:linear-gradient(90deg,#EC4899,#F59E0B);border-radius:10px;animation:slideIn 2s ease-in-out infinite 0.4s;"></div>
            </div>
            <style>@keyframes slideIn{0%,100%{transform:translateX(-20px);opacity:0.5}50%{transform:translateX(0);opacity:1}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}</style>
        `;
    }

    // 16. Micro-interactions
    function microInteractionsPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F5;padding:20px;display:flex;flex-direction:column;gap:15px;align-items:center;justify-content:center;">
                <div style="display:flex;gap:15px;">
                    <div style="width:45px;height:45px;background:#22C55E;border-radius:50%;animation:bounce 1s ease infinite;"></div>
                    <div style="width:45px;height:45px;background:#EF4444;border-radius:50%;animation:bounce 1s ease infinite 0.15s;"></div>
                    <div style="width:45px;height:45px;background:#F59E0B;border-radius:50%;animation:bounce 1s ease infinite 0.3s;"></div>
                </div>
                <div style="width:120px;height:6px;background:#E5E5E5;border-radius:3px;overflow:hidden;">
                    <div style="height:100%;background:#6366F1;border-radius:3px;animation:progress 2s ease-in-out infinite;"></div>
                </div>
            </div>
            <style>@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes progress{0%{width:0}50%{width:100%}100%{width:0}}</style>
        `;
    }

    // 17. Inclusive Design
    function inclusiveDesignPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:20px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;gap:10px;align-items:center;">
                    <div style="width:20px;height:20px;border:3px solid #000;border-radius:4px;"></div>
                    <div style="flex:1;height:10px;background:#000;border-radius:2px;"></div>
                </div>
                <div style="flex:1;border:2px solid #0066CC;border-radius:8px;padding:10px;background:repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(0,102,204,0.05) 10px,rgba(0,102,204,0.05) 20px);">
                    <div style="width:60%;height:8px;background:#333;border-radius:2px;margin-bottom:8px;"></div>
                    <div style="width:40%;height:8px;background:#666;border-radius:2px;"></div>
                </div>
                <div style="height:40px;background:#228B22;border-radius:8px;border:4px solid #1a6b1a;display:flex;align-items:center;justify-content:center;">
                    <div style="width:20px;height:20px;border-left:3px solid #fff;border-bottom:3px solid #fff;transform:rotate(-45deg) translateY(-3px);"></div>
                </div>
            </div>
        `;
    }

    // 18. Zero Interface
    function zeroInterfacePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FAFAFA;display:flex;align-items:center;justify-content:center;">
                <div style="display:flex;flex-direction:column;align-items:center;gap:15px;">
                    <div style="width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#E5E5E5,#F0F0F0);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 15px rgba(0,0,0,0.1);">
                        <div style="width:15px;height:15px;background:#22C55E;border-radius:50%;animation:pulse 2s ease infinite;"></div>
                    </div>
                    <div style="display:flex;gap:3px;">
                        <div style="width:8px;height:8px;background:#333;border-radius:50%;animation:wave 1.5s ease infinite;"></div>
                        <div style="width:8px;height:8px;background:#333;border-radius:50%;animation:wave 1.5s ease infinite 0.2s;"></div>
                        <div style="width:8px;height:8px;background:#333;border-radius:50%;animation:wave 1.5s ease infinite 0.4s;"></div>
                    </div>
                </div>
            </div>
            <style>@keyframes wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}</style>
        `;
    }

    // 19. Soft UI Evolution
    function softUIPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F0F4F8;padding:20px;display:flex;flex-direction:column;gap:15px;">
                <div style="display:flex;gap:12px;">
                    <div style="width:50px;height:50px;background:linear-gradient(145deg,#87CEEB,#7ab8d4);border-radius:12px;box-shadow:4px 4px 10px rgba(0,0,0,0.1),-4px -4px 10px rgba(255,255,255,0.9);"></div>
                    <div style="flex:1;background:linear-gradient(145deg,#FFB6C1,#e8a3ad);border-radius:12px;box-shadow:4px 4px 10px rgba(0,0,0,0.1),-4px -4px 10px rgba(255,255,255,0.9);"></div>
                </div>
                <div style="flex:1;background:linear-gradient(145deg,#90EE90,#82d982);border-radius:16px;box-shadow:4px 4px 10px rgba(0,0,0,0.1),-4px -4px 10px rgba(255,255,255,0.9);"></div>
            </div>
        `;
    }

    // 20. Hero-Centric Design
    function heroCentricPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#1F2937,#111827);padding:15px;display:flex;flex-direction:column;">
                <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:10px;">
                    <div style="height:16px;background:#fff;border-radius:2px;width:70%;"></div>
                    <div style="height:10px;background:rgba(255,255,255,0.5);border-radius:2px;width:50%;"></div>
                    <div style="margin-top:10px;width:80px;height:30px;background:#F59E0B;border-radius:6px;"></div>
                </div>
                <div style="display:flex;gap:8px;margin-top:auto;">
                    <div style="flex:1;height:40px;background:rgba(255,255,255,0.1);border-radius:8px;"></div>
                    <div style="flex:1;height:40px;background:rgba(255,255,255,0.1);border-radius:8px;"></div>
                </div>
            </div>
        `;
    }

    // 21. Conversion-Optimized
    function conversionOptimizedPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="text-align:center;padding:10px;">
                    <div style="height:12px;background:#111;border-radius:2px;width:80%;margin:0 auto 8px;"></div>
                    <div style="height:8px;background:#666;border-radius:2px;width:60%;margin:0 auto;"></div>
                </div>
                <div style="border:2px solid #E5E7EB;border-radius:8px;padding:12px;">
                    <div style="height:30px;background:#F3F4F6;border-radius:4px;margin-bottom:8px;"></div>
                    <div style="height:30px;background:#F3F4F6;border-radius:4px;"></div>
                </div>
                <div style="height:40px;background:#22C55E;border-radius:8px;"></div>
                <div style="display:flex;justify-content:center;gap:4px;">
                    <div style="width:8px;height:8px;background:#FFD700;border-radius:50%;"></div>
                    <div style="width:8px;height:8px;background:#FFD700;border-radius:50%;"></div>
                    <div style="width:8px;height:8px;background:#FFD700;border-radius:50%;"></div>
                    <div style="width:8px;height:8px;background:#FFD700;border-radius:50%;"></div>
                    <div style="width:8px;height:8px;background:#FFD700;border-radius:50%;"></div>
                </div>
            </div>
        `;
    }

    // 22. Feature-Rich Showcase
    function featureRichPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F9FAFB;padding:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
                <div style="background:#3B82F6;border-radius:8px;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                    <div style="width:20px;height:20px;background:rgba(255,255,255,0.3);border-radius:50%;margin-bottom:5px;"></div>
                    <div style="height:4px;background:rgba(255,255,255,0.5);width:80%;border-radius:2px;"></div>
                </div>
                <div style="background:#10B981;border-radius:8px;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                    <div style="width:20px;height:20px;background:rgba(255,255,255,0.3);border-radius:50%;margin-bottom:5px;"></div>
                    <div style="height:4px;background:rgba(255,255,255,0.5);width:80%;border-radius:2px;"></div>
                </div>
                <div style="background:#8B5CF6;border-radius:8px;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                    <div style="width:20px;height:20px;background:rgba(255,255,255,0.3);border-radius:50%;margin-bottom:5px;"></div>
                    <div style="height:4px;background:rgba(255,255,255,0.5);width:80%;border-radius:2px;"></div>
                </div>
                <div style="grid-column:span 3;background:#fff;border-radius:8px;border:1px solid #E5E7EB;padding:10px;display:flex;gap:8px;">
                    <div style="flex:1;height:100%;background:#F3F4F6;border-radius:4px;"></div>
                    <div style="flex:1;height:100%;background:#F3F4F6;border-radius:4px;"></div>
                </div>
            </div>
        `;
    }

    // 23. Minimal & Direct
    function minimalDirectPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:30px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:20px;">
                <div style="height:14px;background:#000;border-radius:2px;width:70%;"></div>
                <div style="height:8px;background:#999;border-radius:2px;width:45%;"></div>
                <div style="width:100px;height:35px;background:#000;border-radius:4px;margin-top:10px;"></div>
            </div>
        `;
    }

    // 24. Social Proof-Focused
    function socialProofPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F5;padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;gap:6px;justify-content:center;opacity:0.6;">
                    ${Array(4).fill().map(() => `<div style="width:40px;height:20px;background:#ccc;border-radius:4px;"></div>`).join('')}
                </div>
                <div style="flex:1;background:#fff;border-radius:12px;padding:12px;border-left:4px solid #0066CC;">
                    <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
                        <div style="width:30px;height:30px;background:#0066CC;border-radius:50%;"></div>
                        <div>
                            <div style="height:6px;background:#333;width:50px;border-radius:2px;margin-bottom:4px;"></div>
                            <div style="display:flex;gap:2px;">${Array(5).fill().map(() => `<div style="width:8px;height:8px;background:#FFD700;"></div>`).join('')}</div>
                        </div>
                    </div>
                    <div style="height:5px;background:#E5E5E5;border-radius:2px;width:90%;margin-bottom:4px;"></div>
                    <div style="height:5px;background:#E5E5E5;border-radius:2px;width:70%;"></div>
                </div>
            </div>
        `;
    }

    // 25. Interactive Product Demo
    function interactiveDemoPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#1F2937;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="flex:1;background:#111827;border-radius:8px;border:1px solid #374151;padding:10px;position:relative;">
                    <div style="display:flex;gap:4px;margin-bottom:10px;">
                        <div style="width:8px;height:8px;border-radius:50%;background:#EF4444;"></div>
                        <div style="width:8px;height:8px;border-radius:50%;background:#F59E0B;"></div>
                        <div style="width:8px;height:8px;border-radius:50%;background:#22C55E;"></div>
                    </div>
                    <div style="height:6px;background:#6366F1;border-radius:3px;width:60%;margin-bottom:6px;"></div>
                    <div style="height:6px;background:#374151;border-radius:3px;width:80%;margin-bottom:6px;"></div>
                    <div style="height:6px;background:#374151;border-radius:3px;width:40%;"></div>
                    <div style="position:absolute;bottom:10px;right:10px;width:30px;height:30px;background:#6366F1;border-radius:50%;display:flex;align-items:center;justify-content:center;">
                        <div style="width:0;height:0;border-left:8px solid #fff;border-top:5px solid transparent;border-bottom:5px solid transparent;margin-left:3px;"></div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;">
                    <div style="flex:1;height:8px;background:#22C55E;border-radius:4px;"></div>
                    <div style="flex:1;height:8px;background:#374151;border-radius:4px;"></div>
                    <div style="flex:1;height:8px;background:#374151;border-radius:4px;"></div>
                </div>
            </div>
        `;
    }

    // 26. Trust & Authority
    function trustAuthorityPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#1E3A5F,#0F2744);padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;justify-content:center;gap:10px;">
                    <div style="width:35px;height:35px;background:linear-gradient(135deg,#FFD700,#B8860B);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;">✓</div>
                    <div style="width:35px;height:35px;background:linear-gradient(135deg,#C0C0C0,#A0A0A0);border-radius:50%;"></div>
                </div>
                <div style="flex:1;background:rgba(255,255,255,0.05);border-radius:8px;padding:10px;border:1px solid rgba(255,255,255,0.1);">
                    <div style="height:8px;background:rgba(255,255,255,0.3);border-radius:2px;width:70%;margin-bottom:8px;"></div>
                    <div style="display:flex;gap:15px;">
                        <div style="text-align:center;">
                            <div style="font-size:16px;color:#22C55E;font-weight:bold;">98%</div>
                            <div style="height:4px;background:rgba(255,255,255,0.2);width:30px;border-radius:2px;"></div>
                        </div>
                        <div style="text-align:center;">
                            <div style="font-size:16px;color:#FFD700;font-weight:bold;">4.9</div>
                            <div style="height:4px;background:rgba(255,255,255,0.2);width:30px;border-radius:2px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // 27. Storytelling-Driven
    function storytellingPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#8B5CF6 0%,#EC4899 50%,#F59E0B 100%);padding:15px;display:flex;flex-direction:column;gap:8px;">
                <div style="background:rgba(255,255,255,0.2);border-radius:8px;padding:10px;backdrop-filter:blur(5px);">
                    <div style="height:6px;background:rgba(255,255,255,0.6);border-radius:3px;width:50%;margin-bottom:5px;"></div>
                    <div style="height:4px;background:rgba(255,255,255,0.3);border-radius:2px;width:70%;"></div>
                </div>
                <div style="flex:1;background:rgba(255,255,255,0.15);border-radius:8px;"></div>
                <div style="background:rgba(255,255,255,0.2);border-radius:8px;padding:10px;backdrop-filter:blur(5px);">
                    <div style="height:4px;background:rgba(255,255,255,0.4);border-radius:2px;width:60%;"></div>
                </div>
            </div>
        `;
    }

    // 28. Data-Dense Dashboard
    function dataDensePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F5;padding:10px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto 1fr;gap:6px;font-size:8px;">
                <div style="background:#fff;border-radius:4px;padding:6px;border:1px solid #E5E5E5;">
                    <div style="color:#666;margin-bottom:2px;">Revenue</div>
                    <div style="font-weight:bold;color:#22C55E;">$24.5K</div>
                </div>
                <div style="background:#fff;border-radius:4px;padding:6px;border:1px solid #E5E5E5;">
                    <div style="color:#666;margin-bottom:2px;">Users</div>
                    <div style="font-weight:bold;color:#3B82F6;">1,234</div>
                </div>
                <div style="background:#fff;border-radius:4px;padding:6px;border:1px solid #E5E5E5;">
                    <div style="color:#666;margin-bottom:2px;">Growth</div>
                    <div style="font-weight:bold;color:#EF4444;">+12%</div>
                </div>
                <div style="grid-column:span 2;background:#fff;border-radius:4px;padding:8px;border:1px solid #E5E5E5;display:flex;align-items:end;gap:4px;">
                    ${Array(8).fill().map((_, i) => `<div style="flex:1;background:#3B82F6;height:${20 + Math.random() * 40}px;border-radius:2px 2px 0 0;"></div>`).join('')}
                </div>
                <div style="background:#fff;border-radius:4px;padding:8px;border:1px solid #E5E5E5;">
                    <div style="width:100%;height:100%;border-radius:50%;background:conic-gradient(#22C55E 0% 40%,#F59E0B 40% 70%,#EF4444 70% 100%);"></div>
                </div>
            </div>
        `;
    }

    // 29. Heat Map Style
    function heatMapPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#1F2937;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="flex:1;display:grid;grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(5,1fr);gap:3px;">
                    ${Array(35).fill().map(() => {
                        const intensity = Math.random();
                        const color = intensity > 0.7 ? '#FF0000' : intensity > 0.4 ? '#FFFF00' : '#0080FF';
                        return `<div style="background:${color};opacity:${0.3 + intensity * 0.7};border-radius:2px;"></div>`;
                    }).join('')}
                </div>
                <div style="height:15px;background:linear-gradient(90deg,#0080FF,#FFFF00,#FF0000);border-radius:4px;"></div>
            </div>
        `;
    }

    // 30. Executive Dashboard
    function executiveDashboardPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#0F172A;padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;gap:8px;">
                    <div style="flex:1;background:linear-gradient(135deg,#1E3A5F,#2D4A6F);border-radius:8px;padding:10px;">
                        <div style="font-size:20px;font-weight:bold;color:#22C55E;">$1.2M</div>
                        <div style="font-size:8px;color:#94A3B8;">Revenue ↑12%</div>
                    </div>
                    <div style="flex:1;background:linear-gradient(135deg,#1E3A5F,#2D4A6F);border-radius:8px;padding:10px;">
                        <div style="font-size:20px;font-weight:bold;color:#3B82F6;">8.4K</div>
                        <div style="font-size:8px;color:#94A3B8;">Customers ↑8%</div>
                    </div>
                </div>
                <div style="flex:1;background:rgba(255,255,255,0.05);border-radius:8px;padding:10px;display:flex;align-items:end;">
                    <svg viewBox="0 0 100 40" style="width:100%;height:100%;">
                        <path d="M0,35 Q25,10 50,25 T100,15" fill="none" stroke="#22C55E" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        `;
    }

    // 31. Real-Time Monitoring
    function realTimePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#0D1117;padding:12px;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;gap:8px;">
                    <div style="display:flex;align-items:center;gap:4px;background:#161B22;padding:6px 10px;border-radius:4px;">
                        <div style="width:8px;height:8px;background:#22C55E;border-radius:50%;animation:blink 1s infinite;"></div>
                        <span style="font-size:9px;color:#22C55E;">LIVE</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:4px;background:#161B22;padding:6px 10px;border-radius:4px;">
                        <div style="width:8px;height:8px;background:#F59E0B;border-radius:50%;"></div>
                        <span style="font-size:9px;color:#F59E0B;">WARN</span>
                    </div>
                </div>
                <div style="flex:1;background:#161B22;border-radius:8px;padding:10px;display:flex;flex-direction:column;justify-content:end;">
                    <svg viewBox="0 0 100 30" style="width:100%;">
                        <path d="M0,20 L10,15 L20,22 L30,10 L40,18 L50,12 L60,20 L70,8 L80,16 L90,14 L100,18" fill="none" stroke="#0080FF" stroke-width="2"/>
                    </svg>
                </div>
            </div>
            <style>@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}</style>
        `;
    }

    // 32. Drill-Down Analytics
    function drillDownPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F9FAFB;padding:12px;display:flex;flex-direction:column;gap:8px;">
                <div style="display:flex;gap:4px;font-size:8px;color:#6B7280;">
                    <span style="color:#6366F1;">All</span> → <span>Region</span> → <span style="opacity:0.5">City</span>
                </div>
                <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
                    <div style="background:#fff;border:1px solid #E5E7EB;border-radius:6px;padding:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:9px;">North America</span>
                        <div style="width:60px;height:6px;background:#E5E7EB;border-radius:3px;overflow:hidden;"><div style="width:80%;height:100%;background:#6366F1;"></div></div>
                    </div>
                    <div style="background:#fff;border:1px solid #E5E7EB;border-radius:6px;padding:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:9px;">Europe</span>
                        <div style="width:60px;height:6px;background:#E5E7EB;border-radius:3px;overflow:hidden;"><div style="width:60%;height:100%;background:#10B981;"></div></div>
                    </div>
                    <div style="background:#fff;border:1px solid #E5E7EB;border-radius:6px;padding:8px;display:flex;justify-content:space-between;align-items:center;">
                        <span style="font-size:9px;">Asia Pacific</span>
                        <div style="width:60px;height:6px;background:#E5E7EB;border-radius:3px;overflow:hidden;"><div style="width:45%;height:100%;background:#F59E0B;"></div></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 33. Comparative Analysis
    function comparativePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;justify-content:center;gap:15px;font-size:9px;">
                    <div style="display:flex;align-items:center;gap:4px;"><div style="width:10px;height:10px;background:#3B82F6;border-radius:2px;"></div>This Year</div>
                    <div style="display:flex;align-items:center;gap:4px;"><div style="width:10px;height:10px;background:#F97316;border-radius:2px;"></div>Last Year</div>
                </div>
                <div style="flex:1;display:flex;align-items:end;justify-content:center;gap:12px;">
                    ${['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => `
                        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                            <div style="display:flex;gap:3px;align-items:end;">
                                <div style="width:12px;background:#3B82F6;height:${30 + i * 15}px;border-radius:2px 2px 0 0;"></div>
                                <div style="width:12px;background:#F97316;height:${25 + i * 10}px;border-radius:2px 2px 0 0;"></div>
                            </div>
                            <span style="font-size:8px;color:#666;">${q}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 34. Predictive Analytics
    function predictivePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#1E1E2E;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;gap:6px;font-size:8px;">
                    <span style="color:#8B5CF6;">● Actual</span>
                    <span style="color:#22C55E;">● Predicted</span>
                    <span style="color:rgba(139,92,246,0.3);">■ Confidence</span>
                </div>
                <div style="flex:1;position:relative;">
                    <svg viewBox="0 0 100 50" style="width:100%;height:100%;">
                        <defs>
                            <linearGradient id="conf" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stop-color="#8B5CF6" stop-opacity="0.3"/>
                                <stop offset="100%" stop-color="#8B5CF6" stop-opacity="0"/>
                            </linearGradient>
                        </defs>
                        <path d="M60,25 Q70,20 80,22 Q90,18 100,15 L100,35 Q90,32 80,32 Q70,35 60,30 Z" fill="url(#conf)"/>
                        <path d="M0,35 Q15,30 30,32 Q45,25 60,28" fill="none" stroke="#8B5CF6" stroke-width="2"/>
                        <path d="M60,28 Q75,22 90,20" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="4,2"/>
                    </svg>
                </div>
            </div>
        `;
    }

    // 35. User Behavior Analytics
    function userBehaviorPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F9FAFB;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="font-size:9px;color:#6B7280;text-align:center;">Conversion Funnel</div>
                <div style="flex:1;display:flex;flex-direction:column;gap:4px;align-items:center;">
                    <div style="width:100%;height:25%;background:#22C55E;border-radius:4px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;">
                        <span style="font-size:8px;color:#fff;">Visitors</span>
                        <span style="font-size:8px;color:#fff;">10,000</span>
                    </div>
                    <div style="width:75%;height:25%;background:#3B82F6;border-radius:4px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;">
                        <span style="font-size:8px;color:#fff;">Sign ups</span>
                        <span style="font-size:8px;color:#fff;">2,500</span>
                    </div>
                    <div style="width:50%;height:25%;background:#F59E0B;border-radius:4px;display:flex;align-items:center;justify-content:space-between;padding:0 8px;">
                        <span style="font-size:8px;color:#fff;">Active</span>
                        <span style="font-size:8px;color:#fff;">800</span>
                    </div>
                    <div style="width:30%;height:25%;background:#EF4444;border-radius:4px;display:flex;align-items:center;justify-content:center;">
                        <span style="font-size:8px;color:#fff;">Paid: 200</span>
                    </div>
                </div>
            </div>
        `;
    }

    // 36. Financial Dashboard
    function financialPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#003366;padding:12px;display:flex;flex-direction:column;gap:10px;">
                <div style="display:flex;gap:8px;">
                    <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:6px;padding:8px;">
                        <div style="font-size:8px;color:#94A3B8;">Revenue</div>
                        <div style="font-size:14px;font-weight:bold;color:#22C55E;">+$45.2K</div>
                    </div>
                    <div style="flex:1;background:rgba(255,255,255,0.1);border-radius:6px;padding:8px;">
                        <div style="font-size:8px;color:#94A3B8;">Expenses</div>
                        <div style="font-size:14px;font-weight:bold;color:#EF4444;">-$12.8K</div>
                    </div>
                </div>
                <div style="flex:1;background:rgba(255,255,255,0.05);border-radius:6px;padding:8px;display:flex;align-items:center;justify-content:center;">
                    <svg viewBox="0 0 100 50" style="width:100%;height:100%;">
                        <path d="M0,40 L20,35 L40,38 L60,25 L80,20 L100,22" fill="none" stroke="#22C55E" stroke-width="2"/>
                        <path d="M0,45 L20,42 L40,44 L60,40 L80,38 L100,35" fill="none" stroke="#EF4444" stroke-width="2"/>
                    </svg>
                </div>
            </div>
        `;
    }

    // 37. Sales Intelligence
    function salesIntelligencePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F8FAFC;padding:12px;display:flex;flex-direction:column;gap:8px;">
                <div style="display:flex;gap:6px;">
                    <div style="flex:1;background:#22C55E;border-radius:4px;padding:6px;text-align:center;">
                        <div style="font-size:12px;font-weight:bold;color:#fff;">$125K</div>
                        <div style="font-size:7px;color:rgba(255,255,255,0.8);">Won</div>
                    </div>
                    <div style="flex:1;background:#EF4444;border-radius:4px;padding:6px;text-align:center;">
                        <div style="font-size:12px;font-weight:bold;color:#fff;">$45K</div>
                        <div style="font-size:7px;color:rgba(255,255,255,0.8);">Lost</div>
                    </div>
                    <div style="flex:1;background:#3B82F6;border-radius:4px;padding:6px;text-align:center;">
                        <div style="font-size:12px;font-weight:bold;color:#fff;">$80K</div>
                        <div style="font-size:7px;color:rgba(255,255,255,0.8);">Pipeline</div>
                    </div>
                </div>
                <div style="flex:1;background:#fff;border-radius:6px;padding:8px;border:1px solid #E2E8F0;">
                    <div style="font-size:8px;color:#64748B;margin-bottom:6px;">Top Performers</div>
                    ${['John', 'Sarah', 'Mike'].map((name, i) => `
                        <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                            <div style="width:18px;height:18px;background:${['#FFD700', '#C0C0C0', '#CD7F32'][i]};border-radius:50%;font-size:8px;display:flex;align-items:center;justify-content:center;">${i + 1}</div>
                            <span style="font-size:8px;flex:1;">${name}</span>
                            <div style="width:40px;height:4px;background:#E2E8F0;border-radius:2px;overflow:hidden;"><div style="height:100%;background:#22C55E;width:${90 - i * 20}%;"></div></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 38. Neubrutalism
    function neubrutalismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFEB3B;padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="background:#fff;border:3px solid #000;box-shadow:4px 4px 0 #000;padding:10px;">
                    <div style="height:10px;background:#000;width:60%;"></div>
                </div>
                <div style="display:flex;gap:10px;">
                    <div style="flex:1;background:#FF5252;border:3px solid #000;box-shadow:4px 4px 0 #000;height:50px;"></div>
                    <div style="flex:1;background:#2196F3;border:3px solid #000;box-shadow:4px 4px 0 #000;height:50px;"></div>
                </div>
                <div style="background:#CBA6F7;border:3px solid #000;box-shadow:4px 4px 0 #000;padding:10px;display:flex;gap:8px;">
                    <div style="width:30px;height:30px;background:#76E0C2;border:2px solid #000;border-radius:50%;"></div>
                    <div style="flex:1;display:flex;flex-direction:column;gap:4px;justify-content:center;">
                        <div style="height:6px;background:#000;width:70%;"></div>
                        <div style="height:6px;background:#000;width:50%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 39. Bento Box Grid
    function bentoBoxPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F5;padding:12px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:8px;">
                <div style="grid-row:span 2;background:#fff;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);padding:12px;">
                    <div style="width:30px;height:30px;background:#6366F1;border-radius:8px;margin-bottom:8px;"></div>
                    <div style="height:6px;background:#E5E5E5;border-radius:3px;width:80%;margin-bottom:4px;"></div>
                    <div style="height:6px;background:#E5E5E5;border-radius:3px;width:60%;"></div>
                </div>
                <div style="background:#fff;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);"></div>
                <div style="background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:16px;"></div>
                <div style="grid-column:span 2;background:#fff;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);"></div>
            </div>
        `;
    }

    // 40. Y2K Aesthetic
    function y2kPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#FF69B4,#00FFFF);padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="background:linear-gradient(180deg,#C0C0C0,#E8E8E8,#C0C0C0);border-radius:20px;padding:10px;border:2px solid rgba(255,255,255,0.5);">
                    <div style="height:8px;background:linear-gradient(90deg,#FF69B4,#9400D3);border-radius:4px;width:70%;"></div>
                </div>
                <div style="flex:1;display:flex;align-items:center;justify-content:center;">
                    <div style="width:70px;height:70px;background:linear-gradient(135deg,#C0C0C0,#fff,#C0C0C0);border-radius:50%;box-shadow:0 0 20px rgba(255,105,180,0.5);display:flex;align-items:center;justify-content:center;">
                        <div style="width:40px;height:40px;background:linear-gradient(135deg,#FF69B4,#00FFFF);border-radius:50%;"></div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;justify-content:center;">
                    <div style="width:40px;height:25px;background:linear-gradient(180deg,#e8e8e8,#c0c0c0);border-radius:12px;border:1px solid #999;"></div>
                    <div style="width:40px;height:25px;background:linear-gradient(180deg,#9400D3,#6a0dad);border-radius:12px;border:1px solid #7b08b8;"></div>
                </div>
            </div>
        `;
    }

    // 41. Cyberpunk UI
    function cyberpunkPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#0D0D0D;position:relative;overflow:hidden;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,255,0,0.03) 0px,rgba(0,255,0,0.03) 1px,transparent 1px,transparent 2px);pointer-events:none;"></div>
                <div style="border:1px solid #00FF00;padding:8px;position:relative;">
                    <div style="font-family:monospace;font-size:10px;color:#00FF00;text-shadow:0 0 5px #00FF00;">SYSTEM_ONLINE</div>
                    <div style="position:absolute;top:0;right:0;width:8px;height:8px;background:#00FF00;"></div>
                </div>
                <div style="flex:1;border:1px solid #FF00FF;padding:10px;display:flex;flex-direction:column;gap:6px;">
                    <div style="height:6px;background:#00FFFF;width:80%;box-shadow:0 0 10px #00FFFF;"></div>
                    <div style="height:6px;background:#FF00FF;width:60%;box-shadow:0 0 10px #FF00FF;"></div>
                    <div style="height:6px;background:#00FF00;width:40%;box-shadow:0 0 10px #00FF00;"></div>
                </div>
                <div style="display:flex;gap:10px;">
                    <div style="flex:1;height:25px;border:1px solid #00FFFF;display:flex;align-items:center;justify-content:center;font-size:9px;color:#00FFFF;font-family:monospace;">ACCESS</div>
                    <div style="flex:1;height:25px;background:#FF00FF;display:flex;align-items:center;justify-content:center;font-size:9px;color:#000;font-family:monospace;">EXECUTE</div>
                </div>
            </div>
        `;
    }

    // 42. Organic Biophilic
    function biophilicPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#87CEEB 0%,#F5F5DC 100%);padding:15px;display:flex;flex-direction:column;gap:12px;">
                <div style="flex:1;display:flex;gap:10px;">
                    <div style="flex:1;background:#228B22;border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;"></div>
                    <div style="flex:1;background:#8B4513;border-radius:20px;display:flex;flex-direction:column;justify-content:end;padding:10px;">
                        <div style="height:6px;background:rgba(255,255,255,0.5);border-radius:3px;width:80%;margin-bottom:4px;"></div>
                        <div style="height:6px;background:rgba(255,255,255,0.3);border-radius:3px;width:60%;"></div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;">
                    <div style="flex:1;height:40px;background:#90EE90;border-radius:20px;"></div>
                    <div style="flex:1;height:40px;background:#DEB887;border-radius:20px;"></div>
                </div>
            </div>
        `;
    }

    // 43. AI-Native UI
    function aiNativePreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F5;padding:15px;display:flex;flex-direction:column;gap:10px;">
                <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
                    <div style="align-self:flex-end;background:#6366F1;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;font-size:9px;max-width:70%;">How can I help you today?</div>
                    <div style="align-self:flex-start;background:#E5E7EB;padding:8px 12px;border-radius:16px 16px 16px 4px;font-size:9px;max-width:70%;">Analyze my data</div>
                    <div style="align-self:flex-end;background:#6366F1;color:#fff;padding:8px 12px;border-radius:16px 16px 4px 16px;font-size:9px;display:flex;align-items:center;gap:4px;">
                        <div style="display:flex;gap:2px;">
                            <div style="width:4px;height:4px;background:#fff;border-radius:50%;animation:wave 1s infinite;"></div>
                            <div style="width:4px;height:4px;background:#fff;border-radius:50%;animation:wave 1s infinite 0.2s;"></div>
                            <div style="width:4px;height:4px;background:#fff;border-radius:50%;animation:wave 1s infinite 0.4s;"></div>
                        </div>
                    </div>
                </div>
                <div style="display:flex;gap:8px;">
                    <div style="flex:1;height:35px;background:#fff;border:1px solid #E5E7EB;border-radius:20px;"></div>
                    <div style="width:35px;height:35px;background:#6366F1;border-radius:50%;"></div>
                </div>
            </div>
            <style>@keyframes wave{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style>
        `;
    }

    // 44. Memphis Design
    function memphisPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFCE5C;padding:15px;position:relative;overflow:hidden;">
                <div style="position:absolute;top:10px;right:10px;width:40px;height:40px;background:#FF71CE;transform:rotate(45deg);"></div>
                <div style="position:absolute;bottom:20px;left:10px;width:50px;height:50px;border:4px solid #6A7BB4;border-radius:50%;"></div>
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
                    <div style="width:0;height:0;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:50px solid #86CCCA;"></div>
                </div>
                <div style="position:absolute;bottom:10px;right:20px;display:flex;gap:3px;">
                    ${Array(5).fill().map(() => `<div style="width:6px;height:6px;background:#000;border-radius:50%;"></div>`).join('')}
                </div>
                <svg style="position:absolute;top:60px;left:30px;width:40px;height:30px;">
                    <path d="M0,15 Q10,0 20,15 T40,15" fill="none" stroke="#FF71CE" stroke-width="3"/>
                </svg>
            </div>
        `;
    }

    // 45. Vaporwave
    function vaporwavePreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#FF71CE 0%,#B967FF 50%,#01CDFE 100%);position:relative;overflow:hidden;">
                <div style="position:absolute;bottom:0;left:0;right:0;height:50%;background:linear-gradient(180deg,transparent,rgba(5,255,161,0.3));"></div>
                <div style="position:absolute;bottom:0;left:0;right:0;height:40%;display:flex;flex-direction:column;gap:8px;">
                    ${Array(6).fill().map((_, i) => `<div style="height:1px;background:rgba(5,255,161,0.5);transform:perspective(100px) rotateX(60deg);"></div>`).join('')}
                </div>
                <div style="position:absolute;top:20%;left:50%;transform:translateX(-50%);font-size:16px;font-weight:bold;color:#fff;text-shadow:2px 2px 0 #FF71CE,-2px -2px 0 #01CDFE;font-family:serif;">美学</div>
                <div style="position:absolute;top:50%;left:20%;width:30px;height:30px;background:#01CDFE;opacity:0.5;"></div>
            </div>
        `;
    }

    // 46. Dimensional Layering
    function dimensionalPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F0F0F0;padding:20px;display:flex;align-items:center;justify-content:center;perspective:500px;">
                <div style="position:relative;width:120px;height:100px;">
                    <div style="position:absolute;inset:0;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.1);transform:translateZ(0);"></div>
                    <div style="position:absolute;inset:-5px;background:#E5E5E5;border-radius:14px;box-shadow:0 4px 6px rgba(0,0,0,0.1);transform:translateZ(-10px);"></div>
                    <div style="position:absolute;inset:-10px;background:#D0D0D0;border-radius:16px;box-shadow:0 8px 15px rgba(0,0,0,0.15);transform:translateZ(-20px);"></div>
                    <div style="position:absolute;top:15px;left:15px;width:30px;height:30px;background:#6366F1;border-radius:8px;box-shadow:0 4px 8px rgba(99,102,241,0.4);"></div>
                </div>
            </div>
        `;
    }

    // 47. Exaggerated Minimalism
    function exaggeratedMinimalPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
                <div style="font-size:48px;font-weight:900;color:#000;letter-spacing:-0.05em;line-height:0.9;">BIG</div>
                <div style="width:60px;height:3px;background:#000;margin:15px 0;"></div>
                <div style="font-size:10px;color:#666;letter-spacing:0.2em;text-transform:uppercase;">minimal</div>
            </div>
        `;
    }

    // 48. Kinetic Typography
    function kineticTypoPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#000;display:flex;align-items:center;justify-content:center;overflow:hidden;">
                <div style="font-size:28px;font-weight:900;color:#fff;animation:kinetic 3s ease-in-out infinite;">
                    <span style="display:inline-block;animation:letter 0.5s ease infinite;">T</span>
                    <span style="display:inline-block;animation:letter 0.5s ease infinite 0.1s;">Y</span>
                    <span style="display:inline-block;animation:letter 0.5s ease infinite 0.2s;">P</span>
                    <span style="display:inline-block;animation:letter 0.5s ease infinite 0.3s;">E</span>
                </div>
            </div>
            <style>@keyframes letter{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes kinetic{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}</style>
        `;
    }

    // 49. Parallax Storytelling
    function parallaxPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#1F2937,#374151);position:relative;overflow:hidden;">
                <div style="position:absolute;top:10%;left:10%;width:80%;height:20px;background:rgba(255,255,255,0.1);border-radius:4px;"></div>
                <div style="position:absolute;top:35%;left:20%;width:60%;height:15px;background:rgba(255,255,255,0.15);border-radius:4px;"></div>
                <div style="position:absolute;top:55%;left:15%;width:70%;height:10px;background:rgba(255,255,255,0.2);border-radius:4px;"></div>
                <div style="position:absolute;bottom:20%;left:50%;transform:translateX(-50%);width:50px;height:50px;background:#F59E0B;border-radius:50%;box-shadow:0 0 30px rgba(245,158,11,0.5);"></div>
                <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;color:rgba(255,255,255,0.5);font-size:10px;">
                    <div>↓</div>
                    <div>Scroll</div>
                </div>
            </div>
        `;
    }

    // 50. Swiss Modernism 2.0
    function swissModernismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFFFFF;padding:15px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:1px;background:#000;">
                <div style="grid-column:span 2;grid-row:span 2;background:#fff;padding:10px;">
                    <div style="height:100%;display:flex;flex-direction:column;justify-content:end;">
                        <div style="font-size:20px;font-weight:bold;font-family:Helvetica,sans-serif;">Aa</div>
                    </div>
                </div>
                <div style="grid-column:span 2;background:#FF0000;"></div>
                <div style="background:#fff;"></div>
                <div style="background:#F5F5F5;"></div>
                <div style="grid-column:span 4;background:#fff;display:flex;align-items:center;padding:0 10px;">
                    <div style="height:2px;background:#000;width:100%;"></div>
                </div>
            </div>
        `;
    }

    // 51. HUD / Sci-Fi FUI
    function hudSciFiPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#000;padding:15px;position:relative;overflow:hidden;">
                <div style="position:absolute;inset:10px;border:1px solid rgba(0,255,255,0.3);border-radius:4px;"></div>
                <div style="position:absolute;top:10px;left:10px;width:20px;height:20px;border-left:2px solid #00FFFF;border-top:2px solid #00FFFF;"></div>
                <div style="position:absolute;top:10px;right:10px;width:20px;height:20px;border-right:2px solid #00FFFF;border-top:2px solid #00FFFF;"></div>
                <div style="position:absolute;bottom:10px;left:10px;width:20px;height:20px;border-left:2px solid #00FFFF;border-bottom:2px solid #00FFFF;"></div>
                <div style="position:absolute;bottom:10px;right:10px;width:20px;height:20px;border-right:2px solid #00FFFF;border-bottom:2px solid #00FFFF;"></div>
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:60px;height:60px;border:2px solid #0080FF;border-radius:50%;display:flex;align-items:center;justify-content:center;">
                    <div style="width:30px;height:30px;border:1px solid rgba(0,128,255,0.5);border-radius:50%;"></div>
                </div>
                <div style="position:absolute;bottom:25px;left:50%;transform:translateX(-50%);font-size:9px;color:#00FFFF;font-family:monospace;">TARGET LOCKED</div>
            </div>
        `;
    }

    // 52. Pixel Art
    function pixelArtPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#000;padding:15px;display:flex;flex-direction:column;gap:10px;image-rendering:pixelated;">
                <div style="display:flex;gap:2px;">
                    ${Array(10).fill().map(() => `<div style="width:8px;height:8px;background:${['#FF0000', '#00FF00', '#0000FF', '#FFFF00'][Math.floor(Math.random() * 4)]};"></div>`).join('')}
                </div>
                <div style="flex:1;display:flex;align-items:center;justify-content:center;">
                    <div style="display:grid;grid-template-columns:repeat(8,8px);gap:1px;">
                        ${Array(64).fill().map((_, i) => {
                            const row = Math.floor(i / 8);
                            const col = i % 8;
                            const isHeart = (row === 1 && (col === 1 || col === 2 || col === 5 || col === 6)) ||
                                           (row === 2 && col >= 1 && col <= 6) ||
                                           (row === 3 && col >= 1 && col <= 6) ||
                                           (row === 4 && col >= 2 && col <= 5) ||
                                           (row === 5 && col >= 3 && col <= 4);
                            return `<div style="width:8px;height:8px;background:${isHeart ? '#FF0000' : 'transparent'};"></div>`;
                        }).join('')}
                    </div>
                </div>
                <div style="height:20px;background:#222;display:flex;align-items:center;padding:0 8px;gap:8px;">
                    <div style="font-size:10px;color:#fff;font-family:monospace;">SCORE: 1000</div>
                </div>
            </div>
        `;
    }

    // 53. Bento Grids
    function bentoGridsPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#F5F5F7;padding:10px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:8px;">
                <div style="grid-row:span 2;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);padding:10px;display:flex;flex-direction:column;">
                    <div style="width:25px;height:25px;background:linear-gradient(135deg,#6366F1,#8B5CF6);border-radius:6px;margin-bottom:auto;"></div>
                    <div style="height:5px;background:#E5E5E5;border-radius:2px;width:70%;margin-bottom:4px;"></div>
                    <div style="height:5px;background:#E5E5E5;border-radius:2px;width:50%;"></div>
                </div>
                <div style="background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);"></div>
                <div style="background:#1D1D1F;border-radius:12px;"></div>
                <div style="grid-column:span 2;background:#fff;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.08);display:flex;align-items:center;justify-content:center;gap:6px;">
                    ${Array(4).fill().map((_, i) => `<div style="width:20px;height:20px;background:${['#FF3B30', '#FF9500', '#FFCC00', '#34C759'][i]};border-radius:4px;"></div>`).join('')}
                </div>
            </div>
        `;
    }

    // 54. Neo Brutalism
    function neoBrutalismPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FFDE59;padding:12px;display:flex;flex-direction:column;gap:10px;">
                <div style="background:#fff;border:3px solid #000;box-shadow:5px 5px 0 #000;padding:8px;">
                    <div style="height:8px;background:#000;width:50%;"></div>
                </div>
                <div style="display:flex;gap:8px;flex:1;">
                    <div style="flex:1;background:#FF5757;border:3px solid #000;box-shadow:4px 4px 0 #000;"></div>
                    <div style="flex:1;display:flex;flex-direction:column;gap:8px;">
                        <div style="flex:1;background:#CBA6F7;border:3px solid #000;box-shadow:4px 4px 0 #000;"></div>
                        <div style="flex:1;background:#76E0C2;border:3px solid #000;box-shadow:4px 4px 0 #000;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 55. Spatial UI (VisionOS)
    function spatialUIPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#1a1a2e,#16213e);display:flex;align-items:center;justify-content:center;perspective:1000px;">
                <div style="width:85%;height:75%;background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);border-radius:24px;border:1px solid rgba(255,255,255,0.2);padding:15px;transform:rotateX(5deg);box-shadow:0 25px 50px rgba(0,0,0,0.3);">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <div style="width:10px;height:10px;background:rgba(255,255,255,0.3);border-radius:50%;"></div>
                        <div style="width:10px;height:10px;background:rgba(255,255,255,0.3);border-radius:50%;"></div>
                        <div style="width:10px;height:10px;background:rgba(255,255,255,0.3);border-radius:50%;"></div>
                    </div>
                    <div style="display:flex;gap:8px;">
                        <div style="width:40px;height:40px;background:rgba(255,255,255,0.15);border-radius:10px;backdrop-filter:blur(5px);"></div>
                        <div style="width:40px;height:40px;background:rgba(10,132,255,0.4);border-radius:10px;"></div>
                        <div style="width:40px;height:40px;background:rgba(48,209,88,0.4);border-radius:10px;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    // 56. E-Ink / Paper
    function eInkPreview(style) {
        return `
            <div style="width:100%;height:100%;background:#FDFBF7;padding:20px;display:flex;flex-direction:column;gap:12px;font-family:Georgia,serif;">
                <div style="height:12px;background:#1A1A1A;width:60%;"></div>
                <div style="height:8px;background:#4A4A4A;width:80%;"></div>
                <div style="flex:1;display:flex;flex-direction:column;gap:6px;padding-top:10px;border-top:1px solid #1A1A1A;">
                    <div style="height:6px;background:#1A1A1A;width:100%;"></div>
                    <div style="height:6px;background:#1A1A1A;width:95%;"></div>
                    <div style="height:6px;background:#1A1A1A;width:100%;"></div>
                    <div style="height:6px;background:#1A1A1A;width:85%;"></div>
                </div>
                <div style="display:flex;justify-content:center;gap:4px;opacity:0.5;">
                    <span style="font-size:10px;">1</span>
                    <span style="font-size:10px;">/</span>
                    <span style="font-size:10px;">24</span>
                </div>
            </div>
        `;
    }

    // 57. Gen Z Chaos / Maximalism
    function genZChaosPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(135deg,#FF00FF,#00FF00,#FFFF00);position:relative;overflow:hidden;">
                <div style="position:absolute;top:10px;left:10px;background:#0000FF;color:#FFFF00;padding:4px 8px;transform:rotate(-5deg);font-size:10px;font-weight:bold;">WOW!</div>
                <div style="position:absolute;top:30px;right:15px;width:40px;height:40px;background:#FF0000;border-radius:50%;"></div>
                <div style="position:absolute;bottom:30px;left:20px;font-size:24px;">⭐</div>
                <div style="position:absolute;bottom:20px;right:10px;background:#000;color:#00FFFF;padding:6px;transform:rotate(8deg);font-size:9px;">CHAOS</div>
                <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-10deg);background:rgba(255,255,255,0.8);padding:8px;border:3px dashed #FF00FF;">
                    <div style="font-size:12px;">✨ VIBE ✨</div>
                </div>
                <div style="position:absolute;top:60px;left:40px;width:30px;height:30px;border:3px solid #00FFFF;transform:rotate(45deg);"></div>
            </div>
        `;
    }

    // 58. Biomimetic / Organic 2.0
    function biomimeticPreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#001E3C,#003366);position:relative;overflow:hidden;">
                <svg style="position:absolute;inset:0;width:100%;height:100%;">
                    <defs>
                        <radialGradient id="cell1" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#FF9999" stop-opacity="0.8"/>
                            <stop offset="100%" stop-color="#FF9999" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="cell2" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#00FF41" stop-opacity="0.6"/>
                            <stop offset="100%" stop-color="#00FF41" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                    <circle cx="30%" cy="40%" r="40" fill="url(#cell1)">
                        <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="70%" cy="60%" r="35" fill="url(#cell2)">
                        <animate attributeName="r" values="35;40;35" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="50%" cy="30%" r="25" fill="url(#cell1)">
                        <animate attributeName="cy" values="30%;35%;30%" dur="5s" repeatCount="indefinite"/>
                    </circle>
                    <path d="M20,80 Q40,60 60,80 T100,80" fill="none" stroke="#FF7F50" stroke-width="2" opacity="0.5">
                        <animate attributeName="d" values="M20,80 Q40,60 60,80 T100,80;M20,75 Q40,65 60,75 T100,75;M20,80 Q40,60 60,80 T100,80" dur="4s" repeatCount="indefinite"/>
                    </path>
                </svg>
            </div>
        `;
    }

    // 59. Synthwave
    function synthwavePreview(style) {
        return `
            <div style="width:100%;height:100%;background:linear-gradient(180deg,#1A0033 0%,#2D004D 30%,#FF00FF 60%,#FF6B00 80%,#FFD700 100%);position:relative;overflow:hidden;">
                <!-- Sun -->
                <div style="position:absolute;bottom:35%;left:50%;transform:translateX(-50%);width:80px;height:40px;background:linear-gradient(180deg,#FFD700,#FF6B00,#FF00FF);border-radius:80px 80px 0 0;box-shadow:0 0 40px #FF00FF,0 0 80px #FF6B00;"></div>
                <!-- Horizontal lines on sun -->
                <div style="position:absolute;bottom:42%;left:50%;transform:translateX(-50%);width:80px;height:30px;overflow:hidden;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <div style="height:2px;background:#1A0033;"></div>
                        <div style="height:3px;background:#1A0033;"></div>
                        <div style="height:4px;background:#1A0033;"></div>
                        <div style="height:5px;background:#1A0033;"></div>
                    </div>
                </div>
                <!-- Grid floor -->
                <div style="position:absolute;bottom:0;left:-20%;right:-20%;height:35%;background:linear-gradient(transparent,#1A0033 10%),repeating-linear-gradient(90deg,#00FFFF 0,#00FFFF 1px,transparent 1px,transparent 20px),repeating-linear-gradient(0deg,#00FFFF 0,#00FFFF 1px,transparent 1px,transparent 15px);transform:perspective(150px) rotateX(50deg);opacity:0.7;"></div>
                <!-- Stars -->
                <div style="position:absolute;top:10%;left:20%;width:2px;height:2px;background:#fff;border-radius:50%;box-shadow:0 0 5px #fff;"></div>
                <div style="position:absolute;top:15%;right:25%;width:2px;height:2px;background:#fff;border-radius:50%;box-shadow:0 0 5px #fff;"></div>
                <div style="position:absolute;top:8%;left:60%;width:2px;height:2px;background:#fff;border-radius:50%;box-shadow:0 0 5px #fff;"></div>
            </div>
        `;
    }

    // Generate cards
    function renderGallery(filter = 'all') {
        gallery.innerHTML = '';

        const filteredStyles = filter === 'all'
            ? stylesData
            : stylesData.filter(s => s.category === filter);

        filteredStyles.forEach((style, index) => {
            const card = document.createElement('a');
            card.className = 'style-card';
            card.href = `styles/${style.id}-${style.nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}.html`;
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <span class="card-number">#${String(style.id).padStart(2, '0')}</span>
                <span class="card-category">${style.category}</span>
                <div class="card-preview">
                    ${generatePreview(style)}
                </div>
                <div class="card-info">
                    <div class="card-name-en">${style.nameEn}</div>
                    <div class="card-name-zh">${style.nameZh}</div>
                    <div class="card-keywords">
                        ${style.keywords.slice(0, 4).map(k => `<span class="keyword-tag">${k}</span>`).join('')}
                    </div>
                </div>
                <div class="card-arrow">→</div>
            `;

            gallery.appendChild(card);
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });

    // Initial render
    renderGallery();
});
