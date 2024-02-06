document.addEventListener('partialsLoaded', () => {
    Promise.all([
        import('./activity-list.js'),
        import('./question-animation.js'),
        import('./shop-and-cafe-counter-clients.js'),
        import('./header.js'),
        import('./order-call-form.js'),
        import('./adventure_cards.js')
    ])
    .then(() => {
        console.log('All scripts loaded successfully');
    })
    .catch(error => {
        console.error('Error loading scripts:', error);
    });
});