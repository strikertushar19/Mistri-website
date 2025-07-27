const fs = require('fs');
const { exec } = require('child_process');

// Install sox if not already installed
const installSox = () => {
  return new Promise((resolve, reject) => {
    exec('which sox', (error) => {
      if (error) {
        console.log('Installing sox...');
        exec('brew install sox', (error) => {
          if (error) {
            reject('Failed to install sox');
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  });
};

// Generate hover sound (high-pitched, short)
const generateHoverSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/hover.mp3 synth 0.1 sine 880 gain -10 fade 0 0.1 0.05',
      (error) => {
        if (error) {
          reject('Failed to generate hover sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Generate click sound (medium pitch, sharp)
const generateClickSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/click.mp3 synth 0.15 sine 440 gain -5 fade 0 0.15 0.1',
      (error) => {
        if (error) {
          reject('Failed to generate click sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Generate success sound (ascending notes)
const generateSuccessSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/success.mp3 synth 0.15 sine 440 gain -10 fade 0 0.15 0.1 : synth 0.15 sine 880 gain -10 fade 0 0.15 0.1 : synth 0.15 sine 1320 gain -10 fade 0 0.15 0.1',
      (error) => {
        if (error) {
          reject('Failed to generate success sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Generate error sound (descending notes)
const generateErrorSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/error.mp3 synth 0.15 sine 880 gain -10 fade 0 0.15 0.1 : synth 0.15 sine 440 gain -10 fade 0 0.15 0.1 : synth 0.15 sine 220 gain -10 fade 0 0.15 0.1',
      (error) => {
        if (error) {
          reject('Failed to generate error sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Generate notification sound (gentle chime)
const generateNotificationSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/notification.mp3 synth 0.3 sine 880 gain -15 fade 0 0.3 0.2',
      (error) => {
        if (error) {
          reject('Failed to generate notification sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Generate transition sound (whoosh effect)
const generateTransitionSound = () => {
  return new Promise((resolve, reject) => {
    exec(
      'sox -n public/sounds/transition.mp3 synth 0.5 noise gain -20 fade 0 0.5 0.3',
      (error) => {
        if (error) {
          reject('Failed to generate transition sound');
        } else {
          resolve();
        }
      }
    );
  });
};

// Main function to generate all sounds
async function generateSounds() {
  try {
    await installSox();
    
    // Create sounds directory if it doesn't exist
    if (!fs.existsSync('public/sounds')) {
      fs.mkdirSync('public/sounds', { recursive: true });
    }

    console.log('Generating sounds...');
    await Promise.all([
      generateHoverSound(),
      generateClickSound(),
      generateSuccessSound(),
      generateErrorSound(),
      generateNotificationSound(),
      generateTransitionSound(),
    ]);
    console.log('All sounds generated successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

generateSounds(); 