// Poem text
const kiplingPoem = `<p>If you can <span>keep</span> your head when all about you    
Are <span>losing</span> theirs and <span>blaming</span> it on you; 
If you can <span>trust</span> yourself when all men <span>doubt</span> you,    
But make <span>allowance</span> for their doubting too; 
If you can <span>wait</span> and not be tired by waiting,    
Or, being <span>lied</span> about, don't deal in <span>lies</span>, 
Or, being <span>hated</span>, don't give way to <span>hating</span>,    
And yet don't look too good, nor talk too wise;
If you can <span>dream</span>—and not make dreams your <span>master</span>; 
If you can <span>think</span>—and not make thoughts your <span>aim</span>; 
If you can meet with <span>triumph</span> and <span>disaster</span>    
And treat those two <span>impostors</span> just the same; 
If you can bear to hear the <span>truth</span> you've spoken    
<span>Twisted</span> by knaves to make a <span>trap</span> for fools, 
Or watch the things you gave your life to <span>broken</span>,    
And <span>stoop</span> and build 'em up with wornout tools;
If you can make one <span>heap</span> of all your <span>winnings</span>    
And <span>risk</span> it on one turn of pitch-and-toss, 
And <span>lose</span>, and start again at your beginnings    
And never breathe a word about your <span>loss</span>; 
If you can <span>force</span> your heart and nerve and <span>sinew</span>    
To <span>serve</span> your turn long after they are gone, 
And so <span>hold on</span> when there is nothing in you    
Except the <span>Will</span> which says to them: "Hold on";
If you can <span>talk</span> with crowds and keep your <span>virtue</span>,    
Or <span>walk</span> with kings—nor lose the common <span>touch</span>; 
If neither <span>foes</span> nor loving friends can hurt you;    
If all men <span>count</span> with you, but none too much; 
If you can fill the unforgiving <span>minute</span> 
With sixty seconds' worth of distance <span>run</span>—    
Yours is the <span>Earth</span> and everything that's in it, 
And—which is more—you'll be a <span>Man</span>, my son!     -Rudyard Kipling</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);