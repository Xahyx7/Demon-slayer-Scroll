// Intro Sequence Controller
class IntroSequence {
    constructor() {
        this.currentPhase = 0;
        this.isComplete = false;
    }

    async start() {
        console.log('🎬 Starting intro sequence...');
        
        try {
            await this.playHinokamiiScene();
            await this.playLogoSequence();
            await this.playCharacterMontage();
            
            this.isComplete = true;
            console.log('✅ Intro sequence completed!');
        } catch (error) {
            console.error('❌ Intro sequence failed:', error);
            this.skipToMain();
        }
    }

    async playHinokamiiScene() {
        return new Promise((resolve) => {
            console.log('🔥 Phase 1: Hinokami Kagura scene');
            
            const scene = document.getElementById('hinokamiiScene');
            if (!scene) {
                resolve();
                return;
            }

            // Play Hinokami Kagura audio
            setTimeout(() => {
                this.playHinokamiiAudio();
            }, 500);

            // Scene duration: 3.5 seconds
            setTimeout(() => {
                scene.style.opacity = '0';
                setTimeout(() => {
                    scene.style.display = 'none';
                    resolve();
                }, 500);
            }, 3000);
        });
    }

    async playLogoSequence() {
        return new Promise((resolve) => {
            console.log('✨ Phase 2: Logo sequence');
            
            const logoContainer = document.getElementById('logoContainer');
            if (!logoContainer) {
                resolve();
                return;
            }

            // Show logo
            logoContainer.style.display = 'block';
            logoContainer.style.opacity = '1';

            // Logo duration: 2.5 seconds
            setTimeout(() => {
                logoContainer.style.opacity = '0';
                setTimeout(() => {
                    logoContainer.style.display = 'none';
                    resolve();
                }, 500);
            }, 2000);
        });
    }

    async playCharacterMontage() {
        return new Promise((resolve) => {
            console.log('🌟 Phase 3: Character montage');
            
            const montage = document.getElementById('characterMontage');
            if (!montage) {
                resolve();
                return;
            }

            // Show montage
            montage.style.display = 'block';
            montage.style.opacity = '1';

            // Animate character silhouettes
            this.animateCharacterSilhouettes();

            // Montage duration: 3 seconds
            setTimeout(() => {
                montage.style.opacity = '0';
                setTimeout(() => {
                    montage.style.display = 'none';
                    resolve();
                }, 500);
            }, 2500);
        });
    }

    playHinokamiiAudio() {
        if ('speechSynthesis' in window) {
            // First play the technique name
            const utterance = new SpeechSynthesisUtterance('Hinokami Kagura!');
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            utterance.volume = 1.0;
            utterance.lang = 'ja-JP';
            
            speechSynthesis.speak(utterance);

            // Add flame sound effect simulation
            setTimeout(() => {
                const flameSound = new SpeechSynthesisUtterance('whoosh');
                flameSound.rate = 2.0;
                flameSound.pitch = 0.5;
                flameSound.volume = 0.3;
                speechSynthesis.speak(flameSound);
            }, 1000);
        }
    }

    animateCharacterSilhouettes() {
        const silhouettes = document.querySelectorAll('.character-silhouette');
        
        silhouettes.forEach((silhouette, index) => {
            setTimeout(() => {
                silhouette.style.opacity = '1';
                silhouette.style.transform = 'scale(1)';
                
                // Add glow effect
                silhouette.style.boxShadow = '0 0 20px rgba(255,69,0,0.6)';
                
                // Individual animation based on character type
                if (silhouette.classList.contains('hashira-1')) {
                    this.addFireEffect(silhouette);
                } else if (silhouette.classList.contains('hashira-2')) {
                    this.addWaterEffect(silhouette);
                } else if (silhouette.classList.contains('hashira-3')) {
                    this.addThunderEffect(silhouette);
                } else if (silhouette.classList.contains('hashira-4')) {
                    this.addWindEffect(silhouette);
                }
            }, index * 200);
        });
    }

    addFireEffect(element) {
        element.style.background = 'linear-gradient(135deg, #ff4500 0%, #ff6600 100%)';
        element.style.animation = 'fireGlow 2s ease-in-out infinite';
    }

    addWaterEffect(element) {
        element.style.background = 'linear-gradient(135deg, #00bfff 0%, #1e90ff 100%)';
        element.style.animation = 'waterFlow 2s ease-in-out infinite';
    }

    addThunderEffect(element) {
        element.style.background = 'linear-gradient(135deg, #ffd700 0%, #ffff00 100%)';
        element.style.animation = 'thunderFlash 2s ease-in-out infinite';
    }

    addWindEffect(element) {
        element.style.background = 'linear-gradient(135deg, #32cd32 0%, #228b22 100%)';
        element.style.animation = 'windSway 2s ease-in-out infinite';
    }

    skipToMain() {
        console.log('⏭️ Skipping intro sequence');
        
        const introContainer = document.getElementById('introContainer');
        const mainContent = document.getElementById('mainContent');
        
        if (introContainer) {
            introContainer.style.display = 'none';
        }
        
        if (mainContent) {
            mainContent.classList.add('active');
        }
        
        this.isComplete = true;
    }

    // Allow users to skip intro by clicking or pressing space
    enableSkipControls() {
        const skipHandler = (e) => {
            if (e.type === 'click' || e.code === 'Space' || e.code === 'Enter') {
                if (!this.isComplete) {
                    this.skipToMain();
                    document.removeEventListener('click', skipHandler);
                    document.removeEventListener('keydown', skipHandler);
                }
            }
        };

        document.addEventListener('click', skipHandler);
        document.addEventListener('keydown', skipHandler);

        // Show skip instruction
        const skipInstruction = document.createElement('div');
        skipInstruction.innerHTML = 'Press SPACE or click to skip';
        skipInstruction.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            color: rgba(255,255,255,0.7);
            font-size: 0.9rem;
            z-index: 10001;
            background: rgba(0,0,0,0.5);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(skipInstruction);

        // Remove skip instruction after intro
        setTimeout(() => {
            if (skipInstruction.parentNode) {
                skipInstruction.parentNode.removeChild(skipInstruction);
            }
        }, 9000);
    }
}

// Additional CSS animations for intro effects
const introAnimationCSS = `
    @keyframes fireGlow {
        0%, 100% { box-shadow: 0 0 20px rgba(255,69,0,0.6); }
        50% { box-shadow: 0 0 30px rgba(255,69,0,0.9); }
    }

    @keyframes waterFlow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,191,255,0.6); }
        50% { box-shadow: 0 0 30px rgba(0,191,255,0.9); }
    }

    @keyframes thunderFlash {
        0%, 100% { box-shadow: 0 0 20px rgba(255,215,0,0.6); }
        50% { box-shadow: 0 0 30px rgba(255,215,0,0.9); }
    }

    @keyframes windSway {
        0%, 100% { 
            box-shadow: 0 0 20px rgba(50,205,50,0.6);
            transform: rotate(0deg);
        }
        50% { 
            box-shadow: 0 0 30px rgba(50,205,50,0.9);
            transform: rotate(2deg);
        }
    }
`;

// Inject intro animations
const introStyleSheet = document.createElement('style');
introStyleSheet.textContent = introAnimationCSS;
document.head.appendChild(introStyleSheet);
