function display_flex(selector,show){

  var nodes=document.querySelectorAll(selector)

    

    nodes.forEach(node=>{
    if(show){
    node.classList.remove("flex")
    }else{
    node.classList.add("flex")
    }
  });
}

function display_block(selector,show){

  var nodes=document.querySelectorAll(selector)

    

    nodes.forEach(node=>{
    if(show){
    node.classList.remove("block")
    }else{
    node.classList.add("block")
    }
  });
}



const tab = document.querySelectorAll('.categories');

tab.forEach((t) => {
   t.addEventListener('mouseover', () => {
    display_block('.over_categories',false) 
    })
  t.addEventListener('mouseout', () => { display_block('.over_categories',true) })
})


display_block('.over_categories',false);