// Simplified Main JS - No Loading Issues
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 Starting Demon Slayer Encyclopedia...');
    
    // Skip loading and intro immediately
    const loadingScreen = document.getElementById('loadingScreen');
    const introContainer = document.getElementById('introContainer');
    const mainContent = document.getElementById('mainContent');
    
    // Hide loading and intro
    if (loadingScreen) loadingScreen.style.display = 'none';
    if (introContainer) introContainer.style.display = 'none';
    
    // Show main content
    if (mainContent) {
        mainContent.style.display = 'block';
        mainContent.classList.add('active');
    }
    
    // Start breathing effects
    const breathingBg = document.querySelector('.breathing-background');
    if (breathingBg) {
        breathingBg.style.animation = 'breathingFlow 8s ease-in-out infinite';
    }
    
    console.log('✅ Encyclopedia loaded successfully!');
});

// Character selection function
function selectCharacter(character) {
    console.log('🎯 Selected:', character);
    
    // Remove active from all cards
    document.querySelectorAll('.character-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active to selected card
    const selectedCard = document.querySelector(`[data-character="${character}"]`);
    if (selectedCard) {
        selectedCard.classList.add('active');
    }
    
    // Play voice line
    if ('speechSynthesis' in window && CharacterDatabase[character]) {
        const utterance = new SpeechSynthesisUtterance(CharacterDatabase[character].voiceLine);
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
    
    // Show character info
    showCharacterInfo(character);
}

function showCharacterInfo(character) {
    const characterData = CharacterDatabase[character];
    if (!characterData) return;
    
    const infoPanel = document.getElementById('characterInfo');
    
    // Update content
    document.getElementById('characterBackground').textContent = characterData.background;
    
    const techniqueList = document.getElementById('techniqueList');
    techniqueList.innerHTML = '';
    characterData.techniques.forEach(technique => {
        const li = document.createElement('li');
        li.textContent = technique;
        techniqueList.appendChild(li);
    });
    
    document.getElementById('keyBattles').textContent = characterData.battles;
    
    // Show panel
    infoPanel.classList.add('active');
    infoPanel.scrollIntoView({ behavior: 'smooth' });
}
