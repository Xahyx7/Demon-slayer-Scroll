class BreathingEffectsSystem {
    constructor() {
        this.activeEffects = new Map();
        this.particleSystems = new Map();
        this.init();
    }

    init() {
        this.createBreathingBackground();
        this.startContinuousEffects();
    }

    createBreathingBackground() {
        const breathingBg = document.createElement('div');
        breathingBg.className = 'breathing-background';
        breathingBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: linear-gradient(45deg, 
                rgba(255,69,0,0.1) 0%, 
                rgba(0,191,255,0.1) 25%,
                rgba(255,215,0,0.1) 50%,
                rgba(50,205,50,0.1) 75%,
                rgba(138,43,226,0.1) 100%);
            animation: breathingFlow 8s ease-in-out infinite;
        `;
        document.body.appendChild(breathingBg);
    }

    triggerCharacterBreathing(character, technique) {
        this.createIntensiveEffect(character);
        this.playAudioEffect(technique);
        this.updateWebsiteAtmosphere(character);
    }

    createIntensiveEffect(character) {
        const effects = {
            tanjiro: this.createFireEffect,
            giyu: this.createWaterEffect,
            zenitsu: this.createThunderEffect,
            shinobu: this.createInsectEffect,
            muzan: this.createDemonEffect
        };

        const effectFunction = effects[character] || effects.tanjiro;
        effectFunction.call(this);
    }

    createFireEffect() {
        const particles = this.generateParticles(50, {
            color: '#ff4500',
            size: '6px',
            animation: 'fireParticle 2s ease-out forwards'
        });
        this.animateParticles(particles);
    }

    createWaterEffect() {
        const ripples = this.generateRipples(8, {
            color: 'rgba(0,191,255,0.3)',
            maxSize: '300px',
            animation: 'waterRipple 3s ease-out forwards'
        });
        this.animateRipples(ripples);
    }

    generateParticles(count, config) {
        const particles = [];
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${config.size};
                height: ${config.size};
                background: ${config.color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: ${config.animation};
            `;
            document.body.appendChild(particle);
            particles.push(particle);
        }
        return particles;
    }

    startContinuousEffects() {
        setInterval(() => {
            this.createAmbientParticles();
        }, 2000);
    }
}
