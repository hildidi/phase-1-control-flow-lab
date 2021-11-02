function scuberGreetingForFeet(travel){
  if (travel <= 400){
    return 'This one is on me!'
  } else if (travel >= 2000 && travel < 2500) {
      return `I will gladly take your thirty bucks.`
  } else 
      return 'No can do.'
  } 
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
} 

function switchOnCharmFromTip(tip){  
  switch (tip){
    case 'generous': return 'Thank you so much.';
    case 'not as generous': return 'Thank you.';
    case 'thanks for everything': return 'Bye.';
  }
};