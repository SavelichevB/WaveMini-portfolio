// Initials object:

function scaleNewsCard(number) {
    try {
       if(!number) { console.log('Number Not Found'); return; }

       const news_card = document.getElementById(`news_card_${number}`);

       news_card.style.transform = 'scale(1.2)';
       news_card.style.zIndex = 100;
    }
    catch(error) {
        console.error(`Error news card: ${error}`); return;
    }
}