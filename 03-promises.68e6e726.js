!function(){var e=document.querySelector(".form"),n=(document.querySelector("button"),document.querySelector('input[name = "amount"]')),t=document.querySelector('input[name = "delay"]');document.querySelector('input[name = "step"]');e.addEventListener("input",(function(e){})),e.addEventListener("submit",(function(e){e.preventDefault();var o=0;o<n.value&&setInterval((function(){var e,n;(e=1,n=t.value,new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}));o+=1}))}();
//# sourceMappingURL=03-promises.68e6e726.js.map
