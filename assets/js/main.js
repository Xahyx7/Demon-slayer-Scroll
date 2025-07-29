// Main Application Controller
class DemonSlayerEncyclopedia {
    constructor() {
        this.currentCharacter = null;
        this.isLoading = true;
        this.audioContext = null;
        this.breathingSystem = null;
        this.introSystem = null;
        this.init();
    }

    async init() {
        try {
            console.log('🔥 Initializing Demon Slayer Encyclopedia...');
            
            // Initialize systems
            this.breathingSystem = new BreathingEffectsSystem();
            this.introSystem = new IntroSequence();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Initialize audio context
            this.initializeAudio();
            
            // Start intro sequence
            await this.startApplication();
            
            console.log('✅ Encyclopedia initialized successfully!');
        } catch (error) {
            console.error('❌ Initialization failed:', error);
            this.showErrorState();
        }
    }

    async startApplication() {
        // Start intro sequence
        await this.introSystem.start();
        
        // Show main content after intro
        setTimeout(() => {
            this.showMainContent();
        }, 9000);
    }

    setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardShortcuts(e);
        });

        // Character card clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.character-card')) {
                const card = e.target.closest('.character-card');
                const character = card.getAttribute('data-character');
                this.selectCharacter(character);
            }
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Prevent right-click context menu on character cards
        document.addEventListener('contextmenu', (e) => {
            if (e.target.closest('.character-card')) {
                e.preventDefault();
            }
        });
    }

    handleKeyboardShortcuts(e) {
        const shortcuts = {
            '1': 'tanjiro',
            '2': 'nezuko', 
            '3': 'zenitsu',
            '4': 'inosuke',
            '5': 'giyu',
            '6': 'shinobu',
            '7': 'rengoku',
            '8': 'tengen',
            '9': 'muzan'
        };

        if (shortcuts[e.key]) {
            e.preventDefault();
            this.selectCharacter(shortcuts[e.key]);
        }

        // ESC to close character info
        if (e.key === 'Escape') {
            this.closeCharacterInfo();
        }
    }

    selectCharacter(character) {
        console.log(`🎯 Selected character: ${character}`);
        
        // Remove active state from all cards
        document.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('active');
        });

        // Add active state to selected card
        const selectedCard = document.querySelector(`[data-character="${character}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }

        // Update current character
        this.currentCharacter = character;

        // Trigger breathing technique
        this.playBreathingTechnique(character);

        // Show character information
        this.showCharacterInfo(character);

        // Update breathing effects
        this.breathingSystem.triggerCharacterBreathing(character);
    }

    playBreathingTechnique(character) {
        const characterData = CharacterDatabase[character];
        if (!characterData) return;

        // Get voice line
        const voiceLine = characterData.voiceLine || 'Breathing Technique!';

        // Play audio using Web Speech API
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(voiceLine);
            utterance.rate = 0.8;
            utterance.pitch = 1.1;
            utterance.volume = 0.9;
            utterance.lang = 'ja-JP'; // Japanese voice if available
            
            speechSynthesis.speak(utterance);
        }

        // Visual feedback
        this.createVisualFeedback(character);
    }

    createVisualFeedback(character) {
        const card = document.querySelector(`[data-character="${character}"]`);
        if (!card) return;

        // Scale and glow effect
        card.style.transform = 'translateY(-10px) scale(1.05)';
        card.style.transition = 'all 0.3s ease';

        // Reset after animation
        setTimeout(() => {
            card.style.transform = '';
        }, 2000);
    }

    showCharacterInfo(character) {
        const characterData = CharacterDatabase[character];
        if (!characterData) return;

        const infoPanel = document.getElementById('characterInfo');
        
        // Update background text
        document.getElementById('characterBackground').textContent = characterData.background;

        // Update techniques list
        const techniqueList = document.getElementById('techniqueList');
        techniqueList.innerHTML = '';
        
        characterData.techniques.forEach(technique => {
            const li = document.createElement('li');
            li.textContent = technique;
            techniqueList.appendChild(li);
        });

        // Update battles
        document.getElementById('keyBattles').textContent = characterData.battles;

        // Show panel with animation
        infoPanel.classList.add('active');
        infoPanel.scrollIntoView({ behavior: 'smooth' });
    }

    closeCharacterInfo() {
        const infoPanel = document.getElementById('characterInfo');
        infoPanel.classList.remove('active');
        
        // Remove active state from cards
        document.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('active');
        });
        
        this.currentCharacter = null;
    }

    showMainContent() {
        console.log('🎬 Transitioning to main content...');
        
        const introContainer = document.getElementById('introContainer');
        const mainContent = document.getElementById('mainContent');
        
        // Hide intro
        introContainer.classList.add('intro-exit');
        
        setTimeout(() => {
            introContainer.style.display = 'none';
            mainContent.classList.add('active');
            this.breathingSystem.startContinuousEffects();
        }, 1000);
    }

    initializeAudio() {
        // Initialize Web Audio API if available
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            this.audioContext = new (AudioContext || webkitAudioContext)();
        }
    }

    handleResize() {
        // Adjust layout for different screen sizes
        const width = window.innerWidth;
        
        if (width < 768) {
            document.body.classList.add('mobile');
        } else {
            document.body.classList.remove('mobile');
        }
    }

    showErrorState() {
        document.body.innerHTML = `
            <div class="error-state" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                background: var(--bg-dark);
                color: var(--text-primary);
                text-align: center;
                padding: 2rem;
            ">
                <h1 style="font-size: 2rem; margin-bottom: 1rem; color: var(--primary-fire);">
                    ⚔️ Failed to Load Encyclopedia
                </h1>
                <p style="margin-bottom: 2rem; color: var(--text-secondary);">
                    The Demon Slayer Corps encountered an error. Please refresh and try again.
                </p>
                <button onclick="location.reload()" style="
                    background: var(--primary-fire);
                    color: white;
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 1rem;
                ">
                    🔄 Refresh Page
                </button>
            </div>
        `;
    }
}

// Global function for character selection (called from HTML)
function selectCharacter(character) {
    if (window.demonSlayerApp) {
        window.demonSlayerApp.selectCharacter(character);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.demonSlayerApp = new DemonSlayerEncyclopedia();
});

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
