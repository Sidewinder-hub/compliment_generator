//fetch compliment
async function fetchCompliments() {
    try {
        const response = await fetch('./data/compliments.json');
        
       if (!response.ok) {
            throw new Error(`json lukt niet`);
        } else {
            const data = await response.json();
            console.log(data);
            return data.compliments;
        }
    } catch (error) {
        console.error('Error fetching compliment:', error);
    } finally {
        console.log('Compliment fetched successfully');
    };
};

//display complimenty
function displayRandomCompliment(compliments) {
    const complimentElement = document.getElementById('compliment');
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentElement.textContent = randomCompliment;
};


// main function IIFE
(async()=>{
        const compliments = await fetchCompliments();
        const button = document.getElementById('btn');
        button.addEventListener('click', () => displayRandomCompliment(compliments)); 
        
    
})();






